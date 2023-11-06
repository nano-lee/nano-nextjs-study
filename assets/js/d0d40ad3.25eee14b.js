"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"useParams",description:"API Reference for the useParams hook."},p=void 0,l={unversionedId:"app/api-reference/functions/use-params",id:"app/api-reference/functions/use-params",title:"useParams",description:"API Reference for the useParams hook.",source:"@site/docs/02-app/02-api-reference/04-functions/use-params.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-params",permalink:"/docs/app/api-reference/functions/use-params",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-params.mdx",tags:[],version:"current",frontMatter:{title:"useParams",description:"API Reference for the useParams hook."},sidebar:"nextJsSidebar",previous:{title:"unstable_noStore",permalink:"/docs/app/api-reference/functions/unstable_noStore"},next:{title:"usePathname",permalink:"/docs/app/api-reference/functions/use-pathname"}},o={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Version History",id:"version-history",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useParams")," is a ",(0,r.kt)("strong",{parentName:"p"},"Client Component")," hook that lets you read a route's ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/dynamic-routes"},"dynamic params")," filled in by the current URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { useParams } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const params = useParams()\n\n  // Route -> /shop/[tag]/[item]\n  // URL -> /shop/shoes/nike-air-max-97\n  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }\n  console.log(params)\n\n  return <></>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"'use client'\n\nimport { useParams } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const params = useParams()\n\n  // Route -> /shop/[tag]/[item]\n  // URL -> /shop/shoes/nike-air-max-97\n  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }\n  console.log(params)\n\n  return <></>\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const params = useParams()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useParams")," does not take any parameters."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useParams")," returns an object containing the current route's filled in ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/dynamic-routes"},"dynamic parameters"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each property in the object is an active dynamic segment."),(0,r.kt)("li",{parentName:"ul"},"The properties name is the segment's name, and the properties value is what the segment is filled in with."),(0,r.kt)("li",{parentName:"ul"},"The properties value will either be a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or array of ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"'s depending on the ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/dynamic-routes"},"type of dynamic segment"),"."),(0,r.kt)("li",{parentName:"ul"},"If the route contains no dynamic parameters, ",(0,r.kt)("inlineCode",{parentName:"li"},"useParams")," returns an empty object."),(0,r.kt)("li",{parentName:"ul"},"If used in ",(0,r.kt)("inlineCode",{parentName:"li"},"pages"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"useParams")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Route"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"useParams()")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/page.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[slug]/page.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ slug: '1' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[tag]/[item]/page.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1/2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ tag: '1', item: '2' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/shop/[...slug]/page.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shop/1/2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ slug: ['1', '2'] }"))))),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useParams")," introduced.")))))}c.isMDXComponent=!0}}]);