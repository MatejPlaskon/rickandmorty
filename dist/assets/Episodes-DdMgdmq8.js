import{r as f,c as T,m as Q,f as N,j as a,a as S,b as I,u as M,d as F,w as D,I as ve,A as X,e as Z,g as ge,o as ee,h as be,i as ye,G as Ne,k as H,l as Ie,s as $,n as te,p as ne,S as Ce,T as Se,q as Ee}from"./index-Bm17_tNl.js";import{H as we,S as Ae,P as _e,E as Pe,V as De}from"./PageLayout-OBhNU-4f.js";var Oe=Object.defineProperty,je=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t,n)=>(je(e,typeof t!="symbol"?t+"":t,n),n);function W(e){return e.sort((t,n)=>{const s=t.compareDocumentPosition(n);if(s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(s&Node.DOCUMENT_POSITION_DISCONNECTED||s&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var Te=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function q(e,t,n){let s=e+1;return n&&s>=t&&(s=0),s}function J(e,t,n){let s=e-1;return n&&s<0&&(s=t),s}var R=typeof window<"u"?f.useLayoutEffect:f.useEffect,O=e=>e,ke=class{constructor(){h(this,"descendants",new Map),h(this,"register",e=>{if(e!=null)return Te(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),h(this,"unregister",e=>{this.descendants.delete(e);const t=W(Array.from(this.descendants.keys()));this.assignIndex(t)}),h(this,"destroy",()=>{this.descendants.clear()}),h(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),h(this,"count",()=>this.descendants.size),h(this,"enabledCount",()=>this.enabledValues().length),h(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index)),h(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),h(this,"item",e=>{if(this.count()!==0)return this.values()[e]}),h(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]}),h(this,"first",()=>this.item(0)),h(this,"firstEnabled",()=>this.enabledItem(0)),h(this,"last",()=>this.item(this.descendants.size-1)),h(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)}),h(this,"indexOf",e=>{var t,n;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1}),h(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),h(this,"next",(e,t=!0)=>{const n=q(e,this.count(),t);return this.item(n)}),h(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),o=q(s,this.enabledCount(),t);return this.enabledItem(o)}),h(this,"prev",(e,t=!0)=>{const n=J(e,this.count()-1,t);return this.item(n)}),h(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),o=J(s,this.enabledCount()-1,t);return this.enabledItem(o)}),h(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),s=W(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const o={node:e,index:-1,...t};this.descendants.set(e,o),this.assignIndex(s)})}};function Me(){const e=f.useRef(new ke);return R(()=>()=>e.current.destroy()),e.current}var[Fe,se]=T({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function Re(e){const t=se(),[n,s]=f.useState(-1),o=f.useRef(null);R(()=>()=>{o.current&&t.unregister(o.current)},[]),R(()=>{if(!o.current)return;const r=Number(o.current.dataset.index);n!=r&&!Number.isNaN(r)&&s(r)});const l=O(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(o.current),register:Q(l,o)}}function Ve(){return[O(Fe),()=>O(se()),()=>Me(),o=>Re(o)]}var[Le,k]=T({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Ue,V]=T({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[Be,ct,Ge,ze]=Ve(),oe=N(function(t,n){const{getButtonProps:s}=V(),o=s(t,n),r={display:"flex",alignItems:"center",width:"100%",outline:0,...k().button};return a.jsx(S.button,{...o,className:I("chakra-accordion__button",t.className),__css:r})});oe.displayName="AccordionButton";function He(e){const{value:t,defaultValue:n,onChange:s,shouldUpdate:o=(p,x)=>p!==x}=e,l=M(s),r=M(o),[i,u]=f.useState(n),d=t!==void 0,c=d?t:i,m=M(p=>{const v=typeof p=="function"?p(c):p;r(c,v)&&(d||u(v),l(v))},[d,l,c,r]);return[c,m]}function $e(e){const{onChange:t,defaultIndex:n,index:s,allowMultiple:o,allowToggle:l,...r}=e;Je(e),Ke(e);const i=Ge(),[u,d]=f.useState(-1);f.useEffect(()=>()=>{d(-1)},[]);const[c,m]=He({value:s,defaultValue(){return o?n??[]:n??-1},onChange:t});return{index:c,setIndex:m,htmlProps:r,getAccordionItemProps:x=>{let v=!1;return x!==null&&(v=Array.isArray(c)?c.includes(x):c===x),{isOpen:v,onChange:b=>{if(x!==null)if(o&&Array.isArray(c)){const A=b?c.concat(x):c.filter(_=>_!==x);m(A)}else b?m(x):l&&m(-1)}}},focusedIndex:u,setFocusedIndex:d,descendants:i}}var[We,L]=T({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function qe(e){const{isDisabled:t,isFocusable:n,id:s,...o}=e,{getAccordionItemProps:l,setFocusedIndex:r}=L(),i=f.useRef(null),u=f.useId(),d=s??u,c=`accordion-button-${d}`,m=`accordion-panel-${d}`;Ye(e);const{register:p,index:x,descendants:v}=ze({disabled:t&&!n}),{isOpen:g,onChange:b}=l(x===-1?null:x);Qe({isOpen:g,isDisabled:t});const A=()=>{b==null||b(!0)},_=()=>{b==null||b(!1)},B=f.useCallback(()=>{b==null||b(!g),r(x)},[x,r,g,b]),G=f.useCallback(P=>{const E={ArrowDown:()=>{const y=v.nextEnabled(x);y==null||y.node.focus()},ArrowUp:()=>{const y=v.prevEnabled(x);y==null||y.node.focus()},Home:()=>{const y=v.firstEnabled();y==null||y.node.focus()},End:()=>{const y=v.lastEnabled();y==null||y.node.focus()}}[P.key];E&&(P.preventDefault(),E(P))},[v,x]),z=f.useCallback(()=>{r(x)},[r,x]),me=f.useCallback(function(C={},E=null){return{...C,type:"button",ref:Q(p,i,E),id:c,disabled:!!t,"aria-expanded":!!g,"aria-controls":m,onClick:F(C.onClick,B),onFocus:F(C.onFocus,z),onKeyDown:F(C.onKeyDown,G)}},[c,t,g,B,z,G,m,p]),pe=f.useCallback(function(C={},E=null){return{...C,ref:E,role:"region",id:m,"aria-labelledby":c,hidden:!g}},[c,g,m]);return{isOpen:g,isDisabled:t,isFocusable:n,onOpen:A,onClose:_,getButtonProps:me,getPanelProps:pe,htmlProps:o}}function Je(e){const t=e.index||e.defaultIndex,n=t!=null&&!Array.isArray(t)&&e.allowMultiple;D({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function Ke(e){D({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Ye(e){D({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Qe(e){D({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function re(e){const{isOpen:t,isDisabled:n}=V(),{reduceMotion:s}=L(),o=I("chakra-accordion__icon",e.className),l=k(),r={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...l.icon};return a.jsx(ve,{viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:r,...e,children:a.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}re.displayName="AccordionIcon";var ie=N(function(t,n){const{children:s,className:o}=t,{htmlProps:l,...r}=qe(t),u={...k().container,overflowAnchor:"none"},d=f.useMemo(()=>r,[r]);return a.jsx(Ue,{value:d,children:a.jsx(S.div,{ref:n,...l,className:I("chakra-accordion__item",o),__css:u,children:typeof s=="function"?s({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):s})})});ie.displayName="AccordionItem";var w={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},K={enter:{duration:.2,ease:w.easeOut},exit:{duration:.1,ease:w.easeIn}},j={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},Xe=e=>e!=null&&parseInt(e.toString(),10)>0,Y={exit:{height:{duration:.2,ease:w.ease},opacity:{duration:.3,ease:w.ease}},enter:{height:{duration:.3,ease:w.ease},opacity:{duration:.4,ease:w.ease}}},Ze={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:s,delay:o})=>{var l;return{...e&&{opacity:Xe(t)?1:0},height:t,transitionEnd:s==null?void 0:s.exit,transition:(l=n==null?void 0:n.exit)!=null?l:j.exit(Y.exit,o)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:s,delay:o})=>{var l;return{...e&&{opacity:1},height:t,transitionEnd:s==null?void 0:s.enter,transition:(l=n==null?void 0:n.enter)!=null?l:j.enter(Y.enter,o)}}},ae=f.forwardRef((e,t)=>{const{in:n,unmountOnExit:s,animateOpacity:o=!0,startingHeight:l=0,endingHeight:r="auto",style:i,className:u,transition:d,transitionEnd:c,...m}=e,[p,x]=f.useState(!1);f.useEffect(()=>{const _=setTimeout(()=>{x(!0)});return()=>clearTimeout(_)},[]),D({condition:Number(l)>0&&!!s,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const v=parseFloat(l.toString())>0,g={startingHeight:l,endingHeight:r,animateOpacity:o,transition:p?d:{enter:{duration:0}},transitionEnd:{enter:c==null?void 0:c.enter,exit:s?c==null?void 0:c.exit:{...c==null?void 0:c.exit,display:v?"block":"none"}}},b=s?n:!0,A=n||s?"enter":"exit";return a.jsx(X,{initial:!1,custom:g,children:b&&a.jsx(Z.div,{ref:t,...m,className:I("chakra-collapse",u),style:{overflow:"hidden",display:"block",...i},custom:g,variants:Ze,initial:s?"exit":!1,animate:A,exit:"exit"})})});ae.displayName="Collapse";var et={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var s;return{opacity:1,transition:(s=e==null?void 0:e.enter)!=null?s:j.enter(K.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var s;return{opacity:0,transition:(s=e==null?void 0:e.exit)!=null?s:j.exit(K.exit,n),transitionEnd:t==null?void 0:t.exit}}},tt={initial:"exit",animate:"enter",exit:"exit",variants:et},le=f.forwardRef(function(t,n){const{unmountOnExit:s,in:o,className:l,transition:r,transitionEnd:i,delay:u,...d}=t,c=o||s?"enter":"exit",m=s?o&&s:!0,p={transition:r,transitionEnd:i,delay:u};return a.jsx(X,{custom:p,children:m&&a.jsx(Z.div,{ref:n,className:I("chakra-fade",l),custom:p,...tt,animate:c,...d})})});le.displayName="Fade";var ce=N(function(t,n){const{className:s,motionProps:o,...l}=t,{reduceMotion:r}=L(),{getPanelProps:i,isOpen:u}=V(),d=i(l,n),c=I("chakra-accordion__panel",s),m=k();r||delete d.hidden;const p=a.jsx(S.div,{...d,__css:m.panel,className:c});return r?p:a.jsx(ae,{in:u,...o,children:p})});ce.displayName="AccordionPanel";var de=N(function({children:t,reduceMotion:n,...s},o){const l=ge("Accordion",s),r=ee(s),{htmlProps:i,descendants:u,...d}=$e(r),c=f.useMemo(()=>({...d,reduceMotion:!!n}),[d,n]);return a.jsx(Be,{value:u,children:a.jsx(We,{value:c,children:a.jsx(Le,{value:l,children:a.jsx(S.div,{ref:o,...i,className:I("chakra-accordion",s.className),__css:l.root,children:t})})})})});de.displayName="Accordion";var ue=N(function(t,n){const s=be("Text",t),{className:o,align:l,decoration:r,casing:i,...u}=ee(t),d=ye({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return a.jsx(S.p,{ref:n,className:I("chakra-text",t.className),...d,...u,__css:s})});ue.displayName="Text";var U=S("div");U.displayName="Box";var fe=N(function(t,n){const{size:s,centerContent:o=!0,...l}=t,r=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.jsx(U,{ref:n,boxSize:s,__css:{...r,flexShrink:0,flexGrow:0},...l})});fe.displayName="Square";var nt=N(function(t,n){const{size:s,...o}=t;return a.jsx(fe,{size:s,ref:n,borderRadius:"9999px",...o})});nt.displayName="Circle";var xe=N(function(t,n){const{direction:s,align:o,justify:l,wrap:r,basis:i,grow:u,shrink:d,...c}=t,m={display:"flex",flexDirection:s,alignItems:o,justifyContent:l,flexWrap:r,flexBasis:i,flexGrow:u,flexShrink:d};return a.jsx(S.div,{ref:n,__css:m,...c})});xe.displayName="Flex";const st=({children:e,sidebar:t})=>a.jsxs(Ne,{gridTemplateColumns:"250px 1fr",h:"full",w:"full",overflow:"hidden",children:[a.jsx(H,{bgColor:"black",borderRight:"1px solid",borderColor:"blue.800",px:4,h:"full",overflow:"auto",children:t}),a.jsx(H,{overflow:"auto",children:e})]});var he=(e=>(e.SelectedEpisode="selectedEpisode",e))(he||{});const ot=(e,t={})=>{const n=()=>{const i=window.localStorage.getItem(e);if(!i)return{};try{return JSON.parse(i)}catch{return{}}},[s,o]=f.useState(()=>n()),l=i=>{o(i),window.localStorage.setItem(e,JSON.stringify(i))},r=f.useCallback(i=>{i.key===e&&i.newValue&&JSON.parse(i.newValue)!==s&&o(JSON.parse(i.newValue)||t)},[e,t,s]);return f.useEffect(()=>(window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)),[r]),[s,l]},rt=()=>{const e=Ie(),[t,n]=ot(he.SelectedEpisode);f.useEffect(()=>{if(t.season&&t.episode){const{season:i,episode:u}=t;e($({season:i,episode:u}))}},[]);const{selectedSeason:s,selectedEpisode:o}=te(ne.getSelectedEpisodeAndSeason),l=(i,u)=>{e($({season:u,episode:i})),n({season:u,episode:i})},r=(i,u)=>s===u&&o===i;return a.jsx(le,{in:!0,children:a.jsxs(Ce,{children:[a.jsx(we,{size:"sm",p:2,pt:6,color:"yellow.500",children:"Choose episode"}),a.jsx(de,{borderColor:"yellow.500",defaultIndex:t.season-1||s-1,children:Ae.map(i=>a.jsxs(ie,{children:[a.jsx("h2",{children:a.jsxs(oe,{children:[a.jsx(U,{as:"span",flex:"1",textAlign:"left",children:a.jsx(ue,{color:"teal.500",fontWeight:"medium",children:`Season ${i.season}`})}),a.jsx(re,{color:"yellow.500"})]})}),a.jsx(ce,{px:0,children:i.episodes.map((u,d)=>a.jsx(Se,{label:u,placement:"right",children:a.jsx(xe,{role:"button",onClick:()=>l(d+1,i.season),p:1,px:4,borderRadius:5,w:"full",bgColor:r(d+1,i.season)?"gray.700":"black",_hover:{bgColor:"gray.700"},color:"yellow.400",overflow:"hidden",noOfLines:1,children:`Episode ${d+1}: ${u}`},d)},d))})]},i.season))})]})})},it=()=>{const{selectedSeason:e,selectedEpisode:t}=te(ne.getSelectedEpisodeAndSeason);return a.jsx(_e,{header:a.jsx(Pe,{episode:t,season:e}),children:a.jsx(De,{season:e,episode:t})})},dt=()=>(f.useEffect(()=>{Ee("/episodes")}),a.jsx(st,{sidebar:a.jsx(rt,{}),children:a.jsx(it,{})}));export{dt as default};