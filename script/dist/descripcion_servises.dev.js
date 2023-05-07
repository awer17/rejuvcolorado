"use strict";

var servisesList = document.getElementById("services_list", true);
var pagination = document.querySelector(".pagination");
var selectServises = document.querySelector('#select_servises');
var servisesListLeft = document.querySelector("._left-items");
var descripcion = document.querySelector("._descripcion");
var slider = document.querySelector("._slider");
var titleServises = document.querySelector("._slider");

function getSliderServis() {
  var file, response, result;
  return regeneratorRuntime.async(function getSliderServis$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          file = './json/services.json';
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(file, {
            method: 'GET'
          }));

        case 3:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 12;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          result = _context.sent;
          servicesDescripcion(result);
          ;
          _context.next = 13;
          break;

        case 12:
          throw new Error("!!!!!!!!!!! ".concat(err));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

function servicesDescripcion(data) {
  data.forEach(function (element) {
    if (element.nameServes === serviseValue && serviseValue !== '' || element.code === serviseValue) {
      descripcion.innerHTML = '';
      descripcion.innerHTML = "<button  onclick=\"btnReturn()\" id=\"return\" class=\"btn_white\">\n            return\n        </button>\n        <h3>".concat(element.nameServes, "</h3>\n        <div class=\"_wrapper\">\n            <p class=\"_main\">").concat(element.description, "</p>\n            <div class=\"_grafic\">\n                <img src=\"").concat(element.img, "\" alt=\"").concat(element.nameServes, "\">\n                <div class=\"_shadow\"></div>\n            </div>    \n        </div>\n        <div class=\"_additional\">\n            ").concat(element.superDescription, "\n        </div>\n            ");
    }
  });
}

var params = new URL(document.location).searchParams;
titleStartServises(params);

function titleStartServises(a) {
  serviseValue = a.get('data');

  if (serviseValue !== null) {
    getSliderServis();
    classAdd();
  }
}

titleServises.addEventListener('click', function (event) {
  serviseValue = event.target.innerHTML;

  if (serviseValue !== '' && serviseValue.length < 30) {
    getSliderServis();
    classAdd();
  }
});

function classAdd() {
  descripcion.classList.add("_active");
  slider.classList.add("_disabled");
}

function btnReturn() {
  descripcion.classList.remove("_active");
  slider.classList.remove("_disabled"); // window.location.href = "servises.html";    
}

servisesList.addEventListener('change', function (event) {
  selectServises.setAttribute("disabled", "disabled");
  serviseValue = event.target.value;
  console.log(event.target.value);
  getSliderServis();
  classAdd();
});
servisesListLeft.addEventListener('click', function (event) {
  serviseValue = event.target.dataset.code;
  getSliderServis();
  classAdd();
});