import{e as w,dq as S,dr as C,x as E,r as T,k as h,m as K,i as L}from"./index.2de5bd94.js";var v=(e,t)=>e===t||e.length===t.length&&e.every((n,u)=>n===t[u]),R=w;function c(e,t,n,u){return e.addEventListener(t,n,u),R(e.removeEventListener.bind(e,t,n,u))}function d(e,t=C()){let n=0,u,r;return()=>(n++,w(()=>{n--,queueMicrotask(()=>{!n&&r&&(r(),r=u=void 0)})}),r||S(i=>u=e(r=i),t),u)}function g(e,t){for(let n=e.length-1;n>=0;n--){const u=t.slice(0,n+1);if(!v(e[n],u))return!1}return!0}var p=d(()=>{const[e,t]=K(null);return c(window,"keydown",n=>{t(n),setTimeout(()=>t(null))}),e}),m=d(()=>{const[e,t]=K([]),n=()=>t([]),u=p();return c(window,"keydown",r=>{if(r.repeat||typeof r.key!="string")return;const i=r.key.toUpperCase(),s=e();if(s.includes(i))return;const a=[...s,i];s.length===0&&i!=="ALT"&&i!=="CONTROL"&&i!=="META"&&i!=="SHIFT"&&(r.shiftKey&&a.unshift("SHIFT"),r.altKey&&a.unshift("ALT"),r.ctrlKey&&a.unshift("CONTROL"),r.metaKey&&a.unshift("META")),t(a)}),c(window,"keyup",r=>{if(typeof r.key!="string")return;const i=r.key.toUpperCase();t(s=>s.filter(a=>a!==i))}),c(window,"blur",n),c(window,"contextmenu",r=>{r.defaultPrevented||n()}),e[0]=e,e[1]={event:u},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),O=d(()=>{const e=m();let t=L(e);return h(()=>{const n=e(),u=t;return t=n,u.length===0&&n.length===1?n[0]:null})}),H=d(()=>{const e=m();return h(t=>e().length===0?[]:[...t,e()],[])});function A(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,u=p(),r=O();return h(()=>{var i;return r()===e&&(n&&((i=u())==null||i.preventDefault()),!0)})}function M(e,t,n={}){if(!e.length)return;e=e.map(l=>l.toUpperCase());const{preventDefault:u=!0}=n,r=p(),i=H();let s=!1;const a=l=>{if(!l.length)return s=!1;if(s)return;const o=r();l.length<e.length?g(l,e.slice(0,l.length))?u&&o&&o.preventDefault():s=!0:(s=!0,g(l,e)&&(u&&o&&o.preventDefault(),t(o)))},D=l=>{const o=l.at(-1);if(!o)return;const f=r();if(u&&o.length<e.length){v(o,e.slice(0,e.length-1))&&f&&f.preventDefault();return}if(v(o,e)){const y=l.at(-2);(!y||v(y,e.slice(0,e.length-1)))&&(u&&f&&f.preventDefault(),t(f))}};E(T(i,n.requireReset?a:D))}export{M as a,A as c};
