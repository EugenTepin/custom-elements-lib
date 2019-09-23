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
    this.state = {
      value: this.props.todoTitle,
      satus: this.props.todoCompleted,
      editing: this.props.editing
    };
  }
  todoEdit = (event) => {
    this.setState({ ...this.state, value: event.target.value });
    this.props.todoEdit();
  };

  todoToggle = () => {
    this.setState({ ...this.state, status: !this.state.status });
    this.props.todoToggle();
  };

  render() {
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
            this.setState({ ...this.state, editing: false });
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
              this.setState({ ...this.state, editing: false });
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
              this.setState({ ...this.state, editing: true });
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
    this._value = value; // test
    this.render();
  }

  set todoCompleted(value) {
    this._todoCompleted = value;
    this.render();
  }

  set editing(value) {
    console.log('editing is set to: ' + value);
    this._editing = value;
    this.render(); // maybe this should be removed
  }

  get value() {
    return this._value;
  }

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
    this._value = this._reactComponent.state.value;
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
    console.log(this._reactComponent);
  }

  connectedCallback() {
    console.log('Element is connected.');
    this.render();
  }
}

export default ReactTodoItem;
