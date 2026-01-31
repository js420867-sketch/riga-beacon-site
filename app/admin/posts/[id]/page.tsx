"use client"
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useParams, useRouter } from 'next/navigation'

export default function EditPost() {
  const { id } = useParams() as { id: string }
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<'draft'|'published'>('draft')
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('posts').select('*').eq('id', id).single()
      if (data) {
        setTitle(data.title || '')
        setSlug(data.slug || '')
        setExcerpt(data.excerpt || '')
        setContent(data.content?.html || '')
        setStatus(data.status || 'draft')
      }
      setLoading(false)
    })()
  }, [id])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let cover_url: string | undefined
    if (file) {
      const path = `posts/${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('media').upload(path, file)
      if (!error) cover_url = supabase.storage.from('media').getPublicUrl(path).data.publicUrl
    }
    await supabase.from('posts').update({ title, slug, excerpt, content: { html: content }, status, ...(cover_url?{cover_url}:{}) }).eq('id', id)
    router.push('/admin/posts')
  }

  if (loading) return <div>Notiek ielāde…</div>

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Rediģēt rakstu</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Nosaukums" value={title} onChange={e=>setTitle(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Slugs" value={slug} onChange={e=>setSlug(e.target.value)} />
        <textarea className="border p-2 w-full" placeholder="Kopsavilkums" value={excerpt} onChange={e=>setExcerpt(e.target.value)} />
        <textarea className="border p-2 w-full min-h-[200px]" placeholder="Saturs (HTML vai teksts)" value={content} onChange={e=>setContent(e.target.value)} />
        <div className="flex gap-2 items-center">
          <input type="file" onChange={e=>setFile(e.target.files?.[0] || null)} />
          <select value={status} onChange={e=>setStatus(e.target.value as any)} className="border p-2">
            <option value="draft">Melnraksts</option>
            <option value="published">Publicēts</option>
          </select>
        </div>
        <button className="bg-black text-white px-4 py-2">Saglabāt</button>
      </form>
    </div>
  )
}
