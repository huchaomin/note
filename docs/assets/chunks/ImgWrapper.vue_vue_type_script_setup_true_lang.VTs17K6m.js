import{_ as o,j as n,r as c,Y as _,a1 as p,K as i}from"./framework.BAU0wbai.js";import{t as m}from"./theme.Cx5N_GoI.js";const l=Object.assign({"./css/@rules/@layer/layer.png":()=>o(()=>import("./layer.L4fhThF4.js"),[]).then(e=>e.default),"./tools/vitepress/preload字体/preload字体_结果.png":()=>o(()=>import("./preload字体_结果.D8i1xD4s.js"),[]).then(e=>e.default)}),u=Object.assign({}),h=n({__name:"ImgWrapper",props:{src:{}},setup(e){const s=e,r=c("");return(s.src.startsWith("img/")?u[`./${decodeURI(s.src.substring(4))}`]:l[`./${decodeURI(s.src)}`])().then(t=>{r.value=t}),(t,g)=>{const a=m;return _(),p(a,{lazy:"",src:i(r)},null,8,["src"])}}});export{h as _};
