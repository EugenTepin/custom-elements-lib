import store from 'store';
import { changeTheme } from 'actions';
import { changeCount } from 'actions';

class AlienStore extends HTMLElement {
    set theme(value) {
        store.dispatch(changeTheme(value));
        console.log('set theme to %s',value);
    }
    get theme() {
      console.log('get theme');
      return store.getState().theme;
    }
  
    set count(value){
      store.dispatch(changeCount(value));
      console.log('set count to %s',value);
    }

    get count(){
      console.log('get count');
      return store.getState().count;
    }

    connectedCallback() {
        console.log('Alien store at your disposal!')
    }
  }

export default AlienStore;