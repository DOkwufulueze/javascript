'use strict'

//Validator class
class Validator {

  //Validator constructor
  constructor(elms) {
    this._elments = elms;
    this._emptyMsg = {
      id : ':::Login Id cannot be empty',
      email : ':::Please enter your email',
      name : ':::Please enter your name',
      timezone : ':::Please choose your timezone',
      home : ':::Please enter your Home Page URL',
      about : ':::Please enter your detail',
      note : ':::You really do not want to receive notifications?',
    };

    this._errorMsg = {
      id : ':::Fill in a proper Id',
      email : ':::Please enter a valid email',
      name : ':::Please enter a valid name',
      home : ':::Please enter a valid Home Page URL',
      about : ':::Your detail must be more than 50 characters long',
    };

    this._patern = {
      id : /^[a-zA-Z0-9]+$/,
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/,
      home : /^((((ht|f)tp(s)?:\/\/)?([\w-]{2,66}(\.)?)+\.[a-z]{2,4}\/?)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi,
      about : /^.{50,}$/,
    };

    this._validate();
  }

  //defining Validator method _validate()
  _validate() {
    const elms = this._elments;
    const emptyMsgs = this._emptyMsg;
    const errorMsgs = this._errorMsg;
    const ptn = this._patern;
    let id;
    let flag = 0;
    Object.keys(elms).some((i) => {
      if (!isNaN(i)) {
        id = elms[i].id; 
        if (elms[i].value.trim() == '') {
          document.getElementById(id).focus();
          alert(emptyMsgs[id]);
          flag = 1;
          return true;
        } else {
          if (ptn[id]) {
            if (!ptn[id].test(elms[i].value.trim())) {
              document.getElementById(id).focus();
              if (errorMsgs[id]) {
                alert(errorMsgs[id]);
                flag = 1;
                return true;
              }
            }
          }
        }
      }
    });

    if (flag === 0) {
      if (document.getElementById('note').checked) {
        if (confirm(':::Are you sure you want to receive notifications?')) {
          document.getElementById('frm').submit();
        }
      } else {
        if (confirm(':::Are you sure you DO NOT want to receive notifications?')) {
          document.getElementById('frm').submit();
        }
      }
    } else {
      return false;
    }

  }

}

document.getElementById('sbm').onclick = () => {
  const inps = document.getElementsByClassName('sm');
  const validate = new Validator(inps);
};

