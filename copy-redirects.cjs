const fs = require('fs');
const path = require('path');

// Ensure dist directory exists (Vite should create it, but just in case)
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy Netlify _redirects file from project root to dist/
const redirectsSrc = path.join(__dirname, '_redirects');
const redirectsDest = path.join(distDir, '_redirects');

if (fs.existsSync(redirectsSrc)) {
  fs.copyFileSync(redirectsSrc, redirectsDest);
  console.log('_redirects copied to dist/');
} else {
  console.warn('_redirects file not found at', redirectsSrc);
}

// Also copy sitemap.xml from project root to dist/ so it is deployed
const sitemapSrc = path.join(__dirname, 'sitemap.xml');
const sitemapDest = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapSrc)) {
  fs.copyFileSync(sitemapSrc, sitemapDest);
  console.log('sitemap.xml copied to dist/');
} else {
  console.warn('sitemap.xml file not found at', sitemapSrc);
}

// Also copy .htaccess from project root to dist/ (for servers that use it)
const htaccessSrc = path.join(__dirname, '.htaccess');
const htaccessDest = path.join(distDir, '.htaccess');

if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log('.htaccess copied to dist/');
} else {
  console.warn('.htaccess file not found at', htaccessSrc);
}
