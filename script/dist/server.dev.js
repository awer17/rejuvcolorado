"use strict";

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
          servisItemlist(result);
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

function servisItemlist(data) {
  var wrapeerSlider = document.querySelector('.slider-content');
  wrapeerSlider.innerHTML = '';
  data.forEach(function (element) {
    wrapeerSlider.innerHTML += "<div class=\"swiper-slide _service_wpar _slide\">\n        <img src=\"".concat(element.img, "\" alt=\"").concat(element.title, "\">\n        <p data-code=").concat(element.code, " value=\"").concat(element.nameServes, "\"  class=\"_title\">").concat(element.nameServes, "</p>\n        <span class=\"_line\"></span>\n        <p class=\"_subtitle\">").concat(element.title, "</p>\n</div>\n");
  });
}

getSliderServis();