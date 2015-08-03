'use strict'

class User {
  
  //User constructor
  constructor(name, age) {
    this._name = name.value;
    this._age = age.value;
    this._nameElement = name;
    this._ageElement = age;
    this._pattern = {
      name : /^(\s)*[a-zA-Z]+(\s)*((\s)*(['-])*(\s)*[a-zA-Z]+(\s)*)*$/,
      age : /^[0-9]+$/,
    };
  }

  //Validating inputs
  _validateInput(element, input, title, user) {
    if (input === '') {
      element.focus();
      alert(`:::Please enter ${title} for ${user}`);
      return false;
    } else if (!this._pattern[title].test(input)) {
      element.focus();
      alert(`:::${input} is an INVALID ${title}. Please enter a valid ${title} for ${user}`);
      return false;
    } else {
      return true;
    }
  }

  //defining User method compare
  compare(nextUser) {
    const user1Name = this._name.trim();
    const user1Age = this._age.trim();
    const user2Name = nextUser._name.trim();
    const user2Age = nextUser._age.trim();

    const user = {
      user1 : {
        name : {
          element : this._nameElement,
          value : user1Name,
        },
        age : {
          element : this._ageElement,
          value : user1Age,
        },
      },

      user2 : {
        name : {
          element : nextUser._nameElement,
          value : user2Name,
        },
        age : {
          element : nextUser._ageElement,
          value : user2Age,
        },
      },
    };

    //Comparison
    if (!this._checkValidity(user)) {
      this._outputComparison(user1Name, user1Age, user2Name, user2Age);
    }
  }

  _checkValidity(user) {
    let flag = 0;
    Object.keys(user).some((firstLevelKey) => {
      let firstLevelObject = user[firstLevelKey];
      Object.keys(firstLevelObject).some((secondLevelKey) => {
        if (!this._validateInput(firstLevelObject[secondLevelKey].element, firstLevelObject[secondLevelKey].value, secondLevelKey, firstLevelKey)) {
          flag = 1;
          return true;
        }
      });
      if (flag === 1) {
        return true;
      }
    });
  }

  _outputComparison(user1Name, user1Age, user2Name, user2Age) {
    if (parseInt(user1Age, 10) > parseInt(user2Age, 10)) {
      alert(`${user1Name} is older than ${user2Name}`);
    } else if (parseInt(user1Age, 10) < parseInt(user2Age, 10)) {
      alert(`${user2Name} is older than ${user1Name}`);
    } else if (parseInt(user1Age, 10) === parseInt(user2Age, 10)) {
      alert(`${user1Name} and ${user2Name} are of same age`);
    }
  }
}

document.getElementById('submit').addEventListener('click',() => {

  //instantiating two User objects and comparing their ages
  const user1 = new User(document.getElementById('name1'),document.getElementById('age1'));
  const user2 = new User(document.getElementById('name2'),document.getElementById('age2'));
  user1.compare(user2);
});

