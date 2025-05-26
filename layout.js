// layout.js
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <a href="index.html" class="text-xl font-bold text-teal-600 hover:text-teal-800 transition">🧔‍♂️ Raphaël Ariello</a>
            <div class="hidden md:flex space-x-6 items-center">
              <a href="about.html" class="text-gray-700 hover:text-teal-600 font-medium">About Me</a>
              <a href="resume.html" class="text-gray-700 hover:text-teal-600 font-medium">Resume</a>
              <a href="work.html" class="text-gray-700 hover:text-teal-600 font-medium">Selected Work</a>
              <a href="contact.html" class="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>`;
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white shadow-inner py-6 text-center text-sm text-gray-500">
        © 2025 Raphaël Ariello • Made with ❤️ and Tailwind CSS
      </footer>`;
  }
}
customElements.define('site-footer', SiteFooter);
