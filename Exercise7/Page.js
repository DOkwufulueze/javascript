'use strict'

class Page {

  //class Page constructor
  constructor(element) {
    this._element = element;
    this._init();
  }

  _init() {
    let flag = 0;
    let firstname = this._promptMessage(':::Please enter your first name.');
    while (!this._isInputCorrect(firstname)) {
      firstname = this._promptMessage(':::Please enter a valid first name.');
    }
    if(firstname !== null){
      firstname = firstname.trim();
      let lastname = this._promptMessage(':::Please enter your last name.');
      while (!this._isInputCorrect(lastname)) {
        lastname = this._promptMessage(':::Please enter a valid last name.');
      }
      if (lastname !== null) {
        lastname = lastname.trim();
        this._greet(`:::Hello ${firstname} ${lastname}`);
      } else {
        this._greetAnyways(':::You cancelled. Welcome anyways.');
      }
    } else {
      this._greetAnyways(':::You cancelled. Welcome anyways.');
    } 
  }

  //Prompt the user with messages
  _promptMessage(message) {
    return prompt(message);
  }

  //Validate user's name
  _isInputCorrect(data) {
    return /^(\s)*[a-zA-Z]+(\s)*((\s)*(['-])*(\s)*[a-zA-Z]+(\s)*)*$/.test(data);
  }

  //The method that actually welcomes the user
  _greet(message) {
    alert(message);
    this._element.innerHTML = message;
  }

  //Welcomes the user anyways
  _greetAnyways(message) {
    alert(message);
    this._element.innerHTML = message;
  }
}

//Creating the DOM element to display welcome message
const element = document.getElementById('main');

//Instantiating a Page Object
const page = new Page(element);

