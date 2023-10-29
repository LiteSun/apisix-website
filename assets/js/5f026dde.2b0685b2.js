"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88417:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"Stream Proxy"},s=void 0,p={unversionedId:"stream-proxy",id:"version-3.2/stream-proxy",isDocsHomePage:!1,title:"Stream Proxy",description:"TCP is the protocol for many popular applications and services, such as LDAP, MySQL, and RTMP. UDP (User Datagram Protocol) is the protocol for many popular non-transactional applications, such as DNS, syslog, and RADIUS.",source:"@site/docs-apisix_versioned_docs/version-3.2/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/docs/apisix/3.2/stream-proxy",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/stream-proxy.md",tags:[],version:"3.2",frontMatter:{title:"Stream Proxy"},sidebar:"version-3.2/docs",previous:{title:"Router radixtree",permalink:"/docs/apisix/3.2/router-radixtree"},next:{title:"gRPC Proxy",permalink:"/docs/apisix/3.2/grpc-proxy"}},i=[{value:"How to enable stream proxy?",id:"how-to-enable-stream-proxy",children:[]},{value:"How to set route?",id:"how-to-set-route",children:[]},{value:"More route match options",id:"more-route-match-options",children:[]},{value:"Accept TLS over TCP connection",id:"accept-tls-over-tcp-connection",children:[]},{value:"Proxy to TLS over TCP upstream",id:"proxy-to-tls-over-tcp-upstream",children:[]}],l={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TCP is the protocol for many popular applications and services, such as LDAP, MySQL, and RTMP. UDP (User Datagram Protocol) is the protocol for many popular non-transactional applications, such as DNS, syslog, and RADIUS."),(0,a.kt)("p",null,"APISIX can dynamically load balancing TCP/UDP proxy. In Nginx world, we call TCP/UDP proxy to stream proxy, we followed this statement."),(0,a.kt)("h2",{id:"how-to-enable-stream-proxy"},"How to enable stream proxy?"),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_proxy")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", specify a list of addresses that require dynamic proxy.\nBy default, no stream proxy is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp: # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.enable_admin")," is true, both HTTP and stream proxy are enabled with the configuration above."),(0,a.kt)("p",null,"If you have set the ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_admin")," to false, and need to enable both HTTP and stream proxy, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"only")," to false:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  enable_admin: false\n  stream_proxy: # TCP/UDP proxy\n    only: false\n    tcp: # TCP proxy address list\n      - 9100\n")),(0,a.kt)("h2",{id:"how-to-set-route"},"How to set route?"),(0,a.kt)("p",null,"Here is a mini example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"It means APISIX will proxy the request to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the client remote address is ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,a.kt)("p",null,"For more use cases, please take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/stream-node/sanity.t"},"test case"),"."),(0,a.kt)("h2",{id:"more-route-match-options"},"More route match options"),(0,a.kt)("p",null,"And we can add more options to match a route. Currently stream route configuration supports 3 fields for filtering:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"server_addr: The address of the APISIX server that accepts the L4 stream connection."),(0,a.kt)("li",{parentName:"ul"},"server_port: The port of the APISIX server that accepts the L4 stream connection."),(0,a.kt)("li",{parentName:"ul"},"remote_addr: The address of client from which the request has been made.")),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"It means APISIX will proxy the request to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," when the server address is ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and the server port is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"2000"),"."),(0,a.kt)("p",null,"Let's take another real world example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Put this config inside ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100 # by default uses 0.0.0.0\n      - "127.0.0.10:9101"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now run a mysql docker container and expose port 3306 to the host"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=toor -p 3306:3306 -d mysql\n# check it using a mysql client that it works\n$ mysql --host=127.0.0.1 --port=3306 -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 25\n...\nmysql>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we are going to create a stream route with server filtering:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.10",\n    "server_port": 9101,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:3306": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",{parentName:"li"},"It only forwards the request to the mysql upstream whenever a connection is received at APISIX server ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.10")," and port ",(0,a.kt)("inlineCode",{parentName:"p"},"9101"),". Let's test that behaviour:")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Making a request to 9100 (stream proxy port enabled inside config.yaml), filter matching fails."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mysql --host=127.0.0.1 --port=9100 -u root -p\nEnter password:\nERROR 2013 (HY000): Lost connection to MySQL server at 'reading initial communication packet', system error: 2\n\n")),(0,a.kt)("p",{parentName:"li"},"Instead making a request to the APISIX host and port where the filter matching succeeds:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql --host=127.0.0.10 --port=9101 -u root -p\nEnter password:\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 26\n...\nmysql>\n")))),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/admin-api#stream-route"},"Admin API's Stream Route section")," for the complete options list."),(0,a.kt)("h2",{id:"accept-tls-over-tcp-connection"},"Accept TLS over TCP connection"),(0,a.kt)("p",null,"APISIX can accept TLS over TCP connection."),(0,a.kt)("p",null,"First of all, we need to enable TLS for the TCP address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - addr: 9100\n        tls: true\n")),(0,a.kt)("p",null,"Second, we need to configure certificate for the given SNI.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/admin-api#ssl"},"Admin API's SSL section")," for how to do.\nmTLS is also supported, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/mtls#protect-route"},"Protect Route")," for how to do."),(0,a.kt)("p",null,"Third, we need to configure a stream route to match and proxy it to the upstream:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"When the connection is TLS over TCP, we can use the SNI to match a route, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "sni": "a.test.com",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:5991": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"In this case, a connection handshaked with SNI ",(0,a.kt)("inlineCode",{parentName:"p"},"a.test.com")," will be proxied to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5991"),"."),(0,a.kt)("h2",{id:"proxy-to-tls-over-tcp-upstream"},"Proxy to TLS over TCP upstream"),(0,a.kt)("p",null,"APISIX also supports proxying to TLS over TCP upstream."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "scheme": "tls",\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"By setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme"),' to "tls", APISIX will do TLS handshake with the upstream.'),(0,a.kt)("p",null,'When the client is also speaking TLS over TCP, the SNI from the client will pass through to the upstream. Otherwise, a dummy SNI "apisix_backend" will be used.'))}c.isMDXComponent=!0}}]);