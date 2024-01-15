'use strict';

const scrollUpBtn = document.querySelector('.scroll-up-btn');
const navBar = document.querySelector('#navbar');
const span = document.querySelector('.span');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu');
const listItem = document.querySelectorAll('.list__item');

//loading

const preLoader = document.getElementById('loader');

function myFunction() {
    setTimeout(function() {
        preLoader.style.display = 'none';
    }, 300);
}
window.addEventListener('load', myFunction);

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    //animate links

    listItem.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${
                index / 7 + 0.1
            }s `; //delay index le decide garxa
        }
    });
});

menuLinks.addEventListener('click', () => {
    const menuBars = document.querySelector('.is-active');

    if (menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
        listItem.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.1
                }s `; //delay index le decide garxa
            }
        });
    }
});

// year

document.getElementById('year').innerHTML = new Date().getFullYear();

const stickyNav = () => {
    const scrolling = window.scrollY;

    if (scrolling > 200) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
};
window.addEventListener('scroll', stickyNav);

//scroll reveal

ScrollReveal({ reset: true, distance: '100px', duration: 1000, delay: 300 });

ScrollReveal().reveal('#info', {
    delay: 200,
    origin: 'left',
});
ScrollReveal().reveal('#info-img', {
    delay: 200,
    origin: 'right',
});

ScrollReveal().reveal('#mission-info', {
    delay: 200,
    origin: 'right',
});
ScrollReveal().reveal('#mission-img', {
    delay: 200,
    origin: 'left',
});

// title
ScrollReveal().reveal('#title', {
    delay: 200,
    origin: 'bottom',
});

// for services
for (let i = 1; i <= 6; i++) {
    ScrollReveal().reveal(`#info-service-${i}`, {
        delay: 200 + i * 100,
        origin: 'bottom',
    });

    ScrollReveal().reveal(`#info-img-service-${i}`, {
        delay: 200 + i * 100,
        origin: 'top',
    });
}

// for team

for (let i = 1; i <= 6; i++) {
    ScrollReveal().reveal(`#info-team-${i}`, {
        delay: 200 + i * 100,
        origin: 'bottom',
        // distance:'200px'
    });

    ScrollReveal().reveal(`#info-img-team-${i}`, {
        delay: 200 + i * 100,
        origin: 'top',
        // distance: '200px',
    });
}

// contact

ScrollReveal().reveal('.name', {
    delay: 200,
    origin: 'left',
    distance: '80px',
});
ScrollReveal().reveal('.email', {
    delay: 200,
    origin: 'right',
    distance: '80px',
});
ScrollReveal().reveal('.phone', {
    delay: 200,
    origin: 'bottom',
    distance: '80px',
});
ScrollReveal().reveal('.textarea', {
    delay: 200,
    origin: 'bottom',
    distance: '80px',
});

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    Infinity: true,

    autoplay: { delay: 3000 },
    // Optional navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
