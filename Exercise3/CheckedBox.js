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
    const form = this._form;
    form.addEventListener('click', (theEvent) => {
      const child = theEvent.target;
      if (child.id) {
        if(child.checked){
          this._confirmMaximum(child);
        } else {
          this._removeBox(child);
        }
      }
    });

  }

  //defining CheckedBox methods
  _confirmMaximum(box) {
    if (box.id === 'None') {
      this._uncheckDays();
    } else {
      this._none.checked = false;
      const all = this._checkedBoxes;
      if (all.length >= 3) {
        alert(`:::You already selected ${all[0].value}, ${all[1].value}, ${all[2].value}. Only 3 days can be selected.`);
        box.checked = false;
      } else {
        this._addChecked(box);
      }
    }
  }

  _addChecked(box) {
    this._checkedBoxes.push(box);
  }

  _uncheckDays() {
    const all = this._checkedBoxes;
    Object.keys(all).forEach((i) => {
      if (all[i].id !== 'None') {
        all[i].checked = false;
      }
    });    
    this._checkedBoxes=[];
  }

  _removeBox(box) {
    const ind = this._checkedBoxes.indexOf(box);
    this._checkedBoxes.splice(ind, 1);
  }
}

const form = document.getElementById('form');

//instantiating a CheckedBox object
new CheckedBox(form);

