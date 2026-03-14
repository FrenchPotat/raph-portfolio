// layout.js
function injectGlobalTheme() {
  if (document.getElementById('global-theme-style')) return;

  const style = document.createElement('style');
  style.id = 'global-theme-style';
  style.textContent = `
    :root {
      --bg-start: #ecfeff;
      --bg-mid: #ffffff;
      --bg-end: #fff7ed;
      --text-strong: #111827;
      --text-body: #374151;
      --text-muted: #6b7280;
      --brand: #0d9488;
      --brand-dark: #0f766e;
      --support-bg: rgba(255, 247, 237, 0.92);
      --support-border: rgba(194, 120, 62, 0.22);
      --support-text: #8a5a34;
      --support-bg-hover: rgba(255, 237, 213, 0.96);
      --border-soft: rgba(229, 231, 235, 0.95);
      --glass: rgba(255, 255, 255, 0.8);
      --shadow-soft: 0 10px 30px rgba(15, 23, 42, 0.08);
      --radius-card: 1rem;
    }

    html, body {
      min-height: 100%;
    }

    body {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      background-color: #f8fafc !important;
      background-image:
        radial-gradient(22rem 22rem at 92% 10%, rgba(204, 251, 241, 0.55), transparent 70%),
        radial-gradient(24rem 24rem at 4% 92%, rgba(255, 237, 213, 0.55), transparent 72%),
        linear-gradient(135deg, var(--bg-start) 0%, var(--bg-mid) 55%, var(--bg-end) 100%) !important;
      background-attachment: fixed;
      color: var(--text-body);
      line-height: 1.55;
    }

    main,
    section,
    site-footer {
      position: relative;
    }

    main {
      flex: 1 0 auto;
      display: block;
    }

    site-footer {
      margin-top: auto;
    }

    .page-shell {
      max-width: 72rem;
      margin: 0 auto;
      padding: 3.25rem 1.5rem 4.25rem;
    }

    .page-intro {
      max-width: 42rem;
      margin: 0 auto 2.5rem;
      text-align: center;
    }

    .page-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--support-text);
      background: var(--support-bg);
      border: 1px solid var(--support-border);
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      margin-bottom: 1rem;
    }

    .page-title {
      font-size: clamp(2.05rem, 4.4vw, 3.05rem);
      line-height: 1.04;
      font-weight: 650;
      color: var(--text-strong);
      margin-bottom: 0.7rem;
      letter-spacing: -0.02em;
      text-align: center;
    }

    .page-subtitle {
      font-size: clamp(0.98rem, 1.6vw, 1.08rem);
      color: #556070;
      max-width: 44rem;
      margin: 0 auto;
      line-height: 1.58;
      text-align: center;
    }

    .section-title {
      font-size: clamp(1.35rem, 2.2vw, 1.75rem);
      line-height: 1.15;
      font-weight: 650;
      color: var(--text-strong);
      letter-spacing: -0.015em;
    }

    .section-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--support-text);
      margin-bottom: 0.7rem;
    }

    .plain-section + .plain-section {
      border-top: 1px solid rgba(229, 231, 235, 0.78);
      padding-top: 1.9rem;
      margin-top: 1.9rem;
    }

    .summary-strip {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.9rem;
      margin: 0 0 2rem;
    }

    .summary-cell {
      border: 1px solid rgba(229, 231, 235, 0.92);
      background: rgba(255, 255, 255, 0.72);
      border-radius: 1rem;
      padding: 1rem 1rem 0.95rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    .summary-label {
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--support-text);
      margin-bottom: 0.45rem;
    }

    .summary-value {
      font-size: 1.32rem;
      line-height: 1.05;
      font-weight: 700;
      color: var(--text-strong);
      letter-spacing: -0.02em;
    }

    .summary-note {
      margin-top: 0.35rem;
      font-size: 0.9rem;
      color: #556070;
      line-height: 1.45;
    }

    .muted-proof {
      color: #6b7280;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .glass-card {
      background: var(--glass) !important;
      border: 1px solid var(--border-soft);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    .cta-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.75rem;
      background: var(--brand);
      color: white;
      font-weight: 600;
      padding: 0.65rem 1.1rem;
      transition: background-color 0.18s ease, transform 0.18s ease;
    }

    .cta-primary:hover {
      background: var(--brand-dark);
      transform: translateY(-1px);
    }

    a, button, [role="button"] {
      transition: box-shadow 0.18s ease, transform 0.18s ease, background-color 0.18s ease, color 0.18s ease;
    }

    a:focus-visible,
    button:focus-visible,
    [role="button"]:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.25);
      border-radius: 0.75rem;
    }

    .section-divider {
      height: 1px;
      background: linear-gradient(to right, rgba(13, 148, 136, 0.32), transparent);
    }

    .metric-pill {
      display: inline-flex;
      align-items: center;
      border: 1px solid rgba(13, 148, 136, 0.24);
      background: rgba(240, 253, 250, 0.8);
      color: #0f766e;
      padding: 0.2rem 0.55rem;
      border-radius: 9999px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .ui-chip {
      display: inline-flex;
      align-items: center;
      border: 1px solid var(--support-border);
      background: var(--support-bg-hover);
      color: var(--support-text);
      border-radius: 9999px;
      padding: 0.26rem 0.72rem;
      font-size: 0.74rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      line-height: 1;
    }

    .case-toc {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0 0 2rem;
      position: static;
      padding: 0.65rem;
      background: rgba(255, 255, 255, 0.76);
      border: 1px solid var(--border-soft);
      border-radius: 0.9rem;
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
    }

    .case-toc a {
      font-size: 0.82rem;
      font-weight: 600;
      color: #4b5563;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 9999px;
      padding: 0.38rem 0.7rem;
      text-decoration: none;
    }

    .case-toc a:hover {
      color: #0f766e;
      border-color: rgba(13, 148, 136, 0.35);
      background: rgba(240, 253, 250, 0.8);
    }

    @media (max-width: 768px) {
      .page-shell {
        padding: 2.15rem 1rem 2.9rem;
      }

      .page-intro {
        margin-bottom: 2rem;
      }

      .page-title {
        font-size: clamp(1.9rem, 8vw, 2.4rem);
        margin-bottom: 0.55rem;
      }

      .page-subtitle {
        font-size: 0.96rem;
        line-height: 1.5;
      }

      .section-title {
        font-size: 1.28rem;
      }

      .plain-section + .plain-section {
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }

      .summary-strip {
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }

      .summary-cell {
        padding: 0.95rem 0.95rem 0.9rem;
      }

      .summary-value {
        font-size: 1.18rem;
      }

      .glass-card {
        border-radius: 0.9rem;
      }
    }
  `;
  document.head.appendChild(style);
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    injectGlobalTheme();
    this.innerHTML = `
      <nav class="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <a href="index.html" class="text-xl font-bold text-teal-600 hover:text-teal-800 transition">
              Raphaël Ariello
            </a>
            <div class="md:hidden">
              <button id="menu-btn" class="text-gray-700 focus:outline-none" aria-label="Toggle navigation">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div class="hidden md:flex space-x-6 items-center">
              <a href="about.html" class="text-gray-700 hover:text-teal-600 font-medium">About Me</a>
              <a href="resume.html" class="text-gray-700 hover:text-teal-600 font-medium">Resume</a>
              <a href="work.html" class="text-gray-700 hover:text-teal-600 font-medium">Selected Work</a>
              <a href="contact.html" class="text-gray-700 hover:text-teal-600 font-medium">
                <span class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">Contact me</span>
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-menu" class="md:hidden hidden px-4 pb-4 space-y-2">
          <a href="about.html" class="block text-gray-700 hover:text-teal-600">About Me</a>
          <a href="resume.html" class="block text-gray-700 hover:text-teal-600">Resume</a>
          <a href="work.html" class="block text-gray-700 hover:text-teal-600">Selected Work</a>
          <a href="contact.html" class="block text-gray-700 hover:text-teal-600">Contact me</a>
        </div>
      </nav>`;

    const menuBtn = this.querySelector('#menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const links = this.querySelectorAll('nav a[href]');
    const current = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
      if (link.getAttribute('href') === current) {
        link.classList.add('text-teal-700', 'font-semibold');
      }
    });
  }
}
if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    injectGlobalTheme();
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="bg-white shadow-inner py-6 text-center text-sm text-gray-500">
        © ${year} Raphaël Ariello • Made with ☕, ✨ and Tailwind CSS
      </footer>`;
  }
}
if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}

// Ensure theme styles are injected even if custom elements fail to initialize.
injectGlobalTheme();
