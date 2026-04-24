# atelier-market-assets

Public backup repository for Atelier Market product images.

This repository stores generated product visuals for
`mono-portfolio/apps/atelier-market`. Firestore product documents should point
to public CDN URLs from this repository, not local development paths.

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

## Local Firebase Auth

Local Firebase credentials are intentionally ignored:

```text
.env.local
.secrets/
```

Copy them from `mono-portfolio/apps/atelier-market` when a local automation
needs to write Atelier Market Firestore documents. Do not commit those files.
