"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6,title:"create-next-app",description:"Create Next.js apps in one command with create-next-app."},p=void 0,o={unversionedId:"app/api-reference/create-next-app",id:"app/api-reference/create-next-app",title:"create-next-app",description:"Create Next.js apps in one command with create-next-app.",source:"@site/docs/02-app/02-api-reference/06-create-next-app.mdx",sourceDirName:"02-app/02-api-reference",slug:"/app/api-reference/create-next-app",permalink:"/docs/app/api-reference/create-next-app",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/06-create-next-app.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"create-next-app",description:"Create Next.js apps in one command with create-next-app."},sidebar:"nextJsSidebar",previous:{title:"webpack",permalink:"/docs/app/api-reference/next-config-js/webpack"},next:{title:"Edge Runtime",permalink:"/docs/app/api-reference/edge"}},l={},s=[{value:"Interactive",id:"interactive",level:3},{value:"Non-interactive",id:"non-interactive",level:3},{value:"Why use Create Next App?",id:"why-use-create-next-app",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("p",null,"The easiest way to get started with Next.js is by using ",(0,r.kt)("inlineCode",{parentName:"p"},"create-next-app"),". This CLI tool enables you to quickly start building a new Next.js application, with everything set up for you."),(0,r.kt)("p",null,"You can create a new app using the default Next.js template, or by using one of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/examples"},"official Next.js examples"),"."),(0,r.kt)("h3",{id:"interactive"},"Interactive"),(0,r.kt)("p",null,"You can create a new project interactively by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npx create-next-app@latest\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"yarn create next-app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"pnpm create next-app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"bunx create-next-app\n")),(0,r.kt)("p",null,"You will then be asked the following prompts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'filename="Terminal"',filename:'"Terminal"'},"What is your project named?  my-app\nWould you like to use TypeScript?  No / Yes\nWould you like to use ESLint?  No / Yes\nWould you like to use Tailwind CSS?  No / Yes\nWould you like to use `src/` directory?  No / Yes\nWould you like to use App Router? (recommended)  No / Yes\nWould you like to customize the default import alias (@/*)?  No / Yes\n")),(0,r.kt)("p",null,"Once you've answered the prompts, a new project will be created with the correct configuration depending on your answers."),(0,r.kt)("h3",{id:"non-interactive"},"Non-interactive"),(0,r.kt)("p",null,"You can also pass command line arguments to set up a new project non-interactively."),(0,r.kt)("p",null,"Further, you can negate default options by prefixing them with ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-eslint"),")."),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"create-next-app --help"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},'Usage: create-next-app <project-directory> [options]\n\nOptions:\n  -V, --version                        output the version number\n  --ts, --typescript\n\n    Initialize as a TypeScript project. (default)\n\n  --js, --javascript\n\n    Initialize as a JavaScript project.\n\n  --tailwind\n\n    Initialize with Tailwind CSS config. (default)\n\n  --eslint\n\n    Initialize with ESLint config.\n\n  --app\n\n    Initialize as an App Router project.\n\n  --src-dir\n\n    Initialize inside a `src/` directory.\n\n  --import-alias <alias-to-configure>\n\n    Specify import alias to use (default "@/*").\n\n  --use-npm\n\n    Explicitly tell the CLI to bootstrap the app using npm\n\n  --use-pnpm\n\n    Explicitly tell the CLI to bootstrap the app using pnpm\n\n  --use-yarn\n\n    Explicitly tell the CLI to bootstrap the app using Yarn\n\n  --use-bun\n\n    Explicitly tell the CLI to bootstrap the app using Bun\n\n  -e, --example [name]|[github-url]\n\n    An example to bootstrap the app with. You can use an example name\n    from the official Next.js repo or a public GitHub URL. The URL can use\n    any branch and/or subdirectory\n\n  --example-path <path-to-example>\n\n    In a rare case, your GitHub URL might contain a branch name with\n    a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar).\n    In this case, you must specify the path to the example separately:\n    --example-path foo/bar\n\n  --reset-preferences\n\n    Explicitly tell the CLI to reset any stored preferences\n\n  -h, --help                           output usage information\n')),(0,r.kt)("h3",{id:"why-use-create-next-app"},"Why use Create Next App?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create-next-app")," allows you to create a new Next.js app within seconds. It is officially maintained by the creators of Next.js, and includes a number of benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interactive Experience"),": Running ",(0,r.kt)("inlineCode",{parentName:"li"},"npx create-next-app@latest")," (with no arguments) launches an interactive experience that guides you through setting up a project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zero Dependencies"),": Initializing a project is as quick as one second. Create Next App has zero dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Offline Support"),": Create Next App will automatically detect if you're offline and bootstrap your project using your local package cache."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Support for Examples"),": Create Next App can bootstrap your application using an example from the Next.js examples collection (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"npx create-next-app --example api-routes"),") or any public GitHub repository."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tested"),": The package is part of the Next.js monorepo and tested using the same integration test suite as Next.js itself, ensuring it works as expected with every release.")))}m.isMDXComponent=!0}}]);