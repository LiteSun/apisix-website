"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3038],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"Apache APISIX \u96c6\u6210\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b",authors:[{name:"\u674e\u5955\u6d69",title:"Author",url:"https://github.com/Fabriceli",image_url:"https://github.com/Fabriceli.png"}],keywords:["API Gateway","Consul","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6ce8\u518c"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u652f\u6301\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u3002\u672c\u6587\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u53ca Consul \u7684\u76f8\u5173\u539f\u7406\u3002",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/HashiCorp%20Consul.png"},i=void 0,c={permalink:"/zh/blog/2023/01/18/consul-with-apisix",source:"@site/blog/2023/01/18/consul-with-apisix.md",title:"Apache APISIX \u96c6\u6210\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u652f\u6301\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u3002\u672c\u6587\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u53ca Consul \u7684\u76f8\u5173\u539f\u7406\u3002",date:"2023-01-18T00:00:00.000Z",formattedDate:"2023\u5e741\u670818\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:5.58,truncated:!0,authors:[{name:"\u674e\u5955\u6d69",title:"Author",url:"https://github.com/Fabriceli",image_url:"https://github.com/Fabriceli.png",imageURL:"https://github.com/Fabriceli.png"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (1.2 - 1.15)",permalink:"/zh/blog/2023/01/19/weekly-report-0115"},nextItem:{title:"\u670d\u52a1\u7f51\u683c\u9886\u57df\u7684\u767e\u82b1\u9f50\u653e\uff0c\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u66f4\u4f18\u89e3\uff1f",permalink:"/zh/blog/2023/01/18/what-is-service-mesh"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX \u652f\u6301\u539f\u751f Consul \u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u3002\u672c\u6587\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u53ca Consul \u7684\u76f8\u5173\u539f\u7406\u3002")))}u.isMDXComponent=!0}}]);