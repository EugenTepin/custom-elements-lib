import React from "react";
import ReactDOM from 'react-dom';

function Mock(props){
    return <span>Hello, {props.name}</span>;
}

class MockElement extends HTMLElement {

  set name(value) {
    this._name = value;
    this.render(<Mock name={this.name}/>);
  }
  get name() {
    return this._name;
  }

    render(jsx){
        ReactDOM.render(jsx,this);
    }

    connectedCallback() {
        this._name = '';
        this.render(<Mock name={this.name} />);
    }
 }


export default MockElement;