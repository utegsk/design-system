"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("react"),k=require("@strapi/icons"),le=require("prop-types"),ne=require("styled-components"),x=require("./components.cjs"),re=require("./constants.cjs"),oe=require("./hooks/useButtonRef.cjs"),ae=require("./SelectButton.cjs"),se=require("./SelectList.cjs"),ie=require("./SelectTags.cjs"),A=require("../Box/Box.cjs"),ce=require("../Field/Field.cjs"),de=require("../Field/FieldLabel.cjs");require("../Field/FieldInput.cjs");const ue=require("../Field/FieldHint.cjs"),fe=require("../Field/FieldError.cjs");require("../Field/FieldContext.cjs");require("../Field/FieldAction.cjs");const b=require("../Flex/Flex.cjs"),z=require("../helpers/escapeSelector.cjs"),pe=require("../hooks/useId.cjs"),ye=require("../Popover/Popover.cjs"),he=require("../themes/sizes.cjs"),G=require("../Typography/Typography.cjs"),W=require("../VisuallyHidden/VisuallyHidden.cjs"),v=o=>o&&typeof o=="object"&&"default"in o?o:{default:o},l=v(u),e=v(le),me=v(ne),Ee=me.default(b.Flex)`
  width: 100%;
`,I=({label:o,labelAction:N,id:J,children:K,customizeContent:y,placeholder:F,onChange:j,value:n,hint:q,error:p,disabled:i,clearLabel:C,onClear:O,onReachEnd:Q,multi:a,required:R,selectButtonTitle:U,size:V,startIcon:L,withTags:h,...X})=>{const r=pe.useId(J),[m,E]=u.useState(void 0),$=oe.useButtonRef(m),_=u.useRef(null),D=`${r}-label`,g=`${r}-content`,Y=typeof p=="string";let S;if(p?S=`${r}-error`:q&&(S=`${r}-hint`),h&&!a)throw new Error('The "withTags" props can only be used when the "multi" prop is present');const Z=()=>{E(void 0)},ee=()=>{i||(O(),$.current.focus())},w=t=>{t.preventDefault(),!i&&(t.nativeEvent.which===3||t.nativeEvent.button===2||E(re.DownState.Mouse))},B=(t,s=!0)=>{a?j(n.includes(t)?n.filter(c=>c!==t):[...n,t]):(j(t),s&&E(void 0))},H=t=>{j(n.includes(t[0])?n.filter((s,c,f)=>f.indexOf(s)<0,t):[...n,...t])};let T,M=[];const P=(t,s)=>{const c=`${r}-option-${t.props.value}`,f=a?n.includes(t.props.value):t.props.value===n;return f&&(h?M.push({label:t.props.children,value:t.props.value}):T=t.props.children),u.cloneElement(t,{id:z.escapeSelector(c),onClick:()=>B(t.props.value),selected:f,multi:a,isChild:s})},te=u.Children.toArray(K).map(t=>{if(t.type.displayName==="OptGroup"){const s=`${r}-option-${t.props.label}`,c=t.props.children.every(d=>n.includes(d.props.value)),f=!c&&t.props.children.some(d=>n.includes(d.props.value));return u.cloneElement(t,{id:z.escapeSelector(s),onClick:()=>H(t.props.children.map(d=>d.props.value)),selected:c,indeterminate:f,multi:a,children:u.Children.toArray(t.props.children).map(d=>P(d,!0)),value:t.props.label})}return P(t)});return l.default.createElement(ce.Field,{hint:q,error:p,id:r,required:R},l.default.createElement(b.Flex,{direction:"column",alignItems:"stretch",gap:o||q||Y?1:0},o&&l.default.createElement(de.FieldLabel,{action:N},o),l.default.createElement(x.SelectButtonWrapper,{size:V,hasError:Boolean(p),disabled:i,ref:_},l.default.createElement(ae.SelectButton,{ref:$,labelledBy:`${r} ${D} ${g}`,"aria-describedby":S,"aria-required":R,expanded:Boolean(m),onTrigger:E,id:r,hasError:Boolean(p),disabled:i,onMouseDown:w,value:a?n.join(","):n,...X}),l.default.createElement(Ee,{justifyContent:"space-between"},l.default.createElement(b.Flex,null,L&&l.default.createElement(A.Box,{paddingLeft:3,"aria-hidden":!0},L),h&&l.default.createElement(ie.SelectTags,{tags:M,onRemoveTag:B,disabled:i}),l.default.createElement(A.Box,{paddingLeft:4,paddingRight:4},h?l.default.createElement(l.default.Fragment,null,!n||n.length===0?l.default.createElement(G.Typography,{ellipsis:!0,id:g,textColor:"neutral600"},F):null,l.default.createElement(W.VisuallyHidden,{as:"span",id:g},y?y(n):T||F,n.join(", "))):l.default.createElement(G.Typography,{ellipsis:!0,id:g,textColor:n?"neutral800":"neutral600"},y?y(n):T||F,a&&l.default.createElement(W.VisuallyHidden,{as:"span"},n.join(", "))))),l.default.createElement(b.Flex,null,(a&&n&&n.length||!a&&n)&&O&&l.default.createElement(x.IconBox,{as:"button",type:"button",onClick:ee,"aria-label":C,"aria-disabled":i,title:C},l.default.createElement(k.Cross,null)),l.default.createElement(x.CaretBox,{paddingLeft:3,"aria-hidden":!0,as:"button",type:"button",onMouseDown:w,tabIndex:-1,disabled:i,title:U},l.default.createElement(k.CarretDown,null))))),l.default.createElement(ue.FieldHint,null),l.default.createElement(fe.FieldError,null)),m&&l.default.createElement(ye.Popover,{source:_,spacing:4,fullWidth:!0,intersectionId:`select-list-intersection-${r}`,onReachEnd:Q},l.default.createElement(se.SelectList,{selectId:r,labelledBy:o?D:void 0,onEscape:Z,expanded:m,onSelectItem:(t,s)=>s?H(t):B(t,!1),multi:a},te)))};I.defaultProps={"aria-label":void 0,children:[],clearLabel:"Clear",customizeContent:void 0,disabled:!1,id:void 0,label:void 0,labelAction:void 0,multi:!1,onChange(){},onClear:void 0,onReachEnd:void 0,value:void 0,hint:void 0,error:void 0,placeholder:"Select...",required:!1,selectButtonTitle:"Carret Down Button",size:"M",startIcon:void 0,withTags:!1};I.propTypes={"aria-label":e.default.string,children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),clearLabel:e.default.string,customizeContent:e.default.func,disabled:e.default.bool,error:e.default.oneOfType([e.default.string,e.default.bool]),hint:e.default.oneOfType([e.default.string,e.default.bool,e.default.node,e.default.arrayOf(e.default.node)]),id:e.default.oneOfType([e.default.string,e.default.number]),label:e.default.string,labelAction:e.default.element,multi:e.default.bool,onChange:e.default.func,onClear:e.default.func,onReachEnd:e.default.func,placeholder:e.default.string,required:e.default.bool,selectButtonTitle:e.default.string,size:e.default.oneOf(Object.keys(he.sizes.input)),startIcon:e.default.element,value:e.default.oneOfType([e.default.arrayOf(e.default.oneOfType([e.default.string,e.default.number])),e.default.string,e.default.number]),withTags:e.default.bool};exports.Select=I;
