-- Enable RLS for security
alter default privileges revoke execute on functions from public;

-- Create contacts table
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  message text not null
);

-- Enable RLS on contacts
alter table public.contacts enable row level security;

-- Allow public (anon) to insert into contacts
create policy "Allow public to insert contacts"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Only allow authenticated users (admins) to view contacts
create policy "Allow authenticated to view contacts"
  on public.contacts
  for select
  to authenticated
  using (true);

-- Create applications table for careers
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  job_title text not null,
  name text not null,
  email text not null,
  phone text,
  linkedin_url text
);

-- Enable RLS on applications
alter table public.applications enable row level security;

-- Allow public (anon) to insert into applications
create policy "Allow public to insert applications"
  on public.applications
  for insert
  to anon
  with check (true);

-- Only allow authenticated users (admins) to view applications
create policy "Allow authenticated to view applications"
  on public.applications
  for select
  to authenticated
  using (true);
