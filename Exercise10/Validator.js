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
      home : /^((((ht|f)tp(s)?:\/\/)?(www\.)?((?!www.)[\w-]{2,66}(\.)?)+\.(?!www.)[a-z]{2,4}((\/\?)|(\/))?(#?[\w]?=?[\w]?&?%?-?_?\/?\??)*)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi,
      about : /^.{50,}$/,
    };

    this._init();
  }

  //defining Validator method _init()
  _init() {
    const elements = this._elements;
    const pattern = this._pattern;
    this._validate(elements, pattern);
  }

  _validate(elements, pattern) {
    let id;
    let flag = 0;
    Object.keys(elements).some((element) => {
      if (!isNaN(element)) {
        let id = elements[element].id;
        let value = elements[element].value.trim();
        if (value === '') {
          elements[element].focus();
          alert(this._emptyMessage(id));
          flag = 1;
          return true;
        } else {
          if (pattern[id]) {
            if (!pattern[id].test(value)) {
              elements[element].focus();
              alert(this._errorMessage(id));
              flag = 1;
              return true;
            }
          }
        }
      }
    });

    if (flag === 0) {
      if (this._note.checked) {
        if (confirm(':::Are you sure you want to receive notifications?')) {
          this._form.submit();
        }
      } else {
        if (confirm(':::Are you sure you DO NOT want to receive notifications?')) {
          this._form.submit();
        }
      }
    } else {
      return false;
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

