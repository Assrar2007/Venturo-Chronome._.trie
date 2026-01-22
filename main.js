// HERO AUTO SLIDER
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.slide-indicator .dot');
let slideIndex = 0;

function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
}

setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 4000);

showSlide(0);

// PRODUCT EXPAND/COLLAPSE
const cards = document.querySelectorAll('.product-card');
const details = document.querySelectorAll('.product-details');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-product');
        const section = document.getElementById(id);

        details.forEach(d => {
            if (d !== section) d.style.display = 'none';
        });

        section.style.display = section.style.display === 'block' ? 'none' : 'block';

        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
    });
});
