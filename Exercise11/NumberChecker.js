'use strict'

//NumberChecker class
class NumberChecker {

  //The constructor of NumberChecker class
  constructor(elements) {
    this._number = elements.number;
    this._result = elements.result;
    this._form = document.getElementById('form');
    this._emptyMessage = ':::Enter a number';
    this._errorMessage = ':::Please enter a valid NUMBER';
    this._pattern = /^[0-9]+((\.[0-9]+)|[0-9]*)?$/;
    this._init();
  }

  //defining NumberChecker method _init()
  _init() {
    const number = this._number.value.trim();
    this._checkNumber(number);
  }

  _checkNumber(number) {
    if (number === "") {
      this._number.focus();
      this._result.value = '';
      alert (this._emptyMessage) ;
    } else if (!this._pattern.test(number)) {
      this._number.focus();
      this._result.value = 'false';
    } else {
      this._result.value = 'true';
      this._form.submit();
    }
  }
}

document.getElementById('submitButton').addEventListener('click', () => {
  const inputs = {
    number : document.getElementById('number'),
    result : document.getElementById('result'),
  };
  
  //Instantiating a NumberChecker object with the input fields
  new NumberChecker(inputs);
});

