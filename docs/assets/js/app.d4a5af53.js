!function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);v.length;)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={0:0},o={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];i[e]?t.push(i[e]):0!==i[e]&&{2:1,3:1,4:1,5:1}[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="assets/css/"+e+".styles."+{2:"d723f98b",3:"374c2d93",4:"5c504533",5:"0ea28808",6:"efff91a9",7:"f2e8eb1e",8:"036f87fd",9:"72f46374",10:"b38cc5ec",11:"1c5b4f06",12:"f76efe76",13:"7d613ea3",14:"9107fce9",15:"348f29ab",16:"7152dc02",17:"cca32280",18:"2bfe0680",19:"41fb8874",20:"b8cd2916",21:"a37a963b",22:"70a35382",23:"c7003420",24:"f5a1e1ec",25:"27824c84",26:"f95569a2"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=(f=a[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var f;if((l=(f=u[c]).getAttribute("data-href"))===r||l===o)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],v.parentNode.removeChild(v),n(a)},v.href=o,document.getElementsByTagName("head")[0].appendChild(v)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+"assets/js/"+({}[e]||e)+"."+{2:"d723f98b",3:"374c2d93",4:"5c504533",5:"0ea28808",6:"efff91a9",7:"f2e8eb1e",8:"036f87fd",9:"72f46374",10:"b38cc5ec",11:"1c5b4f06",12:"f76efe76",13:"7d613ea3",14:"9107fce9",15:"348f29ab",16:"7152dc02",17:"cca32280",18:"2bfe0680",19:"41fb8874",20:"b8cd2916",21:"a37a963b",22:"70a35382",23:"c7003420",24:"f5a1e1ec",25:"27824c84",26:"f95569a2"}[e]+".js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([245,1]),n()}({10:function(e,t,n){"use strict";n.r(t);n(52),n(28),n(204),n(205);var r={data:function(){return{showMyProfile:!1,showReceivingQrCode:!1}},watch:{showMyProfile:{handler:function(e){var t=this;e&&this.$nextTick((function(){t.$refs.age.reset();var e=setTimeout((function(){t.$refs.age.start(),clearTimeout(e)}),400)}))},immediate:!0}}},i=(n(379),n(6)),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{elevation:0,app:"","clipped-left":"",dense:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return e.$emit("toggleDrawer")}}}),e._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-menu",{attrs:{"close-on-content-click":!1,"max-width":300,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){t.on,t.attrs;return[r("v-btn",{attrs:{large:"",text:""},on:{click:function(t){e.showMyProfile=!e.showMyProfile}}},[r("v-avatar",{staticClass:"mr-2",attrs:{size:"36"}},[r("img",{attrs:{src:n(377),alt:"mulinzi"}})]),e._v(" "),r("span",[e._v("木林子")]),e._v(" "),r("v-icon",[e._v("mdi-chevron-down")])],1)]}}]),model:{value:e.showMyProfile,callback:function(t){e.showMyProfile=t},expression:"showMyProfile"}},[e._v(" "),r("v-card",[r("v-list",[r("v-list-item",[r("v-list-item-avatar",{staticClass:"white--text",attrs:{color:"primary"}},[r("span",[e._v("木")])]),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v("mulinzi(Peter)")]),e._v(" "),r("v-list-item-subtitle",[e._v("Life is but a span,but i get div every day")])],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("mdi-at")])],1),e._v(" "),r("v-list-item-title",[r("a",{attrs:{href:"Mailto:mulinzi1991@yeah.net"}},[e._v("mulinzi1991@yeah.net")])])],1),e._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("mdi-home")])],1),e._v(" "),r("v-list-item-content",[e._v("深圳--黄冈--武汉")])],1),e._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("mdi-account")])],1),e._v(" "),r("v-list-item-content",[r("div",{staticClass:"d-flex"},[r("count-up",{ref:"age",attrs:{autoStart:!1,duration:6,endVal:9,startVal:6}}),e._v(" "),r("span",[e._v("0后阳光男孩，前端一枚")])],1)])],1),e._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("mdi-heart")])],1),e._v(" "),r("v-list-item-content",[e._v("爬山，旧地旅行，晒女友，钓鱼")])],1),e._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("mdi-currency-usd")])],1),e._v(" "),r("v-list-item-content",{staticStyle:{overflow:"visible"}},[r("v-btn",{staticClass:"justify-start ml-n5",attrs:{block:"",depressed:""},on:{click:function(t){e.showReceivingQrCode=!e.showReceivingQrCode}}},[e._v("\r\n              喜欢我的，支持一下吧\r\n              "),r("v-icon",[e._v("mdi-chevron-down")])],1)],1)],1)],1),e._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showReceivingQrCode,expression:"showReceivingQrCode"}]},[r("v-divider"),e._v(" "),r("img",{staticClass:"receiving-qr-code",attrs:{src:n(378),alt:"receivingQrCode"}})],1)])],1)],1)],1)}),[],!1,null,"9df21762",null).exports,a={methods:{toRoot:function(){"/"!==this.$route.path&&this.$router.push({path:"/"})}}},s=(n(380),Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"d-sm-flex d-none pa-3 justify-space-between",attrs:{app:"",padless:""}},[n("v-btn",{staticClass:"ma-n3",attrs:{depressed:"",icon:"","x-large":""},on:{click:e.toRoot}},[n("v-icon",[e._v("mdi-home")])],1),e._v(" "),n("div",[e._v("中华老字号版权所有")]),e._v(" "),e.$page.lastUpdated?n("div",[e._v("\r\n    最后更新时间\r\n    "),n("v-icon",{staticStyle:{"font-size":"1.7rem"}},[e._v("mdi-clock-time-ten-outline")]),e._v("\r\n    "+e._s(e._f("toDateLocaleString")(e.$page.lastUpdated))+"\r\n  ")],1):e._e()],1)}),[],!1,null,"76c4cf7e",null).exports),c=(n(180),n(181),n(74),n(7),n(95),n(208),{mixins:[n(209).a],data:function(){return{show:this.$vuetify.breakpoint.mdAndUp,search:null,open:[],active:[]}},watch:{$page:{handler:function(){this.focusItem()},immediate:!0}},methods:{toggleDrawer:function(e){void 0===e?(this.show=!this.show,this.show&&this.$emit("show")):this.show=e},leafClick:function(e){if(0!==e.length){var t=this.findNavObjByKey("id",e[0]);if(t){var n=t.routerPath;this.$page.regularPath!==encodeURI(n)&&this.$router.push({path:n})}}},focusItem:function(){var e=this,t=this.currentNavId;t?(this.active.includes(t)||this.active.push(t),this.getAllParentsById(t).forEach((function(t){var n=t.id;e.open.includes(n)||e.open.push(n)}))):(this.active.splice(0),this.open.splice(0))}}}),l=(n(381),Object(i.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{"mobile-breakpoint":960,app:"",clipped:"",width:"300"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-text-field",{staticClass:"mx-2 mt-3",attrs:{"append-icon":"mdi-magnify","clear-icon":"mdi-close-circle-outline",clearable:"",dense:"","hide-details":"auto",label:"查找笔记文件",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-treeview",{attrs:{active:e.active,items:e.sideNav,open:e.open,search:e.search,activatable:"","open-on-click":"",transition:""},on:{"update:active":[function(t){e.active=t},e.leafClick],"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item,i=t.open;return[r.isDirectory?n("v-icon",[e._v("\r\n        "+e._s(i?"mdi-folder-open":"mdi-folder")+"\r\n      ")]):n("v-icon",[e._v("mdi-file-document-outline")])]}}])})],1)}),[],!1,null,"78e25c3b",null).exports),u=n(382).getFileName,f={components:{HeaderBar:o,FooterBar:s,NavigationDrawer:l},data:function(){return{offsetTop:0,showBreadcrumbs:!0,bg:[{name:"化学分子",value:"chemicalMolecule"},{name:"黑客帝国",value:"theMatrix"},{name:"满天繁星",value:"stars"},{name:"3D粒子",value:"3Dparticles"},{name:"粒子漩涡",value:"particleVortex"}],x:0,y:0,currentBg:"chemicalMolecule",showToggleBgMenu:!1,iframeSrc:""}},watch:{$page:{handler:function(){console.log(this),this.toContainerTop()}},layout:{handler:function(e){this.currentBg="NotFound"===e?"theMatrix":"chemicalMolecule"},immediate:!0},currentBg:{handler:function(e){var t=this;this.$nextTick((function(){t.iframeSrc=t.$withBase("/bg/".concat(e,"/index.html"))}))},immediate:!0}},computed:{layout:function(){return this.$page.path?this.$frontmatter.layout?this.$frontmatter.layout:"Layout":"NotFound"},breadcrumbs:function(){var e=this.$page.relativePath;if(!e||"index.md"===e)return[];var t=this.$page.relativePath.split("/").map((function(e){return{text:e}}));t.unshift({text:""});var n=t[t.length-1];return n.text=u(n.text),t}},methods:{toContainerTop:function(){this.$vuetify.goTo(0,{container:"#scroll-body"})},toggleDrawer:function(e){this.$refs.drawer.toggleDrawer(e)},onScroll:function(e){this.offsetTop=e.target.scrollTop},centerDblclick:function(){this.showBreadcrumbs=!this.showBreadcrumbs,this.toggleDrawer(this.showBreadcrumbs)},contextmenu:function(e){var t=this;e.preventDefault(),this.x=e.clientX,this.y=e.clientY,this.$nextTick((function(){t.showToggleBgMenu=!0}))},changeBg:function(e){this.currentBg=e.value},globalMousedown:function(){this.showToggleBgMenu=!1}}},v=(n(385),Object(i.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"doc"},nativeOn:{mousedown:function(t){return e.globalMousedown.apply(null,arguments)}}},[e.$vuetify.breakpoint.mdAndUp?n("iframe",{attrs:{src:e.iframeSrc,frameborder:"0",height:"100%",scrolling:"no",width:"100%"}}):e._e(),e._v(" "),n("header-bar",{on:{toggleDrawer:e.toggleDrawer}}),e._v(" "),n("navigation-drawer",{ref:"drawer",on:{show:function(t){e.showBreadcrumbs=!0}}}),e._v(" "),n("v-main",[e.showBreadcrumbs&&e.breadcrumbs.length>0&&e.$vuetify.breakpoint.mdAndUp?n("div",{staticClass:"d-flex align-center px-4 breadcrumbs"},[n("v-icon",{staticClass:"mr-n6"},[e._v("mdi-folder-home")]),e._v(" "),n("v-breadcrumbs",{staticClass:"py-2",attrs:{items:e.breadcrumbs}})],1):e._e(),e._v(" "),n("div",{ref:"scrollBody",staticClass:"theme-container py-sm-10 py-0",class:e.$page.frontmatter.pageClass,attrs:{id:"scroll-body"},on:{contextmenu:e.contextmenu,dblclick:e.centerDblclick}},[n(e.layout,{tag:"component",nativeOn:{dblclick:function(e){e.stopPropagation()},contextmenu:function(e){e.stopPropagation()}}})],1),e._v(" "),n("v-menu",{attrs:{"position-x":e.x,"position-y":e.y,absolute:"","offset-y":""},model:{value:e.showToggleBgMenu,callback:function(t){e.showToggleBgMenu=t},expression:"showToggleBgMenu"}},[n("v-list",{nativeOn:{mousedown:function(e){e.stopPropagation()}}},e._l(e.bg,(function(t,r){return n("v-list-item",{key:r,attrs:{dense:"",ripple:""},on:{click:function(n){return e.changeBg(t)}}},[n("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1),e._v(" "),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.offsetTop>200,expression:"offsetTop > 200"},{name:"scroll",rawName:"v-scroll:#scroll-body",value:e.onScroll,expression:"onScroll",arg:"#scroll-body"}],staticClass:"to-top",attrs:{bottom:"",fab:"",fixed:"",right:""},on:{click:e.toContainerTop}},[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-arch")])],1)],1)],1),e._v(" "),n("footer-bar")],1)}),[],!1,null,"6d5ff614",null));t.default=v.exports},206:function(e,t,n){},207:function(e,t,n){},209:function(e,t,n){"use strict";t.a={computed:{sideNav:function(){return this.$site.themeConfig.sideNav},currentNavId:function(){var e=this.$page.regularPath,t=this.findNavObjByKey("routerPath",e);return t?t.id:null}},methods:{findNavObjByKey:function(e,t){return function n(r,i,o){for(var a=0;a<r.length;a++){var s=r[a];if(encodeURI(s[e])===t)return s;if(s.children){var c=n(s.children,i,o);if(c)return c}}}(this.sideNav,e,t)},getAllParentsById:function(e){var t=[];return function e(n,r){for(var i=0;i<n.length;i++){var o=n[i];if(o.id===r)return o;if(o.children){var a=e(o.children,r);if(a)return t.push(o),a}}}(this.sideNav,e),t}}}},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n(386),n(46),n(7),n(140),n(390),n(55);var r=n(137),i=n.n(r);n(391),n(392);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return String(e).padStart(n,t)}t.a=function(e){var t=e.Vue,n=e.options;e.router,e.siteData,e.isServer;t.use(i.a),t.filter("toDateLocaleString",(function(e){var t=new Date(e);if(e&&"Invalid Date"!==t.toString()){var n=function(e){return o(e,0)};return"".concat(t.getFullYear(),"年").concat(n(t.getMonth()+1),"月").concat(n(t.getDate()),"日")}return""})),t.filter("toDateLocaleStringWithTime",(function(e){var t=new Date(e);if(e&&"Invalid Date"!==t.toString()){var n=function(e){return o(e,0)};return"".concat(t.getFullYear(),"年").concat(n(t.getMonth()+1),"月").concat(n(t.getDate()),"日\n    ").concat(n(t.getHours()),":").concat(n(t.getMinutes()),":").concat(n(t.getSeconds()))}return""})),n.vuetify=new i.a({theme:{themes:{light:{primary:"#3eaf7c"}}},icons:{iconfont:"mdi"}})}},219:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=219},233:function(e,t,n){"use strict";t.a=function(){if("undefined"!=typeof window){var e=e||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?ed1ab63bfd0067ce75ba91ad9b7b4d37",e.async=1;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),e.push(["_requirePlugin","UrlChangeTracker",{shouldTrackUrlChange:function(e,t){return e&&t}}])}}},245:function(e,t,n){e.exports=n(446)},377:function(e,t,n){e.exports=n.p+"assets/img/me.fb408776.png"},378:function(e,t,n){e.exports=n.p+"assets/img/receivingQrCode.753ec20c.jpg"},379:function(e,t,n){"use strict";n(206)},380:function(e,t,n){"use strict";n(207)},381:function(e,t,n){"use strict";n(210)},382:function(e,t,n){n(383);var r=1;e.exports={uniqueId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+r++},getFileName:function(e){return e.substring(0,e.lastIndexOf("."))}}},385:function(e,t,n){"use strict";n(211)}});