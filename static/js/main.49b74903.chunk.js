(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(21),i=n.n(r),a=n(12),o=n(47),u=n(19),s=n(10),l="[screen] resize",d={widthScreen:0},j="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,h=Object(u.b)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{widthScreen:t.payload});default:return e}}}),p=Object(u.d)(h,j(Object(u.a)(o.a))),b=n(7),f=n.n(b),O=n(13),v=n(4),x=n(32),g=n(31),y=n.n(g),m=n(3),w={fill:"#d00",stroke:"none"};function k(e){var t=e.size,n=void 0===t?20:t;return Object(m.jsx)("svg",{height:n,viewBox:"0 0 24 24",style:w,children:Object(m.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}var I=c.memo(k),P=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ip-api.com/json").then(function(){var e=Object(O.a)(f.a.mark((function e(n){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:c=e.sent,t=c;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ip-api.com/json/".concat(t)).then(function(){var e=Object(O.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:c=e.sent,n=c;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=n(22),C=function(e){var t=e.clickGetMyIP,n=e.clickSearchIP,c=e.valueInput,r=e.changeInput,i=Object(a.c)((function(e){return e.appReducer})).widthScreen,o=function(){t()},u=function(){c.trim().length>0&&n()};return Object(m.jsxs)("div",{className:"container-main-search",children:[Object(m.jsx)("h3",{children:"Buscar IP"}),Object(m.jsxs)("div",{className:"search-ip-container",style:{flexDirection:i<1024?"column":""},children:[i>1024?Object(m.jsx)("button",{onClick:o,children:"Obtener mi IP"}):null,Object(m.jsx)("input",{name:"searchIP",type:"text",value:c,onChange:r,autoComplete:"off",style:{margin:i<1024?"0px":"",fontSize:i<1024?"1rem":""}}),i>1024?Object(m.jsx)("button",{onClick:u,children:"Buscar"}):Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(m.jsx)("button",{onClick:u,style:{marginRight:"30px"},children:"Buscar"}),Object(m.jsx)("button",{onClick:o,children:"Mi IP"})]})]})]})},E=function(e){var t=e.country,n=e.region,c=e.city,r=e.ip;return Object(a.c)((function(e){return e.appReducer})).widthScreen>1024?Object(m.jsxs)("div",{className:"info-ip-container",children:[Object(m.jsx)("h4",{children:"IP: ".concat(r)}),Object(m.jsx)("h4",{children:"Pais: ".concat(t)}),Object(m.jsx)("h4",{children:"Estado: ".concat(n)}),Object(m.jsx)("h4",{children:"Ciudad: ".concat(c)})]}):Object(m.jsx)("div",{})},M=n(33),N=function(e){var t=e.darkMode,n=e.clickLight,c=e.clickDark,r=Object(a.c)((function(e){return e.appReducer})).widthScreen;return t?Object(m.jsx)(M.b,{size:r>1024?"2.5rem":"2rem",className:"icon-sun",onClick:n}):Object(m.jsx)(M.a,{className:"icon-sun",size:r>1024?"2.5rem":"2rem",onClick:c})},G=function(){var e=function(e){j({latitude:e.coords.latitude,longitude:e.coords.longitude,width:"100vw",height:"100vh",zoom:15}),g({latitude:e.coords.latitude,longitude:e.coords.longitude})},t=function(e){console.log("error location"),console.log(e)};Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition(e,t,{enableHighAccuracy:!0})}),[]);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(v.a)(t,2),r=n[0],i=n[1];return[r,function(e){var t=e.target;i(Object(s.a)(Object(s.a)({},r),{},Object(z.a)({},t.name,t.value)))},function(){i(e)}]}({searchIP:""}),r=Object(v.a)(n,2),i=r[0],a=r[1],o=i.searchIP,u=Object(c.useState)({latitude:52.6376,longitude:-1.135171,width:"100vw",height:"100vh",zoom:15}),l=Object(v.a)(u,2),d=l[0],j=l[1],h=Object(c.useState)({latitude:52.6376,longitude:-1.135171}),p=Object(v.a)(h,2),b=p[0],g=p[1],w=Object(c.useState)(!0),k=Object(v.a)(w,2),M=k[0],G=k[1],L=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:"success"!==(t=e.sent).status?y.a.fire({icon:"error",title:"Oops...",text:"IP invalida"}):(j({latitude:t.lat,longitude:t.lon,width:"100vw",height:"100vh",zoom:15}),g({latitude:t.lat,longitude:t.lon,country:t.country,region:t.region,city:t.city,ip:t.query}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(o);case 2:if("success"===(t=e.sent).status){e.next=6;break}return y.a.fire({icon:"error",title:"Oops...",text:"IP invalida"}),e.abrupt("return");case 6:j({latitude:t.lat,longitude:t.lon,width:"100vw",height:"100vh",zoom:15}),g({latitude:t.lat,longitude:t.lon,country:t.country,region:t.region,city:t.city,ip:t.query});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{clickGetMyIP:L,clickSearchIP:_,valueInput:o,changeInput:a}),b.country?Object(m.jsx)(E,{country:b.country,region:b.region,city:b.city,ip:b.ip}):null,Object(m.jsx)(x.b,Object(s.a)(Object(s.a)({},d),{},{mapStyle:M?"mapbox://styles/mapbox/dark-v8":"mapbox://styles/mapbox/light-v8",mapboxApiAccessToken:"pk.eyJ1IjoicG9ydGZvbGlvMjAiLCJhIjoiY2tzOW0wa2p6MHU1bjJ4bnpnMGNzeGY5NyJ9.5euPKIVltBeLHtgaGIy4ew",maxZoom:20,onViewportChange:function(e){j(Object(s.a)({},e))},children:Object(m.jsx)(x.a,{latitude:b.latitude,longitude:b.longitude,children:Object(m.jsx)(I,{size:30})})})),Object(m.jsx)(N,{darkMode:M,clickDark:function(){return G(!0)},clickLight:function(){return G(!1)}})]})},L=function(){return Object(m.jsx)(a.a,{store:p,children:Object(m.jsx)(_,{})})},_=function(){var e=Object(a.b)(),t=function(){e({type:l,payload:window.innerWidth})};return Object(c.useEffect)((function(){return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[t]),Object(m.jsx)(G,{})};n(72);i.a.render(Object(m.jsx)(L,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.49b74903.chunk.js.map