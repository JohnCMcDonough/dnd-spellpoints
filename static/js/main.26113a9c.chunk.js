(this["webpackJsonpspellpoint-calc"]=this["webpackJsonpspellpoint-calc"]||[]).push([[0],{34:function(e,l,a){e.exports=a(49)},39:function(e,l,a){},49:function(e,l,a){"use strict";a.r(l);var t,n,r=a(0),o=a.n(r),m=a(27),c=a.n(m),i=(a(39),a(5)),p=a(53),s=a(13),u=a(54),S=a(1),x=a(6),v=a(14),d=a(32),f=a(50),b=a(55),L=a(12),P=[2,3,5,6,7,9,10,11,13];!function(e){e[e.FULL=0]="FULL",e[e.HALF=1]="HALF",e[e.THIRD=2]="THIRD",e[e.ARTIFICER=3]="ARTIFICER"}(t||(t={})),function(e){e[e.ONE=0]="ONE",e[e.TWO=1]="TWO",e[e.THREE=2]="THREE",e[e.FOUR=3]="FOUR",e[e.FIVE=4]="FIVE",e[e.SIX=5]="SIX",e[e.SEVEN=6]="SEVEN",e[e.EIGHT=7]="EIGHT",e[e.NINE=8]="NINE"}(n||(n={}));var E=[{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:73,maxSpellLevel:6},{maxSpellPoints:73,maxSpellLevel:6},{maxSpellPoints:83,maxSpellLevel:7},{maxSpellPoints:83,maxSpellLevel:7},{maxSpellPoints:94,maxSpellLevel:8},{maxSpellPoints:94,maxSpellLevel:8},{maxSpellPoints:107,maxSpellLevel:9},{maxSpellPoints:114,maxSpellLevel:9},{maxSpellPoints:123,maxSpellLevel:9},{maxSpellPoints:133,maxSpellLevel:9}],g=[{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5}],O=[{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4}],h=[{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5}],j=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function N(e){var l=0;return e.usedSpells.forEach((function(e,a){l+=e*P[a]})),l}function w(e,l){return function(e){var l=I(e),a=y(e);return P.map((function(t,r){return r>l.maxSpellLevel-1?0:r>=n.SIX?e.usedSpells[r]>0?0:Math.min(a/t|0,1):a/t|0}))}(e)[l]}function y(e){return C(e)-N(e)}function C(e){return I(e).maxSpellPoints+e.permanentSpellPointMod+e.tempSpellPointMod}function F(e,l){var a=I(e),t=C(e),r=P[l];return l>a.maxSpellLevel-1?0:l>=n.SIX?1:Math.floor(t/r)}function I(e){return function(e){switch(e){case t.FULL:return E;case t.HALF:return g;case t.THIRD:return O;case t.ARTIFICER:return h}}(e.casterType)[e.level-1]}var T=a(7),k=a(23),R=a(56),M=a(51),A=a(52);function H(){var e=Object(x.a)(["\n            justify-content: left;\n            text-align: left;\n            vertical-align: top;\n          "]);return H=function(){return e},e}function U(){var e=Object(x.a)(["\n      background-color: ",";\n      justify-content: center;\n      text-align: center;\n      vertical-align: center;\n      border: 1px solid ",";\n      width: 33%;\n    "]);return U=function(){return e},e}function D(){var e=Object(x.a)(["\n      /* display: flex; */\n      width: 100%;\n      min-height: 50px;\n    "]);return D=function(){return e},e}function J(){var e=Object(x.a)(["\n      border-collapse: collapse !important;\n    "]);return J=function(){return e},e}function V(){var e=Object(x.a)(["\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      padding: 10px;\n      width: 200px;\n      text-align: center;\n      margin: 20px;\n      border-radius: 5px;\n      background-color: ",";\n    "]);return V=function(){return e},e}function W(e){return e.map((function(e,l){return o.a.createElement(o.a.Fragment,null,l%10===0?o.a.createElement("br",null):"",function(e){var l="black",a="";"used"===e&&(a="black");"remaining"===e&&(l="white",a="rgba(0,0,0,0)");"lost"===e&&(a="darkred");return o.a.createElement("svg",{height:"20",width:"20"},o.a.createElement("circle",{cx:"10",cy:"10",r:"8",stroke:l,"stroke-width":"1",fill:a}))}(e))}))}var X=function(e){var l,a,t=Object(i.b)(),n=e.level+1,r=w(e.pool,e.level),m=(l=e.pool,a=e.level,F(l,a)-l.usedSpells[a]-w(l,a)),c=e.pool.usedSpells[e.level],p=P[e.level],u=F(e.pool,e.level);if(u<=0)return o.a.createElement(o.a.Fragment,null);console.log(e,c,r,m);var S=[].concat(Object(k.a)(new Array(c).fill("used")),Object(k.a)(new Array(r).fill("remaining")),Object(k.a)(new Array(m).fill("lost")));return function(){var l=Object(T.a)(V(),t.colors.background.tint2),a=Object(T.a)(J()),m=Object(T.a)(D()),i=Object(T.a)(U(),t.colors.background.overlay,t.colors.border.default);return o.a.createElement(f.a,{elevation:"sm",className:l},o.a.createElement("table",{className:a},o.a.createElement("tr",{className:m},o.a.createElement("td",{className:i},o.a.createElement(s.a,{variant:"display3"},n)),o.a.createElement("td",{className:i},o.a.createElement(R.a,{disabled:0===r,label:"cast",icon:o.a.createElement(A.a,null),onClick:function(){return e.cast()}}),o.a.createElement(R.a,{disabled:0===c,label:"uncast",icon:o.a.createElement(M.a,null),onClick:function(){return e.uncast()}})),o.a.createElement("td",{className:i},o.a.createElement(s.a,null,"Cost:",o.a.createElement("br",null),p,"sp"))),o.a.createElement("tr",{className:m},o.a.createElement("td",{className:i},o.a.createElement(s.a,null,"Left:",o.a.createElement("br",null),r)),o.a.createElement("td",{className:i},o.a.createElement(s.a,null,"Cast:",o.a.createElement("br",null),c)),o.a.createElement("td",{className:i},o.a.createElement(s.a,null,"Total:",o.a.createElement("br",null),u)))),o.a.createElement("div",null,o.a.createElement("td",{colSpan:3,className:Object(T.a)(H())},W(S))))}()};function B(){var e=Object(x.a)(["\n            display: flex;\n            max-width: '100%';\n            flex-wrap: wrap;\n            justify-content: center;\n          "]);return B=function(){return e},e}var z=function(e){return o.a.createElement("div",{className:Object(T.a)(B())},[0,1,2,3,4,5,6,7,8].map((function(l){return function(e,l){return o.a.createElement(X,{level:l,pool:e.pool,cast:function(){return e.modifyCastings(l,1)},uncast:function(){return e.modifyCastings(l,-1)}})}(e,l)})))},G=a(31);function $(){var e=Object(x.a)(["\n          width: 25%;\n          display: inline-block;\n        "]);return $=function(){return e},e}function q(){var e=Object(x.a)(["\n          width: 25%;\n          display: inline-block;\n        "]);return q=function(){return e},e}function K(){var e=Object(x.a)(["\n          width: 50%;\n        "]);return K=function(){return e},e}function Q(){var e=Object(x.a)(["\n        margin-top: 20px;\n        margin-bottom: 10px;\n      "]);return Q=function(){return e},e}function Y(){var e=Object(x.a)(["\n      padding: 15px;\n    "]);return Y=function(){return e},e}function Z(){var e=Object(x.a)(["\n    background-color: "," !important;\n    color: "," !important;\n    border: none;\n  "]);return Z=function(){return e},e}function _(){var e=Object(x.a)(["\n        width: 100%;\n        text-align: center;\n        border: 2px solid ",";\n        border-collapse: collapse;\n      "]);return _=function(){return e},e}function ee(){var e=Object(x.a)(["\n    "]);return ee=function(){return e},e}function le(){var e=Object(x.a)(["\n      width: 33%;\n      border-right: 1px solid ",";\n      border-top: 1px solid ",";\n    "]);return le=function(){return e},e}function ae(){var e=Object(x.a)(["\n      width: 33%;\n      border-right: 1px solid ",";\n    "]);return ae=function(){return e},e}var te={casterType:t.FULL,level:1,usedSpells:[0,0,0,0,0,0,0,0,0],tempSpellPointMod:0,permanentSpellPointMod:0},ne=function(){var e=Object(i.b)(),l=Object(G.a)("spellpoint-config",te),a=Object(d.a)(l,2),n=a[0],r=a[1];n=Object(v.a)({},te,{},n);var m=Object(T.a)(Z(),e.colors.background.tint1,e.colors.text.default);return o.a.createElement(f.a,{elevation:"xs",className:Object(T.a)(Y())},o.a.createElement(s.a,{variant:"h1"}," Spell Casting"),o.a.createElement("hr",null),o.a.createElement(b.b,{label:"Spell Caster Type"},o.a.createElement(b.c,{value:n.casterType,inputSize:"sm",onChange:function(e){return l=+e.target.value,void r(Object(v.a)({},n,{casterType:l}));var l}},o.a.createElement("option",{className:m,value:t.FULL},"Full Caster"),o.a.createElement("option",{className:m,value:t.HALF},"Half Caster"),o.a.createElement("option",{className:m,value:t.THIRD},"Third Caster"),o.a.createElement("option",{className:m,value:t.ARTIFICER},"Artificer"))),o.a.createElement(b.b,{label:"Spell Caster Level"},o.a.createElement(b.c,{value:n.level,inputSize:"sm",onChange:function(e){return l=+e.target.value,void r(Object(v.a)({},n,{usedSpells:[0,0,0,0,0,0,0,0,0],level:l}));var l}},j.map((function(e){return o.a.createElement("option",{className:m,value:e},"Level ",e)})))),o.a.createElement("div",{className:Object(T.a)(Q())},o.a.createElement(L.a,{className:Object(T.a)(K()),onClick:function(){window.confirm("Are you sure you want to Long Rest?")&&r(Object(v.a)({},n,{usedSpells:[0,0,0,0,0,0,0,0,0],tempSpellPointMod:0}))}},"Long Rest"),o.a.createElement(b.b,{className:Object(T.a)(q()),label:"Temp Spell Point Mod"},o.a.createElement(b.a,{type:"number",value:n.tempSpellPointMod,onChange:function(e){return function(e){var l=n.tempSpellPointMod,a=y(n)-l;-e>a&&(e=-a),r(Object(v.a)({},n,{tempSpellPointMod:e}))}(+e.target.value)}})),o.a.createElement(b.b,{className:Object(T.a)($()),label:"Permanent Spell Point Mod"},o.a.createElement(b.a,{type:"number",value:n.permanentSpellPointMod,onChange:function(e){return function(e){var l=n.permanentSpellPointMod,a=y(n)-l;-e>a&&(e=-a),r(Object(v.a)({},n,{permanentSpellPointMod:e}))}(+e.target.value)}}))),function(){var l=C(n),a=y(n),t=N(n),r=Object(T.a)(ae(),e.colors.border.muted),m=Object(T.a)(le(),e.colors.border.muted,e.colors.border.muted),c=Object(T.a)(ee());return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{className:Object(T.a)(_(),e.colors.border.muted)},o.a.createElement("tr",{className:c},o.a.createElement("th",{className:m},"Spell Points Remaining"),o.a.createElement("th",{className:m},"Spell Points Used"),o.a.createElement("th",{className:m},"Spell Points Total")),o.a.createElement("tr",{className:c},o.a.createElement("td",{className:r},a),o.a.createElement("td",{className:r},t),o.a.createElement("td",{className:r},l))))}(),o.a.createElement(z,{modifyCastings:function(e,l){!function(e,l){var a=JSON.parse(JSON.stringify(n));a.usedSpells[e]+=l,r(a)}(e,l)},pool:n}))};var re=function(){var e=Object(i.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{styles:{html:{background:e.colors.background.default,color:e.colors.text.default,fontFamily:e.fonts.base},body:{padding:0,margin:0,marginBottom:"50vh",width:"100vw",height:"100vh","*:focus":{outline:"none"},overflow:"auto"}}}),o.a.createElement(p.a,null,o.a.createElement(s.a,{variant:"display1"},"D&D Spell Point Calculator"),o.a.createElement(u.a,null),o.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.26113a9c.chunk.js.map