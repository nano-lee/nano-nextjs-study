"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"useReportWebVitals",description:"API Reference for the useReportWebVitals function."},o=void 0,l={unversionedId:"app/api-reference/functions/use-report-web-vitals",id:"app/api-reference/functions/use-report-web-vitals",title:"useReportWebVitals",description:"API Reference for the useReportWebVitals function.",source:"@site/docs/02-app/02-api-reference/04-functions/use-report-web-vitals.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/use-report-web-vitals",permalink:"/docs/app/api-reference/functions/use-report-web-vitals",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/use-report-web-vitals.mdx",tags:[],version:"current",frontMatter:{title:"useReportWebVitals",description:"API Reference for the useReportWebVitals function."},sidebar:"nextJsSidebar",previous:{title:"usePathname",permalink:"/docs/app/api-reference/functions/use-pathname"},next:{title:"useRouter",permalink:"/docs/app/api-reference/functions/use-router"}},s={},p=[{value:"useReportWebVitals",id:"usereportwebvitals",level:2},{value:"Web Vitals",id:"web-vitals",level:2},{value:"Usage on Vercel",id:"usage-on-vercel",level:2},{value:"Sending results to external systems",id:"sending-results-to-external-systems",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{/",(0,r.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useReportWebVitals")," hook allows you to report ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/vitals/"},"Core Web Vitals"),", and can be used in combination with your analytics service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/_components/web-vitals.js"',filename:'"app/_components/web-vitals.js"'},'"use client";\n\nimport { useReportWebVitals } from "next/web-vitals";\n\nexport function WebVitals() {\n    useReportWebVitals((metric) => {\n        console.log(metric);\n    });\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/layout.js"',filename:'"app/layout.js"'},'import { WebVitals } from "./_components/web-vitals";\n\nexport default function Layout({ children }) {\n    return (\n        <html>\n            <body>\n                <WebVitals />\n                {children}\n            </body>\n        </html>\n    );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"useReportWebVitals")," hook requires the ",(0,r.kt)("inlineCode",{parentName:"p"},'"use client"')," directive, the most performant approach is to create a separate component that the root layout imports. This confines the client boundary exclusively to the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebVitals")," component.")),(0,r.kt)("h2",{id:"usereportwebvitals"},"useReportWebVitals"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metric")," object passed as the hook's argument consists of a number of properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": Unique identifier for the metric in the context of the current page load"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The name of the performance metric. Possible values include names of ",(0,r.kt)("a",{parentName:"li",href:"#web-vitals"},"Web Vitals")," metrics (TTFB, FCP, LCP, FID, CLS) specific to a web application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delta"),": The difference between the current value and the previous value of the metric. The value is typically in milliseconds and represents the change in the metric's value over time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entries"),": An array of ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/PerformanceEntry"},"Performance Entries")," associated with the metric. These entries provide detailed information about the performance events related to the metric."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigationType"),": Indicates the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/PerformanceNavigationTiming/type"},"type of navigation")," that triggered the metric collection. Possible values include ",(0,r.kt)("inlineCode",{parentName:"li"},'"navigate"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"reload"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"back_forward"'),", and ",(0,r.kt)("inlineCode",{parentName:"li"},'"prerender"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rating"),": A qualitative rating of the metric value, providing an assessment of the performance. Possible values are ",(0,r.kt)("inlineCode",{parentName:"li"},'"good"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"needs-improvement"'),", and ",(0,r.kt)("inlineCode",{parentName:"li"},'"poor"'),". The rating is typically determined by comparing the metric value against predefined thresholds that indicate acceptable or suboptimal performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The actual value or duration of the performance entry, typically in milliseconds. The value provides a quantitative measure of the performance aspect being tracked by the metric. The source of the value depends on the specific metric being measured and can come from various ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/API/Performance_API"},"Performance API"),"s.")),(0,r.kt)("h2",{id:"web-vitals"},"Web Vitals"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://web.dev/vitals/"},"Web Vitals")," are a set of useful metrics that aim to capture the user\nexperience of a web page. The following web vitals are all included:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Glossary/Time_to_first_byte"},"Time to First Byte")," (TTFB)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Glossary/First_contentful_paint"},"First Contentful Paint")," (FCP)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/lcp/"},"Largest Contentful Paint")," (LCP)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/fid/"},"First Input Delay")," (FID)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/cls/"},"Cumulative Layout Shift")," (CLS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/inp/"},"Interaction to Next Paint")," (INP)")),(0,r.kt)("p",null,"You can handle all the results of these metrics using the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/components/web-vitals.tsx" switcher',filename:'"app/components/web-vitals.tsx"',switcher:!0},'"use client";\n\nimport { useReportWebVitals } from "next/web-vitals";\n\nexport function WebVitals() {\n    useReportWebVitals((metric) => {\n        switch (metric.name) {\n            case "FCP": {\n                // handle FCP results\n            }\n            case "LCP": {\n                // handle LCP results\n            }\n            // ...\n        }\n    });\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/components/web-vitals.js" switcher',filename:'"app/components/web-vitals.js"',switcher:!0},'"use client";\n\nimport { useReportWebVitals } from "next/web-vitals";\n\nexport function WebVitals() {\n    useReportWebVitals((metric) => {\n        switch (metric.name) {\n            case "FCP": {\n                // handle FCP results\n            }\n            case "LCP": {\n                // handle LCP results\n            }\n            // ...\n        }\n    });\n}\n')),(0,r.kt)("h2",{id:"usage-on-vercel"},"Usage on Vercel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/speed-insights"},"Vercel Speed Insights")," are automatically configured on Vercel deployments, and don't require the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"useReportWebVitals"),". This hook is useful in local development, or if you're using a different analytics service."),(0,r.kt)("h2",{id:"sending-results-to-external-systems"},"Sending results to external systems"),(0,r.kt)("p",null,"You can send results to any endpoint to measure and track\nreal user performance on your site. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'useReportWebVitals((metric) => {\n    const body = JSON.stringify(metric);\n    const url = "https://example.com/analytics";\n\n    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.\n    if (navigator.sendBeacon) {\n        navigator.sendBeacon(url, body);\n    } else {\n        fetch(url, { body, method: "POST", keepalive: true });\n    }\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": If you use ",(0,r.kt)("a",{parentName:"p",href:"https://analytics.google.com/analytics/web/"},"Google Analytics"),", using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," value can allow you to construct metric distributions manually (to calculate percentiles,\netc.)")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useReportWebVitals(metric => {\n  // Use `window.gtag` if you initialized Google Analytics as this example:\n  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js\n  window.gtag('event', metric.name, {\n    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers\n    event_label: metric.id, // id unique to current page load\n    non_interaction: true, // avoids affecting bounce rate.\n  });\n}\n")),(0,r.kt)("p",{parentName:"blockquote"},"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics"},"sending results to Google Analytics"),".")))}m.isMDXComponent=!0}}]);