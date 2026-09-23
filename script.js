const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const downloadStatus = document.querySelector('.download-status');

document.querySelectorAll('[data-download-resume]').forEach((link) => {
  link.addEventListener('click', async (event) => {
    event.preventDefault();
    const originalText = link.textContent;
    link.textContent = 'Preparing resume…';
    link.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch(link.href, { cache: 'no-store' });
      if (!response.ok) throw new Error('Resume file is unavailable');

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const temporaryLink = document.createElement('a');
      temporaryLink.href = objectUrl;
      temporaryLink.download = 'Ankita_Pramanick_Resume.pdf';
      document.body.appendChild(temporaryLink);
      temporaryLink.click();
      temporaryLink.remove();
      URL.revokeObjectURL(objectUrl);
      if (downloadStatus) downloadStatus.textContent = 'Resume download started.';
    } catch (error) {
      if (downloadStatus) downloadStatus.textContent = 'The resume opened in a new tab. Use the PDF download button to save it.';
      window.open(link.href, '_blank', 'noopener');
    } finally {
      link.textContent = originalText;
      link.removeAttribute('aria-busy');
    }
  });
});
