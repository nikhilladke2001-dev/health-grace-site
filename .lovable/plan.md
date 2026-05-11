## Goal
Convert this project from TanStack Start (SSR on Cloudflare Workers) to a plain Vite + React SPA using React Router, deployable to Vercel. Keep Supabase auth/database integration intact.

## Why this is a big change
TanStack Start is an SSR framework with file-based routing, server functions, a Worker entry, and a custom Vite plugin (`@lovable.dev/vite-tanstack-config`). A Vite SPA has none of that — no SSR, no server functions, no `__root.tsx` shell, no `routeTree.gen.ts`. Every routing import and server-side helper has to be rewritten.

Also note: Lovable's own hosting runs TanStack Start on Cloudflare Workers. After this conversion, the **Lovable Publish button and Lovable preview will no longer work** the same way — you'll deploy via Vercel (GitHub → Vercel) instead. The in-editor preview may also break since the dev server expects the TanStack plugin.

## Plan

### 1. Replace build tooling
- Remove `@lovable.dev/vite-tanstack-config`, `@tanstack/react-start`, `@tanstack/react-router`, `@cloudflare/vite-plugin`, `wrangler`.
- Add `vite`, `@vitejs/plugin-react`, `react-router-dom`.
- Rewrite `vite.config.ts` to a standard React SPA config (plugin-react + path alias + tailwind).
- Delete `wrangler.jsonc`, `src/server.ts`, `src/start.ts`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`.

### 2. Replace routing
- Delete `src/routes/__root.tsx`.
- Create `src/main.tsx` (React root + BrowserRouter + QueryClientProvider).
- Create `src/App.tsx` with `<Routes>` mounting Header/Footer + page routes.
- Convert each `src/routes/*.tsx` from `createFileRoute` to plain page components under `src/pages/` (Index, About, Services, Contact, NotFound).
- Replace all `@tanstack/react-router` imports (`Link`, `useNavigate`, etc.) with `react-router-dom` equivalents.
- Update `index.html` to mount `/src/main.tsx`.

### 3. Replace server-side code
- Remove `src/integrations/supabase/client.server.ts` and `src/integrations/supabase/auth-middleware.ts` (no server in SPA).
- Simplify `src/integrations/supabase/client.ts` to use only `import.meta.env.VITE_*`.
- Any feature that previously needed a server function (e.g. booking confirmation emails) must move to a Supabase Edge Function called from the browser. The map/contact UI itself is client-only and stays.

### 4. Vercel deployment
- Update `vercel.json` to a static SPA: `buildCommand: "vite build"`, `outputDirectory: "dist"`, SPA rewrite to `/index.html`.
- Keep `.env` with `VITE_SUPABASE_*` (Vercel project env vars must mirror these).

### 5. SEO
- Replace TanStack's `head()` metadata with `react-helmet-async` per page (or static `<title>` updates).

## Technical details
- Route map: `/` → Index, `/about` → About, `/services` → Services, `/contact` → Contact, `*` → NotFound.
- `package.json` scripts become: `dev: vite`, `build: vite build`, `preview: vite preview`.
- Supabase types file (`src/integrations/supabase/types.ts`) stays as-is.
- Tailwind v4 via `@tailwindcss/vite` plugin in the new vite config.

## Confirmation needed before I start
1. **You'll lose Lovable's publish/preview flow.** After conversion, you deploy via Vercel from GitHub. Lovable's in-editor preview may not work the same. OK to proceed?
2. **Any existing/planned server-only features** (booking confirmation emails were discussed earlier) — should I scaffold them as Supabase Edge Functions, or skip for now?
3. **SEO library**: OK to add `react-helmet-async`, or skip and use plain `document.title` updates?
