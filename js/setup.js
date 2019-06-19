'use strict';

var getRndNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var NUM_OF_WIZARDS = 4;
var KEYCODE = {
  enter: 13,
  esc: 27
};
var WIZARD_COLORS = {
  coat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyes: ['black', 'red', 'blue', 'yellow', 'green'],
  fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var userSetup = document.querySelector('.setup');
var userSetupOpen = document.querySelector('.setup-open');
var userSetupClose = userSetup.querySelector('.setup-close');
var userSetupOpenIcon = userSetupOpen.querySelector('.setup-open-icon');
var userSetupCharacter = document.querySelector('.setup-wizard');
var userCharacterCoat = userSetupCharacter.querySelector('.wizard-coat');
var setupPlayer = document.querySelector('.setup-player');
var userCharacterCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
var userCharacterEyes = userSetupCharacter.querySelector('.wizard-eyes');
var userCharacterEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
var userCharacterFireball = userSetup.querySelector('.setup-fireball-wrap');
var userCharacterFireballInput = userCharacterFireball.querySelector('input[name="fireball-color"]');

userSetup.querySelector('.setup-similar').classList.remove('hidden');

var setupEscPressHandler = function (evt) {
  if (evt.keyCode === KEYCODE.esc && !evt.target.classList.contains('setup-user-name')) {
    closeSetup();
  }
};

var openSetup = function () {
  userSetup.classList.remove('hidden');
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
    if (evt.keyCode === KEYCODE.enter) {
      openSetup();
    }
  });
});

userSetupClose.addEventListener('focus', function () {
  userSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE.enter) {
      closeSetup();
    }
  });
});

var getRndColor = function (typeOfPart) {
  return typeOfPart[getRndNum(0, typeOfPart.length - 1)];
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

var getCharactersData = function (numOfCharacters) {
  var charactersData = [];
  var getRndData = function () {
    var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var data = {
      name: firstNames[getRndNum(0, firstNames.length - 1)] + ' ' + secondNames[getRndNum(0, secondNames.length - 1)],
      coatColor: coatColors[getRndNum(0, coatColors.length - 1)],
      eyesColor: eyesColors[getRndNum(0, eyesColors.length - 1)]
    };
    return data;
  };
  for (var i = 0; i < numOfCharacters; i++) {
    charactersData[i] = getRndData();
  }
  return charactersData;
};

var wizards = getCharactersData(NUM_OF_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var getWizardsElements = function () {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

getWizardsElements();

similarListElement.appendChild(fragment);
