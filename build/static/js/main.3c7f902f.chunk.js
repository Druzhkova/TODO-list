(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{41:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e.n(o),a=e(18),i=e.n(a),u=(e(41),e(16)),s=e(13),l=e(3),d=e(4),p=e(5),b=e(6);e(35);function f(){var n=Object(l.a)(["\n  padding: 9px 15px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: transparent;\n\n  &:hover {\n    opacity: 0.5;\n  }\n  ","\n"]);return f=function(){return n},n}d.a.button(f(),(function(n){return"solid"===n.customType?"\n    background-color: ".concat(n.color,";\n    "):"\n    color ".concat(n.color,"\n  ")}));var j=e(20),O=e.p+"static/media/background.5aca2723.jpg",x=e(32),h=e.n(x);function g(){var n=Object(l.a)(["\n  font-size: 1.6rem;\n  color: red;\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n  margin: 10px 0;\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 500;\n"]);return v=function(){return n},n}function m(){var n=Object(s.c)((function(n){return n.weather})),t=n.data,e=n.loading,o=n.errorMessage,c=t.city,a=t.temperature;return Object(r.jsxs)("div",{children:[e?Object(r.jsx)(C,{children:Object(r.jsx)(h.a,{type:"bars",color:"white",height:30,width:30})}):Object(r.jsxs)(C,{children:[c,","," ",a,"\xb0C"]}),o?Object(r.jsx)(y,{children:o}):null]})}var C=d.a.div(v()),y=d.a.div(g()),A="GET_WEATHER_REQUEST",k="GET_WEATHER_SUCCESS",w="GET_WEATHER_FAILURE";function E(n){return{type:A,payload:n}}var S={data:[],loading:!1,errorMessage:null};function T(){var n=Object(l.a)(["\n  margin: 5px 0;\n  font-size: 1.2rem;\n"]);return T=function(){return n},n}function z(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'Nunito', sans-serif;\n  font-size: 2.8rem;\n  z-index: 10;\n"]);return z=function(){return n},n}function M(){var n=Object(l.a)(["\n  &::after{\n    background: rgba(0, 0, 0, .4);\n    content: '';\n    top: 0;\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n"]);return M=function(){return n},n}function B(){var n=Object(l.a)(["\n  background-image: url('","');\n  height: 190px;\n  background-size: cover;\n  background-position: 10% 20%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n"]);return B=function(){return n},n}function L(){var n=Object(l.a)(["\n  margin: 15px 5px;\n  text-decoration: none;\n"]);return L=function(){return n},n}function I(){var n=Object(l.a)(["\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n"]);return I=function(){return n},n}function Q(){var n=Object(o.useMemo)((function(){return(new Date).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}),[]),t=Object(o.useState)(null),e=Object(j.a)(t,2),c=e[0],a=e[1],i=Object(o.useCallback)((function(){var n=(new Date).toLocaleTimeString();a(n)}),[]);return Object(o.useEffect)((function(){i()}),[i]),setInterval(i,1e3),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{imgBackground:O,children:Object(r.jsx)(F,{children:Object(r.jsxs)(G,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(H,{children:n}),c]})})}),Object(r.jsxs)(D,{children:[Object(r.jsx)(U,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/all",children:"All"}),Object(r.jsx)(U,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/active",children:"Active"}),Object(r.jsx)(U,{style:{color:"#66A7C9"},activeStyle:{color:"#F3706C"},to:"/done",children:"Done"})]})]})}var D=d.a.div(I()),U=Object(d.a)(u.b)(L()),R=d.a.div(B(),(function(n){return n.imgBackground})),F=d.a.div(M()),G=d.a.div(z()),H=d.a.p(T());function K(){var n=Object(l.a)(["\n  font-size: 32px;\n  color: #8e979c;\n  font-weight: 600;\n  cursor: pointer;\n"]);return K=function(){return n},n}function P(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  padding: 0 10px 0 5px;\n  border-bottom: 1px solid #8e979c;\n"]);return P=function(){return n},n}function W(){var n=Object(l.a)(["\n  padding: 0 5px;\n  font-size: 1.2rem;\n  margin-top: 5px;\n  color: #8e979c;\n  border: none;\n  outline: none;\n"]);return W=function(){return n},n}function Y(n){var t=n.onClick,e=Object(o.useState)(""),c=Object(j.a)(e,2),a=c[0],i=c[1],u=Object(o.useCallback)((function(){t(a),i("")}),[t,a]),s=Object(o.useCallback)((function(n){return i(n.target.value)}),[i]);return Object(r.jsxs)(J,{children:[Object(r.jsx)(q,{value:a,onChange:s,placeholder:"Add your task here..."}),Object(r.jsx)(N,{onClick:u,children:"+"})]})}var q=d.a.input(W()),J=d.a.form(P()),N=d.a.form(K());function V(){var n=Object(l.a)(["\n  left: 4px;\n  top: 50%;\n  position: absolute;\n  transform: translatey(-50%);\n  width: 18px;\n  height: 18px;\n  display: block;\n  background: white;\n  border-radius: 3px;\n  border: 1px solid #b8bfcc;\n  box-shadow: 0 2px 3px #f0f4f8;\n\n  "," \n\n\n"]);return V=function(){return n},n}function X(){var n=Object(l.a)(["\n  color: #6c717b;\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 5px 5px 30px;\n  ","\n"]);return X=function(){return n},n}function _(){var n=Object(l.a)(["\n  user-select: none;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return n},n}function Z(){var n=Object(l.a)(["\n  cursor: pointer;\n  padding: 5px 10px;\n"]);return Z=function(){return n},n}function $(n){var t=n.title,e=n.id,c=n.onChangeCompletionStatus,a=n.onDelete,i=n.isCompleted,u=Object(o.useCallback)((function(){c(e)}),[e,c]),s=Object(o.useCallback)((function(){a(e)}),[e,a]);return Object(r.jsxs)(tn,{children:[Object(r.jsxs)(en,{isCompleted:i,children:[Object(r.jsx)(rn,{onClick:u,isCompleted:i}),t]}),Object(r.jsx)(nn,{onClick:s,children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVQ4jY2QXUiTYRTHz/PxfmibzRddur05J1pbZM3VhR+VXZSQweqqLrqKIKibuozIkrqQviMrKgoJY15VBtXwoqggRmqmlpIFzshluOWGsrncnufpqlriK/7vzjn//49zDmp1OsurdvnabA5dD95ta9v3cfg0LKLLBGuFZWUtRasqGkbfBP3k+IH9QW9jQ5WmEIuFwuYN4Qn90fTMk4XCFwmpXu3xdDq83m2xSHRq4mvoPlUVOQ/Ho0CnI+BYTmlxdelB7Vd8S08kVdMseBwA4CxBuMic98Dj8eyOY5zsCQQOHY5E7wAAIACA2yUrj26sLG9ymzIaCY9BcjIO3T9S0XdJ7s5B4HJL0mO73a4NJWd7R8Lf604CzC14X7tZae0vzk2Pr1DEqEUSAQXPvKSY9aqyuCnTe4v9JvtJeodKB94rWAwSJN4iEJcoOW/kp/MbCYKn5tKCMs6BCQCVIMjHsNUIQLKLcxLVXZx/XsN4SQIhGKTkmVlBzioT1ksYKehiPGC4erNMrZ0YxQYARB9B4ppMOgAAzkjU90FXWahimTiG6boFwydkiv0Ef+tHIIZkJPwKCWXPT0l0T9hlEk+tamh+lgAA7AXh9wpRm6MSmKQ4051BNa85//nH9IrzIWdC5NZp8k7HLA93Md73j06Q9UVhfvpLniw+aVRcUGiL0ZkPLcrIc02NZfdwvsnkK63fRC0uByCzDApF140AgzOZHYiJ3BsS9f0FJObS4+r6Siho3A5gt/FUhqeMAM2MjQ7Psqs2DGv/G3TU1wbHmo6wWzZru1E4W1dkipfiW5J+A8uU2abXZ1V9AAAAAElFTkSuQmCC",alt:""})})]})}var nn=d.a.span(Z()),tn=d.a.li(_()),en=d.a.div(X(),(function(n){return n.isCompleted?"\n    color: #aeb7c6;\n    text-decoration: line-through;\n  ":""})),rn=d.a.span(V(),(function(n){return n.isCompleted?"\n    &::after {\n      content: '';\n      position: absolute;\n      top: 4px;\n      right: -5px;\n      width: 18.5px;\n      height: 2px;\n      background: #6c717b;\n      border-radius: 10%;\n      transform: rotate(-45deg);\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 8px;\n      right: 9px;\n      width: 7px;\n      height: 2px;\n      background: #6c717b;\n      border-radius: 10%;\n      transform: rotate(42deg);\n    }\n  ":""})),on="ADD_TODO",cn="DELETE_TODO",an="CHANGE_TODO_COMPLETION_STATUS",un="CHANGE_CURRENT_PAGE";var sn=e.p+"static/media/update.8dfe649f.svg";function ln(){var n=Object(l.a)(["\n  cursor: pointer;\n  position: absolute;\n  z-index: 50;\n  top: 13px;\n  right: 13px;\n"]);return ln=function(){return n},n}function dn(){var n=Object(l.a)(["\n  margin-left: 0;\n  padding: 0;\n  letter-spacing: none;\n  height: 220px;\n  overflow: auto;\n"]);return dn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  text-align: center;\n  padding: 10px 20px;\n"]);return pn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  color: #8e979c;\n  font-size: 16px;\n"]);return bn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 350px;\n  height: 560px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 7px 30px rgba(62, 9, 11, .3);\n"]);return fn=function(){return n},n}function jn(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.todoList.currentPage})),e=Object(s.c)((function(n){return n.todoList.todos})),c=Object(p.d)().pathname,a=Object(o.useCallback)((function(t){n({type:on,payload:t})}),[n]),i=Object(o.useCallback)((function(t){n(function(n){return{type:an,payload:n}}(t))}),[n]),u=Object(o.useCallback)((function(t){n(function(n){return{type:cn,payload:n}}(t))}),[n]),l=Object(o.useCallback)((function(t){n(function(n){return{type:un,payload:n}}(t))}),[n]),d=Object(o.useCallback)((function(){n(E())}),[n]);Object(o.useEffect)((function(){n(E())}),[n]);var b=e.filter((function(n){return c.includes("active")?!1===n.isCompleted:!c.includes("done")||!0===n.isCompleted})),f=0===b.length,j=Object(o.useMemo)((function(){return c.includes("all")||c.includes("active")?"Keep calm. There are no todos for today":"You haven't done anything yet "}),[c]);return Object(r.jsxs)(On,{children:[Object(r.jsx)(vn,{onClick:d,children:Object(r.jsx)("img",{src:sn,alt:""})}),Object(r.jsx)(Q,{onButtonClick:l,page:t}),Object(r.jsxs)(hn,{children:[Object(r.jsx)(Y,{onClick:a}),f?Object(r.jsx)(xn,{children:j}):Object(r.jsx)(gn,{children:b.map((function(n){return Object(r.jsx)($,{onChangeCompletionStatus:i,onDelete:u,page:t,title:n.title,id:n.id,isCompleted:n.isCompleted})}))})]})]})}var On=d.a.div(fn()),xn=d.a.div(bn()),hn=d.a.div(pn()),gn=d.a.ul(dn()),vn=d.a.div(ln()),mn=e(34),Cn={currentPage:"all",todos:[]};var yn=function(){return Object(r.jsx)(jn,{})},An=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,49)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),o(n),c(n),a(n)}))},kn=e(11),wn=e(33),En=Object(kn.combineReducers)({todoList:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case un:return Object(b.a)(Object(b.a)({},n),{},{currentPage:t.payload});case on:return Object(b.a)(Object(b.a)({},n),{},{todos:[].concat(Object(mn.a)(n.todos),[{title:t.payload,isCompleted:!1,id:String(Math.random())}])});case cn:return Object(b.a)(Object(b.a)({},n),{},{todos:n.todos.filter((function(n){return n.id!==t.payload}))});case an:return Object(b.a)(Object(b.a)({},n),{},{todos:n.todos.map((function(n){return n.id===t.payload?Object(b.a)(Object(b.a)({},n),{},{isCompleted:!n.isCompleted}):n}))});default:return n}},weather:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(b.a)(Object(b.a)({},n),{},{loading:!0,errorMessage:null});case k:return Object(b.a)(Object(b.a)({},n),{},{data:t.payload,loading:!1});case w:return Object(b.a)(Object(b.a)({},n),{},{loading:!1,errorMessage:t.payload});default:return n}}}),Sn=Object(kn.createStore)(En,Object(wn.composeWithDevTools)(Object(kn.applyMiddleware)((function(n){return function(t){return function(e){e.type===A&&fetch("http://api.weatherstack.com/current?access_key=c18c9cd0a7159022db85263eea437534&query=Minsk").then((function(n){return n.json()})).then((function(t){var e=t.location.name,r=t.current.temperature;n.dispatch({type:k,payload:{city:e,temperature:r}})})).catch((function(t){n.dispatch(function(n){return{type:w,payload:n}}(t.message))})),t(e)}}}))));i.a.render(Object(r.jsx)(s.a,{store:Sn,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(yn,{})})})}),document.getElementById("root")),An()}},[[48,1,2]]]);
//# sourceMappingURL=main.3c7f902f.chunk.js.map