/*! For license information please see 5.8f429d03.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{20:function(t,e,r){"use strict";function n(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,u,"next",t)}function u(t){n(c,o,a,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},21:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return a}))},22:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};s(v,c,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(L([])));m&&m!==e&&r.call(m,c)&&(v=m);var j=y.prototype=p.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(a,c,i,u){var s=l(t[a],t,c);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(h).then((function(t){f.value=t,i(f)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,s(j,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},g(O.prototype),s(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new O(f(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(j),s(j,u,"Generator"),s(j,c,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,"a",(function(){return o}))},23:function(t,e,r){"use strict";var n=r(21),o=r(22),a=r(20),c=r(4),i=r(0);function u(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(i.useReducer)(u,{status:e?"pending":null,data:null,error:null}),s=Object(c.a)(r,2),f=s[0],l=s[1],h=Object(i.useCallback)(function(){var e=Object(a.a)(Object(o.a)().mark((function e(r){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"SEND"}),e.prev=1,e.next=4,t(r);case 4:n=e.sent,l({type:"SUCCESS",responseData:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.a)({sendRequest:h},f)}},24:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return y}));var n=r(22),o=r(21),a=r(20),c="https://react-20-1-e65e9-default-rtdb.firebaseio.com";function i(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(Object(n.a)().mark((function t(){var e,r,a,i,u;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(r=t.sent,e.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quotes.");case 8:for(i in a=[],r)u=Object(o.a)({id:i},r[i]),a.push(u);return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(Object(n.a)().mark((function t(e){var r,a,i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,r.ok){t.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return i=Object(o.a)({id:e},a),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,r.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return(v=Object(a.a)(Object(n.a)().mark((function t(e){var r,a,i,u,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"/comments/").concat(e,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,r.ok){t.next=8;break}throw new Error(a.message||"Could not get comments.");case 8:for(u in i=[],a)s=Object(o.a)({id:u},a[u]),i.push(s);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},25:function(t,e,r){t.exports={card:"Card_card__1EPXQ"}},26:function(t,e,r){t.exports={form:"QuoteForm_form__1s9-v",loading:"QuoteForm_loading__3PaOg",control:"QuoteForm_control__1ykiX",actions:"QuoteForm_actions__32sqp"}},38:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(0),a=r(25),c=r.n(a),i=r(1),u=function(t){return Object(i.jsx)("div",{className:c.a.card,children:t.children})},s=r(9),f=r(26),l=r.n(f),h=function(t){var e=Object(o.useRef)(),r=Object(o.useRef)();return Object(i.jsx)(u,{children:Object(i.jsxs)("form",{className:l.a.form,onSubmit:function(n){n.preventDefault();var o=e.current.value,a=r.current.value;t.onAddQuote({author:o,text:a})},children:[t.isLoading&&Object(i.jsx)("div",{className:l.a.loading,children:Object(i.jsx)(s.a,{})}),Object(i.jsxs)("div",{className:l.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:e})]}),Object(i.jsxs)("div",{className:l.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:r})]}),Object(i.jsx)("div",{className:l.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Quote"})})]})})},p=r(23),d=r(24);e.default=function(){var t=Object(p.a)(d.b),e=t.sendRequest,r=t.status,a=Object(n.h)();Object(o.useEffect)((function(){"completed"===r&&a("/quotes")}),[r,a]);return Object(i.jsx)(h,{isLoading:"pending"===r,onAddQuote:function(t){e(t)}})}}}]);
//# sourceMappingURL=5.8f429d03.chunk.js.map