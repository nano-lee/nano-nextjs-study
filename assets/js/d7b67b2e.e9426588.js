"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={title:"Font Module",sidebar_label:"Font",description:"Optimizing loading web fonts with the built-in `next/font` loaders."},o=void 0,r={unversionedId:"app/api-reference/components/font",id:"app/api-reference/components/font",title:"Font Module",description:"Optimizing loading web fonts with the built-in `next/font` loaders.",source:"@site/docs/02-app/02-api-reference/01-components/font.mdx",sourceDirName:"02-app/02-api-reference/01-components",slug:"/app/api-reference/components/font",permalink:"/docs/app/api-reference/components/font",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-app/02-api-reference/01-components/font.mdx",tags:[],version:"current",frontMatter:{title:"Font Module",sidebar_label:"Font",description:"Optimizing loading web fonts with the built-in `next/font` loaders."},sidebar:"nextJsSidebar",previous:{title:"Components",permalink:"/docs/app/api-reference/components/"},next:{title:"<Image>",permalink:"/docs/app/api-reference/components/image"}},p={},s=[{value:"Font Function Arguments",id:"font-function-arguments",level:3},{value:"<code>src</code>",id:"src",level:3},{value:"<code>weight</code>",id:"weight",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>subsets</code>",id:"subsets",level:3},{value:"<code>axes</code>",id:"axes",level:3},{value:"<code>display</code>",id:"display",level:3},{value:"<code>preload</code>",id:"preload",level:3},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>adjustFontFallback</code>",id:"adjustfontfallback",level:3},{value:"<code>variable</code>",id:"variable",level:3},{value:"<code>declarations</code>",id:"declarations",level:3},{value:"Applying Styles",id:"applying-styles",level:2},{value:"<code>className</code>",id:"classname",level:3},{value:"<code>style</code>",id:"style-1",level:3},{value:"CSS Variables",id:"css-variables",level:3},{value:"Using a font definitions file",id:"using-a-font-definitions-file",level:2},{value:"Version Changes",id:"version-changes",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},m=d("Cross"),u=d("Check"),k={toc:s},f="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"{/",(0,l.kt)("em",{parentName:"p"}," The content of this doc is shared between the app and pages router. You can use the  component to add content that is specific to the Pages Router. Any shared content should not be wrapped in a component. "),"/}"),(0,l.kt)("p",null,"This API reference will help you understand how to use ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#google-fonts"},(0,l.kt)("inlineCode",{parentName:"a"},"next/font/google"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#local-fonts"},(0,l.kt)("inlineCode",{parentName:"a"},"next/font/local")),". For features and usage, please see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts"},"Optimizing Fonts")," page."),(0,l.kt)("h3",{id:"font-function-arguments"},"Font Function Arguments"),(0,l.kt)("p",null,"For usage, review ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#google-fonts"},"Google Fonts")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#local-fonts"},"Local Fonts"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"font/google")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"font/local")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#src"},(0,l.kt)("inlineCode",{parentName:"a"},"src"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{size:18,mdxType:"Cross"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"String or Array of Objects"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#weight"},(0,l.kt)("inlineCode",{parentName:"a"},"weight"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"String or Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Required/Optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#style"},(0,l.kt)("inlineCode",{parentName:"a"},"style"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"String or Array"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subsets"},(0,l.kt)("inlineCode",{parentName:"a"},"subsets"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{size:18,mdxType:"Cross"})),(0,l.kt)("td",{parentName:"tr",align:null},"Array of Strings"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#axes"},(0,l.kt)("inlineCode",{parentName:"a"},"axes"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{size:18,mdxType:"Cross"})),(0,l.kt)("td",{parentName:"tr",align:null},"Array of Strings"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#display"},(0,l.kt)("inlineCode",{parentName:"a"},"display"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#preload"},(0,l.kt)("inlineCode",{parentName:"a"},"preload"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fallback"},(0,l.kt)("inlineCode",{parentName:"a"},"fallback"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"Array of Strings"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#adjustfontfallback"},(0,l.kt)("inlineCode",{parentName:"a"},"adjustFontFallback"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean or String"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#variable"},(0,l.kt)("inlineCode",{parentName:"a"},"variable"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#declarations"},(0,l.kt)("inlineCode",{parentName:"a"},"declarations"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{size:18,mdxType:"Cross"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(u,{size:18,mdxType:"Check"})),(0,l.kt)("td",{parentName:"tr",align:null},"Array of Objects"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"src"},(0,l.kt)("inlineCode",{parentName:"h3"},"src")),(0,l.kt)("p",null,"The path of the font file as a string or an array of objects (with type ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<{path: string, weight?: string, style?: string}>"),") relative to the directory where the font loader function is called."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Required")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src:'./fonts/my-font.woff2'")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"my-font.woff2")," is placed in a directory named ",(0,l.kt)("inlineCode",{parentName:"li"},"fonts")," inside the ",(0,l.kt)("inlineCode",{parentName:"li"},"app")," directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src:[{path: './inter/Inter-Thin.ttf', weight: '100',},{path: './inter/Inter-Regular.ttf',weight: '400',},{path: './inter/Inter-Bold-Italic.ttf', weight: '700',style: 'italic',},]")),(0,l.kt)("li",{parentName:"ul"},"if the font loader function is called in ",(0,l.kt)("inlineCode",{parentName:"li"},"app/page.tsx")," using ",(0,l.kt)("inlineCode",{parentName:"li"},"src:'../styles/fonts/my-font.ttf'"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"my-font.ttf")," is placed in ",(0,l.kt)("inlineCode",{parentName:"li"},"styles/fonts")," at the root of the project")),(0,l.kt)("h3",{id:"weight"},(0,l.kt)("inlineCode",{parentName:"h3"},"weight")),(0,l.kt)("p",null,"The font ",(0,l.kt)("a",{parentName:"p",href:"https://fonts.google.com/knowledge/glossary/weight"},(0,l.kt)("inlineCode",{parentName:"a"},"weight"))," with the following possibilities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A string with possible values of the weights available for the specific font or a range of values if it's a ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts"},"variable")," font"),(0,l.kt)("li",{parentName:"ul"},"An array of weight values if the font is not a ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts"},"variable google font"),". It applies to ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google")," only.")),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Required if the font being used is ",(0,l.kt)("strong",{parentName:"li"},"not")," ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts"},"variable"))),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weight: '400'"),": A string for a single weight value - for the font ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/specimen/Inter?query=inter"},(0,l.kt)("inlineCode",{parentName:"a"},"Inter")),", the possible values are ",(0,l.kt)("inlineCode",{parentName:"li"},"'100'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'200'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'300'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'400'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'500'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'600'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'700'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'800'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'900'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"'variable'")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"'variable'")," is the default)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weight: '100 900'"),": A string for the range between ",(0,l.kt)("inlineCode",{parentName:"li"},"100")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"900")," for a variable font"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weight: ['100','400','900']"),": An array of 3 possible values for a non variable font")),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("p",null,"The font ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/CSS/font-style"},(0,l.kt)("inlineCode",{parentName:"a"},"style"))," with the following possibilities:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A string ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/CSS/font-style#values"},"value")," with default value of ",(0,l.kt)("inlineCode",{parentName:"li"},"'normal'")),(0,l.kt)("li",{parentName:"ul"},"An array of style values if the font is not a ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts"},"variable google font"),". It applies to ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google")," only.")),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"style: 'italic'"),": A string - it can be ",(0,l.kt)("inlineCode",{parentName:"li"},"normal")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"italic")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"style: 'oblique'"),": A string - it can take any value for ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/local")," but is expected to come from ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Web/CSS/font-style"},"standard font styles")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"style: ['italic','normal']"),": An array of 2 values for ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google")," - the values are from ",(0,l.kt)("inlineCode",{parentName:"li"},"normal")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"italic"))),(0,l.kt)("h3",{id:"subsets"},(0,l.kt)("inlineCode",{parentName:"h3"},"subsets")),(0,l.kt)("p",null,"The font ",(0,l.kt)("a",{parentName:"p",href:"https://fonts.google.com/knowledge/glossary/subsetting"},(0,l.kt)("inlineCode",{parentName:"a"},"subsets"))," defined by an array of string values with the names of each subset you would like to be ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#specifying-a-subset"},"preloaded"),". Fonts specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"subsets")," will have a link preload tag injected into the head when the ",(0,l.kt)("a",{parentName:"p",href:"#preload"},(0,l.kt)("inlineCode",{parentName:"a"},"preload"))," option is true, which is the default."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"subsets: ['latin']"),": An array with the subset ",(0,l.kt)("inlineCode",{parentName:"li"},"latin"))),(0,l.kt)("p",null,"You can find a list of all subsets on the Google Fonts page for your font."),(0,l.kt)("h3",{id:"axes"},(0,l.kt)("inlineCode",{parentName:"h3"},"axes")),(0,l.kt)("p",null,"Some variable fonts have extra ",(0,l.kt)("inlineCode",{parentName:"p"},"axes")," that can be included. By default, only the font weight is included to keep the file size down. The possible values of ",(0,l.kt)("inlineCode",{parentName:"p"},"axes")," depend on the specific font."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"axes: ['slnt']"),": An array with value ",(0,l.kt)("inlineCode",{parentName:"li"},"slnt")," for the ",(0,l.kt)("inlineCode",{parentName:"li"},"Inter")," variable font which has ",(0,l.kt)("inlineCode",{parentName:"li"},"slnt")," as additional ",(0,l.kt)("inlineCode",{parentName:"li"},"axes")," as shown ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts?vfquery=inter#font-families"},"here"),". You can find the possible ",(0,l.kt)("inlineCode",{parentName:"li"},"axes")," values for your font by using the filter on the ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/variablefonts#font-families"},"Google variable fonts page")," and looking for axes other than ",(0,l.kt)("inlineCode",{parentName:"li"},"wght"))),(0,l.kt)("h3",{id:"display"},(0,l.kt)("inlineCode",{parentName:"h3"},"display")),(0,l.kt)("p",null,"The font ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display"},(0,l.kt)("inlineCode",{parentName:"a"},"display"))," with possible string ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display#values"},"values")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"'auto'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'block'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'swap'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'fallback'")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"'optional'")," with default value of ",(0,l.kt)("inlineCode",{parentName:"p"},"'swap'"),"."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"display: 'optional'"),": A string assigned to the ",(0,l.kt)("inlineCode",{parentName:"li"},"optional")," value")),(0,l.kt)("h3",{id:"preload"},(0,l.kt)("inlineCode",{parentName:"h3"},"preload")),(0,l.kt)("p",null,"A boolean value that specifies whether the font should be ",(0,l.kt)("a",{parentName:"p",href:"/docs/app/building-your-application/optimizing/fonts#preloading"},"preloaded")," or not. The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"preload: false"))),(0,l.kt)("h3",{id:"fallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,l.kt)("p",null,"The fallback font to use if the font cannot be loaded. An array of strings of fallback fonts with no default."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fallback: ['system-ui', 'arial']"),": An array setting the fallback fonts to ",(0,l.kt)("inlineCode",{parentName:"li"},"system-ui")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"arial"))),(0,l.kt)("h3",{id:"adjustfontfallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"adjustFontFallback")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google"),": A boolean value that sets whether an automatic fallback font should be used to reduce ",(0,l.kt)("a",{parentName:"li",href:"https://web.dev/cls/"},"Cumulative Layout Shift"),". The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/local"),": A string or boolean ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," value that sets whether an automatic fallback font should be used to reduce ",(0,l.kt)("a",{parentName:"li",href:"https://web.dev/cls/"},"Cumulative Layout Shift"),". The possible values are ",(0,l.kt)("inlineCode",{parentName:"li"},"'Arial'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'Times New Roman'")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"'Arial'"),".")),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"adjustFontFallback: false"),": for ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/google")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"adjustFontFallback: 'Times New Roman'"),": for ",(0,l.kt)("inlineCode",{parentName:"li"},"next/font/local"))),(0,l.kt)("h3",{id:"variable"},(0,l.kt)("inlineCode",{parentName:"h3"},"variable")),(0,l.kt)("p",null,"A string value to define the CSS variable name to be used if the style is applied with the ",(0,l.kt)("a",{parentName:"p",href:"#css-variables"},"CSS variable method"),"."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/google")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"variable: '--my-font'"),": The CSS variable ",(0,l.kt)("inlineCode",{parentName:"li"},"--my-font")," is declared")),(0,l.kt)("h3",{id:"declarations"},(0,l.kt)("inlineCode",{parentName:"h3"},"declarations")),(0,l.kt)("p",null,"An array of font face ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/CSS/@font-face#descriptors"},"descriptor")," key-value pairs that define the generated ",(0,l.kt)("inlineCode",{parentName:"p"},"@font-face")," further."),(0,l.kt)("p",null,"Used in ",(0,l.kt)("inlineCode",{parentName:"p"},"next/font/local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optional")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"declarations: [{ prop: 'ascent-override', value: '90%' }]"))),(0,l.kt)("h2",{id:"applying-styles"},"Applying Styles"),(0,l.kt)("p",null,"You can apply the font styles in three ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#classname"},(0,l.kt)("inlineCode",{parentName:"a"},"className"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#style-1"},(0,l.kt)("inlineCode",{parentName:"a"},"style"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css-variables"},"CSS Variables"))),(0,l.kt)("h3",{id:"classname"},(0,l.kt)("inlineCode",{parentName:"h3"},"className")),(0,l.kt)("p",null,"Returns a read-only CSS ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," for the loaded font to be passed to an HTML element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<p className={inter.className}>Hello, Next.js!</p>\n")),(0,l.kt)("h3",{id:"style-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("p",null,"Returns a read-only CSS ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," object for the loaded font to be passed to an HTML element, including ",(0,l.kt)("inlineCode",{parentName:"p"},"style.fontFamily")," to access the font family name and fallback fonts."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<p style={inter.style}>Hello World</p>\n")),(0,l.kt)("h3",{id:"css-variables"},"CSS Variables"),(0,l.kt)("p",null,"If you would like to set your styles in an external style sheet and specify additional options there, use the CSS variable method."),(0,l.kt)("p",null,"In addition to importing the font, also import the CSS file where the CSS variable is defined and set the variable option of the font loader object as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import { Inter } from "next/font/google";\nimport styles from "../styles/component.module.css";\n\nconst inter = Inter({\n    variable: "--font-inter",\n});\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'import { Inter } from "next/font/google";\nimport styles from "../styles/component.module.css";\n\nconst inter = Inter({\n    variable: "--font-inter",\n});\n')),(0,l.kt)("p",null,"To use the font, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," of the parent container of the text you would like to style to the font loader's ",(0,l.kt)("inlineCode",{parentName:"p"},"variable")," value and the ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," of the text to the ",(0,l.kt)("inlineCode",{parentName:"p"},"styles")," property from the external CSS file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},"<main className={inter.variable}>\n    <p className={styles.text}>Hello World</p>\n</main>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},"<main className={inter.variable}>\n    <p className={styles.text}>Hello World</p>\n</main>\n")),(0,l.kt)("p",null,"Define the ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," selector class in the ",(0,l.kt)("inlineCode",{parentName:"p"},"component.module.css")," CSS file as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'filename="styles/component.module.css"',filename:'"styles/component.module.css"'},".text {\n    font-family: var(--font-inter);\n    font-weight: 200;\n    font-style: italic;\n}\n")),(0,l.kt)("p",null,"In the example above, the text ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World")," is styled using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Inter")," font and the generated font fallback with ",(0,l.kt)("inlineCode",{parentName:"p"},"font-weight: 200")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"font-style: italic"),"."),(0,l.kt)("h2",{id:"using-a-font-definitions-file"},"Using a font definitions file"),(0,l.kt)("p",null,"Every time you call the ",(0,l.kt)("inlineCode",{parentName:"p"},"localFont")," or Google font function, that font will be hosted as one instance in your application. Therefore, if you need to use the same font in multiple places, you should load it in one place and import the related font object where you need it. This is done using a font definitions file."),(0,l.kt)("p",null,"For example, create a ",(0,l.kt)("inlineCode",{parentName:"p"},"fonts.ts")," file in a ",(0,l.kt)("inlineCode",{parentName:"p"},"styles")," folder at the root of your app directory."),(0,l.kt)("p",null,"Then, specify your font definitions as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="styles/fonts.ts" switcher',filename:'"styles/fonts.ts"',switcher:!0},'import { Inter, Lora, Source_Sans_3 } from "next/font/google";\nimport localFont from "next/font/local";\n\n// define your variable fonts\nconst inter = Inter();\nconst lora = Lora();\n// define 2 weights of a non-variable font\nconst sourceCodePro400 = Source_Sans_3({ weight: "400" });\nconst sourceCodePro700 = Source_Sans_3({ weight: "700" });\n// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder\nconst greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });\n\nexport { inter, lora, sourceCodePro400, sourceCodePro700, greatVibes };\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'filename="styles/fonts.js" switcher',filename:'"styles/fonts.js"',switcher:!0},'import { Inter, Lora, Source_Sans_3 } from "next/font/google";\nimport localFont from "next/font/local";\n\n// define your variable fonts\nconst inter = Inter();\nconst lora = Lora();\n// define 2 weights of a non-variable font\nconst sourceCodePro400 = Source_Sans_3({ weight: "400" });\nconst sourceCodePro700 = Source_Sans_3({ weight: "700" });\n// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder\nconst greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });\n\nexport { inter, lora, sourceCodePro400, sourceCodePro700, greatVibes };\n')),(0,l.kt)("p",null,"You can now use these definitions in your code as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/page.tsx" switcher',filename:'"app/page.tsx"',switcher:!0},'import { inter, lora, sourceCodePro700, greatVibes } from "../styles/fonts";\n\nexport default function Page() {\n    return (\n        <div>\n            <p className={inter.className}>Hello world using Inter font</p>\n            <p style={lora.style}>Hello world using Lora font</p>\n            <p className={sourceCodePro700.className}>\n                Hello world using Source_Sans_3 font with weight 700\n            </p>\n            <p className={greatVibes.className}>My title in Great Vibes font</p>\n        </div>\n    );\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/page.js" switcher',filename:'"app/page.js"',switcher:!0},'import { inter, lora, sourceCodePro700, greatVibes } from "../styles/fonts";\n\nexport default function Page() {\n    return (\n        <div>\n            <p className={inter.className}>Hello world using Inter font</p>\n            <p style={lora.style}>Hello world using Lora font</p>\n            <p className={sourceCodePro700.className}>\n                Hello world using Source_Sans_3 font with weight 700\n            </p>\n            <p className={greatVibes.className}>My title in Great Vibes font</p>\n        </div>\n    );\n}\n')),(0,l.kt)("p",null,"To make it easier to access the font definitions in your code, you can define a path alias in your ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," files as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'filename="tsconfig.json"',filename:'"tsconfig.json"'},'{\n    "compilerOptions": {\n        "paths": {\n            "@/fonts": ["./styles/fonts"]\n        }\n    }\n}\n')),(0,l.kt)("p",null,"You can now import any font definition as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="app/about/page.tsx" switcher',filename:'"app/about/page.tsx"',switcher:!0},'import { greatVibes, sourceCodePro400 } from "@/fonts";\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'filename="app/about/page.js" switcher',filename:'"app/about/page.js"',switcher:!0},'import { greatVibes, sourceCodePro400 } from "@/fonts";\n')),(0,l.kt)("h2",{id:"version-changes"},"Version Changes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v13.2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@next/font")," renamed to ",(0,l.kt)("inlineCode",{parentName:"td"},"next/font"),". Installation no longer required.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v13.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@next/font")," was added.")))))}c.isMDXComponent=!0}}]);