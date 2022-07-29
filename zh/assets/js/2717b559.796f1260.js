"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Local Setup",description:"The steps to install DevLake locally\n",sidebar_position:1},o=void 0,l={unversionedId:"QuickStart/LocalSetup",id:"version-v0.11/QuickStart/LocalSetup",title:"Local Setup",description:"The steps to install DevLake locally\n",source:"@site/versioned_docs/version-v0.11/QuickStart/LocalSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/LocalSetup",permalink:"/zh/docs/v0.11/QuickStart/LocalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/QuickStart/LocalSetup.md",tags:[],version:"v0.11",sidebarPosition:1,frontMatter:{title:"Local Setup",description:"The steps to install DevLake locally\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Roadmap",permalink:"/zh/docs/v0.11/Overview/Roadmap"},next:{title:"Kubernetes Setup",permalink:"/zh/docs/v0.11/QuickStart/KubernetesSetup"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Configure data connections and collect data",id:"configure-data-connections-and-collect-data",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+"))),(0,r.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commands written ",(0,r.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,r.kt)("li",{parentName:"ol"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,r.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,r.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,r.kt)("h2",{id:"configure-data-connections-and-collect-data"},"Configure data connections and collect data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure data connections.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to desired plugins on the Integrations page"),(0,r.kt)("li",{parentName:"ul"},"Please reference the following for more details on how to configure each one:",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Plugins/jira"},"Jira")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Plugins/github"},"GitHub"),": For users who'd like to collect GitHub data, we recommend reading our ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/UserManuals/GitHubUserGuide"},"GitHub data collection guide")," which covers the following steps in detail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Plugins/gitlab"},"GitLab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/Plugins/jenkins"},"Jenkins")))),(0,r.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,r.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"devlake")," takes a while to fully boot up. if ",(0,r.kt)("inlineCode",{parentName:"li"},"config-ui")," complaining about api being unreachable, please wait a few seconds and try refreshing the page."))),(0,r.kt)("li",{parentName:"ol"},"Create pipelines to trigger data collection in ",(0,r.kt)("inlineCode",{parentName:"li"},"config-ui")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left when done, or visit ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We use ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," as a visualization tool to build charts for the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/DataModels/DataSupport"},"data")," stored in our database."),(0,r.kt)("li",{parentName:"ul"},"Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,r.kt)("li",{parentName:"ul"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/UserManuals/GrafanaUserGuide"},"Grafana Doc"),"."))),(0,r.kt)("li",{parentName:"ol"},"To synchronize data periodically, users can set up recurring pipelines with DevLake's ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/UserManuals/RecurringPipelines"},"pipeline blueprint")," for details.")),(0,r.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,r.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema. We recommend users to deploy a new instance if needed."),(0,r.kt)("br",null))}u.isMDXComponent=!0}}]);