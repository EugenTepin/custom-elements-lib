(window["webpackJsonpcustom-elements-lib"]=window["webpackJsonpcustom-elements-lib"]||[]).push([[0],{21:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n(3),a=n(5),c=n(1),l=n(4),r=n(7),s=n(0),u=n.n(s),d=n(6),m=n.n(d);var h=function(e){return u.a.createElement("span",null,"Hello, ",e.name)},p=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){m.a.render(u.a.createElement(h,{name:this.name.toString()}),this)}},{key:"connectedCallback",value:function(){this._name="test",this.render()}},{key:"name",set:function(e){this._name=e,console.log(e),this.render()},get:function(){return this._name}}]),t}(Object(r.a)(HTMLElement)),f=n(13),v=n(19),g="CHANGE_THEME",b="CHANGE_COUNT";function E(e){return{theme:e,type:g}}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={theme:"light",count:1};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return y({},e,{theme:t.theme});case b:return y({},e,{count:t.count});default:return e}},j=Object(f.b)(O);console.log(j.getState());var _=j,T=n(10),N=n(14),w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(n=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).removeCompleted=function(){n.props.removeCompleted()},n.changeTheme=function(e){n.props.changeTheme(e)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.count,o=t.theme,i=t.hasCompleted;if(0===n)return null;var a=i?u.a.createElement("button",{className:"clear-completed",onClick:function(t){e.removeCompleted()}},"Clear Completed"):null,c=u.a.createElement("select",{value:o,style:{margin:"0 10px"},className:"clear-completed",onChange:function(t){e.changeTheme(t.target.value)}},u.a.createElement("option",{value:"light"},"Light"),u.a.createElement("option",{value:"dark"},"Dark"));return u.a.createElement("footer",{className:"footer"},u.a.createElement("span",{className:"todo-count"},u.a.createElement("strong",null,n)," ",1===n?"item":"items"," left"),u.a.createElement("ul",{className:"filters"},u.a.createElement("li",null,u.a.createElement(N.a,{to:"/",activeClassName:"selected",onClick:function(e){console.log("/")}},"All")),u.a.createElement("li",null,u.a.createElement(N.a,{to:"/active",activeClassName:"selected",onClick:function(e){console.log("/active")}},"Active")),u.a.createElement("li",null,u.a.createElement(N.a,{to:"/completed",activeClassName:"selected",onClick:function(e){console.log("/completed")}},"Completed"))),a,c)}}]),t}(u.a.Component),R=Object(T.b)((function(e){return{theme:e.theme,count:e.count}}),(function(e){return{changeTheme:function(t){e(E(t))}}}))(w),S=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"removeCompleted",value:function(){var e=new CustomEvent("clear-completed");this.dispatchEvent(e)}},{key:"render",value:function(){var e=this._hasCompleted,t=this.removeCompleted;void 0!==e&&m.a.render(u.a.createElement(T.a,{store:_},u.a.createElement(R,{hasCompleted:e,removeCompleted:t.bind(this)})),this)}},{key:"connectedCallback",value:function(){var e=this;this.addEventListener("nav-link-click",(function(t){console.log(t);var n=t.detail.to;e._router.navigate([n]),t.stopPropagation()}))}},{key:"status",set:function(e){this._status=e,this.render()},get:function(){return this._status}},{key:"router",set:function(e){this._router=e,this.render()}},{key:"hasCompleted",set:function(e){this._hasCompleted=e,this.render()},get:function(){return this._hasCompleted}}]),t}(Object(r.a)(HTMLElement)),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).state={editing:!1},n.inputRef=u.a.createRef(),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){!t.editing&&this.state.editing&&this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.todoTitle,o=t.todoCompleted,i=t.todoEdit,a=t.todoRemove,c=t.todoToggle,l=o?"completed":"",r="";return this.state.editing&&(l+=" editing",r=u.a.createElement("input",{type:"text",className:"edit",value:n,ref:this.inputRef,onChange:function(e){i(e.target.value)},onBlur:function(t){e.setState({editing:!1})},onKeyUp:function(t){"Enter"!==t.key&&"Escape"!==t.key||e.setState({editing:!1})}})),u.a.createElement("li",{className:l},u.a.createElement("div",{className:"view"},u.a.createElement("input",{type:"checkbox",className:"toggle",checked:o,onChange:function(e){c()}}),u.a.createElement("label",{onDoubleClick:function(t){e.setState({editing:!0})}},n),u.a.createElement("button",{className:"destroy",onClick:function(e){a()}})),r)}}]),t}(u.a.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"dispatchCustomEvent",value:function(e,t){var n=void 0!==t?new CustomEvent(e,{detail:t}):new CustomEvent(e);return this.dispatchEvent(n)}},{key:"todoToggle",value:function(){this.dispatchCustomEvent("todo-toggle")}},{key:"todoRemove",value:function(){this.dispatchCustomEvent("todo-remove")}},{key:"todoEdit",value:function(e){this.dispatchCustomEvent("todo-update-value",e),this.dispatchCustomEvent("todo-edit")}},{key:"render",value:function(){var e=this._todoTitle,t=this._todoCompleted,n=this.todoEdit,o=this.todoToggle,i=this.todoRemove;null!==e&&null!==t&&(this._renderCount++,this._reactComponent=m.a.render(u.a.createElement(H,{todoTitle:e,todoCompleted:t,todoEdit:n.bind(this),todoToggle:o.bind(this),todoRemove:i.bind(this)}),this),console.log("Render count: %s",this._renderCount),console.log(this._reactComponent))}},{key:"connectedCallback",value:function(){var e=this;console.log("Element is connected."),this._renderCount=0,this._todoTitle=null,this._todoCompleted=null,this.addEventListener("todo-update-value",(function(t){console.log("todo-update-value detail: %s",t.detail),e.value=t.detail}))}},{key:"todoTitle",set:function(e){this._todoTitle=e,this.render()},get:function(){return this._todoTitle}},{key:"todoCompleted",set:function(e){this._todoCompleted=e,this.render()},get:function(){return this._todoCompleted}}]),t}(Object(r.a)(HTMLElement));var D=function(e){return u.a.createElement("button",{onClick:function(t){e.remove()}},"Remove")},P=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){m.a.render(u.a.createElement(D,{remove:this._remove}),this)}},{key:"connectedCallback",value:function(){this.render()}},{key:"remove",set:function(e){this._remove=e,console.log(e),this.render()}}]),t}(Object(r.a)(HTMLElement)),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).state={editing:!1},n.inputRef=u.a.createRef(),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){!t.editing&&this.state.editing&&this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.todoTitle,o=t.todoCompleted,i=t.todoEdit,a=t.todoRemove,c=t.todoToggle,l=t.theme,r=o?"completed":"",s="";this.state.editing&&(r+=" editing",s=u.a.createElement("input",{type:"text",className:"edit",value:n,ref:this.inputRef,onChange:function(e){i(e.target.value)},onBlur:function(t){e.setState({editing:!1})},onKeyUp:function(t){"Enter"!==t.key&&"Escape"!==t.key||e.setState({editing:!1})}}));var d={backgroundColor:"dark"===l?"#444":"#fff",color:"dark"===l?"#fff":"#000"};return u.a.createElement("li",{className:r,style:d},u.a.createElement("div",{className:"view"},u.a.createElement("input",{type:"checkbox",className:"toggle",checked:o,onChange:function(e){c()}}),u.a.createElement("label",{onDoubleClick:function(t){e.setState({editing:!0})}},n),u.a.createElement("button",{className:"destroy",onClick:function(e){a()}})),s)}}]),t}(u.a.Component),A=Object(T.b)((function(e){return{theme:e.theme}}))(x),M=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"dispatchCustomEvent",value:function(e,t){var n=void 0!==t?new CustomEvent(e,{detail:t}):new CustomEvent(e);return this.dispatchEvent(n)}},{key:"todoToggle",value:function(){this.dispatchCustomEvent("todo-toggle")}},{key:"todoRemove",value:function(){this.dispatchCustomEvent("todo-remove")}},{key:"todoEdit",value:function(e){this.dispatchCustomEvent("todo-update-value",e),this.dispatchCustomEvent("todo-edit")}},{key:"render",value:function(){var e=this._todoTitle,t=this._todoCompleted,n=this.todoEdit,o=this.todoToggle,i=this.todoRemove;null!==e&&null!==t&&(this._renderCount++,this._reactComponent=m.a.render(u.a.createElement(T.a,{store:_},u.a.createElement(A,{todoTitle:e,todoCompleted:t,todoEdit:n.bind(this),todoToggle:o.bind(this),todoRemove:i.bind(this)})),this),console.log("Render count: %s",this._renderCount),console.log(this._reactComponent))}},{key:"connectedCallback",value:function(){var e=this;console.log("Element is connected."),this._renderCount=0,this._todoTitle=null,this._todoCompleted=null,this.addEventListener("todo-update-value",(function(t){console.log("todo-update-value detail: %s",t.detail),e.value=t.detail}))}},{key:"disconnectedCallback",value:function(){m.a.unmountComponentAtNode(this)}},{key:"todoTitle",set:function(e){this._todoTitle=e,this.render()},get:function(){return this._todoTitle}},{key:"todoCompleted",set:function(e){this._todoCompleted=e,this.render()},get:function(){return this._todoCompleted}}]),t}(Object(r.a)(HTMLElement)),U=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"connectedCallback",value:function(){console.log("Alien store at your disposal!")}},{key:"theme",set:function(e){_.dispatch(E(e)),console.log("set theme to %s",e)},get:function(){return console.log("get theme"),_.getState().theme}},{key:"count",set:function(e){_.dispatch({count:e,type:b}),console.log("set count to %s",e)},get:function(){return console.log("get count"),_.getState().count}}]),t}(Object(r.a)(HTMLElement));customElements.define("redux-store",U),console.log("0.6.0"),customElements.define("mock-element",p),customElements.define("react-todo-footer",S),customElements.define("react-todo-item",L),customElements.define("react-todo-item-unmount",M),customElements.define("react-remove-btn",P)}},[[21,1,2]]]);
//# sourceMappingURL=main.65f5f5fa.chunk.js.map