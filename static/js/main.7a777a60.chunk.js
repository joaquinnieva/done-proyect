(this.webpackJsonpdone=this.webpackJsonpdone||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(5),i=n.n(s),o=(n(17),n(6)),j=n(3),r=n(4),d=(n(18),n(2)),l=n(1),b=Object(d.b)((function(e){return{tasks:e.tasks}}),(function(e){return{addTask:function(t){e({type:"ADDTASK",task:t})}}}))((function(e){var t=e.addTask,n=(e.tasks,Object(c.useState)(!0)),a=Object(r.a)(n,2),s=a[0],i=a[1],d=Object(c.useState)({name:"",desc:"",todo:""}),b=Object(r.a)(d,2),u=b[0],m=b[1],O=u.name,x=u.desc,p=u.todo,v=function(e){m(Object(j.a)(Object(j.a)({},u),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{className:"icon-addtask",children:[Object(l.jsx)("div",{className:s?"form":"form-open",children:Object(l.jsxs)("div",{className:"form-cont",children:[Object(l.jsx)("input",{name:"name",value:O,type:"text",placeholder:"name",className:"input",onChange:v}),Object(l.jsx)("input",{name:"desc",value:x,type:"text",placeholder:"description",className:"input",onChange:v}),Object(l.jsx)("input",{name:"todo",value:p,type:"number",placeholder:"days to do it",className:"input",onChange:v}),Object(l.jsx)("input",{name:"submit",type:"submit",value:"Add task",className:"input-send",onSubmit:function(e){e.preventDefault()},onClick:function(){return t(u)}})]})}),Object(l.jsxs)("div",{className:s?"ico-cont-at":"ico-cont-at-open",onClick:function(){return i(!s)},children:[Object(l.jsx)("div",{className:"addtask-lineA"}),Object(l.jsx)("div",{className:"addtask-lineB"})]})]})})),u=(n(28),n(29),{logo:n.p+"static/media/logo.f1f310ce.svg",options:n.p+"static/media/options.08003b88.svg"}),m=Object(d.b)((function(e){return{tasks:e.tasks}}),(function(e){return{}}))((function(e){var t=e.tasks;return Object(l.jsx)("div",{children:0===t.length?Object(l.jsx)("p",{children:"Add tasks to do..."}):t.map((function(e){return Object(l.jsxs)("div",{className:"task-card",children:[Object(l.jsx)("input",{type:"checkbox",className:"card-checkbox"}),Object(l.jsx)("div",{className:"card-name",children:e.name}),Object(l.jsx)("div",{className:"card-options",children:Object(l.jsx)("img",{src:u.options,alt:"options"})})]},e.name)}))})})),O=function(){return Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)("div",{className:"filters-container"}),Object(l.jsx)("div",{className:"task-container",children:Object(l.jsx)(m,{})})]})})},x=(n(30),function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("nav",{className:n?"navbar":"navbar-open",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)("i",{className:n?"icon-back":"icon-back-open",onClick:function(){return a(!n)},children:[Object(l.jsx)("div",{className:"back-lineA"}),Object(l.jsx)("div",{className:"back-lineB"}),Object(l.jsx)("div",{className:"back-lineC"})]}),Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)("img",{src:u.logo,className:"logo",alt:"logo"})})]})})}),p=n(7),v={tasks:[{name:"joda",desc:"juani",todo:"1"}],tasksdone:[]},h=Object(p.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDTASK":return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.concat(t.task)});default:return e}}));var f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.a,{store:h,children:[Object(l.jsx)(x,{}),Object(l.jsx)(O,{}),Object(l.jsx)(b,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),k()}},[[31,1,2]]]);
//# sourceMappingURL=main.7a777a60.chunk.js.map