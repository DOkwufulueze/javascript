'use strict'

class Row {

  //Row constructor
  constructor(table) {
    this._table = table;
    this._pattern = {
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^[a-zA-Z\s]+((['-])*[a-zA-Z\s]+)*$/,
    };

    this._message = {
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
    const count = rowcounter;

    //creating elements using createTag(cursor,display,element,id,innerHtml,onclick,placeholder,textAlign,type,value,width)
    const row = this._createTag('NA','NA','TR',`row~${count}`,'NA','NA','NA','NA','NA','NA');
    const column1 = this._createTag('NA','NA','TD',`column1~${count}`,'NA','NA','NA','left','NA','NA','NA');
    const column2 = this._createTag('NA','NA','TD',`column2~${count}`,'NA','NA','NA','left','NA','NA','NA');
    const column3 = this._createTag('NA','NA','TD',`column3~${count}`,'NA','NA','NA','left','NA','NA','NA');
    const textField = this._createTag('NA','inline-block','INPUT',`textField~${count}`,'NA','NA','Name','NA','text','NA','100%');
    const mailField = this._createTag('NA','inline-block','INPUT',`mailField~${count}`,'NA','NA','Email','NA','email','NA','100%');
    const span1 = this._createTag('NA','none','SPAN',`span1~${count}`,'NA','NA','NA','NA','NA','NA','100%');
    const span2 = this._createTag('NA','none','SPAN',`span2~${count}`,'NA','NA','NA','NA','NA','NA','100%');
    const save = this._createTag('NA','inline-block','INPUT',`save~${count}`,'NA',() => { this._saveRow(count); },'NA','NA','button','Save','100%');
    const edit = this._createTag('pointer','none','A',`edit~${count}`,'Edit','NA','NA','NA','NA','NA','45%');
    const deleteButton = this._createTag('pointer','none','A',`deleteButton~${count}`,'Delete','NA','NA','NA','NA','NA','45%');
    column1.appendChild(textField);
    column2.appendChild(mailField);
    column1.appendChild(span1);
    column2.appendChild(span2);
    column3.appendChild(save);
    column3.appendChild(edit);
    column3.appendChild(deleteButton);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    this._table.appendChild(row);
    return row;
  }

  _createTag(cursor,display,element,id,innerHtml,onclick,placeholder,textAlign,type,value,width) {
    const element = document.createElement(element);
    if (cursor !== 'NA') {
      element.style.cursor = cursor;
    }

    if (display !== 'NA') {
      element.style.display = display;
    }

    if (id !== 'NA') {
      element.id = id;
    }

    if (innerHtml !== 'NA') {
      element.innerHTML = innerHtml;
    }

    if (onclick !== 'NA') {
      element.onclick = onclick;
    }

    if (placeholder !== 'NA') {
      element.placeholder = placeholder;
    }

    if (type !== 'NA') {
      element.type = type;
    }

    if (textAlign !== 'NA') {
      element.style.textAlign = textAlign;
    }

    if (value !== 'NA') {
      element.value = value;
    }

    if (width !== 'NA') {
      element.style.width = width;
    }
    
    return element;
  }

  _isValidInput(source,renderer, sourceValue, title, count) {
    if (sourceValue.trim() !== '') {
      if (this._pattern[title].test(sourceValue)) {
        renderer.innerHTML = sourceValue;
        return true;
      } else {
        source.focus();
        alert(this._message[title].invalid);
        return false;
      }
    } else {
      source.focus();
      alert(this._message[title].empty);
      return false;
    }
  }

  _saveRow(count) {
    
    //Validating Name
    if (document.getElementById(`span1~${count}`) && document.getElementById(`textField~${count}`)) {
      const source = document.getElementById(`textField~${count}`);
      const renderer = document.getElementById(`span1~${count}`);
      const sourceValue = source.value;
      const title = 'name';
      if (!this._isValidInput(source,renderer, sourceValue, title, count)) {
        return false;
      }
    } else{
      return false;
    }

    //Validating Email
    if (document.getElementById(`span2~${count}`) && document.getElementById(`mailField~${count}`)) {
      const source = document.getElementById(`mailField~${count}`);
      const renderer = document.getElementById(`span2~${count}`);
      const sourceValue = source.value;
      const title = 'email';
      if (!this._isValidInput(source,renderer, sourceValue, title, count)) {
        return false;
      }
    } else{
      return false;
    }

    //Setting the edit and delete links to do their functions
    if (document.getElementById(`edit~${count}`)) {
      const edit = document.getElementById(`edit~${count}`);
      edit.onclick = () => { this._editRow(count); };
    } else{
      return false;
    }

    if (document.getElementById(`deleteButton~${count}`)) {
      const deleteButton = document.getElementById(`deleteButton~${count}`);
      deleteButton.onclick = () => { this._deleteRo(count); };
    } else{
      return false;
    }

    //Saving inputs
    if (confirm(':::Are you sure you want to Save record?') == true) {

      //Reveal Edit and Delete Links and Hiding Save Button
      document.getElementById(`save~${count}`).style.display = 'none';
      document.getElementById(`textField~${count}`).style.display = 'none';
      document.getElementById(`mailField~${count}`).style.display = 'none';
      document.getElementById(`span1~${count}`).style.display = 'inline-block';
      document.getElementById(`span2~${count}`).style.display = 'inline-block';
      document.getElementById(`edit~${count}`).style.display = 'inline-block';
      document.getElementById(`deleteButton~${count}`).style.display = 'inline-block';
    }
  }

  _editRow(count) {
    document.getElementById(`span1~${count}`).style.display = 'none';
    document.getElementById(`span2~${count}`).style.display = 'none';
    document.getElementById(`edit~${count}`).style.display = 'none';
    document.getElementById(`deleteButton~${count}`).style.display = 'none';
    document.getElementById(`textField~${count}`).style.display = 'inline-block';
    document.getElementById(`mailField~${count}`).style.display = 'inline-block';
    document.getElementById(`save~${count}`).style.display = 'inline-block';
  }

  _deleteRo(count) {
    const cnf = confirm(':::Are you sure you want to Delete record?');
    if (cnf === true) {
      this._table.removeChild(document.getElementById(`row~${count}`));
    }
  }
}

let rowcounter = 0;
const table = document.getElementById('table');

//instantiating a Row object
const instant = new Row(table);
document.getElementById('add').addEventListener('click', () => {

  //invoking Row's createRow Method
  instant.createRow();
});

