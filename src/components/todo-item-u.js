import React from 'react';
import ReactDOM from 'react-dom';

class TodoItemU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const {
      todoTitle,
      todoCompleted,
      todoEdit,
      todoRemove,
      todoToggle
    } = this.props;

    let itemClass = todoCompleted ? 'completed' : '';
    let editInput = '';
    if (this.state.editing) {
      itemClass += ' editing';
      editInput = (
        <input
          type="text"
          className="edit"
          value={todoTitle}
          ref={this.inputRef}
          onChange={(e) => {
            todoEdit(e.target.value);
          }}
          onBlur={(e) => {
            this.setState({ editing: false });
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
              this.setState({ editing: false });
            }
          }}
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
            onChange={(e) => {
              todoToggle();
            }}
          />
          <label
            onDoubleClick={(e) => {
              this.setState({ editing: true });
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

class ReactTodoItemU extends HTMLElement {
  set todoTitle(value) {
    this._todoTitle = value;
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

  todoEdit(value) {
    this.dispatchCustomEvent('todo-update-value', value);
    this.dispatchCustomEvent('todo-edit');
  }

  render() {
    const {
      _todoTitle,
      _todoCompleted,
      todoEdit,
      todoToggle,
      todoRemove
    } = this;

    const propsReady = _todoTitle !== null && _todoCompleted !== null;

    if (propsReady) {
      this._renderCount++;
      // this._reactComponent for debugging only
      this._reactComponent = ReactDOM.render(
        <TodoItemU
          todoTitle={_todoTitle}
          todoCompleted={_todoCompleted}
          todoEdit={todoEdit.bind(this)}
          todoToggle={todoToggle.bind(this)}
          todoRemove={todoRemove.bind(this)}
        />,
        this
      );
      console.log('Render count: %s', this._renderCount);
      console.log(this._reactComponent);
    }
  }

  connectedCallback() {
    console.log('Element is connected.');
    // this._renderCount only for debug
    this._renderCount = 0;

    this._todoTitle = null;
    this._todoCompleted = null;
    this.addEventListener('todo-update-value', (e) => {
      console.log('todo-update-value detail: %s', e.detail);
      this.value = e.detail;
    });
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

export default ReactTodoItemU;
