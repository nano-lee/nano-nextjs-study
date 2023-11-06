"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"usePathname",description:"API Reference for the usePathname hook."},i=void 0,p={unversionedId:"app/api-reference/functions/use-pathname",id:"app/api-reference/functions/use-pathname",title:"usePathname",description:"API Reference for the usePathname hook.",source:"@site/docs/02-app/02-api-reference/04-functions/use-pathname.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-pathname",permalink:"/docs/app/api-reference/functions/use-pathname",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-pathname.mdx",tags:[],version:"current",frontMatter:{title:"usePathname",description:"API Reference for the usePathname hook."},sidebar:"nextJsSidebar",previous:{title:"useParams",permalink:"/docs/app/api-reference/functions/use-params"},next:{title:"useReportWebVitals",permalink:"/docs/app/api-reference/functions/use-report-web-vitals"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Do something in response to a route change",id:"do-something-in-response-to-a-route-change",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePathname")," is a ",(0,r.kt)("strong",{parentName:"p"},"Client Component")," hook that lets you read the current URL's ",(0,r.kt)("strong",{parentName:"p"},"pathname"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { usePathname } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const pathname = usePathname()\n  return <p>Current pathname: {pathname}</p>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"'use client'\n\nimport { usePathname } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const pathname = usePathname()\n  return <p>Current pathname: {pathname}</p>\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePathname")," intentionally requires using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/client-components"},"Client Component"),". It's important to note Client Components are not a de-optimization. They are an integral part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components"},"Server Components")," architecture."),(0,r.kt)("p",null,"For example, a Client Component with ",(0,r.kt)("inlineCode",{parentName:"p"},"usePathname")," will be rendered into HTML on the initial page load. When navigating to a new route, this component does not need to be re-fetched. Instead, the component is downloaded once (in the client JavaScript bundle), and re-renders based on the current state."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Reading the current URL from a ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/server-components"},"Server Component")," is not supported. This design is intentional to support layout state being preserved across page navigations."),(0,r.kt)("li",{parentName:"ul"},"Compatibility mode:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"usePathname")," can return ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," when a ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/get-static-paths#fallback-true"},"fallback route")," is being rendered or when a ",(0,r.kt)("inlineCode",{parentName:"li"},"pages")," directory page has been ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/rendering/automatic-static-optimization"},"automatically statically optimized")," by Next.js and the router is not ready."),(0,r.kt)("li",{parentName:"ul"},"Next.js will automatically update your types if it detects both an ",(0,r.kt)("inlineCode",{parentName:"li"},"app")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pages")," directory in your project."))))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const pathname = usePathname()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePathname")," does not take any parameters."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePathname")," returns a string of the current URL's pathname. For example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Returned value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'/'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'/dashboard'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard?v=2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'/dashboard'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/blog/hello-world")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'/blog/hello-world'"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"do-something-in-response-to-a-route-change"},"Do something in response to a route change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { usePathname, useSearchParams } from 'next/navigation'\n\nfunction ExampleClientComponent() {\n  const pathname = usePathname()\n  const searchParams = useSearchParams()\n  useEffect(() => {\n    // Do something here...\n  }, [pathname, searchParams])\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"'use client'\n\nimport { usePathname, useSearchParams } from 'next/navigation'\n\nfunction ExampleClientComponent() {\n  const pathname = usePathname()\n  const searchParams = useSearchParams()\n  useEffect(() => {\n    // Do something here...\n  }, [pathname, searchParams])\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"usePathname")," introduced.")))))}u.isMDXComponent=!0}}]);