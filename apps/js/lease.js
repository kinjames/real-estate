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
let links = document.querySelectorAll('.lin')
let lin_1 = document.querySelector('.link-1')


// main variables

let bedroom = document.querySelectorAll('.bedroom');
let livingroom = document.querySelectorAll('.livingroom');
let kitchen = document.querySelectorAll('.kitchen');
let dinning = document.querySelectorAll('.dinning');
let bathroom = document.querySelectorAll('.bathroom');
let property__details__header = document.querySelectorAll('.property__details-header');


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




links.forEach(lin =>{
    lin.addEventListener('click',()=>{
        if(links.classList.contains('link-1')){
            console.log('link one')
            // link_1.href = "./details.html";
        }
        else{
            event.preventDefault();
        }
    })
})

// function details() {
//     const styles = e.currentTarget.classList;
//     if (styles.contains('link-1')){
        
//     }
    
// }


    swiperBtn.forEach(btn =>{   
        btn.addEventListener('click',()=>{
            const styles = e.currentTarget.classList;
            fetch('./apps/js/lease.json')
            .then(response => response.json())
            .then(data =>{
                if (swiperBtn.classList.contains('link-1')){
                    // property__details__header[0].innerHTML = data[0].header;
                    console.log('link-1 clicked');
                    console.log(data[0].header)
                }
            })

    
        })
    });







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





leaseCard.forEach(card=>{
    card.addEventListener('click',()=>{
        console.log('item clicked');
        
    })
})


