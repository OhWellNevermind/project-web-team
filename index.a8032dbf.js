!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){n[e]=o},o.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"EVgbq":"index.a8032dbf.js","ee16w":"sprite.8ca286f5.svg","eICEL":"apple-read-logo.652b354e.png","2L4yx":"apple-read-logo@2x-1.15632d7d.png","i9pPv":"book-shop-logo.1d091ebd.png","7yZHS":"book-shop-logo@2x.1f77f032.png","2HnSn":"deafult-img.9168e021.jpg","h4tGU":"shopping_list.01ee604e.js"}'));var a={};a=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("ee16w");var i={};i=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("eICEL");s("aNJCr").getBundleURL("EVgbq"),s("iE7OH").resolve("2L4yx");var r={};r=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("i9pPv");s("aNJCr").getBundleURL("EVgbq"),s("iE7OH").resolve("7yZHS");var l=s("6JpON"),c={};c=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("2HnSn"),e(l).Loading.init({className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"var(--all-categories-active)",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"}),e(l).Loading.pulse();const d="https://books-backend.p.goit.global/books/",p=document.querySelector(".js-categories-list"),u=document.querySelector(".js-all-categories"),g=document.querySelector(".js-books-wrapper"),m=document.querySelector(".js-books-title"),b=document.querySelector(".js-popUp"),h=document.querySelector(".js-backdrop-pop");p.addEventListener("click",(function(e){if("LI"!=e.target.nodeName)return;const o=e.target.textContent.trim();$(e.target),"All categories"===o?H():j(o)})),g.addEventListener("click",(function(o){if("IMG"!=o.target.nodeName)return;document.body.style.overflow="hidden";const t=o.target.parentElement;!async function(o){try{const t=await fetch(`${d}${o}`);if(!t.ok)throw new Error(t.statusText);w=await t.json(),function(o){console.log(o);const{author:t,buy_links:n,description:s,book_image:l,title:c,_id:d}=o,p="Currently there is no description! Please come and check later;)",u=n[0].url,g=n[1].url,m=n[2].url;let v=`<button class="close-btn-modal js-btn-close-modal">\n      <svg class="close-btn-modal-icon" width="24" height="24">\n        <use href="${e(a)}#close-icon"></use>\n      </svg>\n    </button>\n    <div class="title-author-discrp">\n      <img\n        class="img-book"\n        src="${l}"\n        alt="poster book"\n      />\n      <div class="wrap-anotations">\n        <h2 class="title-book-pop-up">${c||p}</h2>\n        <p class="author">${t||p}</p>\n        <p class="discrition-book">\n         ${s||p}\n        </p>\n        <ul class="resource-shoping">\n          <li>\n            <a href="${u}" class="icon-wraper" target="_blank">\n              <svg class="amazon-icon">\n                <use href="${e(a)}#amazon-logo"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="${g}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(i)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n          <li>\n            <a href="${m}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(r)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="wraper">\n      <button class="btn-add-shop-list js-add" type="button">\n        add to shopping\n      </button>\n\n      <div class="wraper-remove js-wraper-remove pop-up-is-hidden">\n      <button class="btn-add-shop-list btn-remove js-remove  " type="button">\n        remove from the shopping list\n      </button>\n\n      <p class="msg-add-shoplist js-remove " >\n        Сongratulations! You have added the book to the shopping list. To\n        delete, press the button “Remove from the shopping list”.\n      </p>\n      </div>\n      </div>\n    </div>`;b.innerHTML=v,h.classList.remove("pop-up-is-hidden"),h.addEventListener("click",O),k=document.querySelector(".js-btn-close-modal"),_=document.querySelector(".js-add"),y=document.querySelector(".js-wraper-remove"),k.addEventListener("click",O,!0,{once:!0}),window.addEventListener("keydown",N,{once:!0}),_.addEventListener("click",q),y.addEventListener("click",C),L=document.querySelector(".js-add"),E=document.querySelector(".js-remove"),function(e){const o=localStorage.getItem("book-anotation");JSON.parse(o).forEach((o=>{o._id===e&&(_.classList.add("pop-up-is-hidden"),y.classList.remove("pop-up-is-hidden"))}))}(d)}(w)}catch(e){}}(t.querySelector(".book-id").textContent)})),g.addEventListener("click",(function(e){if("button"!=e.target.type)return;let o=e.target.parentElement.querySelector(".home__books-all-category").textContent;j(o);const t=[...p.children];$(t.find((e=>e.textContent===o)))}));let v=u;const f="Coming soon";let k=null,_=null,y=null,L=null,E=null,w={},S=JSON.parse(localStorage.getItem("book-anotation"))||[];async function H(){e(l).Loading.pulse();try{g.innerHTML="",m.textContent="Best sellers book";const o=await fetch(`${d}top-books `);if(!o.ok)throw new Error(o.statusText);const t=await o.json();g.innerHTML=t.map((e=>`<li class="home__books-all-wrapper">\n      <p class="home__books-all-category">${e.list_name}</p>\n      <ul class="home__books-all-items">\n        ${x(e.books)}\n      </ul>\n      <button class="home__books-all-btn" type="button">\n        See more\n      </button>\n    </li>`)).join(""),e(l).Loading.remove()}catch(o){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(o)}}function x(o){return o.map((({book_image:o,title:t,author:n,_id:s})=>`<li class="home__books-item">\n      <img class="home__books-img" src="${o||e(c)}" alt="${t||f}" />\n      <h3 class="home__books-title">${t||f}</h3>\n      <p class="home__books-author">${n||f}</p>\n      <p style="display:none" class="book-id">${s}</p>\n    </li>`)).join("")}async function j(o){e(l).Loading.pulse(),m.textContent=o,g.innerHTML="";try{const t=await fetch(`${d}category?category=${o}`);if(!t.ok)throw new Error(t.statusText);const n=await t.json();g.innerHTML=x(n),e(l).Loading.remove()}catch(o){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(o)}}function $(e){v.classList.remove("home__categories-item-active"),e.classList.add("home__categories-item-active"),v=e}function N(e){console.log(e),"Escape"===e.key&&(document.body.style.overflow="",h.classList.add("pop-up-is-hidden"),_.removeEventListener("click",q),y.removeEventListener("click",C),L.removeEventListener("click",q),E.removeEventListener("click",C))}function q(e){_.classList.add("pop-up-is-hidden"),y.classList.remove("pop-up-is-hidden"),console.log(S),S.push(w),console.log(S),localStorage.setItem("book-anotation",JSON.stringify(S))}function C(e){y.classList.add("pop-up-is-hidden"),_.classList.remove("pop-up-is-hidden"),JSON.parse(localStorage.getItem("book-anotation")).forEach(((e,o)=>{e._id===w._id&&(S.splice(o,1),localStorage.setItem("book-anotation",JSON.stringify(S)))}))}function O(e){e.target!==h&&"svg"!==e.target.nodeName&&"use"!==e.target.nodeName||(document.body.style.overflow="",h.classList.add("pop-up-is-hidden"),window.removeEventListener("keydown",O,!0),k.removeEventListener("click",O),h.removeEventListener("click",O),_.removeEventListener("click",q),y.removeEventListener("click",C))}!async function(){try{const e=await fetch(`${d}category-list`);if(!e.ok)throw new Error(e.statusText);const o=await e.json();p.insertAdjacentHTML("beforeend",o.map((e=>`<li class="home__categories-item">${e.list_name}</li>`)).join(""))}catch(e){p.innerHTML='<h2 class="home__books-all-category">Sorry, but there is no categories</h2>',console.log(e)}}(),H(),s("dgrxZ"),s("4XPGW"),s("i8Q71"),s("gfpbd"),s("5xtVg")}();
//# sourceMappingURL=index.a8032dbf.js.map
