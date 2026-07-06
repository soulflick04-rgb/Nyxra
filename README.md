# Nyxra Website

Premium one-page website for Nyxra, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Assets

Place your provided assets in `public/`:

- `public/logo.png`
- `public/founder.jpg`

Set the inquiry form link before launch:

```bash
NEXT_PUBLIC_INQUIRY_FORM_URL="https://your-form-link"
```

Until that link is set, the `Get Started` buttons scroll to the contact section.

Optional domain setting for deployment metadata:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain"
```

## Run

```bash
npm run dev
```

On Windows, you can also double-click `open-nyxra-site.cmd` to start the preview and open the site.

If the local server does not open, double-click `open-nyxra-offline.cmd`. It builds an offline preview and opens `out/index.html` directly, with no server required.
