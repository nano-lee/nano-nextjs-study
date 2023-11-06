"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"useRouter",description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook."},i=void 0,l={unversionedId:"pages/api-reference/functions/use-router",id:"pages/api-reference/functions/use-router",title:"useRouter",description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook.",source:"@site/docs/03-pages/02-api-reference/02-functions/use-router.mdx",sourceDirName:"03-pages/02-api-reference/02-functions",slug:"/pages/api-reference/functions/use-router",permalink:"/docs/pages/api-reference/functions/use-router",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/02-api-reference/02-functions/use-router.mdx",tags:[],version:"current",frontMatter:{title:"useRouter",description:"Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook."},sidebar:"nextJsSidebar",previous:{title:"useReportWebVitals",permalink:"/docs/pages/api-reference/functions/use-report-web-vitals"},next:{title:"next.config.js Options",permalink:"/docs/pages/api-reference/next-config-js/"}},u={},p=[{value:"<code>router</code> object",id:"router-object",level:2},{value:"router.push",id:"routerpush",level:3},{value:"Resetting state after navigation",id:"resetting-state-after-navigation",level:4},{value:"With URL object",id:"with-url-object",level:4},{value:"router.replace",id:"routerreplace",level:3},{value:"router.prefetch",id:"routerprefetch",level:3},{value:"router.beforePopState",id:"routerbeforepopstate",level:3},{value:"router.back",id:"routerback",level:3},{value:"router.reload",id:"routerreload",level:3},{value:"router.events",id:"routerevents",level:3},{value:"Potential ESLint errors",id:"potential-eslint-errors",level:2},{value:"Potential solutions",id:"potential-solutions",level:3},{value:"withRouter",id:"withrouter",level:2},{value:"Usage",id:"usage",level:3},{value:"TypeScript",id:"typescript",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to access the ",(0,r.kt)("a",{parentName:"p",href:"#router-object"},(0,r.kt)("inlineCode",{parentName:"a"},"router")," object")," inside any function component in your app, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouter")," hook, take a look at the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nfunction ActiveLink({ children, href }) {\n  const router = useRouter()\n  const style = {\n    marginRight: 10,\n    color: router.asPath === href ? 'red' : 'black',\n  }\n\n  const handleClick = (e) => {\n    e.preventDefault()\n    router.push(href)\n  }\n\n  return (\n    <a href={href} onClick={handleClick} style={style}>\n      {children}\n    </a>\n  )\n}\n\nexport default ActiveLink\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"useRouter")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn#using-hooks"},"React Hook"),", meaning it cannot be used with classes. You can either use ",(0,r.kt)("a",{parentName:"p",href:"#withrouter"},"withRouter")," or wrap your class in a function component.")),(0,r.kt)("h2",{id:"router-object"},(0,r.kt)("inlineCode",{parentName:"h2"},"router")," object"),(0,r.kt)("p",null,"The following is the definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," object returned by both ",(0,r.kt)("a",{parentName:"p",href:"#top"},(0,r.kt)("inlineCode",{parentName:"a"},"useRouter"))," and ",(0,r.kt)("a",{parentName:"p",href:"#withrouter"},(0,r.kt)("inlineCode",{parentName:"a"},"withRouter")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pathname"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The path for current route file that comes after ",(0,r.kt)("inlineCode",{parentName:"li"},"/pages"),". Therefore, ",(0,r.kt)("inlineCode",{parentName:"li"},"basePath"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"locale")," and trailing slash (",(0,r.kt)("inlineCode",{parentName:"li"},"trailingSlash: true"),") are not included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - The query string parsed to an object, including ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"dynamic route")," parameters. It will be an empty object during prerendering if the page doesn't use ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},"Server-side Rendering"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"asPath"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The path as shown in the browser including the search params and respecting the ",(0,r.kt)("inlineCode",{parentName:"li"},"trailingSlash")," configuration. ",(0,r.kt)("inlineCode",{parentName:"li"},"basePath")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"locale")," are not included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isFallback"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - Whether the current page is in ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/get-static-paths#fallback-true"},"fallback mode"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"basePath"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The active ",(0,r.kt)("a",{parentName:"li",href:"/docs/app/api-reference/next-config-js/basePath"},"basePath")," (if enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The active locale (if enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locales"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String[]")," - All supported locales (if enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultLocale"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - The current default locale (if enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domainLocales"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Array<{domain, defaultLocale, locales}>")," - Any configured domain locales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isReady"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - Whether the router fields are updated client-side and ready for use. Should only be used inside of ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect")," methods and not for conditionally rendering on the server. See related docs for use case with ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/rendering/automatic-static-optimization"},"automatically statically optimized pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isPreview"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," - Whether the application is currently in ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/configuring/preview-mode"},"preview mode"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"asPath")," field may lead to a mismatch between client and server if the page is rendered using server-side rendering or ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/rendering/automatic-static-optimization"},"automatic static optimization"),". Avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"asPath")," until the ",(0,r.kt)("inlineCode",{parentName:"p"},"isReady")," field is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"The following methods are included inside ",(0,r.kt)("inlineCode",{parentName:"p"},"router"),":"),(0,r.kt)("h3",{id:"routerpush"},"router.push"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/using-router"},"Using Router")))),(0,r.kt)("p",null,"Handles client-side transitions, this method is useful for cases where ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link"))," is not enough."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"router.push(url, as, options)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"UrlObject | String")," - The URL to navigate to (see ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/url.html#legacy-urlobject"},"Node.JS URL module documentation")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"UrlObject")," properties)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"as"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"UrlObject | String")," - Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," - Optional object with the following configuration options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scroll")," - Optional boolean, controls scrolling to the top of the page after navigation. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/linking-and-navigating#shallow-routing"},(0,r.kt)("inlineCode",{parentName:"a"},"shallow")),": Update the path of the current page without rerunning ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-static-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/data-fetching/get-server-side-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getServerSideProps"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/get-initial-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getInitialProps")),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale")," - Optional string, indicates locale of the new page")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You don't need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"router.push")," for external URLs. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Window/location"},"window.location")," is better suited for those cases.")),(0,r.kt)("p",null,"Navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/about.js"),", which is a predefined route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/about')}>\n      Click me\n    </button>\n  )\n}\n")),(0,r.kt)("p",null,"Navigating ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/post/[pid].js"),", which is a dynamic route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.push('/post/abc')}>\n      Click me\n    </button>\n  )\n}\n")),(0,r.kt)("p",null,"Redirecting the user to ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/login.js"),", useful for pages behind ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/authenticating"},"authentication"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\n// Here you would fetch and return the user\nconst useUser = () => ({ user: null, loading: false })\n\nexport default function Page() {\n  const { user, loading } = useUser()\n  const router = useRouter()\n\n  useEffect(() => {\n    if (!(user || loading)) {\n      router.push('/login')\n    }\n  }, [user, loading])\n\n  return <p>Redirecting...</p>\n}\n")),(0,r.kt)("h4",{id:"resetting-state-after-navigation"},"Resetting state after navigation"),(0,r.kt)("p",null,"When navigating to the same page in Next.js, the page's state ",(0,r.kt)("strong",{parentName:"p"},"will not")," be reset by default as React does not unmount unless the parent component has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/[slug].js"',filename:'"pages/[slug].js"'},"import Link from 'next/link'\nimport { useState } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Page(props) {\n  const router = useRouter()\n  const [count, setCount] = useState(0)\n  return (\n    <div>\n      <h1>Page: {router.query.slug}</h1>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase count</button>\n      <Link href=\"/one\">one</Link> <Link href=\"/two\">two</Link>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In the above example, navigating between ",(0,r.kt)("inlineCode",{parentName:"p"},"/one")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/two")," ",(0,r.kt)("strong",{parentName:"p"},"will not")," reset the count . The ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," is maintained between renders because the top-level React component, ",(0,r.kt)("inlineCode",{parentName:"p"},"Page"),", is the same."),(0,r.kt)("p",null,"If you do not want this behavior, you have a couple of options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manually ensure each state is updated using ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),". In the above example, that could look like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  setCount(0)\n}, [router.query.slug])\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use a React ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," to ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"},"tell React to remount the component"),". To do this for all pages, you can use a custom app:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/_app.js"',filename:'"pages/_app.js"'},"import { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n  return <Component key={router.asPath} {...pageProps} />\n}\n")))),(0,r.kt)("h4",{id:"with-url-object"},"With URL object"),(0,r.kt)("p",null,"You can use a URL object in the same way you can use it for ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link#with-url-object"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link")),". Works for both the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function ReadMore({ post }) {\n  const router = useRouter()\n\n  return (\n    <button\n      type=\"button\"\n      onClick={() => {\n        router.push({\n          pathname: '/post/[pid]',\n          query: { pid: post.id },\n        })\n      }}\n    >\n      Click here to read more\n    </button>\n  )\n}\n")),(0,r.kt)("h3",{id:"routerreplace"},"router.replace"),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," prop in ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"router.replace")," will prevent adding a new URL entry into the ",(0,r.kt)("inlineCode",{parentName:"p"},"history")," stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"router.replace(url, as, options)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The API for ",(0,r.kt)("inlineCode",{parentName:"li"},"router.replace")," is exactly the same as the API for ",(0,r.kt)("a",{parentName:"li",href:"#routerpush"},(0,r.kt)("inlineCode",{parentName:"a"},"router.push")),".")),(0,r.kt)("p",null,"Take a look at the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.replace('/home')}>\n      Click me\n    </button>\n  )\n}\n")),(0,r.kt)("h3",{id:"routerprefetch"},"router.prefetch"),(0,r.kt)("p",null,"Prefetch pages for faster client-side transitions. This method is only useful for navigations without ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/api-reference/components/link"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link")),", as ",(0,r.kt)("inlineCode",{parentName:"p"},"next/link")," takes care of prefetching pages automatically."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a production only feature. Next.js doesn't prefetch pages in development.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"router.prefetch(url, as, options)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," - The URL to prefetch, including explicit routes (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/dashboard"),") and dynamic routes (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/product/[id]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"as")," - Optional decorator for ",(0,r.kt)("inlineCode",{parentName:"li"},"url"),". Before Next.js 9.5.3 this was used to prefetch dynamic routes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," - Optional object with the following allowed fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale")," - allows providing a different locale from the active one. If ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," has to include the locale as the active locale won't be used.")))),(0,r.kt)("p",null,"Let's say you have a login page, and after a login, you redirect the user to the dashboard. For that case, we can prefetch the dashboard to make a faster transition, like in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useCallback, useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Login() {\n  const router = useRouter()\n  const handleSubmit = useCallback((e) => {\n    e.preventDefault()\n\n    fetch('/api/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        /* Form data */\n      }),\n    }).then((res) => {\n      // Do a fast client-side transition to the already prefetched dashboard page\n      if (res.ok) router.push('/dashboard')\n    })\n  }, [])\n\n  useEffect(() => {\n    // Prefetch the dashboard page\n    router.prefetch('/dashboard')\n  }, [router])\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Form fields */}\n      <button type=\"submit\">Login</button>\n    </form>\n  )\n}\n")),(0,r.kt)("h3",{id:"routerbeforepopstate"},"router.beforePopState"),(0,r.kt)("p",null,"In some cases (for example, if using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/configuring/custom-server"},"Custom Server"),"), you may wish to listen to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/Events/popstate"},"popstate")," and do something before the router acts on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"router.beforePopState(cb)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cb")," - The function to run on incoming ",(0,r.kt)("inlineCode",{parentName:"li"},"popstate")," events. The function receives the state of the event as an object with the following props:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - the route for the new state. This is usually the name of a ",(0,r.kt)("inlineCode",{parentName:"li"},"page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"as"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," - the url that will be shown in the browser"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - Additional options sent by ",(0,r.kt)("a",{parentName:"li",href:"#routerpush"},"router.push"))))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"cb")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the Next.js router will not handle ",(0,r.kt)("inlineCode",{parentName:"p"},"popstate"),", and you'll be responsible for handling it in that case. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/configuring/custom-server#disabling-file-system-routing"},"Disabling file-system routing"),"."),(0,r.kt)("p",null,"You could use ",(0,r.kt)("inlineCode",{parentName:"p"},"beforePopState")," to manipulate the request, or force a SSR refresh, as in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  useEffect(() => {\n    router.beforePopState(({ url, as, options }) => {\n      // I only want to allow these two routes!\n      if (as !== '/' && as !== '/other') {\n        // Have SSR render bad routes as a 404.\n        window.location.href = as\n        return false\n      }\n\n      return true\n    })\n  }, [router])\n\n  return <p>Welcome to the page</p>\n}\n")),(0,r.kt)("h3",{id:"routerback"},"router.back"),(0,r.kt)("p",null,"Navigate back in history. Equivalent to clicking the browser\u2019s back button. It executes ",(0,r.kt)("inlineCode",{parentName:"p"},"window.history.back()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.back()}>\n      Click here to go back\n    </button>\n  )\n}\n")),(0,r.kt)("h3",{id:"routerreload"},"router.reload"),(0,r.kt)("p",null,"Reload the current URL. Equivalent to clicking the browser\u2019s refresh button. It executes ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.reload()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRouter } from 'next/router'\n\nexport default function Page() {\n  const router = useRouter()\n\n  return (\n    <button type=\"button\" onClick={() => router.reload()}>\n      Click here to reload\n    </button>\n  )\n}\n")),(0,r.kt)("h3",{id:"routerevents"},"router.events"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/with-loading"},"With a page loading indicator")))),(0,r.kt)("p",null,"You can listen to different events happening inside the Next.js Router. Here's a list of supported events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeChangeStart(url, { shallow })")," - Fires when a route starts to change"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeChangeComplete(url, { shallow })")," - Fires when a route changed completely"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeChangeError(err, url, { shallow })")," - Fires when there's an error when changing routes, or a route load is cancelled",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"err.cancelled")," - Indicates if the navigation was cancelled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeHistoryChange(url, { shallow })")," - Fires before changing the browser's history"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashChangeStart(url, { shallow })")," - Fires when the hash will change but not the page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashChangeComplete(url, { shallow })")," - Fires when the hash has changed but not the page")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Good to know"),": Here ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," is the URL shown in the browser, including the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/api-reference/next-config-js/basePath"},(0,r.kt)("inlineCode",{parentName:"a"},"basePath")),".")),(0,r.kt)("p",null,"For example, to listen to the router event ",(0,r.kt)("inlineCode",{parentName:"p"},"routeChangeStart"),", open or create ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/_app.js")," and subscribe to the event, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n\n  useEffect(() => {\n    const handleRouteChange = (url, { shallow }) => {\n      console.log(\n        `App is changing to ${url} ${\n          shallow ? 'with' : 'without'\n        } shallow routing`\n      )\n    }\n\n    router.events.on('routeChangeStart', handleRouteChange)\n\n    // If the component is unmounted, unsubscribe\n    // from the event with the `off` method:\n    return () => {\n      router.events.off('routeChangeStart', handleRouteChange)\n    }\n  }, [router])\n\n  return <Component {...pageProps} />\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/custom-app"},"Custom App")," (",(0,r.kt)("inlineCode",{parentName:"p"},"pages/_app.js"),") for this example to subscribe to the event because it's not unmounted on page navigations, but you can subscribe to router events on any component in your application.")),(0,r.kt)("p",null,"Router events should be registered when a component mounts (",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/useEffect"},"useEffect")," or ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Component#componentdidmount"},"componentDidMount")," / ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/Component#componentwillunmount"},"componentWillUnmount"),") or imperatively when an event happens."),(0,r.kt)("p",null,"If a route load is cancelled (for example, by clicking two links rapidly in succession), ",(0,r.kt)("inlineCode",{parentName:"p"},"routeChangeError")," will fire. And the passed ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," will contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelled")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", as in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\nexport default function MyApp({ Component, pageProps }) {\n  const router = useRouter()\n\n  useEffect(() => {\n    const handleRouteChangeError = (err, url) => {\n      if (err.cancelled) {\n        console.log(`Route to ${url} was cancelled!`)\n      }\n    }\n\n    router.events.on('routeChangeError', handleRouteChangeError)\n\n    // If the component is unmounted, unsubscribe\n    // from the event with the `off` method:\n    return () => {\n      router.events.off('routeChangeError', handleRouteChangeError)\n    }\n  }, [router])\n\n  return <Component {...pageProps} />\n}\n")),(0,r.kt)("h2",{id:"potential-eslint-errors"},"Potential ESLint errors"),(0,r.kt)("p",null,"Certain methods accessible on the ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," object return a Promise. If you have the ESLint rule, ",(0,r.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/rules/no-floating-promises"},"no-floating-promises")," enabled, consider disabling it either globally, or for the affected line."),(0,r.kt)("p",null,"If your application needs this rule, you should either ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," the promise \u2013 or use an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function, ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," the Promise, then void the function call. ",(0,r.kt)("strong",{parentName:"p"},"This is not applicable when the method is called from inside an ",(0,r.kt)("inlineCode",{parentName:"strong"},"onClick")," handler"),"."),(0,r.kt)("p",null,"The affected methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"router.push")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"router.replace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"router.prefetch"))),(0,r.kt)("h3",{id:"potential-solutions"},"Potential solutions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { useRouter } from 'next/router'\n\n// Here you would fetch and return the user\nconst useUser = () => ({ user: null, loading: false })\n\nexport default function Page() {\n  const { user, loading } = useUser()\n  const router = useRouter()\n\n  useEffect(() => {\n    // disable the linting on the next line - This is the cleanest solution\n    // eslint-disable-next-line no-floating-promises\n    router.push('/login')\n\n    // void the Promise returned by router.push\n    if (!(user || loading)) {\n      void router.push('/login')\n    }\n    // or use an async function, await the Promise, then void the function call\n    async function handleRouteChange() {\n      if (!(user || loading)) {\n        await router.push('/login')\n      }\n    }\n    void handleRouteChange()\n  }, [user, loading])\n\n  return <p>Redirecting...</p>\n}\n")),(0,r.kt)("h2",{id:"withrouter"},"withRouter"),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"#router-object"},(0,r.kt)("inlineCode",{parentName:"a"},"useRouter"))," is not the best fit for you, ",(0,r.kt)("inlineCode",{parentName:"p"},"withRouter")," can also add the same ",(0,r.kt)("a",{parentName:"p",href:"#router-object"},(0,r.kt)("inlineCode",{parentName:"a"},"router")," object")," to any component."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withRouter } from 'next/router'\n\nfunction Page({ router }) {\n  return <p>{router.pathname}</p>\n}\n\nexport default withRouter(Page)\n")),(0,r.kt)("h3",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"To use class components with ",(0,r.kt)("inlineCode",{parentName:"p"},"withRouter"),", the component needs to accept a router prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport { withRouter, NextRouter } from 'next/router'\n\ninterface WithRouterProps {\n  router: NextRouter\n}\n\ninterface MyComponentProps extends WithRouterProps {}\n\nclass MyComponent extends React.Component<MyComponentProps> {\n  render() {\n    return <p>{this.props.router.pathname}</p>\n  }\n}\n\nexport default withRouter(MyComponent)\n")))}d.isMDXComponent=!0}}]);