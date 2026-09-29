# CLAUDE.md — Vigor (nome tecnico progetto/repo: schede-allenamento)

App minimale per personal trainer (uso di Cinzia, sia per Steel Elite che per l'attività personale) per gestire clienti e le loro schede di allenamento, senza nessuna AI.

## Obiettivo (perimetro fisso, non estendere)

- Login trainer (email + password).
- Ogni trainer vede solo i **propri** clienti (nessuna condivisione tra trainer diversi).
- Inserire un cliente.
- Inserire una nuova scheda per un cliente.
- Modificare una scheda esistente.
- Eliminare una scheda.
- Ogni cliente ha uno **storico** delle schede (non si sovrascrivono: ogni salvataggio "nuova scheda" aggiunge una riga).
- Costruzione scheda: scegli numero di **giorni** → per ogni giorno scegli i **gruppi muscolari** da allenare → select con gli esercizi di quei gruppi (con foto macchinario+esecuzione) → per ogni esercizio scelto: serie, ripetizioni, recupero, nota libera.
- La scheda finale è **scaricabile in PDF** (con le immagini degli esercizi) per essere inviata al cliente via WhatsApp/email — **nessun invio automatico** dentro l'app, nessun account cliente.

**Niente altro.** Niente AI, niente generazione automatica della scheda, niente pagamenti, niente chat, niente notifiche.

## Dati esercizi

Dataset statico [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (dominio pubblico, licenza Unlicense), 876 esercizi, bundlato in `app/public/data/exercises.json`. Ogni esercizio ha: `name` (inglese), `nameIt` (italiano, tradotto con dizionario a regole — vedi sotto — nullo se non tradotto: in quel caso il frontend mostra `name`), `equipment`, `equipmentIt`, `primaryMuscles`, `primaryMusclesIt`, `category`, `level`, `images` (2 percorsi relativi per esercizio).

Le immagini **non sono bundlate**: si linkano direttamente da `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/{path}`. Dominio pubblico, nessun problema di licenza. Se in futuro servisse indipendenza da GitHub, si possono scaricare e caricare su Supabase Storage.

**Traduzione nomi**: dizionario a regole (equipaggiamento + movimento + modificatori posizione/presa), scritto una volta sola in fase di preparazione dati — zero chiamate AI a runtime. Copertura ~57% (498/876): dove il dizionario non riconosce il pattern, resta il nome inglese. Non tentare di aumentare la copertura con traduzioni automatiche via API esterne: eventuali aggiunte vanno fatte a mano nel dizionario.

## Stack

Stesso stack collaudato di `steel-elite-iscrizioni`: Angular (standalone, signals) + Supabase (Auth, Postgres con RLS, niente Storage per le immagini esercizio — vedi sopra). PDF generato lato client con `pdf-lib` (stesso pattern del contratto nell'altro progetto), immagini incorporate nel PDF a partire dagli URL GitHub.

Modalità demo (`environment.demo.ts`, `mock: true`) con lo stesso pattern di `core/mock/` dell'altro progetto, per testare senza Supabase reale e poter pubblicare una demo su GitHub Pages.

## Modello dati

- **clients**: `id`, `trainer_id` (= auth.uid() del proprietario), `first_name`, `last_name`, `notes` (nullable), `created_at`.
- **workout_sheets**: `id`, `client_id`, `trainer_id`, `title`, `days` (jsonb — struttura sotto), `created_at`.

Niente RLS con ruoli multipli: ogni trainer è "admin" di sé stesso, policy `trainer_id = auth.uid()` su entrambe le tabelle, sia per select che per insert/update/delete.

### Struttura di `days` (jsonb)

```json
[
  {
    "label": "Giorno 1 — Petto e Tricipiti",
    "muscleGroups": ["chest", "triceps"],
    "exercises": [
      {
        "exerciseId": "Barbell_Bench_Press_-_Medium_Grip",
        "sets": 4,
        "reps": "8-10",
        "rest": "90s",
        "notes": ""
      }
    ]
  }
]
```

`exerciseId` fa riferimento a `id` in `exercises.json`: il dettaglio (nome, immagini, muscoli) si recupera da lì al momento della visualizzazione/PDF, non viene duplicato nel jsonb.

## Struttura cartelle

```
/src/app
  /core        (auth, guard, servizio esercizi statico, servizio Supabase, mock)
  /features
    /clients   (lista clienti, dettaglio cliente + archivio schede)
    /sheets    (costruttore scheda, vista/modifica scheda)
  /shared      (componenti UI, modelli)
/supabase
  /migrations
```

## Regole di lavoro

- Stesse regole del progetto `steel-elite-iscrizioni`: RLS attiva sempre, mai segreti committati, codice in inglese e testi UI in italiano centralizzati, una migrazione per ogni modifica di schema.
