"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"getStaticPaths",description:"API reference for `getStaticPaths`. Learn how to fetch data and generate static pages with `getStaticPaths`."},l=void 0,o={unversionedId:"pages/api-reference/functions/get-static-paths",id:"pages/api-reference/functions/get-static-paths",title:"getStaticPaths",description:"API reference for `getStaticPaths`. Learn how to fetch data and generate static pages with `getStaticPaths`.",source:"@site/docs/03-pages/02-api-reference/02-functions/get-static-paths.mdx",sourceDirName:"03-pages/02-api-reference/02-functions",slug:"/pages/api-reference/functions/get-static-paths",permalink:"/docs/pages/api-reference/functions/get-static-paths",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/02-api-reference/02-functions/get-static-paths.mdx",tags:[],version:"current",frontMatter:{title:"getStaticPaths",description:"API reference for `getStaticPaths`. Learn how to fetch data and generate static pages with `getStaticPaths`."},sidebar:"nextJsSidebar",previous:{title:"getServerSideProps",permalink:"/docs/pages/api-reference/functions/get-server-side-props"},next:{title:"getStaticProps",permalink:"/docs/pages/api-reference/functions/get-static-props"}},s={},p=[{value:"getStaticPaths return values",id:"getstaticpaths-return-values",level:2},{value:"<code>paths</code>",id:"paths",level:3},{value:"<code>fallback: false</code>",id:"fallback-false",level:3},{value:"<code>fallback: true</code>",id:"fallback-true",level:3},{value:"When is <code>fallback: true</code> useful?",id:"when-is-fallback-true-useful",level:4},{value:"<code>fallback: &#39;blocking&#39;</code>",id:"fallback-blocking",level:3},{value:"Fallback pages",id:"fallback-pages",level:3},{value:"Version History",id:"version-history",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When exporting a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," from a page that uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Routes"),", Next.js will statically pre-render all the paths specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/repo/[name].tsx" switcher',filename:'"pages/repo/[name].tsx"',switcher:!0},"import type {\n  InferGetStaticPropsType,\n  GetStaticProps,\n  GetStaticPaths,\n} from 'next'\n\ntype Repo = {\n  name: string\n  stargazers_count: number\n}\n\nexport const getStaticPaths = (async () => {\n  return {\n    paths: [\n      {\n        params: {\n          name: 'next.js',\n        },\n      }, // See the \"paths\" section below\n    ],\n    fallback: true, // false or \"blocking\"\n  }\n}) satisfies GetStaticPaths\n\nexport const getStaticProps = (async (context) => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}) satisfies GetStaticProps<{\n  repo: Repo\n}>\n\nexport default function Page({\n  repo,\n}: InferGetStaticPropsType<typeof getStaticProps>) {\n  return repo.stargazers_count\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/repo/[name].js" switcher',filename:'"pages/repo/[name].js"',switcher:!0},"export async function getStaticPaths() {\n  return {\n    paths: [\n      {\n        params: {\n          name: 'next.js',\n        },\n      }, // See the \"paths\" section below\n    ],\n    fallback: true, // false or \"blocking\"\n  }\n}\n\nexport async function getStaticProps() {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({ repo }) {\n  return repo.stargazers_count\n}\n")),(0,i.kt)("h2",{id:"getstaticpaths-return-values"},"getStaticPaths return values"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," function should return an object with the following ",(0,i.kt)("strong",{parentName:"p"},"required")," properties:"),(0,i.kt)("h3",{id:"paths"},(0,i.kt)("inlineCode",{parentName:"h3"},"paths")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," key determines which paths will be pre-rendered. For example, suppose that you have a page that uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Routes")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/posts/[id].js"),". If you export ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," from this page and return the following for ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return {\n  paths: [\n    { params: { id: '1' }},\n    {\n      params: { id: '2' },\n      // with i18n configured the locale for the path can be returned as well\n      locale: \"en\",\n    },\n  ],\n  fallback: ...\n}\n")),(0,i.kt)("p",null,"Then, Next.js will statically generate ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/2")," during ",(0,i.kt)("inlineCode",{parentName:"p"},"next build")," using the page component in ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/posts/[id].js"),"."),(0,i.kt)("p",null,"The value for each ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," object must match the parameters used in the page name:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the page name is ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/posts/[postId]/[commentId]"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," should contain ",(0,i.kt)("inlineCode",{parentName:"li"},"postId")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"commentId"),"."),(0,i.kt)("li",{parentName:"ul"},"If the page name uses ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments"},"catch-all routes")," like ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/[...slug]"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," should contain ",(0,i.kt)("inlineCode",{parentName:"li"},"slug")," (which is an array). If this array is ",(0,i.kt)("inlineCode",{parentName:"li"},"['hello', 'world']"),", then Next.js will statically generate the page at ",(0,i.kt)("inlineCode",{parentName:"li"},"/hello/world"),"."),(0,i.kt)("li",{parentName:"ul"},"If the page uses an ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments"},"optional catch-all route"),", use ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," to render the root-most route. For example, if you supply ",(0,i.kt)("inlineCode",{parentName:"li"},"slug: false")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/[[...slug]]"),", Next.js will statically generate the page ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," strings are ",(0,i.kt)("strong",{parentName:"p"},"case-sensitive")," and ideally should be normalized to ensure the paths are generated correctly. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"WoRLD")," is returned for a param it will only match if ",(0,i.kt)("inlineCode",{parentName:"p"},"WoRLD")," is the actual path visited, not ",(0,i.kt)("inlineCode",{parentName:"p"},"world")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"World"),"."),(0,i.kt)("p",null,"Separate of the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," object a ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," field can be returned when ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/internationalization"},"i18n is configured"),", which configures the locale for the path being generated."),(0,i.kt)("h3",{id:"fallback-false"},(0,i.kt)("inlineCode",{parentName:"h3"},"fallback: false")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then any paths not returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will result in a ",(0,i.kt)("strong",{parentName:"p"},"404 page"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"next build")," is run, Next.js will check if ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," returned ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: false"),", it will then build ",(0,i.kt)("strong",{parentName:"p"},"only")," the paths returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),". This option is useful if you have a small number of paths to create, or new page data is not added often. If you find that you need to add more paths, and you have ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: false"),", you will need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"next build")," again so that the new paths can be generated."),(0,i.kt)("p",null,"The following example pre-renders one blog post per page called ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/posts/[id].js"),". The list of blog posts will be fetched from a CMS and returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),". Then, for each page, it fetches the post data from a CMS using ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/get-static-props"},(0,i.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/posts/[id].js"',filename:'"pages/posts/[id].js"'},"function Post({ post }) {\n  // Render post...\n}\n\n// This function gets called at build time\nexport async function getStaticPaths() {\n  // Call an external API endpoint to get posts\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  // Get the paths we want to pre-render based on posts\n  const paths = posts.map((post) => ({\n    params: { id: post.id },\n  }))\n\n  // We'll pre-render only these paths at build time.\n  // { fallback: false } means other routes should 404.\n  return { paths, fallback: false }\n}\n\n// This also gets called at build time\nexport async function getStaticProps({ params }) {\n  // params contains the post `id`.\n  // If the route is like /posts/1, then params.id is 1\n  const res = await fetch(`https://.../posts/${params.id}`)\n  const post = await res.json()\n\n  // Pass post data to the page via props\n  return { props: { post } }\n}\n\nexport default Post\n")),(0,i.kt)("h3",{id:"fallback-true"},(0,i.kt)("inlineCode",{parentName:"h3"},"fallback: true")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://static-tweet.vercel.app"},"Static generation of a large number of pages")))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," changes in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The paths returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," will be rendered to ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," at build time by ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"."),(0,i.kt)("li",{parentName:"ul"},"The paths that have not been generated at build time will ",(0,i.kt)("strong",{parentName:"li"},"not")," result in a 404 page. Instead, Next.js will serve a ",(0,i.kt)("a",{parentName:"li",href:"#fallback-pages"},"\u201cfallback\u201d")," version of the page on the first request to such a path. Web crawlers, such as Google, won't be served a fallback and instead the path will behave as in ",(0,i.kt)("a",{parentName:"li",href:"#fallback-blocking"},(0,i.kt)("inlineCode",{parentName:"a"},"fallback: 'blocking'")),"."),(0,i.kt)("li",{parentName:"ul"},"When a page with ",(0,i.kt)("inlineCode",{parentName:"li"},"fallback: true")," is navigated to through ",(0,i.kt)("inlineCode",{parentName:"li"},"next/link")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"next/router")," (client-side) Next.js will ",(0,i.kt)("em",{parentName:"li"},"not")," serve a fallback and instead the page will behave as ",(0,i.kt)("a",{parentName:"li",href:"#fallback-blocking"},(0,i.kt)("inlineCode",{parentName:"a"},"fallback: 'blocking'")),"."),(0,i.kt)("li",{parentName:"ul"},"In the background, Next.js will statically generate the requested path ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON"),". This includes running ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"."),(0,i.kt)("li",{parentName:"ul"},"When complete, the browser receives the ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," for the generated path. This will be used to automatically render the page with the required props. From the user\u2019s perspective, the page will be swapped from the fallback page to the full page."),(0,i.kt)("li",{parentName:"ul"},"At the same time, Next.js adds this path to the list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, like other pages pre-rendered at build time.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: true")," is not supported when using ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/deploying/static-exports"},(0,i.kt)("inlineCode",{parentName:"a"},"output: 'export'")),".")),(0,i.kt)("h4",{id:"when-is-fallback-true-useful"},"When is ",(0,i.kt)("inlineCode",{parentName:"h4"},"fallback: true")," useful?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fallback: true")," is useful if your app has a very large number of static pages that depend on data (such as a very large e-commerce site). If you want to pre-render all product pages, the builds would take a very long time."),(0,i.kt)("p",null,"Instead, you may statically generate a small subset of pages and use ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: true")," for the rest. When someone requests a page that is not generated yet, the user will see the page with a loading indicator or skeleton component."),(0,i.kt)("p",null,"Shortly after, ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," finishes and the page will be rendered with the requested data. From now on, everyone who requests the same page will get the statically pre-rendered page."),(0,i.kt)("p",null,"This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fallback: true")," will not ",(0,i.kt)("em",{parentName:"p"},"update")," generated pages, for that take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration"),"."),(0,i.kt)("h3",{id:"fallback-blocking"},(0,i.kt)("inlineCode",{parentName:"h3"},"fallback: 'blocking'")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"'blocking'"),", new paths not returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will wait for the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML")," to be generated, identical to SSR (hence why ",(0,i.kt)("em",{parentName:"p"},"blocking"),"), and then be cached for future requests so it only happens once per path."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," will behave as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The paths returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticPaths")," will be rendered to ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," at build time by ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"."),(0,i.kt)("li",{parentName:"ul"},"The paths that have not been generated at build time will ",(0,i.kt)("strong",{parentName:"li"},"not")," result in a 404 page. Instead, Next.js will SSR on the first request and return the generated ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML"),"."),(0,i.kt)("li",{parentName:"ul"},"When complete, the browser receives the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML"),' for the generated path. From the user\u2019s perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flash of loading/fallback state.'),(0,i.kt)("li",{parentName:"ul"},"At the same time, Next.js adds this path to the list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, like other pages pre-rendered at build time.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fallback: 'blocking'")," will not ",(0,i.kt)("em",{parentName:"p"},"update")," generated pages by default. To update generated pages, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration")," in conjunction with ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: 'blocking'"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback: 'blocking'")," is not supported when using ",(0,i.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/deploying/static-exports"},(0,i.kt)("inlineCode",{parentName:"a"},"output: 'export'")),".")),(0,i.kt)("h3",{id:"fallback-pages"},"Fallback pages"),(0,i.kt)("p",null,"In the \u201cfallback\u201d version of a page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The page\u2019s props will be empty."),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/use-router"},"router"),", you can detect if the fallback is being rendered, ",(0,i.kt)("inlineCode",{parentName:"li"},"router.isFallback")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("p",null,"The following example showcases using ",(0,i.kt)("inlineCode",{parentName:"p"},"isFallback"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/posts/[id].js"',filename:'"pages/posts/[id].js"'},"import { useRouter } from 'next/router'\n\nfunction Post({ post }) {\n  const router = useRouter()\n\n  // If the page is not yet generated, this will be displayed\n  // initially until getStaticProps() finishes running\n  if (router.isFallback) {\n    return <div>Loading...</div>\n  }\n\n  // Render post...\n}\n\n// This function gets called at build time\nexport async function getStaticPaths() {\n  return {\n    // Only `/posts/1` and `/posts/2` are generated at build time\n    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],\n    // Enable statically generating additional pages\n    // For example: `/posts/3`\n    fallback: true,\n  }\n}\n\n// This also gets called at build time\nexport async function getStaticProps({ params }) {\n  // params contains the post `id`.\n  // If the route is like /posts/1, then params.id is 1\n  const res = await fetch(`https://.../posts/${params.id}`)\n  const post = await res.json()\n\n  // Pass post data to the page via props\n  return {\n    props: { post },\n    // Re-generate the post at most once per second\n    // if a request comes in\n    revalidate: 1,\n  }\n}\n\nexport default Post\n")),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v13.4.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/app/building-your-application/data-fetching"},"App Router")," is now stable with simplifed data fetching, including ",(0,i.kt)("a",{parentName:"td",href:"/docs/app/api-reference/functions/generate-static-params"},(0,i.kt)("inlineCode",{parentName:"a"},"generateStaticParams()")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v12.2.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},"On-Demand Incremental Static Regeneration")," is stable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v12.1.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},"On-Demand Incremental Static Regeneration")," added (beta).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v9.5.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Stable ",(0,i.kt)("a",{parentName:"td",href:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"v9.3.0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getStaticPaths")," introduced.")))))}u.isMDXComponent=!0}}]);