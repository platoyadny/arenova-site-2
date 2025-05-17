  // Wrap everything inside an IIFE (Immediately Invoked Function Expression)
  (function createProjectGalleryCarousel() {
    const galleryImages = {
      1: [
        "assets/img/commercial/46-Leningradskaya-st/bedroom.jpg",
        "assets/img/commercial/46-Leningradskaya-st/toilet.jpeg",
        "assets/img/commercial/46-Leningradskaya-st/kitchen.jpeg"
      ],
      2: [
        "assets/img/commercial/Malaya-st/kitchen-details.jpg",
        "assets/img/commercial/Malaya-st/kitchen.jpg",
        "assets/img/commercial/Malaya-st/sink.jpg"
      ],
      3: [
        "assets/img/commercial/Srednerogatskaya-st/kitchen.jpg",
        "assets/img/commercial/Srednerogatskaya-st/hallway.jpg",
        "assets/img/commercial/Srednerogatskaya-st/bathroom-sink.jpg"
      ]
    };

    const currentIndexes = {};

    function updateImage(projectId) {
      const img = document.getElementById(`project-img-${projectId}`);
      if (img && galleryImages[projectId]) {
        img.src = galleryImages[projectId][currentIndexes[projectId]];
      }
    }

    window.nextImage = function (projectId) {
      if (!currentIndexes.hasOwnProperty(projectId)) currentIndexes[projectId] = 0;
      const images = galleryImages[projectId];
      currentIndexes[projectId] = (currentIndexes[projectId] + 1) % images.length;
      updateImage(projectId);
    };

    window.prevImage = function (projectId) {
      if (!currentIndexes.hasOwnProperty(projectId)) currentIndexes[projectId] = 0;
      const images = galleryImages[projectId];
      currentIndexes[projectId] = (currentIndexes[projectId] - 1 + images.length) % images.length;
      updateImage(projectId);
    };

    // Auto-initialize first image per project
    for (const projectId in galleryImages) {
      if (galleryImages.hasOwnProperty(projectId)) {
        currentIndexes[projectId] = 0;
        updateImage(projectId);
      }
    }
  })();