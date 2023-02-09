"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Implicitly Typed Local Variables",l={unversionedId:"Guidelines/implicity-typed-local-variables",id:"Guidelines/implicity-typed-local-variables",title:"Implicitly Typed Local Variables",description:"Use implicit typing for local variables when the type of the variable is obvious from the right side of the assignment, or when the precise type is unimportant.",source:"@site/docs-api/Guidelines/5_implicity-typed-local-variables.md",sourceDirName:"Guidelines",slug:"/Guidelines/implicity-typed-local-variables",permalink:"/docs-api/Guidelines/implicity-typed-local-variables",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/docs-api/Guidelines/strings"},next:{title:"Arrays & Lists",permalink:"/docs-api/Guidelines/arrays_and_lists"}},s={},p=[],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"implicitly-typed-local-variables"},"Implicitly Typed Local Variables"),(0,a.kt)("p",null,"Use implicit typing for local variables when the type of the variable is obvious from the right side of the assignment, or when the precise type is unimportant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var var1 = "This is clearly a string.";\nvar var2 = 13;\n')),(0,a.kt)("p",null,"Don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," when the type is not apparent from the right side of the assignment. Don't assume the type is clear from a method name. A variable type is considered clear if it has an explicit cast."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"int var3 = Convert.ToInt32(24.07);\nstring var4 = Starpelly.RGB2Hex(new Color(1, 1, 1, 1));\n\nvar var5 = (int)Starpelly.Mathp.Normalize(0, 1, 1);\nstring var6 = Mathf.Clamp01(0.8f).ToString();\n")),(0,a.kt)("p",null,"Do not use a variable name to specify the type of the variable. In every scenario you have to do this, there is a way to avoid it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// Bad!!!, also misleading.\nvar inputInt = "hello!";\n')))}y.isMDXComponent=!0}}]);