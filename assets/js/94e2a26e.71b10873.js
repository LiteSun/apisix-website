"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7297],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(25773),a=(n(27378),n(35318));const i={title:"Geo-routing with Apache APISIX",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["Georouting","GeoIP","Nginx"],description:"Apache APISIX, the Apache-led API Gateway, comes out of the box with many plugins to implement your use case. Sometimes, however, the plugin you're looking for is not available. While creating your own is always possible, it's sometimes necessary. Today, I'll show you how to route users according to their location without writing a single line of Lua code.",tags:["Ecosystem"],image:"https://repository-images.githubusercontent.com/560493734/4073382d-d3de-42b8-aa58-d0a139978768"},r=void 0,l={permalink:"/blog/2022/11/09/georouting-apisix",source:"@site/blog/2022/11/09/georouting-apisix.md",title:"Geo-routing with Apache APISIX",description:"Apache APISIX, the Apache-led API Gateway, comes out of the box with many plugins to implement your use case. Sometimes, however, the plugin you're looking for is not available. While creating your own is always possible, it's sometimes necessary. Today, I'll show you how to route users according to their location without writing a single line of Lua code.",date:"2022-11-09T00:00:00.000Z",formattedDate:"November 9, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.595,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"A poor man's API",permalink:"/blog/2022/11/23/poor-man-api"},nextItem:{title:"Event-Driven APIs with Webhook and API Gateway",permalink:"/blog/2022/11/07/webhook-api-gateway-event-driven-apis"}},s={authorsImageUrls:[void 0]},p=[{value:"Why geo-routing?",id:"why-geo-routing",children:[],level:2},{value:"Setting up Apache APISIX for geo-routing",id:"setting-up-apache-apisix-for-geo-routing",children:[],level:2},{value:"Testing geo-routing",id:"testing-geo-routing",children:[],level:2},{value:"Bonus: logs and monitoring",id:"bonus-logs-and-monitoring",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX, the Apache-led API Gateway, comes out of the box with many plugins to implement your use case. Sometimes, however, the plugin you're looking for is not available. While creating your own is always possible, it's sometimes necessary. Today, I'll show you how to route users according to their location without writing a single line of Lua code.")),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/georouting-apisix/"})),(0,a.kt)("h2",{id:"why-geo-routing"},"Why geo-routing?"),(0,a.kt)("p",null,"Geo-routing is to forward HTTP requests based on a user's physical location, inferred from their IP. There are many reasons to do that, and here is a couple of them."),(0,a.kt)("p",null,"Note that I'll use the country as the location-dependent factor, but any smaller or bigger scale works. It's the scale I'm most familiar with - and probably the most useful."),(0,a.kt)("p",null,"First, most applications are not meant to be geo-dependent. The app your team has just developed probably only makes sense in a single country, if not a single region. In this case, geo-routing will never be a problem."),(0,a.kt)("p",null,"However, some apps do grow along with the business. When it happens, the need for ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"},"internationalization and localization")," appears. It's the app's responsibility to handle such geo-dependent factors. ",(0,a.kt)("abbr",{title:"internationalization"},"i18n")," should be handled natively by the tech stack, ",(0,a.kt)("em",{parentName:"p"},"e.g."),", in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/intl/index.html"},"Java"),". ",(0,a.kt)("abbr",{title:"localization"},"l10n")," is more ",(0,a.kt)("em",{parentName:"p"},"ad hoc")," but shouldn't be a problem either."),(0,a.kt)("p",null,"Issues arise when business rules diverge from country to country, chiefly because of laws. Other reasons include a partnership. Imagine an e-commerce shop that has branches in many countries. You may choose the delivery partner, but depending on the country, available partners are different. While keeping a single codebase is always a wise choice, even the best design can only slow down the chaos from many business rules. At one point, splitting the God app into multiple country-dependent apps is inevitable."),(0,a.kt)("p",null,"Sometimes, you don't even have a choice. A country decides you have to store your database on their territory, so you cannot share it anymore and have to split both storage and app. I witnessed it first-hand with Russia in 2015: we had to deploy a custom version of our e-commerce application just for Russia."),(0,a.kt)("p",null,"Finally, you may also want to deploy a new app version for a single country only. In this case, you should monitor not (only) technical metrics but business ones over time. Then you'll decide whether to expand the new version to other countries based on them or work more on the latest version before deploying further."),(0,a.kt)("h2",{id:"setting-up-apache-apisix-for-geo-routing"},"Setting up Apache APISIX for geo-routing"),(0,a.kt)("p",null,"Though I'm a developer by trade (and passion!), I'm pragmatic. I'm convinced that every line of code I don't write is a line I don't need to maintain. Apache APISIX doesn't offer geo-routing, but it's built on top of Nginx. The latter provides a ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_geoip_module.html"},"geo-routing")," feature, albeit not by default."),(0,a.kt)("p",null,"The following instructions are based on Docker to allow everybody to follow them regardless of their platform."),(0,a.kt)("p",null,"We need several steps to set up geo-routing on Apache APISIX:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a custom Docker image",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add the required library module"),(0,a.kt)("li",{parentName:"ul"},"Add its dependencies"))),(0,a.kt)("li",{parentName:"ol"},"Configure Apache APISIX"),(0,a.kt)("li",{parentName:"ol"},"Enjoy!")),(0,a.kt)("p",null,"Nginx geo-routing requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx_http_geoip_module")," module. But if we try to install it via a package manager, it also installs ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),", which conflicts with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," instance embedded in Apache APISIX. As we only need the library, we can get it from the relevant Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM nginx:1.21.4 as geoiplib\n\nFROM apache/apisix:2.15.0-debian\n\nCOPY --from=geoiplib /usr/lib/nginx/modules/ngx_http_geoip_module.so \\      #1\n                     /usr/local/apisix/modules/ngx_http_geoip_module.so\n")),(0,a.kt)("p",null,"Copy the library from the ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," image to the ",(0,a.kt)("inlineCode",{parentName:"p"},"apache/apisix")," one"),(0,a.kt)("p",null,"The regular package install installs all the dependencies, even the ones we don't want. Because we only copy the library, we need to install the dependencies manually. It's straightforward:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN apt-get update \\\n && apt-get install -y libgeoip1\n")),(0,a.kt)("p",null,"Nginx offers two ways to activate a module: via the command line or dynamically in the ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx.conf")," configuration file. The former is impossible since we're not in control, so the latter is our only option. To update the Nginx config file with the module at startup time, Apache APISIX offers a hook in its config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'nginx_config:\n  main_configuration_snippet: |\n    load_module     "modules/ngx_http_geoip_module.so";\n')),(0,a.kt)("p",null,"The above will generate the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Configuration File - Nginx Server Configs\n# This is a read-only file, do not try to modify it.\nmaster_process on;\n\nworker_processes auto;\nworker_cpu_affinity auto;\n\n# main configuration snippet starts\nload_module     "modules/ngx_http_geoip_module.so";\n\n...\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_geoip_module.html"},"GeoIP module")," relies on the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.maxmind.com/geoip/geolite2-free-geolocation-data"},"Maxmind GeoIP database"),". We installed it implicitly in the previous step; we have to configure the module to point to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  http_configuration_snippet: |\n    geoip_country   /usr/share/GeoIP/GeoIP.dat;\n")),(0,a.kt)("p",null,"From this point on, every request going through Apache APISIX is geo-located. It translates as Nginx adding additional variables. As per the documentation:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The following variables are available when using this database:"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"$geoip_country_code"),"\ntwo-letter country code, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},'"RU"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"US"'),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"$geoip_country_code3"),"\nthree-letter country code, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},'"RUS"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"USA"'),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"$geoip_country_name"),"\ncountry name, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},'"Russian Federation"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"United States"'),"."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_geoip_module.html"},"Module ngx_http_geoip_module"))),(0,a.kt)("h2",{id:"testing-geo-routing"},"Testing geo-routing"),(0,a.kt)("p",null,"You may believe that the above works - and it does, but I'd like to prove it."),(0,a.kt)("p",null,"I've created a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/apisix-georouting"},"dedicated project")," whose architecture is simple:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apache APISIX configured as above"),(0,a.kt)("li",{parentName:"ul"},"Two upstreams, one in English and one in French")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'upstreams:\n  - id: 1\n    type: roundrobin\n    nodes:\n      "english:8082": 1\n  - id: 2\n    type: roundrobin\n    nodes:\n      "french:8081": 1\nroutes:\n  - uri: /\n    upstream_id: 1\n  - uri: /\n    upstream_id: 2\n#END\n')),(0,a.kt)("p",null,"With this snippet, every user accesses the English upstream. I intend to direct users located in France to the French upstream and the rest to the English one. For this, we need to configure the second route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /\n    upstream_id: 2\n    vars: [["geoip_country_code", "==", "FR"]]   #1\n    priority: 5                                  #2\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The magic happens here; see below."),(0,a.kt)("li",{parentName:"ol"},"By default, route matching rules are evaluated in arbitrary order. We need this rule to be evaluated first. So we increase the priority - the default is 10.")),(0,a.kt)("p",null,"Most Apache APISIX users are used to matching on routes, methods, and domains, but there's ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/#uri-request-parameters"},"more to it"),". One can match on Nginx variables, as shown above. In our case, the route matches if the ",(0,a.kt)("inlineCode",{parentName:"p"},"geoip_country_code")," variable is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},'"FR"'),"."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"vars")," values readability over power. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_func(vars)")," attribute if you need more complex logic."),(0,a.kt)("p",null,'We can still not test our feature at this point, as we would need to change our IP address. Fortunately, it\'s possible to cheat (a bit), and the cheat is helpful in other scenarios. Imagine that Apache APISIX is not directly exposed to the Internet but sits behind a reverse proxy. There might be multiple reasons for this: "history", a single RP pointing to multiple gateways under the responsibility of different teams, etc.'),(0,a.kt)("p",null,"In this case, the client IP would be the RP's proxy. To propagate the original client IP, the agreed-upon method is to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," request HTTP header:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The X-Forwarded-For (XFF) request header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through a proxy server."),(0,a.kt)("p",{parentName:"blockquote"},"When a client connects directly to a server, the client's IP address is sent to the server (and is often written to server access logs). But if a client connection passes through any forward or reverse proxies, the server only sees the final proxy's IP address, which is often of little use. That's especially true if the final proxy is a load balancer which is part of the same installation as the server. So, to provide a more-useful client IP address to the server, the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-For")," request header is used."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"},"X-Forwarded-For"))),(0,a.kt)("p",null,"The Nginx module offers this configuration but restricts it to an IP range. For testing, we configure it to ",(0,a.kt)("em",{parentName:"p"},"any")," IP; in production, we should set it to the RP IP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  http:\n    geoip_proxy     0.0.0.0/0;\n")),(0,a.kt)("p",null,"We can finally test the setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:9080\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "lang": "en",\n  "message": "Welcome to Apache APISIX"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "X-Forwarded-For: 212.27.48.10" localhost:9080    #1\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"212.27.48.10")," is a French IP address")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "lang": "fr",\n  "message": "Bienvenue \xe0 Apache APISIX"\n}\n')),(0,a.kt)("h2",{id:"bonus-logs-and-monitoring"},"Bonus: logs and monitoring"),(0,a.kt)("p",null,"It's straightforward to use the new variable in the Apisix logs. I'd advise it for two reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At the beginning to make sure everything is ok"),(0,a.kt)("li",{parentName:"ul"},"In the long run, to monitor traffic, ",(0,a.kt)("em",{parentName:"li"},"e.g."),", send it to Elasticsearch and display it on a Kibana dashboard")),(0,a.kt)("p",null,"Just configure it accordingly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'nginx_config:\n  http:\n    access_log_format: "$remote_addr - $remote_user [$time_local][$geoip_country_code] $http_host \\"$request\\" $status $body_bytes_sent $request_time \\"$http_referer\\" \\"$http_user_agent\\" $upstream_addr $upstream_status $upstream_response_time"\n')),(0,a.kt)("p",null,"Keep the default log variables and add the country code"),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Geo-routing is a requirement for successful apps and businesses. Apache APISIX doesn't provide it out-of-the-box. In this post, I showed how it could still be straightforward to set it up using the power of Nginx."),(0,a.kt)("p",null,"You can find the source code for this post on GitHub."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To go further:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_geoip_module.html"},"Module ngx_http_geoip_module")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.nginx.com/resources/wiki/extending/converting/"},"Converting Static Modules to Dynamic Modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/customize-nginx-configuration/"},"Customize Nginx configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/maxmind/geoipupdate"},"GeoIP Update"))))}c.isMDXComponent=!0}}]);