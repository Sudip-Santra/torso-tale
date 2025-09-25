const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '_redirects');
const dest = path.join(__dirname, 'dist', '_redirects');

if (!fs.existsSync(src)) {
  console.error('_redirects file not found at', src);
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log('_redirects copied to dist/');
