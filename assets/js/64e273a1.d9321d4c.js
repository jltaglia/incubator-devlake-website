"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=i(a),m=n,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},l=void 0,c={permalink:"/blog/how-apache-devlake-runs",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-05-18-how-apache-devlake-runs/index.md",source:"@site/blog/2022-05-18-how-apache-devlake-runs/index.md",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",description:"Apache DevLake \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002",date:"2022-05-18T00:00:00.000Z",formattedDate:"May 18, 2022",tags:[{label:"devlake",permalink:"/blog/tags/devlake"},{label:"apache",permalink:"/blog/tags/apache"}],readingTime:4.8,hasTruncateMarker:!0,authors:[{name:"Warren Chen",title:"Apache DevLake PPMC",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},prevItem:{title:"Apache Incubator Welcomes DevLake, A Dev-Data Platform Serving Developers",permalink:"/blog/apache-welcomes-devlake"},nextItem:{title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",permalink:"/blog/deadlock-caused-by-using-ants"}},p={authorsImageUrls:[void 0]},i=[{value:"Apache DevLake \u67b6\u6784\u6982\u8ff0",id:"apache-devlake-\u67b6\u6784\u6982\u8ff0",level:3}],s={toc:i};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,n.kt)("h3",{id:"apache-devlake-\u67b6\u6784\u6982\u8ff0"},"Apache DevLake \u67b6\u6784\u6982\u8ff0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5de6\u8fb9\u662f",(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"\u53ef\u96c6\u6210\u7684DevOps\u6570\u636e\u63d2\u4ef6"),"\uff0c\u76ee\u524d\u5df2\u6709\u7684\u63d2\u4ef6\u5305\u62ec Github\uff0cGitlab\uff0cJIRA\uff0cJenkins\uff0cTapd\uff0cFeishu \u4ee5\u53ca\u601d\u7801\u9038\u4e3b\u6253\u7684\u4ee3\u7801\u5206\u6790\u5f15\u64ce"),(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u662f\u4e3b\u4f53\u6846\u67b6\uff0c\u901a\u8fc7\u4e3b\u4f53\u6846\u67b6\u8fd0\u884c\u63d2\u4ef6\u4e2d\u7684\u5b50\u4efb\u52a1\uff0c\u5b8c\u6210\u6570\u636e\u7684\u6536\u96c6\uff0c\u6269\u5c55\uff0c\u5e76\u8f6c\u6362\u5230\u9886\u57df\u5c42\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 config-ui \u6216\u8005 api \u8c03\u7528\u7684\u5f62\u5f0f\u6765\u89e6\u53d1\u4efb\u52a1"),(0,n.kt)("li",{parentName:"ul"},"RMDBS \u76ee\u524d\u652f\u6301 Mysql \u548c PostgreSQL\uff0c\u540e\u671f\u8fd8\u4f1a\u7ee7\u7eed\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"Grafana \u53ef\u4ee5\u901a\u8fc7sql\u8bed\u53e5\u751f\u6210\u56e2\u961f\u9700\u8981\u7684\u5404\u79cd\u6570\u636e")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generated",src:a(2324).Z,width:"567",height:"310"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u8be6\u7ec6\u804a\u4e00\u804a\u7cfb\u7edf\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684\u3002")))}u.isMDXComponent=!0},2324:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001-9fe996eee294ce1843bc3f126a1a7b89.png"}}]);