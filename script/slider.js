
new Swiper('.swiper',{
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
            spaceBetween: 12,
            seed: 800,
            grid: {
                rows: 1,
            },

        },
        600: {
            slidesPerView: 2,
            spaceBetween: 24,
            grid: {
                rows: 2,
            },
            seed: 800,
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3,
            spaceBetween: 24,
            grid: {
                rows: 2,
            },
            seed: 800,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 24,
            grid: {
                rows: 2,
            },
        }
      }
});
