// Apply fade-in after load
window.addEventListener('pageshow', () => {
    document.body.classList.remove('fade-out');
  });
  
  // Handle fade-out on navigation
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:')
    ) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        if (document.body.classList.contains('fade-out')) return;
  
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });