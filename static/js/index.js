const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTopButton = document.querySelector('.scroll-top');
const copyButtons = document.querySelectorAll('[data-copy-target]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (scrollTopButton) {
  window.addEventListener('scroll', () => {
    scrollTopButton.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const text = target.textContent;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied!';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = 'Copy BibTeX';
        button.classList.remove('is-copied');
      }, 1600);
    } catch (error) {
      button.textContent = 'Select & copy';
      window.getSelection()?.selectAllChildren(target);
    }
  });
});
