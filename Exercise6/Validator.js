'use strict'

//Validator class
class Validator {

  //Validator constructor
  constructor(elements, form) {
    this._elements = elements;
    this._form = document.getElementById(form);
    this._note = document.getElementById('note');
    this._emptyMessage = {
      id : ':::Login Id cannot be empty',
      email : ':::Please enter your email',
      name : ':::Please enter your name',
      timezone : ':::Please choose your timezone',
      home : ':::Please enter your Home Page URL',
      about : ':::Please enter your detail',
      note : ':::You really do not want to receive notifications?',
    };

    this._errorMessage = {
      id : ':::Fill in a proper Id',
      email : ':::Please enter a valid email',
      name : ':::Please enter a valid name',
      home : ':::Please enter a valid Home Page URL',
      about : ':::Your detail must be more than 50 characters long',
    };

    this._pattern = {
      id : /^[a-zA-Z0-9]+$/,
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/,
      home : /^((((ht|f)tp(s)?:\/\/)?([\w-]{2,66}(\.)?)+\.[a-z]{2,4}\/?)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi,
      about : /^.{50,}$/,
    };

    this._init();
  }

  //defining Validator method _init()
  _init() {
    const elements = this._elements;
    const emptyMessage = this._emptyMessage;
    const errorMessage = this._errorMessage;
    const pattern = this._pattern;
    let id;
    let flag = 0;
    Object.keys(elements).some((element) => {
      if (!isNaN(element)) {
        let id = elements[element].id;
        let value = elements[element].value.trim();
        if (value === '') {
          elements[element].focus();
          alert(emptyMessage[id]);
          flag = 1;
          return true;
        } else {
          if (pattern[id]) {
            if (!pattern[id].test(value)) {
              elements[element].focus();
              if (errorMessage[id]) {
                alert(errorMessage[id]);
                flag = 1;
                return true;
              }
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
}

document.getElementById('submitButton').addEventListener('click', () => {
  const inputs = document.getElementsByClassName('inputElement');
  const validate = new Validator(inputs,'form');
});

