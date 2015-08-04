'use strict'

//class CheckedBox definition
class CheckedBox {

  //CheckedBox constructor
  constructor(form) {
    this._checkedBoxes = [];//empty array of checked boxes
    this._none = document.getElementById('None');
    this._form = form;
    this._init();
  }

  _init() {
    this._addEventListenerTo(this._form);
  }

  _addEventListenerTo(form) {
    form.addEventListener('click', (theEvent) => {
      let child = theEvent.target;
      if (child.id) {
          if (child === this._none) {
          this._uncheckDays();
        } else {
          if(child.checked){
            this._confirmMaximum(child);
          } else {
            this._removeBox(child);
          }
        }
      }
    });

  }

  //defining CheckedBox methods
  _confirmMaximum(box) {
    this._uncheckNone();
    this._attemptAddingCheckbox(box, this._checkedBoxes);
  }

  _uncheckNone() {
    this._none.checked = false;
  }
  
  _attemptAddingCheckbox(box, checkedBoxesArray) {
    if(this._isNotMaximumSize(checkedBoxesArray)){
      this._addChecked(box);
    } else {
      this._unCheckBox(box);
    }
  }

  _isNotMaximumSize(checkedBoxesArray) {
    if (checkedBoxesArray.length >= 3) {
      return false;
    } else {
      return true;
    }
  }

  _unCheckBox(box) {
    const selectedDays = this._checkedBoxes.map((entity) => { return entity.value; }).join(', ');
    alert(`:::You already selected ${selectedDays}. Only 3 days can be selected.`);
    box.checked = false;
  }

  _addChecked(box) {
    this._checkedBoxes.push(box);
  }

  _uncheckDays() {
    const checkedBoxesArray = this._checkedBoxes;
    Object.keys(checkedBoxesArray).forEach((i) => {
      checkedBoxesArray[i].checked = false;
    });    
    this._checkedBoxes=[];
  }

  _removeBox(box) {
    const ind = this._checkedBoxes.indexOf(box);
    this._checkedBoxes.splice(ind, 1);
  }
}

const form = document.form;

//instantiating a CheckedBox object
new CheckedBox(form);

