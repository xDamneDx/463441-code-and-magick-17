'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');
userSetup.querySelector('.setup-similar').classList.remove('hidden');

var NUM_OF_WIZARDS = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var getCharactersData = function (numOfCharacters) {
  var charactersData = [];
  var getRndData = function () {
    var getRndNum = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
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
