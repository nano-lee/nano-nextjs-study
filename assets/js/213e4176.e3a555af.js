"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"route.js",description:"API reference for the route.js special file."},i=void 0,p={unversionedId:"app/api-reference/file-conventions/route",id:"app/api-reference/file-conventions/route",title:"route.js",description:"API reference for the route.js special file.",source:"@site/docs/02-app/02-api-reference/02-file-conventions/route.mdx",sourceDirName:"02-app/02-api-reference/02-file-conventions",slug:"/app/api-reference/file-conventions/route",permalink:"/docs/app/api-reference/file-conventions/route",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/02-file-conventions/route.mdx",tags:[],version:"current",frontMatter:{title:"route.js",description:"API reference for the route.js special file."},sidebar:"nextJsSidebar",previous:{title:"Route Segment Config",permalink:"/docs/app/api-reference/file-conventions/route-segment-config"},next:{title:"template.js",permalink:"/docs/app/api-reference/file-conventions/template"}},l={},s=[{value:"HTTP Methods",id:"http-methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>request</code> (optional)",id:"request-optional",level:3},{value:"<code>context</code> (optional)",id:"context-optional",level:3},{value:"NextResponse",id:"nextresponse",level:2},{value:"Version History",id:"version-history",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Route Handlers allow you to create custom request handlers for a given route using the Web ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Request"},"Request")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Response"},"Response")," APIs."),(0,a.kt)("h2",{id:"http-methods"},"HTTP Methods"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"route")," file allows you to create custom request handlers for a given route. The following ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTTP/Methods"},"HTTP methods")," are supported: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="route.ts" switcher',filename:'"route.ts"',switcher:!0},"export async function GET(request: Request) {}\n\nexport async function HEAD(request: Request) {}\n\nexport async function POST(request: Request) {}\n\nexport async function PUT(request: Request) {}\n\nexport async function DELETE(request: Request) {}\n\nexport async function PATCH(request: Request) {}\n\n// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.\nexport async function OPTIONS(request: Request) {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="route.js" switcher',filename:'"route.js"',switcher:!0},"export async function GET(request) {}\n\nexport async function HEAD(request) {}\n\nexport async function POST(request) {}\n\nexport async function PUT(request) {}\n\nexport async function DELETE(request) {}\n\nexport async function PATCH(request) {}\n\n// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.\nexport async function OPTIONS(request) {}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": Route Handlers are only available inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory. You ",(0,a.kt)("strong",{parentName:"p"},"do not")," need to use API Routes (",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),") and Route Handlers (",(0,a.kt)("inlineCode",{parentName:"p"},"app"),") together, as Route Handlers should be able to handle all use cases.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"request-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"request")," (optional)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," object is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/next-request"},"NextRequest")," object, which is an extension of the Web ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Request"},"Request")," API. ",(0,a.kt)("inlineCode",{parentName:"p"},"NextRequest")," gives you further control over the incoming request, including easily accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies")," and an extended, parsed, URL object ",(0,a.kt)("inlineCode",{parentName:"p"},"nextUrl"),"."),(0,a.kt)("h3",{id:"context-optional"},(0,a.kt)("inlineCode",{parentName:"h3"},"context")," (optional)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/dashboard/[team]/route.js"',filename:'"app/dashboard/[team]/route.js"'},"export async function GET(request, context: { params }) {\n  const team = params.team // '1'\n}\n")),(0,a.kt)("p",null,"Currently, the only value of ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"params"),", which is an object containing the ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/dynamic-routes"},"dynamic route parameters")," for the current route."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"params")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app/dashboard/[team]/route.js")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/dashboard/1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ team: '1' }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app/shop/[tag]/[item]/route.js")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/shop/1/2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ tag: '1', item: '2' }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app/blog/[...slug]/route.js")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/blog/1/2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ slug: ['1', '2'] }"))))),(0,a.kt)("h2",{id:"nextresponse"},"NextResponse"),(0,a.kt)("p",null,"Route Handlers can extend the Web Response API by returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"NextResponse")," object. This allows you to easily set cookies, headers, redirect, and rewrite. ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/next-response"},"View the API reference"),"."),(0,a.kt)("h2",{id:"version-history"},"Version History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.2.0")),(0,a.kt)("td",{parentName:"tr",align:null},"Route handlers are introduced.")))))}d.isMDXComponent=!0}}]);