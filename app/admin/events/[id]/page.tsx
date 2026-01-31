"use client"
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useParams, useRouter } from 'next/navigation'

export default function EditEvent() {
  const { id } = useParams() as { id: string }
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [start_at, setStart] = useState('')
  const [end_at, setEnd] = useState('')
  const [venue, setVenue] = useState('')
  const [age_group, setAge] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [status, setStatus] = useState<'draft'|'published'>('draft')
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('events').select('*').eq('id', id).single()
      if (data) {
        setTitle(data.title || '')
        setSlug(data.slug || '')
        setDescription(data.description?.html || '')
        setStart(data.start_at ? data.start_at.slice(0,16) : '')
        setEnd(data.end_at ? data.end_at.slice(0,16) : '')
        setVenue(data.venue || '')
        setAge(data.age_group || '')
        setCategory(data.category || '')
        setTags(data.tags || '')
        setStatus(data.status || 'draft')
      }
      setLoading(false)
    })()
  }, [id])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let cover_url: string | undefined
    if (file) {
      const path = `events/${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('media').upload(path, file)
      if (!error) cover_url = supabase.storage.from('media').getPublicUrl(path).data.publicUrl
    }
    await supabase.from('events').update({ title, slug, description: { html: description }, start_at, end_at, venue, age_group, category, tags, status, ...(cover_url?{cover_url}:{}) }).eq('id', id)
    router.push('/admin/events')
  }

  if (loading) return <div>Notiek ielāde…</div>

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Rediģēt pasākumu</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Nosaukums" value={title} onChange={e=>setTitle(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Slugs" value={slug} onChange={e=>setSlug(e.target.value)} />
        <textarea className="border p-2 w-full min-h-[160px]" placeholder="Apraksts" value={description} onChange={e=>setDescription(e.target.value)} />
        <div className="grid grid-cols-2 gap-2">
          <input type="datetime-local" className="border p-2 w-full" value={start_at} onChange={e=>setStart(e.target.value)} />
          <input type="datetime-local" className="border p-2 w-full" value={end_at} onChange={e=>setEnd(e.target.value)} />
        </div>
        <input className="border p-2 w-full" placeholder="Vieta" value={venue} onChange={e=>setVenue(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Vecuma grupa" value={age_group} onChange={e=>setAge(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Kategorija" value={category} onChange={e=>setCategory(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Birkas (komatiem)" value={tags} onChange={e=>setTags(e.target.value)} />
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
