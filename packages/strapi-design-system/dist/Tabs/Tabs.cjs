"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const v=require("react"),K=require("prop-types"),q=require("styled-components"),m=require("./components.cjs"),_=require("./TabsContext.cjs"),w=require("./useTabsFocus.cjs"),x=require("../helpers/keyboardKeys.cjs"),D=require("../Typography/Typography.cjs"),C=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},d=C(v),l=C(K),R=C(q),j=R.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,k=({children:n,...b})=>{const{id:h,selectedTabIndex:u,selectTabIndex:o,label:p,variant:f,onTabChange:g}=_.useTabs(),y=w.useTabsFocus(u,g),a=v.Children.toArray(n).map((t,i)=>v.cloneElement(t,{id:`${h}-${i}`,index:i,selectedTabIndex:u,onTabClick:()=>o(i),variant:f})),T=t=>{if(!a.every(r=>r.props.disabled))switch(t.key){case x.KeyboardKeys.RIGHT:{const r=u+1,e=s=>a[s].props.disabled?s===a.length-1?e(0):e(s+1):s,c=e(r>=a.length?0:r);o(c);break}case x.KeyboardKeys.LEFT:{const r=u-1,e=s=>a[s].props.disabled?e(s===0?a.length-1:s-1):s,c=e(r<0?a.length-1:r);o(c);break}case x.KeyboardKeys.HOME:{const r=a.findIndex(e=>!e.props.disabled);o(r);break}case x.KeyboardKeys.END:{const e=a.map((c,s)=>({isDisabled:c.props.disabled,index:s})).reverse().find(({isDisabled:c})=>!c);e&&o(e.index);break}}};return f==="simple"?d.default.createElement("div",{ref:y,role:"tablist","aria-label":p,onKeyDown:T,...b},a):d.default.createElement(m.DefaultTabsRow,{ref:y,role:"tablist",alignItems:"flex-end","aria-label":p,onKeyDown:T,...b},a)};k.propTypes={children:l.default.node.isRequired};const I=({disabled:n,id:b,children:h,variant:u,hasError:o,index:p,selectedTabIndex:f,onTabClick:g,...y})=>{const a=`${b}-tab`,T=`${b}-tabpanel`,t=p===f,i=()=>{n||g()};if(u==="simple"){let e;return o?e="danger600":t?e="primary600":e="neutral600",d.default.createElement(j,{id:a,role:"tab","aria-controls":t?T:void 0,tabIndex:t?0:-1,"aria-selected":t,type:"button",onClick:i,"aria-disabled":n,...y},d.default.createElement(m.SimpleTabBox,{padding:4,selected:t,hasError:o},d.default.createElement(D.Typography,{variant:"sigma",textColor:e},h)))}o&&console.warn('The "hasError" prop is only available for the "simple" variant.');const r=f-1===p;return d.default.createElement(m.DefaultTabButton,{id:a,role:"tab",type:"button","aria-controls":t?T:void 0,tabIndex:t?0:-1,"aria-selected":t,onClick:i,"aria-disabled":n,showRightBorder:r,...y},d.default.createElement(m.DefaultTabBox,{padding:t?4:3,background:t?"neutral0":"neutral100",selected:t},d.default.createElement(D.Typography,{fontWeight:"bold",textColor:t?"primary700":"neutral600"},h)))};I.defaultProps={disabled:!1,hasError:!1,id:void 0,index:void 0,onTabClick:void 0,selectedTabIndex:void 0,variant:void 0};I.propTypes={children:l.default.node.isRequired,disabled:l.default.bool,hasError:l.default.bool,id:l.default.string,index:l.default.number,onTabClick:l.default.func,selectedTabIndex:l.default.number,variant:l.default.oneOf(["simple"])};exports.Tab=I;exports.Tabs=k;
