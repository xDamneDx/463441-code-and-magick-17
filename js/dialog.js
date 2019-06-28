'use strict';

(function () {
  var SETUP_DEFAULT_POSITION = {
    top: '80px',
    left: '50%'
  };

  var userSetup = document.querySelector('.setup');
  var userSetupOpen = document.querySelector('.setup-open');
  var userSetupClose = userSetup.querySelector('.setup-close');
  var userSetupOpenIcon = userSetupOpen.querySelector('.setup-open-icon');
  var userSetupUpload = userSetup.querySelector('.upload');

  userSetup.querySelector('.setup-similar').classList.remove('hidden');

  var setupEscPressHandler = function (evt) {
    if (evt.keyCode === window.utils.keyCode.esc && !evt.target.classList.contains('setup-user-name')) {
      closeSetup();
    }
  };

  var openSetup = function () {
    userSetup.classList.remove('hidden');

    userSetup.style.top = SETUP_DEFAULT_POSITION.top;
    userSetup.style.left = SETUP_DEFAULT_POSITION.left;

    document.addEventListener('keydown', setupEscPressHandler);
  };

  var closeSetup = function () {
    userSetup.classList.add('hidden');
    document.removeEventListener('keydown', setupEscPressHandler);
  };

  userSetupOpen.addEventListener('click', openSetup);
  userSetupClose.addEventListener('click', closeSetup);

  userSetupOpenIcon.addEventListener('focus', function () {
    userSetupOpenIcon.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.keyCode.enter) {
        openSetup();
      }
    });
  });

  userSetupClose.addEventListener('focus', function () {
    userSetupClose.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.keyCode.enter) {
        closeSetup();
      }
    });
  });

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

  window.dialog = {
    userSetup: userSetup
  };
})();
