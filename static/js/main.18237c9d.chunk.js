(this["webpackJsonpshop-basket"]=this["webpackJsonpshop-basket"]||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(4),r=n.n(a),u=n(3),s=(n(19),n(1));function o(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.items})),n=function(e){var n=e.target.dataset.id;t({type:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",payload:{id:n}})},c=function(n){var c=n.target.dataset.id;e.find((function(t){return t.id===c})).count>=1&&t({type:"\u0423\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",payload:{id:c}})};return Object(s.jsxs)("div",{className:"products",children:[Object(s.jsx)("h1",{className:"products__caption",children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"}),e.map((function(t){return Object(s.jsxs)("div",{className:"product",children:[Object(s.jsxs)("div",{className:"product__name",children:[t.name," - $",t.price]}),Object(s.jsxs)("div",{className:"product__buttons-wrapper",children:[Object(s.jsx)("button",{"data-id":t.id,onClick:c,children:"-"}),Object(s.jsx)("div",{children:Object(s.jsx)("span",{children:t.count||""})}),Object(s.jsx)("button",{"data-id":t.id,onClick:n,children:"+"})]})]},t.name)}))]})}n(21);function d(){var t=Object(u.c)((function(t){return t.items})),e=t.filter((function(t){return!!t.count})).map((function(t){return t.price*t.count})).reduce((function(t,e){return t+e}),0);return e?Object(s.jsxs)("button",{className:"basket",children:["\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435 ($",e,")"]}):null}n(22);var j=function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(o,{}),Object(s.jsx)(d,{})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))},p=(n(23),n(2)),l=n(8),m={items:[{id:"\u21161",name:"\u0427\u0430\u0440\u043b\u044c\u0437 \u041f\u0435\u0442\u0446\u043e\u043b\u044c\u0434 - \u041a\u043e\u0434 ",price:20,count:0},{id:"\u21162",name:"\u041c\u0430\u0440\u0435\u0439\u043d \u0425\u0430\u0432\u0435\u0440\u0431\u0435\u043a\u0435 - \u0412\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 JavaScript ",price:25,count:0},{id:"\u21163",name:"\u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0430\u0440\u0442\u0438\u043d - \u0427\u0438\u0441\u0442\u044b\u0439 \u043a\u043e\u0434 ",price:12,count:0},{id:"\u21164",name:"\u0414\u0436\u043e\u043d \u0414\u0430\u043a\u043a\u0435\u0442 - JavaScript \u0438 JQuery ",price:15,count:0},{id:"\u21165",name:"\u0411\u0430\u0440\u0431\u0430\u0440\u0430 \u041e\u0430\u043a\u043b\u0438 - \u0414\u0443\u043c\u0430\u0439 \u043a\u0430\u043a \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a ",price:10,count:0}]};var O=Object(l.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442":return Object(p.a)(Object(p.a)({},t),{},{items:t.items.map((function(t){return t.id===c.id?Object(p.a)(Object(p.a)({},t),{},{count:t.count+1}):t}))});case"\u0423\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442":return Object(p.a)(Object(p.a)({},t),{},{items:t.items.map((function(t){return t.id===c.id?Object(p.a)(Object(p.a)({},t),{},{count:t.count-1}):t}))});default:return t}}));r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(u.a,{store:O,children:Object(s.jsx)(j,{})})}),document.getElementById("root")),b()}},[[24,1,2]]]);
//# sourceMappingURL=main.18237c9d.chunk.js.map