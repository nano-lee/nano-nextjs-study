"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(6010),o=a(2802),i=a(9960),p=a(3919),s=a(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},a)}function u(e){let{href:t,icon:a,title:o,description:i}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:o},a," ",o),i&&n.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:i},i))}function d(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?n.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,p.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,o.jA)();return n.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},6731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905)),o=a(2991);const i={title:"App Router",description:"Use the new App Router with Next.js' and React's latest features, including Layouts, Server Components, Suspense, and more."},p=void 0,s={unversionedId:"app/index",id:"app/index",title:"App Router",description:"Use the new App Router with Next.js' and React's latest features, including Layouts, Server Components, Suspense, and more.",source:"@site/docs/02-app/index.mdx",sourceDirName:"02-app",slug:"/app/",permalink:"/docs/app/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/index.mdx",tags:[],version:"current",frontMatter:{title:"App Router",description:"Use the new App Router with Next.js' and React's latest features, including Layouts, Server Components, Suspense, and more."},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/docs/getting-started/project-structure"},next:{title:"Building Your Application",permalink:"/docs/app/building-your-application/"}},c={},l=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"How can I access the request object in a layout?",id:"how-can-i-access-the-request-object-in-a-layout",level:3},{value:"How can I access the URL on a page?",id:"how-can-i-access-the-url-on-a-page",level:3},{value:"How can I redirect from a Server Component?",id:"how-can-i-redirect-from-a-server-component",level:3},{value:"How can I handle authentication with the App Router?",id:"how-can-i-handle-authentication-with-the-app-router",level:3},{value:"How can I set cookies?",id:"how-can-i-set-cookies",level:3},{value:"How can I build multi-tenant apps?",id:"how-can-i-build-multi-tenant-apps",level:3},{value:"How can I invalidate the App Router cache?",id:"how-can-i-invalidate-the-app-router-cache",level:3},{value:"Are there any comprehensive, open-source applications built on the App Router?",id:"are-there-any-comprehensive-open-source-applications-built-on-the-app-router",level:3},{value:"Learn More",id:"learn-more",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Next.js App Router is a new paradigm for building applications using React's latest features. If you're already familiar with Next.js, you'll find that the App Router is a natural evolution of the existing file-system based router in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages"},"Pages Router"),"."),(0,r.kt)("p",null,"For new applications, ",(0,r.kt)("strong",{parentName:"p"},"we recommend using the App Router"),". For existing applications, you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/upgrading/app-router-migration"},"incrementally adopt the App Router"),". It's also possible to use both routers in the same application."),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"how-can-i-access-the-request-object-in-a-layout"},"How can I access the request object in a layout?"),(0,r.kt)("p",null,"You intentionally cannot access the raw request object. However, you can access ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/headers"},(0,r.kt)("inlineCode",{parentName:"a"},"headers"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies"},(0,r.kt)("inlineCode",{parentName:"a"},"cookies"))," through server-only functions. You can also ",(0,r.kt)("a",{parentName:"p",href:"#how-can-i-set-cookies"},"set cookies"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/pages-and-layouts#layouts"},"Layouts")," do not rerender. They can be cached and reused to avoid unnecessary computation when navigating between pages. By restricting layouts from accessing the raw request, Next.js can prevent the execution of potentially slow or expensive user code within the layout, which could negatively impact performance."),(0,r.kt)("p",null,"This design also enforces consistent and predictable behavior for layouts across different pages, simplify development and debugging since developers can rely on layouts behaving the same way regardless of the specific page they are applied to."),(0,r.kt)("p",null,"Depending on the UI pattern you're building, ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/parallel-routes"},"Parallel Routes")," allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."),(0,r.kt)("h3",{id:"how-can-i-access-the-url-on-a-page"},"How can I access the URL on a page?"),(0,r.kt)("p",null,"By default, pages are Server Components. You can access the route segments through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page#params-optional"},(0,r.kt)("inlineCode",{parentName:"a"},"params"))," prop and the URL search params through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/file-conventions/page#searchparams-optional"},(0,r.kt)("inlineCode",{parentName:"a"},"searchParams"))," prop for a given page."),(0,r.kt)("p",null,"If you are using Client Components, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-pathname"},(0,r.kt)("inlineCode",{parentName:"a"},"usePathname")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-selected-layout-segment"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelectedLayoutSegment")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/use-selected-layout-segments"},(0,r.kt)("inlineCode",{parentName:"a"},"useSelectedLayoutSegments"))," for more complex routes."),(0,r.kt)("p",null,"Further, depending on the UI pattern you're building, ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/parallel-routes"},"Parallel Routes")," allow you to render multiple pages in the same layout, and pages have access to the route segments as well as the URL search params."),(0,r.kt)("h3",{id:"how-can-i-redirect-from-a-server-component"},"How can I redirect from a Server Component?"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/redirect"},(0,r.kt)("inlineCode",{parentName:"a"},"redirect"))," to redirect from a page to a relative or absolute URL. ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/redirect"},(0,r.kt)("inlineCode",{parentName:"a"},"redirect"))," is a temporary (307) redirect, while ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/permanentRedirect"},(0,r.kt)("inlineCode",{parentName:"a"},"permanentRedirect"))," is a permanent (308) redirect. When these functions are used while streaming UI, they will insert a meta tag to emit the redirect on the client side."),(0,r.kt)("h3",{id:"how-can-i-handle-authentication-with-the-app-router"},"How can I handle authentication with the App Router?"),(0,r.kt)("p",null,"Here are some common authentication solutions that support the App Router:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://next-auth.js.org/configuration/nextjs#in-app-router"},"NextAuth.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clerk.com/docs/quickstarts/nextjs"},"Clerk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/auth0/nextjs-auth0#app-router"},"Auth0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stytch.com/docs/example-apps/frontend/nextjs"},"Stytch")),(0,r.kt)("li",{parentName:"ul"},"Or manually handling sessions or JWTs")),(0,r.kt)("h3",{id:"how-can-i-set-cookies"},"How can I set cookies?"),(0,r.kt)("p",null,"You can set cookies in ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations#setting-cookies"},"Server Actions")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handlers")," using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/functions/cookies"},(0,r.kt)("inlineCode",{parentName:"a"},"cookies"))," function."),(0,r.kt)("p",null,"Since HTTP does not allow setting cookies after streaming starts, you cannot set cookies from a page or layout directly. You can also set cookies from ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/middleware#using-cookies"},"Middleware"),"."),(0,r.kt)("h3",{id:"how-can-i-build-multi-tenant-apps"},"How can I build multi-tenant apps?"),(0,r.kt)("p",null,"If you are looking to build a single Next.js application that serves multiple tenants, we have ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/templates/next.js/platforms-starter-kit"},"built an example")," showing our recommended architecture."),(0,r.kt)("h3",{id:"how-can-i-invalidate-the-app-router-cache"},"How can I invalidate the App Router cache?"),(0,r.kt)("p",null,"There are multiple layers of caching in Next.js, and thus, multiple ways to invalidate different parts of the cache. ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/caching"},"Learn more about caching"),"."),(0,r.kt)("h3",{id:"are-there-any-comprehensive-open-source-applications-built-on-the-app-router"},"Are there any comprehensive, open-source applications built on the App Router?"),(0,r.kt)("p",null,"Yes. You can view ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/templates/next.js/nextjs-commerce"},"Next.js Commerce")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/templates/next.js/platforms-starter-kit"},"Platforms Starter Kit")," for two larger examples of using the App Router that are open-source."),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/routing"},"Routing Fundamentals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"},"Data Fetching, Caching, and Revalidating")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"Forms and Mutations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/caching"},"Caching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering"},"Rendering Fundamentals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/server-components"},"Server Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/app/building-your-application/rendering/client-components"},"Client Components"))),(0,r.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);