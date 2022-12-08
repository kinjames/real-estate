const menuBtn = document.querySelector("#menuBtn");
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".header_mobile_menu");


menuBtn.addEventListener('click', ()=>{
    if(mobileMenu.classList.contains('hide')){
        menuBtn.classList.add('open');
        mobileMenu.classList.remove('hide');
        body.classList.add('noscroll')
    }
    else{
        menuBtn.classList.remove('open');
        mobileMenu.classList.add('hide');
        body.classList.remove('noscroll')


    }

})

//Swiper.js

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 30,
        mousewheel: true,
        grabCursor:true,
      },
    },
  });

