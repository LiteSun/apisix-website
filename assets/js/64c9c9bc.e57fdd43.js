"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3097],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(25773),o=(a(27378),a(35318));const r={title:"Why Is Apache APISIX the Best API Gateway?",authors:[{name:"Ming Wen",title:"Author",url:"https://github.com/moonming",image_url:"https://avatars.githubusercontent.com/u/26448043"}],keywords:["Ingress controller","Open Source API Gateway","API Management Platform","The Best API Gateway","Apache APISIX"],description:"Why is Apache APISIX the best API Gateway? We will compare multiple API gateways (Kong, Tyk, Gloo) in terms of the popularity among developers, open source licenses, performances, and the ecosystem as a whole.",tags:["Community"],image:"https://static.apiseven.com/2022/11/05/6365f2b8be5a7.png"},i=void 0,s={permalink:"/blog/2022/09/13/why-is-apache-apisix-the-best-api-gateway",source:"@site/blog/2022/09/13/why-is-apache-apisix-the-best-api-gateway.md",title:"Why Is Apache APISIX the Best API Gateway?",description:"Why is Apache APISIX the best API Gateway? We will compare multiple API gateways (Kong, Tyk, Gloo) in terms of the popularity among developers, open source licenses, performances, and the ecosystem as a whole.",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:12.415,truncated:!0,authors:[{name:"Ming Wen",title:"Author",url:"https://github.com/moonming",image_url:"https://avatars.githubusercontent.com/u/26448043",imageURL:"https://avatars.githubusercontent.com/u/26448043"}],prevItem:{title:"Building event-driven API services using CQRS, API Gateway and Serverless",permalink:"/blog/2022/09/23/build-event-driven-api"},nextItem:{title:"Hands-On: Set Up Ingress on Kubernetes With Apache APISIX Ingress Controller",permalink:"/blog/2022/09/09/kubernetes-ingress-with-apisix"}},l={authorsImageUrls:[void 0]},c=[{value:"Software Engineers Know It Well",id:"software-engineers-know-it-well",children:[],level:2},{value:"Open Source Licence: The Most Important Factor of Choosing an Open Source API Gateway",id:"open-source-licence-the-most-important-factor-of-choosing-an-open-source-api-gateway",children:[],level:2},{value:"Performance of Apache APISIX, Kong and Gloo",id:"performance-of-apache-apisix-kong-and-gloo",children:[],level:2},{value:"Talk Is Cheap, Show Me the Code",id:"talk-is-cheap-show-me-the-code",children:[{value:"High-Performance Route Matching Algorithm",id:"high-performance-route-matching-algorithm",children:[],level:3},{value:"High-Performance IP Matching Algorithm",id:"high-performance-ip-matching-algorithm",children:[],level:3},{value:"Routes Refinement",id:"routes-refinement",children:[],level:3},{value:"Support for Multi-Language Plugins",id:"support-for-multi-language-plugins",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Why is Apache APISIX the best API Gateway? We will compare multiple API gateways (Kong, Tyk, Gloo) in terms of the popularity among developers, their open source licenses, their performances, and the ecosystem as a whole.")),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://api7.ai/blog/why-is-apache-apisix-the-best-api-gateway"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This post was first published at ",(0,o.kt)("a",{parentName:"p",href:"https://api7.ai/blog/why-is-apache-apisix-the-best-api-gateway/"},"API7.ai")," by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonming"},"Ming Wen"),".")),(0,o.kt)("p",null,"Nowadays, mobile phones are used for all sorts of things, and various applications are available on the AppStore including social media, utility, games, lifestyle, online shopping, etc. Building these apps is inseparable from APIs. Therefore, companies that provide services through APIs must choose a reliable API gateway to ensure their services\u2019 speed, stability, and security."),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?category=api-gateway&grouping=category&sort=contributors"},"CNCF\u2019s API Gateway landscape"),", there are nearly 20 types of API gateway (not including cloud vendor\u2019s services), including Apache APISIX, Kong, Tyk, etc. Many of them claim themselves to be the most popular open-source API gateway project, the next-generation API gateway, but are they?"),(0,o.kt)("p",null,"In this article, we are going to analyze multiple API gateways in the dimensions of the popularity among developers, their open source licenses, their performances, and the ecosystem as a whole. In this analysis, we will see how Apache APISIX is the next-generation API Gateway, performing better than its peers in many aspects."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/13/632052e8c6f34.png",alt:"API Gateway landscape.png"})),(0,o.kt)("h2",{id:"software-engineers-know-it-well"},"Software Engineers Know It Well"),(0,o.kt)("p",null,"Software engineers are the users and developers of API and API gateway, so the popularity among engineers is a direct indicator of the trend. Below is a graph comparing the total number of GitHub contributors of four API gateways: Apache APISIX, Kong, Tky, and Gloo."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/13/632055a37ac26.png",alt:"GitHub Contributors.png"})),(0,o.kt)("p",null,"We can see from the graph that both Kong and Tyk started around 2015, while Apache APISIX and Gloo started later in 2019. More significantly, we can also see that the youngest Apache APISIX has the steepest curve among all of them and has accumulated more than 320 contributors, surpassing the second-best Kong by 57 people, becoming the API gateway project that has the most number of contributors."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/13/63205698e44f5.png",alt:"Monthly Active Contributors.png"})),(0,o.kt)("p",null,"Aside from the total number of contributors, the number of monthly active contributors indicates more significance. The monthly active contributors for Tyk have been only around 5 and rarely go above 10, while Kong and Gloo have been fluctuating between 10 and 20. In the meantime, Apache APISIX has monthly active contributors above 20 stably, and nearly 40 at the peak, making it the most active API gateway project."),(0,o.kt)("p",null,"Behind the four open-source API gateway projects, there are four corresponding commercialized companies. So, another indicator that makes APISIX stand out is the ratio of the number of monthly active contributors versus the number of employees."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"API Gateway")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"APISIX")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Kong")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Tyk")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Gloo")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"monthly active"),(0,o.kt)("td",{parentName:"tr",align:"center"},"38"),(0,o.kt)("td",{parentName:"tr",align:"center"},"20"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8"),(0,o.kt)("td",{parentName:"tr",align:"center"},"24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"employees(from Linkedln)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"40+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"200+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100+")))),(0,o.kt)("p",null,"As of 2022, Kong and Tyk have a ratio of 4%, and Gloo has a ratio of 24%. In contrast, APISIX almost reached 100%. The reason behind it is that since the very beginning when the company API7.ai started the APISIX project, it has been putting continuous effort into the open-source community and gained its reputation among developers."),(0,o.kt)("h2",{id:"open-source-licence-the-most-important-factor-of-choosing-an-open-source-api-gateway"},"Open Source Licence: The Most Important Factor of Choosing an Open Source API Gateway"),(0,o.kt)("p",null,"Ever since MongoDB changed its open source license to SSPL (Server Side Public License) in 2018, enterprises now have to open source their own code when MongoDB is being used as a managed service. As a result, enterprises need to take into serious consideration of a project\u2019s open source license when choosing a project."),(0,o.kt)("p",null,"From the surface, Apache APISIX, Kong, and Gloo all use the commercial-friendly Apache License Version 2.0, and Tyk uses Mozilla Public License Version 2.0. Dig deeper though, Kong, Gloo, and Tky are all backed by commercialized open source vendors. They can change their license any time just like MongoDB, limiting public cloud or other companies from using it freely, and forcing you to pay to access the new versions."),(0,o.kt)("p",null,"Nobody knows the probability of license changes. This risk, though, is just like the sword of Damocles, hanging above the users."),(0,o.kt)("p",null,"Under such circumstances, choosing an Apache Software Foundation(ASF)'s open source project or a CNCF\u2019s open source project is the best choice, because they cannot modify the license of the project. Apache APISIX is such a project. It is an ASF top-level project, meaning no commercial company has absolute control of the Apache APISIX project, all codes belong to ASF and the license will not be changed. Enterprise users can use it freely without worrying about receiving inquiry emails from lawyers and compliance departments."),(0,o.kt)("h2",{id:"performance-of-apache-apisix-kong-and-gloo"},"Performance of Apache APISIX, Kong and Gloo"),(0,o.kt)("p",null,"A frequently asked question in the community: which one has the better performance, Envoy-based Gloo or NGINX-based APISIX? Although performance is not the most critical metric, it is inarguably the most direct metric. The table below shows the benchmark scores of Apache APISIX and Gloo. The QPS of Apache APISIX is 4.6 times that of Gloo, and the latency of Apache APISIX is merely 7% of Gloo\u2019s."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"API Gateway")),(0,o.kt)("th",{parentName:"tr",align:"center"},"Apache APISIX"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Gloo Edge"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"QPS")),(0,o.kt)("td",{parentName:"tr",align:"center"},"59122"),(0,o.kt)("td",{parentName:"tr",align:"center"},"12903")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Latency")),(0,o.kt)("td",{parentName:"tr",align:"center"},"50.000% 470.00us",(0,o.kt)("br",null),"75.000% 648.00us",(0,o.kt)("br",null),"90.000% 0.89ms",(0,o.kt)("br",null),"99.000% 1.60ms"),(0,o.kt)("td",{parentName:"tr",align:"center"},"50.000% 6.80ms",(0,o.kt)("br",null),"75.000% 9.25ms",(0,o.kt)("br",null),"90.000% 11.32ms",(0,o.kt)("br",null),"99.000% 17.06ms")))),(0,o.kt)("p",null,"The choice of NGINX or Envoy is not the main factor of the performance difference, but the underlying optimization APISIX did in its source code. Even compared to KONG, which is also NGINX-based, APISIX has a huge performance upper hand. The graph below is extracted from ",(0,o.kt)("a",{parentName:"p",href:"https://gigaom.com/"},"GigaOm\u2019s")," report on testing Kong\u2019s Enterprise Edition and AP7 Enterprise Edition (",(0,o.kt)("a",{parentName:"p",href:"https://api7.ai/request-demo/"},"You can contact us for the complete data"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/13/6320574ba0244.png",alt:"Performance.png"})),(0,o.kt)("p",null,"The latency of Kong is tens or even a hundred times of API7(Enterprise Edition created by authors of Apache APISIX)\u2019s."),(0,o.kt)("p",null,"Why does APISIX have such a big performance upper hand? There are no secrets in front of the code."),(0,o.kt)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk Is Cheap, Show Me the Code"),(0,o.kt)("p",null,"Now, let us analyze Apache APISIX, Kong, and Gloo from a technical point of view. Apache APISIX\u2019s advantage mostly relies on optimization and innovation of the source code. The advantages of these technologies are not necessarily reflected in the simple PoC(Proof of Concept), but shown in a more complex production environment."),(0,o.kt)("p",null,"Before the emergence of the APISIX project, there were many commercial API gateways or open source API gateway products. These products stored API data, routing information, certificates, and configuration data in a relational database. The advantages of storing these data in relational databases are very obvious. Users can use SQL statements to perform flexible queries, and it is also convenient for users to perform backup and subsequent maintenance."),(0,o.kt)("p",null,"However, the gateway is a middleware that handles all traffic from the client. The requirement for availability is extremely high. If the API gateway relies on a relational database, it means that once the relational database fails (such as downtime or data loss), the API gateway will also be affected, and the availability of the entire system will also be suffering."),(0,o.kt)("p",null,"To reduce the damage, APISIX structured its architecture to avoid the possibility of downtime and data loss. APISIX used etcd to store configuration data instead of a relational database, the advantages of doing so are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is more aligned with the cloud-native architecture"),(0,o.kt)("li",{parentName:"ol"},"It is a better representation of the data type needed for the API gateway"),(0,o.kt)("li",{parentName:"ol"},"It will have higher availability"),(0,o.kt)("li",{parentName:"ol"},"The changes can be notified at a sub-millisecond level")),(0,o.kt)("p",null,"After using etcd to store configuration data, users only need to monitor etcd updates for data changes. APISIX will be able to obtain the latest configuration within milliseconds, achieving a real-time effect. If we were polling from the database, however, it may take 5-10 seconds to obtain the latest configuration information. Therefore, using etcd as the storage scheme not only makes APISIX more cloud-native but also higher availability."),(0,o.kt)("h3",{id:"high-performance-route-matching-algorithm"},"High-Performance Route Matching Algorithm"),(0,o.kt)("p",null,"To process a request, API Gateway needs to match the target expression with each request's host information, URI, HTTP methods, and other information. Thus, an efficient matching algorithm is crucial. The hash-based algorithm has good performance, but cannot achieve fuzzy matching. Regular expressions can perform fuzzy matching, but the performance is not so good. Apache APISIX\u2019s solution is to use a tree, an efficient search data structure that supports fuzzy matching. To be more precise, Apache APISIX uses a radix tree (compressed prefix tree), a data structure that only compresses intermediate nodes with one child. Among all the known API gateway products, Apache APISIX is the first to apply the radix tree in route matching and supports the scenario where one prefix can match multiple routes. For the implementation details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree"},"lua-resty-radixtree"),"."),(0,o.kt)("p",null,"When matching a request, the algorithm with the radix tree will match it progressively, with an O(K) complexity (K is the length of the URI in the route, and it is independent of the number of APIs). This algorithm suits very well in scenarios when there are a large number of routes, such as on public clouds or CDN. It also has no problem dealing with a large number of routes that increases rapidly."),(0,o.kt)("h3",{id:"high-performance-ip-matching-algorithm"},"High-Performance IP Matching Algorithm"),(0,o.kt)("p",null,"An IP address has two notations: standard IP notation and CIDR notation, taking 32-bit IPv4 as an example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standard IP notation: 192.168.1.1"),(0,o.kt)("li",{parentName:"ul"},"CIDR notation: 192.168.1.1/8")),(0,o.kt)("p",null,"Apache APISIX's IP matching and route matching use different algorithms. Take the IP of 192.168.1.1 as an example, since the range of each IP segment is 0 to 255, we can think that the IP address is composed of four 16-bit integer numbers, and the length of the IP is fixed. Thus, we can use a more efficient algorithm to complete the matching."),(0,o.kt)("p",null,"Assume that there is an IP library containing 500 IPv4 records, APISIX will cache the 500 IPv4 records in the hash table, and use the hash table for IP matching. The time complexity is O(1). Other API gateways complete IP matching through list iteration and each request sent to the gateway may be iterated up to 500 times. Therefore, APISIX's high-precision IP matching algorithm greatly improves the efficiency of scenarios that require massive IP allowlist and denylist matching (such as WAF)."),(0,o.kt)("h3",{id:"routes-refinement"},"Routes Refinement"),(0,o.kt)("p",null,"API Gateways match the pre-defined rules with various information of the requests, such as the host information, URI, URI query parameters, URI path parameters, HTTP methods, request headers, etc. These pieces of information are supported by most of the API gateway. However, Apache APISIX supports more data in addition to these to solve more complex cases."),(0,o.kt)("p",null,"First, Apache APISIX supports NGINX built-in variables, which means that we can use dozens of NGINX built-in variables as matching parameters, including ",(0,o.kt)("inlineCode",{parentName:"p"},"uri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"server_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"server_addr"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"request_uri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remote_port"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remote_addr"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query_string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arg_name"),"."),(0,o.kt)("p",null,"For a list of NGINX built-in variables, ",(0,o.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/varindex.html"},"see NGINX Variables"),"."),(0,o.kt)("p",null,"Second, Apache APISIX supports conditional expressions as matching rules, and its structure is ",(0,o.kt)("inlineCode",{parentName:"p"},"[var, operator, val], ...]]"),", where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"var")," values \u200b\u200bcan be NGINX built-in variables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operator")," supports equal, greater than, less than, regular expressions, contains, etc.")),(0,o.kt)("p",null,"Assuming the expression is ",(0,o.kt)("inlineCode",{parentName:"p"},'["arg_name", "==", "json"]'),", it means whether there is a parameter value of ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," in the URI query parameters of the current request. Apache APISIX implements this feature through its library ",(0,o.kt)("inlineCode",{parentName:"p"},"lua-resty-expr"),". For details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),". This feature gives the user a lot of flexibility and is highly extensible."),(0,o.kt)("p",null,"In addition, Apache APISIX allows the users to set up routes\u2019 ttl(time to live)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/2?ttl=60 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/aa/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"The above code means that APISIX will automatically delete the routing configuration after 60sec, which will be required for some temporary verification scenarios, like canary release. It is also very convenient for online traffic splitting, a feature that other gateway products do not have."),(0,o.kt)("p",null,"Lastly, Apache APISIX supports customized filter functions, one can write custom Lua functions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter_func")," parameter, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "hosts": ["foo.com", "*.bar.com"],\n    "filter_func": "function(vars)\n                    return vars[\'host\'] == \'api7.ai\'\n                end",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"The input parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"filter_func")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"vars"),", and NGINX variables can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"vars"),", and then the filtering logic can be customized."),(0,o.kt)("h3",{id:"support-for-multi-language-plugins"},"Support for Multi-Language Plugins"),(0,o.kt)("p",null,"Users often need to customize some of the development and system integration of API gateway towards specific scenarios."),(0,o.kt)("p",null,"APISIX currently supports more than 80 plugins, but it is still difficult to cover all user scenarios. Thus, most companies will develop customized plugins for specific businesses, integrate more protocols and systems through the gateway, and achieve unified management at the gateway layer."),(0,o.kt)("p",null,"In earlier versions of APISIX, developers could only use Lua to develop plugins. Although plugins developed in native computing languages \u200b\u200bhave very high performance, learning Lua, a new development language, requires time and learning costs."),(0,o.kt)("p",null,"In response to this situation, APISIX provides two solutions."),(0,o.kt)("p",null,"The first solution is to support more mainstream programming languages \u200b\u200b(such as Java, Python, Go, etc.) through Plugin Runner. Using Plugin Runner, back-end engineers can communicate through local RPC to develop APISIX plugins using the programming languages they are familiar with. The advantage of this is to reduce development costs and improve development efficiency. The disadvantage will be performance losses. So, is there a way to achieve the near-native performance of Lua using high-level languages that developers are familiar with?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/13/632057a0ad122.png",alt:"Multi-Language Architecture.png"})),(0,o.kt)("p",null,"The second solution is to use Wasm to develop plugins, as shown in the left part of the above figure. Wasm (WebAssembly) was first used as a new type of technology that runs in browsers, but now it is also gradually showing its advantages on the server side. We embedded Wasm into APISIX, and users can use Wasm to compile Wasm bytecode to run in APISIX. To make use of Wasm we developed a Wasm plugin where users can develop near-native APISIX plugins using high-level programming languages."),(0,o.kt)("p",null,"As a result, users can use Lua, Go, Java, Python, Node.js, and Wasm to write custom plugins on APISIX. By making development easy, it opens doors for APISIX plugin development."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we analyzed and compared API gateway products from multiple perspectives such as software engineers, open source protocols, performance evaluation, technology, and ecosystem. We can see that Apache APISIX is superior in many aspects, a pioneer in the API network."),(0,o.kt)("p",null,"Apache APISIX is not only an API gateway that can handle north-south traffic, but also has open source products such as APISIX Ingress Controller and Service Mesh."),(0,o.kt)("p",null,"It also provides APISIX-based enterprise-level products and SaaS products."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api7.ai/request-demo/"},"Try Apache APISIX and API7 Enterprise products today!")))}h.isMDXComponent=!0}}]);