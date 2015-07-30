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

const referenceDiv = document.getElementById('referenceDiv');
referenceDiv.addEventListener('click', (theEvent) => {
  const child = theEvent.target;
  if (child.id) {
    const mainParentForView = referenceDiv.parentNode;
    const childList = document.getElementById(child.value);
    if(child.checked){
      new ChildListShower(mainParentForView, childList).showChildList();
    } else {
      new ChildListShower(mainParentForView, childList).hideChildList();
    }
  }
});


