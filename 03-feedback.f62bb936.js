var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=a.test(e);return f||l.test(e)?s(e.slice(2),f?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,l,s,f,u=0,c=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,i=r;return o=r=void 0,u=t,l=e.apply(i,n)}function j(e){var n=e-f,i=e-u;return void 0===f||n>=t||n<0||d&&i>=a}function O(){var e,n,i,o=v();if(j(o))return T(o);s=setTimeout(O,(e=o-f,n=o-u,i=t-e,d?g(i,a-n):i))}function T(e){return(s=void 0,b&&o)?h(e):(o=r=void 0,l)}function S(){var e,n=v(),i=j(n);if(o=arguments,r=this,f=n,i){if(void 0===s)return u=e=f,s=setTimeout(O,t),c?h(e):l;if(d)return s=setTimeout(O,t),h(f)}return void 0===s&&(s=setTimeout(O,t)),l}return t=y(t)||0,p(i)&&(c=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=f=r=s=void 0},S.flush=function(){return void 0===s?l:T(v())},S}(e,t,{leading:o,maxWait:t,trailing:r})};const b="feedback-form-state",h=document.querySelector(".feedback-form"),j={emailAddress:"",message:"",clear(){this.email="",this.message=""}};function O(e,t){h.email.value=e,h.message.value=t}O(j.emailAddress,j.message),function(e,t){try{let n=localStorage.getItem(e),i=null===n?void 0:JSON.parse(n);t.emailAddress=i.emailAddress,t.message=i.message}catch(e){console.log(e.name),console.log(e.message)}}(b,j),h.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){b.emailAddress=h.email.value,b.message=h.message.value,function(e){try{localStorage.setItem(b,JSON.stringify(e))}catch(e){console.log(e.name),console.log(e.message)}}(b)},1e3)),h.addEventListener("submit",function(e){e.preventDefault(),console.log(j),localStorage.removeItem(b),j.clear(),O(" "," ")});
//# sourceMappingURL=03-feedback.f62bb936.js.map
