(this["webpackJsonpspellpoint-calc"]=this["webpackJsonpspellpoint-calc"]||[]).push([[0],{34:function(e,l,a){e.exports=a(49)},39:function(e,l,a){},49:function(e,l,a){"use strict";a.r(l);var n,t,r=a(0),o=a.n(r),i=a(27),m=a.n(i),p=(a(39),a(5)),c=a(54),s=a(13),x=a(55),S=a(1),u=a(8),v=a(24),f=a(32),L=a(56),P=[2,3,5,6,7,9,10,11,13];!function(e){e[e.FULL=0]="FULL",e[e.HALF=1]="HALF",e[e.THIRD=2]="THIRD",e[e.ARTIFICER=3]="ARTIFICER"}(n||(n={})),function(e){e[e.ONE=0]="ONE",e[e.TWO=1]="TWO",e[e.THREE=2]="THREE",e[e.FOUR=3]="FOUR",e[e.FIVE=4]="FIVE",e[e.SIX=5]="SIX",e[e.SEVEN=6]="SEVEN",e[e.EIGHT=7]="EIGHT",e[e.NINE=8]="NINE"}(t||(t={}));var E=[{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:73,maxSpellLevel:6},{maxSpellPoints:73,maxSpellLevel:6},{maxSpellPoints:83,maxSpellLevel:7},{maxSpellPoints:83,maxSpellLevel:7},{maxSpellPoints:94,maxSpellLevel:8},{maxSpellPoints:94,maxSpellLevel:8},{maxSpellPoints:107,maxSpellLevel:9},{maxSpellPoints:114,maxSpellLevel:9},{maxSpellPoints:123,maxSpellLevel:9},{maxSpellPoints:133,maxSpellLevel:9}],d=[{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5}],b=[{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:0,maxSpellLevel:0},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4}],g=[{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:4,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:6,maxSpellLevel:1},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:14,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:17,maxSpellLevel:2},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:27,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:32,maxSpellLevel:3},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:38,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:44,maxSpellLevel:4},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:57,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5},{maxSpellPoints:64,maxSpellLevel:5}],h=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];function O(e){var l=0;return e.usedSpells.forEach((function(e,a){l+=e*P[a]})),l}function j(e,l){return function(e){var l=N(e),a=w(e);return P.map((function(n,r){return r>l.maxSpellLevel-1?0:r>=t.SIX?e.usedSpells[r]>0?0:Math.min(a/n|0,1):a/n|0}))}(e)[l]}function w(e){return N(e).maxSpellPoints-O(e)}function y(e,l){var a=N(e),n=P[l];return l>a.maxSpellLevel-1?0:l>=t.SIX?1:Math.floor(a.maxSpellPoints/n)}function N(e){return function(e){switch(e){case n.FULL:return E;case n.HALF:return d;case n.THIRD:return b;case n.ARTIFICER:return g}}(e.casterType)[e.level-1]}var F=a(9),I=a(22),T=a(50),C=a(51),R=a(57),k=a(52),H=a(53);function A(){var e=Object(u.a)(["\n        justify-content: left;\n        text-align: left;\n        vertical-align: top;\n        flex-grow: 1;\n        flex-shrink: 0;\n      "]);return A=function(){return e},e}function U(){var e=Object(u.a)(["\n      flex-grow: 1;\n      flex-shrink: 0; \n      background-color: ",";\n      justify-content: center;\n      text-align: center;\n      vertical-align: center;\n      border-width: 5px;\n      border-style: 'solid';\n      border-color: 'red';\n    "]);return U=function(){return e},e}function D(){var e=Object(u.a)(["\n      display: flex;\n      width: 100%;\n      flex-grow: 0;\n      flex-shrink: 0;\n      height: 50px;\n    "]);return D=function(){return e},e}function J(){var e=Object(u.a)(["\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      padding: 10px;\n      width: 200px;\n      text-align: center;\n      margin: 20px;\n      border-radius: 5px;\n      background-color: ",";\n    "]);return J=function(){return e},e}function V(e){return e.map((function(e,l){return o.a.createElement(o.a.Fragment,null,l%10===0?o.a.createElement("br",null):"",function(e){if("used"===e)return o.a.createElement(T.a,{color:"black"});if("remaining"===e)return o.a.createElement(T.a,{color:""});if("lost"===e)return o.a.createElement(T.a,{color:"red"})}(e))}))}var W=function(e){var l,a,n=Object(p.b)(),t=e.level+1,r=j(e.pool,e.level),i=(l=e.pool,a=e.level,y(l,a)-l.usedSpells[a]-j(l,a)),m=e.pool.usedSpells[e.level],c=P[e.level],x=y(e.pool,e.level);if(x<=0)return o.a.createElement(o.a.Fragment,null);console.log(e,m,r,i);var S=[].concat(Object(I.a)(new Array(m).fill("used")),Object(I.a)(new Array(r).fill("remaining")),Object(I.a)(new Array(i).fill("lost"))),u=Object(F.a)(J(),n.colors.background.tint2),v=Object(F.a)(D()),f=Object(F.a)(U(),n.colors.background.overlay);return o.a.createElement(C.a,{elevation:"sm",className:u},o.a.createElement("div",{className:v},o.a.createElement("div",{className:f},o.a.createElement(s.a,{variant:"display3"},t)),o.a.createElement("div",{className:f},o.a.createElement(R.a,{disabled:0===m,label:"uncast",icon:o.a.createElement(k.a,null),onClick:function(){return e.uncast()}}),o.a.createElement(R.a,{disabled:0===r,label:"cast",icon:o.a.createElement(H.a,null),onClick:function(){return e.cast()}})),o.a.createElement("div",{className:f},o.a.createElement(s.a,null,"Cost:",o.a.createElement("br",null),c,"sp"))),o.a.createElement("div",{className:v},o.a.createElement("div",{className:f},o.a.createElement(s.a,null,"Left:",o.a.createElement("br",null),r)),o.a.createElement("div",{className:f},o.a.createElement(s.a,null,"Cast:",o.a.createElement("br",null),m)),o.a.createElement("div",{className:f},o.a.createElement(s.a,null,"Total:",o.a.createElement("br",null),x))),o.a.createElement("div",{className:Object(F.a)(A())},V(S)))};function X(){var e=Object(u.a)(["\n            display: flex;\n            max-width: '100%';\n            flex-wrap: wrap;\n            justify-content: center;\n          "]);return X=function(){return e},e}var M=function(e){return o.a.createElement("div",{className:Object(F.a)(X())},[0,1,2,3,4,5,6,7,8].map((function(l){return function(e,l){return o.a.createElement(W,{level:l,pool:e.pool,cast:function(){return e.modifyCastings(l,1)},uncast:function(){return e.modifyCastings(l,-1)}})}(e,l)})))},z=a(31);function B(){var e=Object(u.a)(["\n            width: 33%;\n          "]);return B=function(){return e},e}function G(){var e=Object(u.a)(["\n            width: 33%;\n          "]);return G=function(){return e},e}function $(){var e=Object(u.a)(["\n            width: 33%;\n          "]);return $=function(){return e},e}function q(){var e=Object(u.a)(["\n              display: flex;\n              justify-content: space-between;\n              align-items: left;\n              text-align: left;\n        "]);return q=function(){return e},e}var K=function(){var e=Object(z.a)("spellpoint-config",{casterType:n.FULL,level:1,usedSpells:[0,0,0,0,0,0,0,0,0]}),l=Object(f.a)(e,2),a=l[0],t=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(L.a,{label:"spellpoint-info"},o.a.createElement(L.b,{value:a.casterType,inputSize:"sm",onChange:function(e){return l=+e.target.value,void t(Object(v.a)({},a,{casterType:l}));var l}},o.a.createElement("option",{value:n.FULL},"Full Caster"),o.a.createElement("option",{value:n.HALF},"Half Caster"),o.a.createElement("option",{value:n.THIRD},"Third Caster"),o.a.createElement("option",{value:n.ARTIFICER},"Artificer")),o.a.createElement(L.b,{value:a.level,inputSize:"sm",onChange:function(e){return l=+e.target.value,void t(Object(v.a)({},a,{usedSpells:[0,0,0,0,0,0,0,0,0],level:l}));var l}},h.map((function(e){return o.a.createElement("option",{value:e},"Level ",e)})))),function(){var e=N(a).maxSpellPoints,l=w(a),n=O(a);return o.a.createElement("div",{className:Object(F.a)(q())},o.a.createElement(s.a,{className:Object(F.a)($()),variant:"h4"},"Remaining Spell Points ",l),o.a.createElement(s.a,{className:Object(F.a)(G()),variant:"h4"},"Used Spell Points ",n),o.a.createElement(s.a,{className:Object(F.a)(B()),variant:"h4"},"Total Spell Points ",e))}(),o.a.createElement(M,{modifyCastings:function(e,l){!function(e,l){var n=JSON.parse(JSON.stringify(a));n.usedSpells[e]+=l,t(n)}(e,l)},pool:a}))};var Q=function(){var e=Object(p.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{styles:{html:{background:e.colors.background.default,color:e.colors.text.default,fontFamily:e.fonts.base},body:{padding:0,margin:0,width:"100vw",height:"100vh","*:focus":{outline:"none"},overflow:"auto"}}}),o.a.createElement(c.a,null,o.a.createElement(s.a,{variant:"display1"},"D&D Spell Point Calculator"),o.a.createElement(x.a,null),o.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,null,o.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9ea52335.chunk.js.map