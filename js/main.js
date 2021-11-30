"use strict";
"use strict";
"use strict";

function tabs(tabsItems, tabsContentItems) {
  var tabBtn = document.querySelectorAll(tabsItems),
      tabItems = document.querySelectorAll(tabsContentItems);
  tabBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      var currentBtn = item;
      var tabId = currentBtn.getAttribute('data-tab');
      var currentTab = document.querySelector(tabId);
      tabBtn.forEach(function (item) {
        item.classList.remove('active__tab-item');
      });
      tabItems.forEach(function (item) {
        item.classList.remove('active-tab');
      });
      currentTab.classList.add('active-tab');
      currentBtn.classList.add('active__tab-item');
    });
  });
}

tabs('.about-us__item-tabs--1', '.about-us__item-tabs-content-item--1');
tabs('.about-us__item-tabs--2', '.about-us__item-tabs-content-item--2');
$(function () {
  $('.our__clietns').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#our__clientss').offset().top
    }, 1000);
    e.preventDefault();
  });
  $('.our__contact').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $('#our__contact').offset().top
    }, 1000);
    e.preventDefault();
  });
});
var close = document.querySelector('.close'),
    menuContent = document.querySelector('.menu__mobile'),
    openMenu = document.querySelector('.burger__menu');
var body = document.body;
openMenu.addEventListener('click', function () {
  menuContent.classList.add('menu__mobile-active');
  body.classList.add('overFlow');
});
close.addEventListener('click', function () {
  menuContent.classList.remove('menu__mobile-active');
  body.classList.remove('overFlow');
});
//# sourceMappingURL=main.js.map
