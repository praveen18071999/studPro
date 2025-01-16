"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{33565:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(67401).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},46195:(e,t,r)=>{r.d(t,{b:()=>u});var n=r(12115),o=r(23360),a=r(95155),i=n.forwardRef((e,t)=>(0,a.jsx)(o.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var u=i},17028:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(12115),o=r(88068),a=r(46611),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),l=n.useRef({}),s=n.useRef(e),d=n.useRef("none"),[c,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=u(l.current);d.current="mounted"===c?e:"none"},[c]),(0,a.N)(()=>{let t=l.current,r=s.current;if(r!==e){let n=d.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=u(l.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(d.current=u(l.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:n.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),l="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),s=(0,o.s)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof r||i.isPresent?n.cloneElement(l,{ref:s}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},852:(e,t,r)=>{r.d(t,{C1:()=>U,bL:()=>P,q7:()=>S});var n=r(12115),o=r(93610),a=r(88068),i=r(18166),u=r(23360),l=r(67357),s=r(1488),d=r(4256),c=r(7510),f=r(50858),p=r(17028),m=r(95155),v="Radio",[w,y]=(0,i.A)(v),[b,g]=w(v),h=n.forwardRef((e,t)=>{let{__scopeRadio:r,name:i,checked:l=!1,required:s,disabled:d,value:c="on",onCheck:f,form:p,...v}=e,[w,y]=n.useState(null),g=(0,a.s)(t,e=>y(e)),h=n.useRef(!1),R=!w||p||!!w.closest("form");return(0,m.jsxs)(b,{scope:r,checked:l,disabled:d,children:[(0,m.jsx)(u.sG.button,{type:"button",role:"radio","aria-checked":l,"data-state":A(l),"data-disabled":d?"":void 0,disabled:d,value:c,...v,ref:g,onClick:(0,o.m)(e.onClick,e=>{l||null==f||f(),R&&(h.current=e.isPropagationStopped(),h.current||e.stopPropagation())})}),R&&(0,m.jsx)(E,{control:w,bubbles:!h.current,name:i,value:c,checked:l,required:s,disabled:d,form:p,style:{transform:"translateX(-100%)"}})]})});h.displayName=v;var R="RadioIndicator",N=n.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:n,...o}=e,a=g(R,r);return(0,m.jsx)(p.C,{present:n||a.checked,children:(0,m.jsx)(u.sG.span,{"data-state":A(a.checked),"data-disabled":a.disabled?"":void 0,...o,ref:t})})});N.displayName=R;var E=e=>{let{control:t,checked:r,bubbles:o=!0,...a}=e,i=n.useRef(null),u=(0,f.Z)(r),l=(0,c.X)(t);return n.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[u,r,o]),(0,m.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:i,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function A(e){return e?"checked":"unchecked"}var k=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],x="RadioGroup",[I,T]=(0,i.A)(x,[l.RG,y]),j=(0,l.RG)(),C=y(),[D,L]=I(x),M=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:n,defaultValue:o,value:a,required:i=!1,disabled:c=!1,orientation:f,dir:p,loop:v=!0,onValueChange:w,...y}=e,b=j(r),g=(0,d.jH)(p),[h,R]=(0,s.i)({prop:a,defaultProp:o,onChange:w});return(0,m.jsx)(D,{scope:r,name:n,required:i,disabled:c,value:h,onValueChange:R,children:(0,m.jsx)(l.bL,{asChild:!0,...b,orientation:f,dir:g,loop:v,children:(0,m.jsx)(u.sG.div,{role:"radiogroup","aria-required":i,"aria-orientation":f,"data-disabled":c?"":void 0,dir:g,...y,ref:t})})})});M.displayName=x;var F="RadioGroupItem",O=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:i,...u}=e,s=L(F,r),d=s.disabled||i,c=j(r),f=C(r),p=n.useRef(null),v=(0,a.s)(t,p),w=s.value===u.value,y=n.useRef(!1);return n.useEffect(()=>{let e=e=>{k.includes(e.key)&&(y.current=!0)},t=()=>y.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,m.jsx)(l.q7,{asChild:!0,...c,focusable:!d,active:w,children:(0,m.jsx)(h,{disabled:d,required:s.required,checked:w,...f,...u,name:s.name,ref:v,onCheck:()=>s.onValueChange(u.value),onKeyDown:(0,o.m)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,o.m)(u.onFocus,()=>{var e;y.current&&(null===(e=p.current)||void 0===e||e.click())})})})});O.displayName=F;var G=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...n}=e,o=C(r);return(0,m.jsx)(N,{...o,...n,ref:t})});G.displayName="RadioGroupIndicator";var P=M,S=O,U=G},67357:(e,t,r)=>{r.d(t,{RG:()=>R,bL:()=>C,q7:()=>D});var n=r(12115),o=r(93610),a=r(49741),i=r(88068),u=r(18166),l=r(67668),s=r(23360),d=r(41524),c=r(1488),f=r(4256),p=r(95155),m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},w="RovingFocusGroup",[y,b,g]=(0,a.N)(w),[h,R]=(0,u.A)(w,[g]),[N,E]=h(w),A=n.forwardRef((e,t)=>(0,p.jsx)(y.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(y.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(k,{...e,ref:t})})}));A.displayName=w;var k=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:u=!1,dir:l,currentTabStopId:w,defaultCurrentTabStopId:y,onCurrentTabStopIdChange:g,onEntryFocus:h,preventScrollOnEntryFocus:R=!1,...E}=e,A=n.useRef(null),k=(0,i.s)(t,A),x=(0,f.jH)(l),[I=null,T]=(0,c.i)({prop:w,defaultProp:y,onChange:g}),[C,D]=n.useState(!1),L=(0,d.c)(h),M=b(r),F=n.useRef(!1),[O,G]=n.useState(0);return n.useEffect(()=>{let e=A.current;if(e)return e.addEventListener(m,L),()=>e.removeEventListener(m,L)},[L]),(0,p.jsx)(N,{scope:r,orientation:a,dir:x,loop:u,currentTabStopId:I,onItemFocus:n.useCallback(e=>T(e),[T]),onItemShiftTab:n.useCallback(()=>D(!0),[]),onFocusableItemAdd:n.useCallback(()=>G(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>G(e=>e-1),[]),children:(0,p.jsx)(s.sG.div,{tabIndex:C||0===O?-1:0,"data-orientation":a,...E,ref:k,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!C){let t=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=M().filter(e=>e.focusable);j([e.find(e=>e.active),e.find(e=>e.id===I),...e].filter(Boolean).map(e=>e.ref.current),R)}}F.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>D(!1))})})}),x="RovingFocusGroupItem",I=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:u,...d}=e,c=(0,l.B)(),f=u||c,m=E(x,r),v=m.currentTabStopId===f,w=b(r),{onFocusableItemAdd:g,onFocusableItemRemove:h}=m;return n.useEffect(()=>{if(a)return g(),()=>h()},[a,g,h]),(0,p.jsx)(y.ItemSlot,{scope:r,id:f,focusable:a,active:i,children:(0,p.jsx)(s.sG.span,{tabIndex:v?0:-1,"data-orientation":m.orientation,...d,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?m.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>m.onItemFocus(f)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=w().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=m.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>j(r))}})})})});I.displayName=x;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function j(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var C=A,D=I}}]);