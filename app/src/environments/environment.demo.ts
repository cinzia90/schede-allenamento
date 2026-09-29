// Modalità demo: nessun Supabase reale richiesto. Dati in memoria +
// localStorage (vedi core/mock). Mai usata in produzione.
export const environment = {
  production: false,
  mock: true,
  supabaseUrl: 'https://placeholder.supabase.co',
  supabaseAnonKey: 'placeholder-anon-key',
};
