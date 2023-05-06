"use strict";

var clickSlide = document.querySelector('._slider ');
console.log(clickSlide);
var aTetle = '';
clickSlide.addEventListener('click', function (event) {
  aValue = event.target.innerHTML;

  if (aValue.length < 30) {
    aTetle = aValue;
    console.log(aTetle);
  }
});