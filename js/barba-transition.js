function waitForImages(container, timeout = 3000) {
  const images = container.querySelectorAll('img');
  const promises = [];

  images.forEach((img) => {
    if (!img.complete) {
      promises.push(new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      }));
    }
  });

  return Promise.race([
    Promise.all(promises),
    new Promise(resolve => setTimeout(resolve, timeout))
  ]);
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

barba.init({
  transitions: [
    {
      name: 'fade-entire-container',
      async leave(data) {
        // 👇 Fade out the entire container (navbar + content)
        await gsap.to(data.current.container, { opacity: 0, duration: 0.7 });
      },
      async enter(data) {
        const nextContainer = data.next.container;

        await waitForImages(nextContainer);
        await waitForNextFrame();

        // Hide initially
        gsap.set(nextContainer, { opacity: 0 });

        // Fade in
        await gsap.to(nextContainer, { opacity: 1, duration: 0.7 });
      }
    }
  ]
});