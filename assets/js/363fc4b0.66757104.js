"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,k=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:10,title:"Third Party Libraries",description:"Optimize the performance of third-party libraries in your application with the `@next/third-parties` package."},i=void 0,o={unversionedId:"app/building-your-application/optimizing/third-party-libraries",id:"app/building-your-application/optimizing/third-party-libraries",title:"Third Party Libraries",description:"Optimize the performance of third-party libraries in your application with the `@next/third-parties` package.",source:"@site/docs/02-app/01-building-your-application/06-optimizing/10-third-party-libraries.mdx",sourceDirName:"02-app/01-building-your-application/06-optimizing",slug:"/app/building-your-application/optimizing/third-party-libraries",permalink:"/docs/app/building-your-application/optimizing/third-party-libraries",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/06-optimizing/10-third-party-libraries.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Third Party Libraries",description:"Optimize the performance of third-party libraries in your application with the `@next/third-parties` package."},sidebar:"nextJsSidebar",previous:{title:"Instrumentation",permalink:"/docs/app/building-your-application/optimizing/instrumentation"},next:{title:"Configuring",permalink:"/docs/app/building-your-application/configuring/"}},p={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Google Third-Parties",id:"google-third-parties",level:2},{value:"Google Tag Manager",id:"google-tag-manager",level:3},{value:"Sending Events",id:"sending-events",level:4},{value:"Options",id:"options",level:4},{value:"Google Maps Embed",id:"google-maps-embed",level:3},{value:"Options",id:"options-1",level:4},{value:"YouTube Embed",id:"youtube-embed",level:3},{value:"Options",id:"options-2",level:4}],m={toc:d},u="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@next/third-parties"))," is a library that provides a collection of components and utilities that\nimprove the performance and developer experience of loading popular third-party libraries in your\nNext.js application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"@next/third-parties")," is a new ",(0,r.kt)("strong",{parentName:"p"},"experimental")," library that is still under\nactive development. We're currently working on adding more third-party integrations.")),(0,r.kt)("p",null,"All third-party integrations provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@next/third-parties")," have been optimized for performance\nand ease of use."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get started, you must install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@next/third-parties")," library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm install @next/third-parties\n")),(0,r.kt)("h2",{id:"google-third-parties"},"Google Third-Parties"),(0,r.kt)("p",null,"All supported third-party libraries from Google can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@next/third-parties/google"),"."),(0,r.kt)("h3",{id:"google-tag-manager"},"Google Tag Manager"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleTagManager")," component can be used to instantiate a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager"},"Google Tag\nManager")," container to your\npage. By default, it fetches the original inline script after hydration occurs on the page."),(0,r.kt)("p",null,"To load Google Tag Manager for all routes, include the component directly in your root layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/layout.tsx" switcher',filename:'"app/layout.tsx"',switcher:!0},'import { GoogleTagManager } from "@next/third-parties/google";\n\nexport default function RootLayout({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n            <GoogleTagManager gtmId="GTM-XYZ" />\n        </html>\n    );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js" switcher',filename:'"app/layout.js"',switcher:!0},'import { GoogleTagManager } from "@next/third-parties/google";\n\nexport default function RootLayout({ children }) {\n    return (\n        <html lang="en">\n            <body>{children}</body>\n            <GoogleTagManager gtmId="GTM-XYZ" />\n        </html>\n    );\n}\n')),(0,r.kt)("p",null,"To load Google Tag Manager for a single route, include the component in your page file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import { GoogleTagManager } from "@next/third-parties/google";\n\nexport default function Page() {\n    return <GoogleTagManager gtmId="GTM-XYZ" />;\n}\n')),(0,r.kt)("h4",{id:"sending-events"},"Sending Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sendGTMEvent")," function can be used to track user interactions on your page by sending events\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLayer")," object. For this function to work, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<GoogleTagManager />")," component must be\nincluded in either a parent layout, page, or component, or directly in the same file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'"use client";\n\nimport { sendGTMEvent } from "@next/third-parties/google";\n\nexport function EventButton() {\n    return (\n        <div>\n            <button\n                onClick={() =>\n                    sendGTMEvent({ event: "buttonClicked", value: "xyz" })\n                }\n            >\n                Send Event\n            </button>\n        </div>\n    );\n}\n')),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/datalayer"},"Tag Manager"),"\ndocumentation to learn about the different variables and events that can be passed into the\nfunction."),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"Options to pass to the Google Tag Manager. For a full list of options, read the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/datalayer"},"Google Tag Manager\ndocs"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gtmId")),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Your GTM container id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataLayer")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Data layer array to instantiate the container with. Defaults to an empty array.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataLayerName")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the data layer. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"dataLayer"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auth")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of authentication parameter (",(0,r.kt)("inlineCode",{parentName:"td"},"gtm_auth"),") for environment snippets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of preview parameter (",(0,r.kt)("inlineCode",{parentName:"td"},"gtm_preview"),") for environment snippets.")))),(0,r.kt)("h3",{id:"google-maps-embed"},"Google Maps Embed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleMapsEmbed")," component can be used to add a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/embed/embedding-map"},"Google Maps\nEmbed")," to your page. By\ndefault, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," attribute to lazy-load the embed below the fold."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import { GoogleMapsEmbed } from "@next/third-parties/google";\n\nexport default function Page() {\n    return (\n        <GoogleMapsEmbed\n            apiKey="XYZ"\n            height={200}\n            width="100%"\n            mode="place"\n            q="Brooklyn+Bridge,New+York,NY"\n        />\n    );\n}\n')),(0,r.kt)("h4",{id:"options-1"},"Options"),(0,r.kt)("p",null,"Options to pass to the Google Maps Embed. For a full list of options, read the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/embed/embedding-map"},"Google Map Embed\ndocs"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiKey")),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Your api key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/embed/embedding-map#choosing_map_modes"},"Map mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the embed. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"auto"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Width of the embed. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"auto"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Pass styles to the iframe.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowfullscreen")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Property to allow certain map parts to go full screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defaults to lazy. Consider changing if you know your embed will be above the fold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"q")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines map marker location. ",(0,r.kt)("em",{parentName:"td"},"This may be required depending on the map mode"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"center")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the center of the map view.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets initial zoom level of the map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maptype")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines type of map tiles to load.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"language")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the language to use for UI elements and for the display of labels on map tiles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the appropriate borders and labels to display, based on geo-political sensitivities.")))),(0,r.kt)("h3",{id:"youtube-embed"},"YouTube Embed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"YouTubeEmbed")," component can be used to load and display a YouTube embed. This component loads\nfaster by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paulirish/lite-youtube-embed"},(0,r.kt)("inlineCode",{parentName:"a"},"lite-youtube-embed"))," under the\nhood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},'import { YouTubeEmbed } from "@next/third-parties/google";\n\nexport default function Page() {\n    return (\n        <YouTubeEmbed videoid="ogfYd705cRs" height={400} params="controls=0" />\n    );\n}\n')),(0,r.kt)("h4",{id:"options-2"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"videoid")),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"YouTube video id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Width of the video container. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the video container. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"auto"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"playlabel")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"A visually hidden label for the play button for accessibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"The video player params defined ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/youtube/player_parameters#Parameters"},"here"),". ",(0,r.kt)("br",null)," Params are passed as a query param string. ",(0,r.kt)("br",null)," Eg: ",(0,r.kt)("inlineCode",{parentName:"td"},'params="controls=0&start=10&end=30"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to apply styles to the video container.")))))}s.isMDXComponent=!0}}]);