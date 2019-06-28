'use strict';

(function () {
  var WIZARD_COLORS = {
    coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green'],
    fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var userSetupCharacter = document.querySelector('.setup-wizard');
  var userCharacterCoat = userSetupCharacter.querySelector('.wizard-coat');
  var setupPlayer = document.querySelector('.setup-player');
  var userCharacterCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
  var userCharacterEyes = userSetupCharacter.querySelector('.wizard-eyes');
  var userCharacterEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
  var userCharacterFireball = window.dialog.userSetup.querySelector('.setup-fireball-wrap');
  var userCharacterFireballInput = userCharacterFireball.querySelector('input[name="fireball-color"]');

  var getRndColor = function (typeOfPart) {
    return typeOfPart[window.utils.getRandomNumber(0, typeOfPart.length - 1)];
  };

  userCharacterCoat.addEventListener('click', function () {
    var color = getRndColor(WIZARD_COLORS.coat);
    userCharacterCoat.style.fill = color;
    userCharacterCoatInput.value = color;
  });

  userCharacterEyes.addEventListener('click', function () {
    var color = getRndColor(WIZARD_COLORS.eyes);
    userCharacterEyes.style.fill = color;
    userCharacterEyesInput.value = color;
  });

  userCharacterFireball.addEventListener('click', function () {
    var color = getRndColor(WIZARD_COLORS.fireball);
    userCharacterFireball.style.background = color;
    userCharacterFireballInput.value = color;
  });
})();
