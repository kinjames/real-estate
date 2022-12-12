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



  //pagination
//   let card = '<div class="property__cards flex">'+'<div class="property__cards-img-icons">'+'<div class="property__cards-img">'+'<img src="./images/img1.jpg" alt="">'+'</div>'+'<div class="property__cards-icons flex">'+'<div class="swiper__icon flex flex-ai-c">' + '<i class="fas fa-bed"></i>'+ '<span>2</span>'+'</div>' + '<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-bath"></i>'+'<span>2</span>'+'</div>'+'<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-car"></i>'+'<span>1</span>'+'</div>'+'</div>'+'</div>'+'<div class="property__cards-texts">'+'<h3>&dollar;400 / WEEK</h3>'+'<p class="property__cards-small__text">'+'Haberfield NSW 2045'+'</p>'+'<p class="property__cards-para">'+'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odit animi molestiae libero odio magni fug. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum mollitia,'+'</p>'+'</div>'+'</div>';

//   let list =document.querySelector('.property__cards-list')

//   const listArray = []
//   for (let i=0; i<5; i++) {
//     listArray.push(card)
// }

// list.innerHTML= listArray

// console.log(listArray)
