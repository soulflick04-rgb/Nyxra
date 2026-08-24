const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const publicDir = path.join(__dirname, 'public');

[outDir, publicDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const filesToCopy = [
  'index.html',
  'services.html',
  'pricing.html',
  'portfolio.html',
  'about.html',
  'contact.html',
  'clinic-demo.html',
  'privacy.html',
  'terms.html',
  'thank-you.html',
  'styles.css',
  'main.js',
  'tailwind.config.js',
  'logo.png',
  'founder.jpg',
  'sample-1.png',
  'sample-2.png',
  'favicon.ico',
  'favicon-48.png',
  'apple-touch-icon.png',
  'icon.png'
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outDir, file));
    fs.copyFileSync(src, path.join(publicDir, file));
  }
});

console.log('✅ Static assets successfully compiled to out/ and public/ directories.');
