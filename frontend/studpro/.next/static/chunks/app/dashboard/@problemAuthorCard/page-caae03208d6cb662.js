(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{3825:(e,t,r)=>{Promise.resolve().then(r.bind(r,86487))},86487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(95155),o=r(76046),l=r(35007),s=r(14085);function a(){let e=(0,o.useRouter)();return(0,n.jsxs)(l.Zp,{children:[(0,n.jsx)(l.aR,{children:(0,n.jsx)(l.ZB,{children:"View Flow Chart of Your Code"})}),(0,n.jsxs)(l.Wu,{children:[(0,n.jsx)("p",{className:"mb-4",children:"VAn interactive chart visually represents the flow of your code, illustrating the logical sequence and structure. It highlights key decision points, loops, and function calls. This tool aids in understanding and debugging your code by providing a clear, graphical overview."}),(0,n.jsx)(s.$,{onClick:()=>{e.push("/flowchart")},children:"View Flow Chart"})]})]})}function i(){let e=(0,o.useRouter)();return(0,n.jsxs)(l.Zp,{children:[(0,n.jsx)(l.aR,{children:(0,n.jsx)(l.ZB,{children:"View the global Leaderboard"})}),(0,n.jsxs)(l.Wu,{children:[(0,n.jsx)("p",{className:"mb-4",children:"The global leaderboard showcases the top coders based on points and problem-solving efficiency. It provides detailed rankings, scores, and performance insights. Your standings reflect your rank, total points, and accuracy compared to other competitors."}),(0,n.jsx)(s.$,{onClick:()=>{e.push("/leaderboard")},children:"Leaderboard"})]})]})}var d=r(12115),c=r(167);function u(){let e=(0,o.useRouter)(),{easy:t,medium:r,hard:u,total:h}=function(){let[e,t]=(0,d.useState)(),[r,n]=(0,d.useState)(),[o,l]=(0,d.useState)();return(0,d.useEffect)(()=>{fetch(c.A.AUTHORED_PROBLEMS,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}).then(e=>{e.json().then(e=>{var r,o,s;"Unauthorized"==e.message&&401==e.statusCode&&(localStorage.removeItem("access_token"),window.location.href="/authentication"),t(null===(r=e[0])||void 0===r?void 0:r.easy),n(null===(o=e[0])||void 0===o?void 0:o.medium),l(null===(s=e[0])||void 0===s?void 0:s.hard)})})},[]),{easy:e,medium:r,hard:o,total:(null!=e?e:0)+(null!=r?r:0)+(null!=o?o:0)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Zp,{children:[(0,n.jsx)(l.aR,{children:(0,n.jsx)(l.ZB,{children:"Problem Author"})}),(0,n.jsxs)(l.Wu,{children:[(0,n.jsxs)("p",{children:["You have authored ",h," problems"]}),(0,n.jsxs)("ul",{className:"list-disc list-inside mt-2 mb-4",children:[(0,n.jsxs)("li",{children:["Easy: ",t]}),(0,n.jsxs)("li",{children:["Medium: ",r]}),(0,n.jsxs)("li",{children:["Hard: ",u]})]}),(0,n.jsx)(s.$,{onClick:()=>{e.push("/problem-author")},children:"Author Problem"})]})]}),(0,n.jsx)(a,{}),(0,n.jsx)(i,{})]})}},14085:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var n=r(95155),o=r(12115),l=r(12317),s=r(31027),a=r(29602);let i=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:d=!1,...c}=e,u=d?l.DX:"button";return(0,n.jsx)(u,{className:(0,a.cn)(i({variant:o,size:s,className:r})),ref:t,...c})});d.displayName="Button"},35007:(e,t,r)=>{"use strict";r.d(t,{Wu:()=>d,ZB:()=>i,Zp:()=>s,aR:()=>a});var n=r(95155),o=r(12115),l=r(29602);let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...o})});s.displayName="Card";let a=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...o})});a.displayName="CardHeader";let i=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",r),...o})});i.displayName="CardTitle",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...o})}).displayName="CardDescription";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...o})});d.displayName="CardContent",o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...o})}).displayName="CardFooter"},29602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var n=r(43463),o=r(69795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}},76046:(e,t,r)=>{"use strict";var n=r(66658);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},167:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n={LOGIN:"http://localhost:3001/authentication/login",REGISTER:"http://localhost:3001/authentication/register",AUTHORED_PROBLEMS:"http://localhost:3001/dashboard/authoredProblems",PROBLEM_LEVEL_DASHBOARD_CHARTS:"http://localhost:3001/dashboard/getProblemLevelDashboardCharts",MONTHLY_SOLVED_PROBLEMS:"http://localhost:3001/dashboard/getMonthlySolvedProblems",FLOW_CHART:"http://localhost:3001/flowchart/convertToflowchart",PROBLEM_DATA:"http://localhost:3001/extractProblem/problemData",CHANGE_PROGRAM:"http://localhost:3001/problemCompile/changeProgram",COMPILE_AND_RUN:"http://localhost:3001/problemCompile/compileandrun",SUBMIT:"http://localhost:3001/problemCompile/submit",UPLOAD_FILE:"http://localhost:3001/problemCreation/uploadFile",CREATE_PROBLEM:"http://localhost:3001/problemCreation/createProblem",GET_USER:"http://localhost:3001/users/getUser",UPDATE_USER:"http://localhost:3001/users/updateUser",LEADERBOARD:"http://localhost:3001/leaderboard/getLeaderboard"}},88068:(e,t,r)=>{"use strict";r.d(t,{s:()=>s,t:()=>l});var n=r(12115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function l(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}function s(...e){return n.useCallback(l(...e),e)}},12317:(e,t,r)=>{"use strict";r.d(t,{DX:()=>s});var n=r(12115),o=r(88068),l=r(95155),s=n.forwardRef((e,t)=>{let{children:r,...o}=e,s=n.Children.toArray(r),i=s.find(d);if(i){let e=i.props.children,r=s.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,l.jsx)(a,{...o,ref:t,children:r})});s.displayName="Slot";var a=n.forwardRef((e,t)=>{let{children:r,...l}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n];/^on[A-Z]/.test(n)?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props),ref:t?(0,o.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";var i=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===i}},31027:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});var n=r(43463);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=n.$,s=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,i=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],n=null==a?void 0:a[e];if(null===t)return null;let l=o(t)||o(n);return s[e][l]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return l(e,i,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...d}[t]):({...a,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,441,517,358],()=>t(3825)),_N_E=e.O()}]);