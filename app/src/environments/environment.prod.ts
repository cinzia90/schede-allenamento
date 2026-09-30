// Chiave "publishable" (ex "anon"): e' pensata per stare nel frontend
// pubblico, protetta dalle policy RLS del database. La chiave "secret"
// non va MAI messa qui.
export const environment = {
  production: true,
  mock: false,
  supabaseUrl: 'https://gtqqjbnwlzpwfdpiqenw.supabase.co',
  supabaseAnonKey: 'sb_publishable_0P90D2OXcFOU7PeADhMXGA_2YHtfnnQ',
};
