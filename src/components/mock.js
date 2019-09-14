import React from "react";
import ReactDOM from 'react-dom';

function Mock(props){
    return <span>Hello, {props.name}</span>;
}

class MockElement extends HTMLElement {
  constructor() {
    super();
  this.name = '';
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

    render(jsx){
        ReactDOM.render(jsx,this);
    }

    connectedCallback() {
        this.render(<Mock/>);
    }
 }


export default MockElement;