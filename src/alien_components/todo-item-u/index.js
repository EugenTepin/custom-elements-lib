import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import { Provider } from 'react-redux';
import ComponentTodoItemU from 'components/todo-item-u';

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
          <Provider store={store}>
            <ComponentTodoItemU
              todoTitle={_todoTitle}
              todoCompleted={_todoCompleted}
              todoEdit={todoEdit.bind(this)}
              todoToggle={todoToggle.bind(this)}
              todoRemove={todoRemove.bind(this)}
            />
          </Provider>,
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