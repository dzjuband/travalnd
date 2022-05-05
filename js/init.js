const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    slidesPerGroup: 2,
    slidesPerView: 'auto',
    spaceBetween: 73, 
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.special-offers__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.special-offers__next',
        prevEl: '.special-offers__prev',
    }
  });
  