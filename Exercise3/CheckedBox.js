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

//Collecting the checkboxes' and Listening to onclick event
const days = document.getElementsByTagName('INPUT');

Object.keys(days).forEach((day) => {
  if (!isNaN(day)) {
    let theDay = days[day];
    theDay.addEventListener('click', () => {

      //invoking CheckedBox' confirmMaximum and removeBox Methods
      if (theDay.checked) {
        checkedBox.confirmMaximum(theDay);
      } else {
        checkedBox.removeBox(theDay);
      }
    });
  }
});

