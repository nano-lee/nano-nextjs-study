"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"useSelectedLayoutSegments",description:"API Reference for the useSelectedLayoutSegments hook."},o=void 0,i={unversionedId:"app/api-reference/functions/use-selected-layout-segments",id:"app/api-reference/functions/use-selected-layout-segments",title:"useSelectedLayoutSegments",description:"API Reference for the useSelectedLayoutSegments hook.",source:"@site/docs/02-app/02-api-reference/04-functions/use-selected-layout-segments.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-selected-layout-segments",permalink:"/docs/app/api-reference/functions/use-selected-layout-segments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-selected-layout-segments.mdx",tags:[],version:"current",frontMatter:{title:"useSelectedLayoutSegments",description:"API Reference for the useSelectedLayoutSegments hook."},sidebar:"nextJsSidebar",previous:{title:"useSelectedLayoutSegment",permalink:"/docs/app/api-reference/functions/use-selected-layout-segment"},next:{title:"next.config.js Options",permalink:"/docs/app/api-reference/next-config-js/"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Version History",id:"version-history",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelectedLayoutSegments")," is a ",(0,r.kt)("strong",{parentName:"p"},"Client Component")," hook that lets you read the active route segments ",(0,r.kt)("strong",{parentName:"p"},"below")," the Layout it is called from."),(0,r.kt)("p",null,"It is useful for creating UI in parent Layouts that need knowledge of active child segments such as breadcrumbs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/example-client-component.tsx" switcher',filename:'"app/example-client-component.tsx"',switcher:!0},"'use client'\n\nimport { useSelectedLayoutSegments } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const segments = useSelectedLayoutSegments()\n\n  return (\n    <ul>\n      {segments.map((segment, index) => (\n        <li key={index}>{segment}</li>\n      ))}\n    </ul>\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/example-client-component.js" switcher',filename:'"app/example-client-component.js"',switcher:!0},"'use client'\n\nimport { useSelectedLayoutSegments } from 'next/navigation'\n\nexport default function ExampleClientComponent() {\n  const segments = useSelectedLayoutSegments()\n\n  return (\n    <ul>\n      {segments.map((segment, index) => (\n        <li key={index}>{segment}</li>\n      ))}\n    </ul>\n  )\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Since ",(0,r.kt)("inlineCode",{parentName:"li"},"useSelectedLayoutSegments")," is a ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/client-components"},"Client Component")," hook, and Layouts are ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/server-components"},"Server Components")," by default, ",(0,r.kt)("inlineCode",{parentName:"li"},"useSelectedLayoutSegments")," is usually called via a Client Component that is imported into a Layout."),(0,r.kt)("li",{parentName:"ul"},"The returned segments include ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/route-groups"},"Route Groups"),", which you might not want to be included in your UI. You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"filter()")," array method to remove items that start with a bracket."))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const segments = useSelectedLayoutSegments(parallelRoutesKey?: string)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelectedLayoutSegments")," ",(0,r.kt)("em",{parentName:"p"},"optionally")," accepts a ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/parallel-routes#useselectedlayoutsegments"},(0,r.kt)("inlineCode",{parentName:"a"},"parallelRoutesKey")),", which allows you to read the active route segment within that slot."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelectedLayoutSegments")," returns an array of strings containing the active segments one level down from the layout the hook was called from. Or an empty array if none exist."),(0,r.kt)("p",null,"For example, given the Layouts and URLs below, the returned segments would be:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Layout"),(0,r.kt)("th",{parentName:"tr",align:null},"Visited URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Returned Segments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/layout.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/layout.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"['dashboard']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/layout.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard/settings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"['dashboard', 'settings']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/dashboard/layout.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app/dashboard/layout.js")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/dashboard/settings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"['settings']"))))),(0,r.kt)("h2",{id:"version-history"},"Version History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useSelectedLayoutSegments")," introduced.")))))}m.isMDXComponent=!0}}]);