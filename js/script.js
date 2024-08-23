/* Burger */

let burger = document.querySelector('.header__burger');
let menu  = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link')

burger.addEventListener('click',

function() {

  burger.classList.toggle ('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})


/* Tabs */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__steps__btn').forEach(function (e) {
      e.addEventListener('click', function (e) {
          const path = e.currentTarget.dataset.path;
          document.querySelectorAll('.tab-content').forEach(function (e) {
              e.classList.remove('tab-content--active')
              document.querySelector(`[data-target='${path}']`).classList.add('tab-content--active');
          });
      });

      e.addEventListener('click', function (e) {
          const pathDefault = e.currentTarget.dataset.default;
          document.querySelectorAll('.work__steps__btn').forEach(function (e) {
              e.classList.remove('work__steps__btn-active')
              document.querySelector(`[data-path='${pathDefault}']`).classList.add('work__steps__btn-active');
          })
      })
  });
});

/* Swiper */

const swiper = new Swiper('.swiper', {

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  allowTouchMove: true,
  loop: true,

});

/* Accordion */
$(".accordion").accordion({
  collapsible: true,
  active: false,
  heightStyle: "content",
});

/* Search */
let search = document.querySelector('.header__search');
let searchClose = document.querySelector('.header__close');
let searchForm = document.querySelector('.header__search__form')

search.addEventListener('click',

function() {

  searchForm.classList.add('header__search__form--active')

});

searchClose.addEventListener('click',

function() {

  searchForm.classList.remove('header__search__form--active')

});











