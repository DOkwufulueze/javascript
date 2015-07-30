'use strict'

//class CheckedBox definition
class CheckedBox {

  //CheckedBox constructor
  constructor() {
    this._checkedBoxes = [];//empty array of checked boxes
    this._none = document.getElementById('None');
  }

  //defining CheckedBox methods
  confirmMaximum(box) {
    if (box.id === 'None') {
      this._uncheckDays();
    } else {
      this._none.checked = false;
      const all = this._checkedBoxes;
      if (all.length >= 3) {
        alert(':::Only 3 days can be selected.');
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

  removeBox(box) {
    const ind = this._checkedBoxes.indexOf(box);
    this._checkedBoxes.splice(ind, 1);
  }
}

//instantiating a CheckedBox object
const checkedBox = new CheckedBox();

const form = document.getElementById('form');
form.addEventListener('click', (theEvent) => {
  const child = theEvent.target;
  if (child.id) {
    if(child.checked){
      checkedBox.confirmMaximum(child);
    } else {
      checkedBox.removeBox(child);
    }
  }
});

