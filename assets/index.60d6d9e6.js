import{d as w,u as k,c as b,i as v,a as R,t as m,l as g,v as L,n as T,b as f,S as y,e as C,r as O,R as W}from"./vendor.8b387e40.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};P();const x="modulepreload",S={},I="/social/",$=function(i,l){return!l||l.length===0?i():Promise.all(l.map(n=>{if(n=`${I}${n}`,n in S)return;S[n]=!0;const t=n.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const e=document.createElement("link");if(e.rel=t?"stylesheet":x,t||(e.as="script",e.crossOrigin=""),e.href=n,document.head.appendChild(e),t)return new Promise((r,c)=>{e.addEventListener("load",r),e.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>i())},A="_Home_usvqu_1";var B={Home:A};const D=m(`<div><p><button type="button">count is: </button></p><br><form><input type="text" aria-label="What's your name?" placeholder="What's your name?"><button type="submit">GO</button></form><br><a href="/about">About</a><br><br><a href="/test/abc">abc</a><br></div>`);function H(){const u=k(),[i,l]=b(0),[n,t]=b(""),o=r=>{t(r.target.value||"")},e=r=>{r.preventDefault();const c=n();c&&c.trim().length>0&&u(`/hi/${c}`)};return(()=>{const r=D.cloneNode(!0),c=r.firstChild,s=c.firstChild;s.firstChild;const a=c.nextSibling,_=a.nextSibling,h=_.firstChild;return s.$$click=()=>l(i()+1),v(s,i,null),_.addEventListener("submit",e),h.addEventListener("change",o),R(d=>{const E=B.Home,N=n();return E!==d._v$&&(r.className=d._v$=E),N!==d._v$2&&(h.value=d._v$2=N),d},{_v$:void 0,_v$2:void 0}),r})()}w(["click"]);const M=u=>{const i=u.params.name||"";return{name:decodeURI(i)}},U=[{path:"/",component:H},{path:"/about",component:g(()=>$(()=>import("./about.62e5baaa.js"),["assets/about.62e5baaa.js","assets/vendor.8b387e40.js"]))},{path:"/hi/:name",component:g(()=>$(()=>import("./_name_.aca79d31.js"),["assets/_name_.aca79d31.js","assets/vendor.8b387e40.js"])),data:M},{path:"/test/:id",component:g(()=>$(()=>import("./_id_.facdf2d9.js"),["assets/_id_.facdf2d9.js","assets/vendor.8b387e40.js"]))},{path:"**",component:g(()=>$(()=>import("./404.a7199e17.js"),["assets/404.a7199e17.js","assets/vendor.8b387e40.js"]))}];function V(u={}){const{immediate:i=!1,onNeedRefresh:l,onOfflineReady:n,onRegistered:t,onRegisterError:o}=u;let e,r;const c=async(s=!0)=>{s&&(e==null||e.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()})),r&&r.waiting&&await T(r.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){e=new L("/social/prompt-sw.js",{scope:"/social/",type:"classic"}),e.addEventListener("activated",s=>{s.isUpdate||n==null||n()});{const s=()=>{l==null||l()};e.addEventListener("waiting",s),e.addEventListener("externalwaiting",s)}e.register({immediate:i}).then(s=>{r=s,t==null||t(s)}).catch(s=>{o==null||o(s)})}return c}function q(u={}){const{immediate:i=!0,onNeedRefresh:l,onOfflineReady:n,onRegistered:t,onRegisterError:o}=u,[e,r]=b(!1),[c,s]=b(!1),a=V({immediate:i,onOfflineReady(){s(!0),n==null||n()},onNeedRefresh(){r(!0),l==null||l()},onRegistered:t,onRegisterError:o});return{needRefresh:[e,r],offlineReady:[c,s],updateServiceWorker:a}}const j="_Container_1xfhp_1",G="_Toast_1xfhp_7",K="_ToastMessage_1xfhp_20",z="_ToastButton_1xfhp_23";var p={Container:j,Toast:G,ToastMessage:K,ToastButton:z};const F=m("<span>App ready to work offline</span>"),J=m("<button>Reload</button>"),Q=m("<div><div></div><button>Close</button></div>"),X=m("<div></div>"),Y=m("<span>New content available, click on reload button to update.</span>"),Z=()=>{const{needRefresh:[u,i],offlineReady:[l,n],updateServiceWorker:t}=q({immediate:!0,onRegistered(e){console.log(`SW Registered: ${e}`)},onRegisterError(e){console.error("SW registration error",e)}}),o=()=>{n(!1),i(!1)};return(()=>{const e=X.cloneNode(!0);return v(e,f(y,{get when(){return l()||u()},get children(){const r=Q.cloneNode(!0),c=r.firstChild,s=c.nextSibling;return v(c,f(y,{get fallback(){return Y.cloneNode(!0)},get when(){return l()},get children(){return F.cloneNode(!0)}})),v(r,f(y,{get when(){return u()},get children(){const a=J.cloneNode(!0);return a.$$click=()=>t(!0),R(()=>a.className=p.ToastButton),a}}),s),s.$$click=()=>o(),R(a=>{const _=p.Toast,h=p.Message,d=p.ToastButton;return _!==a._v$&&(r.className=a._v$=_),h!==a._v$2&&(c.className=a._v$2=h),d!==a._v$3&&(s.className=a._v$3=d),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})),R(()=>e.className=p.Container),e})()};w(["click"]);const ee=m('<main class="flex items-center justify-center bg-gradient-to-l from-sky-400 to-indigo-600 min-h-screen"></main>'),te=()=>{const u=C(U);return(()=>{const i=ee.cloneNode(!0);return v(i,f(u,{}),null),v(i,f(Z,{}),null),i})()};O(()=>f(W,{get base(){return String("/social/")},get children(){return f(te,{})}}),document.getElementById("app"));
//# sourceMappingURL=index.60d6d9e6.js.map
