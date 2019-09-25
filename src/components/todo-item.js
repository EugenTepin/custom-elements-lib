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
      value: props.todoTitle,
      status: props.todoCompleted,
      editing: false
      //editing: props.editing
    };
  }
  todoEdit = (value) => {
    this.setState({ value });
    this.props.todoEdit(value);
  };

  todoToggle = () => {
    this.setState((state) => ({ status: !state.status }));
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
            this.todoEdit(e.target.value);
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
            onChange={(e) => {
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
    this.render();
  }
  get todoTitle() {
    return this._todoTitle;
  }

  set todoCompleted(value) {
    this._todoCompleted = value;
    this.render(true);
  }

  get todoCompleted() {
    return this._todoCompleted;
  }

  // set editing(value) {
  //   this._editing = value;
  //   this.render();
  // }

  // get editing() {
  //   return this._editing;
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

  todoEdit(value) {
    //this.value = this._reactComponent.state.value;
    this.dispatchCustomEvent('todo-update-value', value);
    this.dispatchCustomEvent('todo-edit');
  }

  render(forced) {
    const {
      _todoTitle,
      _todoCompleted,
      //_editing,
      todoEdit,
      todoToggle,
      todoRemove
    } = this;

    // const propsReady =
    //   _todoTitle !== undefined &&
    //   _todoCompleted !== undefined &&
    //   _editing !== undefined;

    const propsReady = _todoTitle !== undefined && _todoCompleted !== undefined; //x

    if (propsReady) {
      this._renderCount++;
      console.time('Render');
      if (forced) {
        ReactDOM.unmountComponentAtNode(this);
      }
      this._reactComponent = ReactDOM.render(
        <TodoItem
          todoTitle={_todoTitle}
          todoCompleted={_todoCompleted}
          //editing={_editing}
          todoEdit={todoEdit.bind(this)}
          todoToggle={todoToggle.bind(this)}
          todoRemove={todoRemove.bind(this)}
        />,
        this
      );
      console.timeEnd('Render');
      console.log('Render count: %s', this._renderCount);
      console.log(this._reactComponent);
    }
  }

  connectedCallback() {
    console.log('Element is connected.');
    this._renderCount = 0;
    this.addEventListener('todo-update-value', (e) => {
      console.log('todo-update-value detail: %s', e.detail);
      this.value = e.detail;
    });
  }
}

export default ReactTodoItem;
