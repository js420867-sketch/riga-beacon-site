import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rīgas Bākas centrs',
  description: 'Rīgas Bākas centrs — jaunumi un pasākumi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
