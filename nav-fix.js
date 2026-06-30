const fs = require('fs');
const path = require('path');

const MOBILE_SIDEBAR = `
<!-- Mobile Navigation Sidebar -->
<div class="fixed inset-0 z-50 md:hidden invisible opacity-0 transition-all duration-300" id="mobile-nav">
  <div class="absolute inset-0 bg-black/40" id="mobile-nav-backdrop"></div>
  <div class="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-primary shadow-2xl transform translate-x-full transition-transform duration-300 overflow-y-auto" id="mobile-nav-panel">
    <div class="flex items-center justify-between px-6 h-20 border-b border-white/10">
      <span class="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">Muhammad Ahmed</span>
      <button id="mobile-nav-close" class="text-white p-2 hover:text-tertiary-fixed transition-colors" aria-label="Close menu">
        <span class="material-symbols-outlined text-3xl">close</span>
      </button>
    </div>
    <nav class="flex flex-col py-8 px-6 space-y-1">
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="index.html"><span class="material-symbols-outlined text-tertiary-fixed">home</span> Home</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="about.html"><span class="material-symbols-outlined text-tertiary-fixed">info</span> About</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="practice-areas.html"><span class="material-symbols-outlined text-tertiary-fixed">gavel</span> Practice Areas</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="lawyer-profile.html"><span class="material-symbols-outlined text-tertiary-fixed">badge</span> Lawyer Profile</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="case-process.html"><span class="material-symbols-outlined text-tertiary-fixed">account_tree</span> Case Process</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="articles.html"><span class="material-symbols-outlined text-tertiary-fixed">article</span> Articles</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="faq.html"><span class="material-symbols-outlined text-tertiary-fixed">help</span> FAQ</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="reviews.html"><span class="material-symbols-outlined text-tertiary-fixed">star</span> Reviews</a>
      <a class="flex items-center gap-4 px-4 py-4 text-lg font-headline-md text-on-primary/80 hover:text-tertiary-fixed hover:bg-white/5 rounded-lg transition-all" href="contact.html"><span class="material-symbols-outlined text-tertiary-fixed">mail</span> Contact</a>
    </nav>
    <div class="p-6 border-t border-white/10 mt-auto">
      <a href="appointment.html" class="block w-full bg-tertiary-container text-primary text-center py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-tertiary-fixed transition-colors">Book Appointment</a>
    </div>
  </div>
</div>`;

const ADMIN_MOBILE_SIDEBAR = `
<!-- Mobile Admin Navigation -->
<div class="fixed inset-0 z-50 md:hidden invisible opacity-0 transition-all duration-300" id="mobile-nav">
  <div class="absolute inset-0 bg-black/40" id="mobile-nav-backdrop"></div>
  <div class="absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-primary shadow-2xl transform -translate-x-full transition-transform duration-300 overflow-y-auto" id="mobile-nav-panel">
    <div class="flex items-center justify-between px-6 h-20 border-b border-white/10">
      <span class="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">M. Ahmed</span>
      <button id="mobile-nav-close" class="text-white p-2 hover:text-tertiary-fixed transition-colors" aria-label="Close menu">
        <span class="material-symbols-outlined text-3xl">close</span>
      </button>
    </div>
    <nav class="flex flex-col py-6 px-4 space-y-1">
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="admin-dashboard.html"><span class="material-symbols-outlined text-tertiary-fixed">dashboard</span> Dashboard</a>
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-tertiary-fixed">calendar_month</span> Appointments</a>
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-tertiary-fixed">mail</span> Messages</a>
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-tertiary-fixed">gavel</span> Practice Areas</a>
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-tertiary-fixed">article</span> Articles</a>
      <a class="flex items-center gap-3 px-4 py-3 text-on-primary/80 hover:bg-white/5 hover:text-tertiary-fixed rounded-lg transition-all" href="#"><span class="material-symbols-outlined text-tertiary-fixed">star</span> Reviews</a>
    </nav>
  </div>
</div>`;

const LINK_MAP = {
  Home: 'index.html',
  About: 'about.html',
  'Practice Areas': 'practice-areas.html',
  Lawyer: 'lawyer-profile.html',
  'Case Process': 'case-process.html',
  Articles: 'articles.html',
  Contact: 'contact.html',
};

const HAMBURGER_BTN = '<button class="md:hidden text-primary p-2 hover:text-tertiary-container transition-colors" id="mobile-menu-btn" aria-label="Open menu"><span class="material-symbols-outlined text-3xl">menu</span></button>';

function fixNavHrefs(html) {
  for (const [text, url] of Object.entries(LINK_MAP)) {
    // Match: href="#" followed by > optional whitespace Text <  or inside a with matching text
    const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`href="#"([^>]*>[^<]*${escaped}[^<]*<\\/a>)`, 'g');
    html = html.replace(regex, `href="${url}"$1`);
  }
  return html;
}

function addHamburger(html) {
  if (html.includes('mobile-menu-btn')) return html;
  // Insert before the Appointment button/link
  const patterns = [
    /(<button[^>]*class="[^"]*(?:bg-primary|bg-tertiary-container|bg-primary-container)[^"]*"[^>]*>\s*Appointment[\s\S]*?<\/button>)/,
    /(<a[^>]*class="[^"]*(?:bg-primary|bg-tertiary-container|bg-primary-container)[^"]*"[^>]*>\s*Appointment[\s\S]*?<\/a>)/,
  ];
  for (const pat of patterns) {
    const match = html.match(pat);
    if (match) {
      return html.replace(pat, `${HAMBURGER_BTN}\n$1`);
    }
  }
  return html;
}

// Process files
const files = [
  { name: 'index.html', admin: false, hasHamburger: true },
  { name: 'about.html', admin: false, hasHamburger: true },
  { name: 'practice-areas.html', admin: false },
  { name: 'lawyer-profile.html', admin: false },
  { name: 'case-process.html', admin: false },
  { name: 'articles.html', admin: false },
  { name: 'contact.html', admin: false },
  { name: 'appointment.html', admin: false },
  { name: 'faq.html', admin: false },
  { name: 'reviews.html', admin: false },
  { name: 'admin-dashboard.html', admin: true },
];

for (const f of files) {
  let html = fs.readFileSync(f.name, 'utf-8');

  if (!f.admin) {
    // Fix nav hrefs
    html = fixNavHrefs(html);

    // Fix brand logo href
    html = html.replace(
      /(<a[^>]*font-headline-sm[^>]*)href="#"([^>]*>)/,
      '$1href="index.html"$2'
    );

    // Add hamburger
    if (!f.hasHamburger) {
      html = addHamburger(html);
    }

    // Add mobile sidebar
    html = html.replace('</body>', `${MOBILE_SIDEBAR}\n</body>`);
  } else {
    // Admin: add mobile hamburger + sidebar
    html = html.replace(
      '<body class="bg-background font-body-md text-on-background min-h-screen flex">',
      '<body class="bg-background font-body-md text-on-background min-h-screen flex">\n' +
      '<button class="md:hidden text-white p-2 hover:text-tertiary-fixed transition-colors fixed top-5 left-4 z-50" id="mobile-menu-btn" aria-label="Open menu"><span class="material-symbols-outlined text-3xl">menu</span></button>'
    );
    html = html.replace('</body>', `${ADMIN_MOBILE_SIDEBAR}\n</body>`);
  }

  fs.writeFileSync(f.name, html, 'utf-8');
  console.log(`✓ ${f.name}`);
}

console.log('Done.');
