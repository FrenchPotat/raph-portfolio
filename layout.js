// layout.js
class SiteHeader extends HTMLElement {
  connectedCallback() {
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
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white shadow-inner py-6 text-center text-sm text-gray-500">
        © 2025 Raphaël Ariello • Made with ☕, ✨ and Tailwind CSS
      </footer>`;
  }
}
customElements.define('site-footer', SiteFooter);
