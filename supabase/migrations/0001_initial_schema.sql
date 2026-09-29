-- ============================================================
-- Schede Allenamento — schema iniziale
-- Ogni trainer (auth.users) gestisce solo i propri clienti e le loro
-- schede: nessun ruolo multiplo, RLS basata semplicemente su
-- trainer_id = auth.uid().
-- ============================================================

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  trainer_id uuid not null references auth.users (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  created_at timestamptz not null default now()
);

create index clients_trainer_id_idx on public.clients (trainer_id);

alter table public.clients enable row level security;

create policy "trainer manages own clients"
  on public.clients for all
  using (trainer_id = auth.uid())
  with check (trainer_id = auth.uid());

create table public.workout_sheets (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients (id) on delete cascade,
  trainer_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  days jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index workout_sheets_client_id_idx on public.workout_sheets (client_id);
create index workout_sheets_trainer_id_idx on public.workout_sheets (trainer_id);

alter table public.workout_sheets enable row level security;

create policy "trainer manages own workout sheets"
  on public.workout_sheets for all
  using (trainer_id = auth.uid())
  with check (trainer_id = auth.uid());
