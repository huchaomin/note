(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{469:function(t,e,n){},472:function(t,e,n){"use strict";n(469)},484:function(t,e,n){"use strict";n.r(e);n(108),n(464),n(51),n(8),n(256);var a={computed:{newestDocs:function(){return this.$site.pages.filter((function(t){return t.lastUpdated&&"/"!==t.path})).sort((function(t,e){var n=new Date(t.lastUpdated).valueOf();return new Date(e.lastUpdated).valueOf()-n})).slice(0,10)}},methods:{toPage:function(t){this.$router.push({path:decodeURI(t.regularPath)})}}},r=(n(472),n(7)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.newestDocs,(function(e,a){return n("div",{key:a,staticClass:"theme-default-content px-4 py-3 mb-4",class:{rounded:!t.$vuetify.breakpoint.mobile}},[n("p",[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.toPage(e)}}},[t._v("\r\n        "+t._s(e.frontmatter.title||e.relativePath)+"\r\n      ")])]),t._v(" "),e.frontmatter.description?n("p",{staticClass:"text--disabled text-truncate description"},[t._v(t._s(e.frontmatter.description))]):t._e(),t._v(" "),n("p",{staticClass:"detail text-truncate"},[t.$vuetify.breakpoint.mobile?t._e():n("span",[n("v-icon",[t._v("mdi-account")]),t._v("\r\n        "+t._s(t.$site.themeConfig.author.name)+"\r\n      ")],1),t._v(" "),n("span",[n("v-icon",[t._v("mdi-clock-time-ten-outline")]),t._v("\r\n        "+t._s(t._f("toDateLocaleString")(e.lastUpdated))+"\r\n      ")],1),t._v(" "),e.frontmatter.tags?n("span",[n("v-icon",[t._v("mdi-tag")]),t._v("\r\n        "+t._s(e.frontmatter.tags.join("|"))+"\r\n      ")],1):t._e()])])})),0)}),[],!1,null,"0ee31778",null);e.default=i.exports}}]);