(function(e){function t(t){for(var c,s,a=t[0],i=t[1],u=t[2],f=0,b=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},r={app:0},o=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/{Evgenii-Ablets.github.io}/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0332":function(e,t,n){},"0a8b":function(e,t){e.exports="data:image/png;base64,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"},"0b6b":function(e,t,n){"use strict";n("f3c6")},"11de":function(e,t,n){"use strict";n("c480")},"260a":function(e,t,n){},"2f4d":function(e,t,n){},"304f":function(e,t,n){"use strict";n("eced")},"363f":function(e,t,n){"use strict";n("f464")},3698:function(e,t,n){},"36b6":function(e,t,n){e.exports=n.p+"img/Camilr.3c142375.png"},"43d7":function(e,t,n){},"4cb4":function(e,t,n){"use strict";n("3698")},"56d7":function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"home",(function(){return D})),n.d(c,"shape",(function(){return ee})),n.d(c,"signout",(function(){return ae})),n.d(c,"star",(function(){return de})),n.d(c,"fork",(function(){return he}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,c,o,s){var a=Object(r["o"])("feeds");return Object(r["j"])(),Object(r["c"])(a)}var s=n("0a8b"),a=n.n(s),i=function(e){return Object(r["l"])("data-v-91cc15dc"),e=e(),Object(r["k"])(),e},u={class:"topbox"},l=i((function(){return Object(r["f"])("div",{class:"logo"},[Object(r["f"])("h1",null,"Gitogram /")],-1)})),f={class:"icon"},b=i((function(){return Object(r["f"])("div",{class:"photo"},[Object(r["f"])("img",{src:a.a,alt:""})],-1)})),j={class:"icon"},d={class:"stories"},O={class:"c-feed"},p={class:"issue"},v={key:0,class:"comments"},C={class:"comments-list"};function m(e,t,n,c,o,s){var a=Object(r["o"])("icon"),i=Object(r["o"])("story-user-item"),m=Object(r["o"])("topbox"),g=Object(r["o"])("issues"),h=Object(r["o"])("toggler"),w=Object(r["o"])("comment"),A=Object(r["o"])("c-feed");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",u,[Object(r["h"])(m,null,{headline:Object(r["r"])((function(){return[l,Object(r["f"])("div",f,[Object(r["h"])(a,{name:"home"})]),b,Object(r["f"])("div",j,[Object(r["h"])(a,{name:"signout"})])]})),content:Object(r["r"])((function(){return[Object(r["f"])("ul",d,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(o.stories,(function(t){return Object(r["j"])(),Object(r["e"])("li",{class:"stories-item",key:t.id},[Object(r["h"])(i,{avatar:t.avatar,username:t.username,onOnPress:function(n){return e.handlePress(t.id)}},null,8,["avatar","username","onOnPress"])])})),128))])]})),_:1})]),Object(r["f"])("div",O,[Object(r["h"])(A,null,{default:Object(r["r"])((function(){return[Object(r["f"])("div",p,[Object(r["h"])(g)]),Object(r["h"])(h,{onOnToggle:s.toggle},null,8,["onOnToggle"]),o.shown?(Object(r["j"])(),Object(r["e"])("div",v,[Object(r["f"])("ul",C,[(Object(r["j"])(),Object(r["e"])(r["a"],null,Object(r["m"])(5,(function(e){return Object(r["f"])("li",{class:"comments-item",key:e},[Object(r["h"])(w,{text:"Something",username:"Camil"})])})),64))])])):Object(r["d"])("",!0)]})),_:1})])],64)}var g=n("36b6"),h=n.n(g),w=function(e){return Object(r["l"])("data-v-4bdbff80"),e=e(),Object(r["k"])(),e},A=w((function(){return Object(r["f"])("div",{class:"avatar"},[Object(r["f"])("img",{src:h.a,class:"img",alt:"username avatar"})],-1)})),L={class:"username"};function x(e,t,n,c,o,s){return Object(r["j"])(),Object(r["e"])("button",{class:"c-story-user-item",onClick:t[0]||(t[0]=function(t){return e.$emit("onPress")})},[A,Object(r["f"])("div",L,Object(r["q"])(n.username),1)])}var y={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}},k=(n("a230"),n("6b0d")),E=n.n(k);const S=E()(y,[["render",x],["__scopeId","data-v-4bdbff80"]]);var U=S,V={class:"c-topbox"},R={class:"x-container"},I={class:"headline"},J={key:0,class:"content"};function q(e,t){return Object(r["j"])(),Object(r["e"])("div",V,[Object(r["f"])("div",R,[Object(r["f"])("div",I,[Object(r["n"])(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?(Object(r["j"])(),Object(r["e"])("div",J,[Object(r["n"])(e.$slots,"content",{},void 0,!0)])):Object(r["d"])("",!0)])])}n("dc22");const P={},N=E()(P,[["render",q],["__scopeId","data-v-2d519fc5"]]);var Z=N;n("b0c0");function T(e,t,n,c,o,s){return Object(r["j"])(),Object(r["c"])(Object(r["p"])(n.name))}var B=n("5530"),M=(n("caad"),n("2532"),n("b64b"),{preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),H=Object(r["f"])("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),Y=[H];function G(e,t){return Object(r["j"])(),Object(r["e"])("svg",M,Y)}const W={},Q=E()(W,[["render",G]]);var D=Q,z={preserveAspectRatio:"none",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=Object(r["f"])("path",{d:"M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z",fill:"#212121"},null,-1),_=[K];function F(e,t){return Object(r["j"])(),Object(r["e"])("svg",z,_)}const X={},$=E()(X,[["render",F]]);var ee=$,te={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=Object(r["f"])("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"#262626"},null,-1),ce=[ne];function re(e,t){return Object(r["j"])(),Object(r["e"])("svg",te,ce)}const oe={},se=E()(oe,[["render",re]]);var ae=se,ie={width:"16",heigth:"16",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=Object(r["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 1.25C8.14006 1.24991 8.2773 1.28901 8.39624 1.36289C8.51518 1.43676 8.61106 1.54245 8.67304 1.668L10.555 5.483L14.765 6.095C14.9035 6.11511 15.0336 6.17355 15.1405 6.26372C15.2475 6.35388 15.3272 6.47218 15.3704 6.60523C15.4137 6.73829 15.4189 6.8808 15.3854 7.01665C15.352 7.1525 15.2812 7.27628 15.181 7.374L12.135 10.344L12.854 14.536C12.8777 14.6739 12.8624 14.8157 12.8097 14.9454C12.757 15.0751 12.6691 15.1874 12.5559 15.2697C12.4427 15.352 12.3087 15.401 12.1691 15.4111C12.0295 15.4212 11.8899 15.3921 11.766 15.327L8.00004 13.347L4.23404 15.327C4.11023 15.392 3.97071 15.4211 3.83123 15.411C3.69176 15.4009 3.55788 15.352 3.44472 15.2699C3.33157 15.1877 3.24363 15.0755 3.19086 14.946C3.13808 14.8165 3.12255 14.6749 3.14604 14.537L3.86604 10.343L0.818042 7.374C0.717608 7.27632 0.646541 7.15247 0.612894 7.01647C0.579246 6.88047 0.584364 6.73777 0.627666 6.60453C0.670969 6.47129 0.750725 6.35284 0.857898 6.26261C0.96507 6.17238 1.09537 6.11397 1.23404 6.094L5.44404 5.483L7.32704 1.668C7.38902 1.54245 7.48491 1.43676 7.60385 1.36289C7.72279 1.28901 7.86003 1.24991 8.00004 1.25ZM8.00004 3.695L6.61504 6.5C6.56126 6.6089 6.48183 6.70311 6.38359 6.77453C6.28534 6.84595 6.17122 6.89244 6.05104 6.91L2.95404 7.36L5.19404 9.544C5.28119 9.62886 5.3464 9.73365 5.38403 9.84933C5.42166 9.96501 5.43059 10.0881 5.41004 10.208L4.88204 13.292L7.65104 11.836C7.75867 11.7794 7.87845 11.7499 8.00004 11.7499C8.12164 11.7499 8.24141 11.7794 8.34904 11.836L11.119 13.292L10.589 10.208C10.5685 10.0881 10.5774 9.96501 10.615 9.84933C10.6527 9.73365 10.7179 9.62886 10.805 9.544L13.045 7.361L9.94904 6.911C9.82886 6.89344 9.71474 6.84695 9.6165 6.77553C9.51825 6.70411 9.43883 6.6099 9.38504 6.501L8.00004 3.694V3.695Z",fill:"#586069"},null,-1),le=[ue];function fe(e,t){return Object(r["j"])(),Object(r["e"])("svg",ie,le)}const be={},je=E()(be,[["render",fe]]);var de=je,Oe={width:"16",heigth:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=Object(r["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z",fill:"#586069"},null,-1),ve=[pe];function Ce(e,t){return Object(r["j"])(),Object(r["e"])("svg",Oe,ve)}const me={},ge=E()(me,[["render",Ce]]);var he=ge,we={name:"Icon",components:Object(B["a"])({},c),props:{name:{type:String,required:!0,validator:function(e){return Object.keys(c).includes(e)}}}};const Ae=E()(we,[["render",T]]);var Le=Ae,xe=n("7714"),ye={class:"text"},ke={class:"icon"};function Ee(e,t,n,c,o,s){var a=Object(r["o"])("icon");return Object(r["j"])(),Object(r["e"])("button",{class:Object(r["i"])(["button",{active:o.isOpened}]),onClick:t[0]||(t[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)})},[Object(r["f"])("span",ye,Object(r["q"])(o.isOpened?"Hide":"Show")+"issues",1),Object(r["f"])("span",ke,[Object(r["h"])(a,{name:"shape"})])],2)}var Se={components:{icon:Le},data:function(){return{isOpened:!1}},methods:{toggle:function(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};n("fed6");const Ue=E()(Se,[["render",Ee],["__scopeId","data-v-3992c555"]]);var Ve=Ue,Re={class:"c-comment"},Ie={class:"username"};function Je(e,t,n,c,o,s){return Object(r["j"])(),Object(r["e"])("div",Re,[Object(r["f"])("p",null,[Object(r["f"])("span",Ie,Object(r["q"])(n.username),1),Object(r["g"])(" "+Object(r["q"])(n.text),1)])])}var qe={name:"comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};n("4cb4");const Pe=E()(qe,[["render",Je],["__scopeId","data-v-544a317a"]]);var Ne=Pe;function Ze(e,t,n,c,o,s){var a=Object(r["o"])("avatar"),i=Object(r["o"])("post");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a,{nickname:"joshua_l"}),Object(r["h"])(i)],64)}var Te=function(e){return Object(r["l"])("data-v-324d248e"),e=e(),Object(r["k"])(),e},Be={class:"post"},Me={class:"post__container"},He=Te((function(){return Object(r["f"])("h1",{class:"post__tile"},"Vue.js",-1)})),Ye=Te((function(){return Object(r["f"])("p",{class:"post__description"}," JavaScript framework for building interactive web applications ⚡ ",-1)})),Ge={class:"post__footer"},We={class:"icon"},Qe=Te((function(){return Object(r["f"])("span",{class:"teg"},"Star",-1)})),De={class:"rating"},ze={class:"icon"},Ke=Te((function(){return Object(r["f"])("span",{class:"teg"},"Fork",-1)})),_e={class:"followers"};function Fe(e,t,n,c,o,s){var a=Object(r["o"])("icon"),i=Object(r["o"])("rating"),u=Object(r["o"])("followers");return Object(r["j"])(),Object(r["e"])("div",Be,[Object(r["f"])("div",Me,[He,Ye,Object(r["f"])("div",Ge,[Object(r["f"])("div",We,[Object(r["h"])(a,{name:"star"}),Qe]),Object(r["f"])("div",De,[Object(r["h"])(i,{text:"1444"})]),Object(r["f"])("div",ze,[Object(r["h"])(a,{name:"fork"}),Ke]),Object(r["f"])("div",_e,[Object(r["h"])(u,{text:"13"})])])])])}var Xe={class:"c-rating"};function $e(e,t,n,c,o,s){return Object(r["j"])(),Object(r["e"])("div",Xe,[Object(r["f"])("p",null,Object(r["q"])(n.text),1)])}var et={name:"rating",props:{text:{type:String,required:!0}}};n("0b6b");const tt=E()(et,[["render",$e],["__scopeId","data-v-ae576dfe"]]);var nt=tt,ct={class:"followers"};function rt(e,t,n,c,o,s){return Object(r["j"])(),Object(r["e"])("div",ct,[Object(r["f"])("p",null,Object(r["q"])(n.text),1)])}var ot={name:"rating",props:{text:{type:String,required:!0}}};n("c4c6");const st=E()(ot,[["render",rt],["__scopeId","data-v-7985c146"]]);var at=st,it={name:"Post",data:function(){return{}},components:{icon:Le,rating:nt,followers:at}};n("f56a");const ut=E()(it,[["render",Fe],["__scopeId","data-v-324d248e"]]);var lt=ut,ft=function(e){return Object(r["l"])("data-v-60e2b454"),e=e(),Object(r["k"])(),e},bt={class:"avatar"},jt=ft((function(){return Object(r["f"])("img",{src:h.a,alt:"",class:"avatar__logo"},null,-1)})),dt={class:"avatar__text"};function Ot(e,t,n,c,o,s){return Object(r["j"])(),Object(r["e"])("div",bt,[jt,Object(r["f"])("p",dt,Object(r["q"])(n.nickname),1)])}var pt={name:"avatar",props:{nickname:String}};n("ba0a");const vt=E()(pt,[["render",Ot],["__scopeId","data-v-60e2b454"]]);var Ct=vt,mt={name:"Issues",data:function(){return{}},components:{post:lt,avatar:Ct}};const gt=E()(mt,[["render",Ze]]);var ht=gt,wt={name:"feeds",components:{topbox:Z,icon:Le,StoryUserItem:U,toggler:Ve,comment:Ne,issues:ht},data:function(){return{stories:xe,shown:!1}},methods:{toggle:function(e){this.shown=e}}};n("304f"),n("363f");const At=E()(wt,[["render",m],["__scopeId","data-v-91cc15dc"]]);var Lt=At,xt={name:"App",components:{feeds:Lt}};n("11de");const yt=E()(xt,[["render",o]]);var kt=yt;Object(r["b"])(kt).mount("#app")},7714:function(e){e.exports=JSON.parse('[{"id":"0","avatar":"./assets/Camilr.png","username":"Camilr"},{"id":"1","avatar":"./assets/Camilr.png","username":"Second"},{"id":"2","avatar":"./assets/Camilr.png","username":"Third"},{"id":"3","avatar":"./assets/Camilr.png","username":"Forth"},{"id":"4","avatar":"./assets/Photo.png","username":"5"},{"id":"5","avatar":"./assets/Camilr.png","username":"6"}]')},a230:function(e,t,n){"use strict";n("e9b9")},adbe:function(e,t,n){},ba0a:function(e,t,n){"use strict";n("adbe")},c480:function(e,t,n){},c4c6:function(e,t,n){"use strict";n("0332")},dc22:function(e,t,n){"use strict";n("260a")},e9b9:function(e,t,n){},eced:function(e,t,n){},f3c6:function(e,t,n){},f464:function(e,t,n){},f56a:function(e,t,n){"use strict";n("2f4d")},fed6:function(e,t,n){"use strict";n("43d7")}});
//# sourceMappingURL=app.c90c4c6a.js.map