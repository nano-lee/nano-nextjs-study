"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:10,title:"Custom Server",description:"Start a Next.js app programmatically using a custom server."},i=void 0,l={unversionedId:"pages/building-your-application/configuring/custom-server",id:"pages/building-your-application/configuring/custom-server",title:"Custom Server",description:"Start a Next.js app programmatically using a custom server.",source:"@site/docs/03-pages/01-building-your-application/06-configuring/10-custom-server.mdx",sourceDirName:"03-pages/01-building-your-application/06-configuring",slug:"/pages/building-your-application/configuring/custom-server",permalink:"/docs/pages/building-your-application/configuring/custom-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/06-configuring/10-custom-server.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Custom Server",description:"Start a Next.js app programmatically using a custom server."},sidebar:"nextJsSidebar",previous:{title:"PostCSS",permalink:"/docs/pages/building-your-application/configuring/post-css"},next:{title:"Draft Mode",permalink:"/docs/pages/building-your-application/configuring/draft-mode"}},s={},p=[{value:"Disabling file-system routing",id:"disabling-file-system-routing",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/custom-server"},"Custom Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/ssr-caching"},"SSR Caching")))),(0,a.kt)("p",null,"By default, Next.js includes its own server with ",(0,a.kt)("inlineCode",{parentName:"p"},"next start"),". If you have an existing backend, you can still use it with Next.js (this is not a custom server). A custom Next.js server allows you to start a server 100% programmatically in order to use custom server patterns. Most of the time, you will not need this - but it's available for complete customization."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Before deciding to use a custom server, please keep in mind that it should only be used when the integrated router of Next.js can't meet your app requirements. A custom server will remove important performance optimizations, like ",(0,a.kt)("strong",{parentName:"li"},"serverless functions")," and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/pages/building-your-application/rendering/automatic-static-optimization"},"Automatic Static Optimization"),".")),(0,a.kt)("li",{parentName:"ul"},"A custom server ",(0,a.kt)("strong",{parentName:"li"},"cannot")," be deployed on ",(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/solutions/nextjs"},"Vercel"),"."))),(0,a.kt)("p",null,"Take a look at the following example of a custom server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="server.js"',filename:'"server.js"'},'const { createServer } = require("http");\nconst { parse } = require("url");\nconst next = require("next");\n\nconst dev = process.env.NODE_ENV !== "production";\nconst hostname = "localhost";\nconst port = 3000;\n// when using middleware `hostname` and `port` must be provided below\nconst app = next({ dev, hostname, port });\nconst handle = app.getRequestHandler();\n\napp.prepare().then(() => {\n    createServer(async (req, res) => {\n        try {\n            // Be sure to pass `true` as the second argument to `url.parse`.\n            // This tells it to parse the query portion of the URL.\n            const parsedUrl = parse(req.url, true);\n            const { pathname, query } = parsedUrl;\n\n            if (pathname === "/a") {\n                await app.render(req, res, "/a", query);\n            } else if (pathname === "/b") {\n                await app.render(req, res, "/b", query);\n            } else {\n                await handle(req, res, parsedUrl);\n            }\n        } catch (err) {\n            console.error("Error occurred handling", req.url, err);\n            res.statusCode = 500;\n            res.end("internal server error");\n        }\n    })\n        .once("error", (err) => {\n            console.error(err);\n            process.exit(1);\n        })\n        .listen(port, () => {\n            console.log(`> Ready on http://${hostname}:${port}`);\n        });\n});\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"server.js")," doesn't go through babel or webpack. Make sure the syntax and sources this file requires are compatible with the current node version you are running.")),(0,a.kt)("p",null,"To run the custom server you'll need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename="package.json"',filename:'"package.json"'},'{\n    "scripts": {\n        "dev": "node server.js",\n        "build": "next build",\n        "start": "NODE_ENV=production node server.js"\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The custom server uses the following import to connect the server with the Next.js application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const next = require("next");\nconst app = next({});\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," import is a function that receives an object with the following options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"conf")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"The same object you would use in ",(0,a.kt)("a",{parentName:"td",href:"/docs/pages/api-reference/next-config-js"},"next.config.js"),". Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"customServer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") Set to false when the server was created by Next.js")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dev")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") Whether or not to launch Next.js in dev mode. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dir")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") Location of the Next.js project. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"'.'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"quiet")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") Hide error messages containing server information. Defaults to ",(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hostname")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") The hostname the server is running behind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"port")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") The port the server is running behind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"httpServer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"node:http#Server")),(0,a.kt)("td",{parentName:"tr",align:null},"(",(0,a.kt)("em",{parentName:"td"},"Optional"),") The HTTP Server that Next.js is running behind")))),(0,a.kt)("p",null,"The returned ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," can then be used to let Next.js handle requests as required."),(0,a.kt)("h2",{id:"disabling-file-system-routing"},"Disabling file-system routing"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," will serve each file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," folder under a pathname matching the filename. If your project uses a custom server, this behavior may result in the same content being served from multiple paths, which can present problems with SEO and UX."),(0,a.kt)("p",null,"To disable this behavior and prevent routing based on files in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),", open ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")," and disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFileSystemPublicRoutes")," config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    useFileSystemPublicRoutes: false,\n};\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"useFileSystemPublicRoutes")," disables filename routes from SSR; client-side routing may still access those paths. When using this option, you should guard against navigation to routes you do not want programmatically.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You may also wish to configure the client-side router to disallow client-side redirects to filename routes; for that refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/functions/use-router#routerbeforepopstate"},(0,a.kt)("inlineCode",{parentName:"a"},"router.beforePopState")),".")))}c.isMDXComponent=!0}}]);