  //pagination
  let card = '<div class="property__cards flex">'+'<div class="property__cards-img-icons">'+'<div class="property__cards-img">'+'<img src="./images/img1.jpg" alt="" class="ima">'+'</div>'+'<div class="property__cards-icons flex">'+'<div class="swiper__icon flex flex-ai-c">' + '<i class="fas fa-bed"></i>'+ '<span>2</span>'+'</div>' + '<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-bath"></i>'+'<span>2</span>'+'</div>'+'<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-car"></i>'+'<span>1</span>'+'</div>'+'</div>'+'</div>'+'<div class="property__cards-texts">'+'<h3>&dollar;400 / WEEK</h3>'+'<p class="property__cards-small__text">'+'Haberfield NSW 2045'+'</p>'+'<p class="property__cards-para">'+'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odit animi molestiae libero odio magni fug. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum mollitia,'+'</p>'+'</div>'+'</div>';



  let list =document.querySelector('.property__cards-list')

  const listArray = []
  for (let i=0; i<10; i++) {
    listArray.push(card)
}


list.innerHTML= listArray
let images = document.querySelectorAll('.ima')
let prices = document.querySelector('.price')
let smallText = document.querySelector('.property__cards-small__text')
let desc = document.querySelector('.property__cards-para')

console.log(listArray)

fetch ('./apps/js/data.json')
    .then(response => response.json())
    .then(data => {
        for (let j = 0; j < 10;j++){
            images.forEach((j)=>{
                images[j].innerHTML = data[j].image
            })
        }
})