'use strict';

var URL = {
  download: 'https://js.dump.academy/code-and-magick/data',
  upload: 'https://js.dump.academy/code-and-magick'
};
var XHR_STATUS = {
  ok: 200
};

(function () {
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === XHR_STATUS.ok) {
        onLoad(xhr.response);
      } else {
        onError('Не удалось загрузить похожих магов. Ошибка: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('GET', URL.download);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === XHR_STATUS.ok) {
        onLoad(xhr.response);
      } else {
        onError('Что-то пошло не так: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', URL.upload);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
