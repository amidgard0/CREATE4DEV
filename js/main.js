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
//# sourceMappingURL=main.js.map
