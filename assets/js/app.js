var menu = document.getElementById('menu'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) menu.classList.add('menuActive'); // > 0 ou outro valor desejado
        else menu.classList.remove('menuActive');
    });

var btnTop = document.getElementById('btnTop');

btnTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
})

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 40;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

const btnMobile = document.getElementById('btnHamburger');

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu)

const target =document.querySelectorAll('[data-anime]', '[data-anime2]') 
const animationClass = 'animated';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
    target.forEach(function (element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }

    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    })
}



