// make custom element definition here
import MockElement from 'components/mock';
import ReactTodoFooter from 'components/todo-footer';
import ReactTodoItem from 'components/todo-item';
import RemoveElement from 'components/remove';
import ReactTodoItemU from 'components/todo-item-u';
console.log('0.4.24');
customElements.define('mock-element', MockElement);
customElements.define('react-todo-footer', ReactTodoFooter);
customElements.define('react-todo-item', ReactTodoItem);
customElements.define('react-todo-item-unmount', ReactTodoItemU);
customElements.define('react-remove-btn', RemoveElement);
