(this["webpackJsonpbook-box"]=this["webpackJsonpbook-box"]||[]).push([[0],{104:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(28),i=n.n(a),o=(n(104),n(83)),r=n(2),s=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{className:"site-header",children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)("div",{className:"site-header-inner",children:Object(r.jsx)("h1",{children:"Drag & Drop TaskList"})})})})})},l=n(90),d=n(50),u=n(45),j=n(135),b=n(43),m=n(136),O=n(70),h=n(86),f=n.n(h),x=function(e){var t=e.reset;return Object(r.jsx)(m.a,{className:"controlItem",color:"google plus",onClick:t,children:"Reset"})},g=function(e){var t=e.addTask,n=e.disabled;return Object(r.jsx)(m.a,{className:"controlItem",color:"olive",onClick:t,disabled:n,children:"+"})},p=function(e){var t=e.taskName,n=e.onChangeHandler;return Object(r.jsx)("input",{type:"text",placeholder:"Enter any task that you have to do.",className:"input-form controlItem",value:t,onChange:n})},v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"introduction-space",children:Object(r.jsx)(m.a,{color:"facebook",onClick:function(){return function(){var e;null===(e=document.querySelector(".introduction-space"))||void 0===e||e.classList.toggle("introduction-space-none")}()},children:"Got it!"})})})},k=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(1),o=Object(u.a)(i,2),s=o[0],h=o[1],k=Object(c.useState)(!0),y=Object(u.a)(k,2),N=y[0],C=y[1],F=Object(c.useState)([{id:s,title:"You can Add tasks, Delete, and Sort.",mode:"display"},{id:999999998,title:"Happy Tasking!",mode:"display"},{id:999999999,title:"\ud83d\udc4c",mode:"display"}]),I=Object(u.a)(F,2),S=I[0],D=I[1],w=Object(c.useState)({id:0,title:"",mode:""}),E=Object(u.a)(w,2),T=E[0],L=E[1],A=function(){var e=document.getElementsByClassName("controlItem");Array.prototype.slice.call(e).forEach((function(e){return e.classList.toggle("event-invalid")}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"task-list-container",children:[Object(r.jsx)(p,{taskName:n,onChangeHandler:function(e){var t;(t=e.target).value.length>35||(a(null!==t?t.value:""),C(!(t.value.length>0)))}}),Object(r.jsx)(g,{addTask:function(){var e=s+1;h(e),D([].concat(Object(d.a)(S),[{id:e,title:n,mode:"display"}])),a(""),C(!0)},disabled:N}),Object(r.jsx)(x,{reset:function(){window.confirm("Do you wanna delete All Task ?")&&D([])}}),Object(r.jsx)(j.a.Group,{children:Object(r.jsx)(O.Container,{"drag-handle-selector":".drag-handle-selector",lockAxis:"y",onDrop:function(e){var t=e.removedIndex,n=e.addedIndex;D((function(e){return f()(e,t||0,n||0)}))},children:S.map((function(e,t){return Object(r.jsx)(O.Draggable,{children:Object(r.jsx)(j.a,{className:"task",children:Object(r.jsxs)(j.a.Content,{children:[Object(r.jsx)(b.a,{className:"task-icon",name:"certificate",size:"big"}),Object(r.jsx)("span",{className:"task-number",children:t+1}),"edit"===e.mode?Object(r.jsx)("input",{className:"edit-input-form",type:"text",value:T.title,onChange:function(e){return function(e){var t=Object(l.a)({},T);t.title=e.value,L(t)}(e.target)},onKeyPress:function(e){return function(e){if("Enter"===e){var t=S.find((function(e){return"edit"===e.mode}));if(void 0===t)return;var n=Object(d.a)(S);T.mode="display",n[n.indexOf(t)]=T,D(n),A()}}(e.key)}}):Object(r.jsx)(j.a.Header,{className:"task-header",onDoubleClick:function(){return function(e){S.filter((function(e){return"edit"===e.mode})).length>0||(e.mode="edit",D(Object(d.a)(S)),L(e),A())}(e)},children:e.title}),Object(r.jsx)(b.a,{className:"drag-handle-selector controlItem",name:"sort",size:"big"}),Object(r.jsx)(m.a,{className:"delete controlItem",color:"yellow",size:"mini",onClick:function(){return function(e){var t=Object(d.a)(S);t.splice(e,1),D(t)}(t)},children:"\xd7"})]})},e.id)},e.id)}))})}),Object(r.jsx)(v,{})]})})},y=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"introduction-space-edit",children:Object(r.jsx)(m.a,{color:"facebook",onClick:function(){return function(){var e;null===(e=document.querySelector(".introduction-space-edit"))||void 0===e||e.classList.toggle("introduction-space-none")}()},children:"Got it!"})})})},N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{}),Object(r.jsx)(y,{}),Object(r.jsx)(k,{})]})},C=(n(120),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("style",{children:"body { background-color: #F4EFE3; }"})}),Object(r.jsx)(N,{})]})}),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)})).catch((function(e){console.log(e.message)}))};n(121);i.a.render(Object(r.jsx)(C,{}),document.getElementById("root")),F()}},[[122,1,2]]]);
//# sourceMappingURL=main.666dd3ed.chunk.js.map