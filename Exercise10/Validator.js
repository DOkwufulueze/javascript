'use strict'

//Validator class
class Validator {

  //Validator constructor
  constructor(elements, form) {
    this._elements = elements;
    this._form = document.getElementById(form);
    this._note = document.getElementById('note');
    this._pattern = {
      id : /^[a-zA-Z0-9]+$/,
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^(\s)*[a-zA-Z]+(\s)*((\s)*(['-])*(\s)*[a-zA-Z]+(\s)*)*$/,
      home : /^((((ht|f)tp(s)?:\/\/)?(www\.)?((?!www.)[\w-]{2,66}(\.)?)+\.(?!www.)[a-z]{2,4}((\/\?)|(\/))?(#?[\w]?([\w]\.[\w])?=?[\w]?&?%?-?_?\/?\??)*)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi,
      about : /^.{50,}$/,
    };

    this._init();
  }

  //defining Validator method _init()
  _init() {
    const elements = this._elements;
    const pattern = this._pattern;
    this._beginValidation(elements, pattern);
  }

  _beginValidation(elements, pattern) {
    let flag = 0;
    if (this._isInvalid(elements, pattern) === true) {
      return false;
    } else {
      this._continue();
    }
  }

  _continue() {
    if (this._checkNotificationCheckbox()) {
      if (this._positiveResponseOnNotify()) {
        this._form.submit();
      }
    } else {
      if (this._negativeResponseOnNotify()) {
        this._form.submit();
      }
    }
  }

  _positiveResponseOnNotify() {
    if (confirm(':::Are you sure you want to receive notifications?')) {
      return true;
    }
  }

  _negativeResponseOnNotify() {
    if (confirm(':::Are you sure you DO NOT want to receive notifications?')) {
      return true;
    }
  }

  _checkNotificationCheckbox() {
    if (this._note.checked) {
      return true;
    } else {
      return false;
    }
  }

  _isInvalid(elements, pattern) {
    let flag = 0;
    Object.keys(elements).some((element) => {
      if (!isNaN(element)) {
        if (this._patternAndValueTest(elements, element, pattern) === true) {
          flag = 1;
          return true;
        }
      }
    });
    if (flag == 1) {
      return true;
    }
  }

  _patternAndValueTest(elements, element, pattern) {
    const id = elements[element].id;
    const value = elements[element].value.trim();
    if (value === '') {
      elements[element].focus();
      alert(this._emptyMessage(id));
      return true;
    } else {
      if (pattern[id]) {
        if (!pattern[id].test(value)) {
          elements[element].focus();
          alert(this._errorMessage(id));
          return true;
        }
      }
    }
  }

  _emptyMessage(id) {
    let message = id;
    if (id === 'about') {
      message = 'your details';
    }

    if (id === 'home') {
      message = 'your Home Page URL';
    }

    return `:::Please enter ${message}`;
  }

  _errorMessage(id) {
    let message = id;
    if (id === 'about') {
      message = 'detail, more than 50 characters long.';
    }

    if (id === 'home') {
      message = 'Home Page URL.';
    }
    return `:::Please enter a valid ${message}`;
  }
}

document.getElementById('submitButton').addEventListener('click', () => {
  const inputs = document.getElementsByClassName('inputElement');
  const validate = new Validator(inputs,'form');
});

