
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > window.innerHeight * 0.7) {
        navbar.classList.remove('bg-opacity-70');
        navbar.classList.add('bg-opacity-100');
    } else {
        navbar.classList.add('bg-opacity-70');
        navbar.classList.remove('bg-opacity-100');
    }
});