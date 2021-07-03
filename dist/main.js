(()=>{var e={426:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap);"]),o.push([e.id,'/*------- fonts --------*/\n\n/*------- default styling --------*/\nbody {\n  background-color: antiquewhite;\n  margin: 0;\n  padding: 0;\n  font-family: "Roboto", sans-serif;\n}\n\nnav {\n  width: 100%;\n  background-color: rgb(255, 147, 108);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n\nh1{\n  color: white;\n}\n\n#newGame {\n  background-color: rgb(254, 174, 26);\n  padding: 1.5em 2em;\n  border-radius: 10px;\n  opacity: 40%;\n  font-size: 1.2em;\n}\n\n#activeNewGame{\n  background-color: rgb(254, 174, 26);\n  padding: 1.5em 2em;\n  opacity: 100%;\n  border-radius: 10px;\n  font-size: 1.2em;\n  transition: background-color 0.2s ease;\n}\n\n\n#activeNewGame:hover{\n  cursor: pointer;\n  background-color: orange;\n}\n\n.move_wrapper{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#turn {\n  font-size: 1.6em;\n  font-weight: 700;\n  padding: 2em;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#displayController {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.square {\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n  background-color: orange;\n  transition: background-color 0.2s ease;\n  /* transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); */\n}\n\n.square:hover {\n  cursor: pointer;\n  background-color: rgb(255, 189, 67);\n}\n',""]);const i=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},695:e=>{"use strict";var n={};e.exports=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}},379:e=>{"use strict";var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=r(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:l,updater:o(p,t),references:1}),a.push(l)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);n[s].references--}for(var c=t(e,o),u=0;u<i.length;u++){var d=r(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},290:(e,n,r)=>{const t=r(427),o=r(417),i=r(507),a=t(),s=o(i(!0,"X"),i(!1,"O"),a);e.exports=(()=>{const e=document.getElementById("displayController"),n=document.getElementById("turn"),r=document.getElementById("newGame"),t=function(){e.innerHTML="",n.innerText="X's Turn",s.gb.board.map(((o,i)=>{const a=document.createElement("div");a.classList.add("square"),"-"==s.gb.board[i]?a.innerText="":a.innerText=s.gb.board[i],a.addEventListener("click",(()=>{r.id="activeNewGame",r.addEventListener("click",(()=>{r.id="newGame",s.newGame(),t()})),s.playerOne.isMyTurn?s.move(i,"X"):s.move(i,"O"),"X"==s.winner||"O"==s.winner?n.innerText=`The Winner is ${s.winner}`:"Draw"==s.winner?n.innerText=`It's a ${s.winner}!`:s.playerOne.isMyTurn?n.innerText="X's Turn":n.innerText="O's Turn",a.innerText=s.gb.board[i]})),e.appendChild(a)}))};return{buildBoard:t}})()},417:e=>{e.exports=(e=null,n=null,r)=>{let t=e,o=n,i=r,a="";const s=()=>{t.toggleTurn(),o.toggleTurn()},c=e=>u(0,3,6)||u(3,4,5)||u(6,7,8)||u(0,3,6)||u(1,4,7)||u(2,5,8)||u(0,4,8)||u(6,4,2)||d(),u=(e,n,r)=>{let t=i.board[e];return"-"!=t&&t==i.board[n]&&t==i.board[r]&&(a=t,!0)},d=()=>{for(let e=0;e<9;e++)if("-"==i.board[e])return!1;return a="Draw",!0};return{checkWin:c,gb:i,move:(e,n)=>{if("X"!=n&&"O"!=n)throw new Error("Invalid Character");if("X"==i.board[e]||"O"==i.board[e])throw new Error("Space is taken");i.move(e,n),s(),c()},playerOne:t,playerTwo:o,changeTurn:s,score:0,get winner(){return a},newGame:()=>{i.resetBoard(),t.isMyTurn=!0,t.isMyTurn=!1,a=""}}}},427:e=>{e.exports=()=>{let e=["-","-","-","-","-","-","-","-","-"];return{move:(n,r)=>{e[n]=r},resetBoard:()=>{e=["-","-","-","-","-","-","-","-","-"]},get board(){return e}}}},507:e=>{e.exports=(e,n)=>{let r=n,t=e;return{get isMyTurn(){return t},get playerName(){return r},toggleTurn:()=>{t=!t}}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=r(290),n=r.n(e),t=r(379),o=r.n(t),i=r(795),a=r.n(i),s=r(695),c=r.n(s),u=r(216),d=r.n(u),l=r(426),f={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=r.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=c()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};f.domAPI=a(),f.insertStyleElement=d(),o()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,n().buildBoard()})()})();