# Local Setup

Next.js 13 (App Router) portfolio site with TypeScript, Tailwind CSS, Framer Motion, and Resend for the contact form.

## Prerequisites

- **Node.js 18.17+** (required by Next.js 13.4) — check with `node -v`
- **npm** (ships with Node) — the repo has a `package-lock.json`, so npm is the expected package manager
- A [Resend](https://resend.com) API key, only if you want the contact form to actually send email

## First-time setup

1. **Clone and enter the project**

   ```bash
   git clone <repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env.local`** in the project root:

   ```bash
   RESEND_API_KEY=re_your_key_here
   ```

   `.env.local` is gitignored — never commit it. Grab a key from the Resend dashboard under API Keys.

4. **Point the contact form at your own inbox.** In [actions/sendEmail.ts](actions/sendEmail.ts#L30), change the `to:` address to the email you want messages delivered to. With a free Resend account and the default `onboarding@resend.dev` sender, you can only send to the email address your Resend account is registered with.

5. **Start the dev server**

   ```bash
   npm run dev
   ```

   Open http://localhost:3000.

## Recurring setup (day-to-day)

```bash
git pull
npm install   # only if package.json / package-lock.json changed
npm run dev
```

`.env.local` persists locally, so there's nothing to redo there. If the pull brings in new env vars, add them to `.env.local` before starting.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on http://localhost:3000 |
| `npm run build` | Production build — run this before pushing to catch type errors |
| `npm start` | Serve the production build (must run `npm run build` first) |
| `npm run lint` | ESLint via `next lint` |

## Verifying a production build locally

```bash
npm run build
npm start
```

This is closer to what deploys, and it surfaces TypeScript and static-generation errors that `npm run dev` lets slide.

## Troubleshooting

- **Port 3000 in use** — run `npm run dev -- -p 3001`, or kill the process: `lsof -ti:3000 | xargs kill`.
- **Contact form returns an error** — the `RESEND_API_KEY` is missing or invalid, or the `to:` address isn't the one registered with your Resend account. Restart the dev server after editing `.env.local`; Next.js only reads env files at startup.
- **Stale or odd build output** — delete the cache and rebuild: `rm -rf .next && npm run dev`.
- **Dependency errors after a pull** — `rm -rf node_modules package-lock.json && npm install`.
- **Node version errors** — Next.js 13.4 needs Node 18.17 or newer; upgrade via nvm (`nvm install 18 && nvm use 18`).
