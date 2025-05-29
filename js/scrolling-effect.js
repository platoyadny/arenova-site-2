gsap.registerPlugin(ScrollTrigger);

// Pin Section A while scrolling
ScrollTrigger.create({
  trigger: "#section-a-wrapper",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true
});