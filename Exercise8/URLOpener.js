'use strict'

let url = ''; 
let flag = 0;

class URLOpener {

  //class URLOpener constructor
  constructor(windowWidth, windowHeight) {
    this._windowWidth = windowWidth;
    this._windowHeight = windowHeight;
  }

  //Prompt the user with messages
  _promptMsg(msg) {
    const ans = prompt(msg);
    return ans;
  }

  //Validate user's url
  _isInputCorrect(str) {
    return /^(((ht|f)tp(s)?:\/\/)|(file:\/\/\/))?([\w-]{2,66}(\.)?)+(\.[a-z]{2,4})?\/?([\w]+([-_]*[\w\.]+)*\/?)*$/gi.test(str);
  }

  //Receive URL and Open it
  openURL() {
    if (url.trim() === '') {
      url = this._promptMsg(':::Please enter URL.');
      if (url === null) {
        flag = 1;
      } else {
        while (!this._isInputCorrect(url)) {
          url = this._promptMsg(':::Please enter a valid URL.');
          if (url === null) {
            flag = 1;
            break;
          }

        }

      }

    } else {
      while (!this._isInputCorrect(url)) {
        url = this._promptMsg(':::Please enter a valid URL.');
        if (url === null) {
          flag = 1;
          break;
        }

      }

    }

    if (flag === 0) {
      url = url.trim();

      //url does not contain http, https, ftp and ftps://
      if (url.search('http://') < 0 && url.search('https://') < 0 && url.search('ftp://') < 0 && url.search('ftps://') < 0 && url.search('file:///') < 0) {
        url = `http://${url}`;
      }

      window.open(url,'_blank',`width = ${this._windowWidth}, height = ${this._windowHeight},menubar = no, titlebar = no, toolbar = no, scrollbars = no`);
    } else {
     alert('You Cancelled. Thanks for Coming.');
    }

  }

}

//Instantiating URLOpener Object
const ur = new URLOpener(400, 450);
ur.openURL();
