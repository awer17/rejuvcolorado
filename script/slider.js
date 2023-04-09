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
            spaceBetween: 20,
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
