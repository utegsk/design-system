"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react"),c=require("react-dom");function a(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const u=a(o),l=({children:e})=>{const t=u.useRef(null),[r,n]=u.useState(!1);return u.useLayoutEffect(()=>(t.current=document.createElement("div"),t.current.setAttribute("data-react-portal","true"),document.body.appendChild(t.current),n(!0),()=>{t.current?.remove()}),[]),!r||!t.current?null:c.createPortal(e,t.current)};exports.Portal=l;
