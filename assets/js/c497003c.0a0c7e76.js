(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(124)),i={id:"members-preapprovals",title:"Pre-Approvals"},l={unversionedId:"features/members/members-preapprovals",id:"features/members/members-preapprovals",isDocsHomePage:!1,title:"Pre-Approvals",description:"This section is a work in progress.",source:"@site/docs/features/members/preapprovals.md",slug:"/features/members/members-preapprovals",permalink:"/talawa-docs/docs/features/members/members-preapprovals",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/members/preapprovals.md",version:"current",sidebar:"someSidebar",previous:{title:"Roles",permalink:"/talawa-docs/docs/features/members/members-roles"},next:{title:"Registration",permalink:"/talawa-docs/docs/features/members/members-registration"}},s=[{value:"Code: MEM-003",id:"code-mem-003",children:[]},{value:"Overview",id:"overview",children:[{value:"Problem",id:"problem",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Out of Scope",id:"out-of-scope",children:[]},{value:"People and Roles",id:"people-and-roles",children:[]}]},{value:"Context",id:"context",children:[{value:"Use Cases",id:"use-cases",children:[]}]},{value:"Proposal/Solution",id:"proposalsolution",children:[{value:"User Experience",id:"user-experience",children:[]},{value:"Important Details To Capture",id:"important-details-to-capture",children:[]},{value:"Future Work",id:"future-work",children:[]}]},{value:"Tasks and Timeline",id:"tasks-and-timeline",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(o.b)("h2",{id:"code-mem-003"},"Code: MEM-003"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Authored by")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",Object(o.b)("em",{parentName:"p"},". Last updated on")," ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"14/03/21")," ")),Object(o.b)("p",null,"This feature aims to ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"provide more security within the signup process")," ")," by ",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("strong",{parentName:"em"},"incorporating a method for validating new users registering for an organization within the app")," "),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("h3",{id:"problem"},"Problem"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Anyone is able to sign up for an organization within the application:"))),Object(o.b)("p",null,"We need a method for administrators to pre-approve users. Additionally, we need to assume that users may not have access to email and that text message service integration will not be immediately available."),Object(o.b)("h3",{id:"goals"},"Goals"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Allow for a secure method of approving new members to an organization within the app")," :\nEnable the admin to oversee the registration and/or approval of members to an organization. The process should be seamless and intuitive to both users (Admin ","&"," Members) of the application.")),Object(o.b)("h3",{id:"out-of-scope"},"Out of Scope"),Object(o.b)("p",null,"N/A"),Object(o.b)("h3",{id:"people-and-roles"},"People and Roles"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": Make decision on final solution.")),Object(o.b)("h2",{id:"context"},"Context"),Object(o.b)("h3",{id:"use-cases"},"Use Cases"),Object(o.b)("p",null,"TBD."),Object(o.b)("h2",{id:"proposalsolution"},"Proposal/Solution"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A pre-approved list of phone numbers.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"QR code approvals by admins or their lieutenants through the app")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"One time password/token given to the user generated by admins"),Object(o.b)("p",{parentName:"li"},"Note: Ideally the QR code should contain all the organizations API login information so that it doesn","'","t need to be rekeyed."))),Object(o.b)("h3",{id:"user-experience"},"User Experience"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Solution 1:")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will have access to a list of registered numbers from the admin dashboard.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will be able to select a number from the list and approve/deny access.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Members will receive an email/ in app notification once granted access.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Solution 2:")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will have access to a screen containing a unique QR code.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will have the ability to regenerate the QR code (to be discussed)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Member","'","s will have access to a QR code scanner upon opening the app.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Solution 3:")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will have access to a list of registered numbers.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will be able to select a number from the list and generate a unique token/password for a member.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admins will have access to a share button for sending the token/password to a member","'","s email/whatsapp/phone number.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Member","'","s will be required to enter the info from the previous step after registering for an organization."))),Object(o.b)("p",null,"OR"),Object(o.b)("p",null,"Member","'","s will be required to enter the provided token while registering for an organization."),Object(o.b)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),Object(o.b)("p",null,"N/A"),Object(o.b)("h3",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"N/A"),Object(o.b)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),Object(o.b)("p",null,"N/A"))}b.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=b(a),d=r,u=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return a?n.a.createElement(u,l(l({ref:t},p),{},{components:a})):n.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);