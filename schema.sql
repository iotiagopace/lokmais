CREATE TABLE IF NOT EXISTS cms_entries (
  id TEXT PRIMARY KEY,
  section TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT,
  category TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  is_featured INTEGER NOT NULL DEFAULT 0,
  display_order INTEGER NOT NULL DEFAULT 0,
  data TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS cms_entries_section_idx
ON cms_entries(section, display_order, created_at);

CREATE INDEX IF NOT EXISTS cms_entries_public_idx
ON cms_entries(section, status, display_order, created_at);

CREATE TABLE IF NOT EXISTS cms_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cms_leads (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  subject TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  data TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS cms_leads_created_idx
ON cms_leads(created_at DESC);
