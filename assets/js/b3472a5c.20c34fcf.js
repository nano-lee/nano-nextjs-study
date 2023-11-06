"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={title:"Server Actions",sidebar_label:"Server Actions",description:"API Reference for Next.js Server Actions.",related:{title:"Next Steps",description:"For more information on what to do next, we recommend the following sections",links:["app/building-your-application/data-fetching/forms-and-mutations"]}},o=void 0,l={unversionedId:"app/api-reference/functions/server-actions",id:"app/api-reference/functions/server-actions",title:"Server Actions",description:"API Reference for Next.js Server Actions.",source:"@site/docs/02-app/02-api-reference/04-functions/server-actions.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/server-actions",permalink:"/docs/app/api-reference/functions/server-actions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/server-actions.mdx",tags:[],version:"current",frontMatter:{title:"Server Actions",sidebar_label:"Server Actions",description:"API Reference for Next.js Server Actions.",related:{title:"Next Steps",description:"For more information on what to do next, we recommend the following sections",links:["app/building-your-application/data-fetching/forms-and-mutations"]}},sidebar:"nextJsSidebar",previous:{title:"revalidateTag",permalink:"/docs/app/api-reference/functions/revalidateTag"},next:{title:"unstable_cache",permalink:"/docs/app/api-reference/functions/unstable_cache"}},s={},p=[{value:"Convention",id:"convention",level:2},{value:"With Server Components",id:"with-server-components",level:3},{value:"With Client Components",id:"with-client-components",level:3},{value:"Import",id:"import",level:4},{value:"Props",id:"props",level:4},{value:"Binding Arguments",id:"binding-arguments",level:3},{value:"Invocation",id:"invocation",level:2},{value:"Progressive Enhancement",id:"progressive-enhancement",level:2},{value:"Size Limitation",id:"size-limitation",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," TODO: This page will need to link back to React docs mentioned at the bottom "),"/}"),(0,r.kt)("p",null,"Next.js integrates with React Actions to provide a built-in solution for ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"server mutations"),"."),(0,r.kt)("h2",{id:"convention"},"Convention"),(0,r.kt)("p",null,"Server Actions can be defined in two places:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inside the component that uses it (Server Components only)."),(0,r.kt)("li",{parentName:"ul"},"In a separate file (Client and Server Components), for reusability. You can define multiple Server Actions in a single file.")),(0,r.kt)("h3",{id:"with-server-components"},"With Server Components"),(0,r.kt)("p",null,"Create a Server Action by defining an asynchronous function with the ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/use-server"},(0,r.kt)("inlineCode",{parentName:"a"},'"use server"'))," directive at the top of the function body. ",(0,r.kt)("inlineCode",{parentName:"p"},'"use server"')," ensures this function is only ever executed on the server."),(0,r.kt)("p",null,"This function should have ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable arguments")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable return value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" highlight={2}',filename:'"app/page.js"',highlight:"{2}"},'export default function ServerComponent() {\n    async function myAction() {\n        "use server";\n        // ...\n    }\n}\n')),(0,r.kt)("h3",{id:"with-client-components"},"With Client Components"),(0,r.kt)("h4",{id:"import"},"Import"),(0,r.kt)("p",null,"Create your Server Action in a separate file with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use server"')," directive at the top of the file. Then, import the Server Action into your Client Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js" highlight={1}',filename:'"app/actions.js"',highlight:"{1}"},'"use server";\n\nexport async function myAction() {\n    // ...\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/client-component.jsx" highlight={1}',filename:'"app/client-component.jsx"',highlight:"{1}"},'"use client";\n\nimport { myAction } from "./actions";\n\nexport default function ClientComponent() {\n    return (\n        <form action={myAction}>\n            <button type="submit">Add to Cart</button>\n        </form>\n    );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": When using a top-level ",(0,r.kt)("inlineCode",{parentName:"p"},'"use server"')," directive, all exports below will be considered Server Actions. You can have multiple Server Actions in a single file.")),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)("p",null,"In some cases, you might want to pass down a Server Action to a Client Component as a prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ClientComponent updateItem={updateItem} />\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/client-component.jsx"',filename:'"app/client-component.jsx"'},'"use client";\n\nexport default function ClientComponent({ myAction }) {\n    return (\n        <form action={myAction}>\n            <input type="text" name="name" />\n            <button type="submit">Update Item</button>\n        </form>\n    );\n}\n')),(0,r.kt)("h3",{id:"binding-arguments"},"Binding Arguments"),(0,r.kt)("p",null,"You can bind arguments to a Server Action using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," method. This allows you to create a new Server Action with some arguments already bound. This is beneficial when you want to pass extra arguments to a Server Action."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/client-component.jsx" highlight={6}',filename:'"app/client-component.jsx"',highlight:"{6}"},'"use client";\n\nimport { updateUser } from "./actions";\n\nexport function UserProfile({ userId }) {\n    const updateUserWithId = updateUser.bind(null, userId);\n\n    return (\n        <form action={updateUserWithId}>\n            <input type="text" name="name" />\n            <button type="submit">Update User Name</button>\n        </form>\n    );\n}\n')),(0,r.kt)("p",null,"And then, the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateUser")," Server Action will always receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," argument, in addition to the form data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},'"use server";\n\nexport async function updateUser(userId, formData) {\n    // ...\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,r.kt)("inlineCode",{parentName:"p"},".bind")," of a Server Action works in both Server and Client Components. It also supports ",(0,r.kt)("a",{parentName:"p",href:"#progressive-enhancement"},"Progressive Enhancement"),".")),(0,r.kt)("h2",{id:"invocation"},"Invocation"),(0,r.kt)("p",null,"You can invoke Server Actions using the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"action"),": React's ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," prop allows invoking a Server Action on a ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," element."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"formAction"),": React's ",(0,r.kt)("inlineCode",{parentName:"li"},"formAction")," prop allows handling ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},'<input type="submit">'),", and ",(0,r.kt)("inlineCode",{parentName:"li"},'<input type="image">')," elements in a ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>"),"."),(0,r.kt)("li",{parentName:"ul"},"Custom Invocation with ",(0,r.kt)("inlineCode",{parentName:"li"},"startTransition"),": Invoke Server Actions without using ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"formAction")," by using ",(0,r.kt)("inlineCode",{parentName:"li"},"startTransition"),". This method ",(0,r.kt)("strong",{parentName:"li"},"disables ",(0,r.kt)("a",{parentName:"strong",href:"#progressive-enhancement"},"Progressive Enhancement")),".")),(0,r.kt)("h2",{id:"progressive-enhancement"},"Progressive Enhancement"),(0,r.kt)("p",null,"Progressive enhancement allows a ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," to function properly without JavaScript, or with JavaScript disabled. This allows users to interact with the form and submit data even if the JavaScript for the form hasn't been loaded yet or if it fails to load."),(0,r.kt)("p",null,"React Actions (both server and client) support progressive enhancement, using one of two strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("strong",{parentName:"li"},"Server Action")," is passed directly to a ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>"),", the form is interactive ",(0,r.kt)("strong",{parentName:"li"},"even if JavaScript is disabled"),"."),(0,r.kt)("li",{parentName:"ul"},"If a ",(0,r.kt)("strong",{parentName:"li"},"Client Action")," is passed to a ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>"),", the form is still interactive, but the action will be placed in a queue until the form has hydrated. React prioritizes the action, so it still happens quickly.")),(0,r.kt)("p",null,"In both cases, the form is interactive before hydration occurs. Although Server Actions have the additional benefit of not relying on client JavaScript, you can still compose additional behavior with Client Actions where desired without sacrificing interactivity."),(0,r.kt)("h2",{id:"size-limitation"},"Size Limitation"),(0,r.kt)("p",null,"By default, the maximum size of the request body sent to a Server Action is 1MB, to prevent the consumption of excessive server resources in parsing large amounts of data."),(0,r.kt)("p",null,"However, you can configure this limit using the ",(0,r.kt)("inlineCode",{parentName:"p"},"serverActions.bodySizeLimit")," option. It can take the number of bytes or any string format supported by bytes, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'500kb'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'3mb'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    experimental: {\n        serverActions: {\n            bodySizeLimit: "2mb",\n        },\n    },\n};\n')),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"The following React API pages are currently being documented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.dev/reference/react/use-server"},(0,r.kt)("inlineCode",{parentName:"a"},'"use server"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.dev/reference/react-dom/hooks/useFormStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"useFormStatus"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," (\ud83d\udea7)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formAction")," (\ud83d\udea7)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useFormState")," (\ud83d\udea7)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useOptimistic")," (\ud83d\udea7)")))}u.isMDXComponent=!0}}]);