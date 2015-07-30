'use strict'

let firstname = '';
let lastname = '';
let flag = 0;

class Page {

  //class Page constructor
  constructor() {
    
  }

  //Prompt the user with messages
  _promptMessage(message) {
    const answer = prompt(message);
    return answer;
  }

  //Validate user's name
  _isInputCorrect(data) {
    return /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/.test(data);
  }

  //The method that actually welcomes the user
  greet() {
    if (firstname.trim() === '') {
      firstname = this._promptMessage(':::Please enter your first name.');
      if (firstname === null) {
        flag = 1;
      } else {
        this.greet();
      }
    } else {
      while (!this._isInputCorrect(firstname)) {
        firstname = this._promptMessage(':::Please enter a valid first name.');
        if (firstname === null) {
          flag = 1;
        }
      }

      if (lastname.trim() === '') {
        lastname = this._promptMessage(':::Please enter your last name.');
        if (lastname === null) {
          flag = 1;
        } else {
          this.greet();
        }
      } else {
        while (!this._isInputCorrect(lastname)) {
          lastname = this._promptMessage(':::Please enter a valid last name.');
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
const element = document.getElementById('main');

//Instantiating a Page Object
const page = new Page();
const greet = page.greet();
alert(greet);
element.innerHTML = greet;

