let currentPage = 1;
let mainCardList = document.querySelector('.main__blog-page-card-list');
let blogCardText = document.querySelectorAll('.blog__text');
let blogImage = document.querySelectorAll('.blogImagesJs');
let blogHeader = document.querySelectorAll('.blog__subheader');
let paginateNumbers = document.querySelectorAll('.paginate__numbers')





function reqData() {
    fetch('./apps/js/blog.json')
    .then(response => response.json())
    .then(data => {

        // blogCardText.forEach((e,i)=>{
        //     blogCardText[i].textContent = data[i].summary
        // })
        blogHeader.forEach((e,i)=>{
            blogHeader[i].textContent = data[i].title
        })
        blogImage.forEach((e,i)=>{
            blogImage[i].src = data[i].image
        })
        paginateNumbers.forEach(paginate__numbers =>{
            paginate__numbers.addEventListener('click', (e,i)=>{
                const styles = e.currentTarget.classList;
                
        
                if(styles.contains('one')){
                    let arr = [];
                    arr.push(data.splice(0,9))
                    for (let i = 0; i < arr.length; i++) {
                        blogCardText[i].textContent = data[i].summary  
                    }
                    console.log('num1');
                }
            })
        })


        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i])
        //     blogCardText[i].classList = data[i]
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