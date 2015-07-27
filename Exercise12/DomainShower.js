'use strict'

//DomainShower class
class DomainShower {

  //The constructor of DomainShower class
  constructor(elm) {
    this._url = elm;
    this._emptyMsg = ':::Enter a URL';
    this._errorMsg = ':::No proper URL match found. Please enter a valid URL.';
    this._pattern = /^((ht|f)tp(s)?:\/\/)?([a-z0-9-]{2,66}(\.)?)+\.[a-z]{2,4}\/?([a-zA-Z]+([-_]*[a-zA-Z]+)*\/?)*$/g;
    this._showDomain();
  }

  //defining DomainShower method _showDomain()
  _showDomain() {
    const url = this._url.value.trim();
    const emptyMsg = this._emptyMsg;
    const errorMsg = this._errorMsg;
    const ptn = this._pattern;
    if (url === '') {
        this._url.focus();
        alert (emptyMsg) ;
      } else if (!url.match(ptn)) {
        this._url.focus();
        alert (errorMsg) ;
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

document.getElementById('sbm').onclick = () => {
  const url = document.getElementById('url');

  //Instantiating DomainShower Object
  new DomainShower(url);
};
