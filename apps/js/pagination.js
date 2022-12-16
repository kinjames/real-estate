  //pagination
//   let card = '<div class="property__cards flex">'+'<div class="property__cards-img-icons">'+'<div class="property__cards-img">'+'<img src="./images/img1.jpg" alt="" class="ima">'+'</div>'+'<div class="property__cards-icons flex">'+'<div class="swiper__icon flex flex-ai-c">' + '<i class="fas fa-bed"></i>'+ '<span>2</span>'+'</div>' + '<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-bath"></i>'+'<span>2</span>'+'</div>'+'<div class="swiper__icon flex flex-ai-c">'+'<i class="fas fa-car"></i>'+'<span>1</span>'+'</div>'+'</div>'+'</div>'+'<div class="property__cards-texts">'+'<h3>&dollar;400 / WEEK</h3>'+'<p class="property__cards-small__text">'+'Haberfield NSW 2045'+'</p>'+'<p class="property__cards-para">'+'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odit animi molestiae libero odio magni fug. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum mollitia,'+'</p>'+'</div>'+'</div>';



//   let list =document.querySelector('.property__cards-list')

//   const listArray = []
//   for (let i=0; i<10; i++) {
//     listArray.push(card)
// }


// list.innerHTML= listArray
// let images = document.querySelectorAll('.ima')
// let prices = document.querySelector('.price')
// let smallText = document.querySelector('.property__cards-small__text')
// let desc = document.querySelector('.property__cards-para')

// console.log(listArray)

// fetch ('./apps/js/data.json')
//     .then(response => response.json())
//     .then(data => {
//         for (let j = 0; j < 10;j++){
//             images.forEach((j)=>{
//                 images[j].innerHTML = data[j].image
//             })
//         }
// })

// function getPageList(totalPages, page, maxLength){
//     function range(start, end){
//       return Array.from(Array(end - start + 1), (_, i) => i + start);
//     }
  
//     var sideWidth = maxLength < 9 ? 1 : 2;
//     var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//     var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
//     if(totalPages <= maxLength){
//       return range(1, totalPages);
//     }
  
//     if(page <= maxLength - sideWidth - 1 - rightWidth){
//       return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
//     }
  
//     if(page >= totalPages - sideWidth - 1 - rightWidth){
//       return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
//     }
  
//     return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
//   }
  
//   $(function(){
//     var numberOfItems = $(".card-content .card").length;
//     var limitPerPage = 3; //How many card items visible per a page
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     var paginationSize = 7; //How many page elements visible in the pagination
//     var currentPage;
  
//     function showPage(whichPage){
//       if(whichPage < 1 || whichPage > totalPages) return false;
  
//       currentPage = whichPage;
  
//       $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
//       $(".pagination li").slice(1, -1).remove();
  
//       getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//         $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
//         .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
//         .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
//       });
  
//       $(".previous-page").toggleClass("disable", currentPage === 1);
//       $(".next-page").toggleClass("disable", currentPage === totalPages);
//       return true;
//     }
  
//     $(".pagination").append(
//       $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
//       $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
//     );
  
//     $(".main__blog-page-card").show();
//     showPage(1);
  
//     $(document).on("click", ".pagination li.current-page:not(.active)", function(){
//       return showPage(+$(this).text());
//     });
  
//     $(".next-page").on("click", function(){
//       return showPage(currentPage + 1);
//     });
  
//     $(".previous-page").on("click", function(){
//       return showPage(currentPage - 1);
//     });
//   });