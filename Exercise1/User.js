'use strict'

class User {
  
  //User constructor
  constructor(name,age) {
    this._name = name;
    this._age = age;
    this._pattern = {
      name : /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/,
      age : /^[0-9]+$/,
    };
  }

  //defining User method compare
  compare(str) {
    const user1Name = this._name;
    const user2Name = str._name;
    const user1Age = this._age;
    const user2Age = str._age;
    
    if (user1Age === '' || user1Name === '' || user2Age === '' || user2Name === '') {
      return ':::Please fill all users\' details.';
    } else {
      //Error Handling
      if (!this._pattern.name.test(user1Name.trim())) {
        document.getElementById('name1').focus();
        return `:::${user1Name.trim()} is an INVALID name. Please enter a valid name for User1`;
      }

      if (!this._pattern.name.test(user2Name.trim())) {
        document.getElementById('name2').focus();
        return `:::${user2Name.trim()} is an INVALID name. Please enter a valid name for User2`;
      }
      
      if (!this._pattern.age.test(user1Age.trim())) {
        document.getElementById('age1').focus();
        return `:::${user1Age.trim()} is an INVALID Age. Use ONLY NUMBERS for User1 age`;
      }
      
      if (!this._pattern.age.test(user2Age.trim())) {
        document.getElementById('age2').focus();
        return `:::${user2Age.trim()} is an INVALID Age. Use ONLY NUMBERS for User1 age`;
      }
      
      //Correct input supplied by user
      if (parseInt(user1Age.trim(), 10) > parseInt(user2Age.trim(), 10)) {
        return `${user1Name.trim()} is older than ${user2Name.trim()}`;
      } else if (parseInt(user1Age.trim(), 10) < parseInt(user2Age.trim(), 10)) {
        return `${user2Name.trim()} is older than ${user1Name.trim()}`;
      } else if (parseInt(user1Age.trim(), 10) === parseInt(user2Age.trim(), 10)) {
        return `${user1Name.trim()} and ${user2Name.trim()} are of same age`;
      }

    }

  }
  
}

document.getElementById('sbm').onclick = () => {
  
  //instantiating two User objects and comparing their ages
  const user1 = new User(document.getElementById('name1').value,document.getElementById('age1').value);
  const user2 = new User(document.getElementById('name2').value,document.getElementById('age2').value);
  alert(user1.compare(user2));
};

