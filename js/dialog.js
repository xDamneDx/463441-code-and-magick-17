'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var userSetupUpload = userSetup.querySelector('.upload');

  userSetupUpload.addEventListener('mousedown', function (evt) {
    var isDragged = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var mouseMoveHandler = function (moveEvt) {
      isDragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      userSetup.style.top = (userSetup.offsetTop - shift.y) + 'px';
      userSetup.style.left = (userSetup.offsetLeft - shift.x) + 'px';
    };
    var mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      if (isDragged) {
        var mouseClickPreventDefaultHandler = function (evtPrevent) {
          evtPrevent.preventDefault();
          userSetupUpload.removeEventListener('click', mouseClickPreventDefaultHandler);
        };
        userSetupUpload.addEventListener('click', mouseClickPreventDefaultHandler);
      }
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
