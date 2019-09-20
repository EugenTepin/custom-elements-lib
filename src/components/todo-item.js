import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    const {
      todoToggle,
      todoRemove,
      todoEdit,
      todoStopEdit,
      todoSubmit,
      todoCancelEdit,
      todoOnKeyUp,
      todoTitle,
      todoCompleted,
      editing
    } = this.props;

    let itemClass = todoCompleted ? 'completed' : '';
    const editInput = '';
    if (editing) {
      itemClass += ' editing';
      editInput = (
        <input
          type="text"
          className="edit"
          onKeyUp={(e) => {
            todoOnKeyUp(e);
          }}
          onBlur={(e) => {
            todoStopEdit();
          }}
          value={todoTitle}
        />
      );
    }

    return (
      <li className={itemClass}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={todoCompleted}
            onClick={(e) => {
              todoToggle();
            }}
          />
          <label
            onDoubleClick={(e) => {
              console.log('edit');
              todoEdit();
            }}
          >
            {todoTitle}
          </label>
          <button
            className="destroy"
            onClick={(e) => {
              todoRemove();
            }}
          ></button>
        </div>
        {editInput}
      </li>
    );
  }
}

class ReactTodoItem extends HTMLElement {
  todoToggle() {
    var event = new CustomEvent('todo-toggle');
    this.dispatchEvent(event);
  }

  todoRemove() {
    var event = new CustomEvent('todo-remove');
    this.dispatchEvent(event);
  }

  todoEdit() {
    var event = new CustomEvent('todo-edit');
    this.dispatchEvent(event);
  }

  todoStopEdit() {
    console.log(this.value);
    const inputVal = this.value;

    (function(inputVal) {
      var event = new CustomEvent('set-todo-value', {
        detail: inputVal,
        bubbles: true
      });
      this.dispatchEvent(event);
    }.bind(this)(inputVal));

    (function() {
      this.dispatchEvent(new CustomEvent('todo-stop-edit'));
    }.bind(this)());
  }

  todoOnKeyUp(e) {
    console.log(e.key);
  }

  todoSubmit() {
    var event = new CustomEvent('todo-submit');
    this.dispatchEvent(event);
  }

  todoCancelEdit() {
    var event = new CustomEvent('todo-cancel-edit');
    this.dispatchEvent(event);
  }

  // setTodoValue() {
  //   const inputVal = this.value;
  //   (function(inputVal) {
  //     var event = new CustomEvent('set-todo-value', {
  //       detail: inputVal,
  //       bubbles: true
  //     });
  //     this.dispatchEvent(event);
  //   }.bind(this)(inputVal));

  //   ().bind(this)();
  // }

  set todoTitle(value) {
    this._todoTitle = value;
    this.render();
  }

  set todoCompleted(value) {
    this._todoCompleted = value;
    this.render();
  }

  set editing(value) {
    this._editing = value;
    this.render();
  }

  get value() {
    return this._value;
  }

  render() {
    ReactDOM.render(
      <TodoItem
        todoToggle={this.todoToggle.bind(this)}
        todoRemove={this.todoRemove.bind(this)}
        todoEdit={this.todoEdit.bind(this)}
        todoStopEdit={this.todoStopEdit.bind(this)}
        todoSubmit={this.todoSubmit.bind(this)}
        todoCancelEdit={this.todoCancelEdit.bind(this)}
        todoOnKeyUp={this.todoOnKeyUp.bind(this)}
        todoTitle={this._todoTitle}
        todoCompleted={this._todoCompleted}
        editing={this._editing}
      />,
      this
    );
  }

  connectedCallback() {
    this.addEventListener('set-todo-value', (e) => {
      console.log(e);
      this._value = e.detail.value;
      e.stopPropagation();
    });

    this.render();
  }
}

export default ReactTodoItem;
