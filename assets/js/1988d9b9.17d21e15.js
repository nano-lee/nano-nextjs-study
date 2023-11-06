"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[475],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return t?a.createElement(g,r(r({ref:n},m),{},{components:t})):a.createElement(g,r({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:6,title:"Lazy Loading",description:"Lazy load imported libraries and React Components to improve your application's loading performance."},r=void 0,p={unversionedId:"app/building-your-application/optimizing/lazy-loading",id:"app/building-your-application/optimizing/lazy-loading",title:"Lazy Loading",description:"Lazy load imported libraries and React Components to improve your application's loading performance.",source:"@site/docs/02-app/01-building-your-application/06-optimizing/06-lazy-loading.mdx",sourceDirName:"02-app/01-building-your-application/06-optimizing",slug:"/app/building-your-application/optimizing/lazy-loading",permalink:"/docs/app/building-your-application/optimizing/lazy-loading",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/06-optimizing/06-lazy-loading.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Lazy Loading",description:"Lazy load imported libraries and React Components to improve your application's loading performance."},sidebar:"nextJsSidebar",previous:{title:"Static Assets",permalink:"/docs/app/building-your-application/optimizing/static-assets"},next:{title:"Analytics",permalink:"/docs/app/building-your-application/optimizing/analytics"}},l={},s=[{value:"<code>next/dynamic</code>",id:"nextdynamic",level:2},{value:"Examples",id:"examples",level:2},{value:"Importing Client Components",id:"importing-client-components",level:3},{value:"Skipping SSR",id:"skipping-ssr",level:3},{value:"Importing Server Components",id:"importing-server-components",level:3},{value:"Loading External Libraries",id:"loading-external-libraries",level:3},{value:"Adding a custom loading component",id:"adding-a-custom-loading-component",level:3},{value:"Importing Named Exports",id:"importing-named-exports",level:3}],m={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"{/",(0,o.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/Performance/Lazy_loading"},"Lazy loading")," in Next.js helps improve the initial loading performance of an application by decreasing the amount of JavaScript needed to render a route."),(0,o.kt)("p",null,"It allows you to defer loading of ",(0,o.kt)("strong",{parentName:"p"},"Client Components")," and imported libraries, and only include them in the client bundle when they're needed. For example, you might want to defer loading a modal until a user clicks to open it."),(0,o.kt)("p",null,"There are two ways you can implement lazy loading in Next.js:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("a",{parentName:"li",href:"#nextdynamic"},"Dynamic Imports")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"next/dynamic")),(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/reference/react/lazy"},(0,o.kt)("inlineCode",{parentName:"a"},"React.lazy()"))," with ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/reference/react/Suspense"},"Suspense"))),(0,o.kt)("p",null,"By default, Server Components are automatically ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Code_splitting"},"code split"),", and you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/loading-ui-and-streaming"},"streaming")," to progressively send pieces of UI from the server to the client. Lazy loading applies to Client Components."),(0,o.kt)("h2",{id:"nextdynamic"},(0,o.kt)("inlineCode",{parentName:"h2"},"next/dynamic")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"next/dynamic")," is a composite of ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/lazy"},(0,o.kt)("inlineCode",{parentName:"a"},"React.lazy()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Suspense"},"Suspense"),". It behaves the same way in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directories to allow for incremental migration."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"importing-client-components"},"Importing Client Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'"use client";\n\nimport { useState } from "react";\nimport dynamic from "next/dynamic";\n\n// Client Components:\nconst ComponentA = dynamic(() => import("../components/A"));\nconst ComponentB = dynamic(() => import("../components/B"));\nconst ComponentC = dynamic(() => import("../components/C"), { ssr: false });\n\nexport default function ClientComponentExample() {\n    const [showMore, setShowMore] = useState(false);\n\n    return (\n        <div>\n            {/* Load immediately, but in a separate client bundle */}\n            <ComponentA />\n\n            {/* Load on demand, only when/if the condition is met */}\n            {showMore && <ComponentB />}\n            <button onClick={() => setShowMore(!showMore)}>Toggle</button>\n\n            {/* Load only on the client side */}\n            <ComponentC />\n        </div>\n    );\n}\n')),(0,o.kt)("h3",{id:"skipping-ssr"},"Skipping SSR"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"React.lazy()")," and Suspense, Client Components will be pre-rendered (SSR) by default."),(0,o.kt)("p",null,"If you want to disable pre-rendering for a Client Component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssr")," option set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const ComponentC = dynamic(() => import("../components/C"), { ssr: false });\n')),(0,o.kt)("h3",{id:"importing-server-components"},"Importing Server Components"),(0,o.kt)("p",null,"If you dynamically import a Server Component, only the Client Components that are children of the Server Component will be lazy-loaded - not the Server Component itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import dynamic from "next/dynamic";\n\n// Server Component:\nconst ServerComponent = dynamic(() => import("../components/ServerComponent"));\n\nexport default function ServerComponentExample() {\n    return (\n        <div>\n            <ServerComponent />\n        </div>\n    );\n}\n')),(0,o.kt)("h3",{id:"loading-external-libraries"},"Loading External Libraries"),(0,o.kt)("p",null,"External libraries can be loaded on demand using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import"},(0,o.kt)("inlineCode",{parentName:"a"},"import()"))," function. This example uses the external library ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse.js")," for fuzzy search. The module is only loaded on the client after the user types in the search input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'"use client";\n\nimport { useState } from "react";\n\nconst names = ["Tim", "Joe", "Bel", "Lee"];\n\nexport default function Page() {\n    const [results, setResults] = useState();\n\n    return (\n        <div>\n            <input\n                type="text"\n                placeholder="Search"\n                onChange={async (e) => {\n                    const { value } = e.currentTarget;\n                    // Dynamically load fuse.js\n                    const Fuse = (await import("fuse.js")).default;\n                    const fuse = new Fuse(names);\n\n                    setResults(fuse.search(value));\n                }}\n            />\n            <pre>Results: {JSON.stringify(results, null, 2)}</pre>\n        </div>\n    );\n}\n')),(0,o.kt)("h3",{id:"adding-a-custom-loading-component"},"Adding a custom loading component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import dynamic from "next/dynamic";\n\nconst WithCustomLoading = dynamic(\n    () => import("../components/WithCustomLoading"),\n    {\n        loading: () => <p>Loading...</p>,\n    },\n);\n\nexport default function Page() {\n    return (\n        <div>\n            {/* The loading component will be rendered while  <WithCustomLoading/> is loading */}\n            <WithCustomLoading />\n        </div>\n    );\n}\n')),(0,o.kt)("h3",{id:"importing-named-exports"},"Importing Named Exports"),(0,o.kt)("p",null,"To dynamically import a named export, you can return it from the Promise returned by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import"},(0,o.kt)("inlineCode",{parentName:"a"},"import()"))," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="components/hello.js"',filename:'"components/hello.js"'},'"use client";\n\nexport function Hello() {\n    return <p>Hello!</p>;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import dynamic from "next/dynamic";\n\nconst ClientComponent = dynamic(() =>\n    import("../components/hello").then((mod) => mod.Hello),\n);\n')))}d.isMDXComponent=!0}}]);