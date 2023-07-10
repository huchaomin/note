import{n as o,o as c,p as A,w as s,a as u,i as t}from"./vendor-a2411ed8.js";const r=t("h2",{id:"1-\u7528\u6CD5",class:"doc-heading"},"\u7528\u6CD5",-1),p=t("h2",{id:"2-\u60F3\u8981\u88ABkeep-alive",class:"doc-heading"},"\u60F3\u8981\u88ABkeep-alive",-1),m={__name:"lazyLoadView",setup(i){const n=[{id:"doc-title",title:"lazyLoadView \u6DFB\u52A0\u8DEF\u7531\u8FC7\u5EA6\u7EC4\u4EF6"},{id:"1-\u7528\u6CD5",title:"1. \u7528\u6CD5"},{id:"2-\u60F3\u8981\u88ABkeep-alive",title:"2. \u60F3\u8981\u88ABkeep-alive"}];return(d,D)=>{const e=o("doc-code"),a=o("doc-page");return c(),A(a,{desc:"",toc:n},{default:s(()=>[r,u(e,{code:"//%20defineAsyncComponent%u4E0D%u80FD%u4F7F%u7528%u5728Vue%20Router%u4E0A%0A//%20%u51FD%u6570%u5F0F%u7EC4%u4EF6%u4E0D%u80FD%u88AB%20keepalive%0Afunction%20lazyLoadView%28asyncModule%29%20%7B%0A%20%20const%20asyncWrapper%20%3D%20defineAsyncComponent%28%7B%0A%20%20%20%20loader%3A%20asyncModule%2C%0A%20%20%20%20delay%3A%200%2C%0A%20%20%20%20timeout%3A%205000%2C%0A%20%20%20%20errorComponent%3A%20RouterSuspenseErr%2C%20//%20%u8DEF%u7531%u9519%u8BEF%u7EC4%u4EF6%0A%20%20%20%20loadingComponent%3A%20RouterSuspense%2C%20//%20%u8DEF%u7531%u8FC7%u5EA6%u7EC4%u4EF6%0A%20%20%7D%29%3B%0A%20%20const%20fn%20%3D%20%28%29%20%3D%3E%20h%28asyncWrapper%29%3B%0A%20%20fn.displayName%20%3D%20%27%u6BDB%u7EBF%u7528%u90FD%u6CA1%u6709%u7684%u540D%u5B57%27%3B%20//%20https%3A//router.vuejs.org/zh/api/index.html%23meta%0A%20%20return%20fn%3B%0A%7D%0A",lang:"js"}),p,u(e,{code:"%3Cscript%20setup%3E%0Aimport%20RouterSuspense%20from%20%27./RouterSuspense.vue%27%3B%0A%0Aconst%20route%20%3D%20useRoute%28%29%3B%0Aconst%20routerStore%20%3D%20useRouterStore%28%29%3B%0A%0Aconst%20keepAliveInclude%20%3D%20ref%28%5B%5D%29%3B%0A//%20%u8FD9%u91CC%u4EE3%u7801%u53EA%u4F1A%u8D70%u4E00%u904D%uFF0C%u7F13%u5B58%u7EC4%u4EF6%u7684%u5B9E%u4F8B%0Aconst%20compoCache%20%3D%20new%20Map%28%29%3B%0Awatch%28routerStore.recentRouters%2C%20%28arr%29%20%3D%3E%20%7B%0A%20%20compoCache.forEach%28%28v%2C%20k%29%20%3D%3E%20%7B%0A%20%20%20%20if%20%28%21arr.includes%28k%29%20%26%26%20k%20%21%3D%3D%20%27NotFound%27%29%20%7B%0A%20%20%20%20%20%20compoCache.delete%28k%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%29%3B%0A%7D%29%3B%0A%0Aconst%20asyncCompo%20%3D%20computed%28%28%29%20%3D%3E%20%7B%0A%20%20const%20%7B%20name%2C%20meta%20%7D%20%3D%20route%3B%0A%20%20if%20%28compoCache.has%28name%29%29%20%7B%0A%20%20%20%20return%20compoCache.get%28name%29%3B%0A%20%20%7D%0A%20%20const%20compo%20%3D%20defineAsyncComponent%28%7B%0A%20%20%20%20loader%3A%20%28%29%20%3D%3E%20meta.loader%28%29.then%28%28res%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20res.default.name%20%3D%20name%3B%20//%20for%20async%20components%2C%20name%20check%20should%20be%20based%20in%20its%20loaded%20inner%20component%20if%20available%0A%20%20%20%20%20%20return%20res%3B%0A%20%20%20%20%7D%29%2C%20//%20%u4E0E%20stores/router.js%20%u76EE%u5F55%u5C42%u7EA7%u76F8%u540C%0A%20%20%20%20loadingComponent%3A%20RouterSuspense%2C%0A%20%20%7D%29%3B%0A%20%20compo.name%20%3D%20name%3B%20//%20pruneCache%20%u7528%u5230%u8FD9%u4E2Aname%20%u5224%u65AD%u54EA%u4E9B%u7EC4%u4EF6%u9700%u8981%u88AB%u9500%u6BC1%0A%20%20compoCache.set%28name%2C%20compo%29%3B%0A%20%20return%20compo%3B%0A%7D%29%3B%0Awatch%28asyncCompo%2C%20%28%29%20%3D%3E%20%7B%0A%20%20keepAliveInclude.value%20%3D%20%5B...routerStore.recentRouters%5D%3B%0A%7D%2C%20%7B%0A%20%20immediate%3A%20true%2C%0A%7D%29%3B%0A%0A%3C/script%3E%0A%3Ctemplate%3E%0A%20%20%3Ctransition%0A%20%20%20%20appear%0A%20%20%20%20enter-active-class%3D%22animated%20fadeIn%22%0A%20%20%20%20leave-active-class%3D%22animated%20fadeOut%22%0A%20%20%20%20mode%3D%22out-in%22%0A%20%20%3E%0A%20%20%20%20%3Ckeep-alive%20%3Ainclude%3D%22keepAliveInclude%22%3E%0A%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%22asyncCompo%22%20class%3D%22full-height%22%3E%3C/component%3E%0A%20%20%20%20%3C/keep-alive%3E%0A%20%20%3C/transition%3E%0A%3C/template%3E%0A",lang:"js"})]),_:1})}}};export{m as default};
