-- ═══════════════════════════════════════════════════════════════════
--  LokMais — Schema Supabase
--  Rodar no SQL Editor do projeto Supabase antes de usar o painel
-- ═══════════════════════════════════════════════════════════════════

create extension if not exists pgcrypto;

-- ─── HELPERS ─────────────────────────────────────────────────────

create table if not exists public.cms_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_cms_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.cms_admins where user_id = auth.uid());
$$;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

-- ─── CONFIGURAÇÕES GLOBAIS DO SITE ───────────────────────────────

create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
  before update on public.site_settings
  for each row execute function public.set_updated_at();

-- Valores iniciais
insert into public.site_settings (key, value) values
  ('home_images',  '{"hero_lp_franqueado":"","honda_split":"","sobre_hero":"","og_cover":""}'::jsonb),
  ('global',       '{"whatsapp":"5531972285918","youtube_id":"5qap5aO4i9A","email_contato":"contato@lokmais.com","email_expansao":"expansao@lokmais.com"}'::jsonb)
on conflict (key) do nothing;

-- ─── FROTA ───────────────────────────────────────────────────────

create table if not exists public.motos (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,                      -- alias "modelo" (exigido pelo painel)
  slug           text not null unique,
  category       text,                               -- Start 160 | Fan 160 | CG 160
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  modelo         text,
  tag            text,
  preco_semanal  text,
  disponivel     text default 'Disponível',
  specs          text,
  planos         text,
  destaque       text default 'Não',
  observacao     text,
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists motos_set_updated_at on public.motos;
create trigger motos_set_updated_at
  before update on public.motos for each row execute function public.set_updated_at();

-- ─── PLANOS ──────────────────────────────────────────────────────

create table if not exists public.planos (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  nome           text,
  subtitulo      text,
  preco_semanal  text,
  duracao        text,
  destaque       text default 'Não',
  features       text,
  observacao     text,
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists planos_set_updated_at on public.planos;
create trigger planos_set_updated_at
  before update on public.planos for each row execute function public.set_updated_at();

-- ─── UNIDADES ────────────────────────────────────────────────────

create table if not exists public.units (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  numero         text,
  cidade         text,
  endereco       text,
  telefone       text,
  whatsapp       text,
  horario        text,
  maps_url       text,
  maps_link      text,
  responsavel    text,
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists units_set_updated_at on public.units;
create trigger units_set_updated_at
  before update on public.units for each row execute function public.set_updated_at();

-- ─── SIMULADOR — MOTOS ───────────────────────────────────────────

create table if not exists public.simulador_motos (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  nome           text,
  tag            text,
  preco_semanal  text,
  planos_ids     text,
  specs          text,
  ativo          text default 'Sim',
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists simulador_motos_set_updated_at on public.simulador_motos;
create trigger simulador_motos_set_updated_at
  before update on public.simulador_motos for each row execute function public.set_updated_at();

-- ─── DEPOIMENTOS ─────────────────────────────────────────────────

create table if not exists public.testimonials (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  autor          text,
  cidade_uf      text,
  avaliacao      text default '5',
  texto          text,
  tipo           text default 'Locatário',
  fonte          text default 'Google',
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists testimonials_set_updated_at on public.testimonials;
create trigger testimonials_set_updated_at
  before update on public.testimonials for each row execute function public.set_updated_at();

-- ─── FAQ ─────────────────────────────────────────────────────────

create table if not exists public.faq (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  categoria      text,
  pergunta       text,
  resposta       text,
  ordem          text,
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists faq_set_updated_at on public.faq;
create trigger faq_set_updated_at
  before update on public.faq for each row execute function public.set_updated_at();

-- ─── DEPOIMENTOS DE FRANQUEADOS ──────────────────────────────────

create table if not exists public.franchisee_testimonials (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  slug           text not null unique,
  category       text,
  status         text not null default 'published' check (status in ('published','draft')),
  is_featured    boolean not null default false,
  display_order  integer not null default 0,
  nome           text,
  cidade_uf      text,
  texto          text,
  resultado      text,
  motos          text,
  cover_image_url text,
  gallery_images jsonb not null default '[]'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

drop trigger if exists franchisee_testimonials_set_updated_at on public.franchisee_testimonials;
create trigger franchisee_testimonials_set_updated_at
  before update on public.franchisee_testimonials for each row execute function public.set_updated_at();

-- ─── LEADS (formulário de franqueado) ────────────────────────────

create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  nome       text,
  fone       text,
  email      text,
  cidade     text,
  capital    text,
  status     text not null default 'new' check (status in ('new','read','done')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads for each row execute function public.set_updated_at();

-- ═══════════════════════════════════════════════════════════════════
--  RLS POLICIES
-- ═══════════════════════════════════════════════════════════════════

alter table public.cms_admins             enable row level security;
alter table public.site_settings          enable row level security;
alter table public.motos                  enable row level security;
alter table public.planos                 enable row level security;
alter table public.units                  enable row level security;
alter table public.simulador_motos        enable row level security;
alter table public.testimonials           enable row level security;
alter table public.faq                    enable row level security;
alter table public.franchisee_testimonials enable row level security;
alter table public.leads                  enable row level security;

-- Helper macro — repete para cada tabela de conteúdo
do $$ declare t text; begin
  foreach t in array array[
    'motos','planos','units','simulador_motos',
    'testimonials','faq','franchisee_testimonials'
  ] loop
    execute format('
      drop policy if exists "public_read_%1$s" on public.%1$s;
      create policy "public_read_%1$s" on public.%1$s for select
        to anon, authenticated using (status = ''published'' or public.is_cms_admin());

      drop policy if exists "admin_insert_%1$s" on public.%1$s;
      create policy "admin_insert_%1$s" on public.%1$s for insert
        to authenticated with check (public.is_cms_admin());

      drop policy if exists "admin_update_%1$s" on public.%1$s;
      create policy "admin_update_%1$s" on public.%1$s for update
        to authenticated using (public.is_cms_admin()) with check (public.is_cms_admin());

      drop policy if exists "admin_delete_%1$s" on public.%1$s;
      create policy "admin_delete_%1$s" on public.%1$s for delete
        to authenticated using (public.is_cms_admin());
    ', t);
  end loop;
end $$;

-- site_settings — home_images público, o resto só admin
drop policy if exists "public_read_settings" on public.site_settings;
create policy "public_read_settings" on public.site_settings for select
  to anon, authenticated
  using (key in ('home_images','global') or public.is_cms_admin());

drop policy if exists "admin_write_settings" on public.site_settings;
create policy "admin_write_settings" on public.site_settings for all
  to authenticated using (public.is_cms_admin()) with check (public.is_cms_admin());

-- cms_admins
drop policy if exists "admin_read_admins" on public.cms_admins;
create policy "admin_read_admins" on public.cms_admins for select
  to authenticated using (public.is_cms_admin());

-- leads — apenas admin lê, anon insere (formulário público)
drop policy if exists "anon_insert_leads" on public.leads;
create policy "anon_insert_leads" on public.leads for insert
  to anon, authenticated with check (true);

drop policy if exists "admin_read_leads" on public.leads;
create policy "admin_read_leads" on public.leads for select
  to authenticated using (public.is_cms_admin());

drop policy if exists "admin_update_leads" on public.leads;
create policy "admin_update_leads" on public.leads for update
  to authenticated using (public.is_cms_admin()) with check (public.is_cms_admin());

-- ─── STORAGE ─────────────────────────────────────────────────────

insert into storage.buckets (id, name, public)
values ('lokmais-assets', 'lokmais-assets', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "public_read_assets" on storage.objects;
create policy "public_read_assets" on storage.objects for select
  to anon, authenticated using (bucket_id = 'lokmais-assets');

drop policy if exists "admin_upload_assets" on storage.objects;
create policy "admin_upload_assets" on storage.objects for insert
  to authenticated with check (bucket_id = 'lokmais-assets' and public.is_cms_admin());

drop policy if exists "admin_update_assets" on storage.objects;
create policy "admin_update_assets" on storage.objects for update
  to authenticated
  using (bucket_id = 'lokmais-assets' and public.is_cms_admin())
  with check (bucket_id = 'lokmais-assets' and public.is_cms_admin());

drop policy if exists "admin_delete_assets" on storage.objects;
create policy "admin_delete_assets" on storage.objects for delete
  to authenticated using (bucket_id = 'lokmais-assets' and public.is_cms_admin());

-- ═══════════════════════════════════════════════════════════════════
--  APÓS CRIAR USUÁRIO EM Authentication > Users:
--  insert into public.cms_admins (user_id) values ('UUID_DO_ADMIN');
-- ═══════════════════════════════════════════════════════════════════
