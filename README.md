# atelier-market-assets

Public backup repository for Atelier Market product images.

This repository stores generated product visuals for
`mono-portfolio/apps/atelier-market`. Firestore product documents should point
to public CDN URLs from this repository, not local development paths.

This repository is intentionally not a Firebase project. It does not own
emulator scripts, Firestore writes, product entity generation, or
`mono-portfolio` branch and issue rules. See [AUTOMATION.md](./AUTOMATION.md).

## CDN URL

```text
https://cdn.jsdelivr.net/gh/matty255/atelier-market-assets@main/product-visuals/daily/YYYY-MM-DD/full/filename.jpg
```

## Structure

```text
product-visuals/
  daily/
    YYYY-MM-DD/
      full/
        filename.jpg
```

## List URLs By Date

```bash
npm run list:daily -- 2026-04-24
npm run list:daily -- 2026-04-24 --format=text
npm run list:daily -- 2026-04-24 --format=markdown
```

You can also set `ATELIER_ASSET_DATE=YYYY-MM-DD`.

## Firebase Boundary

Do not copy Firebase credentials here for automation. Keep service accounts,
emulator MJS files, Firestore preflight, and Firestore uploads in
`C:\WorkSpace\mono-portfolio`.
