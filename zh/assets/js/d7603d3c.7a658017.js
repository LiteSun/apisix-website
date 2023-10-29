"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96132],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},44137:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Consumer",keywords:["APISIX","API \u7f51\u5173","\u6d88\u8d39\u8005","Consumer"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Consumer\u3002"},i=void 0,l={unversionedId:"terminology/consumer",id:"version-3.3/terminology/consumer",isDocsHomePage:!1,title:"Consumer",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Consumer\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/terminology/consumer.md",sourceDirName:"terminology",slug:"/terminology/consumer",permalink:"/zh/docs/apisix/terminology/consumer",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/terminology/consumer.md",tags:[],version:"3.3",frontMatter:{title:"Consumer",keywords:["APISIX","API \u7f51\u5173","\u6d88\u8d39\u8005","Consumer"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Consumer\u3002"},sidebar:"version-3.3/docs",previous:{title:"API Gateway",permalink:"/zh/docs/apisix/terminology/api-gateway"},next:{title:"Consumer Groups",permalink:"/zh/docs/apisix/terminology/consumer-group"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",children:[]},{value:"\u8bc6\u522b\u6d88\u8d39\u8005",id:"\u8bc6\u522b\u6d88\u8d39\u8005",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[]}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"Consumer \u662f\u67d0\u7c7b\u670d\u52a1\u7684\u6d88\u8d39\u8005\uff0c\u9700\u8981\u4e0e\u7528\u6237\u8ba4\u8bc1\u914d\u5408\u624d\u53ef\u4ee5\u4f7f\u7528\u3002\u5f53\u4e0d\u540c\u7684\u6d88\u8d39\u8005\u8bf7\u6c42\u540c\u4e00\u4e2a API \u65f6\uff0cAPISIX \u4f1a\u6839\u636e\u5f53\u524d\u8bf7\u6c42\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5bf9\u5e94\u4e0d\u540c\u7684 Plugin \u6216 Upstream \u914d\u7f6e\u3002\u5982\u679c ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/route"},"Route"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/service"},"Service"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/consumer"},"Consumer")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin-config"},"Plugin Config")," \u90fd\u7ed1\u5b9a\u4e86\u76f8\u540c\u7684\u63d2\u4ef6\uff0c\u53ea\u6709\u6d88\u8d39\u8005\u7684\u63d2\u4ef6\u914d\u7f6e\u4f1a\u751f\u6548\u3002\u63d2\u4ef6\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u7531\u9ad8\u5230\u4f4e\u7684\u987a\u5e8f\u662f\uff1aConsumer > Route > Plugin Config > Service\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e API \u7f51\u5173\u800c\u8a00\uff0c\u4e00\u822c\u60c5\u51b5\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u57df\u540d\u3001\u5ba2\u6237\u7aef IP \u5730\u5740\u7b49\u5b57\u6bb5\u8bc6\u522b\u5230\u67d0\u7c7b\u8bf7\u6c42\u65b9\uff0c\u7136\u540e\u8fdb\u884c\u63d2\u4ef6\u8fc7\u6ee4\u5e76\u8f6c\u53d1\u8bf7\u6c42\u5230\u6307\u5b9a\u4e0a\u6e38\u3002\u4f46\u6709\u65f6\u5019\u8be5\u65b9\u5f0f\u8fbe\u4e0d\u5230\u7528\u6237\u9700\u6c42\uff0c\u56e0\u6b64 APISIX \u652f\u6301\u4e86 Consumer \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/consumer-who.png",alt:"Consumer"})),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u4f5c\u4e3a API \u7f51\u5173\uff0c\u9700\u8981\u77e5\u9053 API Consumer\uff08\u6d88\u8d39\u65b9\uff09\u5177\u4f53\u662f\u8c01\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5bf9\u4e0d\u540c API Consumer \u914d\u7f6e\u4e0d\u540c\u89c4\u5219\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),(0,a.kt)("p",null,"\u5b9a\u4e49 Consumer \u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"Consumer \u540d\u79f0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"Consumer \u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"td",href:"/zh/docs/apisix/terminology/plugin"},"Plugins"),"\u3002")))),(0,a.kt)("h2",{id:"\u8bc6\u522b\u6d88\u8d39\u8005"},"\u8bc6\u522b\u6d88\u8d39\u8005"),(0,a.kt)("p",null,"\u5728 APISIX \u4e2d\uff0c\u8bc6\u522b Consumer \u7684\u8fc7\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/consumer-internal.png",alt:"Consumer Internal"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6388\u6743\u8ba4\u8bc1\uff1a\u6bd4\u5982\u6709 ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/key-auth"},"key-auth"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/plugins/jwt-auth"},"JWT")," \u7b49\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6 consumer_name\uff1a\u901a\u8fc7\u6388\u6743\u8ba4\u8bc1\uff0c\u5373\u53ef\u81ea\u7136\u83b7\u53d6\u5230\u5bf9\u5e94\u7684 Consumer name\uff0c\u5b83\u662f Consumer \u5bf9\u8c61\u7684\u552f\u4e00\u8bc6\u522b\u6807\u8bc6\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6 Consumer \u4e0a\u7ed1\u5b9a\u7684 Plugin \u6216 Upstream \u4fe1\u606f\uff1a\u5b8c\u6210\u5bf9\u4e0d\u540c Consumer \u505a\u4e0d\u540c\u914d\u7f6e\u7684\u6548\u679c\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/key-auth"},"key-auth")," \u8ba4\u8bc1\u6388\u6743\u63d2\u4ef6\u7684\u8c03\u7528\u903b\u8f91\uff0c\u8fdb\u4e00\u6b65\u7406\u89e3 Consumer \u6982\u5ff5\u548c\u4f7f\u7528\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Consumer \u5bf9\u8c61\u7684\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api#consumer"},"Admin API Consumer")," \u8d44\u6e90\u4ecb\u7ecd\u3002"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4ecb\u7ecd\u4e86\u5982\u4f55\u5bf9\u67d0\u4e2a Consumer \u5f00\u542f\u6307\u5b9a\u63d2\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa Consumer\uff0c\u6307\u5b9a\u8ba4\u8bc1\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-auth"),"\uff0c\u5e76\u5f00\u542f\u7279\u5b9a\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count"),"\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\uff0c\u8bbe\u7f6e\u8def\u7531\u89c4\u5219\u548c\u542f\u7528\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u63d2\u4ef6\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8fde\u7eed\u53d1\u9001\u4e09\u6b21\u6d4b\u8bd5\u8bf7\u6c42\uff0c\u524d\u4e24\u6b21\u8fd4\u56de\u6b63\u5e38\uff0c\u6ca1\u8fbe\u5230\u9650\u901f\u9608\u503c\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -H 'apikey: auth-one' -I\n")),(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e09\u6b21\u6d4b\u8bd5\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"503"),"\uff0c\u8bf7\u6c42\u88ab\u9650\u5236\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\n...\n")))),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugins/consumer-restriction"},"consumer-restriction")," \u63d2\u4ef6\uff0c\u9650\u5236\u7528\u6237 ",(0,a.kt)("inlineCode",{parentName:"p"},"jack")," \u5bf9\u8be5 Route \u7684\u8bbf\u95ee\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u9ed1\u540d\u5355\uff0c\u7981\u6b62 jack \u8bbf\u95ee\u8be5 API\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8bbf\u95ee\u8be5\u8def\u7531\uff0c\u5747\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"403"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"jack")," \u88ab\u7981\u6b62\u8bbf\u95ee\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -H 'apikey: auth-one' -I\n")),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 403\n...\n")))))}m.isMDXComponent=!0}}]);