"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={title:"MDX",description:"Learn how to configure MDX to write JSX in your markdown files."},i=void 0,p={unversionedId:"app/building-your-application/configuring/mdx",id:"app/building-your-application/configuring/mdx",title:"MDX",description:"Learn how to configure MDX to write JSX in your markdown files.",source:"@site/docs/02-app/01-building-your-application/07-configuring/05-mdx.mdx",sourceDirName:"02-app/01-building-your-application/07-configuring",slug:"/app/building-your-application/configuring/mdx",permalink:"/docs/app/building-your-application/configuring/mdx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/01-building-your-application/07-configuring/05-mdx.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"MDX",description:"Learn how to configure MDX to write JSX in your markdown files."},sidebar:"nextJsSidebar",previous:{title:"Absolute Imports and Module Path Aliases",permalink:"/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases"},next:{title:"src Directory",permalink:"/docs/app/building-your-application/configuring/src-directory"}},s={},l=[{value:"<code>@next/mdx</code>",id:"nextmdx",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Remote MDX",id:"remote-mdx",level:2},{value:"Layouts",id:"layouts",level:2},{value:"Remark and Rehype Plugins",id:"remark-and-rehype-plugins",level:2},{value:"Frontmatter",id:"frontmatter",level:2},{value:"Custom Elements",id:"custom-elements",level:2},{value:"Deep Dive: How do you transform markdown into HTML?",id:"deep-dive-how-do-you-transform-markdown-into-html",level:2},{value:"Using the Rust-based MDX compiler (Experimental)",id:"using-the-rust-based-mdx-compiler-experimental",level:2},{value:"Helpful Links",id:"helpful-links",level:2}],m={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"{/",(0,o.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown")," is a lightweight markup language used to format text. It allows you to write using plain text syntax and convert it to structurally valid HTML. It's commonly used for writing content on websites and blogs."),(0,o.kt)("p",null,"You write..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"I **love** using [Next.js](https://nextjs.org/)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p>I <strong>love</strong> using <a href="https://nextjs.org/">Next.js</a></p>\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," is a superset of markdown that lets you write ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX")," directly in your markdown files. It is a powerful way to add dynamic interactivity and embed React components within your content."),(0,o.kt)("p",null,"Next.js can support both local MDX content inside your application, as well as remote MDX files fetched dynamically on the server. The Next.js plugin handles transforming markdown and React components into HTML, including support for usage in Server Components (the default in App Router)."),(0,o.kt)("h2",{id:"nextmdx"},(0,o.kt)("inlineCode",{parentName:"h2"},"@next/mdx")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@next/mdx")," package is used to configure Next.js so it can process markdown and MDX. ",(0,o.kt)("strong",{parentName:"p"},"It sources data from local files"),", allowing you to create pages with a ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension, directly in your ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/app")," directory."),(0,o.kt)("p",null,"Let's walk through how to configure and use MDX with Next.js."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Install packages needed to render MDX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'filename="Terminal"',filename:'"Terminal"'},"npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"mdx-components.tsx")," file at the root of your application (the parent folder of ",(0,o.kt)("inlineCode",{parentName:"p"},"app/")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"src/"),"):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"mdx-components.tsx")," is required to use MDX with App Router and will not work without it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="mdx-components.tsx" switcher',filename:'"mdx-components.tsx"',switcher:!0},'import type { MDXComponents } from "mdx/types";\n\nexport function useMDXComponents(components: MDXComponents): MDXComponents {\n    return {\n        ...components,\n    };\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="mdx-components.js" switcher',filename:'"mdx-components.js"',switcher:!0},"export function useMDXComponents(components) {\n    return {\n        ...components,\n    };\n}\n")),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," file at your project's root to configure it to use MDX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},'const withMDX = require("@next/mdx")();\n\n/** @type {import(\'next\').NextConfig} */\nconst nextConfig = {\n    // Configure `pageExtensions`` to include MDX files\n    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],\n    // Optionally, add any other Next.js config below\n};\n\nmodule.exports = withMDX(nextConfig);\n')),(0,o.kt)("p",null,"Then, create a new MDX page within the ",(0,o.kt)("inlineCode",{parentName:"p"},"/app")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"  your-project\n  \u251c\u2500\u2500 app\n  \u2502   \u2514\u2500\u2500 my-mdx-page\n  \u2502       \u2514\u2500\u2500 page.mdx\n  \u2514\u2500\u2500 package.json\n")),(0,o.kt)("p",null,"Now you can use markdown and import React components directly inside your MDX page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},'import { MyComponent } from "my-components";\n\n# Welcome to my MDX page!\n\nThis is some **bold** and _italics_ text.\n\nThis is a list in markdown:\n\n-   One\n-   Two\n-   Three\n\nCheckout my React component:\n\n<MyComponent />\n')),(0,o.kt)("p",null,"Navigating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-mdx-page")," route should display your rendered MDX."),(0,o.kt)("h2",{id:"remote-mdx"},"Remote MDX"),(0,o.kt)("p",null,"If your markdown or MDX files or content lives ",(0,o.kt)("em",{parentName:"p"},"somewhere else"),", you can fetch it dynamically on the server. This is useful for content stored in a separate local folder, CMS, database, or anywhere else."),(0,o.kt)("p",null,"There are two popular community packages for fetching MDX content:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support"},(0,o.kt)("inlineCode",{parentName:"a"},"next-mdx-remote"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.contentlayer.dev/"},(0,o.kt)("inlineCode",{parentName:"a"},"contentlayer")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Good to know"),": Please proceed with caution. MDX compiles to JavaScript and is executed on the server. You should only fetch MDX content from a trusted source, otherwise this can lead to remote code execution (RCE).")),(0,o.kt)("p",null,"The following example uses ",(0,o.kt)("inlineCode",{parentName:"p"},"next-mdx-remote"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/my-mdx-page-remote/page.tsx" switcher',filename:'"app/my-mdx-page-remote/page.tsx"',switcher:!0},'import { MDXRemote } from "next-mdx-remote/rsc";\n\nexport default async function RemoteMdxPage() {\n    // MDX text - can be from a local file, database, CMS, fetch, anywhere...\n    const res = await fetch("https://...");\n    const markdown = await res.text();\n    return <MDXRemote source={markdown} />;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/my-mdx-page-remote/page.js" switcher',filename:'"app/my-mdx-page-remote/page.js"',switcher:!0},'import { MDXRemote } from "next-mdx-remote/rsc";\n\nexport default async function RemoteMdxPage() {\n    // MDX text - can be from a local file, database, CMS, fetch, anywhere...\n    const res = await fetch("https://...");\n    const markdown = await res.text();\n    return <MDXRemote source={markdown} />;\n}\n')),(0,o.kt)("p",null,"Navigating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-mdx-page-remote")," route should display your rendered MDX."),(0,o.kt)("h2",{id:"layouts"},"Layouts"),(0,o.kt)("p",null,"To share a layout amongst MDX pages, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/pages-and-layouts#layouts"},"built-in layouts support")," with the App Router."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/my-mdx-page/layout.tsx" switcher',filename:'"app/my-mdx-page/layout.tsx"',switcher:!0},'export default function MdxLayout({ children }: { children: React.ReactNode }) {\n    // Create any shared layout or styles here\n    return <div style={{ color: "blue" }}>{children}</div>;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/my-mdx-page/layout.js" switcher',filename:'"app/my-mdx-page/layout.js"',switcher:!0},'export default function MdxLayout({ children }) {\n    // Create any shared layout or styles here\n    return <div style={{ color: "blue" }}>{children}</div>;\n}\n')),(0,o.kt)("h2",{id:"remark-and-rehype-plugins"},"Remark and Rehype Plugins"),(0,o.kt)("p",null,"You can optionally provide ",(0,o.kt)("inlineCode",{parentName:"p"},"remark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype")," plugins to transform the MDX content."),(0,o.kt)("p",null,"For example, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"remark-gfm")," to support GitHub Flavored Markdown."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"remark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype")," ecosystem is ESM only, you'll need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.mjs")," as the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.mjs"',filename:'"next.config.mjs"'},'import remarkGfm from "remark-gfm";\nimport createMDX from "@next/mdx";\n\n/** @type {import(\'next\').NextConfig} */\nconst nextConfig = {\n    // Configure `pageExtensions`` to include MDX files\n    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],\n    // Optionally, add any other Next.js config below\n};\n\nconst withMDX = createMDX({\n    // Add markdown plugins here, as desired\n    options: {\n        remarkPlugins: [remarkGfm],\n        rehypePlugins: [],\n    },\n});\n\n// Merge MDX config with Next.js config\nexport default withMDX(nextConfig);\n')),(0,o.kt)("h2",{id:"frontmatter"},"Frontmatter"),(0,o.kt)("p",null,"Frontmatter is a YAML like key/value pairing that can be used to store data about a page. ",(0,o.kt)("inlineCode",{parentName:"p"},"@next/mdx")," does ",(0,o.kt)("strong",{parentName:"p"},"not")," support frontmatter by default, though there are many solutions for adding frontmatter to your MDX content, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remarkjs/remark-frontmatter"},"remark-frontmatter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jonschlinkert/gray-matter"},"gray-matter"),".")),(0,o.kt)("p",null,"To access page metadata with ",(0,o.kt)("inlineCode",{parentName:"p"},"@next/mdx"),", you can export a meta object from within the ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx"},'export const meta = {\n    author: "John Doe",\n};\n\n# My MDX page\n')),(0,o.kt)("h2",{id:"custom-elements"},"Custom Elements"),(0,o.kt)("p",null,"One of the pleasant aspects of using markdown, is that it maps to native ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML")," elements, making writing fast, and intuitive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"This is a list in markdown:\n\n-   One\n-   Two\n-   Three\n")),(0,o.kt)("p",null,"The above generates the following ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<p>This is a list in markdown:</p>\n\n<ul>\n    <li>One</li>\n    <li>Two</li>\n    <li>Three</li>\n</ul>\n")),(0,o.kt)("p",null,"When you want to style your own elements for a custom feel to your website or application, you can pass in shortcodes. These are your own custom components that map to ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML")," elements."),(0,o.kt)("p",null,"To do this, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"mdx-components.tsx")," file at the root of your application and add custom elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="mdx-components.tsx" switcher',filename:'"mdx-components.tsx"',switcher:!0},'import type { MDXComponents } from "mdx/types";\nimport Image from "next/image";\n\n// This file allows you to provide custom React components\n// to be used in MDX files. You can import and use any\n// React component you want, including inline styles,\n// components from other libraries, and more.\n\nexport function useMDXComponents(components: MDXComponents): MDXComponents {\n    return {\n        // Allows customizing built-in components, e.g. to add styling.\n        h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,\n        img: (props) => (\n            <Image\n                sizes="100vw"\n                style={{ width: "100%", height: "auto" }}\n                {...props}\n            />\n        ),\n        ...components,\n    };\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="mdx-components.js" switcher',filename:'"mdx-components.js"',switcher:!0},'import Image from "next/image";\n\n// This file allows you to provide custom React components\n// to be used in MDX files. You can import and use any\n// React component you want, including inline styles,\n// components from other libraries, and more.\n\nexport function useMDXComponents(components) {\n    return {\n        // Allows customizing built-in components, e.g. to add styling.\n        h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,\n        img: (props) => (\n            <Image\n                sizes="100vw"\n                style={{ width: "100%", height: "auto" }}\n                {...props}\n            />\n        ),\n        ...components,\n    };\n}\n')),(0,o.kt)("h2",{id:"deep-dive-how-do-you-transform-markdown-into-html"},"Deep Dive: How do you transform markdown into HTML?"),(0,o.kt)("p",null,"React does not natively understand markdown. The markdown plaintext needs to first be transformed into HTML. This can be accomplished with ",(0,o.kt)("inlineCode",{parentName:"p"},"remark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"remark")," is an ecosystem of tools around markdown. ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype")," is the same, but for HTML. For example, the following code snippet transforms markdown into HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { unified } from "unified";\nimport remarkParse from "remark-parse";\nimport remarkRehype from "remark-rehype";\nimport rehypeSanitize from "rehype-sanitize";\nimport rehypeStringify from "rehype-stringify";\n\nmain();\n\nasync function main() {\n    const file = await unified()\n        .use(remarkParse) // Convert into markdown AST\n        .use(remarkRehype) // Transform to HTML AST\n        .use(rehypeSanitize) // Sanitize HTML input\n        .use(rehypeStringify) // Convert AST into serialized HTML\n        .process("Hello, Next.js!");\n\n    console.log(String(file)); // <p>Hello, Next.js!</p>\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"remark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype")," ecosystem contains plugins for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atomiks/rehype-pretty-code"},"syntax highlighting"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rehypejs/rehype-autolink-headings"},"linking headings"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark-toc"},"generating a table of contents"),", and more."),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"@next/mdx")," as shown above, you ",(0,o.kt)("strong",{parentName:"p"},"do not")," need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"remark")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rehype")," directly, as it is handled for you. We're describing it here for a deeper understanding of what the ",(0,o.kt)("inlineCode",{parentName:"p"},"@next/mdx")," package is doing underneath."),(0,o.kt)("h2",{id:"using-the-rust-based-mdx-compiler-experimental"},"Using the Rust-based MDX compiler (Experimental)"),(0,o.kt)("p",null,"Next.js supports a new MDX compiler written in Rust. This compiler is still experimental and is not recommended for production use. To use the new compiler, you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," when you pass it to ",(0,o.kt)("inlineCode",{parentName:"p"},"withMDX"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="next.config.js"',filename:'"next.config.js"'},"module.exports = withMDX({\n    experimental: {\n        mdxRs: true,\n    },\n});\n")),(0,o.kt)("h2",{id:"helpful-links"},"Helpful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mdxjs.com"},"MDX")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@next/mdx"},(0,o.kt)("inlineCode",{parentName:"a"},"@next/mdx"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remarkjs/remark"},"remark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rehypejs/rehype"},"rehype"))))}d.isMDXComponent=!0}}]);