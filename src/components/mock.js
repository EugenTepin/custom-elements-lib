import React from 'react';
import ReactDOM from 'react-dom';

function Mock(props) {
  return <span>Hello, {props.name}</span>;
}

class MockElement extends HTMLElement {
  set name(value) {
    this._name = value;
    console.log(value);
    this.render();
  }
  get name() {
    return this._name;
  }

  render() {
    ReactDOM.render(<Mock name={this.name.toString()} />, this);
  }

  connectedCallback() {
    this._name = 'test';
    this.render();
  }
}

export default MockElement;
