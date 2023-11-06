"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=a,g=c["".concat(s,".").concat(b)]||c[b]||d[b]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8,title:"Babel",description:"Extend the babel preset added by Next.js with your own configs."},o=void 0,l={unversionedId:"pages/building-your-application/configuring/babel",id:"pages/building-your-application/configuring/babel",title:"Babel",description:"Extend the babel preset added by Next.js with your own configs.",source:"@site/docs/03-pages/01-building-your-application/06-configuring/08-babel.mdx",sourceDirName:"03-pages/01-building-your-application/06-configuring",slug:"/pages/building-your-application/configuring/babel",permalink:"/docs/pages/building-your-application/configuring/babel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/06-configuring/08-babel.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Babel",description:"Extend the babel preset added by Next.js with your own configs."},sidebar:"nextJsSidebar",previous:{title:"AMP",permalink:"/docs/pages/building-your-application/configuring/amp"},next:{title:"PostCSS",permalink:"/docs/pages/building-your-application/configuring/post-css"}},s={},p=[{value:"Adding Presets and Plugins",id:"adding-presets-and-plugins",level:2},{value:"Customizing Presets and Plugins",id:"customizing-presets-and-plugins",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-custom-babel-config"},"Customizing babel configuration")))),(0,a.kt)("p",null,"Next.js includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"next/babel")," preset to your app, which includes everything needed to compile React applications and server-side code. But if you want to extend the default Babel configs, it's also possible."),(0,a.kt)("h2",{id:"adding-presets-and-plugins"},"Adding Presets and Plugins"),(0,a.kt)("p",null,"To start, you only need to define a ",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc")," file (or ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),") in the root directory of your project. If such a file is found, it will be considered as the ",(0,a.kt)("em",{parentName:"p"},"source of truth"),", and therefore it needs to define what Next.js needs as well, which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"next/babel")," preset."),(0,a.kt)("p",null,"Here's an example ",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename=".babelrc"',filename:'".babelrc"'},'{\n    "presets": ["next/babel"],\n    "plugins": []\n}\n')),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/packages/next/src/build/babel/preset.ts"},"take a look at this file")," to learn about the presets included by ",(0,a.kt)("inlineCode",{parentName:"p"},"next/babel"),"."),(0,a.kt)("p",null,"To add presets/plugins ",(0,a.kt)("strong",{parentName:"p"},"without configuring them"),", you can do it this way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename=".babelrc"',filename:'".babelrc"'},'{\n    "presets": ["next/babel"],\n    "plugins": ["@babel/plugin-proposal-do-expressions"]\n}\n')),(0,a.kt)("h2",{id:"customizing-presets-and-plugins"},"Customizing Presets and Plugins"),(0,a.kt)("p",null,"To add presets/plugins ",(0,a.kt)("strong",{parentName:"p"},"with custom configuration"),", do it on the ",(0,a.kt)("inlineCode",{parentName:"p"},"next/babel")," preset like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename=".babelrc"',filename:'".babelrc"'},'{\n    "presets": [\n        [\n            "next/babel",\n            {\n                "preset-env": {},\n                "transform-runtime": {},\n                "styled-jsx": {},\n                "class-properties": {}\n            }\n        ]\n    ],\n    "plugins": []\n}\n')),(0,a.kt)("p",null,"To learn more about the available options for each config, visit babel's ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/"},"documentation")," site."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Next.js uses the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/release#release-schedule"},(0,a.kt)("strong",{parentName:"a"},"current")," Node.js version")," for server-side compilations."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"modules")," option on ",(0,a.kt)("inlineCode",{parentName:"li"},'"preset-env"')," should be kept to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", otherwise webpack code splitting is turned off."))))}d.isMDXComponent=!0}}]);