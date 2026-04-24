# atelier-market-assets

Atelier Market product image backup repository.

This public repository stores generated product visuals for the
`mono-portfolio/apps/atelier-market` project. Firestore product documents should
reference the public CDN URL, not local development paths.

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
