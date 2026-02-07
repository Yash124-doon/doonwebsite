const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function scanDir(dir, extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanDir(fullPath, extensions));
    } else if (extensions.includes(path.extname(file).toLowerCase())) {
      files.push(fullPath);
    }
  });
  return files;
}

async function convertAllImages() {
  const images = scanDir('.', ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']);
  console.log(`Found ${images.length} images to convert.`);

  for (const imgPath of images) {
    const dirname = path.dirname(imgPath);
    const ext = path.extname(imgPath);
    const basename = path.basename(imgPath, ext);
    const avifPath = path.join(dirname, basename + '.avif');
    const webpPath = path.join(dirname, basename + '.webp');

    try {
      const buffer = fs.readFileSync(imgPath);

      // Convert to AVIF
      await sharp(buffer).avif({ quality: 80, effort: 6 }).toFile(avifPath);

      // Convert to WebP
      await sharp(buffer).webp({ quality: 80, effort: 6 }).toFile(webpPath);

      console.log(`Converted ${imgPath} to AVIF (${avifPath}) and WebP (${webpPath})`);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err);
    }
  }

  console.log('Conversion complete.');
}

async function convertImages() {
  const images = scanDir('images');
  console.log(`Found ${images.length} large images to convert.`);

  for (const imgPath of images) {
    const dirname = path.dirname(imgPath);
    const ext = path.extname(imgPath);
    const basename = path.basename(imgPath, ext);
    const avifPath = path.join(dirname, basename + '.avif');
    const webpPath = path.join(dirname, basename + '.webp');

    try {
      const buffer = fs.readFileSync(imgPath);

      // Convert to AVIF
      await sharp(buffer).avif({ quality: 80, effort: 6 }).toFile(avifPath);

      // Convert to WebP
      await sharp(buffer).webp({ quality: 80, effort: 6 }).toFile(webpPath);

      console.log(`Converted ${imgPath} to AVIF (${avifPath}) and WebP (${webpPath})`);
    } catch (err) {
      console.error(`Error converting ${imgPath}:`, err);
    }
  }

  console.log('Conversion complete.');
}

async function convertSelectedFolders() {
  const folders = ['Tarun', 'SELECTED PHOTOGRAPHS FOR WEBSITE_'];
  let totalImages = 0;

  for (const folder of folders) {
    if (!fs.existsSync(folder)) {
      console.log(`Folder ${folder} does not exist, skipping.`);
      continue;
    }

    const images = scanDir(folder, ['.jpg', '.jpeg', '.png']);
    console.log(`Found ${images.length} images in ${folder}.`);
    totalImages += images.length;

    for (const imgPath of images) {
      const dirname = path.dirname(imgPath);
      const ext = path.extname(imgPath);
      const basename = path.basename(imgPath, ext);
      const avifPath = path.join(dirname, basename + '.avif');
      const webpPath = path.join(dirname, basename + '.webp');

      try {
        const buffer = fs.readFileSync(imgPath);

        // Convert to AVIF with quality adjustment to ensure <1MB
        let avifQuality = 70;
        let avifSize = Infinity;
        let avifResize = 1.0;
        while (avifSize > 1048576 && (avifQuality >= 50 || avifResize > 0.5)) {
          const resizedBuffer = avifResize < 1.0 ? await sharp(buffer).resize(Math.round((await sharp(buffer).metadata()).width * avifResize), Math.round((await sharp(buffer).metadata()).height * avifResize)).toBuffer() : buffer;
          await sharp(resizedBuffer).avif({ quality: avifQuality, effort: 6 }).toFile(avifPath);
          const stat = fs.statSync(avifPath);
          avifSize = stat.size;
          if (avifSize > 1048576) {
            if (avifQuality > 50) {
              avifQuality -= 5;
            } else {
              avifResize *= 0.9;
            }
          }
        }
        console.log(`Converted ${imgPath} to AVIF (${avifPath}, ${(avifSize / 1024).toFixed(2)}KB, quality: ${avifQuality}, resize: ${(avifResize * 100).toFixed(0)}%)`);

        // Convert to WebP with quality adjustment to ensure <1MB
        let webpQuality = 80;
        let webpSize = Infinity;
        let webpResize = 1.0;
        while (webpSize > 1048576 && (webpQuality >= 50 || webpResize > 0.5)) {
          const resizedBuffer = webpResize < 1.0 ? await sharp(buffer).resize(Math.round((await sharp(buffer).metadata()).width * webpResize), Math.round((await sharp(buffer).metadata()).height * webpResize)).toBuffer() : buffer;
          await sharp(resizedBuffer).webp({ quality: webpQuality, effort: 6 }).toFile(webpPath);
          const stat = fs.statSync(webpPath);
          webpSize = stat.size;
          if (webpSize > 1048576) {
            if (webpQuality > 50) {
              webpQuality -= 5;
            } else {
              webpResize *= 0.9;
            }
          }
        }
        console.log(`Converted ${imgPath} to WebP (${webpPath}, ${(webpSize / 1024).toFixed(2)}KB, quality: ${webpQuality}, resize: ${(webpResize * 100).toFixed(0)}%)`);

      } catch (err) {
        console.error(`Error converting ${imgPath}:`, err);
      }
    }
  }

console.log(`Processed ${totalImages} images from selected folders.`);
}

