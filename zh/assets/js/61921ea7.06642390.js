"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[76728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51982:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={title:"\u4fdd\u62a4 API",keywords:["API \u7f51\u5173","Apache APISIX","\u53d1\u5e03\u8def\u7531","\u521b\u5efa\u670d\u52a1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002"},l=void 0,p={unversionedId:"tutorials/protect-api",id:"version-3.3/tutorials/protect-api",isDocsHomePage:!1,title:"\u4fdd\u62a4 API",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/tutorials/protect-api.md",sourceDirName:"tutorials",slug:"/tutorials/protect-api",permalink:"/zh/docs/apisix/tutorials/protect-api",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/tutorials/protect-api.md",tags:[],version:"3.3",frontMatter:{title:"\u4fdd\u62a4 API",keywords:["API \u7f51\u5173","Apache APISIX","\u53d1\u5e03\u8def\u7531","\u521b\u5efa\u670d\u52a1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002"},sidebar:"version-3.3/docs",previous:{title:"\u53d1\u5e03 API",permalink:"/zh/docs/apisix/tutorials/expose-api"},next:{title:"\u76d1\u63a7 API",permalink:"/zh/docs/apisix/tutorials/observe-your-api"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",children:[{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]}]},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u4fdd\u62a4 API",id:"\u4fdd\u62a4-api",children:[]},{value:"\u6d41\u91cf\u63a7\u5236\u63d2\u4ef6",id:"\u6d41\u91cf\u63a7\u5236\u63d2\u4ef6",children:[]},{value:"\u66f4\u591a\u64cd\u4f5c",id:"\u66f4\u591a\u64cd\u4f5c",children:[]}],c={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4e3a\u4f60\u4ecb\u7ecd\u4f7f\u7528\u9650\u6d41\u9650\u901f\u548c\u5b89\u5168\u63d2\u4ef6\u4fdd\u62a4\u4f60\u7684 API\u3002"),(0,a.kt)("h2",{id:"\u6982\u5ff5\u4ecb\u7ecd"},"\u6982\u5ff5\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin"},"Plugin")," \u4e5f\u79f0\u4e4b\u4e3a\u63d2\u4ef6\uff0c\u5b83\u662f\u6269\u5c55 APISIX \u5e94\u7528\u5c42\u80fd\u529b\u7684\u5173\u952e\u673a\u5236\uff0c\u4e5f\u662f\u5728\u4f7f\u7528 APISIX \u65f6\u6700\u5e38\u7528\u7684\u8d44\u6e90\u5bf9\u8c61\u3002\u63d2\u4ef6\u4e3b\u8981\u662f\u5728 HTTP \u8bf7\u6c42\u6216\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u3001\u9488\u5bf9\u8bf7\u6c42\u7684\u4e2a\u6027\u5316\u7b56\u7565\u3002\u63d2\u4ef6\u53ef\u4ee5\u4e0e\u8def\u7531\u3001\u670d\u52a1\u6216\u6d88\u8d39\u8005\u7ed1\u5b9a\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/route"},"\u8def\u7531"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/service"},"\u670d\u52a1"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin-config"},"\u63d2\u4ef6\u914d\u7f6e")," \u6216\u6d88\u8d39\u8005\u90fd\u7ed1\u5b9a\u4e86\u76f8\u540c\u7684\u63d2\u4ef6\uff0c\u5219\u53ea\u6709\u4e00\u4efd\u63d2\u4ef6\u914d\u7f6e\u4f1a\u751f\u6548\uff0c\u63d2\u4ef6\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u7531\u9ad8\u5230\u4f4e\u987a\u5e8f\u662f\uff1a\u6d88\u8d39\u8005 > \u8def\u7531 > \u63d2\u4ef6\u914d\u7f6e > \u670d\u52a1\u3002\u540c\u65f6\u5728\u63d2\u4ef6\u6267\u884c\u8fc7\u7a0b\u4e2d\u4e5f\u4f1a\u6d89\u53ca 6 \u4e2a\u9636\u6bb5\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"access"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"header_filter"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"body_filter")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"log"),"\u3002"))),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u8be5\u6559\u7a0b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/tutorials/expose-api"},"\u516c\u5f00\u670d\u52a1"),"\u3002"),(0,a.kt)("h2",{id:"\u4fdd\u62a4-api"},"\u4fdd\u62a4 API"),(0,a.kt)("p",null,"\u5728\u5f88\u591a\u65f6\u5019\uff0c\u6211\u4eec\u7684 API \u5e76\u4e0d\u662f\u5904\u4e8e\u4e00\u4e2a\u975e\u5e38\u5b89\u5168\u7684\u72b6\u6001\uff0c\u5b83\u968f\u65f6\u4f1a\u6536\u5230\u4e0d\u6b63\u5e38\u7684\u8bbf\u95ee\uff0c\u4e00\u65e6\u8bbf\u95ee\u6d41\u91cf\u7a81\u589e\uff0c\u53ef\u80fd\u5c31\u4f1a\u5bfc\u81f4\u4f60\u7684 API \u53d1\u751f\u6545\u969c\uff0c\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u635f\u5931\u3002\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u901f\u7387\u9650\u5236\u4fdd\u62a4\u4f60\u7684 API \u670d\u52a1\uff0c\u9650\u5236\u975e\u6b63\u5e38\u7684\u8bbf\u95ee\u8bf7\u6c42\uff0c\u4fdd\u969c API \u670d\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002\u5bf9\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9650\u5236\u8bf7\u6c42\u901f\u7387\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u9650\u5236\u5355\u4f4d\u65f6\u95f4\u5185\u7684\u8bf7\u6c42\u6570\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5ef6\u8fdf\u8bf7\u6c42\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u62d2\u7edd\u5ba2\u6237\u7aef\u8bf7\u6c42\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u9650\u5236\u54cd\u5e94\u6570\u636e\u7684\u901f\u7387\u3002")),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u4e0a\u8ff0\u529f\u80fd\uff0cAPISIX \u63d0\u4f9b\u4e86\u591a\u4e2a\u9650\u6d41\u9650\u901f\u7684\u63d2\u4ef6\uff0c\u5305\u62ec ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/limit-conn"},"limit-conn"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/limit-count"},"limit-count")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/limit-req"},"limit-req"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limit-conn")," \u63d2\u4ef6\u4e3b\u8981\u7528\u4e8e\u9650\u5236\u5ba2\u6237\u7aef\u5bf9\u670d\u52a1\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limit-req")," \u63d2\u4ef6\u4f7f\u7528\u6f0f\u6876\u7b97\u6cd5\u9650\u5236\u5bf9\u7528\u6237\u670d\u52a1\u7684\u8bf7\u6c42\u901f\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"limit-count")," \u63d2\u4ef6\u4e3b\u8981\u7528\u4e8e\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\uff0c\u9650\u5236\u6bcf\u4e2a\u5ba2\u6237\u7aef\u603b\u8bf7\u6c42\u4e2a\u6570\u3002")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u4e3a\u4f60\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u9650\u6d41\u9650\u901f\u63d2\u4ef6\u4fdd\u62a4\u4f60\u7684 API\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8def\u7531\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n  "upstream_id": "1"\n}\'\n\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u4e2d\uff0c\u4f7f\u7528\u4e86",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/tutorials/expose-api"},"\u516c\u5f00\u670d\u52a1"),"\u4e2d\u521b\u5efa\u7684\u4e0a\u6e38\u521b\u5efa\u4e86\u4e00\u4e2a ID \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u7684\u8def\u7531\uff0c \uff0c\u5e76\u4e14\u542f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u3002\u8be5\u63d2\u4ef6\u4ec5\u5141\u8bb8\u5ba2\u6237\u7aef\u5728 60 \u79d2\u5185\uff0c\u8bbf\u95ee\u4e0a\u6e38\u670d\u52a1 2 \u6b21\uff0c\u8d85\u8fc7\u4e24\u6b21\uff0c\u5219\u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"503")," \u9519\u8bef\u7801\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u63d2\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\ncurl http://127.0.0.1:9080/index.html\n\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u547d\u4ee4\u8fde\u7eed\u8bbf\u95ee\u4e09\u6b21\u540e\uff0c\u5219\u4f1a\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u4e0a\u8ff0\u7ed3\u679c\uff0c\u5219\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u5df2\u7ecf\u914d\u7f6e\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"\u6d41\u91cf\u63a7\u5236\u63d2\u4ef6"},"\u6d41\u91cf\u63a7\u5236\u63d2\u4ef6"),(0,a.kt)("p",null,"APISIX \u9664\u4e86\u63d0\u4f9b\u9650\u6d41\u9650\u901f\u7684\u63d2\u4ef6\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5f88\u591a\u5176\u4ed6\u7684\u5173\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"traffic")," \u63d2\u4ef6\u6765\u6ee1\u8db3\u5b9e\u9645\u573a\u666f\u7684\u9700\u6c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/proxy-cache"},"proxy-cache"),"\uff1a\u8be5\u63d2\u4ef6\u63d0\u4f9b\u7f13\u5b58\u540e\u7aef\u54cd\u5e94\u6570\u636e\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u548c\u5176\u4ed6\u63d2\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\u8be5\u63d2\u4ef6\u652f\u6301\u57fa\u4e8e\u78c1\u76d8\u548c\u5185\u5b58\u7684\u7f13\u5b58\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/request-validation"},"request-validation"),"\uff1a\u8be5\u63d2\u4ef6\u7528\u4e8e\u63d0\u524d\u9a8c\u8bc1\u5411\u4e0a\u6e38\u670d\u52a1\u8f6c\u53d1\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/proxy-mirror"},"proxy-mirror"),"\uff1a\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u955c\u50cf\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u80fd\u529b\u3002\u6d41\u91cf\u955c\u50cf\u662f\u5c06\u7ebf\u4e0a\u771f\u5b9e\u6d41\u91cf\u62f7\u8d1d\u5230\u955c\u50cf\u670d\u52a1\u4e2d\uff0c\u4ee5\u4fbf\u5728\u4e0d\u5f71\u54cd\u7ebf\u4e0a\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u7ebf\u4e0a\u6d41\u91cf\u6216\u8bf7\u6c42\u5185\u5bb9\u8fdb\u884c\u5177\u4f53\u7684\u5206\u6790\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/api-breaker"},"api-breaker"),"\uff1a\u8be5\u63d2\u4ef6\u5b9e\u73b0\u4e86 API \u7194\u65ad\u529f\u80fd\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/traffic-split"},"traffic-split"),"\uff1a\u8be5\u63d2\u4ef6\u4f7f\u7528\u6237\u53ef\u4ee5\u9010\u6b65\u5f15\u5bfc\u5404\u4e2a\u4e0a\u6e38\u4e4b\u95f4\u7684\u6d41\u91cf\u767e\u5206\u6bd4\u3002\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u63d2\u4ef6\u5b9e\u73b0\u84dd\u7eff\u53d1\u5e03\uff0c\u7070\u5ea6\u53d1\u5e03\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/request-id"},"request-id"),"\uff1a\u8be5\u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"unique")," ID \u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/proxy-control"},"proxy-control"),"\uff1a\u8be5\u63d2\u4ef6\u80fd\u591f\u52a8\u6001\u5730\u63a7\u5236 NGINX \u4ee3\u7406\u7684\u76f8\u5173\u884c\u4e3a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/client-control"},"client-control"),"\uff1a\u8be5\u63d2\u4ef6\u80fd\u591f\u901a\u8fc7\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8bf7\u6c42\u4f53\u5927\u5c0f\u7684\u4e0a\u9650\u6765\u52a8\u6001\u5730\u63a7\u5236 NGINX \u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002")),(0,a.kt)("h2",{id:"\u66f4\u591a\u64cd\u4f5c"},"\u66f4\u591a\u64cd\u4f5c"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/tutorials/observe-your-api"},"\u76d1\u63a7 API")," \u6587\u6863\uff0c\u5bf9 APISIX \u8fdb\u884c\u76d1\u63a7\uff0c\u65e5\u5fd7\u91c7\u96c6\uff0c\u94fe\u8def\u8ffd\u8e2a\u7b49\u3002"))}s.isMDXComponent=!0}}]);