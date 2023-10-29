"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9249],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(a),k=l,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15825:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"aws-lambda",keywords:["APISIX","Plugin","AWS Lambda","aws-lambda"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX aws-lambda \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/aws-lambda",id:"version-3.1/plugins/aws-lambda",isDocsHomePage:!1,title:"aws-lambda",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX aws-lambda \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/aws-lambda.md",sourceDirName:"plugins",slug:"/plugins/aws-lambda",permalink:"/zh/docs/apisix/3.1/plugins/aws-lambda",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/aws-lambda.md",tags:[],version:"3.1",frontMatter:{title:"aws-lambda",keywords:["APISIX","Plugin","AWS Lambda","aws-lambda"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX aws-lambda \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.1/docs",previous:{title:"openwhisk",permalink:"/zh/docs/apisix/3.1/plugins/openwhisk"},next:{title:"workflow",permalink:"/zh/docs/apisix/3.1/plugins/workflow"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"IAM \u6388\u6743\u65b9\u6848",id:"iam-\u6388\u6743\u65b9\u6848",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u914d\u7f6e\u8def\u5f84\u8f6c\u53d1",id:"\u914d\u7f6e\u8def\u5f84\u8f6c\u53d1",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],m={toc:d};function o(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u7528\u4e8e\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," \u4f5c\u4e3a\u52a8\u6001\u4e0a\u6e38\u96c6\u6210\u81f3 APISIX\uff0c\u4ece\u800c\u5b9e\u73b0\u5c06\u8bbf\u95ee\u6307\u5b9a URI \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 AWS \u4e91\u3002"),(0,l.kt)("p",null,"\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u540e\uff0c\u8be5\u63d2\u4ef6\u4f1a\u7ec8\u6b62\u5bf9\u5df2\u914d\u7f6e URI \u7684\u8bf7\u6c42\uff0c\u5e76\u4ee3\u8868\u5ba2\u6237\u7aef\u5411 AWS Lambda Gateway URI \u53d1\u8d77\u4e00\u4e2a\u65b0\u7684\u8bf7\u6c42\u3002\u8fd9\u4e2a\u65b0\u8bf7\u6c42\u4e2d\u643a\u5e26\u4e86\u4e4b\u524d\u914d\u7f6e\u7684\u6388\u6743\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u4f53\u548c\u53c2\u6570\uff08\u4ee5\u4e0a\u53c2\u6570\u90fd\u662f\u4ece\u539f\u59cb\u8bf7\u6c42\u4e2d\u4f20\u9012\u7684\uff09\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u4f1a\u5c06\u5e26\u6709\u54cd\u5e94\u5934\u3001\u72b6\u6001\u7801\u548c\u54cd\u5e94\u4f53\u7684\u54cd\u5e94\u4fe1\u606f\u8fd4\u56de\u7ed9\u4f7f\u7528 APISIX \u53d1\u8d77\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u901a\u8fc7 AWS API key \u548c AWS IAM secrets \u8fdb\u884c\u6388\u6743\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1 lambda serverless \u51fd\u6570\u7684 AWS API Gateway \u7aef\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u4e91\u51fd\u6570\u7684\u6388\u6743\u51ed\u8bc1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization.apikey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684 API \u5bc6\u94a5\uff0c\u7528\u4e8e\u6388\u6743\u5bf9 AWS Gateway \u7aef\u70b9\u7684\u8bf7\u6c42\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization.iam"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u901a\u8fc7 AWS v4 \u8bf7\u6c42\u7b7e\u540d\u6267\u884c\u7684\u57fa\u4e8e AWS IAM \u89d2\u8272\u7684\u6388\u6743\u3002 \u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"#iam-%E6%8E%88%E6%9D%83%E6%96%B9%E6%A1%88"},"IAM \u6388\u6743\u65b9\u6848"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"[100,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u8bf7\u6c42\u8d85\u65f6\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u6267\u884c SSL \u9a8c\u8bc1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u4fdd\u6301\u8fde\u63a5\u7684\u6d3b\u52a8\u72b6\u6001\u4ee5\u4fbf\u91cd\u590d\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5173\u95ed\u8be5\u8fde\u63a5\u4e4b\u524d\uff0c\u53ef\u4ee5\u5728\u8be5\u8fde\u63a5\u4e0a\u53d1\u9001\u7684\u6700\u5927\u8bf7\u6c42\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1000,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8fde\u63a5\u7a7a\u95f2\u65f6\uff0c\u4fdd\u6301\u8be5\u8fde\u63a5\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")))),(0,l.kt)("h3",{id:"iam-\u6388\u6743\u65b9\u6848"},"IAM \u6388\u6743\u65b9\u6848"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accesskey"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece AWS IAM \u63a7\u5236\u53f0\u751f\u6210\u7684\u8bbf\u95ee\u5bc6\u94a5 ID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece AWS IAM \u63a7\u5236\u53f0\u751f\u6210\u7684\u8bbf\u95ee\u5bc6\u94a5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_region"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"us-east-1"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u51fa\u8bf7\u6c42\u7684 AWS \u533a\u57df\u3002\u6709\u5173\u66f4\u591a AWS \u533a\u57df\u4ee3\u7801\u7684\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/zh_cn/general/latest/gr/rande.html#region-names-codes"},"AWS \u533a\u57df\u4ee3\u7801\u8868"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"execute-api"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8be5\u8bf7\u6c42\u7684\u670d\u52a1\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e HTTP \u89e6\u53d1\u5668\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},'"execute-api"'),"\u3002")))),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "apikey": "<Generated API Key from aws console>",\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u4efb\u4f55\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"/aws")," URI \u7684\u8bf7\u6c42\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP/1.1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP2"),"\uff09\u90fd\u5c06\u8c03\u7528\u5df2\u914d\u7f6e\u7684 AWS \u51fd\u6570\u7684 URI\uff0c\u5e76\u4e14\u4f1a\u5c06\u54cd\u5e94\u4fe1\u606f\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("p",null,"\u4e0b\u8ff0\u547d\u4ee4\u7684\u542b\u4e49\u662f\uff1aAWS Lambda \u4ece\u8bf7\u6c42\u4e2d\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u6761 ",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello $name"')," \u6d88\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET localhost:9080/aws\\?name=APISIX\n")),(0,l.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: application/json\n...\n"Hello, APISIX!"\n')),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u662f\u5ba2\u6237\u7aef\u901a\u8fc7 HTTP/2 \u534f\u8bae\u4e0e APISIX \u8fdb\u884c\u901a\u4fe1\u3002"),(0,l.kt)("p",null,"\u5728\u8fdb\u884c\u6d4b\u8bd5\u4e4b\u524d\uff0c\u7531\u4e8e\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," \u9ed8\u8ba4\u662f\u7981\u7528\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.node_listen")," \u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"- port: 9081")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," \u5b57\u6bb5\u542f\u7528\u3002\u793a\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen:                      # \u652f\u6301\u76d1\u542c\u591a\u4e2a\u7aef\u53e3\n    - 9080\n    - port: 9081\n      enable_http2: true            # \u8be5\u5b57\u6bb5\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a `false`\n")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET --http2 --http2-prior-knowledge localhost:9081/aws\\?name=APISIX\n")),(0,l.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/2 200\ncontent-type: application/json\n...\n"Hello, APISIX!"\n')),(0,l.kt)("p",null,"\u4e0e\u4e0a\u9762\u7684\u793a\u4f8b\u7c7b\u4f3c\uff0cAWS Lambda \u51fd\u6570\u4e5f\u53ef\u4ee5\u901a\u8fc7 AWS API Gateway \u89e6\u53d1\uff0c\u4f46\u9700\u8981\u4f7f\u7528 AWS IAM \u6743\u9650\u8fdb\u884c\u6388\u6743\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},'"authorization"')," \u5b57\u6bb5\uff0c\u7528\u6237\u53ef\u4ee5\u5728 HTTP \u8c03\u7528\u4e2d\u901a\u8fc7 AWS v4 \u8bf7\u6c42\u7b7e\u540d\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5b9e\u73b0\u6388\u6743\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://ajycz5e0v9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "iam": {\n                    "accesskey": "<access key>",\n                    "secretkey": "<access key secret>"\n                }\n            },\n            "ssl_verify": false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f7f\u7528\u8be5\u65b9\u6cd5\u65f6\u5df2\u7ecf\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u542f\u7528\u4e86\u7a0b\u5e8f\u5316\u8bbf\u95ee\u7684 IAM \u7528\u6237\uff0c\u5e76\u5177\u6709\u8bbf\u95ee\u7aef\u70b9\u7684\u5fc5\u8981\u6743\u9650\uff08AmazonAPIGatewayInvokeFullAccess\uff09\u3002"))),(0,l.kt)("h3",{id:"\u914d\u7f6e\u8def\u5f84\u8f6c\u53d1"},"\u914d\u7f6e\u8def\u5f84\u8f6c\u53d1"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u5728\u4ee3\u7406\u8bf7\u6c42\u5230 AWS \u4e0a\u6e38\u65f6\u4e5f\u652f\u6301 URL \u8def\u5f84\u8f6c\u53d1\u3002\u57fa\u672c\u8bf7\u6c42\u8def\u5f84\u7684\u6269\u5c55\u88ab\u9644\u52a0\u5230\u63d2\u4ef6\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"function_uri")," \u5b57\u6bb5\u4e0a\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u8981")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u56e0\u4e3a APISIX \u8def\u7531\u662f\u4e25\u683c\u5339\u914d\u7684\uff0c\u6240\u4ee5\u4e3a\u4e86\u4f7f ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-lambda")," \u63d2\u4ef6\u6b63\u5e38\u5de5\u4f5c\uff0c\u5728\u8def\u7531\u4e0a\u914d\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u5b57\u6bb5\u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u7ed3\u5c3e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u610f\u5473\u7740\u8fd9\u4e2a URI \u7684\u4efb\u4f55\u5b50\u8def\u5f84\u90fd\u4f1a\u88ab\u5339\u914d\u5230\u540c\u4e00\u4e2a\u8def\u7531\u3002"))),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5b9e\u73b0\u8def\u5f84\u8f6c\u53d1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com",\n            "authorization": {\n                "apikey": "<Generate API key>"\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws/*"\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u4efb\u4f55\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"aws/default/test-apisix")," \u7684\u8bf7\u6c42\u90fd\u4f1a\u8c03\u7528 AWS Lambda \u51fd\u6570\uff0c\u5e76\u8f6c\u53d1\u9644\u52a0\u7684\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET http://127.0.0.1:9080/aws/default/test-apisix\\?name\\=APISIX\n")),(0,l.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: application/json\n...\n"Hello, APISIX!"\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/aws",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0}}]);