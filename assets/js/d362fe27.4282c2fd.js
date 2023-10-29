"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77390],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?r.createElement(h,o(o({ref:t},c),{},{components:i})):r.createElement(h,o({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},63852:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={title:"Protect API",keywords:["API Gateway","Apache APISIX","Rate Limit","Protect API"],description:"This article describes how to secure your API with the rate limiting plugin for API Gateway Apache APISIX."},o=void 0,l={unversionedId:"tutorials/protect-api",id:"version-3.3/tutorials/protect-api",isDocsHomePage:!1,title:"Protect API",description:"This article describes how to secure your API with the rate limiting plugin for API Gateway Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.3/tutorials/protect-api.md",sourceDirName:"tutorials",slug:"/tutorials/protect-api",permalink:"/docs/apisix/tutorials/protect-api",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.3/docs/en/latest/tutorials/protect-api.md",tags:[],version:"3.3",frontMatter:{title:"Protect API",keywords:["API Gateway","Apache APISIX","Rate Limit","Protect API"],description:"This article describes how to secure your API with the rate limiting plugin for API Gateway Apache APISIX."},sidebar:"version-3.3/docs",previous:{title:"Expose API",permalink:"/docs/apisix/tutorials/expose-api"},next:{title:"Observe APIs",permalink:"/docs/apisix/tutorials/observe-your-api"}},s=[{value:"Concept introduction",id:"concept-introduction",children:[{value:"Plugin",id:"plugin",children:[]}]},{value:"Preconditions",id:"preconditions",children:[]},{value:"Protect your API",id:"protect-your-api",children:[]},{value:"More Traffic plugins",id:"more-traffic-plugins",children:[]},{value:"More Tutorials",id:"more-tutorials",children:[]}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This article describes secure your API with the rate limiting plugin for API Gateway Apache APISIX."),(0,n.kt)("h2",{id:"concept-introduction"},"Concept introduction"),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"This represents the configuration of the plugins that are executed during the HTTP request/response lifecycle. A ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugin")," configuration can be bound directly to a Route, a Service, a Consumer or a Plugin Config."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/route"},"Route"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/service"},"Service"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin-config"},"Plugin Config")," or Consumer are all bound to the same for plugins, only one plugin configuration will take effect. The priority of plugin configurations is: Consumer > Route > Plugin Config > Service. At the same time, there are 6 stages involved in the plugin execution process, namely ",(0,n.kt)("inlineCode",{parentName:"p"},"rewrite"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"before_proxy"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"body_filter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"log"),"."))),(0,n.kt)("h2",{id:"preconditions"},"Preconditions"),(0,n.kt)("p",null,"Before following this tutorial, ensure you have ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/tutorials/expose-api"},"exposed the service"),"."),(0,n.kt)("h2",{id:"protect-your-api"},"Protect your API"),(0,n.kt)("p",null,"We can use rate limits to limit our API services to ensure the stable operation of API services and avoid system crashes caused by some sudden traffic. We can restrict as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Limit the request rate;"),(0,n.kt)("li",{parentName:"ol"},"Limit the number of requests per unit time;"),(0,n.kt)("li",{parentName:"ol"},"Delay request;"),(0,n.kt)("li",{parentName:"ol"},"Reject client requests;"),(0,n.kt)("li",{parentName:"ol"},"Limit the rate of response data.")),(0,n.kt)("p",null,"APISIX provides several plugins for limiting current and speed, including ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/limit-conn"},"limit-conn"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/limit-count"},"limit-count"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/limit-req"},"limit- req")," and other plugins."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"limit-conn")," Plugin limits the number of concurrent requests to your services."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"limit-req")," Plugin limits the number of requests to your service using the leaky bucket algorithm."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"limit-count")," Plugin limits the number of requests to your service by a given count per time.")),(0,n.kt)("p",null,"Next, we will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin as an example to show you how to protect your API with a rate limit plugin:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a Route.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n  "upstream_id": "1"\n}\'\n')),(0,n.kt)("p",null,"In the above configuration, a Route with ID ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," is created using the upstream made in ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/tutorials/expose-api"},"Expose Service"),", and the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin is enabled. The plugin only allows the client to access the upstream service ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," times within ",(0,n.kt)("inlineCode",{parentName:"p"},"60")," seconds. If more than two times, the ",(0,n.kt)("inlineCode",{parentName:"p"},"503")," error code will be returned."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Test")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,n.kt)("p",null,"After using the above command to access three times in a row, the following error will appear:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,n.kt)("p",null,"If the above result is returned, the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin has taken effect and protected your API."),(0,n.kt)("h2",{id:"more-traffic-plugins"},"More Traffic plugins"),(0,n.kt)("p",null,"In addition to providing plugins for limiting current and speed, APISIX also offers many other plugins to meet the needs of actual scenarios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/proxy-cache"},"proxy-cache"),": This plugin provides the ability to cache backend response data. It can be used with other plugins. The plugin supports both disk and memory-based caching. Currently, the data to be cached can be specified according to the response code and request mode, and more complex caching strategies can also be configured through the no_cache and cache_bypass attributes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/request-validation"},"request-validation"),": This plugin is used to validate requests forwarded to upstream services in advance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/proxy-mirror"},"proxy-mirror"),": This plugin provides the ability to mirror client requests. Traffic mirroring is copying the real online traffic to the mirroring service, so that the online traffic or request content can be analyzed in detail without affecting the online service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/api-breaker"},"api-breaker"),": This plugin implements an API circuit breaker to help us protect upstream business services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/traffic-split"},"traffic-split"),": You can use this plugin to gradually guide the percentage of traffic between upstreams to achieve blue-green release and grayscale release."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/request-id"},"request-id"),": The plugin adds a ",(0,n.kt)("inlineCode",{parentName:"li"},"unique")," ID to each request proxy through APISIX for tracking API requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/proxy-control"},"proxy-control"),": This plugin can dynamically control the behavior of NGINX proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/client-control"},"client-control"),": This plugin can dynamically control how NGINX handles client requests by setting an upper limit on the client request body size.")),(0,n.kt)("h2",{id:"more-tutorials"},"More Tutorials"),(0,n.kt)("p",null,"You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/tutorials/observe-your-api"},"Observe API")," document to monitor APISIX, collect logs, and track."))}c.isMDXComponent=!0}}]);