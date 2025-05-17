  const galleries = {
    1: {
      final: [
        "assets/img/commercial/46-Leningradskaya-st/bedroom.jpg",
        "assets/img/commercial/46-Leningradskaya-st/toilet.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/kitchen.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/livingroom-sofa.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/bathroom-sink.jpeg"
      ],
      initial: [
        "assets/img/commercial/46-Leningradskaya-st/bedroom-before.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/bathroom-before.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/kitchen-before.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/bedroom2-before.jpeg"
      ]
    },
    2: {
      final: [
        "assets/img/commercial/Malaya-st/bathroom.jpg",
        "assets/img/commercial/Malaya-st/sink.jpg",
        "assets/img/commercial/Malaya-st/kitchen.jpg",
        "assets/img/commercial/Malaya-st/livingroom.jpg"
      ],
      initial: [
        "assets/img/commercial/Malaya-st/bathroom-before.jpg",
        "assets/img/commercial/Malaya-st/sink-before.jpg",
        "assets/img/commercial/Malaya-st/kitchen-before.jpg",
        "assets/img/commercial/Malaya-st/livingroom-before.jpg"
      ]
    }
  };

  const currentIndexes = {};

  document.querySelectorAll('[data-gallery]').forEach(container => {
    const galleryId = container.dataset.gallery;
    const type = container.dataset.type;
    const img = container.querySelector('.gallery-img');
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');

    currentIndexes[galleryId] = currentIndexes[galleryId] || { final: 0, initial: 0 };

    const update = () => {
      img.src = galleries[galleryId][type][currentIndexes[galleryId][type]];
    };

    nextBtn.addEventListener('click', () => {
      const list = galleries[galleryId][type];
      currentIndexes[galleryId][type] = (currentIndexes[galleryId][type] + 1) % list.length;
      update();
    });

    prevBtn.addEventListener('click', () => {
      const list = galleries[galleryId][type];
      currentIndexes[galleryId][type] = (currentIndexes[galleryId][type] - 1 + list.length) % list.length;
      update();
    });

    update();
  });