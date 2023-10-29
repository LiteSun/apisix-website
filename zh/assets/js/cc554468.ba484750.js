"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7828],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,k=h["".concat(o,".").concat(m)]||h[m]||u[m]||p;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const p={title:"\u793e\u533a\u53cc\u5468\u62a5 (10.1 - 10.15)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 `proxy-mirror` \u63d2\u4ef6\u652f\u6301\u89e3\u6790 host \u57df\u540d\u3001`kafka-logger` \u63d2\u4ef6\u65b0\u589e brokers \u5c5e\u6027\uff0c\u652f\u6301\u4e0d\u540c broker \u8bbe\u7f6e\u76f8\u540c host \u7b49\u529f\u80fd\u3002",tags:["Community"],image:"https://static.apiseven.com/2022/10/18/634e520868415.jpg"},i=void 0,l={permalink:"/zh/blog/2022/10/18/weekly-report-0731",source:"@site/blog/2022/10/18/weekly-report-0731.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (10.1 - 10.15)",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 `proxy-mirror` \u63d2\u4ef6\u652f\u6301\u89e3\u6790 host \u57df\u540d\u3001`kafka-logger` \u63d2\u4ef6\u65b0\u589e brokers \u5c5e\u6027\uff0c\u652f\u6301\u4e0d\u540c broker \u8bbe\u7f6e\u76f8\u540c host \u7b49\u529f\u80fd\u3002",date:"2022-10-18T00:00:00.000Z",formattedDate:"2022\u5e7410\u670818\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.645,truncated:!0,authors:[],prevItem:{title:"\u4ece Traefik \u5230 APISIX\uff0c\u6c7d\u8f66\u667a\u80fd\u8ba1\u7b97\u5e73\u53f0\u516c\u53f8\u300c\u5730\u5e73\u7ebf\u300d\u5728 Ingress Controller \u7684\u63a2\u7d22\u548c\u5b9e\u8df5",permalink:"/zh/blog/2022/10/28/apisix-ingress-with-horizon-ai"},nextItem:{title:"\u653e\u5f03 Spring Cloud Gateway\uff01APISIX \u5728\u300c\u8fd8\u5457\u300d\u7684\u6280\u672f\u5b9e\u8df5",permalink:"/zh/blog/2022/09/30/huanbei-in-apache-apisix"}},o={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #7990",id:"issue-7990",children:[],level:3},{value:"Issue #1339",id:"issue-1339",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4ece 10.1 - 10.15\uff0c\u6709 19 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 32 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,n.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,n.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,n.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,n.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/18/634e520810ea5.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/18/634e5208ed0b4.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,n.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,n.kt)("h3",{id:"issue-7990"},"Issue #7990"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/7990"},"https://github.com/apache/apisix/issues/7990")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u5e94\u8be5\u5728\u6d4b\u8bd5\u6848\u4f8b\u4e2d\u5408\u5e76 ",(0,n.kt)("inlineCode",{parentName:"p"},"extra_init_by_lua_start")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"extra_init_by_lua")," \u6307\u4ee4\uff0c\u5b83\u4eec\u53ea\u662f\u5728\u4f4d\u7f6e\u4e0a\u6709\u6240\u4e0d\u540c\u3002"),(0,n.kt)("h3",{id:"issue-1339"},"Issue #1339"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/1339"},"https://github.com/apache/apisix-ingress-controller/issues/1339")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1aApache APISIX v3 \u7248\u672c\u5373\u5c06\u53d1\u5e03\uff0c\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0cAdmin API \u505a\u4e86\u5f88\u591a\u8c03\u6574\uff08\u8fd9\u662f\u76ee\u524d APISIX Ingress Controller \u4e0e APISIX \u4e4b\u95f4\u901a\u4fe1\u7684\u4e3b\u8981\u65b9\u5f0f\uff09\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0cAPISIX Ingress Controller \u4e5f\u9700\u8981\u4e0e APISIX v3 \u4e2d\u7684 Admin API \u517c\u5bb9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e3a e2e \u6d4b\u8bd5\u6dfb\u52a0 APISIX v3 \u955c\u50cf\u3002(\u53ef\u4ee5\u4f7f\u7528 apache/apisix:dev)"),(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4ee3\u7801\u4e2d Admin API \u8fd4\u56de\u7ed3\u679c\u7684\u5904\u7406\u903b\u8f91\u3002")),(0,n.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7861"},(0,n.kt)("inlineCode",{parentName:"a"},"proxy-mirror")," \u63d2\u4ef6\u652f\u6301\u89e3\u6790 host \u57df\u540d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Strangevy"},"Strangevy"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7999"},(0,n.kt)("inlineCode",{parentName:"a"},"kafka-logger")," \u63d2\u4ef6\u65b0\u589e brokers \u5c5e\u6027\uff0c\u652f\u6301\u4e0d\u540c broker \u8bbe\u7f6e\u76f8\u540c host"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starsz"},"starsz"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7980"},"\u65b0\u589e consumer group"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8050"},(0,n.kt)("inlineCode",{parentName:"a"},"kafka-logger")," \u652f\u6301\u8bbe\u7f6e sasl \u76f8\u5173\u914d\u7f6e"),"\uff08\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/starsz"},"starsz"),"\uff09"))),(0,n.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,n.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/09/28/apache-apisix-3.0.0-beta-release/"},"APISIX 3.0.0 \u9884\u89c8\u7248\u73b0\u5df2\u53d1\u5e03\uff01\u5e26\u6765\u4e30\u5bcc\u529f\u80fd\u4e0e\u8fed\u4ee3\u7ec6\u8282")),(0,n.kt)("p",{parentName:"li"},"  Apache APISIX 3.0.0 \u9884\u89c8\u7248\u73b0\u5df2\u53d1\u5e03\uff0c\u4e3a\u4f60\u6574\u7406\u4e86\u6b64\u6b21\u9884\u89c8\u7248\u4e0a\u7ebf\u7684\u4e00\u4e9b\u529f\u80fd\u4e0e\u8c03\u6574\u7ec6\u8282\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/09/27/why-apache-apisix-is-best-apigateway/"},"\u4e3a\u4ec0\u4e48\u8bf4 Apache APISIX \u662f\u6700\u597d\u7684 API \u7f51\u5173\uff1f")),(0,n.kt)("p",{parentName:"li"},"  \u672c\u6587\u9996\u53d1\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://www.apiseven.com/blog/why-is-apache-apisix-the-best-api-gateway"},"API7.ai"),"\uff0c\u4ece\u591a\u4e2a\u89d2\u5ea6\uff08\u5728\u5f00\u53d1\u4eba\u5458\u4e2d\u7684\u53d7\u6b22\u8fce\u7a0b\u5ea6\u3001\u5f00\u6e90\u8bb8\u53ef\u8bc1\u3001\u6027\u80fd\u548c\u6574\u4e2a\u751f\u6001\u7cfb\u7edf\uff09\u5bf9\u6bd4\u591a\u4e2a API \u7f51\u5173\uff08Kong\u3001Tyk\u3001Gloo\uff09\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/09/20/apisix-integrate-cncf-openfunction/"},"API \u7f51\u5173 Apache APISIX \u96c6\u6210 CNCF OpenFunction")),(0,n.kt)("p",{parentName:"li"},"  \u672c\u6587\u4f5c\u8005\u674e\u4ece\u65fa\uff0c\u5f00\u6e90\u7231\u597d\u8005\u4e0e\u4e91\u539f\u751f\u6280\u672f\u7231\u597d\u8005\uff0c\u76ee\u524d\u4e8e\u4f50\u6cbb\u4e9a\u7406\u5de5\u5b66\u9662\u6df1\u5733\u6821\u533a\u8fdb\u4fee\u7855\u58eb\u5b66\u4f4d\u3002\u672c\u7bc7\u6587\u7ae0\u662f\u5728\u53c2\u4e0e APISIX \u5f00\u6e90\u4e4b\u590f\u9879\u76ee\u300c\u96c6\u6210 OpenFunction \u81f3 Apache APISIX\u300d\u7684\u529f\u80fd\u5448\u73b0\uff0c\u5e0c\u671b\u6b64\u529f\u80fd\u53ef\u4ee5\u8ba9\u4f60\u5728\u4f7f\u7528 APISIX \u8fdb\u884c\u6269\u5c55\u65f6\u66f4\u52a0\u4fbf\u6377\u3002"))))}u.isMDXComponent=!0}}]);