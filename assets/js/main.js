/* show and hide menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLink = document.querySelectorAll('.nav__link')

/* if element exist */
if(navToggle){
  /*add event click on toggle element*/
  navToggle.addEventListener('click', function() {
    /*add show css class*/
    navMenu.classList.add('show-menu')
  });
}

/* if close element exist */
if(navClose){
  /*add event click on toggle element*/
  navClose.addEventListener('click', function () {
    /*remove show css class*/
    navMenu.classList.remove('show-menu')
  })
}

/* remove show css class */
function linkAction(){
  navMenu.classList.remove('show-menu')
}

/* add event listener to all menu links*/
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== portfolio swiper ==*/
let swiper = new Swiper('.portfolio__container', {
  cssMode:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});