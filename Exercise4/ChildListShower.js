'use strict'

class ChildListShower {

  //ChildListShower constructor
  constructor(mainParentForView, childList) {
    this._childList = childList;
    this._childListChildren = this._childList.children;
    this._mainParentForView = mainParentForView;
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
    this._mainParentForView.scrollTop = this._mainParentForView.scrollHeight;
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

      //Getting the child list and parent view port id
      let childList = document.getElementById(theParent.value);
      let mainParentForView = theParent.parentNode.parentNode.parentNode;

      //instantiating a ChildListShower object
      const childListShower = new ChildListShower(mainParentForView, childList);

      //invoking ChildListShower's showChildList and hideChildList  Method
      if (theParent.checked) {
        childListShower.showChildList();
      } else {
        childListShower.hideChildList();
      }
    });
  }
});

