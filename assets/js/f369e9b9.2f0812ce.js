"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50880],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(m,l(l({ref:e},d),{},{components:n})):a.createElement(m,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87431:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"openid-connect",keywords:["Apache APISIX","API Gateway","OpenID Connect","OIDC"],description:"OpenID Connect allows the client to obtain user information from the identity providers, such as Keycloak, Ory Hydra, Okta, Auth0, etc. API Gateway APISIX supports to integrate with the above identity providers to protect your APIs."},l=void 0,o={unversionedId:"plugins/openid-connect",id:"version-3.3/plugins/openid-connect",isDocsHomePage:!1,title:"openid-connect",description:"OpenID Connect allows the client to obtain user information from the identity providers, such as Keycloak, Ory Hydra, Okta, Auth0, etc. API Gateway APISIX supports to integrate with the above identity providers to protect your APIs.",source:"@site/docs-apisix_versioned_docs/version-3.3/plugins/openid-connect.md",sourceDirName:"plugins",slug:"/plugins/openid-connect",permalink:"/docs/apisix/plugins/openid-connect",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.3/docs/en/latest/plugins/openid-connect.md",tags:[],version:"3.3",frontMatter:{title:"openid-connect",keywords:["Apache APISIX","API Gateway","OpenID Connect","OIDC"],description:"OpenID Connect allows the client to obtain user information from the identity providers, such as Keycloak, Ory Hydra, Okta, Auth0, etc. API Gateway APISIX supports to integrate with the above identity providers to protect your APIs."},sidebar:"version-3.3/docs",previous:{title:"wolf-rbac",permalink:"/docs/apisix/plugins/wolf-rbac"},next:{title:"cas-auth",permalink:"/docs/apisix/plugins/cas-auth"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Scenarios",id:"scenarios",children:[{value:"Token introspection",id:"token-introspection",children:[]},{value:"Introspecting with public key",id:"introspecting-with-public-key",children:[]},{value:"Authentication through OIDC Relying Party flow",id:"authentication-through-oidc-relying-party-flow",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," (OIDC) is an authentication protocol based on the OAuth 2.0. It allows the client to obtain user information from the identity provider (IdP), e.g., Keycloak, Ory Hydra, Okta, Auth0, etc. API Gateway Apache APISIX supports to integrate with the above identity providers to protect your APIs."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth client ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth client secret.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Discovery endpoint URL of the identity server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"openid"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Scope used for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"realm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Realm used for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bearer_only"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", APISIX will only check if the authorization header in the request matches a bearer token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logout_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"/logout"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Path for logging out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post_logout_redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URL to redirect to after logging out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"ngx.var.request_uri"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URI to which the identity provider redirects back to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Request timeout time in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, verifies the identity provider's SSL certificates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"introspection_endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the token verification endpoint of the identity server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"introspection_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"client_secret_basic"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication method name for token introspection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication method name for token endpoint. The default will get the first supported method specified by the OP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Public key to verify the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_jwks"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", uses the JWKS endpoint of the identity server to verify the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_pkce"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"when set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),', the "Proof Key for Code Exchange" as defined in RFC 7636 will be used.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token_signing_alg_values_expected"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm used for signing the authentication token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_access_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, sets the access token in a request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_token_in_authorization_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, sets the access token in the ",(0,r.kt)("inlineCode",{parentName:"td"},"Authorization")," header. Otherwise, set the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Access-Token")," header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_id_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true and the ID token is available, sets the ID token in the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-ID-Token")," request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_userinfo_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true and the UserInfo object is available, sets it in the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Userinfo")," request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"set_refresh_token_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true and a refresh token object is available, sets it in the ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Refresh-Token")," request header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When bearer_only is set to false, openid-connect will use Authorization Code flow to authenticate on the IDP, so you need to set the session-related configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session.secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatic generation"),(0,r.kt)("td",{parentName:"tr",align:null},"16 or more characters"),(0,r.kt)("td",{parentName:"tr",align:null},"The key used for session encrypt and HMAC operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unauth_action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"auth"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'Specify the response type on unauthenticated requests. "auth" redirects to identity provider, "deny" results in a 401 response, "pass" will allow the request without authentication.')))),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"client_secret"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,r.kt)("h2",{id:"scenarios"},"Scenarios"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tutorial: ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis/"},"Use Keycloak with API Gateway to secure APIs")))),(0,r.kt)("p",null,"This plugin offers two scenorios:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication between Services: Set ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer_only")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"introspection_endpoint")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key")," attribute. In this scenario, APISIX will reject requests without a token or invalid token in the request header.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication between Browser and Identity Providers: Set ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer_only")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false.")," After successful authentication, this plugin can obtain and manage the token in the cookie, and subsequent requests will use the token. In this mode, the user session will be stored in the browser as a cookie and this data is encrypted, so you have to set a key for encryption via ",(0,r.kt)("inlineCode",{parentName:"p"},"session.secret"),"."))),(0,r.kt)("h3",{id:"token-introspection"},"Token introspection"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token introspection")," validates a request by verifying the token with an OAuth 2.0 authorization server."),(0,r.kt)("p",null,"You should first create a trusted client in the identity server and generate a valid JWT token for introspection."),(0,r.kt)("p",null,"The image below shows an example token introspection flow via a Gateway:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/oauth-1.png",alt:"token introspection"})),(0,r.kt)("p",null,"The example below shows how you can enable the Plugin on Route. The Route below will protect the Upstream by introspecting the token provided in the request header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins":{\n    "openid-connect":{\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "introspection_endpoint": "${INTROSPECTION_ENDPOINT}",\n      "bearer_only": true,\n      "realm": "master",\n      "introspection_endpoint_auth_method": "client_secret_basic"\n    }\n  },\n  "upstream":{\n    "type": "roundrobin",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"Now, to access the Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET http://127.0.0.1:9080/get -H "Host: httpbin.org" -H "Authorization: Bearer {JWT_TOKEN}"\n')),(0,r.kt)("p",null,"In this example, the Plugin enforces that the access token and the Userinfo object be set in the request headers."),(0,r.kt)("p",null,"When the OAuth 2.0 authorization server returns an expire time with the token, it is cached in APISIX until expiry. For more details, read:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zmartzone/lua-resty-openidc"},"lua-resty-openidc"),"'s documentation and source code."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"exp")," field in the RFC's ",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7662#section-2.2"},"Introspection Response")," section.")),(0,r.kt)("h3",{id:"introspecting-with-public-key"},"Introspecting with public key"),(0,r.kt)("p",null,"You can also provide the public key of the JWT token for verification. If you have provided a public key and a token introspection endpoint, the public key workflow will be executed instead of verification through an identity server. This is useful if you want to reduce network calls and speedup the process."),(0,r.kt)("p",null,"The example below shows how you can add public key introspection to a Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins":{\n    "openid-connect":{\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "bearer_only": true,\n      "realm": "master",\n      "token_signing_alg_values_expected": "RS256",\n      "public_key": "-----BEGIN PUBLIC KEY-----\n      {public_key}\n      -----END PUBLIC KEY-----"\n    }\n  },\n  "upstream":{\n    "type": "roundrobin",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"In this example, the Plugin can only enforce that the access token should be set in the request headers."),(0,r.kt)("h3",{id:"authentication-through-oidc-relying-party-flow"},"Authentication through OIDC Relying Party flow"),(0,r.kt)("p",null,"When an incoming request does not contain an access token in its header nor in an appropriate session cookie, the Plugin can act as an OIDC Relying Party and redirect to the authorization endpoint of the identity provider to go through the ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth"},"OIDC authorization code flow"),"."),(0,r.kt)("p",null,"Once the user has authenticated with the identity provider, the Plugin will obtain and manage the access token and further interaction with the identity provider. The access token will be stored in a session cookie."),(0,r.kt)("p",null,"The example below adds the Plugin with this mode of operation to the Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "openid-connect": {\n      "client_id": "${CLIENT_ID}",\n      "client_secret": "${CLIENT_SECRET}",\n      "discovery": "${DISCOVERY_ENDPOINT}",\n      "bearer_only": false,\n      "realm": "master"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:443": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"In this example, the Plugin can enforce that the access token, the ID token, and the UserInfo object to be set in the request headers."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If APISIX cannot resolve/connect to the identity provider (e.g., Okta, Keycloak, Authing), check/modify the DNS settings in your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you encounter the error ",(0,r.kt)("inlineCode",{parentName:"p"},"the error request to the redirect_uri path, but there's no session state found,")," please confirm whether the currently accessed URL carries ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"state,")," and do not directly access ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you encounter the error ",(0,r.kt)("inlineCode",{parentName:"p"},"the error request to the redirect_uri path, but there's no session state found"),", please check the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," attribute : APISIX will initiate an authentication request to the identity provider, after the authentication service completes the authentication and authorization logic, it will redirect to the address configured by ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/callback"),") with ID Token and AccessToken, and then enter APISIX again and complete the function of token exchange in OIDC logic. The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," attribute needs to meet the following conditions:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," needs to be captured by the route where the current APISIX is located. For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"uri")," of the current route is ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," can be filled in as ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/callback"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"redirect_uri")," (",(0,r.kt)("inlineCode",{parentName:"li"},"scheme:host"),") are the values required to access APISIX from the perspective of the identity provider.")))}d.isMDXComponent=!0}}]);