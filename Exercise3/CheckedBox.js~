'use strict'

//Collecting the checkboxes' id's and Listening to onclick event
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'None',
];

days.forEach((day) => {
  document.getElementById(day).onclick = () => { addCheckedButton(document.getElementById(day)); };
});

//class CheckedBox definition
class CheckedBox {

  //CheckedBox constructor
  constructor() {
    this._checkedBoxes = [];//empty array of checked boxes
  }

  //defining CheckedBox methods
  confirmMaximum(box) {
    if (box === 'None') {
      this._uncheckDays();
    } else {
      document.getElementById('None').checked = false;
      const all = this._checkedBoxes;
      if (all.length >= 3) {
        alert(':::Only 3 days can be selected.');
        document.getElementById(box).checked = false;
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
      if (all[i] !== 'None') {
        document.getElementById(all[i]).checked = false;
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
const bc = new CheckedBox();

function addCheckedButton(str) {
  
  //invoking CheckedBox' confirmMaximum and removeBox Methods
  if (str.checked) {
    bc.confirmMaximum(str.id);
  } else {
    bc.removeBox(str.id);
  }

}
