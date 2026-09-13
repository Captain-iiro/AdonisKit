# AdonisKit Documentation

This document is the complete guide for [AdonisKit](https://github.com/Captain-iiro/AdonisKit) — a production-ready AdonisJS 7 starter kit with Inertia + React, shadcn-style UI on Base UI, and a modern dashboard shell.

## Table of contents

- [AdonisKit Documentation](#adoniskit-documentation)
  - [Table of contents](#table-of-contents)
  - [Stack](#stack)
  - [Getting started](#getting-started)
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Environment](#environment)
    - [Database](#database)
    - [Demo account](#demo-account)
  - [Scripts](#scripts)
  - [Project structure](#project-structure)
  - [Routes](#routes)
    - [Public](#public)
    - [Authenticated](#authenticated)
  - [Environment variables](#environment-variables)
  - [Configuration notes](#configuration-notes)
  - [Testing](#testing)
  - [Credits](#credits)

## Stack

| Layer      | Technology                                                       |
| ---------- | ---------------------------------------------------------------- |
| Backend    | [AdonisJS 7](https://adonisjs.com)                               |
| Frontend   | [React 19](https://react.dev) + [Inertia](https://inertiajs.com) |
| UI         | [Base UI](https://base-ui.com) (shadcn-style components)         |

## Getting started

### Requirements

- **Node.js >= 24**
- A package manager (`npm`, `pnpm` or `yarn`)

### Installation

```bash
git clone https://github.com/Captain-iiro/AdonisKit adoniskit
cd adoniskit

npm install or pnpm install or yarn install
```

### Environment

Copy the example environment file and generate an application key:

```bash
cp .env.example .env
node ace generate:key
```

Run the development server with hot module replacement:

```bash
npm run dev or pnpm run or yarn run dev
```

Open [http://localhost:3333](http://localhost:3333).

### Database

By default the starter uses SQLite (stored in `tmp/db.sqlite3`) so you can start instantly. Run the migrations:

```bash
node ace migration:run
```

To use PostgreSQL or MySQL instead, update `config/database.ts` and swap the `better-sqlite3` dependency for `@adonisjs/lucid`'s `pg` / `mysql2` drivers.

### Demo account

A seeder creates a ready-to-use demo account with a verified email:

```bash
node ace db:seed
```

| Email                | Password   |
| -------------------- | ---------- |
| `demo@adoniskit.dev` | `password` |

The seeder only runs in `development` and `test` environments and is idempotent (safe to run multiple times).

## Scripts

| Command (npm) | Yarn | pnpm | Description |
| --- | --- | --- | --- |
| `npm run dev` | `yarn dev` | `pnpm dev` | Start the dev server with HMR |
| `npm run build` | `yarn build` | `pnpm build` | Create a production build |
| `npm start` | `yarn start` | `pnpm start` | Start the production server |
| `npm run test` | `yarn test` | `pnpm test` | Run the test suites |
| `npm run lint` | `yarn lint` | `pnpm lint` | Lint the codebase |
| `npm run format` | `yarn format` | `pnpm format` | Format the codebase with Prettier |
| `npm run typecheck` | `yarn typecheck` | `pnpm typecheck` | Type-check server and Inertia code |

## Project structure

```
app/
├── controllers/        HTTP controllers (auth, settings, dashboard…)
├── middleware/         Auth, guest, verified, confirm-password, inertia…
├── validators/         VineJS validation schemas
├── mails/              Transactional emails
└── exceptions/         Exception handler + error pages
inertia/
├── components/         React components (forms, ui primitives…)
├── layouts/            Auth, dashboard and default layouts
└── pages/              Inertia pages
database/
├── migrations/         Lucid migrations
└── seeders/            Database seeders (demo user)
config/                 AdonisJS configuration files
start/                  Routes, kernel and environment validation
tests/                  Japa unit + functional tests
```

## Routes

### Public

| Method   | URI                     | Description              |
| -------- | ----------------------- | ------------------------ |
| GET      | `/`                     | Landing page             |
| GET/POST | `/signup`               | Create an account        |
| GET/POST | `/login`                | Sign in                  |
| GET/POST | `/forgot-password`      | Request a password reset |
| GET/POST | `/reset-password`       | Reset the password       |
| GET      | `/verify-email/confirm` | Verify the email address |

### Authenticated

| Method    | URI                        | Description                |
| --------- | -------------------------- | -------------------------- |
| POST      | `/logout`                  | Sign out                   |
| GET/POST  | `/verify-email` (+ resend) | Email verification flow    |
| GET/POST  | `/confirm-password`        | Re-authentication          |
| GET       | `/dashboard`               | Dashboard (verified email) |
| GET/PATCH | `/settings/profile`        | Profile settings           |
| GET/PATCH | `/settings/password`       | Password settings          |
| GET       | `/settings/appearance`     | Theme settings             |
| POST      | `/settings/account/delete` | Delete the account         |

## Environment variables

| Variable         | Default                 | Description               |
| ---------------- | ----------------------- | ------------------------- |
| `APP_KEY`        | _(required)_            | Encryption key, generated |
| `APP_NAME`       | `AdonisKit`             | Application name          |
| `APP_URL`        | `http://localhost:3333` | Base URL                  |
| `HOST` / `PORT`  | `localhost` / `3333`    | Server binding            |
| `DB_*`           | SQLite                  | Database connection       |
| `SESSION_DRIVER` | `cookie`                | Session driver            |
| `MAIL_MAILER`    | `dev`                   | Mailer (`dev` or `smtp`)  |
| `MAIL_FROM_*`    | `no-reply@localhost`    | Default sender            |

## Configuration notes

- **Email verification** — the starter ships with a `dev` mailer that prints emails to the console. Set `MAIL_MAILER=smtp` (and the `SMTP_*` variables) to send real emails; from that point the email-verification middleware becomes active automatically.
- **Session** — the `cookie` driver stores an encrypted session in a cookie, which works out of the box. Use a memory or database driver for sticky sessions across processes.

## Testing

The test suite uses Japa:

```bash
npm test or pnpm test or yarn test
```

Unit tests cover helpers (e.g. the user initials utility); functional tests cover public pages and authentication redirects. Add browser tests under `tests/browser` once you configure the `browser` suite.

## Credits

This starter is heavily inspired by the [laravel/react-starter-kit](https://github.com/laravel/react-starter-kit) UI design, recreated for AdonisJS using Base UI and Tailwind CSS v4. Built on top of the official AdonisJS + Inertia + React starter with full authentication.
