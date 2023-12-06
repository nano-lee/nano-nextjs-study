"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),u=a,m=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return r?n.createElement(m,p(p({ref:t},d),{},{components:r})):n.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4,title:"getServerSideProps",description:"Fetch data on each request with `getServerSideProps`."},p=void 0,o={unversionedId:"pages/building-your-application/data-fetching/get-server-side-props",id:"pages/building-your-application/data-fetching/get-server-side-props",title:"getServerSideProps",description:"Fetch data on each request with `getServerSideProps`.",source:"@site/docs/03-pages/01-building-your-application/03-data-fetching/04-get-server-side-props.mdx",sourceDirName:"03-pages/01-building-your-application/03-data-fetching",slug:"/pages/building-your-application/data-fetching/get-server-side-props",permalink:"/docs/pages/building-your-application/data-fetching/get-server-side-props",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/03-data-fetching/04-get-server-side-props.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"getServerSideProps",description:"Fetch data on each request with `getServerSideProps`."},sidebar:"nextJsSidebar",previous:{title:"Forms and Mutations",permalink:"/docs/pages/building-your-application/data-fetching/forms-and-mutations"},next:{title:"Incremental Static Regeneration",permalink:"/docs/pages/building-your-application/data-fetching/incremental-static-regeneration"}},s={},l=[{value:"\uc5b8\uc81c getServerSideProps\uac00 \uc2e4\ud589\ub418\ub294\uac00",id:"\uc5b8\uc81c-getserversideprops\uac00-\uc2e4\ud589\ub418\ub294\uac00",level:2},{value:"getServerSideProps\ub97c \uc5b8\uc81c \uc0ac\uc6a9\ud574\uc57c\ud560\uae4c",id:"getserversideprops\ub97c-\uc5b8\uc81c-\uc0ac\uc6a9\ud574\uc57c\ud560\uae4c",level:2},{value:"getServerSideProps or API Routes",id:"getserversideprops-or-api-routes",level:3},{value:"getServerSideProps with Edge API Routes",id:"getserversideprops-with-edge-api-routes",level:3},{value:"client-side\uc5d0\uc11c Data Fetching",id:"client-side\uc5d0\uc11c-data-fetching",level:2},{value:"\uc694\uccad \uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud574 getServerSideProps \uc0ac\uc6a9",id:"\uc694\uccad-\uc2dc-\ub370\uc774\ud130\ub97c-\uac00\uc838\uc624\uae30-\uc704\ud574-getserversideprops-\uc0ac\uc6a9",level:2},{value:"Server-Side Rendering(SSR)\uc744 \ud1b5\ud55c \uce90\uc2f1",id:"server-side-renderingssr\uc744-\ud1b5\ud55c-\uce90\uc2f1",level:2},{value:"getServerSideProps\uac00 \uc624\ub958 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud558\ub098\uc694?",id:"getserversideprops\uac00-\uc624\ub958-\ud398\uc774\uc9c0\ub97c-\ub80c\ub354\ub9c1\ud558\ub098\uc694",level:2}],d={toc:l},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud398\uc774\uc9c0\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"(SSR)\ub77c\ub294 \ud568\uc218\ub97c \ub0b4\ubcf4\ub0b4\ub294 \uacbd\uc6b0, Next.js\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uac00 \ubc18\ud658\ud55c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \uc694\uccad\uc5d0 \ub300\ud574 \uc774 \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="pages/index.tsx" switcher',filename:'"pages/index.tsx"',switcher:!0},"import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'\n\ntype Repo = {\n  name: string\n  stargazers_count: number\n}\n\nexport const getServerSideProps: GetServerSideProps<{\n  repo: Repo\n}> = async () => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({\n  repo,\n}: InferGetServerSidePropsType<typeof getServerSideProps>) {\n  return repo.stargazers_count\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/index.js" switcher',filename:'"pages/index.js"',switcher:!0},"export const getServerSideProps = async () => {\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\n  const repo = await res.json()\n  return { props: { repo } }\n}\n\nexport default function Page({ repo }) {\n  return repo.stargazers_count\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub80c\ub354\ub9c1 \uc720\ud615\uc5d0 \uad00\uacc4\uc5c6\uc774 \ubaa8\ub4e0 ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\ub294 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc804\ub2ec\ub418\uba70 \ucd08\uae30 HTML\uc758 client-side\uc5d0\uc11c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud398\uc774\uc9c0\uac00 \uc62c\ubc14\ub974\uac8c ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/hydrate"},"hydrated"),"\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\uae30 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\uc57c \ud558\ub294 \ubbfc\uac10\ud55c \uc815\ubcf4\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"\uc5d0 \uc804\ub2ec\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud558\uc138\uc694.")),(0,a.kt)("h2",{id:"\uc5b8\uc81c-getserversideprops\uac00-\uc2e4\ud589\ub418\ub294\uac00"},"\uc5b8\uc81c getServerSideProps\uac00 \uc2e4\ud589\ub418\ub294\uac00"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub294 server-side\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\uba70 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774 \ud398\uc774\uc9c0\ub97c \uc9c1\uc811 \uc694\uccad\ud558\uba74 \uc694\uccad \uc2dc\uc810\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},"getServerSideProps"),"\uac00 \uc2e4\ud589\ub418\uba70, \uc774 \ud398\uc774\uc9c0\ub294 \ubc18\ud658\ub41c \ud504\ub85c\ud37c\ud2f0\ub85c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/components/link"},(0,a.kt)("inlineCode",{parentName:"a"},"next/link"))," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/pages/api-reference/functions/use-router"},(0,a.kt)("inlineCode",{parentName:"a"},"next/router")),"\ub97c \ud1b5\ud574 client-side \ud398\uc774\uc9c0 \uc804\ud658\uc5d0\uc11c \uc774 \ud398\uc774\uc9c0\ub97c \uc694\uccad\ud558\uba74, Next.js\uac00 \uc11c\ubc84\uc5d0 API \uc694\uccad\uc744 \uc804\uc1a1\ud558\uace0, \uc11c\ubc84\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"getServerSideProps"),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub294 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 JSON\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub4e0 \uc791\uc5c5\uc740 Next.js\uac00 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud558\ubbc0\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uac00 \uc815\uc758\ub418\uc5b4 \uc788\ub294 \ud55c \ucd94\uac00\uc801\uc778 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://next-code-elimination.vercel.app/"},"next-code-elimination tool"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec client-side  bundle\uc5d0\uc11c Next.js\uac00 \ubb34\uc5c7\uc744 \uc81c\uac70\ud558\ub294 \uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \ub294 ",(0,a.kt)("strong",{parentName:"p"},"page"),"\uc5d0\uc11c\ub9cc \ub0b4\ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\uac00 \uc544\ub2cc \ud30c\uc77c\uc5d0\uc11c\ub294 \ub0b4\ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud504\ub85c\ud37c\ud2f0\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub97c \ucd94\uac00\ud558\uba74 \uc791\ub3d9\ud558\uc9c0 ",(0,a.kt)("strong",{parentName:"p"},"\uc54a\uc73c\ubbc0\ub85c")," \ub3c5\ub9bd\ud615 \ud568\uc218\ub85c \ub0b4\ubcf4\ub0b4\uc57c \ud55c\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc138\uc694."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props"},(0,a.kt)("inlineCode",{parentName:"a"},"getServerSideProps")," API \ub808\ud37c\ub7f0\uc2a4"),"\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubaa8\ub4e0 \ub9e4\uac1c\ubcc0\uc218 \ubc0f \ud504\ub85c\ud37c\ud2f0\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"getserversideprops\ub97c-\uc5b8\uc81c-\uc0ac\uc6a9\ud574\uc57c\ud560\uae4c"},"getServerSideProps\ub97c \uc5b8\uc81c \uc0ac\uc6a9\ud574\uc57c\ud560\uae4c"),(0,a.kt)("p",null,"\uc694\uccad \uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c \ud558\ub294 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ub370\uc774\ud130\uc758 \ud2b9\uc131\uc774\ub098 \uc694\uccad\uc758 \uc18d\uc131(\uc608: ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," \ud5e4\ub354 \ub610\ub294 \uc9c0\ub9ac\uc801 \uc704\uce58) \ub54c\ubb38\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ud398\uc774\uc9c0\ub294 \uc694\uccad \uc2dc server-side\uc5d0\uc11c \ub80c\ub354\ub9c1\ub418\uba70",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist#caching"},"cache-control \ud5e4\ub354\uac00 \uad6c\uc131\ub41c \uacbd\uc6b0"),"\uc5d0\ub9cc \uce90\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc694\uccad \uc911\uc5d0 \ub370\uc774\ud130\ub97c \ub80c\ub354\ub9c1\ud560 \ud544\uc694\uac00 \uc5c6\ub294 \uacbd\uc6b0 ",(0,a.kt)("a",{parentName:"p",href:"#fetching-data-on-the-client-side"},"client-side")," \ub610\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props"},(0,a.kt)("inlineCode",{parentName:"a"},"getStaticProps")),"\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac83\uc744 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"getserversideprops-or-api-routes"},"getServerSideProps or API Routes"),(0,a.kt)("p",null,"\uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc2f6\uc744 \ub54c ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"},"API Route"),"\ub97c \ucc3e\uc740 \ub2e4\uc74c ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uc5d0\uc11c \ud574\ub2f9 API Route(\uacbd\ub85c)\ub97c \ud638\ucd9c\ud558\uace0 \uc2f6\uc740 \uc720\ud639\uc744 \ub290\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc740 \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uc640 API Route\ub85c \uc778\ud574 \ucd94\uac00 \uc694\uccad\uc774 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 \ubd88\ud544\uc694\ud558\uace0 \ube44\ud6a8\uc728\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. API Route\ub294 CMS\uc5d0\uc11c \uc77c\ubd80 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 API Route\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uc5d0\uc11c \uc9c1\uc811 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucd94\uac00 \ud638\ucd9c\uc774 \ubc1c\uc0dd\ud558\uc5ec \uc131\ub2a5\uc774 \uc800\ud558\ub429\ub2c8\ub2e4. \ub300\uc2e0 API Route \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ub85c\uc9c1\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub85c \uc9c1\uc811 \uac00\uc838\uc624\uc138\uc694. \uc989, ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \ub0b4\ubd80\uc5d0\uc11c CMS, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub610\ub294 \uae30\ud0c0 API\ub97c \uc9c1\uc811 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"getserversideprops-with-edge-api-routes"},"getServerSideProps with Edge API Routes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/rendering/edge-and-nodejs-runtimes"},"\uc11c\ubc84\ub9ac\uc2a4 \ub7f0\ud0c0\uc784\uacfc \uc5e3\uc9c0 \ub7f0\ud0c0\uc784")," \ubaa8\ub450\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, \ub450 \ub7f0\ud0c0\uc784 \ubaa8\ub450\uc5d0\uc11c props\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  However, currently in the Edge Runtime, you do not have access to the response object. \uadf8\ub7ec\ub098 \ud604\uc7ac Edge \ub7f0\ud0c0\uc784\uc5d0\uc11c\ub294 \uc751\ub2f5 \uac1d\uccb4\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \uc608\ub97c \ub4e4\uc5b4 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"\uc5d0\uc11c \ucfe0\ud0a4\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc751\ub2f5 \uac1d\uccb4\uc5d0 \uc561\uc138\uc2a4\ud558\ub824\uba74 ",(0,a.kt)("strong",{parentName:"p"},"\uae30\ubcf8 \ub7f0\ud0c0\uc784\uc778 Node.js \ub7f0\ud0c0\uc784\uc744 \uacc4\uc18d \uc0ac\uc6a9"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\ub97c \uc218\uc815\ud558\uc5ec \ud398\uc774\uc9c0\ubcc4\ub85c \ub7f0\ud0c0\uc784\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="pages/index.js"',filename:'"pages/index.js"'},"export const config = {\n  runtime: 'nodejs', // or \"edge\"\n}\n\nexport const getServerSideProps = async () => {}\n")),(0,a.kt)("h2",{id:"client-side\uc5d0\uc11c-data-fetching"},"client-side\uc5d0\uc11c Data Fetching"),(0,a.kt)("p",null,"\ud398\uc774\uc9c0\uc5d0 \uc790\uc8fc \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \ub370\uc774\ud130\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uace0 \ub370\uc774\ud130\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud560 \ud544\uc694\uac00 \uc5c6\ub294 \uacbd\uc6b0 ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21"),"\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ubcc4 \ub370\uc774\ud130\ub97c \uc608\ub85c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uba3c\uc800 \ub370\uc774\ud130\uac00 \uc5c6\ub294 \ud398\uc774\uc9c0\ub97c \uc989\uc2dc \ud45c\uc2dc\ud569\ub2c8\ub2e4. \ud398\uc774\uc9c0\uc758 \uc77c\ubd80\ub294 \uc815\uc801 \uc0dd\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub204\ub77d\ub41c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ub85c\ub529 \uc0c1\ud0dc\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7f0 \ub2e4\uc74c \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \uc900\ube44\uac00 \ub418\uba74 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774 \uc811\uadfc \ubc29\uc2dd\uc740 \uc608\ub97c \ub4e4\uc5b4 \uc0ac\uc6a9\uc790 \ub300\uc2dc\ubcf4\ub4dc \ud398\uc774\uc9c0\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. \ub300\uc2dc\ubcf4\ub4dc\ub294 \ube44\uacf5\uac1c\uc801\uc778 \uc0ac\uc6a9\uc790\ubcc4 \ud398\uc774\uc9c0\uc774\ubbc0\ub85c, SEO\ub294 \uad00\ub828\uc774 \uc5c6\uc73c\uba70 \ud398\uc774\uc9c0\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\ub294 \uc790\uc8fc \uc5c5\ub370\uc774\ud2b8\ub418\ubbc0\ub85c \uc694\uccad \uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc694\uccad-\uc2dc-\ub370\uc774\ud130\ub97c-\uac00\uc838\uc624\uae30-\uc704\ud574-getserversideprops-\uc0ac\uc6a9"},"\uc694\uccad \uc2dc \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud574 getServerSideProps \uc0ac\uc6a9"),(0,a.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 \uc694\uccad \uc2dc\uc810\uc5d0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \uacb0\uacfc\ub97c \ubbf8\ub9ac \ub80c\ub354\ub9c1\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Page({ data }) {\n  // data \ub80c\ub354\ub9c1...\n}\n\n// \ubaa8\ub4e0 \uc694\uccad\uc5d0 \ub300\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4\nexport async function getServerSideProps() {\n  // \uc678\ubd80 API\uc5d0\uc11c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\n  const res = await fetch(`https://.../data`)\n  const data = await res.json()\n\n  // props\ub97c \ud1b5\ud574 \ud398\uc774\uc9c0\uc5d0 \ub370\uc774\ud130 \uc804\ub2ec\n  return { props: { data } }\n}\n\nexport default Page\n")),(0,a.kt)("h2",{id:"server-side-renderingssr\uc744-\ud1b5\ud55c-\uce90\uc2f1"},"Server-Side Rendering(SSR)\uc744 \ud1b5\ud55c \uce90\uc2f1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \ub0b4\ubd80\uc758 \uce90\uc2f1 \ud5e4\ub354(",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uc801 \uc751\ub2f5\uc744 \uce90\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},(0,a.kt)("inlineCode",{parentName:"a"},"stale-while-revalidate")),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \uc774 \uac12\uc740 10\ucd08 \ub3d9\uc548 \uc0c8\ub85c \uace0\uce68\ub41c \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4(s-maxage=10).\n// \ub2e4\uc74c 10\ucd08 \uc774\ub0b4\uc5d0 \uc694\uccad\uc774 \ubc18\ubcf5\ub418\uba74 \uc774\uc804\uc5d0 \uce90\uc2dc\ub41c \uac12\uc740 \uc5ec\uc804\ud788 \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4. \n// 59\ucd08 \uc774\uc804\uc5d0 \uc694\uccad\uc774 \ubc18\ubcf5\ub418\uba74 \uce90\uc2dc\ub41c \uac12\uc740 \uc624\ub798\ub418\uc5c8\uc9c0\ub9cc \uc5ec\uc804\ud788 \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4(stale-while-revalidate=59).\n//\n// \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uce90\uc2dc\ub97c \uc0c8\ub85c\uc6b4 \uac12\uc73c\ub85c \ucc44\uc6b0\uae30 \uc704\ud574 \uc7ac\uac80\uc99d \uc694\uccad\uc774 \uc218\ud589\ub429\ub2c8\ub2e4.\n// \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c \uace0\uce58\uba74 \uc0c8 \uac12\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nexport async function getServerSideProps({ req, res }) {\n  res.setHeader(\n    'Cache-Control',\n    'public, s-maxage=10, stale-while-revalidate=59'\n  )\n\n  return {\n    props: {},\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist#caching"},"caching"),"\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."),(0,a.kt)("h2",{id:"getserversideprops\uac00-\uc624\ub958-\ud398\uc774\uc9c0\ub97c-\ub80c\ub354\ub9c1\ud558\ub098\uc694"},"getServerSideProps\uac00 \uc624\ub958 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1\ud558\ub098\uc694?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \ub0b4\uc5d0\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/500.js")," \ud30c\uc77c\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"/https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page"},"500 page")," \ubb38\uc11c\ub97c \ud655\uc778\ud558\uc5ec \uc774 \ud398\uc774\uc9c0\uc758 \uc0dd\uc131 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694. \uac1c\ubc1c \uc911\uc5d0\ub294 \uc774 \ud30c\uc77c\uc774 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc73c\uba70 \ub300\uc2e0 dev overlay\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."))}g.isMDXComponent=!0}}]);