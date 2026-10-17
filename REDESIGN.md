# Nyxra redesign handover

## Direction
Current reference: https://github.com/meetdarji006/meet-ui.git (main landing page). Near-black backgrounds, violet glow, Outfit headings, DM Sans text, rounded glass panels, subtle particles and reveal motion. Nyxra content, starting prices, practical demos and contact features are retained. Attribution remains Nyxra Team. The earlier Lagunitas interpretation is archived and not active.

## Source and deployment
The maintained website is now `app/`. `npm run build` creates the static `out/` directory. Netlify is configured to build and publish this directory, rather than publishing the old root HTML. Archived HTML is retained under `legacy/` and is not exported. Existing public page routes are retained.

## Enquiries
The original FormSubmit recipient is retained. Success requires both an HTTP success response and a positive service acknowledgement. Errors preserve the entered information, expose a retry/email option, and never redirect to a success page. Requests time out after 15 seconds. There is a honeypot and browser validation.

The previous opaque Google Apps Script secondary dispatch was removed: it used no-cors, so the UI could not verify delivery. No production messages were sent during testing. Before launch, verify FormSubmit account activation and actual inbox delivery with a team-approved test. Automated checks intercept all form requests. A successful provider response does not prove arrival in the inbox.

## Commercial content
Approved starting packages are retained at INR 10,000 / 15,000 / 20,000. Final scope, tax, hosting, recurring charges, timelines, support and payment milestones remain proposal-specific. No fabricated clients, outcomes, testimonials, delivery dates or sales guarantees. Concepts are labelled as demonstrations; their buttons do not book appointments or send enquiries.

## Review and release
Review the local design before publishing. This change has not been pushed or deployed. Deploy the `out/` build only; never use the archived source as the publish folder. Check production contact delivery, mobile navigation, canonical domain and existing routes after release.

## QA
Run `npm run build`, then `npm run preview`. Run `node scripts/verify.cjs` with Playwright installed, or point `PLAYWRIGHT_PATH` at an available installation. It checks eleven routes at four viewport widths, mobile navigation, FAQs, concept switching, package selection and mocked form outcomes. Screenshots and results are written to `qa/`.

## Reference-style update
The prior ink/lime direction is superseded by the supplied reference direction. Motion uses passive listeners and requestAnimationFrame, with cleanup on unmount and a reduced-motion alternative. Mobile uses normal document flow instead of a pinned hero.

## Latest validation
Production export passes. Browser verification covers 44 route/viewport combinations (360, 390, 768 and 1440 px), navigation, concept interactions, form validation and mocked success/failure outcomes, scroll movement and reduced-motion behaviour. All form requests are intercepted; no live enquiries are sent.

## Current visual direction: MeetUI
The user has replaced the Lagunitas reference with https://github.com/meetdarji006/meet-ui.git. The active stylesheet is app/modern.css, informed by the main MeetUI landing page: near-black backgrounds, violet atmosphere, rounded glass panels, Outfit headings, DM Sans text, soft entry/reveal motion and subtle particles. The homepage centres the business offer and shows interactive clinic/gym/coaching concepts. Earlier red/cream styling is archived and not loaded. Components are original Nyxra implementations; no reference branding, metrics or client claims were imported. Native CSS effects respect reduced motion, and no new animation dependency is required.
