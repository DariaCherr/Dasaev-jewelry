let items = document.querySelectorAll('.list-item');
const swiper = new Swiper('.gallery-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'progressbar',
    // },
    spaceBetween: 30,
    slidesPerView: 1,

    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // mousewheel: {
    //     enabled: true,
    //     sensitivity: 10,
    // },

});