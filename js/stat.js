'use strict';

(function () {
  var drawRect = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color || '#ffffff';
    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (ctx, text, x, y, font, baseline, color) {
    ctx.font = font || '16px PT Mono';
    ctx.textBaseline = baseline || 'hanging';
    ctx.fillStyle = color || '#000000';
    ctx.fillText(text, x, y);
  };

  var drawResults = function (ctx, names, times) {
    var maxHeight = 150;
    var width = 40;
    var startingPointX = 140;
    var startingPointY = 250;
    var getMaxTime = function () {
      var maxTime = 0;
      for (var i = 0; i < times.length; i++) {
        if (times[i] > maxTime) {
          maxTime = times[i];
        }
      }
      return maxTime;
    };
    drawRect(ctx, 110, 20, 420, 270, 'rgba(0,0,0,0.7)');
    drawRect(ctx, 100, 10, 420, 270, 'rgba(255,255,255,1)');
    drawText(ctx, 'Ура вы победили!', 120, 28);
    drawText(ctx, 'Список результатов:', 120, 45);
    for (var i = 0; i < times.length; i++) {
      var height = Math.floor(maxHeight * (times[i] * 100 / getMaxTime()) / 100);
      var time = Math.floor(times[i]);
      drawText(ctx, names[i], startingPointX, startingPointY);
      drawRect(ctx, startingPointX, startingPointY - 10, width, -height, (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)');
      drawText(ctx, time, startingPointX, startingPointY - 10 - height - 10, '16px PT Mono', 'alphabetic');
      startingPointX += 90;
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    drawResults(ctx, names, times);
  };
})();
