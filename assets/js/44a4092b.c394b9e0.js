"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6995],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={title:"rewrites",description:"Add rewrites to your Next.js app."},l=void 0,o={unversionedId:"app/api-reference/next-config-js/rewrites",id:"app/api-reference/next-config-js/rewrites",title:"rewrites",description:"Add rewrites to your Next.js app.",source:"@site/docs/02-app/02-api-reference/05-next-config-js/rewrites.mdx",sourceDirName:"02-app/02-api-reference/05-next-config-js",slug:"/app/api-reference/next-config-js/rewrites",permalink:"/docs/app/api-reference/next-config-js/rewrites",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/05-next-config-js/rewrites.mdx",tags:[],version:"current",frontMatter:{title:"rewrites",description:"Add rewrites to your Next.js app."},sidebar:"nextJsSidebar",previous:{title:"redirects",permalink:"/docs/app/api-reference/next-config-js/redirects"},next:{title:"serverComponentsExternalPackages",permalink:"/docs/app/api-reference/next-config-js/serverComponentsExternalPackages"}},s={},p=[{value:"Rewrite parameters",id:"rewrite-parameters",level:2},{value:"Path Matching",id:"path-matching",level:2},{value:"Wildcard Path Matching",id:"wildcard-path-matching",level:3},{value:"Regex Path Matching",id:"regex-path-matching",level:3},{value:"Header, Cookie, and Query Matching",id:"header-cookie-and-query-matching",level:2},{value:"Rewriting to an external URL",id:"rewriting-to-an-external-url",level:2},{value:"Incremental adoption of Next.js",id:"incremental-adoption-of-nextjs",level:3},{value:"Rewrites with basePath support",id:"rewrites-with-basepath-support",level:3},{value:"Rewrites with i18n support",id:"rewrites-with-i18n-support",level:3},{value:"Version History",id:"version-history",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,i.kt)("p",null,"Rewrites allow you to map an incoming request path to a different destination path."),(0,i.kt)("p",null,"Rewrites act as a URL proxy and mask the destination path, making it appear the user hasn't changed their location on the site. In contrast, ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/api-reference/next-config-js/redirects"},"redirects")," will reroute to a new page and show the URL changes."),(0,i.kt)("p",null,"To use rewrites you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rewrites")," key in ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/about",\n                destination: "/",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"Rewrites are applied to client-side routing, a ",(0,i.kt)("inlineCode",{parentName:"p"},'<Link href="/about">')," will have the rewrite applied in the above example."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rewrites")," is an async function that expects to return either an array or an object of arrays (see below) holding objects with ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - is the incoming request path pattern."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"destination"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," is the path you want to route to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basePath"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - if false the basePath won't be included when matching, can be used for external rewrites only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locale"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - whether the locale should not be included when matching."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"has")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"#header-cookie-and-query-matching"},"has objects")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"missing")," is an array of ",(0,i.kt)("a",{parentName:"li",href:"#header-cookie-and-query-matching"},"missing objects")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," properties.")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"rewrites")," function returns an array, rewrites are applied after checking the filesystem (pages and ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," files) and before dynamic routes. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"rewrites")," function returns an object of arrays with a specific shape, this behavior can be changed and more finely controlled, as of ",(0,i.kt)("inlineCode",{parentName:"p"},"v10.1")," of Next.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return {\n            beforeFiles: [\n                // These rewrites are checked after headers/redirects\n                // and before all files including _next/public files which\n                // allows overriding page files\n                {\n                    source: "/some-page",\n                    destination: "/somewhere-else",\n                    has: [{ type: "query", key: "overrideMe" }],\n                },\n            ],\n            afterFiles: [\n                // These rewrites are checked after pages/public files\n                // are checked but before dynamic routes\n                {\n                    source: "/non-existent",\n                    destination: "/somewhere-else",\n                },\n            ],\n            fallback: [\n                // These rewrites are checked after both pages/public files\n                // and dynamic routes are checked\n                {\n                    source: "/:path*",\n                    destination: `https://my-old-site.com/:path*`,\n                },\n            ],\n        };\n    },\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": rewrites in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeFiles")," do not check the filesystem/dynamic routes immediately after matching a source, they continue until all ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeFiles")," have been checked.")),(0,i.kt)("p",null,"The order Next.js routes are checked is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/app/api-reference/next-config-js/headers"},"headers")," are checked/applied"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/app/api-reference/next-config-js/redirects"},"redirects")," are checked/applied"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"beforeFiles")," rewrites are checked/applied"),(0,i.kt)("li",{parentName:"ol"},"static files from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/optimizing/static-assets"},"public directory"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_next/static")," files, and non-dynamic pages are checked/served"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"afterFiles")," rewrites are checked/applied, if one of these rewrites is matched we check dynamic routes/static files after each match"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback")," rewrites are checked/applied, these are applied before rendering the 404 page and after dynamic routes/all static assets have been checked. If you use ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/get-static-paths#fallback-true"},"fallback: true/'blocking'")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths"),", the fallback ",(0,i.kt)("inlineCode",{parentName:"li"},"rewrites")," defined in your ",(0,i.kt)("inlineCode",{parentName:"li"},"next.config.js")," will ",(0,i.kt)("em",{parentName:"li"},"not")," be run.")),(0,i.kt)("h2",{id:"rewrite-parameters"},"Rewrite parameters"),(0,i.kt)("p",null,"When using parameters in a rewrite the parameters will be passed in the query by default when none of the parameters are used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/old-about/:path*",\n                destination: "/about", // The :path parameter isn\'t used here so will be automatically passed in the query\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"If a parameter is used in the destination none of the parameters will be automatically passed in the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/docs/:path*",\n                destination: "/:path*", // The :path parameter is used here so will not be automatically passed in the query\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"You can still pass the parameters manually in the query if one is already used in the destination by specifying the query in the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/:first/:second",\n                destination: "/:first?second=:second",\n                // Since the :first parameter is used in the destination the :second parameter\n                // will not automatically be added in the query although we can manually add it\n                // as shown above\n            },\n        ];\n    },\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": Static pages from ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/rendering/automatic-static-optimization"},"Automatic Static Optimization")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/get-static-props"},"prerendering")," params from rewrites will be parsed on the client after hydration and provided in the query.")),(0,i.kt)("h2",{id:"path-matching"},"Path Matching"),(0,i.kt)("p",null,"Path matches are allowed, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/:slug")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/hello-world")," (no nested paths):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/blog/:slug",\n                destination: "/news/:slug", // Matched parameters can be used in the destination\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"wildcard-path-matching"},"Wildcard Path Matching"),(0,i.kt)("p",null,"To match a wildcard path you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," after a parameter, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/:slug*")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/a/b/c/d/hello-world"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/blog/:slug*",\n                destination: "/news/:slug*", // Matched parameters can be used in the destination\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"regex-path-matching"},"Regex Path Matching"),(0,i.kt)("p",null,"To match a regex path you can wrap the regex in parenthesis after a parameter, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/:slug(\\\\d{1,})")," will match ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/123")," but not ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog/abc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/old-blog/:post(\\\\d{1,})",\n                destination: "/blog/:post", // Matched parameters can be used in the destination\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"The following characters ",(0,i.kt)("inlineCode",{parentName:"p"},"("),", ",(0,i.kt)("inlineCode",{parentName:"p"},")"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"{"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," are used for regex path matching, so when used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," as non-special values they must be escaped by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\")," before them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                // this will match `/english(default)/something` being requested\n                source: "/english\\\\(default\\\\)/:slug",\n                destination: "/en-us/:slug",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h2",{id:"header-cookie-and-query-matching"},"Header, Cookie, and Query Matching"),(0,i.kt)("p",null,"To only match a rewrite when header, cookie, or query values also match the ",(0,i.kt)("inlineCode",{parentName:"p"},"has")," field or don't match the ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," field can be used. Both the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and all ",(0,i.kt)("inlineCode",{parentName:"p"},"has")," items must match and all ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," items must not match for the rewrite to be applied."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"has")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," items can have the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - must be either ",(0,i.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cookie"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"host"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - the key from the selected type to match against."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," - the value to check for, if undefined any value will match. A regex like string can be used to capture a specific part of the value, e.g. if the value ",(0,i.kt)("inlineCode",{parentName:"li"},"first-(?<paramName>.*)")," is used for ",(0,i.kt)("inlineCode",{parentName:"li"},"first-second")," then ",(0,i.kt)("inlineCode",{parentName:"li"},"second")," will be usable in the destination with ",(0,i.kt)("inlineCode",{parentName:"li"},":paramName"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            // if the header `x-rewrite-me` is present,\n            // this rewrite will be applied\n            {\n                source: "/:path*",\n                has: [\n                    {\n                        type: "header",\n                        key: "x-rewrite-me",\n                    },\n                ],\n                destination: "/another-page",\n            },\n            // if the header `x-rewrite-me` is not present,\n            // this rewrite will be applied\n            {\n                source: "/:path*",\n                missing: [\n                    {\n                        type: "header",\n                        key: "x-rewrite-me",\n                    },\n                ],\n                destination: "/another-page",\n            },\n            // if the source, query, and cookie are matched,\n            // this rewrite will be applied\n            {\n                source: "/specific/:path*",\n                has: [\n                    {\n                        type: "query",\n                        key: "page",\n                        // the page value will not be available in the\n                        // destination since value is provided and doesn\'t\n                        // use a named capture group e.g. (?<page>home)\n                        value: "home",\n                    },\n                    {\n                        type: "cookie",\n                        key: "authorized",\n                        value: "true",\n                    },\n                ],\n                destination: "/:path*/home",\n            },\n            // if the header `x-authorized` is present and\n            // contains a matching value, this rewrite will be applied\n            {\n                source: "/:path*",\n                has: [\n                    {\n                        type: "header",\n                        key: "x-authorized",\n                        value: "(?<authorized>yes|true)",\n                    },\n                ],\n                destination: "/home?authorized=:authorized",\n            },\n            // if the host is `example.com`,\n            // this rewrite will be applied\n            {\n                source: "/:path*",\n                has: [\n                    {\n                        type: "host",\n                        value: "example.com",\n                    },\n                ],\n                destination: "/another-page",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h2",{id:"rewriting-to-an-external-url"},"Rewriting to an external URL"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/custom-routes-proxying"},"Incremental adoption of Next.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-zones"},"Using Multiple Zones")))),(0,i.kt)("p",null,"Rewrites allow you to rewrite to an external url. This is especially useful for incrementally adopting Next.js. The following is an example rewrite for redirecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"/blog")," route of your main app to an external site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return [\n            {\n                source: "/blog",\n                destination: "https://example.com/blog",\n            },\n            {\n                source: "/blog/:slug",\n                destination: "https://example.com/blog/:slug", // Matched parameters can be used in the destination\n            },\n        ];\n    },\n};\n')),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"trailingSlash: true"),", you also need to insert a trailing slash in the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," parameter. If the destination server is also expecting a trailing slash it should be included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," parameter as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    trailingSlash: true,\n    async rewrites() {\n        return [\n            {\n                source: "/blog/",\n                destination: "https://example.com/blog/",\n            },\n            {\n                source: "/blog/:path*/",\n                destination: "https://example.com/blog/:path*/",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"incremental-adoption-of-nextjs"},"Incremental adoption of Next.js"),(0,i.kt)("p",null,"You can also have Next.js fall back to proxying to an existing website after checking all Next.js routes."),(0,i.kt)("p",null,"This way you don't have to change the rewrites configuration when migrating more pages to Next.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    async rewrites() {\n        return {\n            fallback: [\n                {\n                    source: "/:path*",\n                    destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,\n                },\n            ],\n        };\n    },\n};\n')),(0,i.kt)("h3",{id:"rewrites-with-basepath-support"},"Rewrites with basePath support"),(0,i.kt)("p",null,"When leveraging ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/api-reference/next-config-js/basePath"},(0,i.kt)("inlineCode",{parentName:"a"},"basePath")," support")," with rewrites each ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," is automatically prefixed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath")," unless you add ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath: false")," to the rewrite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    basePath: "/docs",\n\n    async rewrites() {\n        return [\n            {\n                source: "/with-basePath", // automatically becomes /docs/with-basePath\n                destination: "/another", // automatically becomes /docs/another\n            },\n            {\n                // does not add /docs to /without-basePath since basePath: false is set\n                // Note: this can not be used for internal rewrites e.g. `destination: \'/another\'`\n                source: "/without-basePath",\n                destination: "https://example.com",\n                basePath: false,\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h3",{id:"rewrites-with-i18n-support"},"Rewrites with i18n support"),(0,i.kt)("p",null,"When leveraging ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/internationalization"},(0,i.kt)("inlineCode",{parentName:"a"},"i18n")," support")," with rewrites each ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," is automatically prefixed to handle the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"locales")," unless you add ",(0,i.kt)("inlineCode",{parentName:"p"},"locale: false")," to the rewrite. If ",(0,i.kt)("inlineCode",{parentName:"p"},"locale: false")," is used you must prefix the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," with a locale for it to be matched correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'module.exports = {\n    i18n: {\n        locales: ["en", "fr", "de"],\n        defaultLocale: "en",\n    },\n\n    async rewrites() {\n        return [\n            {\n                source: "/with-locale", // automatically handles all locales\n                destination: "/another", // automatically passes the locale on\n            },\n            {\n                // does not handle locales automatically since locale: false is set\n                source: "/nl/with-locale-manual",\n                destination: "/nl/another",\n                locale: false,\n            },\n            {\n                // this matches \'/\' since `en` is the defaultLocale\n                source: "/en",\n                destination: "/en/another",\n                locale: false,\n            },\n            {\n                // it\'s possible to match all locales even when locale: false is set\n                source: "/:locale/api-alias/:path*",\n                destination: "/api/:path*",\n                locale: false,\n            },\n            {\n                // this gets converted to /(en|fr|de)/(.*) so will not match the top-level\n                // `/` or `/fr` routes like /:path* would\n                source: "/(.*)",\n                destination: "/another",\n            },\n        ];\n    },\n};\n')),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v13.3.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"missing")," added.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v10.2.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"has")," added.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v9.5.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Headers added.")))))}m.isMDXComponent=!0}}]);