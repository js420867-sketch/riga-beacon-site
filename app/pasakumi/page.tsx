import { supabase } from '@/lib/supabaseClient'

export const revalidate = 300

export default async function EventsPage() {
  const { data } = await supabase
    .from('events')
    .select('id,title,slug,description,start_at,end_at,venue,cover_url,status')
    .eq('status', 'published')
    .order('start_at', { ascending: true })
    .limit(20)

  const items = data || []

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Pasākumi</h1>
      {items.length === 0 && (
        <p className="text-gray-600">Pašlaik nav gaidāmu pasākumu.</p>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((e) => (
          <li key={e.id} className="border rounded p-4">
            <h3 className="font-semibold text-lg">{e.title}</h3>
            <p className="text-gray-600 text-sm">{e.venue}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
