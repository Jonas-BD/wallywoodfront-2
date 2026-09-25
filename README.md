# Wallywood frontend

Wallywood er en React-baseret frontend til en filmplakatbutik. Brugeren kan se tilfældigt udvalgte plakater, gå på opdagelse efter genre, åbne detaljer om en plakat, læse om Wallywood, finde kontaktoplysninger og logge ind.

Frontend og API ligger i hver sin mappe i workspace:

```text
wallywoodfront-2/  # React, TypeScript og Vite
my-api/            # Express, TypeScript og Prisma
```

## Teknologier

- React 19 med TypeScript
- Vite til udvikling og build
- React Router til navigation
- styled-components og Sass til styling
- Express API med Prisma
- Oxlint til linting

## Kom i gang

### Forudsætninger

- Node.js og npm
- En installeret og konfigureret database til API'et

Installer dependencies i begge projektmapper:

```bash
cd wallywoodfront-2
npm install

cd ../Wallywood/my-api
npm install
```

### Miljøvariabler

Opret `wallywoodfront-2/.env` med URL'en til API'et:

```env
VITE_API_URL=http://localhost:3000
```

API'et bruger sine egne miljøvariabler til Prisma og login. Se API'ets Prisma- og serveropsætning for de nødvendige database- og JWT-værdier.

### Start frontend og API

Start API'et i én terminal:

```bash
cd Wallywood/my-api
npm run dev
```

Start frontend'en i en anden terminal:

```bash
cd wallywoodfront-2
npm run dev
```

Frontend'en er som standard tilgængelig på [http://localhost:5173](http://localhost:5173), og API'et på [http://localhost:3000](http://localhost:3000). API'et tillader allerede requests fra frontendens Vite-origin.

## Frontendens routes

| Route | Funktion |
| --- | --- |
| `/` | Forside med fire tilfældige plakater |
| `/posters` | Plakater, som viderestiller til genren `drama` |
| `/posters/:genreSlug` | Plakater filtreret efter genre |
| `/posters/:genreSlug/:posterId` | Detaljer om en plakat |
| `/about` | Om Wallywood |
| `/contact` | Kontakt |
| `/login` | Login og logout |

Ukendte routes viser en fejlside.

## API-integration

API-adressen bygges i `src/config/api.ts` ud fra `VITE_API_URL`:

- `GET /api/posters` henter plakater
- `GET /api/posters?genreSlug=:genreSlug` henter plakater efter genre
- `GET /api/posters/:posterId` henter én plakat
- `GET /api/genres` henter genrer
- `POST /login` logger en bruger ind

Login-brugerens data gemmes i browserens `localStorage`, så login-tilstanden bevares ved genindlæsning. Datahentning til plakater og genrer er samlet i hooks under `src/hooks`.

## Projektstruktur

```text
src/
├── components/    # Atoms, molecules og organisms
├── config/        # API-konfiguration
├── context/       # Global login-tilstand
├── hooks/         # Datahentning og auth-hooks
├── layout/        # Fælles layout og content wrapper
├── pages/         # Sider og route-specifik styling
├── styled/        # Theme, globale styles og layout styles
├── types/         # TypeScript-typer fra API'et
└── utils/         # Genbrugelige hjælpefunktioner
```

## Scripts

Kør kommandoerne fra `wallywoodfront-2`:

| Kommando | Beskrivelse |
| --- | --- |
| `npm run dev` | Starter Vite i development mode |
| `npm run build` | Typechecker og bygger frontend til produktion |
| `npm run lint` | Kører Oxlint |
| `npm run preview` | Viser det byggede projekt lokalt |

API'et har tilsvarende scripts til development, build, start og Prisma-migrationer i `Wallywood/my-api/package.json`.
