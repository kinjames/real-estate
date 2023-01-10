

let leaseCard = document.querySelectorAll('.lease__card');
let cardList = document.querySelector('.property__cards-list');




leaseCard.forEach(card=>{
    card.addEventListener('click',()=>{
        console.log('item clicked');
        
    })
})


