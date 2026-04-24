import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const dateKey =
  args.find((arg) => !arg.startsWith('--')) ??
  process.env.ATELIER_ASSET_DATE;
const format =
  args
    .find((arg) => arg.startsWith('--format='))
    ?.slice('--format='.length) ?? 'json';

if (!dateKey || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
  console.error('Usage: npm run list:daily -- YYYY-MM-DD [--format=json|text|markdown]');
  process.exit(1);
}

const fullDir = path.join(
  repoRoot,
  'product-visuals',
  'daily',
  dateKey,
  'full',
);
const cdnBase = `https://cdn.jsdelivr.net/gh/matty255/atelier-market-assets@main/product-visuals/daily/${dateKey}/full`;

let files = [];

try {
  files = await fs.readdir(fullDir);
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.error(`No assets found for date: ${dateKey}`);
    process.exit(1);
  }

  throw error;
}

const assets = files
  .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
  .sort((a, b) => a.localeCompare(b))
  .map((filename) => ({
    filename,
    url: `${cdnBase}/${filename.split('/').map(encodeURIComponent).join('/')}`,
  }));

if (format === 'text') {
  assets.forEach((asset) => console.log(asset.url));
} else if (format === 'markdown') {
  assets.forEach((asset) => {
    console.log(`![${asset.filename}](${asset.url})`);
  });
} else if (format === 'json') {
  console.log(
    JSON.stringify(
      {
        assets,
        cdnBase,
        count: assets.length,
        dateKey,
      },
      null,
      2,
    ),
  );
} else {
  console.error(`Unknown format: ${format}`);
  process.exit(1);
}
