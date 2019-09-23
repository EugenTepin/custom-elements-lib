import React from 'react';
import ReactDOM from 'react-dom';

function RemoveBtn(props) {
  return (
    <button
      onClick={(e) => {
        props.remove();
      }}
    >
      Remove
    </button>
  );
}

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
