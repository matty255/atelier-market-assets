# Automation Boundary

Keep this repository boring on purpose.

## This Repo Owns

- Public product image files under `product-visuals/`.
- Date-based CDN URL lookup with `npm run list:daily -- YYYY-MM-DD`.
- Simple `main` branch commits for image additions.

## This Repo Does Not Own

- Firebase emulator seed scripts.
- Firestore product entity generation.
- Cloud Firestore writes.
- GitHub issue or app branch workflow rules from `mono-portfolio`.
- Service account files or Firebase runtime configuration.

## Daily Flow

1. Generate product entities and local images from `C:\WorkSpace\mono-portfolio`.
2. Copy only the generated JPG files into this repository:

   ```text
   product-visuals/daily/YYYY-MM-DD/full/
   ```

3. Commit and push this repository directly to `main`.
4. Read public CDN URLs from this repository:

   ```bash
   npm run list:daily -- YYYY-MM-DD --format=json
   ```

5. Go back to `C:\WorkSpace\mono-portfolio` for Firestore preflight and writes.

## Rule Of Thumb

If a task mentions emulator, Firestore, categories, catalog shelves, products,
service accounts, or Firebase credentials, it belongs in `mono-portfolio`.

If a task mentions JPG files or CDN URLs, it can happen here.
