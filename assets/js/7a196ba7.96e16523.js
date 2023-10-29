"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7968],{35318:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=p(a),m=r,c=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49306:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const l={title:"Cloud Monitoring with Datadog in Apache APISIX",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Datadog","Observability","Cloud Monitoring"],description:"This article introduces how the cloud-native API gateway Apache APISIX uses the datadog plugin to integrate with the Datadog monitoring platform.",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/Datadog.png"},i=void 0,o={permalink:"/blog/2021/11/12/apisix-datadog",source:"@site/blog/2021/11/12/apisix-datadog.md",title:"Cloud Monitoring with Datadog in Apache APISIX",description:"This article introduces how the cloud-native API gateway Apache APISIX uses the datadog plugin to integrate with the Datadog monitoring platform.",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.685,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"Weekly Report (Sep 1 - Sep 14)",permalink:"/blog/2021/11/16/weekly-report-1114"},nextItem:{title:"The observability of Apache APISIX",permalink:"/blog/2021/11/04/skywalking"}},s={authorsImageUrls:[void 0]},p=[{value:"How APISIX-Datadog plugin works",id:"how-apisix-datadog-plugin-works",children:[],level:2},{value:"Steps to Run Datadog Agent",id:"steps-to-run-datadog-agent",children:[],level:2},{value:"How to Use Datadog with Apache APISIX",id:"how-to-use-datadog-with-apache-apisix",children:[{value:"Activate the APISIX-Datadog plugin",id:"activate-the-apisix-datadog-plugin",children:[],level:3},{value:"Custom Configuration",id:"custom-configuration",children:[{value:"Metadata Schema",id:"metadata-schema",children:[],level:4},{value:"Plugin Schema",id:"plugin-schema",children:[],level:4}],level:3},{value:"Deactivate the APISIX-Datadog plugin",id:"deactivate-the-apisix-datadog-plugin",children:[],level:3}],level:2}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Apache APISIX recently released a new plugin: ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/next/plugins/datadog"},"APISIX-Datadog"),", to provide a deeper integration with Datadog. This article introduces the APISIX-Datadog Plugin and its capabilities.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636955062917-28911d71-0d56-48ec-85e5-a7908195da2f.png",alt:"cover picture"})),(0,r.kt)("p",null,"As the complexity of IT products and consumer-facing application development increases, monitoring becomes an integral part of any application delivery. Additionally, to meet the endless demand of rapid upgrade cycles while ensuring stability, streamlined performance and keeping a perfect balance between service level indicators (SLI) with Service-level objectives (SLO) and Service-level agreement (SLA) - effective monitoring is immensely important."),(0,r.kt)("p",null,"As a Cloud API Management Product, ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," decouples observability concerns from the application, which gives the developers an advantage of building applications focusing just on the business logic while Apache APISIX will take care of observability for the platform of their choice."),(0,r.kt)("p",null,"Apache APISIX recently released a new plugin: ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/next/plugins/datadog"},"APISIX-Datadog"),", to provide a deeper integration with Datadog. This article introduces the APISIX-Datadog Plugin and its capabilities."),(0,r.kt)("h2",{id:"how-apisix-datadog-plugin-works"},"How APISIX-Datadog plugin works"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636685752757-d02d8305-2a68-4b3e-b2cc-9e5410c8bf11.png",alt:"APISIX-Datadog plugin Architecture"})),(0,r.kt)("p",null,"The APISIX-Datadog plugin pushes its custom metrics to the DogStatsD server, comes bundled with Datadog agent over the UDP connection. DogStatsD basically is an implementation of StatsD protocol. It collects the custom metrics for Apache APISIX agent, aggregates it into a single data point and sends it to the configured Datadog server. To learn more about DogStatsD, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/developers/dogstatsd/?tab=hostagent"},"DogStatsD documentation"),"."),(0,r.kt)("p",null,"When APISIX-Datadog is activated, Apache APISIX agent exports the following metrics to DogStatsD server for every request response cycle:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"StatsD Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of requests received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"Time taken to process the request (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"Time taken since proxying the request to the upstream server till a response is received (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APISIX Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"Time taken by APISIX agent to process the request (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"Request body size in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Egress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"Response body size in bytes.")))),(0,r.kt)("p",null,"The metrics will be sent to the DogStatsD agent with the following tags. If there is no suitable value for any particular tag, the tag will simply be omitted."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name specified in the route schema definition. If not present, it will fall back to the route id value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_id"),(0,r.kt)("td",{parentName:"tr",align:null},"If a route has been created with the abstraction of service, the particular service id will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"If the route has a linked consumer, the consumer Username will be added as a tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"IP of the Upstream balancer that has processed the current request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_status"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response status code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Scheme that has been used to make requests, such as HTTP, gRPC, gRPCs etc.")))),(0,r.kt)("p",null,"The plugin maintains a buffer with a timer. When the timer expires, APISIX-Datadog plugin flashes the buffered metrics as a batch to the locally run dogstatsd server. This approach is less resource-hungry (though it might be insignificant as UDP sockets are very lightweight) by reusing the same UDP socket and doesn't overload the network all the time as the timer can be configured."),(0,r.kt)("h2",{id:"steps-to-run-datadog-agent"},"Steps to Run Datadog Agent"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you are already using Datadog inside your infrastructure, you must have a datadog agent installed in your systems. It may either be a docker container, pod or binary for a respective package manager. In this case, you are good to go. Just make sure port 8125/udp is allowed through the firewall (if any) i.e more specifically, the Apache APISIX agent can reach port 8125 of the datadog agent. You may skip this subsection.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To learn more about how to install a full-fledged datadog agent, visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/agent/"},"here"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are new to Datadog"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"First create an account by visiting ",(0,r.kt)("a",{parentName:"li",href:"http://www.datadoghq.com"},"www.datadoghq.com"),"."),(0,r.kt)("li",{parentName:"ol"},"Generate an API Key.\n",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1636685007445-05f134fd-e80a-4173-b1d7-f0a118087998.png",alt:"Generate an API Key"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"APISIX-Datadog plugin requires only the dogstatsd component of ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog/agent")," as the plugin asynchronously send metrics to the dogstatsd server following the statsd protocol over standard UDP socket. That's why APISIX recommends using the standalone ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog/dogstatsd")," image instead of using the full agent. It's extremely lightweight (only ~11 MB in size) compared to ~2.8GB of ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog/agent")," image."))),(0,r.kt)("p",null,"To run it as a container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# pull the latest image\ndocker pull datadog/dogstatsd:latest\n# run a detached container\ndocker run -d --name dogstatsd-agent -e DD_API_KEY=<Your API Key from step 2> -p 8125:8125/udp  datadog/dogstatsd\n")),(0,r.kt)("p",null,"If you are using Kubernetes in your production environment, you can deploy ",(0,r.kt)("inlineCode",{parentName:"p"},"dogstatsd")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Daemonset")," or as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Multi-Container Pod")," alongside Apache APISIX agent."),(0,r.kt)("h2",{id:"how-to-use-datadog-with-apache-apisix"},"How to Use Datadog with Apache APISIX"),(0,r.kt)("h3",{id:"activate-the-apisix-datadog-plugin"},"Activate the APISIX-Datadog plugin"),(0,r.kt)("p",null,"The following is an example on how to activate the datadog plugin for a specific route. We are assuming your ",(0,r.kt)("inlineCode",{parentName:"p"},"dogstatsd")," agent is already up an running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# enable plugin for a specific route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "datadog": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Now any requests to endpoint uri ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," will generate the above metrics and push it to local DogStatsD server of the datadog agent."),(0,r.kt)("h3",{id:"custom-configuration"},"Custom Configuration"),(0,r.kt)("p",null,"In default configuration, the plugin expects the dogstatsd service to be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8125"),". If you wish to update the config, please update the plugin metadata:"),(0,r.kt)("h4",{id:"metadata-schema"},"Metadata Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"127.0.0.1"'),(0,r.kt)("td",{parentName:"tr",align:null},"The DogStatsD server host address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"8125"),(0,r.kt)("td",{parentName:"tr",align:null},"The DogStatsD server host port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix for all the custom metrics sent by APISIX agent. Useful for finding entities for metric graph. e.g. (apisix.request.counter)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"constant_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'["source:apisix"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Static tags embedded into generated metrics. Useful for grouping metric over certain signals.")))),(0,r.kt)("p",null,"To know more about how to effectively write tags, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/getting_started/tagging/#defining-tags"},"here")),(0,r.kt)("p",null,"Make a request to /apisix/admin/plugin_metadata endpoint with the updated metadata as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/datadog -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "host": "127.0.0.1",\n    "port": 8125,\n    "constant_tags": [\n        "source:apisix",\n        "service:custom"\n    ],\n    "namespace": "apisix"\n}\'\n')),(0,r.kt)("h4",{id:"plugin-schema"},"Plugin Schema"),(0,r.kt)("p",null,"Similarly, there are few attributes that can be tweaked while enabling the plugin."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Max buffer size of each batch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum age in seconds when the buffer will be flushed if inactive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum age in seconds of the oldest entry in a batch before the batch must be processed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of retries if one entry fails to reach dogstatsd server")))),(0,r.kt)("p",null,"As all the fields are optional and if no attributes are set, the datadog plugin gets instantiated with the default values. To update any attribute, just update the required route, service or consumer with the updated attribute value. For example, the code below modifies the maximum buffer size of each batch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\'{\n...\n"plugins": {\n    "datadog": {\n        "batch_max_size": 10\n    }\n}\n... }\'\n')),(0,r.kt)("h3",{id:"deactivate-the-apisix-datadog-plugin"},"Deactivate the APISIX-Datadog plugin"),(0,r.kt)("p",null,"Now, to deactivate the plugin, simply remove the corresponding json configuration in the plugin configuration to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog"),". APISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# disable plugin for a route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);