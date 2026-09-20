const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'src', 'app');
const archiveDir = path.join(rootDir, 'archive-ev-routes');

if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true });
}

const foldersToArchive = [
  'brands',
  'ev-charger-not-charging',
  'ev-charger-repair',
  'level-2-charger-repair',
  'tesla-charger-repair',
  'sitemap-brands.xml',
  'sitemap-cities.xml'
];

foldersToArchive.forEach((folder) => {
  const src = path.join(appDir, folder);
  const dest = path.join(archiveDir, folder);
  if (fs.existsSync(src)) {
    try {
      fs.renameSync(src, dest);
      console.log(`Archived: ${folder} -> archive-ev-routes/${folder}`);
    } catch (err) {
      console.error(`Error archiving ${folder}:`, err.message);
    }
  }
});

console.log('Archiving complete.');
