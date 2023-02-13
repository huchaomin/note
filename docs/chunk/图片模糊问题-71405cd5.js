import{r as s,o as d,c as o,f as a,g as i,aa as e}from"./vendor-90615676.js";const r=e("h2",{id:"1-\u80CC\u666F\u56FE",class:"doc-heading"},"\u80CC\u666F\u56FE",-1),g=e("h3",{id:"2-\u901A\u8FC7\u5A92\u4F53\u67E5\u8BE2\u8BBE\u7F6E\u4E0D\u540C\u7684\u80CC\u666F\u56FE",class:"doc-heading"},"\u901A\u8FC7\u5A92\u4F53\u67E5\u8BE2\u8BBE\u7F6E\u4E0D\u540C\u7684\u80CC\u666F\u56FE",-1),m=e("h3",{id:"3-image-set",class:"doc-heading"},"image-set",-1),l=e("h3",{id:"4-\u4F7F\u7528svg",class:"doc-heading"},"\u4F7F\u7528svg",-1),p=e("h2",{id:"5-img-\u6807\u7B7E",class:"doc-heading"},"img \u6807\u7B7E",-1),u=e("h3",{id:"6-srcset",class:"doc-heading"},"srcset",-1),h=e("h3",{id:"7-picture",class:"doc-heading"},"picture",-1),_=e("h3",{id:"8-javascript\u62FC\u63A5\u56FE\u7247url",class:"doc-heading"},"JavaScript\u62FC\u63A5\u56FE\u7247url",-1),x=e("h3",{id:"9-\u4F7F\u7528svg",class:"doc-heading"},"\u4F7F\u7528svg",-1),k={__name:"\u56FE\u7247\u6A21\u7CCA\u95EE\u9898",setup(b){const c=[{id:"doc-title",title:"\u56FE\u7247\u6A21\u7CCA\u95EE\u9898"},{id:"1-\u80CC\u666F\u56FE",title:"1. \u80CC\u666F\u56FE"},{id:"2-\u901A\u8FC7\u5A92\u4F53\u67E5\u8BE2\u8BBE\u7F6E\u4E0D\u540C\u7684\u80CC\u666F\u56FE",title:"1.1. \u901A\u8FC7\u5A92\u4F53\u67E5\u8BE2\u8BBE\u7F6E\u4E0D\u540C\u7684\u80CC\u666F\u56FE",sub:!0},{id:"3-image-set",title:"1.2. image-set",sub:!0},{id:"4-\u4F7F\u7528svg",title:"1.3. \u4F7F\u7528svg",sub:!0},{id:"5-img-\u6807\u7B7E",title:"2. img \u6807\u7B7E"},{id:"6-srcset",title:"2.1. srcset",sub:!0},{id:"7-picture",title:"2.2. picture",sub:!0},{id:"8-javascript\u62FC\u63A5\u56FE\u7247url",title:"2.3. JavaScript\u62FC\u63A5\u56FE\u7247url",sub:!0},{id:"9-\u4F7F\u7528svg",title:"2.4. \u4F7F\u7528svg",sub:!0}];return(v,w)=>{const t=s("doc-code"),n=s("doc-page");return d(),o(n,{desc:"",toc:c},{default:a(()=>[r,g,i(t,{code:`/* <375px */
@media screen and (max-width:375px) {
  .box {
    background-image: url(./img/1.png);
  }
}
/* >=375px and <450px */
@media screen and (min-width:375px) and (max-width:450px) {
  .box {
    background-image: url(./img/2.png);
  }
}
`,lang:"css"}),m,i(t,{code:`.box {
  background-image: image-set(
    url(./img/1.png) 1x,
    url(./img/2.png) 2x
  );
}
`,lang:"css"}),l,p,u,i(t,{code:`<img src="./img/1.png" srcset="./img/1.png 1x, ./img/2.png 2x" />
`,lang:"html"}),h,i(t,{code:`<picture>
  <source srcset="./img/1.png" media="(max-width: 375px)" />
  <source srcset="./img/2.png" media="(min-width: 375px)" />
  <img src="./img/1.png" />
</picture>
`,lang:"html"}),_,i(t,{code:`const dpr = window.devicePixelRatio || 1;
const img = document.querySelectorAll('img');
img.forEach((item) => {
  const src = item.getAttribute('src');
  item.setAttribute('src', \`\${src}?dpr=\${dpr}\`);
});
`,lang:"javascript"}),x]),_:1})}}};export{k as default};
