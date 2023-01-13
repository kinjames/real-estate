let leaseCard = document.querySelectorAll('.lease__card');
let cardList = document.querySelector('.property__cards-list');

let swiperSlide = document.querySelectorAll('.swiper-slide');
let swiperHeader = document.querySelectorAll('.swiper__header');
let swiperText = document.querySelectorAll('.swiper__text');
let bed = document.querySelectorAll('.bed');
let bath = document.querySelectorAll('.bath');
let storey = document.querySelectorAll('.storey');
let swiperBtn = document.querySelectorAll('.swiper__btn-2');
let amount = document.querySelectorAll('.swiper__btn-1');
let bigImage = document.querySelectorAll('.big-image');
let date = document.querySelector('.date');


swiperBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        images()
    })
});

function images(){
    fetch('./apps/js/lease.json')
    .then(response => response.json())
    .then(data =>{
        for(i = 0; i<data.length; i++){
            for (let j = 0; j < 5; j++) {
                    bigImage[j].src = data[i].images[j];
                    date[i].innerHTML = data[i].date
            }
        }
    })
}



function mainPage(){
    fetch('./apps/js/lease.json')
    .then(response => response.json())
    .then(data =>{
        for(i = 0; i<data.length; i++){
            swiperText[i].innerHTML = data[i].header;
            swiperHeader[i].innerHTML = data[i].place;
            bed[i].innerHTML = data[i].icons.bed;
            bath[i].innerHTML = data[i].icons.shower;
            storey[i].innerHTML = data[i].icons.storey;
            amount[i].innerHTML = data[i].price;
        }
    });
}
fetch('./apps/js/lease.json')
    .then(response => response.json())
    .then(data =>{
        for(i = 0; i<data.length; i++){
            swiperText[i].innerHTML = data[i].header;
            swiperHeader[i].innerHTML = data[i].place;
            bed[i].innerHTML = data[i].icons.bed;
            bath[i].innerHTML = data[i].icons.shower;
            storey[i].innerHTML = data[i].icons.storey;
            amount[i].innerHTML = data[i].price;
        }
    });




leaseCard.forEach(card=>{
    card.addEventListener('click',()=>{
        console.log('item clicked');
        
    })
})


