
gsap.registerPlugin(ScrollTrigger);

const elementsToReveal = [
"#desc-title",
"#desc-line-1",
"#desc-line-2",
"#desc-line-3",
"#desc-button" // Now this is in sync!
];

elementsToReveal.forEach((selector, i) => {
gsap.fromTo(selector,
    { opacity: 0, y: 40 },
    {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.1,
    scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
    }
);
});