(()=>{var e={426:(e,r,n)=>{"use strict";n.d(r,{Z:()=>a});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\n  background-color: antiquewhite;\n}\n\n.wrapper{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#displayController{\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.square{\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n  background-color: orange;\n  transition: background-color 1s ease;\n  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);\n}\n\n.square:hover{\n  cursor: pointer;\n  background-color: rgb(255, 228, 179);\n}\n",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),r.push(s))}},r}},695:e=>{"use strict";var r={};e.exports=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}},379:e=>{"use strict";var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=n(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(r[f].references++,r[f].updater(p)):r.push({identifier:l,updater:o(p,t),references:1}),i.push(l)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=t(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},290:(e,r,n)=>{const t=n(427),o=n(417),a=n(507),i=t(),c=o(a(!0,"X"),a(!1,"O"),i);e.exports=(()=>{const e=document.getElementById("displayController");return document.getElementById("turn"),{buildBoard:function(){c.gb.board.map(((r,n)=>{const t=document.createElement("div");t.classList.add("square"),"-"==c.gb.board[n]?t.innerText="":t.innerText=c.gb.board[n],t.addEventListener("click",(()=>{console.log("clciekd"),c.move(n,"X"),t.innerText=c.gb.board[n]})),e.appendChild(t)}))}}})()},417:e=>{e.exports=(e=null,r=null,n)=>{let t=e,o=r,a=n,i="";const c=()=>{t.toggleTurn(),o.toggleTurn()},s=e=>(i="",u(0,3,6)||u(3,4,5)||u(6,7,8)||u(0,3,6)||u(1,4,7)||u(2,5,8)||u(0,4,8)||u(6,4,2)||d()),u=(e,r,n)=>{let t=a.board[e];return"-"!=t&&t==a.board[r]&&t==a.board[n]&&(i=t,!0)},d=()=>{for(let e=0;e<9;e++)if("-"==a.board)return!1;return i="Draw",!0};return{checkWin:s,gb:a,move:(e,r)=>{if("X"!=r&&"O"!=r)throw new Error("Invalid Character");if("X"==a.board[e]||"O"==a.board[e])throw new Error("Space is taken");a.move(e,r),c(),s()},playerOne:t,playerTwo:o,changeTurn:c,score:0,get winner(){return i},newGame:()=>{a.resetBoard(),i=""}}}},427:e=>{e.exports=()=>{let e=["-","-","-","-","-","-","-","-","-"];return{move:(r,n)=>{e[r]=n},resetBoard:()=>{e=["-","-","-","-","-","-","-","-","-"]},get board(){return e}}}},507:e=>{e.exports=(e,r)=>{let n=r,t=e;return{get isMyTurn(){return t},get playerName(){return n},toggleTurn:()=>{t=!t}}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";n(417);var e=n(290),r=n.n(e),t=n(379),o=n.n(t),a=n(795),i=n.n(a),c=n(695),s=n.n(c),u=n(216),d=n.n(u),l=n(426),f={styleTagTransform:function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}},setAttributes:function(e){var r=n.nc;r&&e.setAttribute("nonce",r)},insert:function(e){var r=s()("head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}};f.domAPI=i(),f.insertStyleElement=d(),o()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,document.body.appendChild(function(){const e=document.createElement("div");return r().buildBoard(),e}())})()})();