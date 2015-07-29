'use strict'

class Row {

  //Row constructor
  constructor(tbl) {
    this._tbl = tbl;
    this._pattern = {
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/,
    };

    this._msg = {
      email : {
        empty : ':::Please enter an email',
        invalid : ':::Please enter a valid email',
      },

      name : {
        empty : ':::Please enter a name',
        invalid : ':::Please enter a valid name',
      },
      
    };

  }

  //defining Row methods in the prototype
  createRow() {
    rowcounter += 1;
    const cnt = rowcounter;

    //creating elements using createTag(cursor,display,element,id,innerHtml,onclick,placeholder,textAlign,type,value,width)
    const row = this._createTag('NA','NA','TR',`row~${cnt}`,'NA','NA','NA','NA','NA','NA');
    const clmn1 = this._createTag('NA','NA','TD',`clmn1~${cnt}`,'NA','NA','NA','left','NA','NA','NA');
    const clmn2 = this._createTag('NA','NA','TD',`clmn2~${cnt}`,'NA','NA','NA','left','NA','NA','NA');
    const clmn3 = this._createTag('NA','NA','TD',`clmn3~${cnt}`,'NA','NA','NA','left','NA','NA','NA');
    
    const txt = this._createTag('NA','inline-block','INPUT',`txt~${cnt}`,'NA','NA','Name','NA','text','NA','100%');
    const ml = this._createTag('NA','inline-block','INPUT',`ml~${cnt}`,'NA','NA','Email','NA','email','NA','100%');
    const span1 = this._createTag('NA','none','SPAN',`span1~${cnt}`,'NA','NA','NA','NA','NA','NA','100%');
    const span2 = this._createTag('NA','none','SPAN',`span2~${cnt}`,'NA','NA','NA','NA','NA','NA','100%');
    
    const save = this._createTag('NA','inline-block','INPUT',`save~${cnt}`,'NA',() => { this._saveRow(cnt); },'NA','NA','button','Save','100%');
    const edit = this._createTag('pointer','none','A',`edit~${cnt}`,'Edit','NA','NA','NA','NA','NA','45%');
    const del = this._createTag('pointer','none','A',`del~${cnt}`,'Delete','NA','NA','NA','NA','NA','45%');
    
    clmn1.appendChild(txt);
    clmn2.appendChild(ml);
    clmn1.appendChild(span1);
    clmn2.appendChild(span2);
    clmn3.appendChild(save);
    clmn3.appendChild(edit);
    clmn3.appendChild(del);
    row.appendChild(clmn1);
    row.appendChild(clmn2);
    row.appendChild(clmn3);

    this._tbl.appendChild(row);
    return row;
  }

  _createTag(cursor,display,element,id,innerHtml,onclick,placeholder,textAlign,type,value,width) {
    const elm = document.createElement(element);
    if (cursor !== 'NA') {
      elm.style.cursor = cursor;
    }

    if (display !== 'NA') {
      elm.style.display = display;
    }

    if (id !== 'NA') {
      elm.id = id;
    }

    if (innerHtml !== 'NA') {
      elm.innerHTML = innerHtml;
    }

    if (onclick !== 'NA') {
      elm.onclick = onclick;
    }

    if (placeholder !== 'NA') {
      elm.placeholder = placeholder;
    }

    if (type !== 'NA') {
      elm.type = type;
    }

    if (textAlign !== 'NA') {
      elm.style.textAlign = textAlign;
    }

    if (value !== 'NA') {
      elm.value = value;
    }

    if (width !== 'NA') {
      elm.style.width = width;
    }
    
    return elm;
  }

  _isValidInput(src,renderer, val, title, cnt) {
    if (val.trim() !== '') {
      if (this._pattern[title].test(val)) {
        renderer.innerHTML = val;
        return true;
      } else {
        src.focus();
        alert(this._msg[title].invalid);
        return false;
      }
    } else {
      src.focus();
      alert(this._msg[title].empty);
      return false;
    }
  }

  _saveRow(cnt) {
    
    //Validating Name
    if (document.getElementById(`span1~${cnt}`) && document.getElementById(`txt~${cnt}`)) {
      const src = document.getElementById(`txt~${cnt}`);
      const renderer = document.getElementById(`span1~${cnt}`);
      const val = src.value;
      const title = 'name';
      if (!this._isValidInput(src,renderer, val, title, cnt)) {
        return false;
      }
    } else{
      return false;
    }

    //Validating Email
    if (document.getElementById(`span2~${cnt}`) && document.getElementById(`ml~${cnt}`)) {
      const src = document.getElementById(`ml~${cnt}`);
      const renderer = document.getElementById(`span2~${cnt}`);
      const val = src.value;
      const title = 'email';
      if (!this._isValidInput(src,renderer, val, title, cnt)) {
        return false;
      }
    } else{
      return false;
    }

    //Setting the edit and delete links to do their functions
    if (document.getElementById(`edit~${cnt}`)) {
      const edit = document.getElementById(`edit~${cnt}`);
      edit.onclick = () => { this._editRow(cnt); };
    } else{
      return false;
    }

    if (document.getElementById(`del~${cnt}`)) {
      const del = document.getElementById(`del~${cnt}`);
      del.onclick = () => { this._deleteRo(cnt); };
    } else{
      return false;
    }

    //Saving inputs
    if (confirm(':::Are you sure you want to Save record?') == true) {

      //Reveal Edit and Delete Links and Hiding Save Button
      document.getElementById(`save~${cnt}`).style.display = 'none';
      document.getElementById(`txt~${cnt}`).style.display = 'none';
      document.getElementById(`ml~${cnt}`).style.display = 'none';
      document.getElementById(`span1~${cnt}`).style.display = 'inline-block';
      document.getElementById(`span2~${cnt}`).style.display = 'inline-block';
      document.getElementById(`edit~${cnt}`).style.display = 'inline-block';
      document.getElementById(`del~${cnt}`).style.display = 'inline-block';
    }

  }

  _editRow(cnt) {
    document.getElementById(`span1~${cnt}`).style.display = 'none';
    document.getElementById(`span2~${cnt}`).style.display = 'none';
    document.getElementById(`edit~${cnt}`).style.display = 'none';
    document.getElementById(`del~${cnt}`).style.display = 'none';
    document.getElementById(`txt~${cnt}`).style.display = 'inline-block';
    document.getElementById(`ml~${cnt}`).style.display = 'inline-block';
    document.getElementById(`save~${cnt}`).style.display = 'inline-block';
  }

  _deleteRo(cnt) {
    const cnf = confirm(':::Are you sure you want to Delete record?');
    if (cnf === true) {
      this._tbl.removeChild(document.getElementById(`row~${cnt}`));
    }

  }

}

let rowcounter = 0;
const tbl = document.getElementById('tbl');

//instantiating a Row object
const instant = new Row(tbl);
document.getElementById('add').onclick = () => {

  //invoking Row's createRow Method
  instant.createRow();
};
