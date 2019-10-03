import React from 'react';


class TodoItem extends React.Component {
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

export default TodoItem;
