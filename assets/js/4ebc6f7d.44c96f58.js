"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52328],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50660:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={title:"ApisixClusterConfig",keywords:["APISIX ingress","Apache APISIX","ApisixClusterConfig"],description:"Guide to using ApisixClusterConfig custom Kubernetes resource."},o=void 0,s={unversionedId:"concepts/apisix_cluster_config",id:"version-1.6.0/concepts/apisix_cluster_config",isDocsHomePage:!1,title:"ApisixClusterConfig",description:"Guide to using ApisixClusterConfig custom Kubernetes resource.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/concepts/apisix_cluster_config.md",sourceDirName:"concepts",slug:"/concepts/apisix_cluster_config",permalink:"/docs/ingress-controller/1.6.0/concepts/apisix_cluster_config",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.0/docs/en/latest/concepts/apisix_cluster_config.md",tags:[],version:"1.6.0",frontMatter:{title:"ApisixClusterConfig",keywords:["APISIX ingress","Apache APISIX","ApisixClusterConfig"],description:"Guide to using ApisixClusterConfig custom Kubernetes resource."},sidebar:"version-1.6.0/docs",previous:{title:"ApisixTls",permalink:"/docs/ingress-controller/1.6.0/concepts/apisix_tls"},next:{title:"Annotations",permalink:"/docs/ingress-controller/1.6.0/concepts/annotations"}},c=[{value:"Monitoring",id:"monitoring",children:[]},{value:"Admin configuration",id:"admin-configuration",children:[]},{value:"Multi-cluster management",id:"multi-cluster-management",children:[]}],l={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is a Kubernetes CRD resource that can be used to describe an APISIX cluster and manage it."),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"By default, monitoring is not enabled in an APISIX cluster. You can enable it by creating an ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," resource."),(0,r.kt)("p",null,"The example below enabled ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/prometheus"},"Prometheus")," and ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/skywalking"},"SkyWalking"),' for the "default" APISIX cluster (in ',(0,r.kt)("a",{parentName:"p",href:"#multi-cluster-management"},"multi-cluster deployments"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n    skywalking:\n      enable: true\n      sampleRatio: 0.5\n")),(0,r.kt)("h2",{id:"admin-configuration"},"Admin configuration"),(0,r.kt)("p",null,"Instead of changing the deployment or pod definition files, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," resource to change the admin configurations."),(0,r.kt)("p",null,'The example below configures the base URL and admin key for the APISIX cluster "default":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  admin:\n    baseURL: http://apisix-gw.default.svc.cluster.local:9180/apisix/admin\n    adminKey: "123456"\n')),(0,r.kt)("p",null,"Once configured, other resources (Route, Upstream, etc) will be forwarded to the new address with the new admin key."),(0,r.kt)("h2",{id:"multi-cluster-management"},"Multi-cluster management"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," resource can also be used to manage multiple APISIX clusters. This function is ",(0,r.kt)("strong",{parentName:"p"},"not enabled currently")," and it can only manage the cluster configured through ",(0,r.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-name")," attribute."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Deleting an ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," resource will only reset the configurations of an APISIX cluster and will not affect its running."))))}p.isMDXComponent=!0}}]);