(this["webpackJsonpbook-box"]=this["webpackJsonpbook-box"]||[]).push([[0],{118:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(25),a=n.n(r),s=(n(118),n(14)),i=n(72),o=n(34),l=n(98),u=n(6),d=n(1),j=function(e){var t=e.signIn,n=e.signUp,c=void 0!==t?t:null,r=void 0!==n?n:null,a=Object(s.c)((function(e){return e.loginUser}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:"site-header",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"site-header-inner",children:[Object(d.jsx)("h1",{children:"Drag & Drop TaskList"}),Object(d.jsxs)("div",{className:"header-button-container",children:[a," \u3055\u3093",c,r]})]})})})})},b=n(36),O=n(10),h=n(151),p=n(83),f=n(101),g=n.n(f),x=n(152),m=function(e){var t=e.reset;return Object(d.jsx)(x.a,{className:"controlItem",color:"google plus",onClick:t,children:"Reset"})},v=function(e){var t=e.addTask,n=e.disabled;return Object(d.jsx)(x.a,{className:"controlItem",color:"olive",onClick:t,disabled:n,children:"+"})},k=function(e){var t=e.inputValue,n=e.placeholder,c=e.onChangeHandler;return Object(d.jsx)("input",{type:"text",placeholder:n,className:"input-form controlItem",value:t,onChange:c})},y=n(104),S=n(55),N=function(e){var t=e.targetTask,n=e.index,r=e.del,a=void 0===r?function(){}:r,i=e.edit,o=void 0===i?function(){}:i,l=e.refresh,u=void 0===l?function(){}:l,j=Object(c.useState)({id:0,title:"",mode:""}),p=Object(O.a)(j,2),f=p[0],g=p[1],m=Object(s.c)((function(e){return e.taskList})),v=Object(s.b)(),k=function(){var e=document.getElementsByClassName("controlItem");Array.prototype.slice.call(e).forEach((function(e){return e.classList.toggle("event-invalid")}))};return Object(d.jsx)(h.a,{className:"task",children:Object(d.jsxs)(h.a.Content,{children:[Object(d.jsx)(S.a,{className:"task-icon",name:"certificate",size:"big"}),Object(d.jsx)("span",{className:"task-number",children:n+1}),"edit"===t.mode?Object(d.jsx)("input",{className:"edit-input-form",type:"text",value:f.title,onChange:function(e){return function(e){var t=Object(y.a)({},f);t.title=e.value,g(t)}(e.target)},onKeyPress:function(e){return function(e){if("Enter"===e){var t=m.find((function(e){return"edit"===e.mode}));if(void 0===t)return;var n=Object(b.a)(m);f.mode="display",n[n.indexOf(t)]=f,v(u(n)),k()}}(e.key)}}):Object(d.jsx)(h.a.Header,{className:"task-header",onDoubleClick:function(){return e=t,void(m.filter((function(e){return"edit"===e.mode})).length>0||(e.mode="edit",v(o()),g(t),k()));var e},children:t.title}),Object(d.jsx)(S.a,{className:"drag-handle-selector controlItem",name:"sort",size:"big"}),Object(d.jsx)(x.a,{className:"delete controlItem",color:"yellow",size:"mini",onClick:function(){return v(a(n))},children:"\xd7"})]})},t.id)},C=n(26),E=n.n(C),D=n(50),T=n(51),I=function(){var e="https://draganddroptasklist-env.eba-btryk2uf.ap-northeast-1.elasticbeanstalk.com/api/tasks/",t=Object(c.useState)(0),n=Object(O.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(O.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(!1),b=Object(O.a)(j,2),h=b[0],p=b[1],f=Object(s.c)((function(e){return e.taskList})),g=Object(s.c)((function(e){return e.loginUser}));return Object(c.useEffect)((function(){function t(){return(t=Object(D.a)(E.a.mark((function t(){var n,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=[],f.forEach((function(e){n.push({taskName:e.title,userName:g})})),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},u(!0),t.next=7,fetch(e,c).then((function(e){return e.json()})).then((function(e){console.log(e),p(!0)}));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}r>0&&(!function(){t.apply(this,arguments)}(),u(!1),a(0))}),[r,f,g]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x.a,{className:"save-button controlItem",color:"violet",onClick:function(){a(r+1),p(!1)},children:"Save"}),h?Object(d.jsx)("p",{children:"Save is success\ud83d\udc4d"}):null,l?Object(d.jsx)(T.Spinner,{color:"#727981",size:32,speed:1,animating:!0}):null]})},F=function(e){var t=e.add,n=void 0===t?function(){}:t,r=e.del,a=void 0===r?function(){}:r,i=e.edit,o=void 0===i?function(){}:i,l=e.refresh,u=void 0===l?function(){}:l,j=Object(s.c)((function(e){return e.taskList})),f=Object(s.b)(),x=Object(c.useState)(""),y=Object(O.a)(x,2),S=y[0],C=y[1],E=Object(c.useState)(j.length>0?j[j.length-1].id+1:0),D=Object(O.a)(E,2),T=D[0],F=D[1],L=Object(c.useState)(!0),w=Object(O.a)(L,2),U=w[0],A=w[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"task-list-container",children:[Object(d.jsx)(k,{inputValue:S,placeholder:"Enter any task that you have to do.",onChangeHandler:function(e){var t;(t=e.target).value.length>35||(C(null!==t?t.value:""),A(!(t.value.length>0)))}}),Object(d.jsx)(v,{addTask:function(){var e=T+1;F(e),f(n(e,S)),C(""),A(!0)},disabled:U}),Object(d.jsx)(m,{reset:function(){window.confirm("Do you wanna delete All Task ?")&&f(u([]))}}),Object(d.jsx)(I,{}),Object(d.jsx)(h.a.Group,{children:Object(d.jsx)(p.Container,{"drag-handle-selector":".drag-handle-selector",lockAxis:"y",onDrop:function(e){var t=e.removedIndex,n=e.addedIndex,c=Object(b.a)(j);c=g()(c,t||0,n||0),f(u(c))},children:j.map((function(e,t){return Object(d.jsx)(p.Draggable,{children:Object(d.jsx)(N,{targetTask:e,index:t,del:a,edit:o,refresh:u})},e.id)}))})})]})})},L=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"introduction-space-edit",children:Object(d.jsx)(x.a,{color:"facebook",onClick:function(){return function(){var e;null===(e=document.querySelector(".introduction-space-edit"))||void 0===e||e.classList.toggle("introduction-space-none")}()},children:"Got it!"})})})},w="ADD",U="DELETE",A="EDIT",H="REFRESH",z=function(e,t){return{type:w,id:e,taskName:t}},P=function(e){return{type:U,index:e}},V=function(){return{type:A}},J=function(e){return{type:H,list:e}},R="SET",B=function(e){return{type:R,loginUserName:e}},G=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"introduction-space",children:Object(d.jsx)(x.a,{color:"facebook",onClick:function(){return function(){var e;null===(e=document.querySelector(".introduction-space"))||void 0===e||e.classList.toggle("introduction-space-none")}()},children:"Got it!"})})})},q=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.b,{to:"/DragAndDrop-TaskList/signIn",children:Object(d.jsx)(x.a,{className:"controlItem sign-in-button",color:"linkedin",children:"Sign In"})})})},K=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.b,{to:"/DragAndDrop-TaskList/signUp",children:Object(d.jsx)(x.a,{className:"controlItem sign-up-button",color:"green",children:"Sign Up"})})})},Y=function(){var e=Object(s.c)((function(e){return e.loginUser}));return Object(d.jsxs)(d.Fragment,{children:["default"===e?Object(d.jsx)(j,{signIn:Object(d.jsx)(q,{}),signUp:Object(d.jsx)(K,{})}):Object(d.jsx)(j,{}),Object(d.jsx)(L,{}),Object(d.jsx)(F,{add:z,del:P,edit:V,refresh:J}),Object(d.jsx)(G,{})]})},M=(n(136),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.b,{to:"/DragAndDrop-TaskList/",children:Object(d.jsx)(x.a,{className:"controlItem sign-up-button",color:"black",children:"Home"})})})}),Q=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(O.a)(a,2),o=i[0],l=i[1],b=Object(c.useState)(!1),h=Object(O.a)(b,2),p=h[0],f=h[1],g=Object(c.useState)(!1),m=Object(O.a)(g,2),v=m[0],y=m[1],S=Object(c.useState)(""),N=Object(O.a)(S,2),C=N[0],I=N[1],F=Object(s.b)(),L="https://draganddroptasklist-env.eba-btryk2uf.ap-northeast-1.elasticbeanstalk.com/api/users/signIn",w=Object(c.useState)(0),U=Object(O.a)(w,2),A=U[0],H=U[1];return Object(c.useEffect)((function(){function e(){return(e=Object(D.a)(E.a.mark((function e(){var t,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={userName:n,password:o},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},f(!0),e.next=5,fetch(L,c).then((function(e){return e.json()})).then((function(e){if(e.length>0){var t=[];e.forEach((function(e,n){t.push({id:n,title:e,mode:"display"})})),F(B(n)),F(J(t)),y(!0)}else I("ErrorCode:003"),y(!1)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A>0&&(I(""),function(){e.apply(this,arguments)}(),f(!1)),H(0)}),[A,n,o,F]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{signUp:Object(d.jsx)(M,{})}),Object(d.jsxs)("div",{className:"sign-in-space",children:[Object(d.jsx)("h1",{children:"Sign In"}),Object(d.jsx)(k,{inputValue:n,placeholder:"userName",onChangeHandler:function(e){return t=e.target,void r(null!==t?t.value:"");var t}}),Object(d.jsx)(k,{inputValue:o,placeholder:"password",onChangeHandler:function(e){var t;(t=e.target).value.length>8||l(null!==t?t.value:"")}}),Object(d.jsx)(x.a,{color:"linkedin",onClick:function(){H(A+1)},children:"Sign In"}),"ErrorCode:003"===C?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f\ud83d\ude2d"}),Object(d.jsx)("p",{children:"\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044"})]}):null]}),v?Object(d.jsx)(u.a,{to:"/DragAndDrop-TaskList"}):null,p?Object(d.jsx)(T.Spinner,{color:"#727981",size:32,speed:1,animating:!0}):null]})},W=[{id:0,title:"You can Add tasks, Delete, and Sort.",mode:"display"},{id:1,title:"Happy Tasking!",mode:"display"},{id:2,title:"\ud83d\udc4c",mode:"display"}],X=Object(i.a)({taskList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=null;switch(t.type){case"ADD":return[].concat(Object(b.a)(e),[{id:t.id||0,title:t.taskName||"",mode:"display"}]);case"DELETE":return(n=Object(b.a)(e)).splice(t.index||0,1),n;case"EDIT":return Object(b.a)(e);case"REFRESH":return t.list||[];default:t.type;return e}},loginUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.loginUserName;default:t.type;return e}}}),Z=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(O.a)(a,2),o=i[0],l=i[1],b=Object(c.useState)(!1),h=Object(O.a)(b,2),p=h[0],f=h[1],g=Object(c.useState)(!1),m=Object(O.a)(g,2),v=m[0],y=m[1],S=Object(c.useState)(""),N=Object(O.a)(S,2),C=N[0],I=N[1],F=Object(s.b)(),L="https://draganddroptasklist-env.eba-btryk2uf.ap-northeast-1.elasticbeanstalk.com/api/users/signUp",w=Object(c.useState)(0),U=Object(O.a)(w,2),A=U[0],H=U[1];return Object(c.useEffect)((function(){function e(){return(e=Object(D.a)(E.a.mark((function e(){var t,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={userName:n,password:o},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},f(!0),e.next=5,fetch(L,c).then((function(e){return e.json()})).then((function(e){!0===e?(F(B(n)),F(J(W)),y(!0)):"ErrorCode:001"===e&&(I("ErrorCode:001"),y(!1))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A>0&&(I(""),0!==n.length&&0!==o.length||I("ErrorCode:002"),function(){e.apply(this,arguments)}(),f(!1)),H(0)}),[A,n,o,F]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{signUp:Object(d.jsx)(M,{})}),Object(d.jsxs)("div",{className:"sign-in-space",children:[Object(d.jsx)("h1",{children:"Sign Up"}),Object(d.jsx)(k,{inputValue:n,placeholder:"userName",onChangeHandler:function(e){return t=e.target,void r(null!==t?t.value:"");var t}}),Object(d.jsx)(k,{inputValue:o,placeholder:"password",onChangeHandler:function(e){var t;(t=e.target).value.length>8||l(null!==t?t.value:"")}}),Object(d.jsx)(x.a,{color:"green",onClick:function(){H(A+1)},children:"Sign Up"}),"ErrorCode:001"===C?Object(d.jsx)("p",{children:"\u65e2\u306b\u540c\u3058\u540d\u524d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\b\u30e6\u30fc\u30b6\u30fc\u304c\u5b58\u5728\u3057\u307e\u3059\ud83d\ude25"}):null,"ErrorCode:002"===C?Object(d.jsx)("p",{children:"\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306f1\u6587\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\ud83d\ude23"}):null]}),v?Object(d.jsx)(u.a,{to:"/DragAndDrop-TaskList"}):null,p?Object(d.jsx)(T.Spinner,{color:"#727981",size:32,speed:1,animating:!0}):null]})},$=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{children:Object(d.jsx)("style",{children:"body { background-color: #F4EFE3; }"})}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/DragAndDrop-TaskList",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(u.b,{path:"/DragAndDrop-TaskList/signIn",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(u.b,{path:"/DragAndDrop-TaskList/signUp",children:Object(d.jsx)(Z,{})})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)})).catch((function(e){console.log(e.message)}))},ee=(n(137),Object(i.b)(X));a.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(s.a,{store:ee,children:Object(d.jsx)($,{})})}),document.getElementById("root")),_()}},[[138,1,2]]]);
//# sourceMappingURL=main.86a82b51.chunk.js.map