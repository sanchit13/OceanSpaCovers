!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/dist",t(t.s=3)}([function(n,t,e){n.exports=e.p+"/images/hero-image.jpeg"},function(n,t){function e(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var a=o(r);return[e].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([a]).join("\n")}return[e].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var o=e(t,n);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<n.length;r++){var i=n[r];"number"==typeof i[0]&&o[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),t.push(i))}},t}},function(n,t,e){function o(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=u[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(m(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(m(o.parts[a],t));u[o.id]={id:o.id,refs:1,parts:i}}}}function r(n,t){for(var e=[],o={},r=0;r<n.length;r++){var a=n[r],i=t.base?a[0]+t.base:a[0],s=a[1],l=a[2],d=a[3],m={css:s,media:l,sourceMap:d};o[i]?o[i].parts.push(m):e.push(o[i]={id:i,parts:[m]})}return e}function a(n,t){var e=h(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),w.push(t);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function i(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=w.indexOf(n);t>=0&&w.splice(t,1)}function s(n){var t=document.createElement("style");return n.attrs.type="text/css",d(t,n.attrs),a(n,t),t}function l(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",d(t,n.attrs),a(n,t),t}function d(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function m(n,t){var e,o,r,a;if(t.transform&&n.css){if(!(a=t.transform(n.css)))return function(){};n.css=a}if(t.singleton){var d=b++;e=x||(x=s(t)),o=c.bind(null,e,d,!1),r=c.bind(null,e,d,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=l(t),o=f.bind(null,e,t),r=function(){i(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(t),o=p.bind(null,e),r=function(){i(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}function c(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=v(t,r);else{var a=document.createTextNode(r),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function p(n,t){var e=t.css,o=t.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function f(n,t,e){var o=e.css,r=e.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var u={},g=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(n){var t={};return function(e){return void 0===t[e]&&(t[e]=n.call(this,e)),t[e]}}(function(n){return document.querySelector(n)}),x=null,b=0,w=[],y=e(6);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=r(n,t);return o(e,t),function(n){for(var a=[],i=0;i<e.length;i++){var s=e[i],l=u[s.id];l.refs--,a.push(l)}if(n){o(r(n,t),t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var v=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t,e){e(4),e(7),e(8)},function(n,t,e){var o=e(5);"string"==typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;e(2)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(1)(void 0),t.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return n;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(n,t){function e(){var n=90;$(".hamburgerContainer").click(function(){$(".displayHook").is(":visible")?($(".hamburgerContainer").rotate(n),$(".displayHook").fadeOut(),n+=90):($(".hamburgerContainer").rotate(n),$(".displayHook").fadeIn(),n+=90)})}jQuery.fn.rotate=function(n){return $(this).css({"-webkit-transform":"rotate("+n+"deg)","-moz-transform":"rotate("+n+"deg)","-ms-transform":"rotate("+n+"deg)",transform:"rotate("+n+"deg)"}),$(this)},setTimeout(e,0),$(window).resize(function(){$(document).width()>550&&$(".displayHook").show()})},function(n,t,e){var o=e(9);"string"==typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;e(2)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(1)(void 0),t.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,700);",""]),t.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Exo+2:400,700);",""]),t.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Raleway:200,300,400);",""]),t.push([n.i,'body {\n  background-color: #E6E6E6; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\nnav {\n  background-color: rgba(35, 35, 35, 0.9); }\n\n.navigationBox {\n  max-width: 75%;\n  min-height: 50px;\n  align-items: center;\n  list-style-type: none;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  justify-content: space-around; }\n\n.navigationBox a {\n  text-decoration: none;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 400;\n  letter-spacing: .2em;\n  color: #E6E6E6;\n  font-size: 1em;\n  display: block;\n  padding: 10px; }\n\n.displayHook {\n  transition: all .4s linear; }\n\n.navigationBox a:hover {\n  color: #E0A337; }\n\n@media all and (max-width: 1150px) {\n  .navigationBox {\n    flex-wrap: wrap;\n    justify-content: none; }\n  .navigationBox a {\n    text-align: center; }\n  .navigationBox li {\n    flex-basis: 1 1 50%;\n    width: 33.33%; } }\n\n.hamburgerContainer {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n  width: 30px;\n  transition: all .3s linear;\n  visibility: hidden; }\n\n.activeLink {\n  color: #54aede !important; }\n\n@media all and (max-width: 750px) {\n  .navigationBox {\n    flex-wrap: wrap;\n    justify-content: none; }\n  .navigationBox a {\n    font-size: .8em;\n    text-align: center;\n    display: block; } }\n\n@media all and (max-width: 549px) {\n  .navigationBox {\n    flex-wrap: wrap;\n    justify-content: none;\n    max-width: 95%;\n    flex-direction: column;\n    padding-top: .5em; }\n  .navigationBox a {\n    display: none; }\n  .hamburgerContainer {\n    visibility: visible;\n    display: inline-block; }\n  .navigationBox li {\n    flex-basis: 1 1 50%;\n    width: 100%;\n    text-align: left;\n    padding-bottom: .5em; } }\n\nheader {\n  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.9) 95%), url('+e(0)+");\n  background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.9) 95%), url("+e(0)+");\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.9) 95%), url("+e(0)+");\n  background-image: linear-gradient(rgba(26, 26, 26, 0.56) 0%, rgba(11, 11, 11, 0.56) 95%), url("+e(0)+');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 600px; }\n\n.headerImage {\n  display: block;\n  width: 25.725694444%;\n  margin: 6% auto;\n  margin-bottom: 10%; }\n\n.textOverlay {\n  text-align: center;\n  width: 75%;\n  color: #FFF;\n  margin: 0 auto 3% auto;\n  font-size: 2.75em;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 400; }\n\n.productsButton {\n  display: block;\n  max-width: 200px;\n  margin: 0 auto;\n  background-color: #E0A337;\n  text-align: center;\n  font-family: "Montserrat", sans-serif;\n  font-size: 1em;\n  color: #FFF;\n  padding: 15px 5px;\n  text-decoration: none;\n  transition: all 0.4s linear; }\n\n.productsButton:hover {\n  color: #FFF;\n  background-color: #3A7599; }\n\n@media all and (max-width: 1100px) {\n  .headerImage {\n    width: 35%;\n    margin: 10% auto; }\n  .textOverlay {\n    font-size: 2.1em; } }\n\n@media all and (max-width: 800px) {\n  .textOverlay {\n    font-size: 1.5em; }\n  .headerImage {\n    width: 50%; } }\n\n@media all and (max-width: 600px) {\n  .headerImage {\n    display: block;\n    width: 80%;\n    margin: 8em auto;\n    margin-bottom: 2em; }\n  header {\n    height: 650px; } }\n\n.productsPitch {\n  width: 75%;\n  padding: 10px;\n  margin: 0 auto; }\n\n.productsPitch article {\n  display: flex;\n  align-items: center;\n  margin: 6% auto; }\n\n.productImage {\n  display: block;\n  width: 20%;\n  margin: 0 5%; }\n\n.productText {\n  font-family: "Exo 2", sans-serif;\n  font-size: 1.25em;\n  width: 80%;\n  color: #1A1A1A; }\n\nhr {\n  width: 100%; }\n\n.flexOrder {\n  order: 2; }\n\n@media all and (max-width: 1250px) {\n  .productImage {\n    width: 30%; } }\n\n@media all and (max-width: 1000px) {\n  .productsPitch article {\n    flex-direction: column; }\n  .productText {\n    width: 80%;\n    margin-bottom: 2em; }\n  .productImage {\n    margin: 5% auto; }\n  .flexOrder {\n    order: 0; } }\n\n@media all and (max-width: 900px) {\n  .productText {\n    font-size: 1em; } }\n\n@media all and (max-width: 550px) {\n  .productImage {\n    width: 60%;\n    margin: 10% auto; } }\n\n.aboutUs {\n  background-color: #114059;\n  padding: 2em 0; }\n\n.aboutUsHeader {\n  margin-top: 3%;\n  margin-bottom: 5%;\n  margin-left: 12%;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  color: #FFF;\n  font-size: 2.5em; }\n\n.aboutUsText {\n  font-family: "Exo 2", sans-serif;\n  font-size: 1.25em;\n  color: #E6E6E6;\n  width: 70%;\n  margin: 0 auto;\n  margin-bottom: 5%; }\n\n@media all and (max-width: 900px) {\n  .aboutUsText {\n    font-size: 1em; } }\n\n.formSection {\n  background-color: #B8862E;\n  min-height: 40em; }\n\n.contactUsHeader {\n  padding-top: 5%;\n  margin-left: 12%;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  color: #FFF;\n  font-size: 2.5em; }\n\n.contactForm {\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 5%;\n  font-family: "Raleway", sans-serif;\n  color: #FFF;\n  min-height: 40em; }\n\n.formRow {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-bottom: 2em; }\n\n.formRow input[type=\'text\'],\n.formRow input[type=\'email\'] {\n  background-color: #FFFFFF;\n  border: 1px solid #D6D9DC;\n  width: 100%;\n  padding: 10px;\n  font-size: .75em; }\n\n.formRow input[type=\'text\']::-webkit-input-placeholder,\n.formRow input[type=\'email\']::-webkit-input-placeholder,\n.formRow textarea::-webkit-input-placeholder {\n  color: #A9A9A9; }\n\n.formRow label {\n  margin-bottom: 10px; }\n\n.formRow textarea {\n  resize: none;\n  background-color: #FFFFFF;\n  border: 1px solid #D6D9DC;\n  width: 100%;\n  padding: 10px;\n  font-size: .75em;\n  height: 15em; }\n\n.submitButton {\n  width: 23%;\n  margin: 0 auto;\n  padding: 10px;\n  background-color: #FFF;\n  color: #B8862E;\n  font-family: "Montserrat", sans-serif;\n  border: none;\n  transition: all 0.4s linear; }\n\n.submitButton:hover {\n  color: #114059; }\n\n@media all and (max-width: 900px) {\n  .contactForm {\n    width: 60%;\n    margin-top: 7%; }\n  .submitButton {\n    width: 40%; } }\n\n@media all and (max-width: 450px) {\n  .submitButton {\n    width: 60%; } }\n\n.bodyWrapper {\n  background-color: #B8862E; }\n\n.warrantySectionWrapper {\n  display: block;\n  -webkit-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  -moz-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  width: 80%;\n  margin: 5% auto;\n  padding: 0 5em;\n  background-color: #E6E6E6; }\n\n.warrantySectionWrapper h1 {\n  text-align: center;\n  padding-top: 1em;\n  margin-bottom: 1em;\n  font-family: "Montserrat", sans-serif;\n  font-size: 2em;\n  color: #B8862E;\n  font-weight: 700; }\n\n.warrantySectionWrapper h3 {\n  margin-bottom: 1em;\n  color: #114059;\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1.5em; }\n\n.warrantySection p {\n  margin-bottom: 2em;\n  text-align: left;\n  font-family: "Exo 2", sans-serif; }\n\n.conclusionWarranty {\n  text-align: center;\n  width: 60%;\n  margin: 0 auto;\n  padding-top: 1.5em;\n  padding-bottom: 5em;\n  font-size: 1.25em; }\n\n@media all and (max-width: 580px) {\n  .warrantySectionWrapper {\n    padding: 0 2em;\n    margin-top: 3em; }\n  .warrantySectionWrapper h1 {\n    font-size: 1.6em; }\n  .warrantySectionWrapper h3 {\n    font-size: 1.2em; }\n  .conclusionWarranty {\n    width: 80%; } }\n\n.orderWrapper {\n  background-color: #114059; }\n\n.orderSectionWrapper {\n  display: block;\n  -webkit-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  -moz-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  width: 80%;\n  margin: 5% auto;\n  padding: 0 5em;\n  background-color: #E6E6E6; }\n\n.orderSectionWrapper h1 {\n  text-align: center;\n  padding-top: 1em;\n  margin-bottom: 1em;\n  font-family: "Montserrat", sans-serif;\n  font-size: 2em;\n  color: #114059;\n  font-weight: 700; }\n\n.hotTubShapesImage {\n  display: block;\n  width: 80%;\n  margin: 5% auto; }\n\n.quoteForm {\n  width: 70%;\n  margin: 0 auto;\n  margin-top: 5%;\n  font-family: "Raleway", sans-serif;\n  color: #1A1A1A;\n  min-height: 40em; }\n\n.quoteForm select {\n  height: 35px; }\n\n.locationHeader {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  margin-left: 12%;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  color: #5A5A5A;\n  font-size: 2.5em; }\n\n.storeInformation {\n  display: flex;\n  width: 75%;\n  margin: 0 auto;\n  margin-bottom: 5em;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.storeInformationList {\n  width: 40%;\n  margin: 0 auto;\n  color: #404040; }\n\n.storeInformationList p {\n  margin-bottom: 1em; }\n\n.title {\n  font-family: "Exo 2", sans-serif;\n  font-weight: 700;\n  margin-right: .2em; }\n\n.mapLocation {\n  width: 60%; }\n\n.mapLocation iframe {\n  width: 100%;\n  margin: 0 auto;\n  height: 300px; }\n\n@media all and (max-width: 950px) {\n  .mapLocation {\n    width: 50%; } }\n\n@media all and (max-width: 820px) {\n  .storeInformation {\n    flex-direction: column; }\n  .mapLocation {\n    width: 80%;\n    margin: 2em auto; }\n  .storeInformationList {\n    order: 2;\n    width: 80%; } }\n\n@media all and (max-width: 500px) {\n  .storeInformation {\n    flex-direction: column; }\n  .mapLocation {\n    width: 100%;\n    margin: 2em auto; }\n  .storeInformationList {\n    order: 2;\n    width: 100%; } }\n\n.colorSectionWrapper {\n  display: block;\n  -webkit-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  -moz-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.86);\n  width: 80%;\n  margin: 5% auto;\n  padding: 0 5em;\n  background-color: #E6E6E6; }\n\n.colorSectionWrapper h1 {\n  text-align: center;\n  padding-top: 1em;\n  margin-bottom: 1em;\n  font-family: "Montserrat", sans-serif;\n  font-size: 2em;\n  color: #B8862E;\n  font-weight: 700; }\n\n.colorsFlexContainer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: center; }\n\n.colorFlexItem {\n  background-color: #d9d9d9;\n  width: 20%;\n  margin: 2em 1%;\n  padding: 1em; }\n  .colorFlexItem img {\n    width: 100%; }\n  .colorFlexItem h3 {\n    text-align: center;\n    margin-top: 1em;\n    font-size: 1.2em;\n    font-family: "Raleway", sans-serif;\n    color: #1A1A1A; }\n\n.colorFlexItemEmpty {\n  width: 20%;\n  margin: 2em 1%;\n  padding: 1em; }\n\n@media all and (max-width: 950px) {\n  .colorSectionWrapper {\n    padding: 0 3em; }\n  .colorFlexItem {\n    width: 30%; } }\n\n@media all and (max-width: 950px) {\n  .colorFlexItem {\n    width: 30%;\n    margin: 2em 1.5%; } }\n\n@media all and (max-width: 700px) {\n  .colorFlexItem {\n    width: 45%;\n    margin: 2em 2%; } }\n\n@media all and (max-width: 450px) {\n  .colorFlexItem {\n    width: 100%;\n    margin: 2em auto; } }\n\n.footerSection {\n  display: block;\n  background-color: #434141; }\n\n.footerSection p {\n  font-family: "Raleway", sans-serif;\n  color: #F9F9F9;\n  text-align: center;\n  width: 80%;\n  font-weight: 200;\n  margin: 0 auto;\n  padding: 20px;\n  font-size: .8em;\n  letter-spacing: 0.4em; }\n\n@media all and (max-width: 800px) {\n  .footerSection p {\n    font-size: .6em;\n    line-height: 2em; } }\n',""])}]);