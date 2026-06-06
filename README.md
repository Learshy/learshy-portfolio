# Learshy Portfolio

Premium personal portfolio for **Learshy**, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js static export
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- GitHub Pages HTTPS deployment

## Install

```bash
npm install
```

## Run Local

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

The static output is generated in:

```text
out/
```

## Deploy

Deployment runs automatically on every push to `main` using GitHub Actions.

Manual deploy flow:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Edit Content

Main content lives in:

```text
data/content.ts
```

Page structure:

```text
app/page.tsx
components/
```

SEO metadata:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
public/og.svg
public/favicon.svg
```

## GitHub Pages

This project uses `output: "export"` and a GitHub Pages base path in `next.config.js`.

Production URL:

```text
https://learshy.github.io/learshy-portfolio/
```
