'use strict'

//NumberChecker class
class NumberChecker {

  //The constructor of NumberChecker class
  constructor(elms) {
    this._num = elms.num;
    this._result = elms.result;
    this._emptyMsg = ':::Enter a number';
    this._errorMsg = ':::Please enter a valid NUMBER';
    this._pattern = /^[0-9]+(\.)?[0-9]+$/;
    this._checkNumber();
  }

  //defining NumberChecker method _checkNumber()
  _checkNumber() {
    const num = this._num.value.trim();
    const result = this._result;
    const emptyMsg = this._emptyMsg;
    const errorMsg = this._errorMsg;
    const ptn = this._pattern;
    if (num === "") {
      this._num.focus();
      this._result.value = '';
      alert (emptyMsg) ;
    } else if (!ptn.test(num)) {
      this._num.focus();
      this._result.value = '';
      alert (errorMsg) ;
    } else {
      result.value = 'true';
    }

  }

}

document.getElementById('sbm').onclick = () => {
  const inps = {
    num : document.getElementById('num'),
    result : document.getElementById('result'),
  };

  new NumberChecker(inps);
};
