$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
       $('.inicio').addClass('menuScroll');
    } else {
       $('.inicio').removeClass('menuScroll');
    }
});


const btnMobile = document.getElementById('btnMobile');


function toggleMenu() {
   const nav = document.getElementById('navMenu');
   nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

