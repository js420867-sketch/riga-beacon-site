import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabaseServer'

export default async function AdminHome() {
  const supabase = supabaseServer()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')
  return (
    <div className="space-y-4">
      <p>Laipni lūdzam, {user.email}</p>
      <ul className="list-disc pl-6">
        <li><a className="underline" href="/admin/posts">Raksti</a></li>
        <li><a className="underline" href="/admin/events">Pasākumi</a></li>
      </ul>
    </div>
  )
}
