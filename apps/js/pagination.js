let currentPage = 1;
let mainCardList = document.querySelector('.main__blog-page-card-list');
let blogCardText = document.querySelectorAll('.blog__text');
let blogImage = document.querySelectorAll('.blogImagesJs');
let blogHeader = document.querySelectorAll('.blog__subheader');
let link = document.querySelectorAll('.blog__link');
let paginateNumbers = document.querySelectorAll('.paginate__numbers')
const numOne = document.querySelector('.one')
const numTwo = document.querySelector('.two')
const numThree = document.querySelector('.three')
const paginationContainer = document.querySelector('.pagination')
const mainBlogPage = document.querySelector('.main__blog-page')
const subBlogPage = document.querySelector('.blog__main')

//
const subHeading = document.querySelectorAll('.blog__subheading');
const subImage = document.querySelectorAll('.subBlogImage');
const para1 = document.querySelectorAll('.para_1');
const para2 = document.querySelectorAll('.para_2');
const para3 = document.querySelectorAll('.para_3');
const para4 = document.querySelectorAll('.para_4');
const subTitle = document.querySelectorAll('.blog__title');
const authorName = document.querySelectorAll('.authorName');
const dateNum = document.querySelectorAll('.dateNum');





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

        for (let i = 0; i < data.length; i++) {
            subHeading[i].innerHTML = data[i]?.subheading
            // subHeading.forEach((e,i)=>{
            //     subHeading[i].textContent = data[i].subheading
            // })
            subImage.forEach((e,i)=>{
                subImage[i].src = data[i].image
            })
            
        }


        subTitle.forEach((e,i)=>{
            subTitle[i].textContent = data[i].title
        })
        authorName.forEach((e,i)=>{
            authorName[i].textContent = data[i].writer
        })
        dateNum.forEach((e,i)=>{
            dateNum[i].textContent = data[i].date
        })
        para1.forEach((e,i)=>{
            para1[i].textContent = data[i].para1
        })
        para2.forEach((e,i)=>{
            para2[i].textContent = data[i].para2
        })
        para3.forEach((e,i)=>{
            para3[i].textContent = data[i].para3
        })
        para4.forEach((e,i)=>{
            para4[i].textContent = data[i].para4
        })
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

        subHeading.forEach((e,i)=>{
            subHeading[i].textContent = arr[i]?.subheading
        })
        subImage.forEach((e,i)=>{
            subImage[i].src = arr[i]?.image
        })

        // check
        subTitle.forEach((e,i)=>{
            subTitle[i].textContent = arr[i]?.title
        })
        authorName.forEach((e,i)=>{
            authorName[i].textContent = arr[i]?.writer
        })
        dateNum.forEach((e,i)=>{
            dateNum[i].textContent = arr[i]?.date
        })
        para1.forEach((e,i)=>{
            para1[i].textContent = arr[i]?.para1
        })
        para2.forEach((e,i)=>{
            para2[i].textContent = arr[i]?.para2
        })
        para3.forEach((e,i)=>{
            para3[i].textContent = arr[i]?.para3
        })
        para4.forEach((e,i)=>{
            para4[i].textContent = arr[i]?.para4
        })
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

        // checkout

        subHeading.forEach((e,i)=>{
            subHeading[i].textContent = arr[i]?.subheading
        })
        subImage.forEach((e,i)=>{
            subImage[i].src = arr[i]?.image
        })
        subTitle.forEach((e,i)=>{
            subTitle[i].textContent = arr[i]?.title
        })
        authorName.forEach((e,i)=>{
            authorName[i].textContent = arr[i]?.writer
        })
        dateNum.forEach((e,i)=>{
            dateNum[i].textContent = arr[i]?.date
        })
        para1.forEach((e,i)=>{
            para1[i].textContent = arr[i]?.para1
        })
        para2.forEach((e,i)=>{
            para2[i].textContent = arr[i]?.para2
        })
        para3.forEach((e,i)=>{
            para3[i].textContent = arr[i]?.para3
        })
        para4.forEach((e,i)=>{
            para4[i].textContent = arr[i]?.para4
        })
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
window.onload = numOne.classList.add('active-page');

// function blog(){
//     fetch('./apps/js/blog.json')
//     .then(response => response.json())
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
           
//             subHeading[i].innerHTML = data[i]?.subheading
//             subImage[i].src = data[i]?.image
//             subTitle[i].textContent = data[i]?.title
//         }
//         subHeading.forEach((e,i)=>{
//             subHeading[i].textContent = data[i].subheading
//         })
//         subImage.forEach((e,i)=>{
//             subImage[i].src = data[i].image
//         })
//         subTitle.forEach((e,i)=>{
//             subTitle[i].textContent = data[i].title
//         })
//         authorName.forEach((e,i)=>{
//             authorName[i].textContent = data[i].writer
//         })
//         dateNum.forEach((e,i)=>{
//             dateNum[i].textContent = data[i].date
//         })
//         para1.forEach((e,i)=>{
//             para1[i].textContent = data[i].para1
//         })
//         para2.forEach((e,i)=>{
//             para2[i].textContent = data[i].para2
//         })
//         para3.forEach((e,i)=>{
//             para3[i].textContent = data[i].para3
//         })
//         para4.forEach((e,i)=>{
//             para4[i].textContent = data[i].para4
//         })
//     })
// }

link.forEach(link=>{
    link.addEventListener('click', ()=>{
        if(subBlogPage.classList.contains('hide')){
            subBlogPage.classList.remove('hide');
            mainBlogPage.classList.add('hide');
            paginationContainer.classList.add('hide');
            console.log('read more clicked');
            blog()
            paginate__1()
            // paginate__2();
            // paginate__3();
        }
    })
})





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
