"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4,title:"Version 13",description:"Upgrade your Next.js Application from Version 12 to 13."},o=void 0,p={unversionedId:"pages/building-your-application/upgrading/version-13",id:"pages/building-your-application/upgrading/version-13",title:"Version 13",description:"Upgrade your Next.js Application from Version 12 to 13.",source:"@site/docs/03-pages/01-building-your-application/08-upgrading/04-version-13.mdx",sourceDirName:"03-pages/01-building-your-application/08-upgrading",slug:"/pages/building-your-application/upgrading/version-13",permalink:"/docs/pages/building-your-application/upgrading/version-13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/08-upgrading/04-version-13.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Version 13",description:"Upgrade your Next.js Application from Version 12 to 13."},sidebar:"tutorialSidebar",previous:{title:"Version 14",permalink:"/docs/pages/building-your-application/upgrading/version-14"},next:{title:"Version 12",permalink:"/docs/pages/building-your-application/upgrading/version-12"}},l={},s=[{value:"Upgrading from 12 to 13",id:"upgrading-from-12-to-13",level:2},{value:"v13 Summary",id:"v13-summary",level:3},{value:"Migrating shared features",id:"migrating-shared-features",level:2},{value:"<code>&lt;Image/&gt;</code> Component",id:"image-component",level:3},{value:"<code>&lt;Link&gt;</code> Component",id:"link-component",level:3},{value:"<code>&lt;Script&gt;</code> Component",id:"script-component",level:3},{value:"Font Optimization",id:"font-optimization",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrading-from-12-to-13"},"Upgrading from 12 to 13"),(0,i.kt)("p",null,"To update to Next.js version 13, run the following command using your preferred package manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm i next@latest react@latest react-dom@latest eslint-config-next@latest\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"yarn add next@latest react@latest react-dom@latest eslint-config-next@latest\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"pnpm up next react react-dom eslint-config-next --latest\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"bun add next@latest react@latest react-dom@latest eslint-config-next@latest\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know:")," If you are using TypeScript, ensure you also upgrade ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/react")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/react-dom")," to their latest versions.")),(0,i.kt)("h3",{id:"v13-summary"},"v13 Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/supported-browsers"},"Supported Browsers")," have been changed to drop Internet Explorer and target modern browsers."),(0,i.kt)("li",{parentName:"ul"},"The minimum Node.js version has been bumped from 12.22.0 to 16.14.0, since 12.x and 14.x have reached end-of-life."),(0,i.kt)("li",{parentName:"ul"},"The minimum React version has been bumped from 17.0.2 to 18.2.0."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"swcMinify")," configuration property was changed from ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". See ",(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/nextjs-compiler"},"Next.js Compiler")," for more info."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"next/image")," import was renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"next/legacy/image"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"next/future/image")," import was renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"next/image"),". A ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/upgrading/codemods#next-image-to-legacy-image"},"codemod is available")," to safely and automatically rename your imports."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"next/link")," child can no longer be ",(0,i.kt)("inlineCode",{parentName:"li"},"<a>"),". Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"legacyBehavior")," prop to use the legacy behavior or remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"<a>")," to upgrade. A ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/upgrading/codemods#new-link"},"codemod is available")," to automatically upgrade your code."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," configuration property has been removed and superseded by ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/next-config-js/output"},"Output File Tracing"),".")),(0,i.kt)("h2",{id:"migrating-shared-features"},"Migrating shared features"),(0,i.kt)("p",null,"Next.js 13 introduces a new ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing"},(0,i.kt)("inlineCode",{parentName:"a"},"app")," directory")," with new features and conventions. However, upgrading to Next.js 13 does ",(0,i.kt)("strong",{parentName:"p"},"not")," require using the new ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing#the-app-router"},(0,i.kt)("inlineCode",{parentName:"a"},"app")," directory"),"."),(0,i.kt)("p",null,"You can continue using ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," with new features that work in both directories, such as the updated ",(0,i.kt)("a",{parentName:"p",href:"#image-component"},"Image component"),", ",(0,i.kt)("a",{parentName:"p",href:"#link-component"},"Link component"),", ",(0,i.kt)("a",{parentName:"p",href:"#script-component"},"Script component"),", and ",(0,i.kt)("a",{parentName:"p",href:"#font-optimization"},"Font optimization"),"."),(0,i.kt)("h3",{id:"image-component"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Image/>")," Component"),(0,i.kt)("p",null,"Next.js 12 introduced many improvements to the Image Component with a temporary import: ",(0,i.kt)("inlineCode",{parentName:"p"},"next/future/image"),". These improvements included less client-side JavaScript, easier ways to extend and style images, better accessibility, and native browser lazy loading."),(0,i.kt)("p",null,"Starting in Next.js 13, this new behavior is now the default for ",(0,i.kt)("inlineCode",{parentName:"p"},"next/image"),"."),(0,i.kt)("p",null,"There are two codemods to help you migrate to the new Image Component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/upgrading/codemods#next-image-to-legacy-image"},"next-image-to-legacy-image"),": This codemod will safely and automatically rename ",(0,i.kt)("inlineCode",{parentName:"li"},"next/image")," imports to ",(0,i.kt)("inlineCode",{parentName:"li"},"next/legacy/image")," to maintain the same behavior as Next.js 12. We recommend running this codemod to quickly update to Next.js 13 automatically."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/upgrading/codemods#next-image-experimental"},"next-image-experimental"),": After running the previous codemod, you can optionally run this experimental codemod to upgrade ",(0,i.kt)("inlineCode",{parentName:"li"},"next/legacy/image")," to the new ",(0,i.kt)("inlineCode",{parentName:"li"},"next/image"),", which will remove unused props and add inline styles. Please note this codemod is experimental and only covers static usage (such as ",(0,i.kt)("inlineCode",{parentName:"li"},'<Image src={img} layout="responsive" />'),") but not dynamic usage (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"<Image {...props} />"),").")),(0,i.kt)("p",null,"Alternatively, you can manually update by following the ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/upgrading/codemods#next-image-experimental"},"migration guide")," and also see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/image-legacy#comparison"},"legacy comparison"),"."),(0,i.kt)("h3",{id:"link-component"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Link>")," Component"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link"},(0,i.kt)("inlineCode",{parentName:"a"},"<Link>")," Component")," no longer requires manually adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tag as a child. This behavior was added as an experimental option in ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/blog/next-12-2"},"version 12.2")," and is now the default. In Next.js 13, ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," always renders ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," and allows you to forward props to the underlying tag."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from \'next/link\'\n\n// Next.js 12: `<a>` has to be nested otherwise it\'s excluded\n<Link href="/about">\n  <a>About</a>\n</Link>\n\n// Next.js 13: `<Link>` always renders `<a>` under the hood\n<Link href="/about">\n  About\n</Link>\n')),(0,i.kt)("p",null,"To upgrade your links to Next.js 13, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/upgrading/codemods#new-link"},(0,i.kt)("inlineCode",{parentName:"a"},"new-link")," codemod"),"."),(0,i.kt)("h3",{id:"script-component"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Script>")," Component"),(0,i.kt)("p",null,"The behavior of ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/script"},(0,i.kt)("inlineCode",{parentName:"a"},"next/script"))," has been updated to support both ",(0,i.kt)("inlineCode",{parentName:"p"},"pages")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),". If incrementally adopting ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),", read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/upgrading"},"upgrade guide"),"."),(0,i.kt)("h3",{id:"font-optimization"},"Font Optimization"),(0,i.kt)("p",null,"Previously, Next.js helped you optimize fonts by inlining font CSS. Version 13 introduces the new ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/optimizing/fonts"},(0,i.kt)("inlineCode",{parentName:"a"},"next/font"))," module which gives you the ability to customize your font loading experience while still ensuring great performance and privacy."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/optimizing/fonts"},"Optimizing Fonts")," to learn how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"next/font"),"."))}u.isMDXComponent=!0}}]);