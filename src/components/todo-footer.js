import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

class TodoFooter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {clicks: 0};
  // }
    render() {
        const count = this.props.count;
        if(count === 0){
            return null;
        }
        //const alienHandler = (this.props.handler)? this.props.handler : () => {};
//onClick={(e) => { this.setState({clicks: this.state.clicks +1 }) } }
//title={ this.state.clicks}


        const clearBtn = (this.props.hasCompleted)? <button className="clear-completed" onClick= {() => {this.props.removeCompleted();}}>Clear Completed</button>:'';
        return (
        <footer className="footer" >
        <span className="todo-count"><strong>{count}</strong> {count === 1 ? 'item' : 'items'} left</span>
        <ul className="filters">
            <li>
                <NavLink to="/" activeClassName="selected" onClick={(e) => {console.log("/");}} >All</NavLink>
            </li>
            <li>
                <NavLink to="/active" activeClassName="selected"  onClick={(e) => {console.log("/active");}}>Active</NavLink>
            </li>
            <li>
                <NavLink to="/completed" activeClassName="selected"  onClick={(e) => {console.log("/completed")}} >Completed</NavLink>
            </li>
        </ul>
        {clearBtn}
        </footer>
        );
    }
}
 
class ReactTodoFooter extends HTMLElement {

  set status(value) {
    this._status = value;
    this.render();
  }
  get status() {
    return this._status;
  }

  set count(value) {
    this._count = value;
    this.render();
  }
  get count() {
    return this._count;
  }

  set hasCompleted(value) {
    this._hasCompleted = value;
    this.render();
  }
  get hasCompleted() {
    return this._hasCompleted;
  }

  set removeCompleted(value) {
    this._removeCompleted = value;
    this.render();
  }
  get removeCompleted() {
    return this._removeCompleted;
  }

    render(){

        ReactDOM.render(
            <TodoFooter  count={this._count}  hasCompleted={this._hasCompleted} removeCompleted={this._removeCompleted}/>,
            this);
    }

    connectedCallback() {
      this.addEventListener('nav-link-click', (e) => {console.log(e)});  
      // const event = new CustomEvent('nav-link-click', { detail: {msg: "bingo!"}, bubbles: true });
      // this.dispatchEvent(event); 
        
        this.render();
    }
 }


export default ReactTodoFooter;