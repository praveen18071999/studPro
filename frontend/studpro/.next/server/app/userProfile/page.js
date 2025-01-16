(()=>{var e={};e.id=21,e.ids=[21],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},92857:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=r(70260),s=r(28203),l=r(25155),n=r.n(l),o=r(67292),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["userProfile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,99479)),"/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/userProfile/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9472)),"/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/userProfile/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,19611)),"/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/userProfile/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/userProfile/page",pathname:"/userProfile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},48957:(e,t,r)=>{Promise.resolve().then(r.bind(r,99479))},44221:(e,t,r)=>{Promise.resolve().then(r.bind(r,72873))},96487:()=>{},78335:()=>{},72873:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var a=r(45512),s=r(79334),l=r(87021),n=r(97643),o=r(25409),i=r(47699),d=r(58009),c=r(70801),u=r(77373);function p(){let{user:e,isEditing:t,handleUserEdit:r,handleUserSave:s,setUser:p}=function(){let[e,t]=(0,d.useState)(),[r,a]=(0,d.useState)(!1),{toast:s}=(0,c.dj)();return{user:e,isEditing:r,setUser:t,handleUserEdit:()=>{a(!r)},handleUserSave:()=>{fetch(u.A.UPDATE_USER,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`},body:JSON.stringify(e)}).then(e=>{e.json().then(e=>{console.log(e),"Unauthorized"==e.message&&401==e.statusCode?(localStorage.removeItem("access_token"),window.location.href="/authentication"):500==e.statusCode?s({title:"Error",description:"User with Email already exists",variant:"destructive"}):(a(!1),s({title:"Success",description:"Updated user successfully!"}))})}).catch(e=>{s({title:"Error",description:"Failed to update user",variant:"destructive"})}),console.log("Saving user data:",e)}}}();return(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsxs)(n.ZB,{className:"flex justify-between items-center",children:["User Profile",(0,a.jsx)(l.$,{onClick:t?s:r,children:t?"Save":"Edit"})]})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(i.J,{htmlFor:"name",children:"Name:"}),(0,a.jsx)(o.p,{id:"name",value:e?.name||"",onChange:t=>p({...e,name:t.target.value,email:e?.email||"",phoneNumber:e?.phoneNumber||""}),disabled:!t})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.J,{htmlFor:"email",children:"Email:"}),(0,a.jsx)(o.p,{id:"email",value:e?.email||"",onChange:t=>p({...e,email:t.target.value,name:e?.name||"",phoneNumber:e?.phoneNumber||""}),disabled:!t})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.J,{htmlFor:"phone",children:"Phone:"}),(0,a.jsx)(o.p,{id:"phone",value:e?.phoneNumber||"",onChange:t=>p({...e,phoneNumber:t.target.value,name:e?.name||"",email:e?.email||""}),disabled:!t})]})]})})]})}var m=r(13393),h=r(54069),f=r(29952),x=r(6004),b=r(31412),j=r(13024),v=r(66582),g=r(38762),y=r(98060),w=r(30830),N="Checkbox",[P,k]=(0,x.A)(N),[C,R]=P(N),A=d.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:s,checked:l,defaultChecked:n,required:o,disabled:i,value:c="on",onCheckedChange:u,form:p,...m}=e,[h,x]=d.useState(null),v=(0,f.s)(t,e=>x(e)),g=d.useRef(!1),y=!h||p||!!h.closest("form"),[N=!1,P]=(0,j.i)({prop:l,defaultProp:n,onChange:u}),k=d.useRef(N);return d.useEffect(()=>{let e=h?.form;if(e){let t=()=>P(k.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[h,P]),(0,a.jsxs)(C,{scope:r,state:N,disabled:i,children:[(0,a.jsx)(w.sG.button,{type:"button",role:"checkbox","aria-checked":M(N)?"mixed":N,"aria-required":o,"data-state":D(N),"data-disabled":i?"":void 0,disabled:i,value:c,...m,ref:v,onKeyDown:(0,b.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,b.m)(e.onClick,e=>{P(e=>!!M(e)||!e),y&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})}),y&&(0,a.jsx)(_,{control:h,bubbles:!g.current,name:s,value:c,checked:N,required:o,disabled:i,form:p,style:{transform:"translateX(-100%)"},defaultChecked:!M(n)&&n})]})});A.displayName=N;var E="CheckboxIndicator",S=d.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...l}=e,n=R(E,r);return(0,a.jsx)(y.C,{present:s||M(n.state)||!0===n.state,children:(0,a.jsx)(w.sG.span,{"data-state":D(n.state),"data-disabled":n.disabled?"":void 0,...l,ref:t,style:{pointerEvents:"none",...e.style}})})});S.displayName=E;var _=e=>{let{control:t,checked:r,bubbles:s=!0,defaultChecked:l,...n}=e,o=d.useRef(null),i=(0,v.Z)(r),c=(0,g.X)(t);d.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(i!==r&&t){let a=new Event("click",{bubbles:s});e.indeterminate=M(r),t.call(e,!M(r)&&r),e.dispatchEvent(a)}},[i,r,s]);let u=d.useRef(!M(r)&&r);return(0,a.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:l??u.current,...n,tabIndex:-1,ref:o,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function M(e){return"indeterminate"===e}function D(e){return M(e)?"indeterminate":e?"checked":"unchecked"}var L=r(24849),T=r(59462);let U=d.forwardRef(({className:e,...t},r)=>(0,a.jsx)(A,{ref:r,className:(0,T.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,a.jsx)(S,{className:(0,T.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(L.A,{className:"h-4 w-4"})})}));U.displayName=A.displayName;var O=r(41680);let H=(0,O.A)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),I=(0,O.A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),q=(0,O.A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),F=(0,O.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),B=Array.from({length:50},(e,t)=>({id:t+1,name:`Problem ${t+1}`,createdAt:new Date(2023,4,t+1).toISOString().split("T")[0],level:["Easy","Medium","Hard"][Math.floor(3)],isPublished:!0,marks:Math.floor(50)+1}));function z(){let{problems:e,selectedRows:t,currentPage:r,maxPage:s,totalProblems:o,setCurrentPage:i,setFilterLevel:c,setFilterPublished:u,handleRowSelect:p,handleSelectAll:f,handleEdit:x,handleDelete:b}=function(){let[e,t]=(0,d.useState)(B),[r,a]=(0,d.useState)([]),[s,l]=(0,d.useState)(1),[n,o]=(0,d.useState)(null),[i,c]=(0,d.useState)(null),u=Math.ceil(e.length/10),p=e.filter(e=>("all"===n||null===n||e.level===n)&&(null===i||e.isPublished===i)),m=p.slice((s-1)*10,10*s);return{problems:m,selectedRows:r,currentPage:s,filterLevel:n,filterPublished:i,maxPage:u,totalProblems:p.length,setCurrentPage:l,setFilterLevel:o,setFilterPublished:c,handleRowSelect:e=>{a(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},handleSelectAll:()=>{r.length===m.length?a([]):a(m.map(e=>e.id))},handleEdit:e=>{console.log(`Editing problem with id: ${e}`)},handleDelete:e=>{console.log(`Deleting problem with id: ${e}`)}}}();return(0,a.jsxs)(n.Zp,{children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Problems List"})}),(0,a.jsxs)(n.Wu,{children:[(0,a.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,a.jsxs)(h.l6,{onValueChange:e=>c(e),children:[(0,a.jsx)(h.bq,{className:"w-[180px]",children:(0,a.jsx)(h.yv,{placeholder:"Filter by Level"})}),(0,a.jsxs)(h.gC,{children:[(0,a.jsx)(h.eb,{value:"all",children:"All Levels"}),(0,a.jsx)(h.eb,{value:"Easy",children:"Easy"}),(0,a.jsx)(h.eb,{value:"Medium",children:"Medium"}),(0,a.jsx)(h.eb,{value:"Hard",children:"Hard"})]})]}),(0,a.jsxs)(h.l6,{onValueChange:e=>u("true"===e||"false"!==e&&null),children:[(0,a.jsx)(h.bq,{className:"w-[180px]",children:(0,a.jsx)(h.yv,{placeholder:"Filter by Published"})}),(0,a.jsxs)(h.gC,{children:[(0,a.jsx)(h.eb,{value:"all",children:"All"}),(0,a.jsx)(h.eb,{value:"true",children:"Published"}),(0,a.jsx)(h.eb,{value:"false",children:"Not Published"})]})]})]}),(0,a.jsxs)(m.XI,{children:[(0,a.jsx)(m.A0,{children:(0,a.jsxs)(m.Hj,{children:[(0,a.jsx)(m.nd,{className:"w-[50px]",children:(0,a.jsx)(U,{checked:t.length===e.length,onCheckedChange:f,"aria-label":"Select all"})}),(0,a.jsx)(m.nd,{children:"ID"}),(0,a.jsx)(m.nd,{children:"Problem"}),(0,a.jsx)(m.nd,{children:"Created At"}),(0,a.jsx)(m.nd,{children:"Level"}),(0,a.jsx)(m.nd,{children:"Published"}),(0,a.jsx)(m.nd,{children:"Marks"}),(0,a.jsx)(m.nd,{children:"Actions"})]})}),(0,a.jsx)(m.BF,{children:e.map(e=>(0,a.jsxs)(m.Hj,{className:t.includes(e.id)?"bg-muted":"",children:[(0,a.jsx)(m.nA,{children:(0,a.jsx)(U,{checked:t.includes(e.id),onCheckedChange:()=>p(e.id),"aria-label":`Select problem ${e.id}`})}),(0,a.jsx)(m.nA,{children:e.id}),(0,a.jsx)(m.nA,{children:e.name}),(0,a.jsx)(m.nA,{children:e.createdAt}),(0,a.jsx)(m.nA,{children:e.level}),(0,a.jsx)(m.nA,{children:e.isPublished?"Yes":"No"}),(0,a.jsx)(m.nA,{children:e.marks}),(0,a.jsx)(m.nA,{children:(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)(l.$,{variant:"outline",size:"icon",onClick:()=>x(e.id),children:(0,a.jsx)(H,{className:"h-4 w-4"})}),(0,a.jsx)(l.$,{variant:"outline",size:"icon",onClick:()=>b(e.id),children:(0,a.jsx)(I,{className:"h-4 w-4"})})]})})]},e.id))})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[(0,a.jsxs)("div",{children:["Showing ",(r-1)*10+1," to ",Math.min(10*r,o)," of ",o," entries"]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)(l.$,{variant:"outline",size:"icon",onClick:()=>i(e=>Math.max(e-1,1)),disabled:1===r,children:(0,a.jsx)(q,{className:"h-4 w-4"})}),(0,a.jsx)(l.$,{variant:"outline",size:"icon",onClick:()=>i(e=>Math.min(e+1,s)),disabled:r===s,children:(0,a.jsx)(F,{className:"h-4 w-4"})})]})]})]})]})}function G(){return(0,s.useRouter)(),(0,a.jsxs)("div",{className:"container mx-auto p-4 space-y-6",children:[(0,a.jsx)(p,{}),(0,a.jsx)(z,{})]})}},97643:(e,t,r)=>{"use strict";r.d(t,{Wu:()=>d,ZB:()=>i,Zp:()=>n,aR:()=>o});var a=r(45512),s=r(58009),l=r(59462);let n=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));n.displayName="Card";let o=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...t}));o.displayName="CardHeader";let i=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("font-semibold leading-none tracking-tight",e),...t}));i.displayName="CardTitle",s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let d=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent",s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},25409:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var a=r(45512),s=r(58009),l=r(59462);let n=s.forwardRef(({className:e,type:t,...r},s)=>(0,a.jsx)("input",{type:t,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...r}));n.displayName="Input"},47699:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var a=r(45512),s=r(58009),l=r(92405),n=r(21643),o=r(59462);let i=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l.b,{ref:r,className:(0,o.cn)(i(),e),...t}));d.displayName=l.b.displayName},54069:(e,t,r)=>{"use strict";r.d(t,{bq:()=>p,eb:()=>x,gC:()=>f,l6:()=>c,yv:()=>u});var a=r(45512),s=r(58009),l=r(38985),n=r(98755),o=r(28638),i=r(24849),d=r(59462);let c=l.bL;l.YJ;let u=l.WT,p=s.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(l.l9,{ref:s,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[t,(0,a.jsx)(l.In,{asChild:!0,children:(0,a.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]}));p.displayName=l.l9.displayName;let m=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l.PP,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(o.A,{className:"h-4 w-4"})}));m.displayName=l.PP.displayName;let h=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l.wn,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(n.A,{className:"h-4 w-4"})}));h.displayName=l.wn.displayName;let f=s.forwardRef(({className:e,children:t,position:r="popper",...s},n)=>(0,a.jsx)(l.ZL,{children:(0,a.jsxs)(l.UC,{ref:n,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...s,children:[(0,a.jsx)(m,{}),(0,a.jsx)(l.LM,{className:(0,d.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,a.jsx)(h,{})]})}));f.displayName=l.UC.displayName,s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l.JU,{ref:r,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=l.JU.displayName;let x=s.forwardRef(({className:e,children:t,...r},s)=>(0,a.jsxs)(l.q7,{ref:s,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(l.VF,{children:(0,a.jsx)(i.A,{className:"h-4 w-4"})})}),(0,a.jsx)(l.p4,{children:t})]}));x.displayName=l.q7.displayName,s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l.wv,{ref:r,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=l.wv.displayName},13393:(e,t,r)=>{"use strict";r.d(t,{A0:()=>o,BF:()=>i,Hj:()=>d,XI:()=>n,nA:()=>u,nd:()=>c});var a=r(45512),s=r(58009),l=r(59462);let n=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:r,className:(0,l.cn)("w-full caption-bottom text-sm",e),...t})}));n.displayName="Table";let o=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("thead",{ref:r,className:(0,l.cn)("[&_tr]:border-b",e),...t}));o.displayName="TableHeader";let i=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tbody",{ref:r,className:(0,l.cn)("[&_tr:last-child]:border-0",e),...t}));i.displayName="TableBody",s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tfoot",{ref:r,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let d=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("tr",{ref:r,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));d.displayName="TableRow";let c=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("th",{ref:r,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));c.displayName="TableHead";let u=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("td",{ref:r,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));u.displayName="TableCell",s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("caption",{ref:r,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption"},77373:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a={LOGIN:"http://localhost:3001/authentication/login",REGISTER:"http://localhost:3001/authentication/register",AUTHORED_PROBLEMS:"http://localhost:3001/dashboard/authoredProblems",PROBLEM_LEVEL_DASHBOARD_CHARTS:"http://localhost:3001/dashboard/getProblemLevelDashboardCharts",MONTHLY_SOLVED_PROBLEMS:"http://localhost:3001/dashboard/getMonthlySolvedProblems",FLOW_CHART:"http://localhost:3001/flowchart/convertToflowchart",PROBLEM_DATA:"http://localhost:3001/extractProblem/problemData",CHANGE_PROGRAM:"http://localhost:3001/problemCompile/changeProgram",COMPILE_AND_RUN:"http://localhost:3001/problemCompile/compileandrun",SUBMIT:"http://localhost:3001/problemCompile/submit",UPLOAD_FILE:"http://localhost:3001/problemCreation/uploadFile",CREATE_PROBLEM:"http://localhost:3001/problemCreation/createProblem",GET_USER:"http://localhost:3001/users/getUser",UPDATE_USER:"http://localhost:3001/users/updateUser",LEADERBOARD:"http://localhost:3001/leaderboard/getLeaderboard"}},9472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(62740);function s({children:e}){return(0,a.jsx)(a.Fragment,{children:e})}},99479:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/userProfile/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/praveenkumargangapuram/Desktop/Projects/studPro/frontend/studpro/app/userProfile/page.tsx","default")},46055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(88077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},92405:(e,t,r)=>{"use strict";r.d(t,{b:()=>o});var a=r(58009),s=r(30830),l=r(45512),n=a.forwardRef((e,t)=>(0,l.jsx)(s.sG.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));n.displayName="Label";var o=n}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,150,458,240,77],()=>r(92857));module.exports=a})();