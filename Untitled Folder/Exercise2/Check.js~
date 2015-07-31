'use strict'

class Check {

  //Check constructor
  constructor(elements,str) {
    this._checkBoxes = elements;
    this._howMany = str;
    this._run();// run the checking and unchecking of the checkboxes
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

  _run() {
    if (this._howMany === 'All') {
      this._checkAll();
    } else {
      this._checkNone();
    }

  }
  
}

const elments = document.getElementsByTagName('INPUT');

//instantiating a Check object upon the clicking of any button
document.getElementById('all').onclick = () => { new Check(elments,'All'); };

document.getElementById('none').onclick = () => { new Check(elments,'None'); };
