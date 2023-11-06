"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"robots.txt",description:"API Reference for robots.txt file."},i=void 0,s={unversionedId:"app/api-reference/file-conventions/metadata/robots",id:"app/api-reference/file-conventions/metadata/robots",title:"robots.txt",description:"API Reference for robots.txt file.",source:"@site/docs/02-app/02-api-reference/02-file-conventions/01-metadata/robots.mdx",sourceDirName:"02-app/02-api-reference/02-file-conventions/01-metadata",slug:"/app/api-reference/file-conventions/metadata/robots",permalink:"/docs/app/api-reference/file-conventions/metadata/robots",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/02-file-conventions/01-metadata/robots.mdx",tags:[],version:"current",frontMatter:{title:"robots.txt",description:"API Reference for robots.txt file."},sidebar:"nextJsSidebar",previous:{title:"opengraph-image and twitter-image",permalink:"/docs/app/api-reference/file-conventions/metadata/opengraph-image"},next:{title:"sitemap.xml",permalink:"/docs/app/api-reference/file-conventions/metadata/sitemap"}},l={},p=[{value:"Static <code>robots.txt</code>",id:"static-robotstxt",level:2},{value:"Generate a Robots file",id:"generate-a-robots-file",level:2},{value:"Robots object",id:"robots-object",level:3},{value:"Version History",id:"version-history",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add or generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"robots.txt")," file that matches the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robots.txt#Standard"},"Robots Exclusion Standard")," in the ",(0,a.kt)("strong",{parentName:"p"},"root")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory to tell search engine crawlers which URLs they can access on your site."),(0,a.kt)("h2",{id:"static-robotstxt"},"Static ",(0,a.kt)("inlineCode",{parentName:"h2"},"robots.txt")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'filename="app/robots.txt"',filename:'"app/robots.txt"'},"User-Agent: *\nAllow: /\nDisallow: /private/\n\nSitemap: https://acme.com/sitemap.xml\n")),(0,a.kt)("h2",{id:"generate-a-robots-file"},"Generate a Robots file"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"robots.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"robots.ts")," file that returns a ",(0,a.kt)("a",{parentName:"p",href:"#robots-object"},(0,a.kt)("inlineCode",{parentName:"a"},"Robots")," object"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/robots.ts" switcher',filename:'"app/robots.ts"',switcher:!0},"import { MetadataRoute } from 'next'\n\nexport default function robots(): MetadataRoute.Robots {\n  return {\n    rules: {\n      userAgent: '*',\n      allow: '/',\n      disallow: '/private/',\n    },\n    sitemap: 'https://acme.com/sitemap.xml',\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/robots.js" switcher',filename:'"app/robots.js"',switcher:!0},"export default function robots() {\n  return {\n    rules: {\n      userAgent: '*',\n      allow: '/',\n      disallow: '/private/',\n    },\n    sitemap: 'https://acme.com/sitemap.xml',\n  }\n}\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"User-Agent: *\nAllow: /\nDisallow: /private/\n\nSitemap: https://acme.com/sitemap.xml\n")),(0,a.kt)("h3",{id:"robots-object"},"Robots object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Robots = {\n  rules:\n    | {\n        userAgent?: string | string[]\n        allow?: string | string[]\n        disallow?: string | string[]\n        crawlDelay?: number\n      }\n    | Array<{\n        userAgent: string | string[]\n        allow?: string | string[]\n        disallow?: string | string[]\n        crawlDelay?: number\n      }>\n  sitemap?: string | string[]\n  host?: string\n}\n")),(0,a.kt)("h2",{id:"version-history"},"Version History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"robots")," introduced.")))))}u.isMDXComponent=!0}}]);