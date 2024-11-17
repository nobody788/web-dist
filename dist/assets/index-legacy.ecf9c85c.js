!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}n.wrap=s;var g={};function d(){}function h(){}function m(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(j([])));v&&v!==r&&o.call(v,a)&&(p=v);var b=m.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,n){function r(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,g=s.value;return g&&"object"==t(g)&&o.call(g,"__await")?n.resolve(g.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(g).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=m,l(b,"constructor",m),l(m,"constructor",h),h.displayName=l(m,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,c,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),g}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.8ea8b981.js","./useTitle-legacy.e78941a8.js","./index-legacy.b91c9847.js","./index-legacy.e139f01c.js"],(function(t,o){"use strict";var i,a,c,u,l,s,f,g,d,h,m,p,y,v,b,w,E,L,x,$,S,j,A,O,k,_,C,I,G,P,T,N,R,D,U,Y,z,V,W,B,F,M,X,H,K,Q,Z,q,J,tt,et,nt,rt,ot,it,at,ct,ut,lt,st,ft,gt,dt,ht,mt,pt,yt,vt,bt,wt;return{setters:[function(t){i=t.h,a=t.G,c=t.a4,u=t.k,l=t.ag,s=t.ah,f=t.bO,g=t.a0,d=t.$,h=t.b,m=t.a,p=t.N,y=t.O,v=t.L,b=t.S,w=t.ax,E=t.bP,L=t.m,x=t.bQ,$=t.ae,S=t.a7,j=t.aD,A=t.V,O=t.W,k=t.bR,_=t.bS,C=t.bT,I=t.bU,G=t.bV,P=t.bW,T=t.bX,N=t.bY,R=t.bZ,D=t.aR,U=t.b_,Y=t.b$,z=t.c0,V=t.ay,W=t.c1,B=t.c2,F=t.aK,M=t.aW,X=t.b9,H=t.X,K=t.ak,Q=t.c3,Z=t.bm,q=t.be,J=t.bf,tt=t.bg,et=t.bh,nt=t.bi,rt=t.aC,ot=t.bk,it=t.bl,at=t.ba,ct=t.c4,ut=t.n,lt=t.c5,st=t.c6,ft=t.c7},function(t){gt=t.b,dt=t.a},function(t){ht=t.A,mt=t.f,pt=t.g,yt=t.h,vt=t.i,bt=t.j},function(t){wt=t.S}],execute:function(){var Et=t("G",function(t){return t[t.SINGLE=0]="SINGLE",t[t.SITE=1]="SITE",t[t.STYLE=2]="STYLE",t[t.PREVIEW=3]="PREVIEW",t[t.GLOBAL=4]="GLOBAL",t[t.ARIA2=5]="ARIA2",t[t.INDEX=6]="INDEX",t[t.SSO=7]="SSO",t[t.LDAP=8]="LDAP",t[t.S3=9]="S3",t}(Et||{})),Lt=t("F",function(t){return t[t.PUBLIC=0]="PUBLIC",t[t.PRIVATE=1]="PRIVATE",t[t.READONLY=2]="READONLY",t[t.DEPRECATED=3]="DEPRECATED",t}(Lt||{})),xt=function(t){var e=u((function(){if(!l.is_admin(s())){if(void 0===t.role)return!1;if(t.role===f.GENERAL&&!l.is_general(s()))return!1}return!0}));return i(d,{get fallback(){return i($t,t)},get children(){return[i(g,{get when(){return!e()},children:null}),i(g,{get when(){return t.children},get children(){return i(St,t)}})]}})},$t=function(t){var e=h().pathname,n=m(),r=function(){return e()===t.to};return i(ht,{get cancelBase(){return t.to.startsWith("http")},display:"flex",as:p,get href(){return t.to},onClick:function(e){if(It(),t.refresh){var n;null===(n=e.stopPropagation)||void 0===n||n.call(e);var r=t.to;r.startsWith("http")||(r=y(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:r()?"$info4":v(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return r()?"$info4":""},get color(){return r()?"$info11":""},get external(){return t.external},get children(){return[i(b,{get when(){return t.icon},get children(){return i(w,{mr:"$2",get as(){return t.icon}})}}),i(E,{get children(){return n(t.title)}})]}})},St=function(t){var e=h().pathname,n=r(L(e().includes(t.to)),2),o=n[0],a=n[1],c=m();return i(S,{w:"$full",get children(){return[i(x,{justifyContent:"space-between",onClick:function(){a(!o())},w:"$full",alignItems:"center",get _hover(){return{bgColor:v()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[i($,{get children(){return[i(b,{get when(){return t.icon},get children(){return i(w,{mr:"$2",get as(){return t.icon}})}}),i(E,{get children(){return c(t.title)}})]}}),i(w,{as:mt,get transform(){return o()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),i(b,{get when(){return o()},get children(){return i(S,{pl:"$2",get children(){return i(jt,{get items(){return t.children}})}})}})]}})},jt=function(t){return i(c,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return i(a,{get each(){return t.items},children:function(t){return i(xt,t)}})}})};var At=A((function(){return O((function(){return o.import("./Common-legacy.6ad1624b.js")}),void 0)})),Ot=[{title:"manage.sidemenu.profile",icon:k,to:"/@manage",role:f.GUEST,component:A((function(){return O((function(){return o.import("./Profile-legacy.c4481bab.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:_,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:C,to:"/@manage/settings/site",component:function(){return i(At,{get group(){return Et.SITE}})}},{title:"manage.sidemenu.style",icon:I,to:"/@manage/settings/style",component:function(){return i(At,{get group(){return Et.STYLE}})}},{title:"manage.sidemenu.preview",icon:G,to:"/@manage/settings/preview",component:function(){return i(At,{get group(){return Et.PREVIEW}})}},{title:"manage.sidemenu.global",icon:P,to:"/@manage/settings/global",component:function(){return i(At,{get group(){return Et.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:T,to:"/@manage/settings/sso",component:function(){return i(At,{get group(){return Et.SSO}})}},{title:"manage.sidemenu.ldap",icon:T,to:"/@manage/settings/ldap",component:function(){return i(At,{get group(){return Et.LDAP}})}},{title:"manage.sidemenu.s3",icon:N,to:"/@manage/settings/s3",component:A((function(){return O((function(){return o.import("./S3-legacy.77874c0e.js")}),void 0)}))},{title:"manage.sidemenu.other",icon:R,to:"/@manage/settings/other",component:A((function(){return O((function(){return o.import("./Other-legacy.91946dca.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(t){return j({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},t)},to:"/@manage/tasks",role:f.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:D,to:"/@manage/tasks/aria2",role:f.GENERAL,component:A((function(){return O((function(){return o.import("./offline_download-legacy.a836bf54.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:U,to:"/@manage/tasks/upload",role:f.GENERAL,component:A((function(){return O((function(){return o.import("./Upload-legacy.f75e556a.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:Y,to:"/@manage/tasks/copy",role:f.GENERAL,component:A((function(){return O((function(){return o.import("./Copy-legacy.aec4c75c.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:z,to:"/@manage/users",component:A((function(){return O((function(){return o.import("./Users-legacy.7b7ebb53.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:pt,to:"/@manage/storages",component:A((function(){return O((function(){return o.import("./Storages-legacy.7c06e22c.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:wt,to:"/@manage/metas",component:A((function(){return O((function(){return o.import("./Metas-legacy.874a76ad.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:V,to:"/@manage/indexes",component:A((function(){return O((function(){return o.import("./indexes-legacy.908b844c.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:yt,component:A((function(){return O((function(){return o.import("./backup-restore-legacy.1fc3e9af.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:W,to:"/@manage/about",role:f.GUEST,component:A((function(){return O((function(){return o.import("./About-legacy.422d60dc.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:vt,to:"https://alist.nn.ci",role:f.GUEST,external:!0},{title:"manage.sidemenu.home",icon:B,to:"/",role:f.GUEST,refresh:!0}],kt=F(),_t=kt.isOpen,Ct=kt.onOpen,It=kt.onClose,Gt=r(M((function(){return X.get("/auth/logout")})),2),Pt=Gt[0],Tt=Gt[1],Nt=function(){var t=m(),r=h().to,o=function(){var o,i=(o=e().mark((function n(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=at,e.next=3,Tt();case 3:e.t1=e.sent,e.t2=function(){ct(),ut.success(t("manage.logout_success")),r("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},(0,e.t0)(e.t1,e.t2);case 6:case"end":return e.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,i){var a=o.apply(t,e);function c(t){n(a,r,i,c,u,"next",t)}function u(t){n(a,r,i,c,u,"throw",t)}c(void 0)}))});return function(){return i.apply(this,arguments)}}();return i(S,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return H("$background","$neutral2")()},get children(){return[i(x,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[i($,{spacing:"$2",get children(){return[i(K,{"aria-label":"menu",get icon(){return i(bt,{})},display:{"@sm":"none"},onClick:Ct,size:"sm"}),i(E,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){r("/@manage")},get children(){return t("manage.title")}})]}}),i($,{spacing:"$1",get children(){return i(K,{"aria-label":"logout",get icon(){return i(Q,{})},get loading(){return Pt()},onClick:o,size:"sm"})}})]}}),i(Z,{get opened(){return _t()},placement:"left",onClose:It,get children(){return[i(q,{}),i(J,{get children(){return[i(tt,{}),i(et,{color:"$info9",get children(){return t("manage.title")}}),i(nt,{get children(){return[i(jt,{items:Ot}),i(rt,{get children(){return i($,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[i(ot,{}),i(it,{})]}})}})]}})]}})]}})]}})},Rt=[{to:"/storages/add",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.22a3b1dc.js")}),void 0)}))},{to:"/storages/edit/:id",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.22a3b1dc.js")}),void 0)}))},{to:"/users/add",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.f69d1580.js")}),void 0)}))},{to:"/users/edit/:id",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.f69d1580.js")}),void 0)}))},{to:"/metas/add",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.f8571144.js")}),void 0)}))},{to:"/metas/edit/:id",component:A((function(){return O((function(){return o.import("./AddOrEdit-legacy.f8571144.js")}),void 0)}))},{to:"/2fa",component:A((function(){return O((function(){return o.import("./2fa-legacy.3ecda915.js")}),void 0)}))},{to:"/messenger",component:A((function(){return O((function(){return o.import("./Messenger-legacy.4f252f75.js")}),void 0)}))}],Dt=function(t){return gt(t.title),i(rt,{h:"$full",get children(){return i(E,{get children(){return t.title}})}})},Ut=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){e.children?t(e.children,n):n.push({to:lt(e.to,"/@manage"),component:e.component||function(){return i(Dt,{get title(){return e.title},get to(){return e.to||"empty"}})}})})),n}(Ot).concat(Rt),Yt=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var t=m();return dt((function(){return t("manage.title")})),i(S,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[i(Nt,{}),i(x,{w:"$full",h:"calc(100vh - 64px)",get children(){return[i(S,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return H("$background","$neutral2")()},overflowY:"auto",get children(){return[i(jt,{items:Ot}),i(rt,{get children(){return i($,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[i(ot,{}),i(it,{})]}})}})]}}),i(S,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return i(st,{get children(){return i(a,{each:Ut,children:function(t){return i(ft,{get path(){return t.to},get component(){return t.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));t("i",Yt)}}}))}();
