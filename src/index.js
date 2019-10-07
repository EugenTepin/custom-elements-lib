//import store from 'store'
//import {changeCount} from 'actions'
// make custom element definition here
import MockElement from 'alien_components/mock';
import ReactTodoFooter from 'alien_components/todo-footer';
import ReactTodoItem from 'alien_components/todo-item';
import RemoveElement from 'alien_components/remove';
import ReactTodoItemU from 'alien_components/todo-item-u';

import AlienStore from 'alien_components/store-component';

customElements.define('redux-store', AlienStore);
console.log('0.6.0');

customElements.define('mock-element', MockElement);
customElements.define('react-todo-footer', ReactTodoFooter);
customElements.define('react-todo-item', ReactTodoItem);
customElements.define('react-todo-item-unmount', ReactTodoItemU);
customElements.define('react-remove-btn', RemoveElement);


// var reduxStore = document.createElement('redux-store');
// var footer = document.createElement('react-todo-footer');

//store.dispatch(changeCount(25));
// reduxStore.count = 25;
// footer.hasCompleted = true;

// document.body.appendChild(footer);
// document.body.appendChild(reduxStore);
//console.log(store.getState())
// class Dummy extends HTMLElement {

// }

// let PowerDummy = new Proxy(Dummy,{
//     construct(target, args, extended){
//         console.log('bingo');
        
//         return Reflect.construct(target, args, extended);
//     }
// });
// customElements.define('react-test', PowerDummy);

// const test = document.createElement('react-test');

// document.body.append(test);

// var HTMLElementProxy = new Proxy(HTMLElement,{
//     construct(target,args,extend){
//         console.log('bingo');

//         const inst = Reflect.construct(target,args,extend);
//         return new Proxy(inst, {
//             get(instTarget, prop){
//                 return instTarget[prop];
//             }
//         });
//     }
// })

// class Dummy extends HTMLElementProxy{

// }

// customElements.define('react-test', Dummy);

// const test = document.createElement('react-test');

// document.body.append(test);

// console.log('')
// let p = new Proxy(Dummy,{
//     construct(target, args, extended){
//         //console.log('bingo');
//         return Reflect.construct(target, args, extended);
//     }
// });

// p = new Proxy(ABC,{
//     construct(target, args, extended){
//         console.log(extended)
//         return Reflect.construct(target,args);
//     }
// });
//

//customElements.define('react-test', ABC);

// const test = document.createElement('react-test');

// document.body.append(test);

//customElements.define('react-test', Dummy);

//const test = document.createElement('react-test');

// class LibElement extends HTMLElement {
//     static get componentName () {
//         return this.name.replace(/[A-Z]/g, char => `-${ char.toLowerCase() }`).substring(1);
//     }
// }

// const LibElementProxy = new Proxy(LibElement, {
//     construct (base, args, extended) {
//         if (!customElements.get(extended.componentName)) {
//             customElements.define(extended.componentName, extended);
//         }

//         return Reflect.construct(base, args, extended);
//     }
// });

// class MyCustomComponent extends LibElementProxy {}
// class MyCustomComponentExtended extends MyCustomComponent {}

// document.body.appendChild(new MyCustomComponent());
// document.body.appendChild(new MyCustomComponentExtended());

// const proxyAlienStore = new Proxy(Dummy,{
//     construct(){
//         const inst = document.createElement('alien-store-proto');
//         const instanceProxy = new Proxy(inst, {
//             get(target, prop){
//                 console.log('Proxy msg: %s',prop);
//                 return target[prop];
//             }
//         });
//         return instanceProxy;
//     }
// });

// import store  from 'store';
// import { changeTheme } from 'actions';


//customElements.define('alien-store', proxyAlienStore);

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

// const alienStore = document.createElement('alien-store');
// document.body.append(alienStore);

// console.log(alienStore.id);

// // setTimeout(()=>{
// //     store.dispatch(changeTheme('dark'))
// // }, 3000);

// let store = {
//     a: 'a prop from store',
//     b: 'b prop from store'
// };

// class First {
// }


//  First = new Proxy(First, {
//     construct(target, args, ext){
//         let inst = Reflect.construct(target, args, ext);
//         return new Proxy(inst, {
//             get(instTarget, prop){
//                 console.log('proxy: %s',prop);
//                 // if(prop in store)
//                 if(Reflect.has(store, prop)){
//                     // return store[prop]; 
//                     return Reflect.get(store, prop);
//                 }
//                 return instTarget[prop];
//             }
//         });
//     }
// });

// let f = new First();

// console.log(f.a);
// console.log(f.c);