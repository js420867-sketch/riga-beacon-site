import { supabase } from '@/lib/supabaseClient'

export const revalidate = 300

export default async function NewsPage() {
  const { data, error } = await supabase
    .from('posts')
    .select('id,title,slug,excerpt,cover_url,created_at,status')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(20)

  const items = data || []

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Jaunumi</h1>
      {items.length === 0 && (
        <p className="text-gray-600">Pagaidām nav rakstu. Drīzumā būs jaunumi.</p>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p) => (
          <li key={p.id} className="border rounded p-4">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
