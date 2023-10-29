"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24542],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82642:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"forward-auth",keywords:["APISIX","Plugin","Forward Authentication","forward-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `forward-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,o={unversionedId:"plugins/forward-auth",id:"version-2.15/plugins/forward-auth",isDocsHomePage:!1,title:"forward-auth",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `forward-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/forward-auth.md",sourceDirName:"plugins",slug:"/plugins/forward-auth",permalink:"/zh/docs/apisix/2.15/plugins/forward-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/plugins/forward-auth.md",tags:[],version:"2.15",frontMatter:{title:"forward-auth",keywords:["APISIX","Plugin","Forward Authentication","forward-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `forward-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-2.15/docs",previous:{title:"opa",permalink:"/zh/docs/apisix/2.15/plugins/opa"},next:{title:"cors",permalink:"/zh/docs/apisix/2.15/plugins/cors"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u6570\u636e\u5b9a\u4e49",id:"\u6570\u636e\u5b9a\u4e49",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u4f7f\u7528\u7684\u662f\u7ecf\u5178\u5916\u90e8\u8ba4\u8bc1\u3002\u5f53\u8eab\u4efd\u8ba4\u8bc1\u5931\u8d25\u65f6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u9519\u8bef\u6216\u8005\u91cd\u5b9a\u5411\u5230\u8ba4\u8bc1\u9875\u9762\u7684\u573a\u666f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u5de7\u5999\u5730\u5c06\u8eab\u4efd\u8ba4\u8bc1\u548c\u6388\u6743\u903b\u8f91\u79fb\u5230\u4e86\u4e00\u4e2a\u4e13\u95e8\u7684\u5916\u90e8\u670d\u52a1\u4e2d\uff0cAPISIX \u5c06\u7528\u6237\u7684\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u8ba4\u8bc1\u670d\u52a1\u5e76\u963b\u585e\u539f\u59cb\u8bf7\u6c42\uff0c\u7136\u540e\u5728\u8ba4\u8bc1\u670d\u52a1\u4e0b\u4ee5\u975e 2xx \u72b6\u6001\u54cd\u5e94\u65f6\u8fdb\u884c\u7ed3\u679c\u66ff\u6362\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u7684\u5730\u5740 (\u4f8b\u5982\uff1ahttps://localhost:9188)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u9a8c\u8bc1 SSL \u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET","POST"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5411 ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u53d1\u9001\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002\u5f53\u8bbe\u7f6e\u4e3a POST \u65f6\uff0c\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"request body")," \u8f6c\u53d1\u81f3 ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9700\u8981\u7531\u5ba2\u6237\u7aef\u8f6c\u53d1\u5230 ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u7684\u8bf7\u6c42\u5934\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u53ea\u53d1\u9001 APISIX \u63d0\u4f9b\u7684 headers (\u4f8b\u5982\uff1aX-Forwarded-XXX)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u901a\u8fc7\u65f6\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u8f6c\u53d1\u81f3 ",(0,r.kt)("inlineCode",{parentName:"td"},"upstream")," \u7684\u8bf7\u6c42\u5934\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u8f6c\u53d1\u4efb\u4f55\u8bf7\u6c42\u5934\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u5931\u8d25\u65f6\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u5411 ",(0,r.kt)("inlineCode",{parentName:"td"},"client")," \u53d1\u9001\u7684\u54cd\u5e94\u5934\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u8f6c\u53d1\u4efb\u4f55\u54cd\u5e94\u5934\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," \u670d\u52a1\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[true, false]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP \u957f\u8fde\u63a5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u957f\u8fde\u63a5\u6c60\u5927\u5c0f\u3002")))),(0,r.kt)("h2",{id:"\u6570\u636e\u5b9a\u4e49"},"\u6570\u636e\u5b9a\u4e49"),(0,r.kt)("p",null,"APISIX \u5c06\u751f\u6210\u5e76\u53d1\u9001\u5982\u4e0b\u6240\u793a\u7684\u8bf7\u6c42\u5934\u5230\u8ba4\u8bc1\u670d\u52a1\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scheme"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Host"),(0,r.kt)("th",{parentName:"tr",align:null},"URI"),(0,r.kt)("th",{parentName:"tr",align:null},"Source IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Proto"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Method"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Host"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Uri"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-For")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5916\u90e8\u8ba4\u8bc1\u670d\u52a1\u3002\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u7684\u662f Apache APISIX \u65e0\u670d\u52a1\u5668\u63d2\u4ef6\u6a21\u62df\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/auth\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/auth",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions": [\n                "return function (conf, ctx)\n                    local core = require(\\"apisix.core\\");\n                    local authorization = core.request.header(ctx, \\"Authorization\\");\n                    if authorization == \\"123\\" then\n                        core.response.exit(200);\n                    elseif authorization == \\"321\\" then\n                        core.response.set_header(\\"X-User-ID\\", \\"i-am-user\\");\n                        core.response.exit(200);\n                    else core.response.set_header(\\"Location\\", \\"http://example.com/auth\\");\n                        core.response.exit(403);\n                    end\n                end"\n            ]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5728\u6307\u5b9a Route \u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/1\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -d \'{\n    "uri": "/headers",\n    "plugins": {\n        "forward-auth": {\n            "uri": "http://127.0.0.1:9080/auth",\n            "request_headers": ["Authorization"],\n            "upstream_headers": ["X-User-ID"],\n            "client_headers": ["Location"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u8bf7\u6c42\u5934\u4e2d\u53d1\u9001\u8ba4\u8bc1\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/headers -H 'Authorization: 123'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "headers": {\n        "Authorization": "123",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u8ba4\u8bc1\u670d\u52a1\u54cd\u5e94\u5934\u5230 Upstream\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/headers -H 'Authorization: 321'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "headers": {\n        "Authorization": "321",\n        "X-User-ID": "i-am-user",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6388\u6743\u5931\u8d25\u65f6\uff0c\u8ba4\u8bc1\u670d\u52a1\u53ef\u4ee5\u5411\u7528\u6237\u53d1\u9001\u81ea\u5b9a\u4e49\u54cd\u5e94\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/headers\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\nLocation: http://example.com/auth\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);