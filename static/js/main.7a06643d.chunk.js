(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{40:function(n,t,e){},47:function(n,t,e){"use strict";e.r(t);var o=e(1),r=e(0),c=e.n(r),i=e(18),a=e.n(i),u=(e(40),e(3)),s=e(4),d=e(7);e(34);function l(){var n=Object(u.a)(["\n  padding: 9px 15px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: transparent;\n\n  &:hover {\n    opacity: 0.5;\n  }\n  ","\n"]);return l=function(){return n},n}s.a.button(l(),(function(n){return"solid"===n.customType?"\n    background-color: ".concat(n.color,";\n    "):"\n    color ".concat(n.color,"\n  ")}));var p=e(16),b=e.p+"static/media/background.5aca2723.jpg";function f(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'Nunito', sans-serif;\n  text-transform: uppercase;\n  font-size: 2.8rem;\n  z-index: 10;\n  font-weight: 700;\n"]);return f=function(){return n},n}function j(){var n=Object(u.a)(["\n  &::after{\n    background: rgba(0, 0, 0, .3);\n    content: '';\n    top: 0;\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n  background-image: url('","');\n  height: 190px;\n  background-size: cover;\n  background-position: 10% 20%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n"]);return x=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin: 15px 5px;\n  text-decoration: none;\n"]);return O=function(){return n},n}function h(){var n=Object(u.a)(["\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n"]);return h=function(){return n},n}function g(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{imgBackground:b,children:Object(o.jsx)(A,{children:Object(o.jsx)(k,{children:"Vacation"})})}),Object(o.jsxs)(m,{children:[Object(o.jsx)(v,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/all",children:"All"}),Object(o.jsx)(v,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/active",children:"Active"}),Object(o.jsx)(v,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/done",children:"Done"})]})]})}var m=s.a.div(h()),v=Object(s.a)(p.b)(O()),C=s.a.div(x(),(function(n){return n.imgBackground})),A=s.a.div(j()),k=s.a.div(f()),y=e(33);function w(){var n=Object(u.a)(["\n  font-size: 32px;\n  color: #8e979c;\n  font-weight: 600;\n  cursor: pointer;\n"]);return w=function(){return n},n}function S(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  padding: 0 10px 0 5px;\n  border-bottom: 1px solid #8e979c;\n"]);return S=function(){return n},n}function T(){var n=Object(u.a)(["\n  padding: 0 5px;\n  font-size: 1.2rem;\n  margin-top: 5px;\n  color: #8e979c;\n  border: none;\n  outline: none;\n"]);return T=function(){return n},n}function z(n){var t=n.onClick,e=Object(r.useState)(""),c=Object(y.a)(e,2),i=c[0],a=c[1],u=Object(r.useCallback)((function(){t(i),a("")}),[t,i]),s=Object(r.useCallback)((function(n){return a(n.target.value)}),[a]);return Object(o.jsxs)(L,{children:[Object(o.jsx)(B,{value:i,onChange:s,placeholder:"Add your task here..."}),Object(o.jsx)(Q,{onClick:u,children:"+"})]})}var B=s.a.input(T()),L=s.a.form(S()),Q=s.a.form(w());function E(){var n=Object(u.a)(["\n  left: 4px;\n  top: 50%;\n  position: absolute;\n  transform: translatey(-50%);\n  width: 18px;\n  height: 18px;\n  display: block;\n  background: white;\n  border-radius: 3px;\n  border: 1px solid #b8bfcc;\n  box-shadow: 0 2px 3px #f0f4f8;\n\n  "," \n\n\n"]);return E=function(){return n},n}function I(){var n=Object(u.a)(["\n  color: #6c717b;\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 5px 5px 30px;\n  ","\n"]);return I=function(){return n},n}function M(){var n=Object(u.a)(["\n  user-select: none;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n"]);return M=function(){return n},n}function D(){var n=Object(u.a)(["\n  cursor: pointer;\n  padding: 5px 10px;\n"]);return D=function(){return n},n}function F(n){var t=n.title,e=n.id,c=n.onChangeCompletionStatus,i=n.onDelete,a=n.isCompleted,u=Object(r.useCallback)((function(){c(e)}),[e,c]),s=Object(r.useCallback)((function(){i(e)}),[e,i]);return Object(o.jsxs)(P,{children:[Object(o.jsxs)(U,{isCompleted:a,children:[Object(o.jsx)(Y,{onClick:u,isCompleted:a}),t]}),Object(o.jsx)(K,{onClick:s,children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVQ4jY2QXUiTYRTHz/PxfmibzRddur05J1pbZM3VhR+VXZSQweqqLrqKIKibuozIkrqQviMrKgoJY15VBtXwoqggRmqmlpIFzshluOWGsrncnufpqlriK/7vzjn//49zDmp1OsurdvnabA5dD95ta9v3cfg0LKLLBGuFZWUtRasqGkbfBP3k+IH9QW9jQ5WmEIuFwuYN4Qn90fTMk4XCFwmpXu3xdDq83m2xSHRq4mvoPlUVOQ/Ho0CnI+BYTmlxdelB7Vd8S08kVdMseBwA4CxBuMic98Dj8eyOY5zsCQQOHY5E7wAAIACA2yUrj26sLG9ymzIaCY9BcjIO3T9S0XdJ7s5B4HJL0mO73a4NJWd7R8Lf604CzC14X7tZae0vzk2Pr1DEqEUSAQXPvKSY9aqyuCnTe4v9JvtJeodKB94rWAwSJN4iEJcoOW/kp/MbCYKn5tKCMs6BCQCVIMjHsNUIQLKLcxLVXZx/XsN4SQIhGKTkmVlBzioT1ksYKehiPGC4erNMrZ0YxQYARB9B4ppMOgAAzkjU90FXWahimTiG6boFwydkiv0Ef+tHIIZkJPwKCWXPT0l0T9hlEk+tamh+lgAA7AXh9wpRm6MSmKQ4051BNa85//nH9IrzIWdC5NZp8k7HLA93Md73j06Q9UVhfvpLniw+aVRcUGiL0ZkPLcrIc02NZfdwvsnkK63fRC0uByCzDApF140AgzOZHYiJ3BsS9f0FJObS4+r6Siho3A5gt/FUhqeMAM2MjQ7Psqs2DGv/G3TU1wbHmo6wWzZru1E4W1dkipfiW5J+A8uU2abXZ1V9AAAAAElFTkSuQmCC",alt:""})})]})}var K=s.a.span(D()),P=s.a.li(M()),U=s.a.div(I(),(function(n){return n.isCompleted?"\n    color: #aeb7c6;\n    text-decoration: line-through;\n  ":""})),Y=s.a.span(E(),(function(n){return n.isCompleted?"\n    &::after {\n      content: '';\n      position: absolute;\n      top: 4px;\n      right: -4px;\n      width: 18px;\n      height: 2px;\n      background: #6c717b;\n      border-radius: 10%;\n      transform: rotate(-45deg);\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 7px;\n      right: 9px;\n      width: 7px;\n      height: 2px;\n      background: #6c717b;\n      border-radius: 10%;\n      transform: rotate(42deg);\n    }\n  ":""})),J=e(15),N="ADD_TODO",R="DELETE_TODO",V="CHANGE_TODO_COMPLETION_STATUS",q="CHANGE_CURRENT_PAGE";var G=e(5);function H(){var n=Object(u.a)(["\n  margin-left: 0;\n  padding: 0;\n  letter-spacing: none;\n  height: 220px;\n  overflow: auto;\n"]);return H=function(){return n},n}function W(){var n=Object(u.a)(["\n  padding: 10px 20px;\n"]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\n  color: #8e979c;\n  font-size: 16px;\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 350px;\n  height: 560px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 7px 30px rgba(62, 9, 11, .3);\n"]);return Z=function(){return n},n}function _(){var n=Object(J.b)(),t=Object(J.c)((function(n){return n.todoList.currentPage})),e=Object(J.c)((function(n){return n.todoList.todos})),c=Object(G.d)().pathname,i=Object(r.useCallback)((function(t){n({type:N,payload:t})}),[n]),a=Object(r.useCallback)((function(t){n(function(n){return{type:V,payload:n}}(t))}),[n]),u=Object(r.useCallback)((function(t){n(function(n){return{type:R,payload:n}}(t))}),[n]),s=Object(r.useCallback)((function(t){n(function(n){return{type:q,payload:n}}(t))}),[n]),d=e.filter((function(n){return c.includes("active")?!1===n.isCompleted:!c.includes("done")||!0===n.isCompleted})),l=0===d.length,p=Object(r.useMemo)((function(){return c.includes("all")||c.includes("active")?"Keep calm. There are no todos for today":"You haven't done anything yet "}),[c]);return Object(o.jsxs)($,{children:[Object(o.jsx)(g,{onButtonClick:s,page:t}),Object(o.jsxs)(tn,{children:[Object(o.jsx)(z,{onClick:i}),l?Object(o.jsx)(nn,{children:p}):Object(o.jsx)(en,{children:d.map((function(n){return Object(o.jsx)(F,{onChangeCompletionStatus:a,onDelete:u,page:t,title:n.title,id:n.id,isCompleted:n.isCompleted})}))})]})]})}var $=s.a.div(Z()),nn=s.a.div(X()),tn=s.a.div(W()),en=s.a.ul(H()),on=e(32),rn={currentPage:"all",todos:[]};var cn=function(){return Object(o.jsx)(_,{})},an=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,48)).then((function(t){var e=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),o(n),r(n),c(n),i(n)}))},un=e(11),sn=Object(un.combineReducers)({todoList:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(d.a)(Object(d.a)({},n),{},{currentPage:t.payload});case N:return Object(d.a)(Object(d.a)({},n),{},{todos:[].concat(Object(on.a)(n.todos),[{title:t.payload,isCompleted:!1,id:String(Math.random())}])});case R:return Object(d.a)(Object(d.a)({},n),{},{todos:n.todos.filter((function(n){return n.id!==t.payload}))});case V:return Object(d.a)(Object(d.a)({},n),{},{todos:n.todos.map((function(n){return n.id===t.payload?Object(d.a)(Object(d.a)({},n),{},{isCompleted:!n.isCompleted}):n}))});default:return n}}}),dn=e(31),ln=Object(un.createStore)(sn,Object(dn.composeWithDevTools)(Object(un.applyMiddleware)()));a.a.render(Object(o.jsx)(J.a,{store:ln,children:Object(o.jsx)(p.a,{children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(cn,{})})})}),document.getElementById("root")),an()}},[[47,1,2]]]);
//# sourceMappingURL=main.7a06643d.chunk.js.map