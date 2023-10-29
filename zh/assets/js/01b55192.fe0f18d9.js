"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43113],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,m=c["".concat(o,".").concat(s)]||c[s]||g[s]||l;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15187:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"tcp-logger",keywords:["APISIX","API \u7f51\u5173","Plugin","TCP Logger"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u5982\u4f55\u4f7f\u7528 tcp-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 TCP \u670d\u52a1\u5668\u3002"},i=void 0,p={unversionedId:"plugins/tcp-logger",id:"version-3.1/plugins/tcp-logger",isDocsHomePage:!1,title:"tcp-logger",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u5982\u4f55\u4f7f\u7528 tcp-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 TCP \u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/tcp-logger.md",sourceDirName:"plugins",slug:"/plugins/tcp-logger",permalink:"/zh/docs/apisix/3.1/plugins/tcp-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/tcp-logger.md",tags:[],version:"3.1",frontMatter:{title:"tcp-logger",keywords:["APISIX","API \u7f51\u5173","Plugin","TCP Logger"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u5982\u4f55\u4f7f\u7528 tcp-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 TCP \u670d\u52a1\u5668\u3002"},sidebar:"version-3.1/docs",previous:{title:"skywalking-logger",permalink:"/zh/docs/apisix/3.1/plugins/skywalking-logger"},next:{title:"kafka-logger",permalink:"/zh/docs/apisix/3.1/plugins/kafka-logger"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tcp-logger")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u5230 TCP \u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u8fd8\u5b9e\u73b0\u4e86\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230\u76d1\u63a7\u5de5\u5177\u6216\u5176\u5b83 TCP \u670d\u52a1\u7684\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"TCP \u670d\u52a1\u5668\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"port"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tls"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u63a7\u5236\u662f\u5426\u6267\u884c SSL \u9a8c\u8bc1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tls_options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"TLS \u9009\u9879\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u65e5\u5fd7\u4e2d\u5c06\u5305\u542b\u8bf7\u6c42\u4f53\u3002")))),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u6bcf ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "tcp-logger": {\n                 "host": "127.0.0.1",\n                 "port": 5044,\n                 "tls": false,\n                 "batch_max_size": 1,\n                 "name": "tcp logger"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5411 APISIX \u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);