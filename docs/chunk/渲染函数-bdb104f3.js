import{n as o,o as c,p as i,w as A,a as u,i as e,f as s}from"./vendor-a2411ed8.js";const d=e("h2",{id:"1-createelement-\u53C2\u6570",class:"doc-heading"},"createElement \u53C2\u6570",-1),l=e("h3",{id:"2-params1",class:"doc-heading"},"params1",-1),E=e("p",null,[e("code",{class:"doc-token"},"String | Object | Function"),s(": \u4E00\u4E2A HTML \u6807\u7B7E\u540D | \u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61 | \u6216\u8005resolve \u4E86\u4E0A\u8FF0\u4EFB\u4F55\u4E00\u79CD\u7684\u4E00\u4E2A async \u51FD\u6570\u3002"),e("strong",null,"\u5FC5\u586B\u9879")],-1),C=e("h3",{id:"3-params2",class:"doc-heading"},"params2",-1),p=e("p",null,[e("code",{class:"doc-token"},"Object"),s(": \u6A21\u677F\u4E2D attribute \u5BF9\u5E94\u7684\u6570\u636E\u5BF9\u8C61\u3002"),e("strong",null,"\u53EF\u9009")],-1),m=e("h3",{id:"4-params3",class:"doc-heading"},"params3",-1),D=e("p",null,[e("code",{class:"doc-token"},"Array | String"),s(": \u5B50\u7EA7\u865A\u62DF\u8282\u70B9 (VNodes array)\uFF0C\u7531 "),e("code",{class:"doc-token"},"createElement()"),s(" \u6784\u5EFA\u800C\u6210 | \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u751F\u6210\u201C\u6587\u672C\u865A\u62DF\u8282\u70B9\u201D\u3002"),e("strong",null,"\u53EF\u9009")],-1),F=e("h2",{id:"5-\u4F7F\u7528-javascript-\u4EE3\u66FF\u6A21\u677F\u529F\u80FD",class:"doc-heading"},"\u4F7F\u7528 JavaScript \u4EE3\u66FF\u6A21\u677F\u529F\u80FD",-1),B=e("h3",{id:"6-v-if-\u548C-v-for",class:"doc-heading"},"v-if \u548C v-for",-1),v=e("h3",{id:"7-v-model",class:"doc-heading"},"v-model",-1),h=e("h3",{id:"8-\u4E8B\u4EF6-and-\u6309\u952E\u4FEE\u9970\u7B26",class:"doc-heading"},"\u4E8B\u4EF6 & \u6309\u952E\u4FEE\u9970\u7B26",-1),f=e("h3",{id:"9-\u63D2\u69FD\u76F8\u5173",class:"doc-heading"},"\u63D2\u69FD\u76F8\u5173",-1),_=e("p",null,[e("code",{class:"doc-token"},"this.$slots"),s(" \u7F16\u5199\u9759\u6001\u63D2\u69FD, \u8FD4\u56DE VNode \u6570\u7EC4")],-1),g=e("p",null,[e("code",{class:"doc-token"},"this.$scopedSlots"),s(" \u7F16\u5199\u4F5C\u7528\u57DF\u63D2\u69FD,\u6BCF\u4E2A\u4F5C\u7528\u57DF\u63D2\u69FD\u90FD\u662F\u4E00\u4E2A\u8FD4\u56DE\u82E5\u5E72 VNode array \u7684\u51FD\u6570")],-1),k=e("p",null,[e("code",{class:"doc-token"},"scopedSlots"),s(" \u7F16\u5199\u4F5C\u7528\u57DF\u63D2\u69FD \u5C5E\u6027")],-1),j={__name:"\u6E32\u67D3\u51FD\u6570",setup(y){const a=[{id:"doc-title",title:"Vue \u6E32\u67D3\u51FD\u6570"},{id:"1-createelement-\u53C2\u6570",title:"1. createElement \u53C2\u6570"},{id:"2-params1",title:"1.1. params1",sub:!0},{id:"3-params2",title:"1.2. params2",sub:!0},{id:"4-params3",title:"1.3. params3",sub:!0},{id:"5-\u4F7F\u7528-javascript-\u4EE3\u66FF\u6A21\u677F\u529F\u80FD",title:"2. \u4F7F\u7528 JavaScript \u4EE3\u66FF\u6A21\u677F\u529F\u80FD"},{id:"6-v-if-\u548C-v-for",title:"2.1. v-if \u548C v-for",sub:!0},{id:"7-v-model",title:"2.2. v-model",sub:!0},{id:"8-\u4E8B\u4EF6-and-\u6309\u952E\u4FEE\u9970\u7B26",title:"2.3. \u4E8B\u4EF6 & \u6309\u952E\u4FEE\u9970\u7B26",sub:!0},{id:"9-\u63D2\u69FD\u76F8\u5173",title:"2.4. \u63D2\u69FD\u76F8\u5173",sub:!0}];return(b,V)=>{const t=o("doc-code"),n=o("doc-link"),r=o("doc-page");return c(),i(r,{desc:"Vue \u6E32\u67D3\u51FD\u6570createElement\u7684\u57FA\u672C\u7528\u6CD5",toc:a},{default:A(()=>[d,u(t,{code:"//%20returns%20%7BVNode%7D%0AcreateElement%28params1%2C%20params2%2C%20params3%29%0A",lang:"javascript"}),l,E,C,p,u(t,{code:"%7B%0A%20%20//%20%u4E0E%20%60v-bind%3Aclass%60%20%u7684%20API%20%u76F8%u540C%uFF0C%0A%20%20//%20%u63A5%u53D7%u4E00%u4E2A%u5B57%u7B26%u4E32%u3001%u5BF9%u8C61%u6216%u5B57%u7B26%u4E32%u548C%u5BF9%u8C61%u7EC4%u6210%u7684%u6570%u7EC4%0A%20%20%27class%27%3A%20%7B%0A%20%20%20%20foo%3A%20true%2C%0A%20%20%20%20bar%3A%20false%0A%20%20%7D%2C%0A%20%20//%20%u4E0E%20%60v-bind%3Astyle%60%20%u7684%20API%20%u76F8%u540C%uFF0C%0A%20%20//%20%u63A5%u53D7%u4E00%u4E2A%u5B57%u7B26%u4E32%u3001%u5BF9%u8C61%uFF0C%u6216%u5BF9%u8C61%u7EC4%u6210%u7684%u6570%u7EC4%0A%20%20style%3A%20%7B%0A%20%20%20%20color%3A%20%27red%27%2C%0A%20%20%20%20fontSize%3A%20%2714px%27%0A%20%20%7D%2C%0A%20%20//%20HTML%20%u7279%u6027%0A%20%20attrs%3A%20%7B%0A%20%20%20%20id%3A%20%27foo%27%0A%20%20%7D%2C%0A%20%20//%20%u7EC4%u4EF6%20prop%0A%20%20props%3A%20%7B%0A%20%20%20%20myProp%3A%20%27bar%27%0A%20%20%7D%2C%0A%20%20//%20dom%20%u5C5E%u6027%0A%20%20domProps%3A%20%7B%0A%20%20%20%20innerHTML%3A%20%27baz%27%0A%20%20%7D%2C%0A%20%20//%20%u4E8B%u4EF6%u76D1%u542C%u5668%u5728%20%60on%60%20%u5185%uFF0C%0A%20%20//%20%u4F46%u4E0D%u518D%u652F%u6301%u5982%20%60v-on%3Akeyup.enter%60%20%u8FD9%u6837%u7684%u4FEE%u9970%u5668%u3002%0A%20%20//%20%u9700%u8981%u5728%u5904%u7406%u51FD%u6570%u4E2D%u624B%u52A8%u68C0%u67E5%20keyCode%u3002%0A%20%20on%3A%20%7B%0A%20%20%20%20click%3A%20this.clickHandler%0A%20%20%7D%2C%0A%20%20//%20%u4EC5%u7528%u4E8E%u7EC4%u4EF6%uFF0C%u7528%u4E8E%u76D1%u542C%u539F%u751F%u4E8B%u4EF6%uFF0C%u800C%u4E0D%u662F%u7EC4%u4EF6%u5185%u90E8%u4F7F%u7528%0A%20%20//%20%60vm.%24emit%60%20%u89E6%u53D1%u7684%u4E8B%u4EF6%u3002%0A%20%20nativeOn%3A%20%7B%0A%20%20%20%20click%3A%20this.nativeClickHandler%0A%20%20%7D%2C%0A%20%20//%20%u81EA%u5B9A%u4E49%u6307%u4EE4%u3002%u6CE8%u610F%uFF0C%u4F60%u65E0%u6CD5%u5BF9%20%60binding%60%20%u4E2D%u7684%20%60oldValue%60%0A%20%20//%20%u8D4B%u503C%uFF0C%u56E0%u4E3A%20Vue%20%u5DF2%u7ECF%u81EA%u52A8%u4E3A%u4F60%u8FDB%u884C%u4E86%u540C%u6B65%u3002%0A%20%20directives%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20%27my-custom-directive%27%2C%0A%20%20%20%20%20%20value%3A%20%272%27%2C%0A%20%20%20%20%20%20expression%3A%20%271%20+%201%27%2C%0A%20%20%20%20%20%20arg%3A%20%27foo%27%2C%0A%20%20%20%20%20%20modifiers%3A%20%7B%0A%20%20%20%20%20%20%20%20bar%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20//%20%u4F5C%u7528%u57DF%u63D2%u69FD%u7684%u683C%u5F0F%u4E3A%0A%20%20//%20%7B%20name%3A%20props%20%3D%3E%20VNode%20%7C%20Array%3CVNode%3E%20%7D%0A%20%20scopedSlots%3A%20%7B%0A%20%20%20%20default%3A%20props%20%3D%3E%20createElement%28%27span%27%2C%20props.text%29%0A%20%20%7D%2C%0A%20%20//%20%u5982%u679C%u7EC4%u4EF6%u662F%u5176%u5B83%u7EC4%u4EF6%u7684%u5B50%u7EC4%u4EF6%uFF0C%u9700%u4E3A%u63D2%u69FD%u6307%u5B9A%u540D%u79F0%0A%20%20slot%3A%20%27name-of-slot%27%2C%0A%20%20//%20%u5176%u5B83%u7279%u6B8A%u9876%u5C42%20property%0A%20%20key%3A%20%27myKey%27%2C%0A%20%20ref%3A%20%27myRef%27%2C%0A%20%20//%20%u5982%u679C%u4F60%u5728%u6E32%u67D3%u51FD%u6570%u4E2D%u7ED9%u591A%u4E2A%u5143%u7D20%u90FD%u5E94%u7528%u4E86%u76F8%u540C%u7684%20ref%20%u540D%uFF0C%0A%20%20//%20%u90A3%u4E48%20%60%24refs.myRef%60%20%u4F1A%u53D8%u6210%u4E00%u4E2A%u6570%u7EC4%u3002%0A%20%20refInFor%3A%20true%0A%7D%0A",lang:"javascript"}),m,D,F,B,u(t,{code:"%3Cul%20v-if%3D%22items.length%22%3E%0A%20%20%3Cli%20v-for%3D%22item%20in%20items%22%3E%7B%7B%20item.name%20%7D%7D%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20v-else%3ENo%20items%20found.%3C/p%3E%0A",lang:"html"}),u(t,{code:"props%3A%20%5B%27items%27%5D%2C%0Arender%3A%20function%20%28createElement%29%20%7B%0A%20%20if%20%28this.items.length%29%20%7B%0A%20%20%20%20return%20createElement%28%27ul%27%2C%20this.items.map%28function%20%28item%29%20%7B%0A%20%20%20%20%20%20return%20createElement%28%27li%27%2C%20item.name%29%0A%20%20%20%20%7D%29%29%0A%20%20%7D%20else%20%7B%0A%20%20%20%20return%20createElement%28%27p%27%2C%20%27No%20items%20found.%27%29%0A%20%20%7D%0A%7D%0A",lang:"javascript"}),v,u(t,{code:"props%3A%20%5B%27value%27%5D%2C%0Arender%3A%20function%20%28createElement%29%20%7B%0A%20%20var%20self%20%3D%20this%0A%20%20return%20createElement%28%27input%27%2C%20%7B%0A%20%20%20%20domProps%3A%20%7B%0A%20%20%20%20%20%20value%3A%20self.value%0A%20%20%20%20%7D%2C%0A%20%20%20%20on%3A%20%7B%0A%20%20%20%20%20%20input%3A%20function%20%28event%29%20%7B%0A%20%20%20%20%20%20%20%20self.%24emit%28%27input%27%2C%20event.target.value%29%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%29%0A%7D%0A",lang:"javascript"}),h,e("p",null,[u(n,{to:"https://cn.vuejs.org/v2/guide/render-function.html#\u4E8B\u4EF6-amp-\u6309\u952E\u4FEE\u9970\u7B26"},{default:A(()=>[s("\u5B98\u65B9\u6587\u6863")]),_:1})]),f,_,u(t,{code:"render%3A%20function%20%28createElement%29%20%7B%0A%20%20return%20createElement%28%27div%27%2C%20this.%24slots.default%29%0A%20%20//%20%u6216%u8005%20return%20createElement%28%27div%27%2C%20this.%24scopedSlots.default%28%29%29%0A%7D%0A//%20%60%3Cdiv%3E%3Cslot%3E%3C/slot%3E%3C/div%3E%60%0A",lang:"javascript"}),g,u(t,{code:"props%3A%20%5B%27message%27%5D%2C%0Arender%3A%20function%20%28createElement%29%20%7B%0A%20%20return%20createElement%28%27div%27%2C%20%5B%0A%20%20%20%20this.%24scopedSlots.default%28%7B%0A%20%20%20%20%20%20text%3A%20this.message%0A%20%20%20%20%7D%29%0A%20%20%5D%29%0A%7D%0A//%20%60%3Cdiv%3E%3Cslot%20%3Atext%3D%22message%22%3E%3C/slot%3E%3C/div%3E%60%0A",lang:"javascript"}),k,u(t,{code:"render%3A%20function%20%28createElement%29%20%7B%0A%20%20return%20createElement%28%27div%27%2C%20%5B%0A%20%20%20%20createElement%28%27child%27%2C%20%7B%0A%20%20%20%20%20%20//%20%u5728%u6570%u636E%u5BF9%u8C61%u4E2D%u4F20%u9012%20%60scopedSlots%60%0A%20%20%20%20%20%20//%20%u683C%u5F0F%u4E3A%20%7B%20name%3A%20props%20%3D%3E%20VNode%20%7C%20Array%3CVNode%3E%20%7D%0A%20%20%20%20%20%20scopedSlots%3A%20%7B%0A%20%20%20%20%20%20%20%20default%3A%20function%20%28props%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20createElement%28%27span%27%2C%20props.text%29%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%0A%20%20%5D%29%0A%7D%0A//%20%60%3Cdiv%3E%3Cchild%20v-slot%3D%22props%22%3E%3Cspan%3E%7B%7B%20props.text%20%7D%7D%3C/span%3E%3C/child%3E%3C/div%3E%60%0A",lang:"javascript"})]),_:1})}}};export{j as default};
