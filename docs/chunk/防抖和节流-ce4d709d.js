import{n as o,o as i,p as l,w as a,a as n,i as e}from"./vendor-a2411ed8.js";const u=e("h2",{id:"1-\u9632\u6296",class:"doc-heading"},"\u9632\u6296",-1),d=e("p",null,"\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1n\u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9n\u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6",-1),A=e("p",null,"\u8FD9\u91CC\u6CA1\u6709\u8003\u8651\u6700\u540E\u4E00\u6B21\u6E05\u9664\u5B9A\u65F6\u5668\u7684\u95EE\u9898\uFF0C\u4EC5\u4F5C\u53C2\u8003\uFF0C\u53EF\u4EE5\u50CFlodash\u91CC\u9762\u4E00\u6837\u5B9A\u4E49\u4E00\u4E2Acancel\u65B9\u6CD5",-1),r=e("h2",{id:"2-\u8282\u6D41",class:"doc-heading"},"\u8282\u6D41",-1),D=e("p",null,"\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570",-1),h={__name:"\u9632\u6296\u548C\u8282\u6D41",setup(m){const c=[{id:"doc-title",title:"\u9632\u6296\u51FD\u6570\u548C\u8282\u6D41\u51FD\u6570"},{id:"1-\u9632\u6296",title:"1. \u9632\u6296"},{id:"2-\u8282\u6D41",title:"2. \u8282\u6D41"}];return(_,p)=>{const t=o("doc-code"),s=o("doc-page");return i(),l(s,{desc:"",toc:c},{default:a(()=>[u,d,n(t,{code:"function%20debounce%20%28fn%2C%20delay%29%20%7B%0A%20%20let%20timer%0A%20%20return%20function%20%28...arg%29%20%7B%0A%20%20%20%20clearTimeout%28timer%29%0A%20%20%20%20timer%20%3D%20setTimeout%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20fn.apply%28this%2C%20arg%29%0A%20%20%20%20%7D%2C%20delay%29%0A%20%20%7D%0A%7D%0A%0Afunction%20testDebounce%20%28e%2C%20content%29%20%7B%0A%20%20console.log%28e%2C%20content%29%0A%7D%0A%0Aconst%20testDebounceFn%20%3D%20debounce%28testDebounce%2C%201000%29%0Adocument.onmousemove%20%3D%20function%20%28e%29%20%7B%0A%20%20testDebounceFn%28e%2C%20%27debounce%27%29%0A%7D%0A",lang:"javascript"}),A,r,D,n(t,{code:"function%20throttle%20%28fn%2C%20delay%29%20%7B%0A%20%20let%20timer%20%3D%20null%0A%20%20return%20function%20%28...arg%29%20%7B%0A%20%20%20%20if%20%28timer%20%21%3D%3D%20null%29%20return%0A%20%20%20%20timer%20%3D%20setTimeout%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20fn.apply%28t%2C%20arg%29%0A%20%20%20%20%20%20clearTimeout%28timer%29%0A%20%20%20%20%20%20timer%20%3D%20null%0A%20%20%20%20%7D%2C%20delay%29%0A%20%20%7D%0A%7D%0A%0Afunction%20testDebounce%20%28e%2C%20content%29%20%7B%0A%20%20console.log%28e%2C%20content%29%0A%7D%0A%0Aconst%20testDebounceFn%20%3D%20throttle%28testDebounce%2C%201000%29%0Adocument.onmousemove%20%3D%20function%20%28e%29%20%7B%0A%20%20testDebounceFn%28e%2C%20%27throttle%27%29%0A%7D%0A",lang:"javascript"})]),_:1})}}};export{h as default};
