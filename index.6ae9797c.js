!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.6ae9797c.js","ee16w":"sprite.81314812.svg","eICEL":"apple-read-logo.652b354e.png","2L4yx":"apple-read-logo@2x-1.15632d7d.png","i9pPv":"book-shop-logo.1d091ebd.png","7yZHS":"book-shop-logo@2x.1f77f032.png","2HnSn":"deafult-img.9168e021.jpg","h4tGU":"shopping_list.4fa00e8e.js"}'));var s={};s=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("ee16w");var i={};i=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("eICEL");r("aNJCr").getBundleURL("EVgbq"),r("iE7OH").resolve("2L4yx");var a={};a=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("i9pPv");r("aNJCr").getBundleURL("EVgbq"),r("iE7OH").resolve("7yZHS");var l=r("6JpON"),c={};c=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("2HnSn");var d=r("gfpbd");function u(){const e=document.querySelectorAll(".home__books-all-items"),t=document.documentElement.clientWidth;e.forEach((e=>{const o=Array.from(e.querySelectorAll(".home__books-item"));o.forEach((e=>{e.style.display="none"})),t>=320&&t<767?p(1,e):t>=768&&t<1439?p(3,e):t>=1440&&p(o.length,e)}))}function p(e,t){const o=Array.from(t.querySelectorAll("li"));for(let t=0;t<e;t++)o[t].style.display="flex"}window.addEventListener("resize",u);var g={},m="Expected a function",v=NaN,f="[object Symbol]",b=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,L=/^0o[0-7]+$/i,k=parseInt,E="object"==typeof t&&t&&t.Object===Object&&t,w="object"==typeof self&&self&&self.Object===Object&&self,S=E||w||Function("return this")(),_=Object.prototype.toString,j=Math.max,q=Math.min,H=function(){return S.Date.now()};function x(e,t,o){var n,r,s,i,a,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError(m);function g(t){var o=n,s=r;return n=r=void 0,c=t,i=e.apply(s,o)}function v(e){var o=e-l;return void 0===l||o>=t||o<0||u&&e-c>=s}function f(){var e=H();if(v(e))return b(e);a=setTimeout(f,function(e){var o=t-(e-l);return u?q(o,s-(e-c)):o}(e))}function b(e){return a=void 0,p&&n?g(e):(n=r=void 0,i)}function h(){var e=H(),o=v(e);if(n=arguments,r=this,l=e,o){if(void 0===a)return function(e){return c=e,a=setTimeout(f,t),d?g(e):i}(l);if(u)return a=setTimeout(f,t),g(l)}return void 0===a&&(a=setTimeout(f,t)),i}return t=$(t)||0,T(o)&&(d=!!o.leading,s=(u="maxWait"in o)?j($(o.maxWait)||0,t):s,p="trailing"in o?!!o.trailing:p),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=r=a=void 0},h.flush=function(){return void 0===a?i:b(H())},h}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&_.call(e)==f}(e))return v;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var o=y.test(e);return o||L.test(e)?k(e.slice(2),o?2:8):h.test(e)?v:+e}g=function(e,t,o){var n=!0,r=!0;if("function"!=typeof e)throw new TypeError(m);return T(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),x(e,t,{leading:n,maxWait:t,trailing:r})},e(l).Loading.init({className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"var(--all-categories-active)",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"}),e(l).Loading.pulse();const N="https://books-backend.p.goit.global/books/",O=document.querySelector(".js-categories-list"),A=document.querySelector(".js-all-categories"),C=document.querySelector(".js-books-wrapper"),R=document.querySelector(".js-books-title"),M=document.querySelector(".js-scroll-up"),J=document.querySelector(".js-popUp"),U=document.querySelector(".js-backdrop-pop"),F=(document.querySelector(".user-name"),document.querySelector("[data-modal]")),I=document.querySelector(".js-popUp");O.addEventListener("click",(function(e){if("LI"!=e.target.nodeName)return;const t=e.target.textContent.trim();te(e.target),"All categories"===t?Y():ee(t)})),C.addEventListener("click",(function(t){if("IMG"!=t.target.nodeName)return;document.body.style.overflow="hidden";const o=t.target.parentElement;!async function(t){try{const o=await fetch(`${N}${t}`);if(!o.ok)throw new Error(o.statusText);Q=await o.json(),function(t){const{author:o,buy_links:n,description:r,book_image:l,title:c,_id:u}=t,p="Currently there is no description! Please come and check later;)",g=n[0].url,m=n[1].url,v=n[2].url;let f=`<button aria-label="Close modal" class="close-btn-modal js-btn-close-modal">\n      <svg class="close-btn-modal-icon" width="24" height="24">\n        <use href="${e(s)}#close-icon"></use>\n      </svg>\n    </button>\n    <div class="title-author-discrp">\n      <img\n        class="img-book"\n        src="${l}"\n        alt="poster book"\n      />\n      <div class="wrap-anotations">\n        <h2 class="title-book-pop-up">${c||p}</h2>\n        <p class="author">${o||p}</p>\n        <p class="discrition-book">\n         ${r||p}\n        </p>\n        <ul class="resource-shoping">\n          <li>\n            <a href="${g}" class="icon-wraper" target="_blank">\n              <svg class="amazon-icon">\n                <use href="${e(s)}#amazon-logo"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="${m}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(i)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n          <li>\n            <a href="${v}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(a)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="wraper">\n      <button aria-label="Add to shopping list" class="btn-add-shop-list js-add" type="button">\n        add to shopping\n      </button>\n\n      <div class="wraper-remove js-wraper-remove logged-user-hidden pop-up-is-hidden">\n        <button aria-label="Remove from shopping list" class="btn-add-shop-list btn-remove js-remove" type="button">\n          remove from the shopping list\n        </button>\n\n        <p class="msg-add-shoplist js-remove" >\n          Сongratulations! You have added the book to the shopping list. To\n          delete, press the button “Remove from the shopping list”.\n        </p>\n      </div>\n      <div class="wrap-btn-sign-up logged-user-hidden">\n       <button aria-label="Sign up" class="btn-add-shop-list" type="button">\n        Sign up\n      </button>\n      </div> \n      </div>`;J.innerHTML=f,(0,d.checkAuthState)()?(I.querySelector(".js-add").classList.remove("logged-user-hidden"),I.querySelector(".js-wraper-remove").classList.remove("logged-user-hidden"),I.querySelector(".wrap-btn-sign-up").classList.add("logged-user-hidden")):(I.querySelector(".js-add").classList.add("logged-user-hidden"),I.querySelector(".js-wraper-remove").classList.add("logged-user-hidden"),I.querySelector(".wrap-btn-sign-up").classList.remove("logged-user-hidden"));U.classList.remove("pop-up-is-hidden"),U.addEventListener("click",ie),D=document.querySelector(".js-btn-close-modal"),P=document.querySelector(".js-add"),W=document.querySelector(".js-wraper-remove"),D.addEventListener("click",ie,!0,{once:!0}),window.addEventListener("keydown",ne,{once:!0}),P.addEventListener("click",re),W.addEventListener("click",se),G=document.querySelector(".js-add"),Z=document.querySelector(".js-remove"),z=document.querySelector(".wrap-btn-sign-up"),z.addEventListener("click",ae),function(e){const t=localStorage.getItem("book-anotation");JSON.parse(t).forEach((t=>{t._id===e&&(P.classList.add("logged-user-hidden"),W.classList.remove("logged-user-hidden"))}))}(u)}(Q)}catch(e){}}(o.querySelector(".book-id").textContent)})),C.addEventListener("click",(function(e){if("button"!=e.target.type)return;let t=e.target.parentElement.querySelector(".home__books-all-category").textContent;ee(t);const o=[...O.children];te(o.find((e=>e.textContent===t)))})),document.addEventListener("scroll",g((function(){window.scrollY>900?(M.classList.remove("js-scroll-up-hidden"),M.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))):M.classList.add("js-scroll-up-hidden")}),300));let B=A;const V="Coming soon";let z,D=null,P=null,W=null,G=null,Z=null,Q={},X=JSON.parse(localStorage.getItem("book-anotation"))||[];async function Y(){e(l).Loading.pulse();try{C.innerHTML="",R.innerHTML=oe("Best sellers book");const t=await fetch(`${N}top-books `);if(!t.ok)throw new Error(t.statusText);const o=await t.json();C.innerHTML=o.map((e=>`<li class="home__books-all-wrapper">\n      <p class="home__books-all-category">${e.list_name}</p>\n      <ul class="home__books-all-items">\n        ${K(e.books)}\n      </ul>\n      <button aria-label="See more" class="home__books-all-btn" type="button">\n      See more\n      </button>\n    </li>`)).join(""),u(),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function K(t){return t.map((({book_image:t,title:o,author:n,_id:r})=>`<li class="home__books-item">\n      <img class="home__books-img" src="${t||e(c)}" alt="${o||V}" />\n      <h3 class="home__book-title">${o||V}</h3>\n      <p class="home__books-author">${n||V}</p>\n      <p style="display:none" class="book-id">${r}</p>\n    </li>`)).join("")}async function ee(t){e(l).Loading.pulse(),R.innerHTML=oe(t),C.innerHTML="";try{const o=await fetch(`${N}category?category=${t}`);if(!o.ok)throw new Error(o.statusText);const n=await o.json();C.innerHTML=K(n),e(l).Loading.remove()}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}}function te(e){B.classList.remove("home__categories-item-active"),e.classList.add("home__categories-item-active"),B=e}function oe(e){if(!e)return;const t=e.split(" "),o=t[t.length-1];return e.replace(o,`<span class="js-active-word">${o}</span>`)}function ne(e){"Escape"==e.key&&(document.body.style.overflow="",U.classList.add("pop-up-is-hidden"),P.removeEventListener("click",re),W.removeEventListener("click",se),G.removeEventListener("click",re),Z.removeEventListener("click",se))}function re(e){P.classList.add("logged-user-hidden"),W.classList.remove("logged-user-hidden"),W.classList.remove("pop-up-is-hidden"),X.push(Q),localStorage.setItem("book-anotation",JSON.stringify(X))}function se(e){W.classList.add("logged-user-hidden"),P.classList.remove("logged-user-hidden"),JSON.parse(localStorage.getItem("book-anotation")).forEach(((e,t)=>{e._id===Q._id&&(X.splice(t,1),localStorage.setItem("book-anotation",JSON.stringify(X)))}))}function ie(e){"BUTTON"!=e.target.nodeName&&!e.target.classList.contains("backdrop-pop")||e.target.classList.contains("btn-add-shop-list")||(document.body.style.overflow="",U.classList.add("pop-up-is-hidden"),window.removeEventListener("keydown",ie,!0),D.removeEventListener("click",ie),U.removeEventListener("click",ie),P.removeEventListener("click",re),W.removeEventListener("click",se))}function ae(e){U.classList.add("pop-up-is-hidden"),F.classList.remove("is-hidden"),z.removeEventListener("click",ae)}!async function(){try{const e=await fetch(`${N}category-list`);if(!e.ok)throw new Error(e.statusText);const t=await e.json();O.insertAdjacentHTML("beforeend",t.map((e=>`<li class="home__categories-item">${e.list_name}</li>`)).join(""))}catch(e){O.innerHTML='<h2 class="home__books-all-category">Sorry, but there is no categories</h2>',console.log(e)}}(),Y(),r("dgrxZ"),r("4XPGW"),r("i8Q71"),r("gfpbd");document.querySelectorAll(".footer-btn").forEach((e=>{e.addEventListener("mouseover",(()=>{e.querySelector(".heart-icon").classList.add("moving")})),e.addEventListener("mouseout",(()=>{e.querySelector(".heart-icon").classList.remove("moving")}))}));const le=document.querySelector(".js-modal-open"),ce=document.querySelector(".js-modal-close"),de=document.querySelector(".js-modal-team");function ue(){de.classList.toggle("is-hidden")}function pe(){ue(),ce.removeEventListener("click",pe),document.body.removeAttribute("style")}function ge(e){e.currentTarget===e.target&&(document.body.removeAttribute("style"),ue(),document.removeEventListener("keydown",me),de.removeEventListener("click",ge))}function me(e){"Escape"==e.code&&(ue(),document.removeEventListener("keydown",me),ce.removeEventListener("click",pe),de.removeEventListener("click",ge))}le.addEventListener("click",(function(e){e.preventDefault(),ue(),document.addEventListener("keydown",me),document.body.style.overflow="hidden",ce.addEventListener("click",pe),de.addEventListener("click",ge)})),r("5xtVg"),r("lj6MB"),r("cXTIg")}();
//# sourceMappingURL=index.6ae9797c.js.map
