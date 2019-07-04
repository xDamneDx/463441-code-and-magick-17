'use strict';

(function () {
  var URL = {
    download: 'https://js.dump.academy/code-and-magick/data',
    upload: 'https://js.dump.academy/code-and-magick'
  };
  var XHR_STATUS = {
    ok: 200
  };
  var METHOD = {
    get: 'GET',
    post: 'POST'
  };

  var url = URL.download;
  var errorMessage = 'Не удалось загрузить похожих магов. Ошибка: ';
  var method = METHOD.get;

  var serverOperations = function (onLoad, onError, data) {
    if (data) {
      url = URL.upload;
      errorMessage = 'Что-то пошло не так: ';
      method = METHOD.post;
    }

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === XHR_STATUS.ok) {
        onLoad(xhr.response);
      } else {
        onError(errorMessage + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open(method, url);
    xhr.send(data);
  };

  window.backend = {
    request: serverOperations
  };
})();
