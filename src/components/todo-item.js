import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Props
 * todoTitle
 * todoCompleted
 * editing
 * todoEdit
 * todoToggle
 * todoRemove
 */

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('TodoItem props');
    console.log(this.props);
    this.state = {
      value: this.props.todoTitle,
      satus: this.props.todoCompleted,
      editing: this.props.editing
    };
  }
  todoEdit = (event) => {
    this.setState({ value: event.target.value });
    this.props.todoEdit();
  };

  todoToggle = () => {
    this.setState({ status: !this.state.status });
    this.props.todoToggle();
  };

  render() {
    console.log('TodoItem state');
    console.log(this.state);
    let itemClass = this.state.status ? 'completed' : '';
    let editInput = '';
    if (this.state.editing) {
      itemClass += ' editing';
      editInput = (
        <input
          type="text"
          className="edit"
          onChange={(e) => {
            this.todoEdit(e);
          }}
          onBlur={(e) => {
            this.setState({ editing: false });
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
              this.setState({ editing: false });
            }
          }}
          value={this.state.value}
        />
      );
    }

    return (
      <li className={itemClass}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={this.state.status}
            onClick={(e) => {
              this.todoToggle();
            }}
          />
          <label
            onDoubleClick={(e) => {
              this.setState({ editing: true });
            }}
          >
            {this.state.value}
          </label>
          <button
            className="destroy"
            onClick={(e) => {
              this.props.todoRemove();
            }}
          ></button>
        </div>
        {editInput}
      </li>
    );
  }
}

class ReactTodoItem extends HTMLElement {
  set todoTitle(value) {
    this._todoTitle = value;
    //this._value = value; // test
    this.render();
  }
  get todoTitle() {
    return this._todoTitle;
  }

  set todoCompleted(value) {
    this._todoCompleted = value;
    this.render();
  }

  get todoCompleted() {
    return this._todoCompleted;
  }

  set editing(value) {
    console.log('editing is set to: ' + value);
    this._editing = value;
    this.render(); // maybe this should be removed
  }

  get editing() {
    return this._editing;
  }

  // get value() {
  //   return this._value;
  // }

  dispatchCustomEvent(name, detail) {
    var event =
      detail !== undefined
        ? new CustomEvent(name, { detail })
        : new CustomEvent(name);

    return this.dispatchEvent(event);
  }

  todoToggle() {
    this.dispatchCustomEvent('todo-toggle');
  }

  todoRemove() {
    this.dispatchCustomEvent('todo-remove');
  }

  todoEdit() {
    this.value = this._reactComponent.state.value;
    this.dispatchCustomEvent('todo-edit');
  }

  render() {
    this._reactComponent = ReactDOM.render(
      <TodoItem
        todoTitle={this._todoTitle}
        todoCompleted={this._todoCompleted}
        editing={this._editing}
        todoEdit={this.todoEdit.bind(this)}
        todoToggle={this.todoToggle.bind(this)}
        todoRemove={this.todoRemove.bind(this)}
      />,
      this
    );
  }

  connectedCallback() {
    console.log('Element is connected.');
    console.log(this._todoTitle);
    this.render();
  }
}

export default ReactTodoItem;
