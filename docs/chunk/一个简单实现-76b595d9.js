import{n as u,o as s,p as i,w as A,a as o,i as e}from"./vendor-a2411ed8.js";const a=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,"\u6CA1\u6709\u8003\u8651\u5B50\u8DEF\u7531")],-1),c=e("p",null,"/plugins/router/index.js",-1),p=e("p",null,"/plugins/router/routerLink.js",-1),l=e("p",null,"/plugins/router/routerView.js",-1),D={__name:"\u4E00\u4E2A\u7B80\u5355\u5B9E\u73B0",setup(d){const r=[{id:"doc-title",title:"\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A hashChange vue-router"}];return(h,C)=>{const t=u("doc-code"),n=u("doc-page");return s(),i(n,{desc:"",toc:r},{default:A(()=>[a,c,o(t,{code:"import%20Link%20from%20%27./routerLink.js%27%0Aimport%20View%20from%20%27./routerView.js%27%0Alet%20Vue%0Aclass%20VueRouter%20%7B%0A%20%20constructor%20%28options%29%20%7B%0A%20%20%20%20Vue.util.defineReactive%28this%2C%20%27current%27%2C%20null%29%0A%20%20%20%20window.addEventListener%28%27hashchange%27%2C%20this.hashChange.bind%28this%29%29%0A%20%20%20%20window.addEventListener%28%27load%27%2C%20this.hashChange.bind%28this%29%29%0A%0A%20%20%20%20//%20%u7F13%u5B58%u8DEF%u7531%u8868%0A%20%20%20%20this.routesMap%20%3D%20new%20Map%28%29%0A%20%20%20%20options.routes.forEach%28route%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.routesMap.set%28route.path%2C%20route%29%0A%20%20%20%20%7D%29%0A%20%20%7D%0A%20%20hashChange%20%28%29%20%7B%0A%20%20%20%20this.current%20%3D%20window.location.hash.slice%281%29%0A%20%20%7D%0A%7D%0A//%20%u4E3A%u4EC0%u4E48%u8981%u2F64%u6DF7%u2F0A%u2F45%u5F0F%u5199%uFF1F%u4E3B%u8981%u539F%u56E0%u662Fuse%u4EE3%u7801%u5728%u524D%uFF0CRouter%u5B9E%u4F8B%u521B%u5EFA%u5728%u540E%uFF0C%u2F7Dinstall%u903B%u8F91%u2F1C%u9700%u8981%u2F64%u5230%u8BE5%u5B9E%u4F8B%0AVueRouter.install%20%3D%20function%20%28_Vue%29%20%7B%0A%20%20Vue%20%3D%20_Vue%0A%20%20Vue.mixin%28%7B%0A%20%20%20%20beforeCreate%20%28%29%20%7B%0A%20%20%20%20%20%20if%20%28this.%24options.router%29%20%7B%0A%20%20%20%20%20%20%20%20Vue.prototype.%24router%20%3D%20this.%24options.router%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%7D%29%0A%20%20Vue.component%28%27router-link%27%2C%20Link%29%0A%20%20Vue.component%28%27router-view%27%2C%20View%29%0A%7D%0Aexport%20default%20VueRouter%0A",lang:"javascript"}),p,o(t,{code:"export%20default%20%7B%0A%20%20props%3A%20%7B%0A%20%20%20%20to%3A%20%7B%0A%20%20%20%20%20%20type%3A%20String%2C%0A%20%20%20%20%20%20required%3A%20true%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20render%20%28h%29%20%7B%0A%20%20%20%20return%20h%28%27a%27%2C%20%7B%0A%20%20%20%20%20%20attrs%3A%20%7B%0A%20%20%20%20%20%20%20%20href%3A%20%27%23%27%20+%20this.to%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%20%5B%0A%20%20%20%20%20%20this.%24slots.default%2C%0A%20%20%20%20%5D%29%0A%20%20%7D%2C%0A%7D%0A",lang:"javascript"}),l,o(t,{code:"export%20default%20%7B%0A%20%20render%20%28h%29%20%7B%0A%20%20%20%20const%20%7B%20routesMap%2C%20current%20%7D%20%3D%20this.%24router%0A%20%20%20%20const%20route%20%3D%20routesMap.get%28current%29%0A%20%20%20%20return%20h%28route%20%3F%20route.component%20%3A%20null%29%0A%20%20%7D%2C%0A%7D%0A",lang:"javascript"})]),_:1})}}};export{D as default};
