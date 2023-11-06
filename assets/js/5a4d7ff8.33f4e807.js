"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"cookies",description:"API Reference for the cookies function.",related:{title:"Next Steps",description:"For more information on what to do next, we recommend the following sections",links:["app/building-your-application/data-fetching/forms-and-mutations"]}},r=void 0,s={unversionedId:"app/api-reference/functions/cookies",id:"app/api-reference/functions/cookies",title:"cookies",description:"API Reference for the cookies function.",source:"@site/docs/02-app/02-api-reference/04-functions/cookies.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/cookies",permalink:"/docs/app/api-reference/functions/cookies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/cookies.mdx",tags:[],version:"current",frontMatter:{title:"cookies",description:"API Reference for the cookies function.",related:{title:"Next Steps",description:"For more information on what to do next, we recommend the following sections",links:["app/building-your-application/data-fetching/forms-and-mutations"]}},sidebar:"nextJsSidebar",previous:{title:"Functions",permalink:"/docs/app/api-reference/functions/"},next:{title:"draftMode",permalink:"/docs/app/api-reference/functions/draft-mode"}},l={},p=[{value:"<code>cookies().get(name)</code>",id:"cookiesgetname",level:2},{value:"<code>cookies().getAll()</code>",id:"cookiesgetall",level:2},{value:"<code>cookies().has(name)</code>",id:"cookieshasname",level:2},{value:"<code>cookies().set(name, value, options)</code>",id:"cookiessetname-value-options",level:2},{value:"Deleting cookies",id:"deleting-cookies",level:2},{value:"<code>cookies().delete(name)</code>",id:"cookiesdeletename",level:3},{value:"<code>cookies().set(name, &#39;&#39;)</code>",id:"cookiessetname-",level:3},{value:"<code>cookies().set(name, value, { maxAge: 0 })</code>",id:"cookiessetname-value--maxage-0-",level:3},{value:"<code>cookies().set(name, value, { expires: timestamp })</code>",id:"cookiessetname-value--expires-timestamp-",level:3},{value:"Version History",id:"version-history",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies")," function allows you to read the HTTP incoming request cookies from a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/rendering/server-components"},"Server Component")," or write outgoing request cookies in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"Server Action")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handler"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"cookies()")," is a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/app/building-your-application/rendering/server-components#server-rendering-strategies#dynamic-functions"},"Dynamic Function"))," whose returned values cannot be known ahead of time. Using it in a layout or page will opt a route into ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/app/building-your-application/rendering/server-components#dynamic-rendering"},"dynamic rendering"))," at request time.")),(0,a.kt)("h2",{id:"cookiesgetname"},(0,a.kt)("inlineCode",{parentName:"h2"},"cookies().get(name)")),(0,a.kt)("p",null,"A method that takes a cookie name and returns an object with name and value. If a cookie with ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," isn't found, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". If multiple cookies match, it will only return the first match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},"import { cookies } from 'next/headers'\n\nexport default function Page() {\n  const cookieStore = cookies()\n  const theme = cookieStore.get('theme')\n  return '...'\n}\n")),(0,a.kt)("h2",{id:"cookiesgetall"},(0,a.kt)("inlineCode",{parentName:"h2"},"cookies().getAll()")),(0,a.kt)("p",null,"A method that is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", but returns a list of all the cookies with a matching ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," is unspecified, it returns all the available cookies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},"import { cookies } from 'next/headers'\n\nexport default function Page() {\n  const cookieStore = cookies()\n  return cookieStore.getAll().map((cookie) => (\n    <div key={cookie.name}>\n      <p>Name: {cookie.name}</p>\n      <p>Value: {cookie.value}</p>\n    </div>\n  ))\n}\n")),(0,a.kt)("h2",{id:"cookieshasname"},(0,a.kt)("inlineCode",{parentName:"h2"},"cookies().has(name)")),(0,a.kt)("p",null,"A method that takes a cookie name and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," based on if the cookie exists (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") or not (",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js"',filename:'"app/page.js"'},"import { cookies } from 'next/headers'\n\nexport default function Page() {\n  const cookiesList = cookies()\n  const hasCookie = cookiesList.has('theme')\n  return '...'\n}\n")),(0,a.kt)("h2",{id:"cookiessetname-value-options"},(0,a.kt)("inlineCode",{parentName:"h2"},"cookies().set(name, value, options)")),(0,a.kt)("p",null,"A method that takes a cookie name, value, and options and sets the outgoing request cookie."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": HTTP does not allow setting cookies after streaming starts, so you must use ",(0,a.kt)("inlineCode",{parentName:"p"},".set()")," in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"Server Action")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handler"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},"'use server'\n\nimport { cookies } from 'next/headers'\n\nasync function create(data) {\n  cookies().set('name', 'lee')\n  // or\n  cookies().set('name', 'lee', { secure: true })\n  // or\n  cookies().set({\n    name: 'name',\n    value: 'lee',\n    httpOnly: true,\n    path: '/',\n  })\n}\n")),(0,a.kt)("h2",{id:"deleting-cookies"},"Deleting cookies"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": You can only delete cookies in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"Server Action")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handler"),".")),(0,a.kt)("p",null,"There are several options for deleting a cookie:"),(0,a.kt)("h3",{id:"cookiesdeletename"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookies().delete(name)")),(0,a.kt)("p",null,"You can explicitly delete a cookie with a given name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},"'use server'\n\nimport { cookies } from 'next/headers'\n\nasync function create(data) {\n  cookies().delete('name')\n}\n")),(0,a.kt)("h3",{id:"cookiessetname-"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookies().set(name, '')")),(0,a.kt)("p",null,"Alternatively, you can set a new cookie with the same name and an empty value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},"'use server'\n\nimport { cookies } from 'next/headers'\n\nasync function create(data) {\n  cookies().set('name', '')\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": ",(0,a.kt)("inlineCode",{parentName:"p"},".set()")," is only available in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/data-fetching/forms-and-mutations"},"Server Action")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/routing/route-handlers"},"Route Handler"),".")),(0,a.kt)("h3",{id:"cookiessetname-value--maxage-0-"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookies().set(name, value, { maxAge: 0 })")),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"maxAge")," to 0 will immediately expire a cookie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},"'use server'\n\nimport { cookies } from 'next/headers'\n\nasync function create(data) {\n  cookies().set('name', 'value', { maxAge: 0 })\n}\n")),(0,a.kt)("h3",{id:"cookiessetname-value--expires-timestamp-"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookies().set(name, value, { expires: timestamp })")),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"expires")," to any value in the past will immediately expire a cookie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/actions.js"',filename:'"app/actions.js"'},"'use server'\n\nimport { cookies } from 'next/headers'\n\nasync function create(data) {\n  const oneDay = 24 * 60 * 60 * 1000\n  cookies().set('name', 'value', { expires: Date.now() - oneDay })\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Good to know"),": You can only delete cookies that belong to the same domain from which ",(0,a.kt)("inlineCode",{parentName:"p"},".set()")," is called. Additionally, the code must be executed on the same protocol (HTTP or HTTPS) as the cookie you want to delete.")),(0,a.kt)("h2",{id:"version-history"},"Version History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cookies")," introduced.")))))}u.isMDXComponent=!0}}]);