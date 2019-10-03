import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import { Provider } from 'react-redux';
import ComponentTodoFooter from 'components/todo-footer';

class ReactTodoFooter extends HTMLElement {
    set status(value) {
      this._status = value;
      this.render();
    }
    get status() {
      return this._status;
    }
  
    set router(value) {
      this._router = value;
      this.render();
    }
  
    set count(value) {
      this._count = value;
      this.render();
    }
    get count() {
      return this._count;
    }
  
    set hasCompleted(value) {
      this._hasCompleted = value;
      this.render();
    }
    get hasCompleted() {
      return this._hasCompleted;
    }
  
    removeCompleted() {
      var event = new CustomEvent('clear-completed');
      this.dispatchEvent(event);
    }
  
    render() {
      const { _count, _hasCompleted, removeCompleted } = this;
  
      const propsReady = _count !== undefined && _hasCompleted !== undefined;
  
      if (propsReady) {
        ReactDOM.render(
          <Provider store={store}>
            <ComponentTodoFooter
              count={_count}
              hasCompleted={_hasCompleted}
              removeCompleted={removeCompleted.bind(this)}
            />
          </Provider>,
          this
        );
      }
    }
  
    connectedCallback() {
      this.addEventListener('nav-link-click', (e) => {
        console.log(e);
        const { to } = e.detail;
        this._router.navigate([to]);
        e.stopPropagation();
      });
    }
  }
  
  export default ReactTodoFooter;