"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5231:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"limit-count",keywords:["Apache APISIX","API Gateway","Limit Count"],description:"This document contains information about the Apache APISIX limit-count Plugin, you can use it to limit the number of requests to your service by a given count per time."},l=void 0,o={unversionedId:"plugins/limit-count",id:"plugins/limit-count",isDocsHomePage:!1,title:"limit-count",description:"This document contains information about the Apache APISIX limit-count Plugin, you can use it to limit the number of requests to your service by a given count per time.",source:"@site/docs/apisix/plugins/limit-count.md",sourceDirName:"plugins",slug:"/plugins/limit-count",permalink:"/docs/apisix/next/plugins/limit-count",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/limit-count.md",tags:[],version:"current",frontMatter:{title:"limit-count",keywords:["Apache APISIX","API Gateway","Limit Count"],description:"This document contains information about the Apache APISIX limit-count Plugin, you can use it to limit the number of requests to your service by a given count per time."},sidebar:"docs",previous:{title:"limit-conn",permalink:"/docs/apisix/next/plugins/limit-conn"},next:{title:"proxy-cache",permalink:"/docs/apisix/next/plugins/proxy-cache"}},d=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin limits the number of requests to your service by a given count per time. The plugin is using Fixed Window algorithm."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"count > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of requests to allow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_window"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"time_window > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in seconds before ",(0,r.kt)("inlineCode",{parentName:"td"},"count")," is reset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination", "constant"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Type of user specified key to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"remote_addr"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"User specified key to base the request limiting on. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"constant"),", the key will be treated as a constant value. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"var"),", the key will be treated as a name of variable, like ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),". If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"var_combination"),", the key will be a combination of variables, like ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $consumer_name"),". If the value of the key is empty, ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Body of the response returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"local"'),(0,r.kt)("td",{parentName:"tr",align:null},'["local", "redis", "redis-cluster"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Rate-limiting policies to use for retrieving and increment the limit count. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"local")," the counters will be locally stored in memory on the node. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," counters are stored on a Redis server and will be shared across the nodes. It is done usually for global speed limiting, and setting to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")," uses a Redis cluster instead of a single instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," enables Plugin degradation when the Plugin is temporarily unavailable (for example, a Redis timeout) and allows requests to continue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show_limit_quota_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", adds ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Limit")," (total number of requests) and ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Remaining")," (remaining number of requests) to the response header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Group to share the counter with. Routes configured with the same group will share the same counter. Do not configure with a value that was previously used in this attribute before as the plugin would not allow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required when ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the Redis server. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"6379"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Port of the Redis server. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Username for Redis authentication if Redis ACL is used (for Redis version >= 6.0). If you use the legacy authentication method ",(0,r.kt)("inlineCode",{parentName:"td"},"requirepass")," to configure Redis password, configure only the ",(0,r.kt)("inlineCode",{parentName:"td"},"redis_password"),". Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Password for Redis authentication. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_ssl"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", then uses SSL to connect to redis instance. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", then verifies the validity of the server SSL certificate. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),". See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"tcpsock:sslhandshake"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_database"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"redis_database >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected database of the Redis server (for single instance operation or when using Redis cloud with a single entrypoint). Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout in milliseconds for any command submitted to the Redis server. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"required when ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Addresses of Redis cluster nodes. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required when ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Redis cluster service nodes. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_ssl"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", then uses SSL to connect to redis-cluster. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", then verifies the validity of the server SSL certificate. Used when the ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),".")))),(0,r.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,r.kt)("p",null,"You can enable the Plugin on a Route as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"var_combination")," as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also create a group to share the same counter across multiple Routes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/services/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "group": "services_1#1640140620"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now every Route which belongs to group ",(0,r.kt)("inlineCode",{parentName:"p"},"services_1#1640140620")," (or the service with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),") will share the same counter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/2 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello2"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 ...\n")),(0,r.kt)("p",null,"You can also share the same limit counter for all your requests by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"constant"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/services/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "key_type": "constant",\n            "group": "services_1#1640140621"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The above configuration means that when the ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin is configured to ",(0,r.kt)("inlineCode",{parentName:"p"},"services_1#1640140620")," for multiple routes, requests to those routes will share the same counter, even if the requests come from different IP addresses."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," in the same ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," must be consistent. If you want to change the configuration, you need to update the value of the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," at the same time."))),(0,r.kt)("p",null,"For cluster-level traffic limiting, you can use a Redis server. The counter will be shared between different APISIX nodes to achieve traffic limiting."),(0,r.kt)("p",null,"The example below shows how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis",\n            "redis_host": "127.0.0.1",\n            "redis_port": 6379,\n            "redis_password": "password",\n            "redis_database": 1,\n            "redis_timeout": 1001\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Similarly you can also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cluster")," policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis-cluster",\n            "redis_cluster_nodes": [\n              "127.0.0.1:5000",\n              "127.0.0.1:5001"\n            ],\n            "redis_password": "password",\n            "redis_cluster_name": "redis-cluster-1"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"The above configuration limits to 2 requests in 60 seconds. The first two requests will work and the response headers will contain the headers ",(0,r.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Reset"),", represents the total number of requests that are limited, the number of requests that can still be sent, and the number of seconds left for the counter to reset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 58\nServer: APISIX web server\n")),(0,r.kt)("p",null,"When you visit for a third time in the 60 seconds, you will receive a response with 503 code. Currently, in the case of rejection, the limit count headers is also returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 58\nServer: APISIX web server\n")),(0,r.kt)("p",null,"You can also set a custom response by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected_msg")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 58\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);