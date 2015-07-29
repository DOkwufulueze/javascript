'use strict'

class CountryMover {

  //class CountrMover constructor
  constructor(fromBox, toBox) {
    this._fromBox = fromBox;
    this._toBox = toBox;
  }

  moveSelection() {
    const fromBox = this._fromBox;
    const toBox = this._toBox;
    let selectd = 0;
    let val;
    let txt;

    //moving all selected data, decrement pointer to avoid skipping
    for (let i = fromBox.options.length - 1; i > -1; i--) {
      if (fromBox.options[i].selected === true) {
        const newOption = document.createElement("OPTION");
        val = fromBox.options[i].value;
        txt = fromBox.options[i].text;
        newOption.text = txt;
        newOption.value = val;
        toBox.appendChild(newOption);
        fromBox.remove(i);
        selectd += 1;
      }
    }

    if (selectd === 0) {
      alert(':::Please make your selections.');
    } else {
      
      //sort the whole new collection
      this._sortBox(toBox);
    }
  }

  _sortBox(box) {
    const data = {};
    const vals = [];
    const txts = [];
    const ln = box.options.length;
    let key;
    let newOption;
    
    //Prepare collection for sorting and empty box
    for (let i = ln - 1; i > -1; i--) {
      txts.push(box.options[i].text);
      vals.push(box.options[i].value);
      data[box.options[i].text] = box.options[i].value;
      box.remove(i);

    }

    //Actual sorting
    txts.sort(
      (a, b) => {
        if (a < b) {
          return -1;
        } else if (a === b) {
          return 0;
        } else if (a > b) {
          return 1;
        }

      }
    );

    //Repopulating box with sorted data
    for (let i = 0 ; i < ln ; i++) {
      newOption = document.createElement('OPTION');
      let txt = txts[i];
      newOption.text = txt;
      newOption.value = data[txt];
      box.appendChild(newOption);
    }

  }

}

//Setting buttons to box orders
const boxBtns = {
  add : {
    first : document.getElementById('countriesBox1'),
    second : document.getElementById('countriesBox2'),
  },

  remove : {
    first : document.getElementById('countriesBox2'),
    second : document.getElementById('countriesBox1'),
  },

};

Object.keys(boxBtns).forEach((btn) => {
  document.getElementById(btn).onclick = () => {

    //Instantiating a CountryMover object
    new CountryMover(boxBtns[btn].first, boxBtns[btn].second).moveSelection();
  };

});
