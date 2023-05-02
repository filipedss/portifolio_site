/* show and hide menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

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
