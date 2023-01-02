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

//Home Form
const contactForm = document.querySelector('.contact__form');
const contactName = document.querySelector('.contact__name');
const contactNumber = document.querySelector('.contact__number');
const contactTextArea = document.querySelector('.contact__textarea');
const contactBtn = document.querySelector('.contact__btn');
let noErrors = true;

function checkName(){
  let nameRegex = /^[a-z0-9_-]{3,15}$/;

  if (nameRegex.test(contactName.value.trim())){
    noErrors = true
  } else{
    noErrors = false;
    contactName.style.border = '1px'
    contactName.style.borderStyle = 'solid'
    contactName.style.borderColor = 'red'
  }

}
function checkNumber(){
  let numberRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/

  if (numberRegex.test(contactNumber.value.trim())){
    noErrors = true
  } else{
    noErrors = false;
    contactName.style.border = '1px'
    contactName.style.borderStyle = 'solid'
    contactName.style.borderColor = 'red'
  }

}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      noErrors = false;
      contactName.style.border = '1px'
      contactName.style.borderStyle = 'solid'
      contactName.style.borderColor = 'red'
    } else {
      noErrors =true
    }
  });
}

const checkValues = function () {
  checkName();
  checkNumber();
  checkRequired([contactName, contactNumber, contactTextArea]);
};

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
    checkValues();
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
