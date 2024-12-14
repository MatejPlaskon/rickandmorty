import{u as F,r as m,c as T,m as Q,a as R,f as E,b as pe,o as X,j as a,d as C,e as A,I as ge,g as be,A as Z,h as ee,i as Ie,k as Ne,l as k,G,n as ye,p as Se,q as te,s as se,T as Ae,t as H,S as we,v as Ce}from"./index-Bc3TWMJN.js";import{S as ve,H as Pe,P as Ee,E as Oe,V as _e}from"./PageLayout-CTJZAEpH.js";const _=t=>{const{condition:e,message:s}=t};function De(t){const{value:e,defaultValue:s,onChange:n,shouldUpdate:o=(g,f)=>g!==f}=t,r=F(n),c=F(o),[l,d]=m.useState(s),u=e!==void 0,i=u?e:l,x=F(g=>{const b=typeof g=="function"?g(i):g;c(i,b)&&(u||d(b),r(b))},[u,r,i,c]);return[i,x]}function W(t){return t.sort((e,s)=>{const n=e.compareDocumentPosition(s);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const je=t=>typeof t=="object"&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE;function z(t,e,s){let n=t+1;return s&&n>=e&&(n=0),n}function J(t,e,s){let n=t-1;return s&&n<0&&(n=e),n}const V=typeof window<"u"?m.useLayoutEffect:m.useEffect,K=t=>t;var Te=Object.defineProperty,ke=(t,e,s)=>e in t?Te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e,s)=>(ke(t,typeof e!="symbol"?e+"":e,s),s);class Me{constructor(){p(this,"descendants",new Map),p(this,"register",e=>{if(e!=null)return je(e)?this.registerNode(e):s=>{this.registerNode(s,e)}}),p(this,"unregister",e=>{this.descendants.delete(e);const s=W(Array.from(this.descendants.keys()));this.assignIndex(s)}),p(this,"destroy",()=>{this.descendants.clear()}),p(this,"assignIndex",e=>{this.descendants.forEach(s=>{const n=e.indexOf(s.node);s.index=n,s.node.dataset.index=s.index.toString()})}),p(this,"count",()=>this.descendants.size),p(this,"enabledCount",()=>this.enabledValues().length),p(this,"values",()=>Array.from(this.descendants.values()).sort((s,n)=>s.index-n.index)),p(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),p(this,"item",e=>{if(this.count()!==0)return this.values()[e]}),p(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]}),p(this,"first",()=>this.item(0)),p(this,"firstEnabled",()=>this.enabledItem(0)),p(this,"last",()=>this.item(this.descendants.size-1)),p(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)}),p(this,"indexOf",e=>{var s;return e?((s=this.descendants.get(e))==null?void 0:s.index)??-1:-1}),p(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(s=>s.node.isSameNode(e))),p(this,"next",(e,s=!0)=>{const n=z(e,this.count(),s);return this.item(n)}),p(this,"nextEnabled",(e,s=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),r=z(o,this.enabledCount(),s);return this.enabledItem(r)}),p(this,"prev",(e,s=!0)=>{const n=J(e,this.count()-1,s);return this.item(n)}),p(this,"prevEnabled",(e,s=!0)=>{const n=this.item(e);if(!n)return;const o=this.enabledIndexOf(n.node),r=J(o,this.enabledCount()-1,s);return this.enabledItem(r)}),p(this,"registerNode",(e,s)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),o=W(n);s!=null&&s.disabled&&(s.disabled=!!s.disabled);const r={node:e,index:-1,...s};this.descendants.set(e,r),this.assignIndex(o)})}}function Fe(){const[t,e]=T({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});return[t,e,()=>{const o=m.useRef(new Me);return V(()=>()=>o.current.destroy()),o.current},o=>{const r=e(),[c,l]=m.useState(-1),d=m.useRef(null);V(()=>()=>{d.current&&r.unregister(d.current)},[]),V(()=>{if(!d.current)return;const i=Number(d.current.dataset.index);c!=i&&!Number.isNaN(i)&&l(i)});const u=K(o?r.register(o):r.register);return{descendants:r,index:c,enabledIndex:r.enabledIndexOf(d.current),register:Q(u,d)}}]}const[Re,M]=T({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Ve,L]=T({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[Le,ct,Ue,Be]=Fe();function $e(t){const{onChange:e,defaultIndex:s,index:n,allowMultiple:o,allowToggle:r,...c}=t;We(t),ze(t);const l=Ue(),[d,u]=m.useState(-1);m.useEffect(()=>()=>{u(-1)},[]);const[i,x]=De({value:n,defaultValue(){return o?s??[]:s??-1},onChange:e});return{index:i,setIndex:x,htmlProps:c,getAccordionItemProps:f=>{let b=!1;return f!==null&&(b=Array.isArray(i)?i.includes(f):i===f),{isOpen:b,onChange:h=>{if(f!==null)if(o&&Array.isArray(i)){const N=h?i.concat(f):i.filter(S=>S!==f);x(N)}else h?x(f):r&&x(-1)}}},focusedIndex:d,setFocusedIndex:u,descendants:l}}const[Ge,U]=T({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function He(t){const{isDisabled:e,isFocusable:s,id:n,...o}=t,{getAccordionItemProps:r,setFocusedIndex:c}=U(),l=m.useRef(null),d=m.useId(),u=n??d,i=`accordion-button-${u}`,x=`accordion-panel-${u}`;Je(t);const{register:g,index:f,descendants:b}=Be({disabled:e&&!s}),{isOpen:I,onChange:h}=r(f===-1?null:f);Ke({isOpen:I,isDisabled:e});const N=()=>{h==null||h(!0)},S=()=>{h==null||h(!1)},D=m.useCallback(()=>{h==null||h(!I),c(f)},[f,c,I,h]),B=m.useCallback(O=>{const v={ArrowDown:()=>{const y=b.nextEnabled(f);y==null||y.node.focus()},ArrowUp:()=>{const y=b.prevEnabled(f);y==null||y.node.focus()},Home:()=>{const y=b.firstEnabled();y==null||y.node.focus()},End:()=>{const y=b.lastEnabled();y==null||y.node.focus()}}[O.key];v&&(O.preventDefault(),v(O))},[b,f]),$=m.useCallback(()=>{c(f)},[c,f]),me=m.useCallback(function(w={},v=null){return{...w,type:"button",ref:Q(g,l,v),id:i,disabled:!!e,"aria-expanded":!!I,"aria-controls":x,onClick:R(w.onClick,D),onFocus:R(w.onFocus,$),onKeyDown:R(w.onKeyDown,B)}},[i,e,I,D,$,B,x,g]),xe=m.useCallback(function(w={},v=null){return{...w,ref:v,role:"region",id:x,"aria-labelledby":i,hidden:!I}},[i,I,x]);return{isOpen:I,isDisabled:e,isFocusable:s,onOpen:N,onClose:S,getButtonProps:me,getPanelProps:xe,htmlProps:o}}function We(t){const e=t.index||t.defaultIndex,s=e!=null&&!Array.isArray(e)&&t.allowMultiple;_({condition:!!s,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof e},`})}function ze(t){_({condition:!!(t.allowMultiple&&t.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function Je(t){_({condition:!!(t.isFocusable&&!t.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Ke(t){_({condition:t.isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"})}const ne=E(function({children:e,reduceMotion:s,...n},o){const r=pe("Accordion",n),c=X(n),{htmlProps:l,descendants:d,...u}=$e(c),i=m.useMemo(()=>({...u,reduceMotion:!!s}),[u,s]);return a.jsx(Le,{value:d,children:a.jsx(Ge,{value:i,children:a.jsx(Re,{value:r,children:a.jsx(C.div,{ref:o,...l,className:A("chakra-accordion",n.className),__css:r.root,children:e})})})})});ne.displayName="Accordion";const oe=E(function(e,s){const{getButtonProps:n}=L(),o=n(e,s),c={display:"flex",alignItems:"center",width:"100%",outline:0,...M().button};return a.jsx(C.button,{...o,className:A("chakra-accordion__button",e.className),__css:c})});oe.displayName="AccordionButton";function re(t){const{isOpen:e,isDisabled:s}=L(),{reduceMotion:n}=U(),o=A("chakra-accordion__icon",t.className),r=M(),c={opacity:s?.4:1,transform:e?"rotate(-180deg)":void 0,transition:n?void 0:"transform 0.2s",transformOrigin:"center",...r.icon};return a.jsx(ge,{viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:c,...t,children:a.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}re.displayName="AccordionIcon";const ce=E(function(e,s){const{children:n,className:o}=e,{htmlProps:r,...c}=He(e),l=M(),d=be({...l.container,overflowAnchor:"none"}),u=m.useMemo(()=>c,[c]);return a.jsx(Ve,{value:u,children:a.jsx(C.div,{ref:s,...r,className:A("chakra-accordion__item",o),__css:d,children:typeof n=="function"?n({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):n})})});ce.displayName="AccordionItem";const P={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Y={enter:{duration:.2,ease:P.easeOut},exit:{duration:.1,ease:P.easeIn}},j={enter:(t,e)=>({...t,delay:typeof e=="number"?e:e==null?void 0:e.enter}),exit:(t,e)=>({...t,delay:typeof e=="number"?e:e==null?void 0:e.exit})},Ye=t=>t!=null&&parseInt(t.toString(),10)>0,q={exit:{height:{duration:.2,ease:P.ease},opacity:{duration:.3,ease:P.ease}},enter:{height:{duration:.3,ease:P.ease},opacity:{duration:.4,ease:P.ease}}},qe={exit:({animateOpacity:t,startingHeight:e,transition:s,transitionEnd:n,delay:o})=>({...t&&{opacity:Ye(e)?1:0},height:e,transitionEnd:n==null?void 0:n.exit,transition:(s==null?void 0:s.exit)??j.exit(q.exit,o)}),enter:({animateOpacity:t,endingHeight:e,transition:s,transitionEnd:n,delay:o})=>({...t&&{opacity:1},height:e,transitionEnd:n==null?void 0:n.enter,transition:(s==null?void 0:s.enter)??j.enter(q.enter,o)})},ie=m.forwardRef((t,e)=>{const{in:s,unmountOnExit:n,animateOpacity:o=!0,startingHeight:r=0,endingHeight:c="auto",style:l,className:d,transition:u,transitionEnd:i,animatePresenceProps:x,...g}=t,[f,b]=m.useState(!1);m.useEffect(()=>{const D=setTimeout(()=>{b(!0)});return()=>clearTimeout(D)},[]),_({condition:Number(r)>0&&!!n,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const I=parseFloat(r.toString())>0,h={startingHeight:r,endingHeight:c,animateOpacity:o,transition:f?u:{enter:{duration:0}},transitionEnd:{enter:i==null?void 0:i.enter,exit:n?i==null?void 0:i.exit:{...i==null?void 0:i.exit,display:I?"block":"none"}}},N=n?s:!0,S=s||n?"enter":"exit";return a.jsx(Z,{...x,initial:!1,custom:h,children:N&&a.jsx(ee.div,{ref:e,...g,className:A("chakra-collapse",d),style:{overflow:"hidden",display:"block",...l},custom:h,variants:qe,initial:n?"exit":!1,animate:S,exit:"exit"})})});ie.displayName="Collapse";const ae=E(function(e,s){const{className:n,motionProps:o,...r}=e,{reduceMotion:c}=U(),{getPanelProps:l,isOpen:d}=L(),u=l(r,s),i=A("chakra-accordion__panel",n),x=M();c||delete u.hidden;const g=a.jsx(C.div,{...u,__css:x.panel,className:i});return c?g:a.jsx(ie,{in:d,...o,children:g})});ae.displayName="AccordionPanel";const le=C("div");le.displayName="Box";const de=E(function(e,s){const{direction:n,align:o,justify:r,wrap:c,basis:l,grow:d,shrink:u,...i}=e,x={display:"flex",flexDirection:n,alignItems:o,justifyContent:r,flexWrap:c,flexBasis:l,flexGrow:d,flexShrink:u};return a.jsx(C.div,{ref:s,__css:x,...i})});de.displayName="Flex";const Qe={enter:({transition:t,transitionEnd:e,delay:s}={})=>({opacity:1,transition:(t==null?void 0:t.enter)??j.enter(Y.enter,s),transitionEnd:e==null?void 0:e.enter}),exit:({transition:t,transitionEnd:e,delay:s}={})=>({opacity:0,transition:(t==null?void 0:t.exit)??j.exit(Y.exit,s),transitionEnd:e==null?void 0:e.exit})},Xe={initial:"exit",animate:"enter",exit:"exit",variants:Qe},ue=m.forwardRef(function(e,s){const{unmountOnExit:n,in:o,className:r,transition:c,transitionEnd:l,delay:d,animatePresenceProps:u,...i}=e,x=o||n?"enter":"exit",g=n?o&&n:!0,f={transition:c,transitionEnd:l,delay:d};return a.jsx(Z,{...u,custom:f,children:g&&a.jsx(ee.div,{ref:s,className:A("chakra-fade",r),custom:f,...Xe,animate:x,...i})})});ue.displayName="Fade";const fe=E(function(e,s){const n=Ie("Text",e),{className:o,align:r,decoration:c,casing:l,...d}=X(e),u=Ne({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.jsx(C.p,{ref:s,className:A("chakra-text",e.className),...u,...d,__css:n})});fe.displayName="Text";const Ze=t=>{const e=k.c(7),{children:s,sidebar:n}=t;let o;e[0]!==n?(o=a.jsx(G,{bgColor:"black",borderRight:"1px solid",borderColor:"blue.800",px:4,h:"full",overflow:"auto",children:n}),e[0]=n,e[1]=o):o=e[1];let r;e[2]!==s?(r=a.jsx(G,{overflow:"auto",children:s}),e[2]=s,e[3]=r):r=e[3];let c;return e[4]!==o||e[5]!==r?(c=a.jsxs(ye,{gridTemplateColumns:"250px 1fr",h:"full",w:"full",overflow:"hidden",children:[o,r]}),e[4]=o,e[5]=r,e[6]=c):c=e[6],c};var he=(t=>(t.SelectedEpisode="selectedEpisode",t))(he||{});const et=(t,e={})=>{const s=()=>{const l=window.localStorage.getItem(t);if(!l)return{};try{return JSON.parse(l)}catch{return{}}},[n,o]=m.useState(()=>s()),r=l=>{o(l),window.localStorage.setItem(t,JSON.stringify(l))},c=m.useCallback(l=>{l.key===t&&l.newValue&&JSON.parse(l.newValue)!==n&&o(JSON.parse(l.newValue)||e)},[t,e,n]);return m.useEffect(()=>(window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)),[c]),[n,r]},tt=()=>{const t=k.c(17),e=Se(),[s,n]=et(he.SelectedEpisode);let o;t[0]!==e||t[1]!==s?(o=()=>{if(s.season&&s.episode){const{season:h,episode:N}=s;e(H({season:h,episode:N}))}},t[0]=e,t[1]=s,t[2]=o):o=t[2];let r;t[3]===Symbol.for("react.memo_cache_sentinel")?(r=[],t[3]=r):r=t[3],m.useEffect(o,r);const{selectedSeason:c,selectedEpisode:l}=te(se.getSelectedEpisodeAndSeason);let d;t[4]!==e||t[5]!==n?(d=(h,N)=>{e(H({season:N,episode:h})),n({season:N,episode:h})},t[4]=e,t[5]=n,t[6]=d):d=t[6];const u=d;let i;t[7]!==l||t[8]!==c?(i=(h,N)=>c===N&&l===h,t[7]=l,t[8]=c,t[9]=i):i=t[9];const x=i;let g;t[10]===Symbol.for("react.memo_cache_sentinel")?(g=a.jsx(Pe,{size:"sm",p:2,pt:6,color:"yellow.500",children:"Choose episode"}),t[10]=g):g=t[10];const f=s.season-1||c-1;let b;t[11]!==u||t[12]!==x?(b=ve.map(h=>a.jsxs(ce,{children:[a.jsx("h2",{children:a.jsxs(oe,{children:[a.jsx(le,{as:"span",flex:"1",textAlign:"left",children:a.jsx(fe,{color:"teal.500",fontWeight:"medium",children:`Season ${h.season}`})}),a.jsx(re,{color:"yellow.500"})]})}),a.jsx(ae,{px:0,children:h.episodes.map((N,S)=>a.jsx(Ae,{label:N,placement:"right",children:a.jsx(de,{role:"button",onClick:()=>u(S+1,h.season),p:1,px:4,borderRadius:5,w:"full",bgColor:x(S+1,h.season)?"gray.700":"black",_hover:{bgColor:"gray.700"},color:"yellow.400",overflow:"hidden",noOfLines:1,children:`Episode ${S+1}: ${N}`},S)},S))})]},h.season)),t[11]=u,t[12]=x,t[13]=b):b=t[13];let I;return t[14]!==f||t[15]!==b?(I=a.jsx(ue,{in:!0,children:a.jsxs(we,{children:[g,a.jsx(ne,{borderColor:"yellow.500",defaultIndex:f,children:b})]})}),t[14]=f,t[15]=b,t[16]=I):I=t[16],I},st=()=>{const t=k.c(3),{selectedSeason:e,selectedEpisode:s}=te(se.getSelectedEpisodeAndSeason);let n;return t[0]!==s||t[1]!==e?(n=a.jsx(Ee,{header:a.jsx(Oe,{episode:s,season:e}),children:a.jsx(_e,{season:e,episode:s})}),t[0]=s,t[1]=e,t[2]=n):n=t[2],n},it=()=>{const t=k.c(1);m.useEffect(nt);let e;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=a.jsx(Ze,{sidebar:a.jsx(tt,{}),children:a.jsx(st,{})}),t[0]=e):e=t[0],e};function nt(){Ce("/episodes")}export{it as default};
