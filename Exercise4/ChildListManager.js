'use strict'

class ChildListManager {

  //ChildListManager constructor
  constructor(referenceDiv) {
    this._referenceDiv = referenceDiv;
    this._init();
  }

  _init() {
    this._attachEventListener(this._referenceDiv);
  }

  //Attaching event listener
  _attachEventListener(element) {
    element.addEventListener('click', (theEvent) => {
      const child = theEvent.target;
      if (child.id) {
        const mainParentForView = element.parentNode;
        const childList = document.getElementById(child.value);
        if(child.checked){
          this._showChildList(mainParentForView, childList);
        } else {
          this._hideChildList(mainParentForView, childList);
        }
      }
    });
  }

  //defining ChildListManager methods
  _showChildList(mainParentForView, childList) {
    childList.style.display = 'block';
    const children = childList.children;
    Object.keys(children).forEach((child) => {
      if (children[child].tagName == 'INPUT') {
        children[child].checked = true;
      }
    });
    mainParentForView.scrollTop = mainParentForView.scrollHeight;
  }

  _hideChildList(mainParentForView, childList) {
    const children = childList.children;
    Object.keys(children).forEach((child) => {
      if (children[child].tagName == 'INPUT') {
        children[child].checked = false;
      }
    });
    childList.style.display = 'none';
  }

}

const referenceDiv = document.getElementById('referenceDiv');
new ChildListManager(referenceDiv);

