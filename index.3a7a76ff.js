function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.3a7a76ff.js","lp5u4":"sprite.8ca286f5.svg","iWQIE":"apple-read-logo.652b354e.png","894cL":"apple-read-logo@2x-1.15632d7d.png","fz8Fl":"book-shop-logo.1d091ebd.png","2CP9g":"book-shop-logo@2x.1f77f032.png","gXHCa":"deafult-img.9168e021.jpg","ayx2C":"shopping_list.2120bd25.js"}'));var s={};s=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();var r={};r=new URL(i("kyEFX").resolve("iWQIE"),import.meta.url).toString();new URL(i("kyEFX").resolve("894cL"),import.meta.url).toString();var a={};a=new URL(i("kyEFX").resolve("fz8Fl"),import.meta.url).toString();new URL(i("kyEFX").resolve("2CP9g"),import.meta.url).toString();var l=i("7Y9D8"),c={};c=new URL(i("kyEFX").resolve("gXHCa"),import.meta.url).toString();var d={},u="Expected a function",p=NaN,m="[object Symbol]",g=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,k="object"==typeof self&&self&&self.Object===Object&&self,L=y||k||Function("return this")(),w=Object.prototype.toString,_=Math.max,E=Math.min,S=function(){return L.Date.now()};function j(e,t,o){var n,i,s,r,a,l,c=0,d=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(u);function g(t){var o=n,s=i;return n=i=void 0,c=t,r=e.apply(s,o)}function f(e){var o=e-l;return void 0===l||o>=t||o<0||p&&e-c>=s}function v(){var e=S();if(f(e))return b(e);a=setTimeout(v,function(e){var o=t-(e-l);return p?E(o,s-(e-c)):o}(e))}function b(e){return a=void 0,m&&n?g(e):(n=i=void 0,r)}function h(){var e=S(),o=f(e);if(n=arguments,i=this,l=e,o){if(void 0===a)return function(e){return c=e,a=setTimeout(v,t),d?g(e):r}(l);if(p)return a=setTimeout(v,t),g(l)}return void 0===a&&(a=setTimeout(v,t)),r}return t=x(t)||0,$(o)&&(d=!!o.leading,s=(p="maxWait"in o)?_(x(o.maxWait)||0,t):s,m="trailing"in o?!!o.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=i=a=void 0},h.flush=function(){return void 0===a?r:b(S())},h}function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&w.call(e)==m}(e))return p;if($(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=$(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var o=v.test(e);return o||b.test(e)?h(e.slice(2),o?2:8):f.test(e)?p:+e}d=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return $(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),j(e,t,{leading:n,maxWait:t,trailing:i})},e(l).Loading.init({className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"var(--all-categories-active)",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"}),e(l).Loading.pulse();const T="https://books-backend.p.goit.global/books/",H=document.querySelector(".js-categories-list"),F=document.querySelector(".js-all-categories"),M=document.querySelector(".js-books-wrapper"),N=document.querySelector(".js-books-title"),C=document.querySelector(".js-scroll-up"),O=document.querySelector(".js-popUp"),R=document.querySelector(".js-backdrop-pop");H.addEventListener("click",(function(e){if("LI"!=e.target.nodeName)return;const t=e.target.textContent.trim();B(e.target),"All categories"===t?W():Y(t)})),M.addEventListener("click",(function(t){if("IMG"!=t.target.nodeName)return;document.body.style.overflow="hidden";const o=t.target.parentElement;!async function(t){try{const o=await fetch(`${T}${t}`);if(!o.ok)throw new Error(o.statusText);D=await o.json(),function(t){const{author:o,buy_links:n,description:i,book_image:l,title:c,_id:d}=t,u="Currently there is no description! Please come and check later;)",p=n[0].url,m=n[1].url,g=n[2].url;let f=`<button class="close-btn-modal js-btn-close-modal">\n      <svg class="close-btn-modal-icon" width="24" height="24">\n        <use href="${e(s)}#close-icon"></use>\n      </svg>\n    </button>\n    <div class="title-author-discrp">\n      <img\n        class="img-book"\n        src="${l}"\n        alt="poster book"\n      />\n      <div class="wrap-anotations">\n        <h2 class="title-book-pop-up">${c||u}</h2>\n        <p class="author">${o||u}</p>\n        <p class="discrition-book">\n         ${i||u}\n        </p>\n        <ul class="resource-shoping">\n          <li>\n            <a href="${p}" class="icon-wraper" target="_blank">\n              <svg class="amazon-icon">\n                <use href="${e(s)}#amazon-logo"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="${m}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(r)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n          <li>\n            <a href="${g}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(a)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="wraper">\n      <button class="btn-add-shop-list js-add" type="button">\n        add to shopping\n      </button>\n\n      <div class="wraper-remove js-wraper-remove pop-up-is-hidden">\n      <button class="btn-add-shop-list btn-remove js-remove  " type="button">\n        remove from the shopping list\n      </button>\n\n      <p class="msg-add-shoplist js-remove " >\n        Сongratulations! You have added the book to the shopping list. To\n        delete, press the button “Remove from the shopping list”.\n      </p>\n      </div>\n      </div>\n    </div>`;O.innerHTML=f,R.classList.remove("pop-up-is-hidden"),R.addEventListener("click",ee),A=document.querySelector(".js-btn-close-modal"),U=document.querySelector(".js-add"),X=document.querySelector(".js-wraper-remove"),A.addEventListener("click",ee,!0,{once:!0}),window.addEventListener("keydown",V,{once:!0}),U.addEventListener("click",Z),X.addEventListener("click",K),z=document.querySelector(".js-add"),J=document.querySelector(".js-remove"),function(e){const t=localStorage.getItem("book-anotation");JSON.parse(t).forEach((t=>{t._id===e&&(U.classList.add("pop-up-is-hidden"),X.classList.remove("pop-up-is-hidden"))}))}(d)}(D)}catch(e){}}(o.querySelector(".book-id").textContent)})),M.addEventListener("click",(function(e){if("button"!=e.target.type)return;let t=e.target.parentElement.querySelector(".home__books-all-category").textContent;Y(t);const o=[...H.children];B(o.find((e=>e.textContent===t)))})),document.addEventListener("scroll",d((function(){window.scrollY>900?(C.classList.remove("js-scroll-up-hidden"),C.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))):C.classList.add("js-scroll-up-hidden")}),300));let q=F;const I="Coming soon";let A=null,U=null,X=null,z=null,J=null,D={},P=JSON.parse(localStorage.getItem("book-anotation"))||[];async function W(){e(l).Loading.pulse();try{M.innerHTML="",N.innerHTML=G("Best sellers book");const t=await fetch(`${T}top-books `);if(!t.ok)throw new Error(t.statusText);const o=await t.json();M.innerHTML=o.map((e=>`<li class="home__books-all-wrapper">\n      <p class="home__books-all-category">${e.list_name}</p>\n      <ul class="home__books-all-items">\n        ${Q(e.books)}\n      </ul>\n      <button class="home__books-all-btn" type="button">\n        See more\n      </button>\n    </li>`)).join(""),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function Q(t){return t.map((({book_image:t,title:o,author:n,_id:i})=>`<li class="home__books-item">\n      <img class="home__books-img" src="${t||e(c)}" alt="${o||I}" />\n      <h3 class="home__books-title">${o||I}</h3>\n      <p class="home__books-author">${n||I}</p>\n      <p style="display:none" class="book-id">${i}</p>\n    </li>`)).join("")}async function Y(t){e(l).Loading.pulse(),N.innerHTML=G(t),M.innerHTML="";try{const o=await fetch(`${T}category?category=${t}`);if(!o.ok)throw new Error(o.statusText);const n=await o.json();M.innerHTML=Q(n),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function B(e){q.classList.remove("home__categories-item-active"),e.classList.add("home__categories-item-active"),q=e}function G(e){if(!e)return;const t=e.split(" "),o=t[t.length-1];return e.replace(o,`<span class="js-active-word">${o}</span>`)}function V(e){"Escape"==e.key&&(document.body.style.overflow="",R.classList.add("pop-up-is-hidden"),U.removeEventListener("click",Z),X.removeEventListener("click",K),z.removeEventListener("click",Z),J.removeEventListener("click",K))}function Z(e){U.classList.add("pop-up-is-hidden"),X.classList.remove("pop-up-is-hidden"),P.push(D),localStorage.setItem("book-anotation",JSON.stringify(P))}function K(e){X.classList.add("pop-up-is-hidden"),U.classList.remove("pop-up-is-hidden"),JSON.parse(localStorage.getItem("book-anotation")).forEach(((e,t)=>{e._id===D._id&&(P.splice(t,1),localStorage.setItem("book-anotation",JSON.stringify(P)))}))}function ee(e){"BUTTON"!=e.target.nodeName&&!e.target.classList.contains("backdrop-pop")||e.target.classList.contains("btn-add-shop-list")||(document.body.style.overflow="",R.classList.add("pop-up-is-hidden"),window.removeEventListener("keydown",ee,!0),A.removeEventListener("click",ee),R.removeEventListener("click",ee),U.removeEventListener("click",Z),X.removeEventListener("click",K))}!async function(){try{const e=await fetch(`${T}category-list`);if(!e.ok)throw new Error(e.statusText);const t=await e.json();H.insertAdjacentHTML("beforeend",t.map((e=>`<li class="home__categories-item">${e.list_name}</li>`)).join(""))}catch(e){H.innerHTML='<h2 class="home__books-all-category">Sorry, but there is no categories</h2>',console.log(e)}}(),W(),i("6WnMa"),i("lJVr2"),i("bUb57"),i("eMg8c"),i("bTcpz");
//# sourceMappingURL=index.3a7a76ff.js.map
