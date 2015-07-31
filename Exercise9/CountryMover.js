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
    let selectedData = 0;
    let selectedValue;
    let selectedText;

    //moving all selected data, decrement pointer to avoid skipping
    for (let i = fromBox.options.length - 1; i > -1; i--) {
      if (fromBox.options[i].selected === true) {
        const newOption = document.createElement("OPTION");
        selectedValue = fromBox.options[i].value;
        selectedText = fromBox.options[i].text;
        newOption.text = selectedText;
        newOption.value = selectedValue;
        toBox.appendChild(newOption);
        fromBox.remove(i);
        selectedData += 1;
      }
    }

    if (selectedData === 0) {
      alert(':::Please make your selections.');
    } else {
      
      //sort the whole new collection
      this._sortBox(toBox);
    }
  }

  _sortBox(box) {
    const data = {};
    const selectedValues = [];
    const selectedTexts = [];
    const ln = box.options.length;
    let key;
    let newOption;
    
    //Prepare collection for sorting and empty box
    for (let i = ln - 1; i > -1; i--) {
      selectedTexts.push(box.options[i].text);
      selectedValues.push(box.options[i].value);
      data[box.options[i].text] = box.options[i].value;
      box.remove(i);
    }

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
    for (let i = 0 ; i < ln ; i++) {
      newOption = document.createElement('OPTION');
      let selectedText = selectedTexts[i];
      newOption.text = selectedText;
      newOption.value = data[selectedText];
      box.appendChild(newOption);
    }
  }
}

//Setting buttons to box orders
const boxButtons = {
  add : {
    first : document.getElementById('countriesBox1'),
    second : document.getElementById('countriesBox2'),
  },

  remove : {
    first : document.getElementById('countriesBox2'),
    second : document.getElementById('countriesBox1'),
  },
};

Object.keys(boxButtons).forEach((button) => {
  document.getElementById(button).addEventListener('click', () => {

    //Instantiating a CountryMover object
    new CountryMover(boxButtons[button].first, boxButtons[button].second);
  });
});

