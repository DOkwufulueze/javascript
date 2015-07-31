'use strict'

class Table {

  //Row constructor
  constructor() {
    this._pattern = {
      email : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
      name : /^(\s)*[a-zA-Z]+(\s)*((\s)*(['-])*(\s)*[a-zA-Z]+(\s)*)*$/,
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

    this._table = this._createElement('TABLE', 'NA', 'main');
    this._init();
  }

  //defining Row methods
  _init() {
    const table = this._table;
    
    //_createElement takes the element type and the id of row
    const row = this._createElement('TR', 'NA', 'row0');
    const column1 = this._createElement('TH', 'NA', 'column01');
    column1.innerHTML = 'Name';
    const column2 = this._createElement('TH', 'NA', 'column02');
    column2.innerHTML = 'Email';
    const column3 = this._createElement('TH', 'NA', 'column03');
    column3.innerHTML = 'Action';
    const button = this._createElement('INPUT', 'button', 'column03');
    button.value = 'Add New Row';
    button.addEventListener('click', () => {
      this._addNewRow();
    });
    
    //appending columns to rows
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);

    //appending row to table
    table.appendChild(row);
    document.body.appendChild(table);
    document.body.appendChild(button);
  }

  _createElement(tag, type, id) {
    const element = document.createElement(tag);
    element.id = id;
    if (type !== 'NA') {
      element.type = type;
    }
    return element;
  }

  _addNewRow() {
    rowcounter += 1;
    const count = rowcounter;

    //creating elements using createTag(called,cursor,display,element,id,innerHtml,placeholder,textAlign,type,value,width)
    const row = this._createElement('TR','NA',`row~${count}`);
    const column1 = this._createElement('TD','NA',`column1~${count}`);
    const column2 = this._createElement('TD','NA',`column2~${count}`);
    const column3 = this._createElement('TD','NA',`column3~${count}`);
    const textField = this._createElement('INPUT','text',`textField~${count}`);
    const mailField = this._createElement('INPUT','text',`mailField~${count}`);
    const span1 = this._createElement('SPAN','NA',`span1~${count}`);
    const span2 = this._createElement('SPAN','NA',`span2~${count}`);
    
    //save formatting
    const save = this._createElement('INPUT','button',`save~${count}`);
    save.class = 'save';
    save.value = 'Save';

    //edit formatting
    const edit = this._createElement('A','NA',`edit~${count}`);
    edit.class = 'edit';
    edit.innerHTML = 'Edit';

    //deleteButton formatting
    const deleteButton = this._createElement('A','NA',`deleteButton~${count}`);
    deleteButton.class = 'delete';
    deleteButton.innerHTML = 'Delete';

    const rowGroup = {
      row,
      textField,
      mailField,
      span1,
      span2,
      save,
      edit,
      deleteButton,
    };

    row.addEventListener('click', (theEvent) => {
      const target = theEvent.target;
      if (target.class) {
        const targetClass = target.class;
        if (targetClass === 'save') {
          this._saveRow(rowGroup);
        }

        if (targetClass === 'edit') {
          this._editRow(rowGroup);
        }
        
        if (targetClass === 'delete') {
          this._deleteRow(row);
        }
      }
    });

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

  _isValidInput(sourceValue, title) {
    if (sourceValue !== '') {
      if (this._pattern[title].test(sourceValue)) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Empty';
    }
  }

  _saveRow(rowGroup) {
    
    //Validating Name and showing containing span
    const source = rowGroup.textField;
    const renderer = rowGroup.span1;
    const sourceValue = source.value.trim();
    const title = 'name';
    if (!this._isValidInput(sourceValue, title)) {
      source.focus();
      alert(this._message[title].invalid);
      return false;
    } else if (this._isValidInput(sourceValue, title) === 'Empty') {
      source.focus();
      alert(this._message[title].empty);
      return false;
    } else{
      renderer.innerHTML = sourceValue;
    }

    //Validating Email and showing containing span
    const source = rowGroup.mailField;
    const renderer = rowGroup.span2;
    const sourceValue = source.value;
    const title = 'email';
    if (!this._isValidInput(sourceValue, title)) {
      source.focus();
      alert(this._message[title].invalid);
      return false;
    } else if (this._isValidInput(sourceValue, title) === 'Empty') {
      source.focus();
      alert(this._message[title].empty);
      return false;
    } else{
      renderer.innerHTML = sourceValue;
    }

    //Saving inputs
    if (confirm(':::Are you sure you want to Save record?') == true) {

      //Reveal Edit and Delete Links and Hiding Save Button
      rowGroup.save.style.display = 'none';
      rowGroup.textField.style.display = 'none';
      rowGroup.mailField.style.display = 'none';
      rowGroup.span1.style.display = 'inline-block';
      rowGroup.span2.style.display = 'inline-block';
      rowGroup.edit.style.display = 'inline-block';
      rowGroup.deleteButton.style.display = 'inline-block';
    }
  }

  _editRow(rowGroup) {
    rowGroup.save.style.display = 'inline-block';
    rowGroup.textField.style.display = 'inline-block';
    rowGroup.mailField.style.display = 'inline-block';
    rowGroup.span1.style.display = 'none';
    rowGroup.span2.style.display = 'none';
    rowGroup.edit.style.display = 'none';
    rowGroup.deleteButton.style.display = 'none';
  }

  _deleteRow(row) {
    const cnf = confirm(':::Are you sure you want to Delete record?');
    if (cnf === true) {
      this._table.removeChild(row);
    }
  }
}

let rowcounter = 0;
new Table();

