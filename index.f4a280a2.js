!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.f4a280a2.js","ee16w":"sprite.8ca286f5.svg","eICEL":"apple-read-logo.652b354e.png","2L4yx":"apple-read-logo@2x-1.15632d7d.png","i9pPv":"book-shop-logo.1d091ebd.png","7yZHS":"book-shop-logo@2x.1f77f032.png","2HnSn":"deafult-img.9168e021.jpg","h4tGU":"shopping_list.e28a4eb0.js"}'));var s={};s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ee16w");var r={};r=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("eICEL");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("2L4yx");var a={};a=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("i9pPv");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("7yZHS");var l=i("6JpON"),c={};c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2HnSn");var d={},u="Expected a function",p=NaN,g="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,L="object"==typeof self&&self&&self.Object===Object&&self,k=y||L||Function("return this")(),w=Object.prototype.toString,_=Math.max,E=Math.min,S=function(){return k.Date.now()};function j(e,t,n){var o,i,s,r,a,l,c=0,d=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=o,s=i;return o=i=void 0,c=t,r=e.apply(s,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-c>=s}function v(){var e=S();if(f(e))return b(e);a=setTimeout(v,function(e){var n=t-(e-l);return p?E(n,s-(e-c)):n}(e))}function b(e){return a=void 0,g&&o?m(e):(o=i=void 0,r)}function h(){var e=S(),n=f(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(v,t),d?m(e):r}(l);if(p)return a=setTimeout(v,t),m(l)}return void 0===a&&(a=setTimeout(v,t)),r}return t=x(t)||0,H(n)&&(d=!!n.leading,s=(p="maxWait"in n)?_(x(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},h.flush=function(){return void 0===a?r:b(S())},h}function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&w.call(e)==g}(e))return p;if(H(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=H(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=v.test(e);return n||b.test(e)?h(e.slice(2),n?2:8):f.test(e)?p:+e}d=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return H(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),j(e,t,{leading:o,maxWait:t,trailing:i})},e(l).Loading.init({className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"var(--all-categories-active)",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"}),e(l).Loading.pulse();const $="https://books-backend.p.goit.global/books/",T=document.querySelector(".js-categories-list"),q=document.querySelector(".js-all-categories"),N=document.querySelector(".js-books-wrapper"),O=document.querySelector(".js-books-title"),C=document.querySelector(".js-scroll-up"),R=document.querySelector(".js-popUp"),M=document.querySelector(".js-backdrop-pop"),U=document.querySelector(".user-name"),J=document.querySelector("[data-modal]");T.addEventListener("click",(function(e){if("LI"!=e.target.nodeName)return;const t=e.target.textContent.trim();Y(e.target),"All categories"===t?G():Q(t)})),N.addEventListener("click",(function(t){if("IMG"!=t.target.nodeName)return;document.body.style.overflow="hidden";const n=t.target.parentElement;!async function(t){try{const n=await fetch(`${$}${t}`);if(!n.ok)throw new Error(n.statusText);D=await n.json(),function(t){const{author:n,buy_links:o,description:i,book_image:l,title:c,_id:d}=t,u="Currently there is no description! Please come and check later;)",p=o[0].url,g=o[1].url,m=o[2].url;let f=`<button class="close-btn-modal js-btn-close-modal">\n      <svg class="close-btn-modal-icon" width="24" height="24">\n        <use href="${e(s)}#close-icon"></use>\n      </svg>\n    </button>\n    <div class="title-author-discrp">\n      <img\n        class="img-book"\n        src="${l}"\n        alt="poster book"\n      />\n      <div class="wrap-anotations">\n        <h2 class="title-book-pop-up">${c||u}</h2>\n        <p class="author">${n||u}</p>\n        <p class="discrition-book">\n         ${i||u}\n        </p>\n        <ul class="resource-shoping">\n          <li>\n            <a href="${p}" class="icon-wraper" target="_blank">\n              <svg class="amazon-icon">\n                <use href="${e(s)}#amazon-logo"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="${g}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(r)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n          <li>\n            <a href="${m}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(a)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="wraper">\n      <button class="btn-add-shop-list js-add" type="button">\n        add to shopping\n      </button>\n\n      <div class="wraper-remove js-wraper-remove pop-up-is-hidden">\n      <button class="btn-add-shop-list btn-remove js-remove  " type="button">\n        remove from the shopping list\n      </button>\n\n      <p class="msg-add-shoplist js-remove " >\n        Сongratulations! You have added the book to the shopping list. To\n        delete, press the button “Remove from the shopping list”.\n      </p>\n      </div>\n      <div class="wrap-btn-sign-up pop-up-is-hidden">\n       <button class=" btn-add-shop-list  " type="button">\n        Sign up\n      </button>\n      </div> \n      </div>`;R.innerHTML=f,M.classList.remove("pop-up-is-hidden"),M.addEventListener("click",ne),I=document.querySelector(".js-btn-close-modal"),B=document.querySelector(".js-add"),V=document.querySelector(".js-wraper-remove"),I.addEventListener("click",ne,!0,{once:!0}),window.addEventListener("keydown",K,{once:!0}),B.addEventListener("click",ee),V.addEventListener("click",te),P=document.querySelector(".js-add"),z=document.querySelector(".js-remove"),btnSignUp=document.querySelector(".wrap-btn-sign-up"),btnSignUp.addEventListener("click",oe),function(e){const t=localStorage.getItem("book-anotation");JSON.parse(t).forEach((t=>{t._id===e&&(B.classList.add("pop-up-is-hidden"),V.classList.remove("pop-up-is-hidden"))}))}(d),U.outerText.trim()||(B.classList.add("logged-user-hidden"),btnSignUp.classList.remove("pop-up-is-hidden"),z.classList.add("logged-user-hidden"))}(D)}catch(e){}}(n.querySelector(".book-id").textContent)})),N.addEventListener("click",(function(e){if("button"!=e.target.type)return;let t=e.target.parentElement.querySelector(".home__books-all-category").textContent;Q(t);const n=[...T.children];Y(n.find((e=>e.textContent===t)))})),document.addEventListener("scroll",d((function(){window.scrollY>900?(C.classList.remove("js-scroll-up-hidden"),C.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))):C.classList.add("js-scroll-up-hidden")}),300));let A=q;const F="Coming soon";let I=null,B=null,V=null,P=null,z=null,D={},W=JSON.parse(localStorage.getItem("book-anotation"))||[];async function G(){e(l).Loading.pulse();try{N.innerHTML="",O.innerHTML=X("Best sellers book");const t=await fetch(`${$}top-books `);if(!t.ok)throw new Error(t.statusText);const n=await t.json();N.innerHTML=n.map((e=>`<li class="home__books-all-wrapper">\n      <p class="home__books-all-category">${e.list_name}</p>\n      <ul class="home__books-all-items">\n        ${Z(e.books)}\n      </ul>\n      <button class="home__books-all-btn" type="button">\n        See more\n      </button>\n    </li>`)).join(""),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function Z(t){return t.map((({book_image:t,title:n,author:o,_id:i})=>`<li class="home__books-item">\n      <img class="home__books-img" src="${t||e(c)}" alt="${n||F}" />\n      <h3 class="home__books-title">${n||F}</h3>\n      <p class="home__books-author">${o||F}</p>\n      <p style="display:none" class="book-id">${i}</p>\n    </li>`)).join("")}async function Q(t){e(l).Loading.pulse(),O.innerHTML=X(t),N.innerHTML="";try{const n=await fetch(`${$}category?category=${t}`);if(!n.ok)throw new Error(n.statusText);const o=await n.json();N.innerHTML=Z(o),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function Y(e){A.classList.remove("home__categories-item-active"),e.classList.add("home__categories-item-active"),A=e}function X(e){if(!e)return;const t=e.split(" "),n=t[t.length-1];return e.replace(n,`<span class="js-active-word">${n}</span>`)}function K(e){"Escape"==e.key&&(document.body.style.overflow="",M.classList.add("pop-up-is-hidden"),B.removeEventListener("click",ee),V.removeEventListener("click",te),P.removeEventListener("click",ee),z.removeEventListener("click",te))}function ee(e){B.classList.add("pop-up-is-hidden"),V.classList.remove("pop-up-is-hidden"),W.push(D),localStorage.setItem("book-anotation",JSON.stringify(W))}function te(e){V.classList.add("pop-up-is-hidden"),B.classList.remove("pop-up-is-hidden"),JSON.parse(localStorage.getItem("book-anotation")).forEach(((e,t)=>{e._id===D._id&&(W.splice(t,1),localStorage.setItem("book-anotation",JSON.stringify(W)))}))}function ne(e){"BUTTON"!=e.target.nodeName&&!e.target.classList.contains("backdrop-pop")||e.target.classList.contains("btn-add-shop-list")||(document.body.style.overflow="",M.classList.add("pop-up-is-hidden"),window.removeEventListener("keydown",ne,!0),I.removeEventListener("click",ne),M.removeEventListener("click",ne),B.removeEventListener("click",ee),V.removeEventListener("click",te))}function oe(e){M.classList.add("pop-up-is-hidden"),J.classList.remove("is-hidden"),btnSignUp.removeEventListener("click",oe)}!async function(){try{const e=await fetch(`${$}category-list`);if(!e.ok)throw new Error(e.statusText);const t=await e.json();T.insertAdjacentHTML("beforeend",t.map((e=>`<li class="home__categories-item">${e.list_name}</li>`)).join(""))}catch(e){T.innerHTML='<h2 class="home__books-all-category">Sorry, but there is no categories</h2>',console.log(e)}}(),G(),i("dgrxZ"),i("4XPGW"),i("i8Q71"),i("gfpbd"),i("5xtVg")}();
//# sourceMappingURL=index.f4a280a2.js.map
