function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=s.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},s.parcelRequired7c6=o),o.register("kyEFX",(function(t,s){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)o[t[s]]=e[t[s]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"7nZc1":"shopping_list.c4efad38.js","lp5u4":"sprite.8ca286f5.svg","iWQIE":"apple-read-logo.652b354e.png","flqNV":"amazon-logo@2x.b69db657.png","fz8Fl":"book-shop-logo.1d091ebd.png","2CP9g":"book-shop-logo@2x.1f77f032.png","foobX":"shopping-list-empty.9d82d098.png","5mJuW":"shopping-list-empty@2x.80ece8cf.png","ayx2C":"shopping_list.2120bd25.js"}'));var l={};l=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var r={};r=new URL(o("kyEFX").resolve("iWQIE"),import.meta.url).toString();var c={};c=new URL(o("kyEFX").resolve("flqNV"),import.meta.url).toString();var a={};a=new URL(o("kyEFX").resolve("fz8Fl"),import.meta.url).toString();var p={};p=new URL(o("kyEFX").resolve("2CP9g"),import.meta.url).toString();var u={};u=new URL(o("kyEFX").resolve("foobX"),import.meta.url).toString();var d={};d=new URL(o("kyEFX").resolve("5mJuW"),import.meta.url).toString(),o("6WnMa"),o("lJVr2"),o("bUb57"),o("eMg8c"),o("bTcpz");const m=document.querySelector(".sl-list");document.querySelector(".sl-link").classList.add("active"),document.querySelector(".home-link").classList.remove("active"),m.addEventListener("click",(function(e){if(console.log(e.target.classList.contains("sl-list-item-icon-button"),e.target.classList.contains("sl-list-delete-icon")),"BUTTON"!=e.target.nodeName)return;const t=e.target.value,s=e.target.closest(".sl-list-item"),n=g.filter((e=>e._id===t)).map((e=>{g.splice(g.indexOf(e),1)}));console.log(n),localStorage.setItem("books",JSON.stringify(n)),f(),console.log(t,s)}));const g=JSON.parse(localStorage.getItem("books"));function f(){if(g.length&&g[0]){const e=g.map((({title:e,description:s,book_image:n,list_name:i,author:o,_id:u})=>`<li class="sl-list-item">\n                    <div class="sl-list-item-info-book">\n                        <img src="${n}" class="ls-list-item-img" alt="">\n                        <div class="sl-list-item-remove-items-container">\n                            <div class="sl-list-text-wrapper">\n                                <h2 class="sl-list-item-title">${e}</h2>\n                                <h3 class="sl-list-item-subtitle">${i}</h3>\n                                <button value="${u}" class="sl-list-item-icon-button">\n                                    <svg class="sl-list-item-icon sl-list-delete-icon">\n                                        <use class="sl-list-delete-icon" href="${t(l)}#trash-icon"></use>\n                                    </svg>\n                                </button>\n                                <p class="sl-list-item-description">${s}</p>\n                            </div>\n                            <ul class="sl-list-item-description-container">\n                                <li class="sl-list-item-description-list-item">\n                                    <h4 class="sl-list-item-container-anthor">${o}</h4>\n                                    <div class="sl-list-item-container-shops">\n                                        <svg class="sl-list-item-container-shops-amazon-icon">\n                                            <use href="${t(l)}#amazon-logo"></use>\n                                        </svg>\n                                        <picture>\n                                            <source srcset="${t(r)} 1x, ${t(c)} 2x">\n                                            <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${t(r)}" alt="apple-read-store">\n                                        </picture>\n                                        <picture>\n                                            <source srcset="${t(a)} 1x, ${t(p)} 2x">\n                                            <img class="sl-list-item-container-shops-icon sl-list-item-container-shop-responsive" src="${t(a)}" alt="book-store">\n                                        </picture>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>`)).join("");m.innerHTML=e}else console.log("asdasdasdas"),m.innerHTML=`\n        <div class="sl-empty-container">\n            <h1 class="sl-empty-title">This page is empty, add some books and proceed to order.</h1>\n            <picture>\n                <source srcset="${t(u)} 1x, ${t(d)} 2x">\n                <img class="sl-empty-img" src="${t(u)}" alt="book-store">\n            </picture>\n        </div>`}f();
//# sourceMappingURL=shopping_list.c4efad38.js.map