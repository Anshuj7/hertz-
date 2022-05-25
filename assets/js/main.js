const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle)
{
    navToggle.addEventListener('click', ()=>
        {
            navMenu.classList.add('show-menu')
        })
}

if(navClose)
{
    navClose.addEventListener('click', ()=>
        {
            navMenu.classList.remove('show-menu')
        })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const counters = document.querySelectorAll(".home__car-number");
            const speed = 100;
    
            counters.forEach((counter) => {
                const updateCount = () => {
                const target = parseInt(+counter.getAttribute("data-target"));
                const count = parseInt(+counter.innerText);
                const increment = Math.trunc(target / speed);
                console.log(increment);
      
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 25);
                }else{
                    count.innerText = target;
                }
            };
            updateCount();
            });

function scrollHeader()
{
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured()
{
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

function scrollUp()
{
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 700})
sr.reveal(`.home__car-data, .footer__content, .footer__copy`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.about__group, .offer__data`, {origin: 'left'})
sr.reveal(`.about__data, .offer__img`, {origin: 'right'})
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom '})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, .logos__content`, {interval: 100})
