"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:7,title:"API Routes",description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here."},i=void 0,o={unversionedId:"pages/building-your-application/routing/api-routes",id:"pages/building-your-application/routing/api-routes",title:"API Routes",description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here.",source:"@site/docs/03-pages/01-building-your-application/01-routing/07-api-routes.mdx",sourceDirName:"03-pages/01-building-your-application/01-routing",slug:"/pages/building-your-application/routing/api-routes",permalink:"/docs/pages/building-your-application/routing/api-routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/01-routing/07-api-routes.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"API Routes",description:"Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here."},sidebar:"tutorialSidebar",previous:{title:"Custom Errors",permalink:"/docs/pages/building-your-application/routing/custom-error"},next:{title:"Internationalization",permalink:"/docs/pages/building-your-application/routing/internationalization"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"HTTP Methods",id:"http-methods",level:2},{value:"Request Helpers",id:"request-helpers",level:2},{value:"Custom config",id:"custom-config",level:3},{value:"Response Helpers",id:"response-helpers",level:2},{value:"Setting the status code of a response",id:"setting-the-status-code-of-a-response",level:3},{value:"Sending a JSON response",id:"sending-a-json-response",level:3},{value:"Sending a HTTP response",id:"sending-a-http-response",level:3},{value:"Redirects to a specified path or URL",id:"redirects-to-a-specified-path-or-url",level:3},{value:"Adding TypeScript types",id:"adding-typescript-types",level:3},{value:"Dynamic API Routes",id:"dynamic-api-routes",level:2},{value:"Catch all API routes",id:"catch-all-api-routes",level:3},{value:"Optional catch all API routes",id:"optional-catch-all-api-routes",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Edge API Routes",id:"edge-api-routes",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes"},"Basic API Routes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-middleware"},"API Routes Request Helpers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql"},"API Routes with GraphQL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest"},"API Routes with REST")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors"},"API Routes with CORS")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Good to know"),": If you are using the App Router, you can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"},"Server Components")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handlers")," instead of API Routes.")),(0,s.kt)("p",null,"API routes provide a solution to build a ",(0,s.kt)("strong",{parentName:"p"},"public API")," with Next.js."),(0,s.kt)("p",null,"Any file inside the folder ",(0,s.kt)("inlineCode",{parentName:"p"},"pages/api")," is mapped to ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/*")," and will be treated as an API endpoint instead of a ",(0,s.kt)("inlineCode",{parentName:"p"},"page"),". They are server-side only bundles and won't increase your client-side bundle size."),(0,s.kt)("p",null,"For example, the following API route returns a JSON response with a status code of ",(0,s.kt)("inlineCode",{parentName:"p"},"200"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\ntype ResponseData = {\n    message: string;\n};\n\nexport default function handler(\n    req: NextApiRequest,\n    res: NextApiResponse<ResponseData>,\n) {\n    res.status(200).json({ message: "Hello from Next.js!" });\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default function handler(req, res) {\n    res.status(200).json({ message: "Hello from Next.js!" });\n}\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Good to know"),":"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"API Routes ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/HTTP/CORS"},"do not specify CORS headers"),", meaning they are ",(0,s.kt)("strong",{parentName:"li"},"same-origin only")," by default. You can customize such behavior by wrapping the request handler with the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors"},"CORS request helpers"),"."))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"API Routes can't be used with ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/deploying/static-exports"},"static exports"),". However, ",(0,s.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handlers")," in the App Router can.",(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"API Routes will be affected by ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/next-config-js/pageExtensions"},(0,s.kt)("inlineCode",{parentName:"a"},"pageExtensions")," configuration")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"next.config.js"),"."))))),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function handler(req: NextApiRequest, res: NextApiResponse) {\n    // ...\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"req"),": An instance of ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/http.html#class-httpincomingmessage"},"http.IncomingMessage"),", plus some ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/next-server"},"pre-built middlewares")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res"),": An instance of ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/http.html#class-httpserverresponse"},"http.ServerResponse"),", plus some ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/next-server"},"helper functions"))),(0,s.kt)("h2",{id:"http-methods"},"HTTP Methods"),(0,s.kt)("p",null,"To handle different HTTP methods in an API route, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"req.method")," in your request handler, like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n    if (req.method === "POST") {\n        // Process a POST request\n    } else {\n        // Handle any other HTTP method\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default function handler(req, res) {\n    if (req.method === "POST") {\n        // Process a POST request\n    } else {\n        // Handle any other HTTP method\n    }\n}\n')),(0,s.kt)("h2",{id:"request-helpers"},"Request Helpers"),(0,s.kt)("p",null,"API Routes provide built-in request helpers which parse the incoming request (",(0,s.kt)("inlineCode",{parentName:"p"},"req"),"):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"req.cookies")," - An object containing the cookies sent by the request. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"{}")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"req.query")," - An object containing the ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Query_string"},"query string"),". Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"{}")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"req.body")," - An object containing the body parsed by ",(0,s.kt)("inlineCode",{parentName:"li"},"content-type"),", or ",(0,s.kt)("inlineCode",{parentName:"li"},"null")," if no body was sent")),(0,s.kt)("h3",{id:"custom-config"},"Custom config"),(0,s.kt)("p",null,"Every API Route can export a ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," object to change the default configuration, which is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export const config = {\n    api: {\n        bodyParser: {\n            sizeLimit: "1mb",\n        },\n    },\n    // Specifies the maximum allowed duration for this function to execute (in seconds)\n    maxDuration: 5,\n};\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bodyParser")," is automatically enabled. If you want to consume the body as a ",(0,s.kt)("inlineCode",{parentName:"p"},"Stream")," or with ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/raw-body"},(0,s.kt)("inlineCode",{parentName:"a"},"raw-body")),", you can set this to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"One use case for disabling the automatic ",(0,s.kt)("inlineCode",{parentName:"p"},"bodyParsing")," is to allow you to verify the raw body of a ",(0,s.kt)("strong",{parentName:"p"},"webhook")," request, for example ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks#validating-payloads-from-github"},"from GitHub"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export const config = {\n    api: {\n        bodyParser: false,\n    },\n};\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bodyParser.sizeLimit")," is the maximum size allowed for the parsed body, in any format supported by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/bytes.js"},"bytes"),", like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export const config = {\n    api: {\n        bodyParser: {\n            sizeLimit: "500kb",\n        },\n    },\n};\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"externalResolver")," is an explicit flag that tells the server that this route is being handled by an external resolver like ",(0,s.kt)("em",{parentName:"p"},"express")," or ",(0,s.kt)("em",{parentName:"p"},"connect"),". Enabling this option disables warnings for unresolved requests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export const config = {\n    api: {\n        externalResolver: true,\n    },\n};\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"responseLimit")," is automatically enabled, warning when an API Routes' response body is over 4MB."),(0,s.kt)("p",null,"If you are not using Next.js in a serverless environment, and understand the performance implications of not using a CDN or dedicated media host, you can set this limit to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export const config = {\n    api: {\n        responseLimit: false,\n    },\n};\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"responseLimit")," can also take the number of bytes or any string format supported by ",(0,s.kt)("inlineCode",{parentName:"p"},"bytes"),", for example ",(0,s.kt)("inlineCode",{parentName:"p"},"1000"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'500kb'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'3mb'"),".\nThis value will be the maximum response size before a warning is displayed. Default is 4MB. (see above)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export const config = {\n    api: {\n        responseLimit: "8mb",\n    },\n};\n')),(0,s.kt)("h2",{id:"response-helpers"},"Response Helpers"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},"Server Response object"),", (often abbreviated as ",(0,s.kt)("inlineCode",{parentName:"p"},"res"),") includes a set of Express.js-like helper methods to improve the developer experience and increase the speed of creating new API endpoints."),(0,s.kt)("p",null,"The included helpers are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res.status(code)")," - A function to set the status code. ",(0,s.kt)("inlineCode",{parentName:"li"},"code")," must be a valid ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"HTTP status code")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res.json(body)")," - Sends a JSON response. ",(0,s.kt)("inlineCode",{parentName:"li"},"body")," must be a ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res.send(body)")," - Sends the HTTP response. ",(0,s.kt)("inlineCode",{parentName:"li"},"body")," can be a ",(0,s.kt)("inlineCode",{parentName:"li"},"string"),", an ",(0,s.kt)("inlineCode",{parentName:"li"},"object")," or a ",(0,s.kt)("inlineCode",{parentName:"li"},"Buffer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res.redirect([status,] path)")," - Redirects to a specified path or URL. ",(0,s.kt)("inlineCode",{parentName:"li"},"status")," must be a valid ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"HTTP status code"),". If not specified, ",(0,s.kt)("inlineCode",{parentName:"li"},"status"),' defaults to "307" "Temporary redirect".'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"res.revalidate(urlPath)")," - ",(0,s.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},"Revalidate a page on demand")," using ",(0,s.kt)("inlineCode",{parentName:"li"},"getStaticProps"),". ",(0,s.kt)("inlineCode",{parentName:"li"},"urlPath")," must be a ",(0,s.kt)("inlineCode",{parentName:"li"},"string"),".")),(0,s.kt)("h3",{id:"setting-the-status-code-of-a-response"},"Setting the status code of a response"),(0,s.kt)("p",null,"When sending a response back to the client, you can set the status code of the response."),(0,s.kt)("p",null,"The following example sets the status code of the response to ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," (",(0,s.kt)("inlineCode",{parentName:"p"},"OK"),") and returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," property with the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello from Next.js!")," as a JSON response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\ntype ResponseData = {\n    message: string;\n};\n\nexport default function handler(\n    req: NextApiRequest,\n    res: NextApiResponse<ResponseData>,\n) {\n    res.status(200).json({ message: "Hello from Next.js!" });\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default function handler(req, res) {\n    res.status(200).json({ message: "Hello from Next.js!" });\n}\n')),(0,s.kt)("h3",{id:"sending-a-json-response"},"Sending a JSON response"),(0,s.kt)("p",null,"When sending a response back to the client you can send a JSON response, this must be a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Glossary/Serialization"},"serializable object"),".\nIn a real world application you might want to let the client know the status of the request depending on the result of the requested endpoint."),(0,s.kt)("p",null,"The following example sends a JSON response with the status code ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," (",(0,s.kt)("inlineCode",{parentName:"p"},"OK"),") and the result of the async operation. It's contained in a try catch block to handle any errors that may occur, with the appropriate status code and error message caught and sent back to the client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default async function handler(\n    req: NextApiRequest,\n    res: NextApiResponse,\n) {\n    try {\n        const result = await someAsyncOperation();\n        res.status(200).json({ result });\n    } catch (err) {\n        res.status(500).json({ error: "failed to load data" });\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default async function handler(req, res) {\n    try {\n        const result = await someAsyncOperation();\n        res.status(200).json({ result });\n    } catch (err) {\n        res.status(500).json({ error: "failed to load data" });\n    }\n}\n')),(0,s.kt)("h3",{id:"sending-a-http-response"},"Sending a HTTP response"),(0,s.kt)("p",null,"Sending an HTTP response works the same way as when sending a JSON response. The only difference is that the response body can be a ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", an ",(0,s.kt)("inlineCode",{parentName:"p"},"object")," or a ",(0,s.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,s.kt)("p",null,"The following example sends a HTTP response with the status code ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," (",(0,s.kt)("inlineCode",{parentName:"p"},"OK"),") and the result of the async operation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default async function handler(\n    req: NextApiRequest,\n    res: NextApiResponse,\n) {\n    try {\n        const result = await someAsyncOperation();\n        res.status(200).send({ result });\n    } catch (err) {\n        res.status(500).send({ error: "failed to fetch data" });\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default async function handler(req, res) {\n    try {\n        const result = await someAsyncOperation();\n        res.status(200).send({ result });\n    } catch (err) {\n        res.status(500).send({ error: "failed to fetch data" });\n    }\n}\n')),(0,s.kt)("h3",{id:"redirects-to-a-specified-path-or-url"},"Redirects to a specified path or URL"),(0,s.kt)("p",null,"Taking a form as an example, you may want to redirect your client to a specified path or URL once they have submitted the form."),(0,s.kt)("p",null,"The following example redirects the client to the ",(0,s.kt)("inlineCode",{parentName:"p"},"/")," path if the form is successfully submitted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/hello.ts" switcher',filename:'"pages/api/hello.ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default async function handler(\n    req: NextApiRequest,\n    res: NextApiResponse,\n) {\n    const { name, message } = req.body;\n\n    try {\n        await handleFormInputAsync({ name, message });\n        res.redirect(307, "/");\n    } catch (err) {\n        res.status(500).send({ error: "Failed to fetch data" });\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/hello.js" switcher',filename:'"pages/api/hello.js"',switcher:!0},'export default async function handler(req, res) {\n    const { name, message } = req.body;\n\n    try {\n        await handleFormInputAsync({ name, message });\n        res.redirect(307, "/");\n    } catch (err) {\n        res.status(500).send({ error: "failed to fetch data" });\n    }\n}\n')),(0,s.kt)("h3",{id:"adding-typescript-types"},"Adding TypeScript types"),(0,s.kt)("p",null,"You can make your API Routes more type-safe by importing the ",(0,s.kt)("inlineCode",{parentName:"p"},"NextApiRequest")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"NextApiResponse")," types from ",(0,s.kt)("inlineCode",{parentName:"p"},"next"),", in addition to those, you can also type your response data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import type { NextApiRequest, NextApiResponse } from "next";\n\ntype ResponseData = {\n    message: string;\n};\n\nexport default function handler(\n    req: NextApiRequest,\n    res: NextApiResponse<ResponseData>,\n) {\n    res.status(200).json({ message: "Hello from Next.js!" });\n}\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Good to know"),": The body of ",(0,s.kt)("inlineCode",{parentName:"p"},"NextApiRequest")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"any")," because the client may include any payload. You should validate the type/shape of the body at runtime before using it.")),(0,s.kt)("h2",{id:"dynamic-api-routes"},"Dynamic API Routes"),(0,s.kt)("p",null,"API Routes support ",(0,s.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"dynamic routes"),", and follow the same file naming rules used for ",(0,s.kt)("inlineCode",{parentName:"p"},"pages/"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/post/[pid].ts" switcher',filename:'"pages/api/post/[pid].ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n    const { pid } = req.query;\n    res.end(`Post: ${pid}`);\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/post/[pid].js" switcher',filename:'"pages/api/post/[pid].js"',switcher:!0},"export default function handler(req, res) {\n    const { pid } = req.query;\n    res.end(`Post: ${pid}`);\n}\n")),(0,s.kt)("p",null,"Now, a request to ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/abc")," will respond with the text: ",(0,s.kt)("inlineCode",{parentName:"p"},"Post: abc"),"."),(0,s.kt)("h3",{id:"catch-all-api-routes"},"Catch all API routes"),(0,s.kt)("p",null,"API Routes can be extended to catch all paths by adding three dots (",(0,s.kt)("inlineCode",{parentName:"p"},"..."),") inside the brackets. For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pages/api/post/[...slug].js")," matches ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/a"),", but also ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/a/b"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/a/b/c")," and so on.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Good to know"),": You can use names other than ",(0,s.kt)("inlineCode",{parentName:"p"},"slug"),", such as: ",(0,s.kt)("inlineCode",{parentName:"p"},"[...param]"))),(0,s.kt)("p",null,"Matched parameters will be sent as a query parameter (",(0,s.kt)("inlineCode",{parentName:"p"},"slug")," in the example) to the page, and it will always be an array, so, the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/a")," will have the following ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "slug": ["a"] }\n')),(0,s.kt)("p",null,"And in the case of ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/a/b"),", and any other matching path, new parameters will be added to the array, like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "slug": ["a", "b"] }\n')),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="pages/api/post/[...slug].ts" switcher',filename:'"pages/api/post/[...slug].ts"',switcher:!0},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n    const { slug } = req.query;\n    res.end(`Post: ${slug.join(", ")}`);\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="pages/api/post/[...slug].js" switcher',filename:'"pages/api/post/[...slug].js"',switcher:!0},'export default function handler(req, res) {\n    const { slug } = req.query;\n    res.end(`Post: ${slug.join(", ")}`);\n}\n')),(0,s.kt)("p",null,"Now, a request to ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/a/b/c")," will respond with the text: ",(0,s.kt)("inlineCode",{parentName:"p"},"Post: a, b, c"),"."),(0,s.kt)("h3",{id:"optional-catch-all-api-routes"},"Optional catch all API routes"),(0,s.kt)("p",null,"Catch all routes can be made optional by including the parameter in double brackets (",(0,s.kt)("inlineCode",{parentName:"p"},"[[...slug]]"),")."),(0,s.kt)("p",null,"For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"pages/api/post/[[...slug]].js")," will match ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/a"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post/a/b"),", and so on."),(0,s.kt)("p",null,"The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (",(0,s.kt)("inlineCode",{parentName:"p"},"/api/post")," in the example above)."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," objects are as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ } // GET `/api/post` (empty object)\n{ "slug": ["a"] } // `GET /api/post/a` (single-element array)\n{ "slug": ["a", "b"] } // `GET /api/post/a/b` (multi-element array)\n')),(0,s.kt)("h3",{id:"caveats"},"Caveats"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pages/api/post/create.js")," - Will match ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/create")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pages/api/post/[pid].js")," - Will match ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/1"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/abc"),", etc. But not ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/create")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"pages/api/post/[...slug].js")," - Will match ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/1/2"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/a/b/c"),", etc. But not ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/create"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"/api/post/abc"))))),(0,s.kt)("h2",{id:"edge-api-routes"},"Edge API Routes"),(0,s.kt)("p",null,"If you would like to use API Routes with the Edge Runtime, we recommend incrementally adopting the App Router and using ",(0,s.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handlers")," instead."),(0,s.kt)("p",null,"The Route Handlers function signature is isomorphic, meaning you can use the same function for both Edge and Node.js runtimes."))}c.isMDXComponent=!0}}]);