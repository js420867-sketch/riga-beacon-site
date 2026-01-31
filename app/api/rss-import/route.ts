import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'

function extract(tag: string, xml: string) {
  const m = xml.match(new RegExp(`<${tag}>([\s\S]*?)</${tag}>`, 'i'))
  return m ? m[1].trim() : ''
}

export async function POST() {
  const supabase = supabaseServer()
  const res = await fetch('https://www.intereses.lv/feed/')
  const xml = await res.text()
  const items = Array.from(xml.matchAll(/<item>[\s\S]*?<\/item>/gi)).slice(0,20)
  const rows = items.map(m => {
    const block = m[0]
    const title = extract('title', block)
    const link = extract('link', block)
    const description = extract('description', block).replace(/<!\[CDATA\[|\]\]>/g,'')
    return { title, link, description }
  })

  for (const r of rows) {
    await supabase.from('posts').insert({
      title: r.title,
      slug: r.link?.split('/').filter(Boolean).slice(-1)[0]?.slice(0,96) || '',
      excerpt: r.description.replace(/<[^>]+>/g,'').slice(0,160),
      content: { html: r.description },
      status: 'draft'
    })
  }

  return NextResponse.json({ imported: rows.length })
}
