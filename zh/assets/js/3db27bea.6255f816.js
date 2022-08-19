"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||n;return r?i.createElement(h,a(a({ref:t},u),{},{components:r})):i.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},37974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(87462),o=(r(67294),r(3905));const n={title:"PR Time To Merge",description:"PR Time To Merge\n",sidebar_position:2},a=void 0,s={unversionedId:"Metrics/TimeToMerge",id:"Metrics/TimeToMerge",title:"PR Time To Merge",description:"PR Time To Merge\n",source:"@site/docs/Metrics/TimeToMerge.md",sourceDirName:"Metrics",slug:"/Metrics/TimeToMerge",permalink:"/zh/docs/Metrics/TimeToMerge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/TimeToMerge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PR Time To Merge",description:"PR Time To Merge\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"PR Review Time",permalink:"/zh/docs/Metrics/ReviewTime"},next:{title:"Requirement Delivery Rate",permalink:"/zh/docs/Metrics/RequirementDeliveryRate"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in?",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The time it takes from when a PR is issued to when it is merged. Essentially, PR Time to Merge = PR Pickup Time + PR Review Time."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("p",null,"The delay of reviewing and waiting to review PRs has large impact on delivery speed, while reasonably short PR Time to Merge can indicate frictionless teamwork. Improving on this metric is the key to reduce PR cycle time."),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Basic Metrics"),(0,o.kt)("li",{parentName:"ul"},"Bi-weekly Community Retro")),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("b",null,"Data Sources Required"),"This metric relies on PR/MRs collected from GitHub or GitLab.",(0,o.kt)("b",null,"Transformation Rules Required"),"N/A",(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use DevLake's dashboards to monitor your delivery progress;"),(0,o.kt)("li",{parentName:"ol"},"Have a habit to check for hanging PRs regularly;"),(0,o.kt)("li",{parentName:"ol"},"Set up alerts for your communication tools (e.g. Slack, Lark) when new PRs are issued;"),(0,o.kt)("li",{parentName:"ol"},"Reduce PR size;"),(0,o.kt)("li",{parentName:"ol"},"Analyze the causes for long reviews.")))}m.isMDXComponent=!0}}]);