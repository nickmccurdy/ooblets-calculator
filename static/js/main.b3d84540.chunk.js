(this["webpackJsonpooblets-calculator"]=this["webpackJsonpooblets-calculator"]||[]).push([[0],{60:function(e){e.exports=JSON.parse('[[{"name":"caroot","cost":5,"days":1.5},{"name":"clothlets","cost":32,"days":3},{"name":"muz","cost":3,"days":2},{"name":"nurnies"},{"name":"planklets"},{"name":"sweetiebeeties","cost":5,"days":3}],[{"name":"flootiflowers","cost":7,"days":4},{"name":"froobtose","from":["sweetiebeeties"]},{"name":"ground springbeans","from":["springbeans"]},{"name":"lopauliflowers","cost":10,"days":7},{"name":"muz flour","from":["muz"]},{"name":"pompadoots","cost":8,"days":5},{"name":"springbeans","cost":6,"days":5},{"name":"zinookas","cost":10,"days":4}],[{"name":"beanjuice","from":["springbeans","springbeans","springbeans"]},{"name":"bettie curd","from":["sweetiebeeties","muz"]},{"name":"clambrosia","from":["sweetiebeeties"]},{"name":"flooti karioka","from":["sweetiebeeties","flootiflowers","flootiflowers"]},{"name":"hop dobs","from":["caroot","muz"]},{"name":"oodles","from":["muz"]}],[{"name":"blue goo pie","from":["sweetiebeeties","zinookas","zinookas","zinookas","muz"]},{"name":"go go cupcakes","from":["muz","springbeans","springbeans","sweetiebeeties","flootiflowers","flootiflowers","flootiflowers"]},{"name":"lurge lattys","from":["springbeans","springbeans","pompadoots"]},{"name":"pibblepug pies","from":["muz","sweetiebeeties","sweetiebeeties"]},{"name":"spressies","from":["springbeans","springbeans","sweetiebeeties"]}]]')},66:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(55),l=n.n(o),c=(n(65),n(66),n(38)),s=n(10),u=n(58),m=n(16),i=n(60),f=(n(70),{amount:5,item:"caroot",payment:1});function d(e){return i.flat().find((function(t){return t.name===e}))}function p(e){var t=e.push,n=e.remove,o=e.form.values,l=Object(a.useRef)([]),u=Object(a.useRef)(!1),m=Object(a.useRef)();Object(a.useEffect)((function(){var e,t;(e=l.current).push.apply(e,Object(c.a)(o.orders.slice(l.current.length).map((function(){return Object(a.createRef)()}))));var n=null===(t=l.current[l.current.length-1])||void 0===t?void 0:t.current;n&&u.current&&(n.focus(),n.select(),u.current=!1),void 0!==m.current&&(l.current.splice(m.current,1),m.current=void 0),o.orders.length||(l.current=[])}));var p,b=(p=o.discount,o.orders.map((function(e){var t=[d(e.item)];"from"in t[0]&&(t=t[0].from.map(d));var n=t.map((function(t){return("cost"in t?t.name===p?Math.floor(.5*t.cost):t.cost:0)*e.amount})).reduce((function(e,t){return e+t})),a=e.payment-n,r=t.map((function(e){return"days"in e?e.days:0})).reduce((function(e,t){return Math.max(e,t)}));return{cost:n,profit:a,days:r,profitPerDay:Math.round(a/(r||1))}})));return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Items"),r.a.createElement("th",null,"Cost"),r.a.createElement("th",null,"Payment"),r.a.createElement("th",null,"Profit"),r.a.createElement("th",null,"Days"),r.a.createElement("th",null,"Profit/Day"),r.a.createElement("th",null))),r.a.createElement("tbody",null,b.map((function(e,t){function a(n){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=b.map((function(e,t){return t})).sort((function(e,t){return b[t][n]-b[e][n]}));a&&l.reverse();var c=l.slice(0,o.level).includes(t);return c?r.a.createElement("strong",null,e[n]):e[n]}return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(s.a,{innerRef:l.current[t],name:"orders.".concat(t,".amount"),type:"number",step:5,validate:function(e){if(e%5)return"orders.".concat(t,".amount must by divisible by 5")},style:{width:"2.5em"}}),r.a.createElement(s.a,{component:"select",name:"orders.".concat(t,".item"),style:{width:"11em"}},i.slice(0,o.level).map((function(e,t){return r.a.createElement("optgroup",{key:t,label:"Plenny's level ".concat(t+1)},e.map((function(e){var t=e.name;return r.a.createElement("option",{key:t},t)})))})))),r.a.createElement("td",null,a("cost",!0)),r.a.createElement("td",null,r.a.createElement(s.a,{name:"orders.".concat(t,".payment"),type:"number",size:5,style:{width:"4em"}})),r.a.createElement("td",null,a("profit")),r.a.createElement("td",null,a("days",!0)),r.a.createElement("td",null,a("profitPerDay")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:function(){n(t),m.current=t}},"X")))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:8},r.a.createElement("button",{className:"fluid",type:"button",onClick:function(){t(f),u.current=!0}},"Add")))))}function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("a",{href:"https://ooblets.com/"},"Ooblets")," Calculator"),r.a.createElement("p",null,"Visit ",r.a.createElement("a",{href:"https://ooblets.gamepedia.com/Plenny's"},"Plenny's")," and enter what bulk orders you have available today. We'll tell you how you can best make a profit."),r.a.createElement(s.d,{initialValues:{level:1,discount:"none",orders:[]},validationSchema:Object(m.d)().shape({level:Object(m.c)().integer().min(1).max(4),discount:Object(m.b)().oneOf(["none"].concat(Object(c.a)(i.flat().filter((function(e){return"cost"in e})).map((function(e){return e.name}))))),orders:Object(m.a)().of(Object(m.d)().shape({amount:Object(m.c)().integer().min(5).max(40),item:Object(m.b)().oneOf(i.flat().map((function(e){return e.name}))),payment:Object(m.c)().integer().min(1)}))}),onSubmit:function(){}},(function(e){var t,n,a=e.errors,o=e.values;return r.a.createElement(s.c,null,r.a.createElement("input",{type:"reset"}),r.a.createElement("div",null,r.a.createElement("label",null,"Plenny's level:",r.a.createElement(s.a,{name:"level",type:"number",min:1,max:4}))),r.a.createElement("div",null,r.a.createElement("label",null,"Meed's discount:",r.a.createElement(s.a,{component:"select",name:"discount",style:{width:"9em"}},r.a.createElement("option",null,"none"),i.slice(0,o.level).map((function(e,t){return r.a.createElement("optgroup",{key:t,label:"Plenny's level ".concat(t+1)},e.filter((function(e){return"cost"in e})).map((function(e){var t=e.name;return r.a.createElement("option",{key:t},t)})))}))))),r.a.createElement("h2",null,"Orders"),r.a.createElement(s.b,{name:"orders",component:p}),Object.keys(a).length?r.a.createElement("h2",null,"Errors"):null,r.a.createElement("ul",null,[a.level,a.discount].concat(Object(c.a)(null!==(t=null===(n=a.orders)||void 0===n?void 0:n.flatMap(Object.values))&&void 0!==t?t:[])).filter((function(e){return e})).map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement(u.a,{name:"form"}))})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nickmccurdy/ooblets-calculator"},"Source on GitHub")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.b3d84540.chunk.js.map