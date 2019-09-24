(window["webpackJsonpcustom-elements-lib"]=window["webpackJsonpcustom-elements-lib"]||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n(3),a=n(5),c=n(1),s=n(4),l=n(7),r=n(0),u=n.n(r),d=n(6),m=n.n(d);function h(e){return u.a.createElement("span",null,"Hello, ",e.name)}var v=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){m.a.render(u.a.createElement(h,{name:this.name.toString()}),this)}},{key:"connectedCallback",value:function(){this._name="test",this.render()}},{key:"name",set:function(e){this._name=e,console.log(e),this.render()},get:function(){return this._name}}]),t}(Object(l.a)(HTMLElement)),f=n(9),p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).removeCompleted=function(){n.props.removeCompleted()},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.count;if(0===t)return null;var n=this.props.hasCompleted?u.a.createElement("button",{className:"clear-completed",onClick:function(t){e.removeCompleted()}},"Clear Completed"):"";return u.a.createElement("footer",{className:"footer"},u.a.createElement("span",{className:"todo-count"},u.a.createElement("strong",null,t)," ",1===t?"item":"items"," left"),u.a.createElement("ul",{className:"filters"},u.a.createElement("li",null,u.a.createElement(f.a,{to:"/",activeClassName:"selected",onClick:function(e){console.log("/")}},"All")),u.a.createElement("li",null,u.a.createElement(f.a,{to:"/active",activeClassName:"selected",onClick:function(e){console.log("/active")}},"Active")),u.a.createElement("li",null,u.a.createElement(f.a,{to:"/completed",activeClassName:"selected",onClick:function(e){console.log("/completed")}},"Completed"))),n)}}]),t}(u.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"removeCompleted",value:function(){var e=new CustomEvent("clear-completed");this.dispatchEvent(e)}},{key:"render",value:function(){m.a.render(u.a.createElement(p,{count:this._count,hasCompleted:this._hasCompleted,removeCompleted:this.removeCompleted.bind(this)}),this)}},{key:"connectedCallback",value:function(){var e=this;this.addEventListener("nav-link-click",(function(t){console.log(t);var n=t.detail.to;e._router.navigate([n]),t.stopPropagation()})),this.render()}},{key:"status",set:function(e){this._status=e,this.render()},get:function(){return this._status}},{key:"router",set:function(e){this._router=e,this.render()}},{key:"count",set:function(e){this._count=e,this.render()},get:function(){return this._count}},{key:"hasCompleted",set:function(e){this._hasCompleted=e,this.render()},get:function(){return this._hasCompleted}}]),t}(Object(l.a)(HTMLElement)),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).todoEdit=function(e){n.setState({value:e.target.value}),n.props.todoEdit()},n.todoToggle=function(){n.setState((function(e){return{status:!e.status}})),n.props.todoToggle()},n.state={value:e.todoTitle,status:e.todoCompleted,editing:e.editing},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.status?"completed":"",n="";return this.state.editing&&(t+=" editing",n=u.a.createElement("input",{type:"text",className:"edit",onChange:function(t){e.todoEdit(t)},onBlur:function(t){e.setState({editing:!1})},onKeyUp:function(t){"Enter"!==t.key&&"Escape"!==t.key||e.setState({editing:!1})},value:this.state.value})),u.a.createElement("li",{className:t},u.a.createElement("div",{className:"view"},u.a.createElement("input",{type:"checkbox",className:"toggle",checked:this.state.status,onChange:function(t){e.todoToggle()}}),u.a.createElement("label",{onDoubleClick:function(t){e.setState({editing:!0})}},this.state.value),u.a.createElement("button",{className:"destroy",onClick:function(t){e.props.todoRemove()}})),n)}}]),t}(u.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"dispatchCustomEvent",value:function(e,t){var n=void 0!==t?new CustomEvent(e,{detail:t}):new CustomEvent(e);return this.dispatchEvent(n)}},{key:"todoToggle",value:function(){this.dispatchCustomEvent("todo-toggle")}},{key:"todoRemove",value:function(){this.dispatchCustomEvent("todo-remove")}},{key:"todoEdit",value:function(){this.value=this._reactComponent.state.value,this.dispatchCustomEvent("todo-edit")}},{key:"render",value:function(){var e=this._todoTitle,t=this._todoCompleted,n=this._editing,o=this.todoEdit,i=this.todoToggle,a=this.todoRemove;void 0!==e&&void 0!==t&&void 0!==n&&(this._renderCount++,this._reactComponent=m.a.render(u.a.createElement(g,{todoTitle:e,todoCompleted:t,editing:n,todoEdit:o.bind(this),todoToggle:i.bind(this),todoRemove:a.bind(this)}),this),console.log("Render count: %s",this._renderCount),console.log(this._reactComponent))}},{key:"connectedCallback",value:function(){console.log("Element is connected."),this._renderCount=0}},{key:"todoTitle",set:function(e){this._todoTitle=e,this.render()},get:function(){return this._todoTitle}},{key:"todoCompleted",set:function(e){this._todoCompleted=e,this.render()},get:function(){return this._todoCompleted}},{key:"editing",set:function(e){this._editing=e},get:function(){return this._editing}}]),t}(Object(l.a)(HTMLElement));function E(e){return u.a.createElement("button",{onClick:function(t){e.remove()}},"Remove")}var k=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){m.a.render(u.a.createElement(E,{remove:this._remove}),this)}},{key:"connectedCallback",value:function(){this.render()}},{key:"remove",set:function(e){this._remove=e,console.log(e),this.render()}}]),t}(Object(l.a)(HTMLElement));console.log("0.4.14"),customElements.define("mock-element",v),customElements.define("react-todo-footer",b),customElements.define("react-todo-item",C),customElements.define("react-remove-btn",k)}},[[11,1,2]]]);
//# sourceMappingURL=main.022d759e.chunk.js.map