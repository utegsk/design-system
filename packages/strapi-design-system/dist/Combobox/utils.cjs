"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("compute-scroll-into-view"),r=require("../helpers/keyboardKeys.cjs"),a=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},c=a(l),t={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},u={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function d(e=[],o=null,s=[]){const i=String(o??"").toLowerCase();return i?e.filter(n=>(n.props.filterLabel?.toLowerCase()||n.props.children.toString().toLowerCase()).includes(i)&&s.indexOf(n)<0):e}function p(e,o){if(!o&&e===r.KeyboardKeys.DOWN)return t.Open;if(e===r.KeyboardKeys.DOWN)return t.Next;if(e===r.KeyboardKeys.UP)return t.Previous;if(e===r.KeyboardKeys.HOME)return t.First;if(e===r.KeyboardKeys.END)return t.Last;if(e===r.KeyboardKeys.ESCAPE)return t.Close;if(e===r.KeyboardKeys.ENTER)return t.CloseSelect;if(e===r.KeyboardKeys.BACKSPACE||e===r.KeyboardKeys.CLEAR||e.length===1)return t.Type}function f(e,o,s){switch(s){case t.First:return 0;case t.Last:return o;case t.Previous:return Math.max(0,e-1);case t.Next:return Math.min(o,e+1);default:return e}}function y(e){c.default(e,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:s,top:i,left:n})=>{s.scrollTop=i,s.scrollLeft=n})}exports.MenuActions=t;exports.TreeActions=u;exports.filterOptions=d;exports.getActionFromKey=p;exports.getUpdatedIndex=f;exports.maintainScrollVisibility=y;
