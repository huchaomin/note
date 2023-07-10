import{n as A,o as n,p as E,w as i,a as e,i as o}from"./vendor-a2411ed8.js";const C=o("h2",{id:"1-\u540C\u6B65\u914D\u7F6E",class:"doc-heading"},"\u540C\u6B65\u914D\u7F6E",-1),D=o("h2",{id:"2-\u5F02\u6B65\u914D\u7F6E\u548C\u83B7\u53D6\u914D\u7F6E\u53C2\u6570",class:"doc-heading"},"\u5F02\u6B65\u914D\u7F6E\u548C\u83B7\u53D6\u914D\u7F6E\u53C2\u6570",-1),r={__name:"vite.config_ts",setup(s){const t=[{id:"doc-title",title:"vite.config.ts \u914D\u7F6E\u4E00\u89C8"},{id:"1-\u540C\u6B65\u914D\u7F6E",title:"1. \u540C\u6B65\u914D\u7F6E"},{id:"2-\u5F02\u6B65\u914D\u7F6E\u548C\u83B7\u53D6\u914D\u7F6E\u53C2\u6570",title:"2. \u5F02\u6B65\u914D\u7F6E\u548C\u83B7\u53D6\u914D\u7F6E\u53C2\u6570"}];return(d,a)=>{const u=A("doc-code"),F=A("doc-page");return n(),E(F,{desc:"",toc:t},{default:i(()=>[C,e(u,{code:"import%20%7B%20resolve%20%7D%20from%20%27path%27%0Aimport%20%7B%20defineConfig%20%7D%20from%20%27vite%27%0A%0Aexport%20default%20defineConfig%28%7B%0A%20%20root%3A%20process.cwd%28%29%2C%20//%20%u9879%u76EE%u6839%u76EE%u5F55%28index.html%20%u6587%u4EF6%u6240%u5728%u7684%u4F4D%u7F6E%29%0A%20%20base%3A%20%27/%27%2C%20//%20%u90E8%u7F72%u65F6%u7684%u57FA%u672C%20URL%0A%20%20mode%3A%20%27development%27%2C%20//%20%u5F00%u53D1%u6A21%u5F0F%2C%u5728%u914D%u7F6E%u4E2D%u6307%u660E%u5C06%u4F1A%u628A%20serve%20%u548C%20build%20%u65F6%u7684%u6A21%u5F0F%20%u90FD%20%u8986%u76D6%u6389%u3002%u4E5F%u53EF%u4EE5%u901A%u8FC7%u547D%u4EE4%u884C%20--mode%20%u9009%u9879%u6765%u91CD%u5199%0A%20%20esbuild%3A%20%7B%0A%20%20%20%20jsxFactory%3A%20%27h%27%2C%0A%20%20%20%20jsxFragment%3A%20%27Fragment%27%2C%0A%20%20%20%20jsxInject%3A%20%60import%20React%20from%20%27react%27%60%2C%0A%20%20%7D%2C%0A%20%20optimizeDeps%3A%20%7B%20//%20%u6709%u4E9B%u4F9D%u8D56%u4E0D%u80FD%u88ABvite%u627E%u5230%uFF0C%u9700%u8981%u624B%u52A8%u6307%u5B9A%uFF08%u6BD4%u5982import%u6307%u4EE4%u662F%u7F16%u8BD1%u540E%u751F%u6210%u7684%uFF09%0A%20%20%20%20//%20%u94FE%u63A5%u4F9D%u8D56%u5728%u9884%u6784%u5EFA%u65F6%u4E3B%u52A8%u8F6C%u6362%u4E3Aesm%0A%20%20%20%20//%20%u5982%u679C%u4F9D%u8D56%u9879%u5F88%u5927%uFF08%u5305%u542B%u5F88%u591A%u5185%u90E8%u6A21%u5757%uFF09%u6216%u8005%u662F%20CommonJS%0A%20%20%20%20include%3A%20%5B%27linked-dep%27%5D%2C%0A%20%20%20%20//%20%u5982%u679C%u4F9D%u8D56%u9879%u5F88%u5C0F%uFF0C%u5E76%u4E14%u5DF2%u7ECF%u662F%u6709%u6548%u7684%20ESM%0A%20%20%20%20exclude%3A%20%5B%27dep-a%27%5D%2C%0A%20%20%7D%2C%0A%20%20css%3A%20%7B%0A%20%20%20%20preprocessorOptions%3A%20%7B%0A%20%20%20%20%20%20scss%3A%20%7B%0A%20%20%20%20%20%20%20%20additionalData%3A%20%60%24injectedColor%3A%20orange%3B%60%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20build%3A%20%7B%0A%20%20%20%20//%20%u5728%20outDir%20%u4E2D%u751F%u6210%20manifest.json%0A%20%20%20%20manifest%3A%20true%2C%0A%20%20%20%20cssCodeSplit%3A%20true%2C%20//%20%u5728%u5F02%u6B65%20chunk%20%u4E2D%u5BFC%u5165%u7684%20CSS%20%u5C06%u5185%u8054%u5230%u5F02%u6B65%20chunk%20%u672C%u8EAB%uFF0C%u5E76%u5728%u5176%u88AB%u52A0%u8F7D%u65F6%u4E00%u5E76%u83B7%u53D6%2C%20%u5982%u679C%u7981%u7528%uFF0C%u6574%u4E2A%u9879%u76EE%u4E2D%u7684%u6240%u6709%20CSS%20%u5C06%u88AB%u63D0%u53D6%u5230%u4E00%u4E2A%20CSS%20%u6587%u4EF6%u4E2D%0A%20%20%20%20commonjsOptions%3A%20%7B%0A%20%20%20%20%20%20include%3A%20%5B/linked-dep/%2C%20/node_modules/%5D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20rollupOptions%3A%20%7B%0A%20%20%20%20%20%20//%20https%3A//rollupjs.org/configuration-options/%0A%20%20%20%20%20%20input%3A%20%7B%20//%20%u5165%u53E3%u6587%u4EF6%0A%20%20%20%20%20%20%20%20main%3A%20resolve%28__dirname%2C%20%27index.html%27%29%2C%0A%20%20%20%20%20%20%20%20nested%3A%20resolve%28__dirname%2C%20%27nested/index.html%27%29%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20output%3A%20%7B%0A%20%20%20%20%20%20%20%20manualChunks%3A%20%7B%20//%20%u81EA%u5B9A%u4E49%20chunk%20%u5206%u5272%u7B56%u7565%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20lib%3A%20%7B%20//%20%u6784%u5EFA%u5E93%0A%20%20%20%20%20%20%20%20//%20Could%20also%20be%20a%20dictionary%20or%20array%20of%20multiple%20entry%20points%0A%20%20%20%20%20%20%20%20entry%3A%20resolve%28__dirname%2C%20%27lib/main.js%27%29%2C%0A%20%20%20%20%20%20%20%20name%3A%20%27MyLib%27%2C%0A%20%20%20%20%20%20%20%20//%20the%20proper%20extensions%20will%20be%20added%0A%20%20%20%20%20%20%20%20fileName%3A%20%27my-lib%27%2C%20//%20%u8F93%u51FA%u6587%u4EF6%u540D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20//%20%u786E%u4FDD%u5916%u90E8%u5316%u5904%u7406%u90A3%u4E9B%u4F60%u4E0D%u60F3%u6253%u5305%u8FDB%u5E93%u7684%u4F9D%u8D56%0A%20%20%20%20%20%20external%3A%20%5B%27vue%27%5D%2C%0A%20%20%20%20%20%20//%20%u5728%20UMD%20%u6784%u5EFA%u6A21%u5F0F%u4E0B%u4E3A%u8FD9%u4E9B%u5916%u90E8%u5316%u7684%u4F9D%u8D56%u63D0%u4F9B%u4E00%u4E2A%u5168%u5C40%u53D8%u91CF%0A%20%20%20%20%20%20globals%3A%20%7B%0A%20%20%20%20%20%20%20%20vue%3A%20%27Vue%27%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%29%0A",lang:"typescript"}),D,e(u,{code:"import%20%7B%20defineConfig%2C%20loadEnv%20%7D%20from%20%27vite%27%0A%0Aexport%20default%20defineConfig%28async%20%28%7B%20command%2C%20mode%20%7D%29%20%3D%3E%20%7B%0A%20%20const%20data%20%3D%20await%20asyncFunction%28%29%0A%0A%20%20//%20%u6839%u636E%u5F53%u524D%u5DE5%u4F5C%u76EE%u5F55%u4E2D%u7684%20%60mode%60%20%u52A0%u8F7D%20.env%20%u6587%u4EF6%0A%20%20//%20%u8BBE%u7F6E%u7B2C%u4E09%u4E2A%u53C2%u6570%u4E3A%20%27%27%20%u6765%u52A0%u8F7D%u6240%u6709%u73AF%u5883%u53D8%u91CF%uFF0C%u800C%u4E0D%u7BA1%u662F%u5426%u6709%20%60VITE_%60%20%u524D%u7F00%u3002%0A%20%20const%20env%20%3D%20loadEnv%28mode%2C%20process.cwd%28%29%2C%20%27%27%29%20//%20%u5728%u914D%u7F6E%u4E2D%u83B7%u53D6%u73AF%u5883%u53D8%u91CF%0A%20%20return%20%7B%0A%20%20%20%20//%20vite%20%u914D%u7F6E%0A%20%20%20%20define%3A%20%7B%0A%20%20%20%20%20%20__APP_ENV__%3A%20env.APP_ENV%2C%0A%20%20%20%20%20%20%27import.meta.env.ENV_VARIABLE%27%3A%20JSON.stringify%28process.env.ENV_VARIABLE%29%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%0A%7D%29%0A",lang:"typescript"})]),_:1})}}};export{r as default};
