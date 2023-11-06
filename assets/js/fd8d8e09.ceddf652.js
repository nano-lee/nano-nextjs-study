"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[646],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},d),{},{components:t})):o.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:8,title:"Upgrading to Version 9",sidebar_label:"Version 9",description:"Upgrade your Next.js Application from Version 8 to Version 9."},i=void 0,l={unversionedId:"pages/building-your-application/upgrading/version-9",id:"pages/building-your-application/upgrading/version-9",title:"Upgrading to Version 9",description:"Upgrade your Next.js Application from Version 8 to Version 9.",source:"@site/docs/03-pages/01-building-your-application/08-upgrading/08-version-9.mdx",sourceDirName:"03-pages/01-building-your-application/08-upgrading",slug:"/pages/building-your-application/upgrading/version-9",permalink:"/docs/pages/building-your-application/upgrading/version-9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-pages/01-building-your-application/08-upgrading/08-version-9.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Upgrading to Version 9",sidebar_label:"Version 9",description:"Upgrade your Next.js Application from Version 8 to Version 9."},sidebar:"nextJsSidebar",previous:{title:"Version 10",permalink:"/docs/pages/building-your-application/upgrading/version-10"},next:{title:"API Reference",permalink:"/docs/pages/api-reference/"}},p={},s=[{value:"Production Deployment on Vercel",id:"production-deployment-on-vercel",level:2},{value:"Check your Custom App File (<code>pages/_app.js</code>)",id:"check-your-custom-app-file-pages_appjs",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"<code>@zeit/next-typescript</code> is no longer necessary",id:"zeitnext-typescript-is-no-longer-necessary",level:3},{value:"The <code>config</code> key is now an export on a page",id:"the-config-key-is-now-an-export-on-a-page",level:3},{value:"<code>next/dynamic</code> no longer renders &quot;loading...&quot; by default while loading",id:"nextdynamic-no-longer-renders-loading-by-default-while-loading",level:3},{value:"<code>withAmp</code> has been removed in favor of an exported configuration object",id:"withamp-has-been-removed-in-favor-of-an-exported-configuration-object",level:3},{value:"<code>next export</code> no longer exports pages as <code>index.html</code>",id:"next-export-no-longer-exports-pages-as-indexhtml",level:3},{value:"<code>pages/api/</code> is treated differently",id:"pagesapi-is-treated-differently",level:3},{value:"Deprecated Features",id:"deprecated-features",level:2},{value:"<code>next/dynamic</code> has deprecated loading multiple modules at once",id:"nextdynamic-has-deprecated-loading-multiple-modules-at-once",level:3}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To upgrade to version 9, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm i next@9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"yarn add next@9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"pnpm up next@9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"bun add next@9\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know:")," If you are using TypeScript, ensure you also upgrade ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/react-dom")," to their corresponding versions.")),(0,a.kt)("h2",{id:"production-deployment-on-vercel"},"Production Deployment on Vercel"),(0,a.kt)("p",null,"If you previously configured ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel.json")," file for dynamic routes, these rules can be removed when leveraging Next.js 9's new ",(0,a.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Routing feature"),"."),(0,a.kt)("p",null,"Next.js 9's dynamic routes are ",(0,a.kt)("strong",{parentName:"p"},"automatically configured on ",(0,a.kt)("a",{parentName:"strong",href:"https://vercel.com/"},"Vercel"))," and do not require any ",(0,a.kt)("inlineCode",{parentName:"p"},"vercel.json")," customization."),(0,a.kt)("p",null,"You can read more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/dynamic-routes"},"Dynamic Routing here"),"."),(0,a.kt)("h2",{id:"check-your-custom-app-file-pages_appjs"},"Check your Custom App File (",(0,a.kt)("inlineCode",{parentName:"h2"},"pages/_app.js"),")"),(0,a.kt)("p",null,"If you previously copied the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pages/building-your-application/routing/custom-app"},"Custom ",(0,a.kt)("inlineCode",{parentName:"a"},"<App>"))," example, you may be able to remove your ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps"),"."),(0,a.kt)("p",null,"Removing ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/_app.js")," (when possible) is important to leverage new Next.js features!"),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"getInitialProps")," does nothing and may be removed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyApp extends App {\n    // Remove me, I do nothing!\n    static async getInitialProps({ Component, ctx }) {\n        let pageProps = {};\n\n        if (Component.getInitialProps) {\n            pageProps = await Component.getInitialProps(ctx);\n        }\n\n        return { pageProps };\n    }\n\n    render() {\n        // ... etc\n    }\n}\n")),(0,a.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,a.kt)("h3",{id:"zeitnext-typescript-is-no-longer-necessary"},(0,a.kt)("inlineCode",{parentName:"h3"},"@zeit/next-typescript")," is no longer necessary"),(0,a.kt)("p",null,"Next.js will now ignore usage ",(0,a.kt)("inlineCode",{parentName:"p"},"@zeit/next-typescript")," and warn you to remove it. Please remove this plugin from your ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,a.kt)("p",null,"Remove references to ",(0,a.kt)("inlineCode",{parentName:"p"},"@zeit/next-typescript/babel")," from your custom ",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc")," (if present)."),(0,a.kt)("p",null,"The usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues"},(0,a.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," should also be removed from your ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js"),"."),(0,a.kt)("p",null,"TypeScript Definitions are published with the ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," package, so you need to uninstall ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/next")," as they would conflict."),(0,a.kt)("p",null,"The following types are different:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This list was created by the community to help you upgrade, if you find other differences please send a pull-request to this list to help other users.")),(0,a.kt)("p",null,"From:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { NextContext } from "next";\nimport { NextAppContext, DefaultAppIProps } from "next/app";\nimport { NextDocumentContext, DefaultDocumentIProps } from "next/document";\n')),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { NextPageContext } from "next";\nimport { AppContext, AppInitialProps } from "next/app";\nimport { DocumentContext, DocumentInitialProps } from "next/document";\n')),(0,a.kt)("h3",{id:"the-config-key-is-now-an-export-on-a-page"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"config")," key is now an export on a page"),(0,a.kt)("p",null,"You may no longer export a custom variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," from a page (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"export { config }")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"export const config ..."),").\nThis exported variable is now used to specify page-level Next.js configuration like Opt-in AMP and API Route features."),(0,a.kt)("p",null,"You must rename a non-Next.js-purposed ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," export to something different."),(0,a.kt)("h3",{id:"nextdynamic-no-longer-renders-loading-by-default-while-loading"},(0,a.kt)("inlineCode",{parentName:"h3"},"next/dynamic"),' no longer renders "loading..." by default while loading'),(0,a.kt)("p",null,"Dynamic components will not render anything by default while loading. You can still customize this behavior by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import dynamic from "next/dynamic";\n\nconst DynamicComponentWithCustomLoading = dynamic(\n    () => import("../components/hello2"),\n    {\n        loading: () => <p>Loading</p>,\n    },\n);\n')),(0,a.kt)("h3",{id:"withamp-has-been-removed-in-favor-of-an-exported-configuration-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"withAmp")," has been removed in favor of an exported configuration object"),(0,a.kt)("p",null,"Next.js now has the concept of page-level configuration, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"withAmp")," higher-order component has been removed for consistency."),(0,a.kt)("p",null,"This change can be ",(0,a.kt)("strong",{parentName:"p"},"automatically migrated by running the following commands in the root of your Next.js project:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"curl -L https://github.com/vercel/next-codemod/archive/master.tar.gz | tar -xz --strip=2 next-codemod-master/transforms/withamp-to-config.js npx jscodeshift -t ./withamp-to-config.js pages/**/*.js\n")),(0,a.kt)("p",null,"To perform this migration by hand, or view what the codemod will produce, see below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withAmp } from 'next/amp'\n\nfunction Home() {\n  return <h1>My AMP Page</h1>\n}\n\nexport default withAmp(Home)\n// or\nexport default withAmp(Home, { hybrid: true })\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"After")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function Home() {\n    return <h1>My AMP Page</h1>;\n}\n\nexport const config = {\n    amp: true,\n    // or\n    amp: "hybrid",\n};\n')),(0,a.kt)("h3",{id:"next-export-no-longer-exports-pages-as-indexhtml"},(0,a.kt)("inlineCode",{parentName:"h3"},"next export")," no longer exports pages as ",(0,a.kt)("inlineCode",{parentName:"h3"},"index.html")),(0,a.kt)("p",null,"Previously, exporting ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/about.js")," would result in ",(0,a.kt)("inlineCode",{parentName:"p"},"out/about/index.html"),". This behavior has been changed to result in ",(0,a.kt)("inlineCode",{parentName:"p"},"out/about.html"),"."),(0,a.kt)("p",null,"You can revert to the previous behavior by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"next.config.js")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = {\n    trailingSlash: true,\n};\n")),(0,a.kt)("h3",{id:"pagesapi-is-treated-differently"},(0,a.kt)("inlineCode",{parentName:"h3"},"pages/api/")," is treated differently"),(0,a.kt)("p",null,"Pages in ",(0,a.kt)("inlineCode",{parentName:"p"},"pages/api/")," are now considered ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/blog/next-9#api-routes"},"API Routes"),".\nPages in this directory will no longer contain a client-side bundle."),(0,a.kt)("h2",{id:"deprecated-features"},"Deprecated Features"),(0,a.kt)("h3",{id:"nextdynamic-has-deprecated-loading-multiple-modules-at-once"},(0,a.kt)("inlineCode",{parentName:"h3"},"next/dynamic")," has deprecated loading multiple modules at once"),(0,a.kt)("p",null,"The ability to load multiple modules at once has been deprecated in ",(0,a.kt)("inlineCode",{parentName:"p"},"next/dynamic")," to be closer to React's implementation (",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense"),")."),(0,a.kt)("p",null,"Updating code that relies on this behavior is relatively straightforward! We've provided an example of a before/after to help you migrate your application:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import dynamic from "next/dynamic";\n\nconst HelloBundle = dynamic({\n    modules: () => {\n        const components = {\n            Hello1: () => import("../components/hello1").then((m) => m.default),\n            Hello2: () => import("../components/hello2").then((m) => m.default),\n        };\n\n        return components;\n    },\n    render: (props, { Hello1, Hello2 }) => (\n        <div>\n            <h1>{props.title}</h1>\n            <Hello1 />\n            <Hello2 />\n        </div>\n    ),\n});\n\nfunction DynamicBundle() {\n    return <HelloBundle title="Dynamic Bundle" />;\n}\n\nexport default DynamicBundle;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"After")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import dynamic from "next/dynamic";\n\nconst Hello1 = dynamic(() => import("../components/hello1"));\nconst Hello2 = dynamic(() => import("../components/hello2"));\n\nfunction HelloBundle({ title }) {\n    return (\n        <div>\n            <h1>{title}</h1>\n            <Hello1 />\n            <Hello2 />\n        </div>\n    );\n}\n\nfunction DynamicBundle() {\n    return <HelloBundle title="Dynamic Bundle" />;\n}\n\nexport default DynamicBundle;\n')))}u.isMDXComponent=!0}}]);