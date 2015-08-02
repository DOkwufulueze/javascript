'use strict'

//DomainManager class
class DomainManager {

  //The constructor of DomainManager class
  constructor(element) {
    this._url = element;
    this._emptyMessage = ':::Enter a URL';
    this._errorMessage = ':::No proper URL match found. Please enter a valid URL.';
    this._pattern = /^((((ht|f)tp(s)?:\/\/)?(www\.)?((?!www.)[\w-]{2,66}(\.)?)+\.(?!www.)[a-z]{2,4}((\/\?)|(\/))?(#?[\w]?=?[\w]?&?%?-?_?\/?\??)*)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi;
    this._init();
  }

  //defining DomainManager method _init()
  _init() {
    this._matchURL(this._url.value.trim());
  }

  _matchURL(url) {
    if (url === '') {
        this._url.focus();
        alert (this._emptyMessage) ;
      } else if (!url.match(this._pattern)) {
        this._url.focus();
        alert (this._errorMessage) ;
      } else {
        const rootDomainLeft = url.substring(0, url.lastIndexOf('.'));
        const rootDomain = `${rootDomainLeft.substring(rootDomainLeft.lastIndexOf('.') + 1)}${url.substring(url.lastIndexOf('.'))}`;
        alert(`Root Domain: ${rootDomain}`);
        while (url.indexOf('.')) {
          if (url.match(/\./g).length === 1) {
            break;
          } else {
            alert(`Sub-Domain: ${url}`);
          }

          url = url.substring(url.indexOf('.') + 1);
        }
      }
  }
}

document.getElementById('submitButton').addEventListener('click', () => {
  const url = document.getElementById('url');

  //Instantiating DomainManager Object
  new DomainManager(url);
});

