!function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(v&&v(e);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={0:0},o={0:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[];i[t]?e.push(i[t]):0!==i[t]&&{2:1,3:1,4:1,5:1}[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="assets/css/"+t+".styles."+{2:"636e3310",3:"9a57981e",4:"5ab2a898",5:"d7628f97",6:"6a6c3de3",7:"c97b273c",8:"5e09ad55",9:"65100feb",10:"fc39bdbe",11:"3a9c83cc",12:"48a542e6",13:"b922c3de",14:"a09188f1",15:"27b15e84",16:"891c5658",17:"582a4fed"}[t]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=(v=a[c]).getAttribute("data-href")||v.getAttribute("href");if("stylesheet"===v.rel&&(l===r||l===o))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var v;if((l=(v=u[c]).getAttribute("data-href"))===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(t){return s.p+"assets/js/"+({}[t]||t)+"."+{2:"636e3310",3:"9a57981e",4:"5ab2a898",5:"d7628f97",6:"6a6c3de3",7:"c97b273c",8:"5e09ad55",9:"65100feb",10:"fc39bdbe",11:"3a9c83cc",12:"48a542e6",13:"b922c3de",14:"a09188f1",15:"27b15e84",16:"891c5658",17:"582a4fed"}[t]+".js"}(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var v=l;a.push([245,1]),n()}({206:function(t,e,n){},207:function(t,e,n){},209:function(t,e,n){"use strict";e.a={computed:{sideNav:function(){return this.$site.themeConfig.sideNav},currentNavId:function(){var t=this.$page.regularPath,e=this.findNavObjByKey("routerPath",t);return e?e.id:null}},methods:{findNavObjByKey:function(t,e){return function n(r,i,o){for(var a=0;a<r.length;a++){var s=r[a];if(encodeURI(s[t])===e)return s;if(s.children){var c=n(s.children,i,o);if(c)return c}}}(this.sideNav,t,e)},getAllParentsById:function(t){var e=[];return function t(n,r){for(var i=0;i<n.length;i++){var o=n[i];if(o.id===r)return o;if(o.children){var a=t(o.children,r);if(a)return e.push(o),a}}}(this.sideNav,t),e}}}},210:function(t,e,n){},211:function(t,e,n){},212:function(t,e,n){"use strict";n(386),n(46),n(6),n(140),n(390),n(55);var r=n(137),i=n.n(r);n(391),n(392);function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return String(t).padStart(n,e)}e.a=function(t){var e=t.Vue,n=t.options;t.router,t.siteData,t.isServer;e.use(i.a),e.filter("toDateLocaleString",(function(t){var e=new Date(t);if(t&&"Invalid Date"!==e.toString()){var n=function(t){return o(t,0)};return"".concat(e.getFullYear(),"年").concat(n(e.getMonth()+1),"月").concat(n(e.getDate()),"日")}return""})),e.filter("toDateLocaleStringWithTime",(function(t){var e=new Date(t);if(t&&"Invalid Date"!==e.toString()){var n=function(t){return o(t,0)};return"".concat(e.getFullYear(),"年").concat(n(e.getMonth()+1),"月").concat(n(e.getDate()),"日\n    ").concat(n(e.getHours()),":").concat(n(e.getMinutes()),":").concat(n(e.getSeconds()))}return""})),n.vuetify=new i.a({theme:{themes:{light:{primary:"#3eaf7c"}}},icons:{iconfont:"mdi"}})}},219:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=219},233:function(t,e,n){"use strict";e.a=function(){if("undefined"!=typeof window){var t=t||[];!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?ed1ab63bfd0067ce75ba91ad9b7b4d37",t.async=1;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),t.push(["_requirePlugin","UrlChangeTracker",{shouldTrackUrlChange:function(t,e){return t&&e}}])}}},245:function(t,e,n){t.exports=n(446)},28:function(t,e,n){"use strict";n.r(e);n(52),n(27),n(204),n(205);var r={data:function(){return{showMyProfile:!1,showReceivingQrCode:!1}},watch:{showMyProfile:{handler:function(t){var e=this;t&&this.$nextTick((function(){e.$refs.age.reset();var t=setTimeout((function(){e.$refs.age.start(),clearTimeout(t)}),400)}))},immediate:!0}}},i=(n(379),n(5)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{elevation:0,app:"","clipped-left":"",dense:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("toggleDrawer")}}}),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-menu",{attrs:{"close-on-content-click":!1,"max-width":300,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on,e.attrs;return[r("v-btn",{attrs:{large:"",text:""},on:{click:function(e){t.showMyProfile=!t.showMyProfile}}},[r("v-avatar",{staticClass:"mr-2",attrs:{size:"36"}},[r("img",{attrs:{src:n(377),alt:"mulinzi"}})]),t._v(" "),r("span",[t._v("木林子")]),t._v(" "),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}]),model:{value:t.showMyProfile,callback:function(e){t.showMyProfile=e},expression:"showMyProfile"}},[t._v(" "),r("v-card",[r("v-list",[r("v-list-item",[r("v-list-item-avatar",{staticClass:"white--text",attrs:{color:"primary"}},[r("span",[t._v("木")])]),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("mulinzi(Peter)")]),t._v(" "),r("v-list-item-subtitle",[t._v("Life is but a span,but i get div every day")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v("mdi-at")])],1),t._v(" "),r("v-list-item-title",[r("a",{attrs:{href:"Mailto:mulinzi1991@yeah.net"}},[t._v("mulinzi1991@yeah.net")])])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v("mdi-home")])],1),t._v(" "),r("v-list-item-content",[t._v("深圳--黄冈--武汉")])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v("mdi-account")])],1),t._v(" "),r("v-list-item-content",[r("div",{staticClass:"d-flex"},[r("count-up",{ref:"age",attrs:{autoStart:!1,duration:6,endVal:9,startVal:6}}),t._v(" "),r("span",[t._v("0后阳光男孩，前端一枚")])],1)])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("v-list-item-content",[t._v("爬山，旧地旅行，晒女友，钓鱼")])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v("mdi-currency-usd")])],1),t._v(" "),r("v-list-item-content",{staticStyle:{overflow:"visible"}},[r("v-btn",{staticClass:"justify-start ml-n5",attrs:{block:"",depressed:""},on:{click:function(e){t.showReceivingQrCode=!t.showReceivingQrCode}}},[t._v("\r\n              喜欢我的，支持一下吧\r\n              "),r("v-icon",[t._v("mdi-chevron-down")])],1)],1)],1)],1),t._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showReceivingQrCode,expression:"showReceivingQrCode"}]},[r("v-divider"),t._v(" "),r("img",{staticClass:"receiving-qr-code",attrs:{src:n(378),alt:"receivingQrCode"}})],1)])],1)],1)],1)}),[],!1,null,"9df21762",null).exports,a={methods:{toRoot:function(){"/"!==this.$route.path&&this.$router.push({path:"/"})}}},s=(n(380),Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-sm-flex d-none pa-3 justify-space-between",attrs:{app:"",padless:""}},[n("v-btn",{staticClass:"ma-n3",attrs:{depressed:"",icon:"","x-large":""},on:{click:t.toRoot}},[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("div",[t._v("中华老字号版权所有")]),t._v(" "),t.$page.lastUpdated?n("div",[t._v("\r\n    最后更新时间\r\n    "),n("v-icon",{staticStyle:{"font-size":"1.7rem"}},[t._v("mdi-clock-time-ten-outline")]),t._v("\r\n    "+t._s(t._f("toDateLocaleString")(t.$page.lastUpdated))+"\r\n  ")],1):t._e()],1)}),[],!1,null,"76c4cf7e",null).exports),c=(n(180),n(181),n(74),n(6),n(95),n(208),{mixins:[n(209).a],data:function(){return{show:this.$vuetify.breakpoint.mdAndUp,search:null,open:[],active:[]}},watch:{$page:{handler:function(){this.focusItem()},immediate:!0}},methods:{toggleDrawer:function(t){void 0===t?(this.show=!this.show,this.show&&this.$emit("show")):this.show=t},leafClick:function(t){if(0!==t.length){var e=this.findNavObjByKey("id",t[0]);if(e){var n=e.routerPath;this.$page.regularPath!==encodeURI(n)&&this.$router.push({path:n})}}},focusItem:function(){var t=this,e=this.currentNavId;e?(this.active.includes(e)||this.active.push(e),this.getAllParentsById(e).forEach((function(e){var n=e.id;t.open.includes(n)||t.open.push(n)}))):(this.active.splice(0),this.open.splice(0))}}}),l=(n(381),Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{"mobile-breakpoint":960,app:"",clipped:"",width:"300"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-text-field",{staticClass:"mx-2 mt-3",attrs:{"append-icon":"mdi-magnify","clear-icon":"mdi-close-circle-outline",clearable:"",dense:"","hide-details":"auto",label:"查找笔记文件",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-treeview",{attrs:{active:t.active,items:t.sideNav,open:t.open,search:t.search,activatable:"","open-on-click":"",transition:""},on:{"update:active":[function(e){t.active=e},t.leafClick],"update:open":function(e){t.open=e}},scopedSlots:t._u([{key:"prepend",fn:function(e){var r=e.item,i=e.open;return[r.isDirectory?n("v-icon",[t._v("\r\n        "+t._s(i?"mdi-folder-open":"mdi-folder")+"\r\n      ")]):n("v-icon",[t._v("mdi-file-document-outline")])]}}])})],1)}),[],!1,null,"78e25c3b",null).exports),u=n(382).getFileName,v={components:{HeaderBar:o,FooterBar:s,NavigationDrawer:l},data:function(){return{offsetTop:0,showBreadcrumbs:!0,bg:[{name:"化学分子",value:"chemicalMolecule"},{name:"黑客帝国",value:"theMatrix"},{name:"满天繁星",value:"stars"},{name:"3D粒子",value:"3Dparticles"},{name:"粒子漩涡",value:"particleVortex"}],x:0,y:0,currentBg:"chemicalMolecule",showToggleBgMenu:!1,iframeSrc:""}},watch:{$page:{handler:function(){console.log(this),this.toContainerTop()}},layout:{handler:function(t){this.currentBg="NotFound"===t?"theMatrix":"chemicalMolecule"},immediate:!0},currentBg:{handler:function(t){var e=this;this.$nextTick((function(){e.iframeSrc=e.$withBase("/bg/".concat(t,"/index.html"))}))},immediate:!0}},computed:{layout:function(){return this.$page.path?this.$frontmatter.layout?this.$frontmatter.layout:"Layout":"NotFound"},breadcrumbs:function(){var t=this.$page.relativePath;if(!t||"index.md"===t)return[];var e=this.$page.relativePath.split("/").map((function(t){return{text:t}}));e.unshift({text:""});var n=e[e.length-1];return n.text=u(n.text),e}},methods:{toContainerTop:function(){this.$vuetify.goTo(0,{container:"#scroll-body"})},toggleDrawer:function(t){this.$refs.drawer.toggleDrawer(t)},onScroll:function(t){this.offsetTop=t.target.scrollTop},centerDblclick:function(){this.showBreadcrumbs=!this.showBreadcrumbs,this.toggleDrawer(this.showBreadcrumbs)},contextmenu:function(t){var e=this;t.preventDefault(),this.x=t.clientX,this.y=t.clientY,this.$nextTick((function(){e.showToggleBgMenu=!0}))},changeBg:function(t){this.currentBg=t.value},globalMousedown:function(){this.showToggleBgMenu=!1}}},f=(n(385),Object(i.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"doc"},nativeOn:{mousedown:function(e){return t.globalMousedown.apply(null,arguments)}}},[n("iframe",{attrs:{src:t.iframeSrc,frameborder:"0",height:"100%",scrolling:"no",width:"100%"}}),t._v(" "),n("header-bar",{on:{toggleDrawer:t.toggleDrawer}}),t._v(" "),n("navigation-drawer",{ref:"drawer",on:{show:function(e){t.showBreadcrumbs=!0}}}),t._v(" "),n("v-main",[t.showBreadcrumbs&&t.breadcrumbs.length>0?n("div",{staticClass:"d-flex align-center px-4 breadcrumbs"},[n("v-icon",{staticClass:"mr-n6"},[t._v("mdi-folder-home")]),t._v(" "),n("v-breadcrumbs",{staticClass:"py-2",attrs:{items:t.breadcrumbs}})],1):t._e(),t._v(" "),n("div",{ref:"scrollBody",staticClass:"theme-container py-sm-10 py-0",class:t.$page.frontmatter.pageClass,attrs:{id:"scroll-body"},on:{contextmenu:t.contextmenu,dblclick:t.centerDblclick}},[n(t.layout,{tag:"component",nativeOn:{dblclick:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation()}}})],1),t._v(" "),n("v-menu",{attrs:{"position-x":t.x,"position-y":t.y,absolute:"","offset-y":""},model:{value:t.showToggleBgMenu,callback:function(e){t.showToggleBgMenu=e},expression:"showToggleBgMenu"}},[n("v-list",{nativeOn:{mousedown:function(t){t.stopPropagation()}}},t._l(t.bg,(function(e,r){return n("v-list-item",{key:r,attrs:{dense:"",ripple:""},on:{click:function(n){return t.changeBg(e)}}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),t._v(" "),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.offsetTop>200,expression:"offsetTop > 200"},{name:"scroll",rawName:"v-scroll:#scroll-body",value:t.onScroll,expression:"onScroll",arg:"#scroll-body"}],staticClass:"to-top",attrs:{bottom:"",fab:"",fixed:"",right:""},on:{click:t.toContainerTop}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-arch")])],1)],1)],1),t._v(" "),n("footer-bar")],1)}),[],!1,null,"02a7a3d6",null));e.default=f.exports},377:function(t,e,n){t.exports=n.p+"assets/img/me.fb408776.png"},378:function(t,e,n){t.exports=n.p+"assets/img/receivingQrCode.753ec20c.jpg"},379:function(t,e,n){"use strict";n(206)},380:function(t,e,n){"use strict";n(207)},381:function(t,e,n){"use strict";n(210)},382:function(t,e,n){n(383);var r=1;t.exports={uniqueId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+r++},getFileName:function(t){return t.substring(0,t.lastIndexOf("."))}}},385:function(t,e,n){"use strict";n(211)}});