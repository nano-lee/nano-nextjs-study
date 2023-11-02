"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={title:"not-found.js",description:"API reference for the not-found.js file."},i=void 0,p={unversionedId:"app/api-reference/file-conventions/not-found",id:"app/api-reference/file-conventions/not-found",title:"not-found.js",description:"API reference for the not-found.js file.",source:"@site/docs/02-app/02-api-reference/02-file-conventions/not-found.mdx",sourceDirName:"02-app/02-api-reference/02-file-conventions",slug:"/app/api-reference/file-conventions/not-found",permalink:"/docs/app/api-reference/file-conventions/not-found",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/02-file-conventions/not-found.mdx",tags:[],version:"current",frontMatter:{title:"not-found.js",description:"API reference for the not-found.js file."},sidebar:"tutorialSidebar",previous:{title:"loading.js",permalink:"/docs/app/api-reference/file-conventions/loading"},next:{title:"page.js",permalink:"/docs/app/api-reference/file-conventions/page"}},s={},l=[{value:"Props",id:"props",level:2},{value:"Data Fetching",id:"data-fetching",level:2},{value:"Version History",id:"version-history",level:2}],d={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"not-found")," file is used to render UI when the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/not-found"},(0,r.kt)("inlineCode",{parentName:"a"},"notFound"))," function is thrown within a route segment. Along with serving a custom UI, Next.js will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," HTTP status code for streamed responses, and ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," for non-streamed responses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/blog/not-found.tsx" switcher',filename:'"app/blog/not-found.tsx"',switcher:!0},"import Link from 'next/link'\n\nexport default function NotFound() {\n  return (\n    <div>\n      <h2>Not Found</h2>\n      <p>Could not find requested resource</p>\n      <Link href=\"/\">Return Home</Link>\n    </div>\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/blog/not-found.js" switcher',filename:'"app/blog/not-found.js"',switcher:!0},"import Link from 'next/link'\n\nexport default function NotFound() {\n  return (\n    <div>\n      <h2>Not Found</h2>\n      <p>Could not find requested resource</p>\n      <Link href=\"/\">Return Home</Link>\n    </div>\n  )\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": In addition to catching expected ",(0,r.kt)("inlineCode",{parentName:"p"},"notFound()")," errors, the root ",(0,r.kt)("inlineCode",{parentName:"p"},"app/not-found.js")," file also handles any unmatched URLs for your whole application. This means users that visit a URL that is not handled by your app will be shown the UI exported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/not-found.js")," file.")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"not-found.js")," components do not accept any props."),(0,r.kt)("h2",{id:"data-fetching"},"Data Fetching"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"not-found")," is a Server Component. You can mark it as ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," to fetch and display data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/blog/not-found.tsx" switcher',filename:'"app/blog/not-found.tsx"',switcher:!0},"import Link from 'next/link'\nimport { headers } from 'next/headers'\n\nexport default async function NotFound() {\n  const headersList = headers()\n  const domain = headersList.get('host')\n  const data = await getSiteData(domain)\n  return (\n    <div>\n      <h2>Not Found: {data.name}</h2>\n      <p>Could not find requested resource</p>\n      <p>\n        View <Link href=\"/blog\">all posts</Link>\n      </p>\n    </div>\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/blog/not-found.jsx" switcher',filename:'"app/blog/not-found.jsx"',switcher:!0},"import Link from 'next/link'\nimport { headers } from 'next/headers'\n\nexport default async function NotFound() {\n  const headersList = headers()\n  const domain = headersList.get('host')\n  const data = await getSiteData(domain)\n  return (\n    <div>\n      <h2>Not Found: {data.name}</h2>\n      <p>Could not find requested resource</p>\n      <p>\n        View <Link href=\"/blog\">all posts</Link>\n      </p>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Root ",(0,r.kt)("inlineCode",{parentName:"td"},"app/not-found")," handles global unmatched URLs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not-found")," introduced.")))))}c.isMDXComponent=!0}}]);