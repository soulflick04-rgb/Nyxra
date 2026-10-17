# Nyxra

Responsive websites and scoped enquiry tools for local businesses.

## Develop

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Open http://localhost:3000. Netlify builds with `npm run build` and publishes `out/`.

## Source

- `app/`: current Next.js pages, reusable components, CSS, metadata.
- `public/`: images and icons.
- `legacy/`: preserved previous site, not deployed.
- `scripts/verify.cjs`: browser interaction and responsive checks.
- `REDESIGN.md`: design, form behaviour, test instructions and launch checklist.

Attribution and enquiries: Nyxra Team, supportnyxra@gmail.com.
