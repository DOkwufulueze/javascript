'use strict'

class Check {

  //Check constructor
  constructor(elements, howMany) {
    this._checkBoxes = elements;
    this._howMany = howMany;
    this._init();// run the checking and unchecking of the checkboxes
  }

  //defining Check methods
  _checkAll() {
    const all = this._checkBoxes;
    Object.keys(all).forEach((box) => {
      if (!isNaN(box)) {
        all[box].checked = true;
      }
    });
  }

  _checkNone() {
    const all = this._checkBoxes;
    Object.keys(all).forEach((box) => {
      if (!isNaN(box)) {
        all[box].checked = false;
      }
    });
  }

  _init() {
    if (this._howMany === 'All') {
      this._checkAll();
    } else {
      this._checkNone();
    }
  }  
}

const elments = document.getElementsByTagName('INPUT');

//instantiating a Check object upon the clicking of any button
document.getElementById('all').addEventListener('click', () => { 
  new Check(elments,'All'); 
});
document.getElementById('none').addEventListener('click', () => { 
  new Check(elments,'None'); 
});

