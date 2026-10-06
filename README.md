# Wolf in Balance

Website van diëtistenpraktijk Wolf in Balance — https://wolfinbalance.nl

Vite + React + TypeScript + Tailwind (shadcn/ui). Statische site, gehost op GitHub Pages.

## Lokaal draaien

```sh
npm ci
npm run dev
```

## Deploy

Elke push naar `main` bouwt de site en publiceert `dist/` via GitHub Actions
(`.github/workflows/deploy.yml`). Het eigen domein staat in `public/CNAME`.

## Contactformulier

Het formulier op `/contact` verstuurt via [FormSubmit](https://formsubmit.co)
naar afspraak@wolfinbalance.nl. Er is geen eigen backend.