async function deleteOriginals() {
  const folders = ['Tarun', 'SELECTED PHOTOGRAPHS FOR WEBSITE_'];
  let deletedCount = 0;

  for (const folder of folders) {
    if (!fs.existsSync(folder)) {
      console.log(`Folder ${folder} does not exist, skipping.`);
      continue;
    }

    const images = scanDir(folder, ['.jpg', '.jpeg']);
    console.log(`Found ${images.length} JPG/JPEG files in ${folder} to delete.`);

    for (const imgPath of images) {
      try {
        fs.unlinkSync(imgPath);
        console.log(`Deleted ${imgPath}`);
        deletedCount++;
      } catch (err) {
        console.error(`Error deleting ${imgPath}:`, err);
      }
    }
  }

  console.log(`Deleted ${deletedCount} original JPG/JPEG files.`);
}

async function removeLargeOriginals() {
  const allImages = scanDirWithoutSize('images').filter(img => ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(path.extname(img).toLowerCase()));
  let removedCount = 0;

  for (const imgPath of allImages) {
    try {
      const stat = fs.statSync(imgPath);
      if (stat.size > 1048576) { // >1MB
        fs.unlinkSync(imgPath);
        console.log(`Removed large original: ${imgPath}`);
        removedCount++;
      }
    } catch (err) {
      console.error(`Error checking/removing ${imgPath}:`, err);
    }
  }

  console.log(`Removed ${removedCount} large original images.`);
}

function scanDirWithoutSize(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(scanDirWithoutSize(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

async function optimizeLargeImages() {
  const extensions = ['.avif', '.webp'];
  const images = scanDir('.', extensions);

  console.log(`Found ${images.length} AVIF/WebP images to check for optimization.`);

  for (const imgPath of images) {
    try {
      const stat = fs.statSync(imgPath);
      if (stat.size <= 1048576) continue; // Already <1MB

      console.log(`Optimizing ${imgPath} (${(stat.size / 1024 / 1024).toFixed(2)}MB)`);

      // Backup original
      const backupPath = imgPath + '.bak';
      fs.renameSync(imgPath, backupPath);

      // Get metadata
      const metadata = await sharp(backupPath).metadata();

      // Calculate new dimensions (max 2000px on longest side)
      let width = metadata.width;
      let height = metadata.height;
      const maxDim = 2000;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      // Re-encode with resize and quality 70
      const ext = path.extname(imgPath);
      if (ext === '.avif') {
        await sharp(backupPath).resize(width, height).avif({ quality: 70, effort: 6 }).toFile(imgPath);
      } else if (ext === '.webp') {
        await sharp(backupPath).resize(width, height).webp({ quality: 70, effort: 6 }).toFile(imgPath);
      }

      console.log(`Optimized ${imgPath} to ${width}x${height}`);

    } catch (err) {
      console.error(`Error optimizing ${imgPath}:`, err);
    }
  }

  console.log('Optimization complete.');
}

function deleteBakFiles(dir = 'images') {
  let count = 0;

  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.bak')) {
        fs.unlinkSync(fullPath);
        console.log(`Deleted ${fullPath}`);
        count++;
      }
    }
  }

  walk(dir);
  console.log(`Deleted ${count} .bak files.`);
}

deleteBakFiles();

// deleteOriginals();

module.exports = { convertImages, convertAllImages, convertSelectedFolders, removeLargeOriginals, optimizeLargeImages };
