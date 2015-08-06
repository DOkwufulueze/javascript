'use strict'

let firstname;
let lastname;
class Page {

  //class Page constructor
  constructor(messageBox) {
    this._messageBox = messageBox;
    this._data = {
      first: {
        data: 'first name',
        variable: firstname,
      },

      last: {
        data: 'last name',
        variable: lastname,
      },
    }

    this._init();
  }

  _init() {
    this._beginPrompts();
  }

  _beginPrompts() {
    if (Object.keys(this._data).some((position) => {
      this._data[position].variable = this._getData(this._data[position].variable, this._data[position].data);
      if (this._isNull(this._data[position].variable)) {
        return true;
      }
    })) { 
      return false;
    }

    this._greet(`:::Hello ${this._data.first.variable} ${this._data.last.variable}`);
  }

  _getData(input, data) {
    input = this._promptMessage(`:::Please enter your ${data}.`);
    input = this._ensureInputCorrectness(input, `:::Please enter a valid ${data}.`);
    return input;
  }

  _isNull(input) {
    if (input === null) {
      this._greetAnyways(':::You cancelled. Welcome anyways.');
      return true;
    }
  }

  _ensureInputCorrectness(input, message) {
    while (!this._isInputCorrect(input, message)) {
      input = this._promptMessage(message);
    }
    
    return input !== null ? input.trim() : null;
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
    this._messageBox.innerHTML = message;
  }

  //Welcomes the user anyways
  _greetAnyways(message) {
    alert(message);
    this._messageBox.innerHTML = message;
  }
}

//Creating the DOM messageBox to display welcome message
const messageBox = document.getElementById('main');

//Instantiating a Page Object
new Page(messageBox);

