'use strict'

class ChildListShower {

  //ChildListShower constructor
  constructor(childList) {
    this._childList = childList;
    this._childListChildren = this._childList.children;
  }

  //defining ChildListShower methods
  showChildList() {
    this._childList.style.display = 'block';
    const children = this._childListChildren;
    Object.keys(children).forEach((child) => {
      if (children[child].tagName == 'INPUT') {
        children[child].checked = true;
      }
    });
    this._childList.parentNode.parentNode.scrollTop = this._childList.parentNode.parentNode.scrollHeight;
  }

  hideChildList() {
    const children = this._childListChildren;
    Object.keys(children).forEach((child) => {
      if (children[child].tagName == 'INPUT') {
        children[child].checked = false;
      }
    });
    this._childList.style.display = 'none';
  }

}

//Collecting the parents' and Listening to onclick event
const parents = document.getElementsByClassName('parent');

Object.keys(parents).forEach((parent) => {
  if (!isNaN(parent)) {
    let theParent = parents[parent];
    theParent.addEventListener('click', () => {

      //Getting the child list
      let childList = document.getElementById(theParent.value);

      //instantiating a ChildListShower object
      const childListShower = new ChildListShower(childList);

      //invoking ChildListShower's showChildList and hideChildList  Method
      if (theParent.checked) {
        childListShower.showChildList();
      } else {
        childListShower.hideChildList();
      }
    });
  }
});

