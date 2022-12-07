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

  //splide
  var main = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );
  
  var thumbnails = new Splide( '#thumbnail-slider', {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints : {
      640: {
        fixedWidth  : 66,
        fixedHeight : 38,
      },
    },
  } );
  
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();