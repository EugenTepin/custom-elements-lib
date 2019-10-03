import { createStore } from 'redux';
import  alienApp  from 'reducers';
const store = createStore(alienApp);
console.log(store.getState());
export default store;