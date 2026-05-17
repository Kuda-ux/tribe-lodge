/**
 * Optimize every image inside public/images/.
 *
 * - Down-sizes anything wider than MAX_WIDTH
 * - Re-encodes JPEG with mozjpeg, quality 82
 * - Strips metadata
 * - Subtle premium colour grading (slight saturation + warmth)
 *
 * Run: `npm run optimize-images`
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const DIR = path.resolve("public/images");
const MAX_WIDTH = 2200;
const QUALITY = 82;

const files = (await fs.readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const fp = path.join(DIR, file);
  const before = (await fs.stat(fp)).size;
  totalBefore += before;

  const tmp = fp + ".tmp";

  // skip the logo (img-13) — keep it crisp/large
  const isLogoLike = /img-13/i.test(file);

  await sharp(fp)
    .rotate() // honour EXIF orientation
    .resize({
      width: isLogoLike ? 1600 : MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    })
    .modulate(isLogoLike ? { brightness: 1.0 } : { saturation: 1.06, brightness: 1.02 })
    .jpeg({
      quality: QUALITY,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:4:4",
    })
    .withMetadata({})
    .toFile(tmp);

  await fs.rename(tmp, fp);

  const after = (await fs.stat(fp)).size;
  totalAfter += after;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`${file.padEnd(14)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`);
}

const savedMB = ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2);
const pctTotal = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
console.log(`\nTotal: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB → ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Saved: ${savedMB} MB (-${pctTotal}%)`);
