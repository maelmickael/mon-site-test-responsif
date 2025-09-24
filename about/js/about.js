var swiper = new Swiper(".teams", {
    loop: true, // Boucle infinie
    autoplay: {
        delay: 1500, // 2,5s entre chaque slide
        disableOnInteraction: false, // Continue même si on clique
    },
    slidesPerView: 4, // Nombre d'éléments visibles
    spaceBetween: 30, // Espacement entre les cartes
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});