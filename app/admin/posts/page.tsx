import { supabaseServer } from '@/lib/supabaseServer'
import Link from 'next/link'

export default async function AdminPosts() {
  const supabase = supabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return <div>Piekļuve liegta</div>
  const { data } = await supabase.from('posts').select('id,title,status,slug').order('created_at', { ascending: false })
  const items = data || []
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Link href="/admin/posts/new" className="bg-black text-white px-3 py-2">Jauns raksts</Link>
        <form action="/api/rss-import" method="post">
          <button className="border px-3 py-2" type="submit">Importēt no RSS (20)</button>
        </form>
      </div>
      <ul className="space-y-2">
        {items.map(p => (
          <li key={p.id} className="flex items-center justify-between border p-2">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-gray-600">{p.status}</div>
            </div>
            <Link href={`/admin/posts/${p.id}`} className="underline">Rediģēt</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
