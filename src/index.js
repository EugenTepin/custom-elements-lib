// make custom element definition here
import MockElement from 'components/mock';
import ReactTodoFooter from 'components/todo-footer';
import TodoItem from 'components/todo-item';
import RemoveElement from 'components/remove';

customElements.define('mock-element', MockElement);
customElements.define('react-todo-footer', ReactTodoFooter);
customElements.define('react-todo-item', TodoItem);
customElements.define('react-remove-btn', RemoveElement);
