new Swiper('.mySwiper',{
    navigation: {
        nextEl: '._next',
        prevEl: '._prev',
        },
    pagination: {
        el: '.pagination',
        type: 'progressbar',
    },
    
    mousewheel: {
        forceToAxis: true,
    }, 
    seed: 800,
    breakpoints: {
        300:{
            slidesPerView: 1.2,
            spaceBetween: 20,
            seed: 800,
            grid: {
                rows: 1,
            },

        },
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
            grid: {
                rows: 2,
            },
            seed: 800,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 24,
            grid: {
                rows: 2,
            },
            seed: 800,
        },
    }
});

var swiper2 = new Swiper(".stok_swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
  },
});
