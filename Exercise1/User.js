'use strict'

class User {
  
  //User constructor
  constructor(name,age) {
    this._name = name;
    this._age = age;
    this._pattern = {
      name : /^(\s)*[a-zA-Z]+(\s)*((\s)*(['-])*(\s)*[a-zA-Z]+(\s)*)*$/,
      age : /^[0-9]+$/,
    };
  }

  //defining User method compare
  compare(nextUser) {
    const user1Name = this._name.trim();
    const user2Name = nextUser._name.trim();
    const user1Age = this._age.trim();
    const user2Age = nextUser._age.trim();
    
    if (user1Age === '' || user1Name === '' || user2Age === '' || user2Name === '') {
      return ':::Please fill all users\' details.';
    } else {
      
      //Error Handling
      if (!this._pattern.name.test(user1Name)) {
        document.getElementById('name1').focus();
        return `:::${user1Name} is an INVALID name. Please enter a valid name for User1`;
      }

      if (!this._pattern.name.test(user2Name)) {
        document.getElementById('name2').focus();
        return `:::${user2Name} is an INVALID name. Please enter a valid name for User2`;
      }
      
      if (!this._pattern.age.test(user1Age)) {
        document.getElementById('age1').focus();
        return `:::${user1Age} is an INVALID Age. Use ONLY NUMBERS for User1 age`;
      }
      
      if (!this._pattern.age.test(user2Age)) {
        document.getElementById('age2').focus();
        return `:::${user2Age} is an INVALID Age. Use ONLY NUMBERS for User1 age`;
      }
      
      //Correct input supplied by user
      if (parseInt(user1Age, 10) > parseInt(user2Age, 10)) {
        return `${user1Name} is older than ${user2Name}`;
      } else if (parseInt(user1Age, 10) < parseInt(user2Age, 10)) {
        return `${user2Name} is older than ${user1Name}`;
      } else if (parseInt(user1Age, 10) === parseInt(user2Age, 10)) {
        return `${user1Name} and ${user2Name} are of same age`;
      }
    }
  }
}

document.getElementById('submit').addEventListener('click',() => {

  //instantiating two User objects and comparing their ages
  const user1 = new User(document.getElementById('name1').value,document.getElementById('age1').value);
  const user2 = new User(document.getElementById('name2').value,document.getElementById('age2').value);
  alert(user1.compare(user2));
});

