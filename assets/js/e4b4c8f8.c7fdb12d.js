"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3645],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"NextResponse",description:"API Reference for NextResponse."},s=void 0,i={unversionedId:"app/api-reference/functions/next-response",id:"app/api-reference/functions/next-response",title:"NextResponse",description:"API Reference for NextResponse.",source:"@site/docs/02-app/02-api-reference/04-functions/next-response.mdx",sourceDirName:"02-app/02-api-reference/04-functions",slug:"/app/api-reference/functions/next-response",permalink:"/docs/app/api-reference/functions/next-response",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/04-functions/next-response.mdx",tags:[],version:"current",frontMatter:{title:"NextResponse",description:"API Reference for NextResponse."},sidebar:"nextJsSidebar",previous:{title:"NextRequest",permalink:"/docs/app/api-reference/functions/next-request"},next:{title:"notFound",permalink:"/docs/app/api-reference/functions/not-found"}},p={},l=[{value:"<code>cookies</code>",id:"cookies",level:2},{value:"<code>set(name, value)</code>",id:"setname-value",level:3},{value:"<code>get(name)</code>",id:"getname",level:3},{value:"<code>getAll()</code>",id:"getall",level:3},{value:"<code>delete(name)</code>",id:"deletename",level:3},{value:"<code>json()</code>",id:"json",level:2},{value:"<code>redirect()</code>",id:"redirect",level:2},{value:"<code>rewrite()</code>",id:"rewrite",level:2},{value:"<code>next()</code>",id:"next",level:2}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NextResponse extends the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/Response"},"Web Response API")," with additional convenience methods."),(0,o.kt)("h2",{id:"cookies"},(0,o.kt)("inlineCode",{parentName:"h2"},"cookies")),(0,o.kt)("p",null,"Read or mutate the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie"},(0,o.kt)("inlineCode",{parentName:"a"},"Set-Cookie"))," header of the response."),(0,o.kt)("h3",{id:"setname-value"},(0,o.kt)("inlineCode",{parentName:"h3"},"set(name, value)")),(0,o.kt)("p",null,"Given a name, set a cookie with the given value on the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Given incoming request /home\nlet response = NextResponse.next()\n// Set a cookie to hide the banner\nresponse.cookies.set('show-banner', 'false')\n// Response will have a `Set-Cookie:show-banner=false;path=/home` header\nreturn response\n")),(0,o.kt)("h3",{id:"getname"},(0,o.kt)("inlineCode",{parentName:"h3"},"get(name)")),(0,o.kt)("p",null,"Given a cookie name, return the value of the cookie. If the cookie is not found, ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," is returned. If multiple cookies are found, the first one is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Given incoming request /home\nlet response = NextResponse.next()\n// { name: 'show-banner', value: 'false', Path: '/home' }\nresponse.cookies.get('show-banner')\n")),(0,o.kt)("h3",{id:"getall"},(0,o.kt)("inlineCode",{parentName:"h3"},"getAll()")),(0,o.kt)("p",null,"Given a cookie name, return the values of the cookie. If no name is given, return all cookies on the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Given incoming request /home\nlet response = NextResponse.next()\n// [\n//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },\n//   { name: 'experiments', value: 'winter-launch', Path: '/home' },\n// ]\nresponse.cookies.getAll('experiments')\n// Alternatively, get all cookies for the response\nresponse.cookies.getAll()\n")),(0,o.kt)("h3",{id:"deletename"},(0,o.kt)("inlineCode",{parentName:"h3"},"delete(name)")),(0,o.kt)("p",null,"Given a cookie name, delete the cookie from the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Given incoming request /home\nlet response = NextResponse.next()\n// Returns true for deleted, false is nothing is deleted\nresponse.cookies.delete('experiments')\n")),(0,o.kt)("h2",{id:"json"},(0,o.kt)("inlineCode",{parentName:"h2"},"json()")),(0,o.kt)("p",null,"Produce a response with the given JSON body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="app/api/route.ts" switcher',filename:'"app/api/route.ts"',switcher:!0},"import { NextResponse } from 'next/server'\n\nexport async function GET(request: Request) {\n  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="app/api/route.js" switcher',filename:'"app/api/route.js"',switcher:!0},"import { NextResponse } from 'next/server'\n\nexport async function GET(request) {\n  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })\n}\n")),(0,o.kt)("h2",{id:"redirect"},(0,o.kt)("inlineCode",{parentName:"h2"},"redirect()")),(0,o.kt)("p",null,"Produce a response that redirects to a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URL"},"URL"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextResponse } from 'next/server'\n\nreturn NextResponse.redirect(new URL('/new', request.url))\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URL"},"URL")," can be created and modified before being used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NextResponse.redirect()")," method. For example, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"request.nextUrl")," property to get the current URL, and then modify it to redirect to a different URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextResponse } from 'next/server'\n\n// Given an incoming request...\nconst loginUrl = new URL('/login', request.url)\n// Add ?from=/incoming-url to the /login URL\nloginUrl.searchParams.set('from', request.nextUrl.pathname)\n// And redirect to the new URL\nreturn NextResponse.redirect(loginUrl)\n")),(0,o.kt)("h2",{id:"rewrite"},(0,o.kt)("inlineCode",{parentName:"h2"},"rewrite()")),(0,o.kt)("p",null,"Produce a response that rewrites (proxies) the given ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/API/URL"},"URL")," while preserving the original URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextResponse } from 'next/server'\n\n// Incoming request: /about, browser shows /about\n// Rewritten request: /proxy, browser shows /about\nreturn NextResponse.rewrite(new URL('/proxy', request.url))\n")),(0,o.kt)("h2",{id:"next"},(0,o.kt)("inlineCode",{parentName:"h2"},"next()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," method is useful for Middleware, as it allows you to return early and continue routing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextResponse } from 'next/server'\n\nreturn NextResponse.next()\n")),(0,o.kt)("p",null,"You can also forward ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," when producing the response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NextResponse } from 'next/server'\n\n// Given an incoming request...\nconst newHeaders = new Headers(request.headers)\n// Add a new header\nnewHeaders.set('x-version', '123')\n// And produce a response with the new headers\nreturn NextResponse.next({\n  request: {\n    // New request headers\n    headers: newHeaders,\n  },\n})\n")))}d.isMDXComponent=!0}}]);