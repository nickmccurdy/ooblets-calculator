(this["webpackJsonpooblets-calculator"]=this["webpackJsonpooblets-calculator"]||[]).push([[0],{60:function(e){e.exports=JSON.parse('[[{"name":"caroot","cost":5,"days":1.5},{"name":"clothlets","cost":32,"days":3},{"name":"muz","cost":3,"days":2},{"name":"nurnies"},{"name":"planklets"},{"name":"sweetiebeeties","cost":5,"days":3}],[{"name":"flootiflowers","cost":7,"days":4},{"name":"froobtose","from":["sweetiebeeties"]},{"name":"ground springbeans","from":["springbeans"]},{"name":"lopauliflowers","cost":10,"days":7},{"name":"muz flour","from":["muz"]},{"name":"pompadoots","cost":8,"days":5},{"name":"springbeans","cost":6,"days":5},{"name":"zinookas","cost":10,"days":4}],[{"name":"beanjuice","from":["springbeans","springbeans","springbeans"]},{"name":"bettie curd","from":["sweetiebeeties","muz"]},{"name":"clambrosia","from":["sweetiebeeties"]},{"name":"flooti karioka","from":["sweetiebeeties","flootiflowers","flootiflowers"]},{"name":"hop dobs","from":["caroot","muz"]},{"name":"oodles","from":["muz"]}],[{"name":"blue goo pie","from":["sweetiebeeties","zinookas","zinookas","zinookas","muz"]},{"name":"go go cupcakes","from":["muz","springbeans","springbeans","sweetiebeeties","flootiflowers","flootiflowers","flootiflowers"]},{"name":"lurge lattys","from":["springbeans","springbeans","pompadoots"]},{"name":"pibblepug pies","from":["muz","sweetiebeeties","sweetiebeeties"]},{"name":"spressies","from":["springbeans","springbeans","sweetiebeeties"]}]]')},61:function(e,t,n){e.exports=n(72)},67:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(55),r=n.n(l),c=(n(66),n(67),n(52)),m=n(10),s=n(58),i=n(16),u=n(60),f=(n(71),{amount:5,item:"caroot",payment:1});function d(e){return u.flat().find((function(t){return t.name===e}))}function p(e){var t=e.push,n=e.remove,a=e.form.values;return o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Items"),o.a.createElement("th",null,"Cost"),o.a.createElement("th",null,"Payment"),o.a.createElement("th",null,"Profit"),o.a.createElement("th",null,"Days"),o.a.createElement("th",null,"Profit/Day"),o.a.createElement("th",null))),o.a.createElement("tbody",null,a.orders.map((function(e,t){var l=[d(e.item)];"from"in l[0]&&(l=l[0].from.map(d));var r=l.map((function(t){return("cost"in t?t.name===a.discount?Math.floor(.5*t.cost):t.cost:0)*e.amount})).reduce((function(e,t){return e+t})),c=e.payment-r,s=l.map((function(e){return"days"in e?e.days:0})).reduce((function(e,t){return Math.max(e,t)})),i=Math.round(c/(s||1));return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(m.a,{name:"orders.".concat(t,".amount"),type:"number",step:5,validate:function(e){if(e%5)return"orders.".concat(t,".amount must by divisible by 5")},style:{width:"2.5em"}}),o.a.createElement(m.a,{component:"select",name:"orders.".concat(t,".item"),style:{width:"11em"}},u.slice(0,a.level).map((function(e,t){return o.a.createElement("optgroup",{key:t,label:"Plenny's level ".concat(t+1)},e.map((function(e){var t=e.name;return o.a.createElement("option",{key:t},t)})))})))),o.a.createElement("td",null,r),o.a.createElement("td",null,o.a.createElement(m.a,{name:"orders.".concat(t,".payment"),type:"number",size:5,style:{width:"4em"}})),o.a.createElement("td",null,c),o.a.createElement("td",null,s),o.a.createElement("td",null,i),o.a.createElement("td",null,o.a.createElement("button",{type:"button",onClick:function(){return n(t)}},"X")))}))),o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:8},o.a.createElement("button",{className:"fluid",type:"button",onClick:function(){return t(f)}},"Add")))))}function b(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,o.a.createElement("a",{href:"https://ooblets.com/"},"Ooblets")," Calculator"),o.a.createElement("p",null,"Visit ",o.a.createElement("a",{href:"https://ooblets.gamepedia.com/Plenny's"},"Plenny's")," and enter what bulk orders you have available today. We'll tell you how you can best make a profit."),o.a.createElement(m.d,{initialValues:{level:1,discount:"none",orders:[]},validationSchema:Object(i.d)().shape({level:Object(i.c)().integer().min(1).max(4),discount:Object(i.b)().oneOf(["none"].concat(Object(c.a)(u.flat().filter((function(e){return"cost"in e})).map((function(e){return e.name}))))),orders:Object(i.a)().of(Object(i.d)().shape({amount:Object(i.c)().integer().min(5),item:Object(i.b)().oneOf(u.flat().map((function(e){return e.name}))),payment:Object(i.c)().integer().min(1)}))}),onSubmit:function(){}},(function(e){var t,n,a=e.errors,l=e.values;return o.a.createElement(m.c,null,o.a.createElement("input",{type:"reset"}),o.a.createElement("div",null,o.a.createElement("label",null,"Plenny's level:",o.a.createElement(m.a,{name:"level",type:"number",min:1,max:4}))),o.a.createElement("div",null,o.a.createElement("label",null,"Meed's discount:",o.a.createElement(m.a,{component:"select",name:"discount",style:{width:"9em"}},o.a.createElement("option",null,"none"),u.slice(0,l.level).map((function(e,t){return o.a.createElement("optgroup",{key:t,label:"Plenny's level ".concat(t+1)},e.filter((function(e){return"cost"in e})).map((function(e){var t=e.name;return o.a.createElement("option",{key:t},t)})))}))))),o.a.createElement("h2",null,"Orders"),o.a.createElement(m.b,{name:"orders",component:p}),Object.keys(a).length?o.a.createElement("h2",null,"Errors"):null,o.a.createElement("ul",null,[a.level,a.discount].concat(Object(c.a)(null!==(t=null===(n=a.orders)||void 0===n?void 0:n.flatMap(Object.values))&&void 0!==t?t:[])).filter((function(e){return e})).map((function(e){return o.a.createElement("li",{key:e},e)}))),o.a.createElement(s.a,{name:"form"}))})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/nickmccurdy/ooblets-calculator"},"Source on GitHub")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.edf716b8.chunk.js.map