'use strict'

class URLOpener {

  //class URLOpener constructor
  constructor(windowWidth, windowHeight) {
    this._windowWidth = windowWidth;
    this._windowHeight = windowHeight;
    this._init();
  }

  _init() {
    let url = this._promptMessage(':::Please enter URL.');
    while (!this._isInputCorrect(url) && url !== null) {
      url = this._promptMessage(':::Please enter a valid URL.');
    }

    if (url !== null) {
      url = url.trim();
      this._openURL(url);
    } else {
      alert('You Cancelled. Thanks for Coming.');
    }
  }

  //Prompt the user with messages
  _promptMessage(message) {
    return prompt(message);
  }

  //Validate user's url
  _isInputCorrect(data) {
    return /^((((ht|f)tp(s)?:\/\/)?([\w-]{2,66}(\.)?)+\.[a-z]{2,4}\/?)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi.test(data);
  }

  //Receive URL and Open it
  _openURL(url) {
    //url does not contain http, https, ftp and ftps://
    if (url.search('http://') < 0 && url.search('https://') < 0 && url.search('ftp://') < 0 && url.search('ftps://') < 0 && url.search('file:///') < 0) {
      url = `http://${url}`;
    }

    window.open(url,'_blank',`width = ${this._windowWidth}, height = ${this._windowHeight},menubar = no, titlebar = no, toolbar = no, scrollbars = no`);
  }
}

//Instantiating URLOpener Object
new URLOpener(400, 450);

