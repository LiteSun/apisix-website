"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3937],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var i=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(25773),n=(a(27378),a(35318));const o={title:"iQIYI API Gateway Update and Practice with Apache APISIX",slug:"2021/09/07/iqiyi-usercase",author:"Cong He",keywords:["Apache APISIX","iQIYI","API Gateway","Service discovery"],description:"This article introduces why iQIYI abandoned Kong and chose the cloud native API gateway Apache APISIX as the company gateway and application scenarios.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E7%88%B1%E5%A5%87%E8%89%BA.png"},r=void 0,s={permalink:"/blog/2021/09/07/iqiyi-usercase",source:"@site/blog/2021/09/07/iQIYI-usercase.md",title:"iQIYI API Gateway Update and Practice with Apache APISIX",description:"This article introduces why iQIYI abandoned Kong and chose the cloud native API gateway Apache APISIX as the company gateway and application scenarios.",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:7.995,truncated:!0,authors:[{name:"Cong He"}],prevItem:{title:"Centralized Authentication with Apache APISIX and Advanced Tricks",permalink:"/blog/2021/09/07/how-to-use-apisix-auth"},nextItem:{title:"Python helps you develop Apache APISIX plugin",permalink:"/blog/2021/09/06/python-helps-you-quickly-with-apache-apisix-development"}},l={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",children:[],level:2},{value:"Apache APISIX Advantage",id:"apache-apisix-advantage",children:[{value:"Why Give Up Kong",id:"why-give-up-kong",children:[],level:3}],level:2},{value:"Architecture Based on Apache APISIX",id:"architecture-based-on-apache-apisix",children:[{value:"Scenario 1: Microservice Gateway",id:"scenario-1-microservice-gateway",children:[],level:3},{value:"Scenario 2: Basic Functions",id:"scenario-2-basic-functions",children:[],level:3},{value:"Scenario 3: Serviece Discovery",id:"scenario-3-serviece-discovery",children:[],level:3},{value:"Scenario 4: Directional Route",id:"scenario-4-directional-route",children:[],level:3},{value:"Scenario 5: Multi-site Multi-level Disaster Tolerance",id:"scenario-5-multi-site-multi-level-disaster-tolerance",children:[],level:3}],level:2},{value:"Problems Encountered during Migration",id:"problems-encountered-during-migration",children:[{value:"Result 1: SNI Compatibility Issues Not Supported in The Front End Were Resolved",id:"result-1-sni-compatibility-issues-not-supported-in-the-front-end-were-resolved",children:[],level:3},{value:"Result 2: A Large Number of API Routing Matching Problems Have Been Optimized",id:"result-2-a-large-number-of-api-routing-matching-problems-have-been-optimized",children:[],level:3},{value:"Result 3: The Limitation of ETCD Interface Is Solved",id:"result-3-the-limitation-of-etcd-interface-is-solved",children:[],level:3},{value:"Result 4: Performance Issues Optimized for The Number of ETCD Connections",id:"result-4-performance-issues-optimized-for-the-number-of-etcd-connections",children:[],level:3},{value:"To Be Optimized",id:"to-be-optimized",children:[],level:3}],level:2},{value:"Expectations for Apache APISIX",id:"expectations-for-apache-apisix",children:[],level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In this article, you can understand how iQIYI's technical team updates and integrates the company structure based on Apache APISIX gateway to create a brand-new gateway service.")),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"iQIYI has developed a gateway-skywalker, it is based on the secondary development of Kong, the current traffic is also relatively large, the daily peak of the gateway stock business million QPS, the number of API routes tens of thousands. But the product\u2019s shortcomings began to show up in the wake of its use."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Performance is not satisfactory, because the volume of business, every day received a lot of CPU IDLE too low alert"),(0,n.kt)("li",{parentName:"ol"},"The components of the system architecture depend on many"),(0,n.kt)("li",{parentName:"ol"},"The development cost of operation and maintenance is high")),(0,n.kt)("p",null,"After taking over the project this year, we started to do some research on gateway products in the light of the problems and dilemmas mentioned above, and then we found Apache APISIX."),(0,n.kt)("h2",{id:"apache-apisix-advantage"},"Apache APISIX Advantage"),(0,n.kt)("p",null,"Before choosing Apache APISIX, the iqiyi platform was already using Kong, but it was later abandoned."),(0,n.kt)("h3",{id:"why-give-up-kong"},"Why Give Up Kong"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646804680988-c0c833ee-79b1-4c9d-88ed-c158e9c374cd.png",alt:"Kong's disadvantage"})),(0,n.kt)("p",null,"Kong uses PostgreSQL to store its information, which is obviously not a good way. We also looked at the performance of Apache APISIX compared to Kong in the course of our research, and it\u2019s amazing that Apache Apisix is 10 times better than Kong in terms of performance optimization. We also compared some of the major gateway products, Apache APISIX\u2019s response latency is more than 50% lower than other gateways, and Apache APISIX can still run stably when the CPU reaches more than 70% ."),(0,n.kt)("p",null,"We also found out that Apache APISIX, like Kong, is based on the OpenResty technology, so the cost of technology migration is relatively low. And Apache APISIX is very adaptable and can be easily deployed in a variety of environments, including cloud computing platforms."),(0,n.kt)("p",null,"We also saw that Apache APISIX was very active throughout the open source project, handled the issues very quickly, and the cloud native architecture of the project was in line with our follow up plans, so we chose Apache APISIX."),(0,n.kt)("h2",{id:"architecture-based-on-apache-apisix"},"Architecture Based on Apache APISIX"),(0,n.kt)("p",null,"The overall architecture of iQIYI Gateway is shown below, including domain name, gateway to service instance and monitoring alarm. DPVS is an open source project within the company based on LVS, Hubble monitoring alerts is also a deep secondary development based on an open source project, and the Consul area has been optimized for performance and high availability."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646792292257-8907ca46-0a08-4659-8549-810bc5fa788a.png",alt:"iQIYI Gateway architecture"})),(0,n.kt)("h3",{id:"scenario-1-microservice-gateway"},"Scenario 1: Microservice Gateway"),(0,n.kt)("p",null,"About the gateway this piece, simple from the control surface and the data surface introduce."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646791464287-ba803227-7bd0-4134-8709-3bea19ba9432.png",alt:"Gateway details"})),(0,n.kt)("p",null,"The data plane is mainly oriented to the front-end users, and the whole architecture from LB to Gateway is multi-location and multi-link disaster deployment."),(0,n.kt)("p",null,"From the perspective of control surface, because of the multi-cluster composition, there will be a micro-service platform to do cluster management and service management. Microservice platforms allow users to experience services as one-stop-shops that expose them to immediate use without having to submit a work order. The back end of the control panel will have Gateway Controller, which controls the creation of all apis, plug-ins, and related configurations, and Service Controller, which controls Service registration and health checks."),(0,n.kt)("h3",{id:"scenario-2-basic-functions"},"Scenario 2: Basic Functions"),(0,n.kt)("p",null,"At present, the API architecture based on Apache APISIX has realized some basic functions, such as current limiting, authentication, alarm, monitoring and so on."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646733199348-15d96c96-a64f-42b1-b7da-cd3c61fd7de9.png",alt:"Micro service platform function"})),(0,n.kt)("p",null,"First is the HTTPS section, iQIYI for security reasons, certificates and keys are not stored on the gateway machine, will be placed on a dedicated remote server. We didn\u2019t support this when we used Kong, we used the prefix Nginx to do HTTPS Offload, and after the migration to Apache APISIX, we implemented this feature on Apache APISIX, which is a layer less forwarding over the link."),(0,n.kt)("p",null,"In the current limiting function, in addition to the basic current limiting, but also added a precise current limiting and user-specific granularity of the current limiting. Authentication function, in addition to the basic API Key authentication, for specialized services also provide the relevant Passport authentication. For black product filtering, access to the company\u2019s WAF Security Cloud."),(0,n.kt)("p",null,"The monitoring feature is currently implemented using the Apache APISIX plug-in Prometheus, and the metrics data will interface directly with the company\u2019s monitoring system. Logging and call chain analysis is also supported through Apache APISIX."),(0,n.kt)("h3",{id:"scenario-3-serviece-discovery"},"Scenario 3: Serviece Discovery"),(0,n.kt)("p",null,"With regard to the above-mentioned service discovery, it is mainly through the service center to register the service to the Consul cluster, and then through the DNS service discovery to do dynamic updates, qae is a micro-service platform in our company. A simple example illustrates the general flow of updating a backend application instance."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646733434679-ecb6431e-64c8-4e55-b01f-9cb117e2e523.png",alt:"Service discovery process"})),(0,n.kt)("p",null,"When the instance changes, the corresponding node is first unlogged from Consul and a request to update the DNS cache is sent to the gateway through the API Gateway Controller. After the cache update is successful, the Controller then feeds back to the QAE platform to stop the associated back-end application node and avoid reforwarding traffic to the offline node."),(0,n.kt)("h3",{id:"scenario-4-directional-route"},"Scenario 4: Directional Route"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646733411551-50fd722b-b4af-4674-a297-08350d1252d2.png",alt:"Directional route"})),(0,n.kt)("p",null,"The gateway is multi-location deployment, build a set of multi-location backup link in advance, at the same time suggest the user back-end service is also multi-location deployment nearby. Then the user creates an API service on the Skywalker Gateway platform, the Controller deploys the API routing on the entire DC gateway cluster, and the business domain defaults to CNAME on the unified gateway domain name."),(0,n.kt)("p",null,"It provides multi-local access, disaster preparedness and handoff capability for business directly, and also supports user-defined resolution routing. For the user\u2019s own fault-cut flow, blue-green deployment, canary release  needs, users can use the uuid domain name to customize the resolution of routing configuration, but also to support the back-end service discovery custom scheduling."),(0,n.kt)("h3",{id:"scenario-5-multi-site-multi-level-disaster-tolerance"},"Scenario 5: Multi-site Multi-level Disaster Tolerance"),(0,n.kt)("p",null,"As we mentioned earlier, at the business level we have business proximity and disaster preparedness requirements for large volumes of traffic, large clusters, and a wide audience of clients."),(0,n.kt)("p",null,"For disaster preparedness, in addition to multi-link backup, but also consider multi-level multi-node problem, fault node closer to the client, the greater the impact of business and traffic."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If it is the farthest back-end service node failure, depending on the health check mechanism of the gateway and the service center, it can realize the fuse of the fault single node or the switch of the fault DC, and the influence scope is limited to the specified service, the user is not aware."),(0,n.kt)("li",{parentName:"ol"},"If it is a gateway level fault, we need to rely on the health check mechanism of L4 DPVS, fusing the fault gateway node, the influence range is small, the user is not aware."),(0,n.kt)("li",{parentName:"ol"},"If the fault points can not be repaired by the above-mentioned fusing measures, it is necessary to rely on the multi-point availability dialing of the domain name granularity to realize the automatic fault switching at the domain name resolution level, which is a relatively slow way to repair the fault, affect the business much, the user can feel.")),(0,n.kt)("h2",{id:"problems-encountered-during-migration"},"Problems Encountered during Migration"),(0,n.kt)("p",null,"During our migration practice from Kong to Apache APISIX, we addressed and optimized some known architectural issues, but also encountered some new ones."),(0,n.kt)("h3",{id:"result-1-sni-compatibility-issues-not-supported-in-the-front-end-were-resolved"},"Result 1: SNI Compatibility Issues Not Supported in The Front End Were Resolved"),(0,n.kt)("p",null,"Most of the frontend is now supported for SNI, but you\u2019ll also encounter a few frontend that won\u2019t pass the hostname during SSL. At present, we have done a compatibility for this situation, using port matching method to obtain the relevant certificates."),(0,n.kt)("h3",{id:"result-2-a-large-number-of-api-routing-matching-problems-have-been-optimized"},"Result 2: A Large Number of API Routing Matching Problems Have Been Optimized"),(0,n.kt)("p",null,"As I said before, we currently have more than 9,000 API services running directly online, and may increase in the future. In order to solve this problem, we made some performance optimization, according to the API to decide whether to match the domain name or the path first."),(0,n.kt)("h3",{id:"result-3-the-limitation-of-etcd-interface-is-solved"},"Result 3: The Limitation of ETCD Interface Is Solved"),(0,n.kt)("p",null,"After accessing Apache APISIX, the ETCD interface limitation has also been resolved and the 4M limit has now been lifted."),(0,n.kt)("h3",{id:"result-4-performance-issues-optimized-for-the-number-of-etcd-connections"},"Result 4: Performance Issues Optimized for The Number of ETCD Connections"),(0,n.kt)("p",null,"Currently, every worker at Apache APISIX is connected to the ETCD, and every listening directory is going to make a connection. For example, a physical machine is 80core, with 10 listening directories and 800 connections on a single gateway server. With a gateway cluster of 10,8,000 connections is a lot of pressure on the ETCD. The optimization is to take one worker and listen to a limited set of necessary directories and share the information with the rest of the workers."),(0,n.kt)("h3",{id:"to-be-optimized"},"To Be Optimized"),(0,n.kt)("p",null,"In addition to the above problems, there are also a number of issues are being optimized."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A number of API issues, even if APISIX is supported, we need to consider other component-dependent bottlenecks. Such as the ETCD, Prometheus Monitoring and logging services described above. So in the future, we may adopt the two ways of large cluster sharing and small cluster independence to mix the deployment of business, for example, some important business we will deploy in small clusters."),(0,n.kt)("li",{parentName:"ol"},"With respect to the Prometheus monitoring metric, we will continue to scale down and optimize the DNS service to find more.")),(0,n.kt)("h2",{id:"expectations-for-apache-apisix"},"Expectations for Apache APISIX"),(0,n.kt)("p",null,"We hope that in future development updates Apache APISIX will not only support more functionality, but also maintain performance efficiency and stability over time."))}u.isMDXComponent=!0}}]);