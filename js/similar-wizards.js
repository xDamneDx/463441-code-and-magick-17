'use strict';
(function () {
  var NUM_OF_WIZARDS = 4;
  var userSetupFooter = document.querySelector('.setup-footer');
  var userSetupSimilar = userSetupFooter.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    for (var i = 0; i < NUM_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userSetupSimilar.classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orangered;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '26px';

    node.textContent = errorMessage;
    userSetupFooter.insertAdjacentElement('beforebegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();
