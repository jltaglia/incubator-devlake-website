"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7458],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},i=void 0,l={unversionedId:"GettingStarted/DockerComposeSetup",id:"GettingStarted/DockerComposeSetup",title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",source:"@site/docs/GettingStarted/DockerComposeSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/DockerComposeSetup",permalink:"/zh/docs/GettingStarted/DockerComposeSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/DockerComposeSetup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/zh/docs/GettingStarted"},next:{title:"Install via Kubernetes",permalink:"/zh/docs/GettingStarted/KubernetesSetup"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Configure and collect data",id:"configure-and-collect-data",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+")," (If you have Docker Desktop installed then you already have the Compose plugin installed)")),(0,r.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commands written ",(0,r.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,r.kt)("li",{parentName:"ol"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,r.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,r.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,r.kt)("h2",{id:"configure-and-collect-data"},"Configure and collect data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure and collect data.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please follow the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/ConfigUI/Tutorial"},"turorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"devlake")," takes a while to fully boot up. if ",(0,r.kt)("inlineCode",{parentName:"li"},"config-ui")," complaining about api being unreachable, please wait a few seconds and try refreshing the page."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left when done, or visit ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We use ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," as a visualization tool to build charts for the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/SupportedDataSources"},"data")," stored in our database."),(0,r.kt)("li",{parentName:"ul"},"Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,r.kt)("li",{parentName:"ul"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/Dashboards/GrafanaUserGuide"},"Grafana Doc"),".")))),(0,r.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,r.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema. We recommend users to deploy a new instance if needed."),(0,r.kt)("br",null))}d.isMDXComponent=!0}}]);