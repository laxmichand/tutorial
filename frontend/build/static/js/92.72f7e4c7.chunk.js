"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[92],{3092:function(t,n,e){e.r(n);var r=e(9439),c=e(2791),s=e(2264),a=e(7689),i=e(1087),u=e(184);n.default=function(){var t=(0,a.s0)(),n=(0,c.useState)([]),e=(0,r.Z)(n,2),o=e[0],d=e[1];return(0,c.useEffect)((function(){(0,s.Ho)().then((function(t){d(t)})).catch((function(t){alert(t.response.data.message)}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"d-flex justify-content-end",children:(0,u.jsx)("img",{onClick:function(){t("/register")},src:"https://cdn-icons-png.flaticon.com/512/3578/3578002.png",className:"cursor-pointer float-end mb-1",height:25,width:25,alt:"Add New"})}),(0,u.jsxs)("table",{className:"table table-info table-striped rounded bdr",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",children:"#"}),(0,u.jsx)("th",{scope:"col",children:"Title"}),(0,u.jsx)("th",{scope:"col",children:"Description"}),(0,u.jsx)("th",{scope:"col",children:"Published"}),(0,u.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,u.jsx)("tbody",{children:o&&o.map((function(t,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:n+1}),(0,u.jsx)("td",{children:t.title}),(0,u.jsx)("td",{children:t.description}),(0,u.jsx)("td",{children:"true"===String(t.published)?"YES":"NO"}),(0,u.jsx)("td",{children:(0,u.jsxs)("div",{className:"d-flex gap-2 justify-content-center","aria-label":"...",children:[(0,u.jsx)(i.OL,{to:"/update/".concat(t._id),children:(0,u.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/8539/8539634.png",className:"cursor-pointer",height:20,width:20,alt:"edit"})}),(0,u.jsx)(i.OL,{onClick:function(){var n;n=t._id,(0,s.km)(n).then((function(t){(0,s.Ho)().then((function(t){d(t)})).catch((function(t){alert(t.response.data.message)}))}))},children:(0,u.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1828/1828851.png",className:"cursor-pointer",height:20,width:20,alt:"delete"})})]})})]},n)}))})]})]})}},2264:function(t,n,e){e.d(n,{Ho:function(){return i},Vx:function(){return l},WC:function(){return u},km:function(){return o},nM:function(){return d}});var r=e(4165),c=e(5861),s=e(1243),a="/tutorials",i=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(a+"/getall");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(a+"/"+n);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.delete(a+"/"+n);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.post(a+"/add",n);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n,e){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.put(a+"/"+e,n);case 2:return c=t.sent,t.abrupt("return",c.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=92.72f7e4c7.chunk.js.map