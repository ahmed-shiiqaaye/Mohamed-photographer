let menuIcon = document.querySelector('.menu-icon');
let navUl = document.querySelector('.navigation-bar-links ul');

menuIcon.addEventListener('click',()=>{
    navUl.classList.toggle('active')
})
