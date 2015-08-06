'use strict'

class CountryMover {

  //class CountrMover constructor
  constructor(fromBox, toBox) {
    this._fromBox = fromBox;
    this._toBox = toBox;
    this._init();
  }

  _init() {
    const fromBox = this._fromBox;
    const toBox = this._toBox;
    this._moveSelectedData(fromBox, toBox);
  }

  _moveSelectedData(fromBox, toBox) {
    const selectedData = this._doMoveAndTrackSelectedData(fromBox, toBox);
    this._checkIfSelectedDataNotEmpty(selectedData, toBox);
  }

  _checkIfSelectedDataNotEmpty(selectedData, toBox) {
    if (selectedData === 0) {
      alert(':::Please make your selections.');
    } else {
      
      //sort the whole new collection
      this._sortBox(toBox);
    }
  }

  _doMoveAndTrackSelectedData(fromBox, toBox) {
    let selectedData = 0;
    let selectedText;
    let selectedValue;
    
    //moving all selected data, decrement pointer to avoid skipping
    for (let i = fromBox.options.length - 1; i > -1; i--) {
      if (fromBox.options[i].selected === true) {
        const newOption = document.createElement("OPTION");
        selectedText = fromBox.options[i].text;
        selectedValue = fromBox.options[i].value;
        newOption.text = selectedText;
        newOption.value = selectedValue;
        toBox.appendChild(newOption);
        fromBox.remove(i);
        selectedData += 1;
      }
    }

    return selectedData;
  }

  _sortBox(box) {
    const ln = box.options.length;
    
    //Prepare collection for sorting and empty box
    const dataAndSelectedTexts = this._collectDataAndEmptyBox(box, ln);
    const selectedTexts = dataAndSelectedTexts.selectedTexts;

    //Actual sorting
    selectedTexts.sort(
      (firstData, secondData) => {
        if (firstData < secondData) {
          return -1;
        } else if (firstData === secondData) {
          return 0;
        } else if (firstData > secondData) {
          return 1;
        }
      }
    );

    //Repopulating box with sorted data
    this._repopulateBoxWithSortedData(dataAndSelectedTexts.box, selectedTexts, dataAndSelectedTexts.data);
  }

  _collectDataAndEmptyBox(box, ln) {
    const data = {};
    const selectedTexts = [];
    for (let i = ln - 1; i > -1; i--) {
      selectedTexts.push(box.options[i].text);
      data[box.options[i].text] = box.options[i].value;
      box.remove(i);
    }

    return {
      data: data,
      selectedTexts: selectedTexts,
      box: box,
    };
  }

  _repopulateBoxWithSortedData(box, selectedTexts, data) {
    for (let i = 0 ; i < selectedTexts.length ; i++) {
      let newOption = document.createElement('OPTION');
      let selectedText = selectedTexts[i];
      newOption.text = selectedText;
      newOption.value = data[selectedText];
      box.appendChild(newOption);
    }
  }
}

//Setting buttons to box orders
const first = document.getElementById('countriesBox1');
const second = document.getElementById('countriesBox2');
const boxButtons = {
  add : {
    first : first,
    second : second,
  },

  remove : {
    first : second,
    second : first,
  },
};

const main = document.getElementById('main');
main.addEventListener('click', (eventObjet) => {
  const button = eventObjet.target.id;
  if (boxButtons[button]) {
    new CountryMover(boxButtons[button].first, boxButtons[button].second);
  }
});

