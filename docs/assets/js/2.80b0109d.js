(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{447:function(t,e,n){},451:function(t,e,n){"use strict";var r=n(4),o=n(5),a=n(34),i=n(21),s=n(29),c=n(16),u=n(6),f=n(452),v=n(35),d=n(453),l=n(454),p=n(63),h=n(455),_=[],m=o(_.sort),g=o(_.push),k=u((function(){_.sort(void 0)})),w=u((function(){_.sort(null)})),b=v("sort"),x=!u((function(){if(p)return p<70;if(!(d&&d>3)){if(l)return!0;if(h)return h<603;var t,e,n,r,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)_.push({k:e+r,v:n})}for(_.sort((function(t,e){return e.v-t.v})),r=0;r<_.length;r++)e=_[r].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));r({target:"Array",proto:!0,forced:k||!w||!b||!x},{sort:function(t){void 0!==t&&a(t);var e=i(this);if(x)return void 0===t?m(e):m(e,t);var n,r,o=[],u=s(e);for(r=0;r<u;r++)r in e&&g(o,e[r]);for(f(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<u;)delete e[r++];return e}})},452:function(t,e,n){var r=n(139),o=Math.floor,a=function(t,e){var n=t.length,c=o(n/2);return n<8?i(t,e):s(t,a(r(t,0,c),e),a(r(t,c),e),e)},i=function(t,e){for(var n,r,o=t.length,a=1;a<o;){for(r=a,n=t[a];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==a++&&(t[r]=n)}return t},s=function(t,e,n,r){for(var o=e.length,a=n.length,i=0,s=0;i<o||s<a;)t[i+s]=i<o&&s<a?r(e[i],n[s])<=0?e[i++]:n[s++]:i<o?e[i++]:n[s++];return t};t.exports=a},453:function(t,e,n){var r=n(46).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},454:function(t,e,n){var r=n(46);t.exports=/MSIE|Trident/.test(r)},455:function(t,e,n){var r=n(46).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},456:function(t,e,n){"use strict";n(447)},468:function(t,e,n){"use strict";n.r(e);n(106),n(451),n(47),n(8),n(140);var r={computed:{newestDocs:function(){return this.$site.pages.filter((function(t){return t.lastUpdated&&"/"!==t.path})).sort((function(t,e){var n=new Date(t.lastUpdated).valueOf();return new Date(e.lastUpdated).valueOf()-n})).slice(0,10)}},methods:{toPage:function(t){this.$router.push({path:decodeURI(t.regularPath)})}}},o=(n(456),n(7)),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.newestDocs,(function(e,r){return n("div",{key:r,staticClass:"theme-default-content px-4 py-3 mb-4",class:{rounded:t.$vuetify.breakpoint.smAndUp}},[n("p",[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.toPage(e)}}},[t._v("\r\n        "+t._s(e.frontmatter.title||e.relativePath)+"\r\n      ")])]),t._v(" "),e.frontmatter.description?n("p",{staticClass:"text--disabled text-truncate description"},[t._v(t._s(e.frontmatter.description))]):t._e(),t._v(" "),n("p",{staticClass:"detail text-truncate"},[t.$vuetify.breakpoint.smAndUp?n("span",[n("v-icon",[t._v("mdi-account")]),t._v("\r\n        "+t._s(t.$site.themeConfig.author.name)+"\r\n      ")],1):t._e(),t._v(" "),n("span",[n("v-icon",[t._v("mdi-clock-time-ten-outline")]),t._v("\r\n        "+t._s(t._f("toDateLocaleString")(e.lastUpdated))+"\r\n      ")],1),t._v(" "),e.frontmatter.tags?n("span",[n("v-icon",[t._v("mdi-tag")]),t._v("\r\n        "+t._s(e.frontmatter.tags.join("|"))+"\r\n      ")],1):t._e()])])})),0)}),[],!1,null,"4f45e0a4",null);e.default=a.exports}}]);