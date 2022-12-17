let currentPage = 1;
let mainCardList = document.querySelector('.main__blog-page-card-list');
let blogCard = document.querySelectorAll('.blog__text');
let blogImage = document.querySelectorAll('.blogImagesJs');
let blogHeader = document.querySelectorAll('.blog__subheader');
// const listArray = [];
// let blogCard = '<li class="main__blog-page-card blog__card">'
// + '<div class="blog__card-image">'+ 
// '<img src="./images/fam1.jpg" alt="Family photo">' +
// '</div>'+ 
// '<div class="blog__texts">' +
// '<div class="blog__subheader">' +
// 'WHATS LENDERS MORTGAGE INSURANCE?'+
// '</div>'+
// '<p class="blog__text">' +
// 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur corrupti voluptatibus provident.' +
// '</p>'+
// '</div>'+
// '<a href="#" class="blog__link flex">' +
// 'READ MORE &nbsp;' +
// '<i class="fas fa-long-arrow-alt-right">'+
// '</i>'+
// '</a>'
// +'</li>'

function reqData() {
    fetch('./apps/js/blog.json')
    .then(response => response.json())
    .then(data => {

        blogCard.forEach((e,i)=>{
            blogCard[i].textContent = data[i].summary
        })
        blogHeader.forEach((e,i)=>{
            blogHeader[i].textContent = data[i].title
        })
        blogImage.forEach((e,i)=>{
            blogImage[i].src = data[i].image
        })
        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i])
        //     blogCard[i].classList = data[i]
        //     // listArray.push(blogCard);
        //     // console.log(listArray)
        //     // mainCardList.innerHTML = listArray
        // }
    })
}

reqData();


// fetch('./apps/js/blog.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.splice(0,9));
//     })