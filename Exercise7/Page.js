'use strict'

let firstname = '';
let lastname = '';
let flag = 0;

class Page {

  //class Page constructor
  constructor() {
    
  }

  //Prompt the user with messages
  _promptMsg(msg) {
    const ans = prompt(msg);
    return ans;
  }

  //Validate user's name
  _isInputCorrect(str) {
    return /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/.test(str);
  }

  //The method that actually welcomes the user
  greet() {
    if (firstname.trim() === '') {
      firstname = this._promptMsg(':::Please enter your first name.');
      if (firstname === null) {
        flag = 1;
      } else {
        this.greet();
      }
    } else {
      while (!this._isInputCorrect(firstname)) {
        firstname = this._promptMsg(':::Please enter a valid first name.');
        if (firstname === null) {
          flag = 1;
        }
      }
      if (lastname.trim() === '') {
        lastname = this._promptMsg(':::Please enter your last name.');
        if (lastname === null) {
          flag = 1;
        } else {
          this.greet();
        }
      } else {
        while (!this._isInputCorrect(lastname)) {
          lastname = this._promptMsg(':::Please enter a valid last name.');
          if (lastname === null) {
            flag = 1;
          }
        }
      }
    }
    if (flag === 0) {
      return `:::Hello ${firstname.trim()} ${lastname.trim()}`;
    } else {
     return 'You Cancelled. Welcome anyways.';
    }

  }

}

//Creating the DOM element to display welcome message
const elm = document.getElementById('main');

//Instantiating a Page Object
const page = new Page();
const grt = page.greet();
alert(grt);
elm.innerHTML = grt;
