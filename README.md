# Rīgas Bākas centrs — Next.js + Supabase CMS

This repo contains a Next.js (App Router) site with a lightweight CMS powered by Supabase and an /admin area for managing posts and events.

## Setup

1) Env vars

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For this project:
- URL: https://oyqgiatuzzjpgrnudnyz.supabase.co
- ANON: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95cWdpYXR1enpqcGdybnVkbnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NjExNjYsImV4cCI6MjA4NTQzNzE2Nn0.hQd_8LALZDd0DcH2I99qudiffMCc7IADy55dv4ryDFU

2) Supabase schema (SQL)

Run in Supabase SQL editor:

```sql
-- Storage bucket for media
insert into storage.buckets (id, name, public) values ('media','media', true) on conflict do nothing;

-- Posts
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  title text not null,
  slug text unique,
  excerpt text,
  content jsonb,
  cover_url text,
  status text check (status in ('draft','published')) default 'draft'
);
create index if not exists posts_status_idx on public.posts (status);

-- Events
create table if not exists public.events (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  title text not null,
  slug text unique,
  description jsonb,
  start_at timestamp with time zone,
  end_at timestamp with time zone,
  venue text,
  age_group text,
  category text,
  tags text,
  cover_url text,
  status text check (status in ('draft','published')) default 'draft'
);
create index if not exists events_status_idx on public.events (status);

-- Row Level Security
alter table public.posts enable row level security;
alter table public.events enable row level security;

-- Policies: allow read of published, and authenticated CRUD
create policy if not exists "Read published posts" on public.posts for select using (status = 'published');
create policy if not exists "CRUD posts for auth" on public.posts for all to authenticated using (true) with check (true);

create policy if not exists "Read published events" on public.events for select using (status = 'published');
create policy if not exists "CRUD events for auth" on public.events for all to authenticated using (true) with check (true);

-- Storage policies for media
create policy if not exists "Public read" on storage.objects for select using (bucket_id = 'media');
create policy if not exists "Authenticated write" on storage.objects for insert to authenticated with check (bucket_id = 'media');
create policy if not exists "Authenticated update" on storage.objects for update to authenticated using (bucket_id = 'media');
```

3) Admin access

- Invite admin email in Supabase Auth: ocelots777@gmail.com (invite already sent by user)
- Log in at /admin/login using email/password.

## Development

- Install deps: `npm install`
- Run dev server: `npm run dev`

## Data fetching

- Public routes `/jaunumi` and `/pasakumi` fetch from Supabase with ISR (revalidate = 300). If tables are empty, a friendly placeholder message is shown.

## Admin (/admin)

- Server-side auth protects /admin routes.
- Posts: list, create, edit. Fields: title, slug, excerpt, content (JSON wrapper of HTML), cover upload to `media` bucket, status.
- Events: list, create, edit. Fields: title, slug, description (JSON wrapper of HTML), start/end, venue, age_group, category, tags, cover upload, status.
- RSS import: `/api/rss-import` imports latest 20 items from https://www.intereses.lv/feed/ into posts as drafts. A button exists in /admin/posts to trigger.

## i18n / LV labels

- Core navigation: Galvenā, Jaunumi, Pasākumi, Par mums, Resursi, Kontakti
- Hero copy present on home page. You can extend design using components from `src/components`.

## Deploy (Vercel)

- Import repo in Vercel, set env vars (see .env.example)
- Build command: `next build`
- Output: Next.js default

## Notes

- This codebase was converted from a Lovable Vite React export to Next.js App Router structure, preserving styles/components where feasible.
- Tip: migrate any custom components from `src/components` into app routes as needed.
