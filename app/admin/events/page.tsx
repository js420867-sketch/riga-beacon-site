import { supabaseServer } from '@/lib/supabaseServer'
import Link from 'next/link'

export default async function AdminEvents() {
  const supabase = supabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return <div>Piekļuve liegta</div>
  const { data } = await supabase.from('events').select('id,title,status').order('start_at', { ascending: false })
  const items = data || []
  return (
    <div className="space-y-4">
      <Link href="/admin/events/new" className="bg-black text-white px-3 py-2 inline-block">Jauns pasākums</Link>
      <ul className="space-y-2">
        {items.map(e => (
          <li key={e.id} className="flex items-center justify-between border p-2">
            <div>
              <div className="font-medium">{e.title}</div>
              <div className="text-xs text-gray-600">{e.status}</div>
            </div>
            <Link href={`/admin/events/${e.id}`} className="underline">Rediģēt</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
