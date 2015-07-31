'use strict'

//DomainShower class
class DomainShower {

  //The constructor of DomainShower class
  constructor(element) {
    this._url = element;
    this._emptyMessage = ':::Enter a URL';
    this._errorMessage = ':::No proper URL match found. Please enter a valid URL.';
    this._pattern = /^((((ht|f)tp(s)?:\/\/)?([\w-]{2,66}(\.)?)+\.[a-z]{2,4}\/?)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi;
    this._init();
  }

  //defining DomainShower method _init()
  _init() {
    const url = this._url.value.trim();
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

  //Instantiating DomainShower Object
  new DomainShower(url);
});

