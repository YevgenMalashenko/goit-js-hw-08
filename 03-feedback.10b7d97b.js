!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,c=f||m||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var i,r,a,u,l,f,m=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function E(t){var n=i,o=r;return i=r=void 0,m=t,u=e.apply(o,n)}function S(e){return m=e,l=setTimeout(T,t),c?E(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-m>=a}function T(){var e=g();if(j(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-f);return s?v(n,a-(e-m)):n}(e))}function h(e){return l=void 0,p&&i?E(e):(i=r=void 0,u)}function w(){var e=g(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return S(f);if(s)return l=setTimeout(T,t),E(f)}return void 0===l&&(l=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(c=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==l&&clearTimeout(l),m=0,i=f=r=l=void 0},w.flush=function(){return void 0===l?u:h(g())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const E={formElement:document.querySelector(".feedback-form"),emailElement:document.querySelector("[name = email]"),messageElement:document.querySelector("[name = message]"),submitButtonElement:document.querySelector("[type = submit]")};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(E.emailElement.value=t.email,E.messageElement.value=t.message)}(),E.formElement.addEventListener("submit",(function(e){e.preventDefault(),S[E.emailElement.name]=E.emailElement.value,S[E.messageElement.name]=E.messageElement.value,console.log(S),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),E.formElement.addEventListener("input",e(t)((function(e){S[E.emailElement.name]=E.emailElement.value,S[E.messageElement.name]=E.messageElement.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));const S={}}();
//# sourceMappingURL=03-feedback.10b7d97b.js.map
