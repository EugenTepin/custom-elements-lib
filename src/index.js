// make custom element definition here
import MockElement from 'alien_components/mock';
import ReactTodoFooter from 'alien_components/todo-footer';
import ReactTodoItem from 'alien_components/todo-item';
import RemoveElement from 'alien_components/remove';
import ReactTodoItemU from 'alien_components/todo-item-u';
// import store  from 'store';
// import { changeTheme } from 'actions';
console.log('0.5.0');


customElements.define('mock-element', MockElement);
customElements.define('react-todo-footer', ReactTodoFooter);
customElements.define('react-todo-item', ReactTodoItem);
customElements.define('react-todo-item-unmount', ReactTodoItemU);
customElements.define('react-remove-btn', RemoveElement);

// var todoItemElem = document.createElement('react-todo-item-unmount');
// todoItemElem.todoCompleted = true;
// todoItemElem.todoTitle = "bingo";
// todoItemElem.todoToggle = () => {console.log('todo-toggle')};
// todoItemElem.todoRemove = () => {console.log('todo-remove')};
// todoItemElem.todoEdit = () => {console.log('todo-edit')};

// document.body.append(todoItemElem);

// var todoFooter = document.createElement('react-todo-footer');
// todoFooter.status = 'All'; 
// todoFooter.router = {};
// todoFooter.count = 1;
// todoFooter.hasCompleted = true;
// todoFooter.removeCompleted = () => {console.log('removeCompleted')}


// document.body.append(todoFooter);
// // setTimeout(()=>{
// //     store.dispatch(changeTheme('dark'))
// // }, 3000);