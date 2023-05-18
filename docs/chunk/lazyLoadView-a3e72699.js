import{r as e,o as r,c as A,f as a,g as c}from"./vendor-b8e3fcbe.js";const u={__name:"lazyLoadView",setup(i){const o=[{id:"doc-title",title:"vue-router \u8BBE\u7F6E\u5F02\u6B65\u5206\u5305\u52A0\u8F7D\u89C6\u56FE"}];return(m,l)=>{const t=e("doc-code"),n=e("doc-page");return r(),A(n,{desc:"vue-router \u8BBE\u7F6E\u5F02\u6B65\u5206\u5305\u52A0\u8F7D\uFF0C\u5E76\u8BBE\u7F6E\u52A0\u8F7D\u4E2D\u89C6\u56FE\u548C\u52A0\u8F7D\u9519\u8BEF\u89C6\u56FE",toc:o},{default:a(()=>[c(t,{code:"import%20Vue%20from%20%27vue%27%0Aimport%20Router%20from%20%27vue-router%27%0Aimport%20GlobalLoading%20from%20%27@/components/common/GlobalLoading%27%0Aimport%20NetworkErr%20from%20%27@/components/common/NetworkErr%27%0A%0AVue.use%28Router%29%0A%0Afunction%20lazyLoadView%20%28asyncModule%29%20%7B%0A%20%20const%20AsyncHandler%20%3D%20%28%29%20%3D%3E%20%28%7B%0A%20%20%20%20component%3A%20asyncModule%2C%0A%20%20%20%20//%20component%3A%20asyncModule%2C%0A%20%20%20%20//%20A%20component%20to%20use%20while%20the%20component%20is%20loading.%0A%20%20%20%20loading%3A%20GlobalLoading%2C%0A%20%20%20%20//%20A%20fallback%20component%20in%20case%20the%20timeout%20is%20exceeded%0A%20%20%20%20//%20when%20loading%20the%20component.%0A%20%20%20%20error%3A%20NetworkErr%2C%0A%20%20%20%20//%20Delay%20before%20showing%20the%20loading%20component.%0A%20%20%20%20//%20Default%3A%20200%20%28milliseconds%29.%0A%20%20%20%20delay%3A%20400%2C%0A%20%20%20%20//%20Time%20before%20giving%20up%20trying%20to%20load%20the%20component.%0A%20%20%20%20//%20Default%3A%20Infinity%20%28milliseconds%29.%0A%20%20%20%20timeout%3A%2010000%2C%0A%20%20%7D%29%0A%20%20return%20Promise.resolve%28%7B%0A%20%20%20%20functional%3A%20true%2C%0A%20%20%20%20render%20%28h%2C%20%7B%20data%2C%20children%20%7D%29%20%7B%0A%20%20%20%20%20%20return%20h%28AsyncHandler%2C%20data%2C%20children%29%0A%20%20%20%20%7D%2C%0A%20%20%7D%29%0A%7D%0Aconst%20routes%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20path%3A%20%27/home%27%2C%0A%20%20%20%20name%3A%20%27Home%27%2C%0A%20%20%20%20component%3A%20%28%29%20%3D%3E%20import%28/*%20webpackChunkName%3A%20%22home%22%20*/%20%27@/views/Home.vue%27%29%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20path%3A%20%27/lazy%27%2C%0A%20%20%20%20name%3A%20%27Lazy%27%2C%0A%20%20%20%20component%3A%20%28%29%20%3D%3E%20lazyLoadView%28import%28/*%20webpackChunkName%3A%20%22lazy%22%20*/%20%27@/views/Lazy.vue%27%29%29%2C%0A%20%20%7D%2C%0A%5D%0Aconst%20router%20%3D%20new%20Router%28%7B%0A%20%20routes%2C%0A%7D%29%0Aexport%20default%20router%0A",lang:"javascript"})]),_:1})}}};export{u as default};