let currentPage = 1;
let mainCardList = document.querySelector('.main__blog-page-card-list');
let blogCardText = document.querySelectorAll('.blog__text');
let blogImage = document.querySelectorAll('.blogImagesJs');
let blogHeader = document.querySelectorAll('.blog__subheader');
let paginateNumbers = document.querySelectorAll('.paginate__numbers')
const numOne = document.querySelector('.one')
const numTwo = document.querySelector('.two')
const numThree = document.querySelector('.three')





function paginate__1() {
    fetch('./apps/js/blog.json')
    .then(response => response.json())
    .then(data => {
        blogCardText.forEach((e,i)=>{
            blogCardText[i].textContent = data[i].summary
        })

        blogImage.forEach((e,i)=>{
            blogImage[i].src = data[i].image
        })

        blogHeader.forEach((e,i)=>{
            blogHeader[i].textContent = data[i].title
        })

        numOne.classList.add('active-page')
    })

}
function paginate__2() {
    fetch('./apps/js/blog.json')
    .then(response => response.json())
    .then(data => {
        let arr = data.splice(9,9)

        blogCardText.forEach((e,i)=>{
            blogCardText[i].textContent = arr[i]?.summary
        })

        blogImage.forEach((e,i)=>{
            blogImage[i].src = arr[i]?.image
        })

        blogHeader.forEach((e,i)=>{
            blogHeader[i].textContent = arr[i]?.title
        })
        console.log(arr[1])
        numTwo.classList.add('active-page')
    })
}
function paginate__3() {
    fetch('./apps/js/blog.json')
    .then(response => response.json())
    .then(data => {
        let arr = data.splice(18,9)

        blogCardText.forEach((e,i)=>{
            blogCardText[i].textContent = arr[i]?.summary
        })

        blogImage.forEach((e,i)=>{
            blogImage[i].src = arr[i]?.image
        })

        blogHeader.forEach((e,i)=>{
            blogHeader[i].textContent = arr[i]?.title
        })
        console.log(arr[1])
        numThree.classList.add('active-page')
    })
}

paginateNumbers.forEach(paginate__numbers =>{
    paginate__numbers.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('one')){
            numOne.classList.add('active-page')          
            numThree.classList.remove('active-page')          
            numTwo.classList.remove('active-page')
            
            paginate__1();
        }else if(styles.contains('two')){
            numOne.classList.remove('active-page')          
            numTwo.classList.add('active-page')          
            numThree.classList.remove('active-page')  
            
            paginate__2();
        }
        else{
            numOne.classList.remove('active-page')          
            numTwo.classList.remove('active-page')          
            numThree.classList.add('active-page')
            
            paginate__3()
        }
    })
})


window.onload = paginate__1();
window.onload = numOne.classList.add('active-page') 




// function paginate__1(){
//     reqData()

// }

// reqData();






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


// else if(styles.contains('two')){
//     let arr = data.splice(9,18)
//     blogCardText.forEach((e,i)=>{
//         blogCardText[i].textContent = arr[i].summary
//     })
//     blogHeader.forEach((e,i)=>{
//         blogHeader[i].textContent = arr[i].title
//     })
//     blogImage.forEach((e,i)=>{
//         blogImage[i].src = arr[i].image
//     })
// }


        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i])
        //     blogCardText[i].classList = data[i]
        //     // listArray.push(blogCard);
        //     // console.log(listArray)
        //     // mainCardList.innerHTML = listArray
        // }

                // paginateNumbers.forEach(paginate__numbers =>{
        //     paginate__numbers.addEventListener('click', (e)=>{
        //         const styles = e.currentTarget.classList;
                
        
        //         if(styles.contains('one')){
        //             let arr = data.splice(0,9)
        //             blogCardText.forEach((e,i)=>{
        //                 blogCardText[i].textContent = data[i].summary
        //             })
        //             console.log(arr)
        //         }else if(styles.contains('two')){
        //             let arr = data.splice(9,18)
        //             blogCardText.forEach((e,i)=>{
        //                 blogCardText[i].textContent = arr[i].summary
        //             })
        //             blogHeader.forEach((e,i)=>{
        //                 blogHeader[i].textContent = arr[i].title
        //             })
        //             blogImage.forEach((e,i)=>{
        //                 blogImage[i].src = arr[i].image
        //             })
        //         }
        //     })
        // })


                // blogCardText.forEach((e,i)=>{
        //     blogCardText[i].textContent = data[i].summary
        // })
        // blogHeader.forEach((e,i)=>{
        //     blogHeader[i].textContent = data[i].title
        // })
        // blogImage.forEach((e,i)=>{
        //     blogImage[i].src = data[i].image
        // })