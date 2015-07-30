'use strict'

//NumberChecker class
class NumberChecker {

  //The constructor of NumberChecker class
  constructor(elements) {
    this._number = elements.number;
    this._result = elements.result;
    this._emptyMessage = ':::Enter a number';
    this._errorMessage = ':::Please enter a valid NUMBER';
    this._pattern = /^[0-9]+(\.)?[0-9]+$/;
    this._checkNumber();
  }

  //defining NumberChecker method _checkNumber()
  _checkNumber() {
    const number = this._number.value.trim();
    const result = this._result;
    const emptyMessage = this._emptyMessage;
    const errorMessage = this._errorMessage;
    const pattern = this._pattern;
    if (number === "") {
      this._number.focus();
      this._result.value = '';
      alert (emptyMessage) ;
    } else if (!pattern.test(number)) {
      this._number.focus();
      this._result.value = '';
      alert (errorMessage) ;
    } else {
      result.value = 'true';
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

