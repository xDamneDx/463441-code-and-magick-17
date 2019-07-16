'use strict';

(function () {

  var wizardsArr = [];
  var eyesColor;
  var coatColor;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizardsArr.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizardSetup.onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  window.wizardSetup.onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  var userSetupFooter = document.querySelector('.setup-footer');

  var successHandler = function (wizards) {
    wizardsArr = wizards;
    updateWizards();
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
