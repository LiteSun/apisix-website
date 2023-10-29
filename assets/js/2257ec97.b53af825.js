"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=i,g=s["".concat(d,".").concat(p)]||s[p]||m[p]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79072:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={id:"debug-mode",title:"Debug mode",keywords:["API gateway","Apache APISIX","Debug mode"],description:"Guide for enabling debug mode in Apache APISIX."},r=void 0,l={unversionedId:"debug-mode",id:"debug-mode",isDocsHomePage:!1,title:"Debug mode",description:"Guide for enabling debug mode in Apache APISIX.",source:"@site/docs/apisix/debug-mode.md",sourceDirName:".",slug:"/debug-mode",permalink:"/docs/apisix/next/debug-mode",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/debug-mode.md",tags:[],version:"current",frontMatter:{id:"debug-mode",title:"Debug mode",keywords:["API gateway","Apache APISIX","Debug mode"],description:"Guide for enabling debug mode in Apache APISIX."},sidebar:"docs",previous:{title:"Plugin Develop",permalink:"/docs/apisix/next/plugin-develop"},next:{title:"Deployment modes",permalink:"/docs/apisix/next/deployment-modes"}},d=[{value:"Basic debug mode",id:"basic-debug-mode",children:[]},{value:"Advanced debug mode",id:"advanced-debug-mode",children:[{value:"Dynamically enable advanced debug mode",id:"dynamically-enable-advanced-debug-mode",children:[]}]}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use APISIX's debug mode to troubleshoot your configuration."),(0,i.kt)("h2",{id:"basic-debug-mode"},"Basic debug mode"),(0,i.kt)("p",null,"You can enable the basic debug mode by adding this line to your debug configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/debug.yaml"',title:'"conf/debug.yaml"'},"basic:\n  enable: true\n")),(0,i.kt)("p",null,"APISIX loads the configurations of ",(0,i.kt)("inlineCode",{parentName:"p"},"debug.yaml")," on startup and then checks if the file is modified on an interval of 1 second. If the file is changed, APISIX automatically applies the configuration changes."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For APISIX releases prior to v2.10, basic debug mode is enabled by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug = true")," in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),")."))),(0,i.kt)("p",null,"If you have configured two Plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-conn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," on the Route ",(0,i.kt)("inlineCode",{parentName:"p"},"/hello"),", you will receive a response with the header ",(0,i.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count")," when you enable the basic debug mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:1984/hello -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the debug information cannot be included in a response header (for example, when the Plugin is in a stream subsystem), the debug information will be logged as an error log at a ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," level."))),(0,i.kt)("h2",{id:"advanced-debug-mode"},"Advanced debug mode"),(0,i.kt)("p",null,"You can configure advanced options in debug mode by modifying your debug configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml"),")."),(0,i.kt)("p",null,"The following configurations are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Enables/disables hook debug trace. i.e. if enabled, will print the target module function's inputs or returned value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Module list name of the hook that enabled the debug trace.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"warn"),(0,i.kt)("td",{parentName:"tr",align:null},"Log level for input arguments & returned values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables printing input arguments.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables printing returned values.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A checker would check every second for changes to the configuration file. It will only check a file if the file was updated based on its last modification time."),(0,i.kt)("p",{parentName:"div"},"You can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"#END")," flag to indicate to the checker to only look for changes until that point."))),(0,i.kt)("p",null,"The example below shows how you can configure advanced options in debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/debug.yaml"',title:'"conf/debug.yaml"'},"hook_conf:\n  enable: false # Enables/disables hook debug trace\n  name: hook_phase # Module list name of the hook that enabled the debug trace\n  log_level: warn # Log level for input arguments & returned values\n  is_print_input_args: true # When set to `true` enables printing input arguments\n  is_print_return_value: true # When set to `true` enables printing returned values\n\nhook_phase: # Module function list, Name: hook_phase\n  apisix: # Referenced module name\n    - http_access_phase # Function names\uff1aArray\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")),(0,i.kt)("h3",{id:"dynamically-enable-advanced-debug-mode"},"Dynamically enable advanced debug mode"),(0,i.kt)("p",null,"You can also enable advanced debug mode only on particular requests."),(0,i.kt)("p",null,"The example below shows how you can enable it on requests with the header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-APISIX-Dynamic-Debug"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/debug.yaml"',title:'"conf/debug.yaml"'},"http_filter:\n  enable: true # Enable/disable advanced debug mode dynamically\n  enable_header_name: X-APISIX-Dynamic-Debug # Trace for the request with this header\n...\n#END\n")),(0,i.kt)("p",null,"This will enable the advanced debug mode only for requests like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 127.0.0.1:9090/hello --header 'X-APISIX-Dynamic-Debug: foo'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.http_access_phase")," module cannot be hooked for this dynamic rule as the advanced debug mode is enabled based on the request."))))}c.isMDXComponent=!0}}]);