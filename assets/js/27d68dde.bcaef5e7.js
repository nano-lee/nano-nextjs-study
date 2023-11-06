"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Supported Browsers",description:"Browser support and which JavaScript features are supported by Next.js."},i=void 0,l={unversionedId:"architecture/supported-browsers",id:"architecture/supported-browsers",title:"Supported Browsers",description:"Browser support and which JavaScript features are supported by Next.js.",source:"@site/docs/04-architecture/supported-browsers.mdx",sourceDirName:"04-architecture",slug:"/architecture/supported-browsers",permalink:"/docs/architecture/supported-browsers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-architecture/supported-browsers.mdx",tags:[],version:"current",frontMatter:{title:"Supported Browsers",description:"Browser support and which JavaScript features are supported by Next.js."},sidebar:"nextJsSidebar",previous:{title:"Next.js Compiler",permalink:"/docs/architecture/nextjs-compiler"},next:{title:"Turbopack",permalink:"/docs/architecture/turbopack"}},s={},p=[{value:"Browserslist",id:"browserslist",level:2},{value:"Polyfills",id:"polyfills",level:2},{value:"Custom Polyfills",id:"custom-polyfills",level:3},{value:"JavaScript Language Features",id:"javascript-language-features",level:2},{value:"TypeScript Features",id:"typescript-features",level:3},{value:"Customizing Babel Config (Advanced)",id:"customizing-babel-config-advanced",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Next.js supports ",(0,n.kt)("strong",{parentName:"p"},"modern browsers")," with zero configuration."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome 64+"),(0,n.kt)("li",{parentName:"ul"},"Edge 79+"),(0,n.kt)("li",{parentName:"ul"},"Firefox 67+"),(0,n.kt)("li",{parentName:"ul"},"Opera 51+"),(0,n.kt)("li",{parentName:"ul"},"Safari 12+")),(0,n.kt)("h2",{id:"browserslist"},"Browserslist"),(0,n.kt)("p",null,"If you would like to target specific browsers or features, Next.js supports ",(0,n.kt)("a",{parentName:"p",href:"https://browsersl.ist"},"Browserslist")," configuration in your ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file. Next.js uses the following Browserslist configuration by default:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename="package.json"',filename:'"package.json"'},'{\n  "browserslist": [\n    "chrome 64",\n    "edge 79",\n    "firefox 67",\n    "opera 51",\n    "safari 12"\n  ]\n}\n')),(0,n.kt)("h2",{id:"polyfills"},"Polyfills"),(0,n.kt)("p",null,"We inject ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/packages/next-polyfill-nomodule/src/index.js"},"widely used polyfills"),", including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/Fetch_API"},(0,n.kt)("strong",{parentName:"a"},"fetch()"))," \u2014 Replacing: ",(0,n.kt)("inlineCode",{parentName:"li"},"whatwg-fetch")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"unfetch"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/URL"},(0,n.kt)("strong",{parentName:"a"},"URL"))," \u2014 Replacing: the ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/url.html"},(0,n.kt)("inlineCode",{parentName:"a"},"url")," package (Node.js API)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,n.kt)("strong",{parentName:"a"},"Object.assign()"))," \u2014 Replacing: ",(0,n.kt)("inlineCode",{parentName:"li"},"object-assign"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"object.assign"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"core-js/object/assign"),".")),(0,n.kt)("p",null,"If any of your dependencies include these polyfills, they\u2019ll be eliminated automatically from the production build to avoid duplication."),(0,n.kt)("p",null,"In addition, to reduce bundle size, Next.js will only load these polyfills for browsers that require them. The majority of the web traffic globally will not download these polyfills."),(0,n.kt)("h3",{id:"custom-polyfills"},"Custom Polyfills"),(0,n.kt)("p",null,"If your own code or any external npm dependencies require features not supported by your target browsers (such as IE 11), you need to add polyfills yourself."),(0,n.kt)("p",null,"In this case, you should add a top-level import for the ",(0,n.kt)("strong",{parentName:"p"},"specific polyfill")," you need in your ",(0,n.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/custom-app"},"Custom ",(0,n.kt)("inlineCode",{parentName:"a"},"<App>"))," or the individual component."),(0,n.kt)("h2",{id:"javascript-language-features"},"JavaScript Language Features"),(0,n.kt)("p",null,"Next.js allows you to use the latest JavaScript features out of the box. In addition to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukehoban/es6features"},"ES6 features"),", Next.js also supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/ecmascript-asyncawait"},"Async/await")," (ES2017)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-object-rest-spread"},"Object Rest/Spread Properties")," (ES2018)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-dynamic-import"},"Dynamic ",(0,n.kt)("inlineCode",{parentName:"a"},"import()"))," (ES2020)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-optional-chaining"},"Optional Chaining")," (ES2020)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-nullish-coalescing"},"Nullish Coalescing")," (ES2020)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-fields"},"Class Fields")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features"},"Static Properties")," (part of stage 3 proposal)"),(0,n.kt)("li",{parentName:"ul"},"and more!")),(0,n.kt)("h3",{id:"typescript-features"},"TypeScript Features"),(0,n.kt)("p",null,"Next.js has built-in TypeScript support. ",(0,n.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/configuring/typescript"},"Learn more here"),"."),(0,n.kt)("h3",{id:"customizing-babel-config-advanced"},"Customizing Babel Config (Advanced)"),(0,n.kt)("p",null,"You can customize babel configuration. ",(0,n.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/configuring/babel"},"Learn more here"),"."))}d.isMDXComponent=!0}}]);