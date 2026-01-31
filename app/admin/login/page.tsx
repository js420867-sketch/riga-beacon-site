"use client"
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push('/admin')
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Pieteikšanās</h1>
      <form onSubmit={signIn} className="space-y-4">
        {error && <p className="text-red-600">{error}</p>}
        <input className="border p-2 w-full" placeholder="E-pasts" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="border p-2 w-full" placeholder="Parole" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-black text-white px-4 py-2">Ieiet</button>
      </form>
    </div>
  )
}
