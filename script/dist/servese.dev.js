"use strict";

var clickSlide = document.querySelector('._slider ');
var aTetle = '';
clickSlide.addEventListener('click', function (event) {
  aValue = event.target.innerHTML;

  if (aValue.length < 30 && aValue.length > 0) {
    aTetle = aValue;
    window.location.href = "servises.html?data=".concat(event.target.dataset.code);
  }
});