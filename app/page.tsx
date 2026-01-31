import Link from 'next/link'

export const revalidate = 300

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Rīgas Bākas centrs</h1>
        <p className="text-lg text-gray-600">Atbalsts jauniešiem un vecākiem. Kopienas resurss Rīgā.</p>
      </section>
      <nav className="flex justify-center gap-4">
        <Link href="/jaunumi" className="underline">Jaunumi</Link>
        <Link href="/pasakumi" className="underline">Pasākumi</Link>
        <Link href="/par-mums" className="underline">Par mums</Link>
        <Link href="/resursi" className="underline">Resursi</Link>
        <Link href="/kontakti" className="underline">Kontakti</Link>
      </nav>
    </main>
  )
}
