# Schede Allenamento

App per personal trainer: gestione clienti e schede di allenamento (esercizi con immagine macchinario/esecuzione, serie/ripetizioni/recupero), con archivio delle schede precedenti per ogni cliente. Vedi [CLAUDE.md](./CLAUDE.md) per la specifica completa.

Nessuna registrazione self-service: un solo account trainer, con credenziali fisse (vedi sotto).

## Setup di un ambiente reale

1. **Crea un progetto Supabase** su [supabase.com](https://supabase.com).
2. Applica la migrazione in `supabase/migrations/0001_initial_schema.sql` (Supabase CLI `supabase db push`, oppure incollala nel SQL Editor della dashboard).
3. Crea l'unico account trainer da **Authentication → Users → Add user** nella dashboard Supabase (email + password a scelta).
4. Inserisci `SUPABASE_URL` e `SUPABASE_ANON_KEY` del progetto in `app/src/environments/environment.ts` (e `.prod.ts`).

## Sviluppo locale del frontend

```bash
cd app
npm install
npm start
```

## Modalità demo (senza Supabase reale)

```bash
cd app
npm install
npm run start:demo
```

`environment.demo.ts` (`mock: true`) attiva un backend finto in memoria + `localStorage` (`core/mock/mock-backend.service.ts`): clienti, schede ed esercizi funzionano end-to-end senza nessun account reale.

Account demo pre-creato:

- **Trainer**: `allenatore@schede-allenamento.it` / `SchedaForte2026!`

`environment.mock` è sempre `false` in sviluppo normale e in produzione: la modalità demo va attivata esplicitamente con `npm run start:demo` o `ng build --configuration demo`.

## Dati esercizi

Il catalogo esercizi (`app/public/data/exercises.json`) viene da [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (dominio pubblico, licenza Unlicense): 876 esercizi con muscoli coinvolti, attrezzatura e due immagini ciascuno (macchinario + esecuzione), caricate al volo da GitHub. I nomi italiani sono aggiunti con un traduttore a dizionario, senza AI (vedi CLAUDE.md).

## Test

```bash
cd app
npm run build
```
