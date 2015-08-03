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

    this._table = this._createElement('TABLE');
    this._table.id = 'main';
    this._init();
  }

  //defining Row methods
  _init() {
    this._showInitialTable(this._table);
  }

  _showInitialTable(table) {
    //_createElement takes the element type and the id of row
    const row = this._createElement('TR');
    const column1 = this._createElement('TH');
    column1.innerHTML = 'Name';
    const column2 = this._createElement('TH');
    column2.innerHTML = 'Email';
    const column3 = this._createElement('TH');
    column3.innerHTML = 'Action';
    const button = this._createElement('INPUT');
    button.type = 'button';
    button.value = 'Add New Row';
    button.addEventListener('click', () => {
      this._addNewRow();
    });
    
    //appending columns to rows
    this._appendElement(row, {column1, column2, column3});

    //appending row to table
    this._appendElement(table, {row});    

    //appending table and button to body
    this._appendElement(document.body, {table, button});
  }

  _createElement(tag) {
    return document.createElement(tag);
  }

  _addNewRow() {
    
    //creating elements using createElement(tag)
    const row = this._createElement('TR');
    const column1 = this._createElement('TD');
    const column2 = this._createElement('TD');
    const column3 = this._createElement('TD');
    const textField = this._createElement('INPUT');
    textField.type = 'text';
    const mailField = this._createElement('INPUT');
    mailField.type = 'text';
    const span1 = this._createElement('SPAN');
    const span2 = this._createElement('SPAN');
    const save = this._createElement('INPUT');
    const deleteLink = this._createElement('A');
    const edit = this._createElement('A');
    
    //Creating row group (the group of all the elements in a row)
    const rowGroup = this._createRowGroup(row, textField, mailField, span1, span2, save, edit, deleteLink);
    
    //formatting elements and creating target-event object for them using _formatElement and createTargetObject Methods
    this._formatElement(save,'save','NA','button','Save');
    const saveTargetObject = this._createTargetObject(save, () => {this._saveRow(rowGroup)});
    this._formatElement(edit,'edit','Edit','NA','NA');
    const editTargetObject = this._createTargetObject(edit, () => {this._editRow(rowGroup)});
    this._formatElement(deleteLink,'delete','Delete','NA','NA');
    const deleteTargetObject = this._createTargetObject(deleteLink, () => {this._deleteRow(row)});

    //Adding eventListener for the row using _addEventListener Method
    this._addEventListener(row, {saveTargetObject, editTargetObject, deleteTargetObject});

    //Appending elements to parents using _appendElement Method
    this._appendElement(column1, {textField, span1});
    this._appendElement(column2, {mailField, span2});
    this._appendElement(column3, {save, edit, deleteLink});
    this._appendElement(row, {column1, column2, column3});
    this._appendElement(this._table, {row});    
  }

  _createTargetObject(element, method) {
    return {
      targetElement : element,
      trigger : method,
    }
  }

  //Adding event listener to element
  _addEventListener(element, targetObjects) {
    element.addEventListener('click', (theEvent) => {
      const target = theEvent.target;
      Object.keys(targetObjects).forEach((targetObject) => {
        if (target === targetObjects[targetObject].targetElement) {
          targetObjects[targetObject].trigger();
        }
      });
    });
  }

  //Appending elements to parents
  _appendElement(element, elementsObject) {
    Object.keys(elementsObject).forEach((child) => {
      element.appendChild(elementsObject[child]);
    });
  }

  //Creating a row group
  _createRowGroup(row, textField, mailField, span1, span2, save, edit, deleteLink) {
    return {
      row,
      textField,
      mailField,
      span1,
      span2,
      save,
      edit,
      deleteLink,
    };
  }    

  //_formatElement formats an element with its parameters' values
  _formatElement(element, elementClass, innerHTML, type, value) {
    element.class = (elementClass !== 'NA') ? elementClass : '';
    element.innerHTML = (innerHTML !== 'NA') ? innerHTML : null;
    element.type = (type !== 'NA') ? type : '';
    element.value = (value !== 'NA') ? value : '';
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
    let flag = 0;

    //Validating entries and showing containing span
    const entries = {
      name : {
        title : 'name',
        source : rowGroup.textField,
        sourceValue : rowGroup.textField.value.trim(),
        renderingObject : rowGroup.span1,
      },

      email : {
        title : 'email',
        source : rowGroup.mailField,
        sourceValue : rowGroup.mailField.value.trim(),
        renderingObject : rowGroup.span2,
      },
    };

    Object.keys(entries).some((entry) => {
      if (!this._isValidInput(entries[entry].sourceValue, entries[entry].title)) {
        entries[entry].source.focus();
        alert(this._message[entries[entry].title].invalid);
        flag = 1;
        return true;
      } else if (this._isValidInput(entries[entry].sourceValue, entries[entry].title) === 'Empty') {
        entries[entry].source.focus();
        alert(this._message[entries[entry].title].empty);
        flag = 1;
        return true;
      } else{
        entries[entry].renderingObject.innerHTML = entries[entry].sourceValue;
      }
    });
    
    if (flag === 0) {
      //Saving inputs
      if (confirm(':::Are you sure you want to Save record?') == true) {

        //Reveal Edit and Delete Links and Hiding Save Button
        rowGroup.save.style.display = 'none';
        rowGroup.textField.style.display = 'none';
        rowGroup.mailField.style.display = 'none';
        rowGroup.span1.style.display = 'inline-block';
        rowGroup.span2.style.display = 'inline-block';
        rowGroup.edit.style.display = 'inline-block';
        rowGroup.deleteLink.style.display = 'inline-block';
      }
    }
  }

  _editRow(rowGroup) {
    rowGroup.save.style.display = 'inline-block';
    rowGroup.textField.style.display = 'inline-block';
    rowGroup.mailField.style.display = 'inline-block';
    rowGroup.span1.style.display = 'none';
    rowGroup.span2.style.display = 'none';
    rowGroup.edit.style.display = 'none';
    rowGroup.deleteLink.style.display = 'none';
  }

  _deleteRow(row) {
    const cnf = confirm(':::Are you sure you want to Delete record?');
    if (cnf === true) {
      this._table.removeChild(row);
    }
  }
}

new Table();

