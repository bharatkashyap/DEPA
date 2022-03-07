"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[535],{569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"entity-resolution",title:"Entity resolution",description:"How to resolve entities inside a DEPA network."},l=void 0,c={unversionedId:"entity-resolution",id:"entity-resolution",title:"Entity resolution",description:"How to resolve entities inside a DEPA network.",source:"@site/internal/specification/entity-resolution.md",sourceDirName:".",slug:"/entity-resolution",permalink:"/depa/specification/entity-resolution",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/entity-resolution.md",tags:[],version:"current",lastUpdatedAt:1646640465,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"entity-resolution",title:"Entity resolution",description:"How to resolve entities inside a DEPA network."},sidebar:"specification",previous:{title:"About APIs and Flows",permalink:"/depa/specification/about-spec"},next:{title:"Data Provider Discovery",permalink:"/depa/specification/data-provider-discovery"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Entities need to resolve each other in order to establish the mTLS connection between themselves. A registry will provide the API to resolve the entities and get information about them. For entities to call this API they will need a token issued by the registry at the time of onboarding as an authentication mechanism. In addition registries can protect their environment by having a mTLS between the entity and themselves or can do IP whitelisting, all this will depend on the registry security policies."),(0,o.kt)("p",null,"Resolution process of an entity."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Entities seeking to resolve other entities will need the unique identifier of another party or the domain name (like in the case of CM) which is present in the registry."),(0,o.kt)("li",{parentName:"ol"},"Using this identifier entity makes the resolution call to a registry."),(0,o.kt)("li",{parentName:"ol"},"Registry responds with meta information about the entity like address where its API\u2019s are hosted, public key of the entity which is registered and other basic details.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Endpoint")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"/resolve"))),(0,o.kt)("p",null,"This endpoint resolves the entities. This is either done by the registry assigned identifiers or the domain name present in the registry, like in the case of Consent managers."),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Id"))," Search by id if its known. This can be different for the same entity on different registry.")),(0,o.kt)("p",null,"After the resolution has been successfully done the entity can initiate the mTLS connection with the other entity. Clients making the resolution query can also cache the results as per the TTL limits defined by the registry."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(y,a(a({ref:t},u),{},{components:n})):i.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);