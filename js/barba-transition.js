function waitForImages(container) {
  const images = container.querySelectorAll('img');
  const promises = [];

  images.forEach((img) => {
    if (!img.complete) {
      promises.push(
        new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        })
      );
    }
  });

  return Promise.all(promises);
}

barba.init({
  transitions: [
    {
      name: 'fade',
      async leave(data) {
        const currentWrapper = data.current.container.querySelector('.page-wrapper');
        await gsap.to(currentWrapper, { opacity: 0, duration: 0.6 });
      },
      async enter(data) {
        const nextWrapper = data.next.container.querySelector('.page-wrapper');

        
        await waitForImages(data.next.container);

        
        gsap.set(nextWrapper, { opacity: 0 });

      
        await gsap.to(nextWrapper, { opacity: 1, duration: 0.6 });
      }
    }
  ]
});