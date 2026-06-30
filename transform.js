const fs = require('fs');
const path = require('path');

const PAGES = [
  { folder: 'home_advocate_muhammad_ahmed', name: 'index' },
  { folder: 'about_advocate_muhammad_ahmed', name: 'about' },
  { folder: 'admin_dashboard_advocate_muhammad_ahmed', name: 'admin-dashboard' },
  { folder: 'appointment_advocate_muhammad_ahmed', name: 'appointment' },
  { folder: 'articles_advocate_muhammad_ahmed', name: 'articles' },
  { folder: 'case_process_advocate_muhammad_ahmed', name: 'case-process' },
  { folder: 'contact_advocate_muhammad_ahmed', name: 'contact' },
  { folder: 'faq_advocate_muhammad_ahmed', name: 'faq' },
  { folder: 'lawyer_profile_advocate_muhammad_ahmed', name: 'lawyer-profile' },
  { folder: 'practice_areas_advocate_muhammad_ahmed', name: 'practice-areas' },
  { folder: 'reviews_advocate_muhammad_ahmed', name: 'reviews' },
];

const EXTERNAL_CSS = '<link rel="stylesheet" href="assets/css/style.css"/>';
const EXTERNAL_JS = '<script src="assets/js/main.js"></script>';

for (const page of PAGES) {
  const sourcePath = path.join(__dirname, page.folder, 'code.html');
  const destPath = path.join(__dirname, page.name + '.html');
  let html = fs.readFileSync(sourcePath, 'utf-8');
  html = html.replace(/<style>[\s\S]*?<\/style>/g, '');
  html = html.replace(/<script(?!\s+src=)(?!\s+id="tailwind-config")[\s\S]*?<\/script>/g, '');
  html = html.replace('</head>', `  ${EXTERNAL_CSS}\n</head>`);
  html = html.replace('</body>', `${EXTERNAL_JS}\n</body>`);
  html = html.replace(/\n{3,}/g, '\n\n');
  fs.writeFileSync(destPath, html, 'utf-8');
  console.log(`✓ ${page.folder} → ${page.name}.html`);
}
console.log('Transform complete.');
