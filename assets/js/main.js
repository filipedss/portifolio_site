/* show and hide menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* validar se a constante existe */
if(navToggle){
  navToggle.addEventListener('click', function() {
    navMenu.classList.add('show-menu')
  });
}

