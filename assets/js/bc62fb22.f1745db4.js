"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(n),u=r,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||p;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const p={title:"getStaticProps",sidebar_position:1,description:"getStaticProps\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc815\uc801 \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud558\uc138\uc694. Next.js\uc5d0\uc11c \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30\ub97c \uc704\ud55c \uc774 API\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."},i=void 0,o={unversionedId:"pages/building-your-application/data-fetching/get-static-props",id:"pages/building-your-application/data-fetching/get-static-props",title:"getStaticProps",description:"getStaticProps\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc815\uc801 \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud558\uc138\uc694. Next.js\uc5d0\uc11c \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30\ub97c \uc704\ud55c \uc774 API\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.",source:"@site/docs/03-pages/01-building-your-application/03-data-fetching/01-get-static-props.mdx",sourceDirName:"03-pages/01-building-your-application/03-data-fetching",slug:"/pages/building-your-application/data-fetching/get-static-props",permalink:"/docs/pages/building-your-application/data-fetching/get-static-props",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/03-data-fetching/01-get-static-props.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"getStaticProps",sidebar_position:1,description:"getStaticProps\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc815\uc801 \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud558\uc138\uc694. Next.js\uc5d0\uc11c \ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30\ub97c \uc704\ud55c \uc774 API\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."},sidebar:"nextJsSidebar",previous:{title:"Data Fetching",permalink:"/docs/pages/building-your-application/data-fetching/"},next:{title:"getStaticPaths",permalink:"/docs/pages/building-your-application/data-fetching/get-static-paths"}},s={},l=[{value:"\uc5b8\uc81c getStaticProps\ub97c \uc0ac\uc6a9\ud574\uc57c\ud560\uae4c?",id:"\uc5b8\uc81c-getstaticprops\ub97c-\uc0ac\uc6a9\ud574\uc57c\ud560\uae4c",level:2},{value:"getStaticProps\ub294 \uc5b8\uc81c \uc2e4\ud589\ub418\ub098\uc694?",id:"getstaticprops\ub294-\uc5b8\uc81c-\uc2e4\ud589\ub418\ub098\uc694",level:2},{value:"getStaticProps\ub97c \uc0ac\uc6a9\ud558\uc5ec CMS\uc5d0\uc11c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",id:"getstaticprops\ub97c-\uc0ac\uc6a9\ud558\uc5ec-cms\uc5d0\uc11c-\ub370\uc774\ud130-\uac00\uc838\uc624\uae30",level:2},{value:"server-side \ucf54\ub4dc directly \uc791\uc131",id:"server-side-\ucf54\ub4dc-directly-\uc791\uc131",level:2},{value:"HTML\uacfc JSON\uc744 \ubaa8\ub450 \uc815\uc801\uc73c\ub85c \uc0dd\uc131",id:"html\uacfc-json\uc744-\ubaa8\ub450-\uc815\uc801\uc73c\ub85c-\uc0dd\uc131",level:2},{value:"getStaticProps\ub294 \uc5b4\ub514\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?",id:"getstaticprops\ub294-\uc5b4\ub514\uc5d0\uc11c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694",level:2},{value:"Runs on every request in development",id:"runs-on-every-request-in-development",level:2},{value:"\ubbf8\ub9ac\ubcf4\uae30 \ubaa8\ub4dc",id:"\ubbf8\ub9ac\ubcf4\uae30-\ubaa8\ub4dc",level:2}],c={toc:l},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud398\uc774\uc9c0\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub77c\ub294 \ud568\uc218\ub97c \ub0b4\ubcf4\ub0b4\uba74 Next.js\ub294 \ube4c\ub4dc \uc2dc\uc810\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uac00 \ubc18\ud658\ud55c \ud504\ub85c\ud37c\ud2f0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/index.tsx" switcher',filename:'"pages/index.tsx"',switcher:!0},"import type { InferGetStaticPropsType, GetStaticProps } from 'next'\n\ntype Repo = {\n  name: string\n  stargazers_count: number\n}\n\nexport const getStaticProps: GetStaticProps<{\n  repo: Repo\n}> = async () => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({\n  repo,\n}: InferGetStaticPropsType<typeof getStaticProps>) {\n  return repo.stargazers_count\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/index.js" switcher',filename:'"pages/index.js"',switcher:!0},"export const getStaticProps = async () => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({ repo }) {\n  return repo.stargazers_count\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ub80c\ub354\ub9c1 \uc720\ud615\uc5d0 \uad00\uacc4\uc5c6\uc774 \ubaa8\ub4e0 'prop'\uc740 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc804\ub2ec\ub418\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ucd08\uae30 HTML\uc5d0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud398\uc774\uc9c0\uac00 \uc62c\ubc14\ub974\uac8c ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/hydrate"},"\ud558\uc774\ub4dc\ub808\uc774\uc158"),"\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\uae30 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\uc57c \ud558\ub294 \ubbfc\uac10\ud55c \uc815\ubcf4\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\uc5d0 \uc804\ub2ec\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud558\uc138\uc694.")),(0,r.kt)("h2",{id:"\uc5b8\uc81c-getstaticprops\ub97c-\uc0ac\uc6a9\ud574\uc57c\ud560\uae4c"},"\uc5b8\uc81c getStaticProps\ub97c \uc0ac\uc6a9\ud574\uc57c\ud560\uae4c?"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\uc5d0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub294 \uc0ac\uc6a9\uc790 \uc694\uccad\uc5d0 \uc55e\uc11c \ube4c\ub4dc \uc2dc\uc810\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 \ud5e4\ub4dc\ub9ac\uc2a4 CMS\uc5d0\uc11c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9c0\uac00 \uc0ac\uc804 \ub80c\ub354\ub9c1\ub418\uc5b4\uc57c \ud558\uba70(SEO\ub97c \uc704\ud574) \ub9e4\uc6b0 \ube68\ub77c\uc57c \ud569\ub2c8\ub2e4 - ",(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"HTML")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uba70, \uc774 \ub450 \ud30c\uc77c\uc740 \uc131\ub2a5\uc744 \uc704\ud574 CDN\uc5d0 \uce90\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 \uacf5\uac1c\uc801\uc73c\ub85c \uce90\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4(\uc0ac\uc6a9\uc790\ubcc4\uc774 \uc544\ub2d8). \ud2b9\uc815 \uc0c1\ud669\uc5d0\uc11c\ub294 \ubbf8\ub4e4\uc6e8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacbd\ub85c\ub97c \ub2e4\uc2dc \uc791\uc131\ud568\uc73c\ub85c\uc368 \uc774 \uc870\uac74\uc744 \uc6b0\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"getstaticprops\ub294-\uc5b8\uc81c-\uc2e4\ud589\ub418\ub098\uc694"},"getStaticProps\ub294 \uc5b8\uc81c \uc2e4\ud589\ub418\ub098\uc694?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub294 \ud56d\uc0c1 \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ub418\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \ub0b4\ubd80\uc5d0 \uc791\uc131\ub41c \ucf54\ub4dc\uac00 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubc88\ub4e4\uc5d0\uc11c \uc81c\uac70\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(",(0,r.kt)("a",{parentName:"p",href:"https://next-code-elimination.vercel.app/"},"https://next-code-elimination.vercel.app/"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\ub294 \ud56d\uc0c1 ",(0,r.kt)("inlineCode",{parentName:"li"},"next build")," \uc911\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\ub294 ",(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-true"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback: true"))," \uc0ac\uc6a9 \uc2dc \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback: blocking"))," \uc0ac\uc6a9 \uc2dc \ucd08\uae30 \ub80c\ub354\ub9c1 \uc804\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revalidate"),"(\uc7ac\uac80\uc99d)\uc744 \uc0ac\uc6a9\ud560 \ub54c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getStaticProps"),"\ub294 ",(0,r.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation"},(0,r.kt)("inlineCode",{parentName:"a"},"revalidate()"))," \uc0ac\uc6a9 \uc2dc \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc628\ub514\ub9e8\ub4dc \ubc29\uc2dd\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"},"Incremental Static Regeneration"),"\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 \uc624\ub798\ub41c \ud398\uc774\uc9c0\uac00 \uc7ac\uac80\uc99d\ub418\ub294 \ub3d9\uc548 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uac00 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\uace0 \uc0c8\ub85c\uc6b4 \ud398\uc774\uc9c0\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub294 \uc815\uc801 HTML\uc744 \uc0dd\uc131\ud558\ubbc0\ub85c \ub4e4\uc5b4\uc624\ub294 \uc694\uccad(\uc608: \ucffc\ub9ac \ub9e4\uac1c\ubcc0\uc218 \ub610\ub294 HTTP \ud5e4\ub354)\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\uc5d0 \ub300\ud55c \uc694\uccad\uc5d0 \uc561\uc138\uc2a4\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \uc678\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/routing/middleware"},"\ubbf8\ub4e4\uc6e8\uc5b4"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uace0\ub824\ud558\uc138\uc694."),(0,r.kt)("h2",{id:"getstaticprops\ub97c-\uc0ac\uc6a9\ud558\uc5ec-cms\uc5d0\uc11c-\ub370\uc774\ud130-\uac00\uc838\uc624\uae30"},"getStaticProps\ub97c \uc0ac\uc6a9\ud558\uc5ec CMS\uc5d0\uc11c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\ub294 CMS\uc5d0\uc11c \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c \ubaa9\ub85d\uc744 \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/blog.tsx" switcher',filename:'"pages/blog.tsx"',switcher:!0},"// \uac8c\uc2dc\ubb3c\uc740 \ube4c\ub4dc \uc2dc\uc810\uc5d0 getStaticProps()\uc5d0 \uc758\ud574 \ucc44\uc6cc\uc9d1\ub2c8\ub2e4.\nexport default function Blog({ posts }) {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li>{post.title}</li>\n      ))}\n    </ul>\n  )\n}\n\n// \uc774 \ud568\uc218\ub294 \uc11c\ubc84 \uce21\uc5d0\uc11c \ube4c\ub4dc \ud0c0\uc784\uc5d0 \ud638\ucd9c\ub429\ub2c8\ub2e4.\n// \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c\ub294 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc9c1\uc811 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\nexport async function getStaticProps() {\n  // \uc678\ubd80 API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud638\ucd9c\ud558\uc5ec \uac8c\uc2dc\ubb3c\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.\n  // \ubaa8\ub4e0 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  // { props: { posts } }\ub97c \ubc18\ud658\ud568\uc73c\ub85c\uc368\n  // Blog \ucef4\ud3ec\ub10c\ud2b8\ub294 \ube4c\ub4dc \uc2dc\uc810\uc5d0 'posts'\ub97c \ud504\ub85c\ud37c\ud2f0\ub85c \ubc1b\uc2b5\ub2c8\ub2e4.\n  return {\n    props: {\n      posts,\n    },\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/api-reference/functions/get-static-props"},(0,r.kt)("inlineCode",{parentName:"a"},"getStaticProps")," API \ucc38\uace0 \uc790\ub8cc"),"\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130\uc640 \ud504\ub85c\ud37c\ud2f0\uac00 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"server-side-\ucf54\ub4dc-directly-\uc791\uc131"},"server-side \ucf54\ub4dc directly \uc791\uc131"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub294 \uc11c\ubc84 \uce21\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\ubbc0\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c\ub294 \uc808\ub300 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc6a9 JS \ubc88\ub4e4\uc5d0\ub3c4 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ube0c\ub77c\uc6b0\uc800\ub85c \uc804\uc1a1\ub418\uc9c0 \uc54a\uace0 \uc9c1\uc811 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucffc\ub9ac\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989 (\uc678\ubd80 \uc18c\uc2a4\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294) ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"API \uacbd\ub85c"),"\ub97c \uac00\uc838\uc624\ub294 \ub300\uc2e0, \uc11c\ubc84 \uce21 \ucf54\ub4dc\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc5d0 \ubc14\ub85c(directly) \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. API \uacbd\ub85c\ub294 CMS\uc5d0\uc11c \uc77c\ubd80 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 API \uacbd\ub85c\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc5d0\uc11c \uc9c1\uc811 \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucd94\uac00 \ud638\ucd9c\uc774 \ubc1c\uc0dd\ud558\uc5ec \uc131\ub2a5\uc774 \uc800\ud558\ub429\ub2c8\ub2e4. \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," \ub514\ub809\ud130\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc5ec CMS\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub85c\uc9c1\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc640 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="lib/load-posts.js"',filename:'"lib/load-posts.js"'},"// \ub2e4\uc74c \ud568\uc218\ub294 `lib/` \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c\n// getStaticProps \ubc0f API \uacbd\ub85c\uc640 \uacf5\uc720\ub429\ub2c8\ub2e4.\nexport async function loadPosts() {\n  // \uc678\ubd80 API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud638\ucd9c\ud558\uc5ec \uac8c\uc2dc\ubb3c \uac00\uc838\uc624\uae30\n  const res = await fetch('https://.../posts/')\n  const data = await res.json()\n\n  return data\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/blog.js"',filename:'"pages/blog.js"'},"// pages/blog.js\nimport { loadPosts } from '../lib/load-posts'\n\n// \uc774 \ud568\uc218\ub294 \uc624\uc9c1 \uc11c\ubc84 \uc0ac\uc774\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4\nexport async function getStaticProps() {\n  // `/api` \uacbd\ub85c\ub97c \uac00\uc838\uc624\ub294 \ub300\uc2e0\n  // `getStaticProps`\uc5d0\uc11c \ub3d9\uc77c\ud55c \ud568\uc218\ub97c \uc9c1\uc811 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  const posts = await loadPosts()\n\n  // \ubc18\ud658\ub41c Props\ub294 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4.\n  return { props: { posts } }\n}\n")),(0,r.kt)("p",null,"API \uacbd\ub85c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uc9c0 ",(0,r.kt)("strong",{parentName:"p"},"\uc54a\ub294")," \uacbd\uc6b0 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,r.kt)("inlineCode",{parentName:"a"},"fetch()"))," API\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uc5d0\uc11c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ubc88\ub4e4\uc5d0\uc11c Next.js\uac00 \uc81c\uac70\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\ub824\uba74 ",(0,r.kt)("a",{parentName:"p",href:"https://next-code-elimination.vercel.app/"},"next-code-elimination tool"),"\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"html\uacfc-json\uc744-\ubaa8\ub450-\uc815\uc801\uc73c\ub85c-\uc0dd\uc131"},"HTML\uacfc JSON\uc744 \ubaa8\ub450 \uc815\uc801\uc73c\ub85c \uc0dd\uc131"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uac00 \ud3ec\ud568\ub41c \ud398\uc774\uc9c0\uac00 \ube4c\ub4dc \uc2dc\uc810\uc5d0 \ubbf8\ub9ac \ub80c\ub354\ub9c1\ub418\uba74 \ud398\uc774\uc9c0 HTML \ud30c\uc77c \uc678\uc5d0\ub3c4 Next.js\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \uc2e4\ud589 \uacb0\uacfc\ub97c \ub2f4\uc740 JSON \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 JSON \ud30c\uc77c\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ub77c\uc6b0\ud305\uc5d0\uc11c ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/api-reference/components/link"},(0,r.kt)("inlineCode",{parentName:"a"},"next/link"))," \ub610\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/api-reference/functions/use-router"},(0,r.kt)("inlineCode",{parentName:"a"},"next/router")),"\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. getStaticProps",(0,r.kt)("inlineCode",{parentName:"p"},"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubbf8\ub9ac \ub80c\ub354\ub9c1 \ub41c \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uba74 Next.js\ub294 \uc774 JSON \ud30c\uc77c(\ube4c\ub4dc \uc2dc\uc810\uc5d0 \ubbf8\ub9ac \uacc4\uc0b0\ub428)\uc744 \uac00\uc838\uc640 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud504\ub86d\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc989, \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ud398\uc774\uc9c0 \uc804\ud658\uc740 \ub0b4\ubcf4\ub0b8 JSON\ub9cc \uc0ac\uc6a9\ub418\ubbc0\ub85c "),"getStaticProps`\ub97c \ud638\ucd9c\ud558\uc9c0** \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Incremental Static Generation(\uc99d\ubd84 \uc815\uc801 \uc0dd\uc131)\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uac00 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\uc5b4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ud0d0\uc0c9\uc5d0 \ud544\uc694\ud55c JSON\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \ud398\uc774\uc9c0\uc5d0 \ub300\ud574 \uc5ec\ub7ec \uc694\uccad\uc774 \uc218\ud589\ub418\ub294 \ud615\ud0dc\ub85c \ud45c\uc2dc\ub420 \uc218 \uc788\uc9c0\ub9cc \uc774\ub294 \uc758\ub3c4\ub41c \uac83\uc774\uba70 \ucd5c\uc885 \uc0ac\uc6a9\uc790 \uc131\ub2a5\uc5d0\ub294 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"getstaticprops\ub294-\uc5b4\ub514\uc5d0\uc11c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694"},"getStaticProps\ub294 \uc5b4\ub514\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ud398\uc774\uc9c0"),"\uc5d0\uc11c\ub9cc \ub0b4\ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\uac00 \uc544\ub2cc \ud30c\uc77c\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"_app"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_document")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"_error"),"\uc5d0\uc11c\ub294 \ub0b4\ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc81c\ud55c\uc758 \uc774\uc720 \uc911 \ud558\ub098\ub294 \ud398\uc774\uc9c0\uac00 \ub80c\ub354\ub9c1\ub418\uae30 \uc804\uc5d0 React\uc5d0 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc788\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c, ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," \ub0b4\ubcf4\ub0b4\uae30\ub294 \ub3c5\ub9bd\ud615 \ud568\uc218\ub85c \uc0ac\uc6a9\ud574\uc57c \ud558\uba70, \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud504\ub85c\ud37c\ud2f0\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\ub97c \ucd94\uac00\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"\uc791\ub3d9\ud558\uc9c0")," \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\uc54c\uc544\ub450\uba74 \uc88b\uc740 \uc815\ubcf4"),": ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-app/routing/custom-app"},"custom app"),"\uc744 \ub9cc\ub4e0 \uacbd\uc6b0, \ub9c1\ud06c\ub41c \ubb38\uc11c\uc5d0 \ud45c\uc2dc\ub41c \ub300\ub85c \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"pageProps"),"\ub97c \uc804\ub2ec\ud574\uc57c \ud558\uba70, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 props\uac00 \ube44\uc5b4 \uc788\uac8c \ub429\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"runs-on-every-request-in-development"},"Runs on every request in development"),(0,r.kt)("p",null,"\uac1c\ubc1c \uc911(",(0,r.kt)("inlineCode",{parentName:"p"},"next dev"),")\uc5d0\ub294 \ubaa8\ub4e0 \uc694\uccad\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubbf8\ub9ac\ubcf4\uae30-\ubaa8\ub4dc"},"\ubbf8\ub9ac\ubcf4\uae30 \ubaa8\ub4dc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode"},(0,r.kt)("strong",{parentName:"a"},"\ubbf8\ub9ac \ubcf4\uae30 \ubaa8\ub4dc")),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc77c\uc2dc\uc801\uc73c\ub85c \uc815\uc801 \uc0dd\uc131\uc744 \uc6b0\ud68c\ud558\uace0 \ube4c\ub4dc \uc2dc\uac04 \ub300\uc2e0 ",(0,r.kt)("strong",{parentName:"p"},"\uc694\uccad \uc2dc\uac04"),"\uc5d0 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud5e4\ub4dc\ub9ac\uc2a4 CMS\ub97c \uc0ac\uc6a9 \uc911\uc774\uace0 \ucd08\uc548\uc744 \uac8c\uc2dc\ud558\uae30 \uc804\uc5d0 \ubbf8\ub9ac \ubcf4\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);