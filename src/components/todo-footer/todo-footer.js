import React from 'react';
import { NavLink } from 'react-router-dom';

class TodoFooter extends React.Component {
  removeCompleted = () => {
    this.props.removeCompleted();
  };
  changeTheme = (val) => {
    this.props.changeTheme(val);
  };

  render() {
    const { count, theme, hasCompleted } = this.props;
    if (count === 0) {
      return null;
    }

    const clearBtn = (hasCompleted) ? (
      <button
        className="clear-completed"
        onClick={(e) => {
          this.removeCompleted();
        }}
      >
        Clear Completed
      </button>
    ) : null;

    
    const themeSelect = (<select value={theme}
    onChange={(e) => {
      this.changeTheme(e.target.value);
    }}
  >
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>)

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
        </span>
        <ul className="filters">
          <li>
            <NavLink
              to="/"
              activeClassName="selected"
              onClick={(e) => {
                console.log('/');
              }}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/active"
              activeClassName="selected"
              onClick={(e) => {
                console.log('/active');
              }}
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completed"
              activeClassName="selected"
              onClick={(e) => {
                console.log('/completed');
              }}
            >
              Completed
            </NavLink>
          </li>
        </ul>
        {clearBtn}
        {themeSelect}
      </footer>
    );
  }
}

export default TodoFooter;
