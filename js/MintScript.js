var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: -25,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 1800,
    autoplay: {
      delay: 1300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });