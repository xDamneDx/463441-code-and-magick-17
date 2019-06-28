'use strict';

(function () {
  var KEYCODE = {
    enter: 13,
    esc: 27
  };
  var getRndNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  window.utils = {
    getRandomNumber: getRndNum,
    keyCode: KEYCODE
  };
})();
