import React from 'react';
import ReactDOM from 'react-dom';
import RemoveBtn from 'components/remove';

class RemoveElement extends HTMLElement {
    set remove(value) {
      this._remove = value;
      console.log(value);
      this.render();
    }
  
    render() {
      ReactDOM.render(<RemoveBtn remove={this._remove} />, this);
    }
  
    connectedCallback() {
      this.render();
    }
  }
  
  export default RemoveElement;