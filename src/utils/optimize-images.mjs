import sharp from 'sharp';
import { globby } from 'globby';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = path.join(process.cwd(), 'public');

async function optimizeImage(file) {
  const ext = path.extname(file).toLowerCase();

  // Only process PNG, JPG, JPEG, WEBP
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;

  // Read image metadata to check size
  const image = sharp(file);
  const metadata = await image.metadata();

  // Resize if width > 1920px (or whatever you want)
  const resized = metadata.width > 1920
    ? image.resize(1920)
    : image;

  const outFile = file.replace(ext, '.webp');

  // Always write to .webp
  await resized.webp({ quality: 80 }).toFile(outFile);

  // Delete the original if not already .webp
  if (ext !== '.webp') {
    fs.unlinkSync(file);
    console.log(`Converted and replaced: ${file} → ${outFile}`);
  } else {
    // If already .webp, optimize in-place
    fs.copyFileSync(outFile, file);
    console.log(`Optimized in-place: ${file}`);
  }
}

const files = await globby([`${INPUT_DIR}/**/*.{png,jpg,jpeg,webp}`]);
for (const file of files) {
  await optimizeImage(file);
}
console.log('All images optimized and replaced with .webp!');
