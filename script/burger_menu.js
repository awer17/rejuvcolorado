const menuIcon = document.querySelector('.menu_icon');
const navMenu = document.querySelector('.nav_menu');
const logoNav = document.querySelector('._logo-nav');

menuIcon.addEventListener('click' , function(event){
    menuIcon.classList.toggle('_active');
    navMenu.classList.toggle('_active');
    logoNav.classList.toggle('_active');
})

console.log(menuIcon);