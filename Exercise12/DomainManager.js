'use strict'

//DomainManager class
class DomainManager {

  //The constructor of DomainManager class
  constructor(element) {
    this._url = element;
    this._emptyMessage = ':::Enter a URL';
    this._errorMessage = ':::No proper URL match found. Please enter a valid URL.';
    this._pattern = /^(((ht|f)tp(s)?:\/\/)?(www\.)?((?!www.)[\w-]{2,66}(\.)?)+\.(?!www.)[a-z]{2,4}((\/\?)|(\/))?(#?[\w]?([\w]\.[\w])?=?[\w]?&?%?-?_?\/?\??)*)$/gi;
    this._init();
  }

  //defining DomainManager method _init()
  _init() {
    this._matchURL(this._url.value.trim());
  }

  _matchURL(url) {
    const pattern = this._pattern;
    if (url === '') {
      this._url.focus();
      alert (this._emptyMessage) ;
    } else if (!pattern.test(url)) {
      this._url.focus();
      alert (this._errorMessage) ;
    } else {
      this._doMatching(url);
    }
  }

  _doMatching(url) {
    const pattern = /^((ht|f)tp(s)?:\/\/)?(www\.)?(((?!www.)[\w-]{2,66}(\.)?)*((?!www.)([\w-]{5,66})?\.(?!www.)[a-z]{2,4})((\/\?)|(\/))?(#?[\w]?([\w]\.[\w])?=?[\w]?&?%?-?_?\/?\??)*)$/gi;
    const urlArray = pattern.exec(url);
    let domain = `${urlArray[6]}${urlArray[8]}`;
    const subDomain = urlArray[0];
    alert(`Domain: ${domain}, Sub-Domain: ${subDomain}`);
  }
}

document.getElementById('submitButton').addEventListener('click', () => {
  const url = document.getElementById('url');

  //Instantiating DomainManager Object
  new DomainManager(url);
});

