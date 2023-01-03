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
    contactName.classList.add('input__error');
  }

}
function checkNumber(){
  let numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  if (numberRegex.test(contactNumber.value.trim())){
    noErrors = true
  } else{
    noErrors = false;
    contactNumber.classList.add('input__error');
  }

}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      noErrors = false;
      contactTextArea.classList.add('input__error');
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
    contactForm.reset();
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


