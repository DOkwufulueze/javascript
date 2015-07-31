'use strict'

//Collecting the checkboxes' id's and child id's and Listening to onclick event
const callerBox = {
  colorBox : 'color',
  drinksBox : 'drinks',
  moviesBox : 'movies',
  bikesBox : 'bikes',
};

Object.keys(callerBox).forEach((itm) => {
  document.getElementById(itm).onclick = () => { toggleChildList(document.getElementById(itm), callerBox[itm]); };
});
 
class ChildList {

  //ChildList constructor
  constructor(childList) {
    this._itself = document.getElementById(childList);
    this._childre = this._itself.children;
  }

  //defining ChildList methods in the prototype
  showSelf() {
    this._itself.style.display = 'block';
    const chd = this._childre;
    Object.keys(chd).forEach((i) => {
      if (chd[i].tagName == 'INPUT') {
        chd[i].checked = true;
      }

    });
    
    this._itself.parentNode.parentNode.scrollTop = this._itself.parentNode.parentNode.scrollHeight;
  }

  hideSelf() {
    const chd = this._childre;
    Object.keys(chd).forEach((i) => {
      if (chd[i].tagName == 'INPUT') {
        chd[i].checked = false;
      }

    });

    this._itself.style.display = 'none';
  }

}

function toggleChildList(callerBox,str){

  //instantiating a ChildList object
  const cl = new ChildList(str);

  //invoking ChildList's showSelf and hideSelf  Method
  if (callerBox.checked) {
    cl.showSelf();
  } else {
    cl.hideSelf();
  }

}
