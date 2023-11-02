"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"redirects",description:"Add redirects to your Next.js app."},l=void 0,o={unversionedId:"app/api-reference/next-config-js/redirects",id:"app/api-reference/next-config-js/redirects",title:"redirects",description:"Add redirects to your Next.js app.",source:"@site/docs/02-app/02-api-reference/05-next-config-js/redirects.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/redirects",permalink:"/docs/app/api-reference/next-config-js/redirects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/redirects.mdx",tags:[],version:"current",frontMatter:{title:"redirects",description:"Add redirects to your Next.js app."},sidebar:"tutorialSidebar",previous:{title:"reactStrictMode",permalink:"/docs/app/api-reference/next-config-js/reactStrictMode"},next:{title:"rewrites",permalink:"/docs/app/api-reference/next-config-js/rewrites"}},s={},p=[{value:"Path Matching",id:"path-matching",level:2},{value:"Wildcard Path Matching",id:"wildcard-path-matching",level:3},{value:"Regex Path Matching",id:"regex-path-matching",level:3},{value:"Header, Cookie, and Query Matching",id:"header-cookie-and-query-matching",level:2},{value:"Redirects with basePath support",id:"redirects-with-basepath-support",level:3},{value:"Redirects with i18n support",id:"redirects-with-i18n-support",level:3},{value:"Other Redirects",id:"other-redirects",level:2},{value:"Version History",id:"version-history",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("p",null,"Redirects allow you to redirect an incoming request path to a different destination path."),(0,i.kt)("p",null,"To use redirects you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirects")," key in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            {\n                source: "/about",\n                destination: "/",\n                permanent: true,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"redirects")," is an async function that expects an array to be returned holding objects with ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"permanent")," properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," is the incoming request path pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"destination")," is the path you want to route to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permanent")," ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," - if ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," will use the 308 status code which instructs clients/search engines to cache the redirect forever, if ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," will use the 307 status code which is temporary and is not cached.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Why does Next.js use 307 and 308?")," Traditionally a 302 was used for a temporary redirect, and a 301 for a permanent redirect, but many browsers changed the request method of the redirect to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", regardless of the original method. For example, if the browser made a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/users")," which returned status code ",(0,i.kt)("inlineCode",{parentName:"p"},"302")," with location ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/users"),", the subsequent request might be ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v2/users")," instead of the expected ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v2/users"),". Next.js uses the 307 temporary redirect, and 308 permanent redirect status codes to explicitly preserve the request method used.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basePath"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - if false the ",(0,i.kt)("inlineCode",{parentName:"li"},"basePath")," won't be included when matching, can be used for external redirects only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locale"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - whether the locale should not be included when matching."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"has")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"#header-cookie-and-query-matching"},"has objects")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"missing")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"#header-cookie-and-query-matching"},"missing objects")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," properties.")),(0,i.kt)("p",null,"Redirects are checked before the filesystem which includes pages and ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," files."),(0,i.kt)("p",null,"Redirects are not applied to client-side routing (",(0,i.kt)("inlineCode",{parentName:"p"},"Link"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push"),"), unless ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/middleware"},"Middleware")," is present and matches the path."),(0,i.kt)("p",null,"When a redirect is applied, any query values provided in the request will be passed through to the redirect destination. For example, see the following redirect configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  source: '/old-blog/:path*',\n  destination: '/blog/:path*',\n  permanent: false\n}\n")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"/old-blog/post-1?hello=world")," is requested, the client will be redirected to ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/post-1?hello=world"),"."),(0,i.kt)("h2",{id:"path-matching"},"Path Matching"),(0,i.kt)("p",null,"Path matches are allowed, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/old-blog/:slug")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/old-blog/hello-world")," (no nested paths):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            {\n                source: "/old-blog/:slug",\n                destination: "/news/:slug", // Matched parameters can be used in the destination\n                permanent: true,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"wildcard-path-matching"},"Wildcard Path Matching"),(0,i.kt)("p",null,"To match a wildcard path you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," after a parameter, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/:slug*")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/a/b/c/d/hello-world"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            {\n                source: "/blog/:slug*",\n                destination: "/news/:slug*", // Matched parameters can be used in the destination\n                permanent: true,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"regex-path-matching"},"Regex Path Matching"),(0,i.kt)("p",null,"To match a regex path you can wrap the regex in parentheses after a parameter, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/post/:slug(\\\\d{1,})")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/post/123")," but not ",(0,i.kt)("inlineCode",{parentName:"p"},"/post/abc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            {\n                source: "/post/:slug(\\\\d{1,})",\n                destination: "/news/:slug", // Matched parameters can be used in the destination\n                permanent: false,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"The following characters ",(0,i.kt)("inlineCode",{parentName:"p"},"("),", ",(0,i.kt)("inlineCode",{parentName:"p"},")"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"{"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," are used for regex path matching, so when used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," as non-special values they must be escaped by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\")," before them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            {\n                // this will match `/english(default)/something` being requested\n                source: "/english\\\\(default\\\\)/:slug",\n                destination: "/en-us/:slug",\n                permanent: false,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h2",{id:"header-cookie-and-query-matching"},"Header, Cookie, and Query Matching"),(0,i.kt)("p",null,"To only match a redirect when header, cookie, or query values also match the ",(0,i.kt)("inlineCode",{parentName:"p"},"has")," field or don't match the ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," field can be used. Both the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and all ",(0,i.kt)("inlineCode",{parentName:"p"},"has")," items must match and all ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," items must not match for the redirect to be applied."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"has")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," items can have the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - must be either ",(0,i.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cookie"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"host"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - the key from the selected type to match against."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - the value to check for, if undefined any value will match. A regex like string can be used to capture a specific part of the value, e.g. if the value ",(0,i.kt)("inlineCode",{parentName:"li"},"first-(?<paramName>.*)")," is used for ",(0,i.kt)("inlineCode",{parentName:"li"},"first-second")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"second")," will be usable in the destination with ",(0,i.kt)("inlineCode",{parentName:"li"},":paramName"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async redirects() {\n        return [\n            // if the header `x-redirect-me` is present,\n            // this redirect will be applied\n            {\n                source: "/:path((?!another-page$).*)",\n                has: [\n                    {\n                        type: "header",\n                        key: "x-redirect-me",\n                    },\n                ],\n                permanent: false,\n                destination: "/another-page",\n            },\n            // if the header `x-dont-redirect` is present,\n            // this redirect will NOT be applied\n            {\n                source: "/:path((?!another-page$).*)",\n                missing: [\n                    {\n                        type: "header",\n                        key: "x-do-not-redirect",\n                    },\n                ],\n                permanent: false,\n                destination: "/another-page",\n            },\n            // if the source, query, and cookie are matched,\n            // this redirect will be applied\n            {\n                source: "/specific/:path*",\n                has: [\n                    {\n                        type: "query",\n                        key: "page",\n                        // the page value will not be available in the\n                        // destination since value is provided and doesn\'t\n                        // use a named capture group e.g. (?<page>home)\n                        value: "home",\n                    },\n                    {\n                        type: "cookie",\n                        key: "authorized",\n                        value: "true",\n                    },\n                ],\n                permanent: false,\n                destination: "/another/:path*",\n            },\n            // if the header `x-authorized` is present and\n            // contains a matching value, this redirect will be applied\n            {\n                source: "/",\n                has: [\n                    {\n                        type: "header",\n                        key: "x-authorized",\n                        value: "(?<authorized>yes|true)",\n                    },\n                ],\n                permanent: false,\n                destination: "/home?authorized=:authorized",\n            },\n            // if the host is `example.com`,\n            // this redirect will be applied\n            {\n                source: "/:path((?!another-page$).*)",\n                has: [\n                    {\n                        type: "host",\n                        value: "example.com",\n                    },\n                ],\n                permanent: false,\n                destination: "/another-page",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"redirects-with-basepath-support"},"Redirects with basePath support"),(0,i.kt)("p",null,"When leveraging ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/api-reference/next-config-js/basePath"},(0,i.kt)("inlineCode",{parentName:"a"},"basePath")," support")," with redirects each ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," is automatically prefixed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," unless you add ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath: false")," to the redirect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    basePath: "/docs",\n\n    async redirects() {\n        return [\n            {\n                source: "/with-basePath", // automatically becomes /docs/with-basePath\n                destination: "/another", // automatically becomes /docs/another\n                permanent: false,\n            },\n            {\n                // does not add /docs since basePath: false is set\n                source: "/without-basePath",\n                destination: "https://example.com",\n                basePath: false,\n                permanent: false,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"redirects-with-i18n-support"},"Redirects with i18n support"),(0,i.kt)("p",null,"When leveraging ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/internationalization"},(0,i.kt)("inlineCode",{parentName:"a"},"i18n")," support")," with redirects each ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," is automatically prefixed to handle the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"locales")," unless you add ",(0,i.kt)("inlineCode",{parentName:"p"},"locale: false")," to the redirect. If ",(0,i.kt)("inlineCode",{parentName:"p"},"locale: false")," is used you must prefix the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," with a locale for it to be matched correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    i18n: {\n        locales: ["en", "fr", "de"],\n        defaultLocale: "en",\n    },\n\n    async redirects() {\n        return [\n            {\n                source: "/with-locale", // automatically handles all locales\n                destination: "/another", // automatically passes the locale on\n                permanent: false,\n            },\n            {\n                // does not handle locales automatically since locale: false is set\n                source: "/nl/with-locale-manual",\n                destination: "/nl/another",\n                locale: false,\n                permanent: false,\n            },\n            {\n                // this matches \'/\' since `en` is the defaultLocale\n                source: "/en",\n                destination: "/en/another",\n                locale: false,\n                permanent: false,\n            },\n            // it\'s possible to match all locales even when locale: false is set\n            {\n                source: "/:locale/page",\n                destination: "/en/newpage",\n                permanent: false,\n                locale: false,\n            },\n            {\n                // this gets converted to /(en|fr|de)/(.*) so will not match the top-level\n                // `/` or `/fr` routes like /:path* would\n                source: "/(.*)",\n                destination: "/another",\n                permanent: false,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"In some rare cases, you might need to assign a custom status code for older HTTP Clients to properly redirect. In these cases, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," property instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"permanent")," property, but not both. To to ensure IE11 compatibility, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh")," header is automatically added for the 308 status code."),(0,i.kt)("h2",{id:"other-redirects"},"Other Redirects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/next-server"},"API Routes"),", you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"res.redirect()"),"."),(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-static-props"},(0,i.kt)("inlineCode",{parentName:"a"},"getStaticProps"))," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},(0,i.kt)("inlineCode",{parentName:"a"},"getServerSideProps")),", you can redirect specific pages at request-time.")),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"missing")," added.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v10.2.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"has")," added.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v9.5.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirects")," added.")))))}u.isMDXComponent=!0}}]);