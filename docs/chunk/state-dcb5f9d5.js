import{r as s,o as B,c as i,f as A,g as e,aa as t,v as o}from"./vendor-b8e3fcbe.js";const r=t("h2",{id:"1-\u5FEB\u7167",class:"doc-heading"},"\u5FEB\u7167",-1),l=t("p",null,"\u6539\u8FDB\uFF1A\u5728\u4E0B\u6B21\u6E32\u67D3\u524D\u591A\u6B21\u66F4\u65B0\u540C\u4E00\u4E2A state",-1),D=t("p",null,"\u4E00\u4E2A state \u53D8\u91CF\u7684\u503C\u6C38\u8FDC\u4E0D\u4F1A\u5728\u4E00\u6B21\u6E32\u67D3\u7684\u5185\u90E8\u53D1\u751F\u53D8\u5316\uFF0C \u5373\u4F7F\u5176\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u4EE3\u7801\u662F\u5F02\u6B65\u7684",-1),d=t("p",null,[o("React \u4F1A\u4F7F state \u7684\u503C\u59CB"),t("strong",null,"\u56FA\u5B9A"),o("\u5728\u4E00\u6B21\u6E32\u67D3\u7684\u5404\u4E2A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5185\u90E8\u3002 \u4F60\u65E0\u9700\u62C5\u5FC3\u4EE3\u7801\u8FD0\u884C\u65F6 state \u662F\u5426\u53D1\u751F\u4E86\u53D8\u5316\u3002")],-1),C=t("h2",{id:"2-\u66F4\u65B0\u72B6\u6001\u4E2D\u7684\u5BF9\u8C61",class:"doc-heading"},"\u66F4\u65B0\u72B6\u6001\u4E2D\u7684\u5BF9\u8C61",-1),m={id:"3-use-immer",class:"doc-heading"},E=t("h3",{id:"4-\u6570\u7EC4\u4E5F\u662F\u5982\u6B64",class:"doc-heading"},"\u6570\u7EC4\u4E5F\u662F\u5982\u6B64",-1),h=t("h2",{id:"5-\u66F4\u65B0\u961F\u5217",class:"doc-heading"},"\u66F4\u65B0\u961F\u5217",-1),g=t("p",null,"\u4F60\u54C1\uFF0C\u4F60\u7EC6\u54C1",-1),_=t("h2",{id:"6-\u8BA1\u7B97\u72B6\u6001",class:"doc-heading"},"\u8BA1\u7B97\u72B6\u6001",-1),f=t("h2",{id:"7-\u4FDD\u7559\u548C\u91CD\u7F6E\u72B6\u6001",class:"doc-heading"},"\u4FDD\u7559\u548C\u91CD\u7F6E\u72B6\u6001",-1),p=t("p",null,"App.js",-1),b=t("div",{class:"doc-note doc-note--tip"},[t("p",{class:"doc-note__title"},"TIP"),t("p",null,[o("\u76F8\u540C\u4F4D\u7F6E\u7684\u76F8\u540C\u7EC4\u4EF6\u4F1A\u4F7F\u5F97 state \u88AB\u4FDD\u7559\u4E0B\u6765"),t("br"),o(" \u5BF9 React \u6765\u8BF4\u91CD\u8981\u7684\u662F\u7EC4\u4EF6\u5728 UI \u6811\u4E2D\u7684\u4F4D\u7F6E,\u800C\u4E0D\u662F\u5728 JSX \u4E2D\u7684\u4F4D\u7F6E")])],-1),F=t("h2",{id:"8-\u4F5C\u4E3Astate\u7684\u521D\u59CB\u503C",class:"doc-heading"},"\u4F5C\u4E3Astate\u7684\u521D\u59CB\u503C",-1),x=t("p",null,[t("code",{class:"doc-token"},"messageColor"),o(" \u53D8\u5316\u65F6 "),t("code",{class:"doc-token"},"color"),o(" \u72B6\u6001\u53D8\u91CF\u5C06\u4E0D\u4F1A\u66F4\u65B0")],-1),N=t("h2",{id:"9-\u7528-flushsync-\u540C\u6B65\u66F4\u65B0-state",class:"doc-heading"},"\u7528 flushSync \u540C\u6B65\u66F4\u65B0 state",-1),k=t("p",null,"\u6539\u8FDB",-1),v={__name:"state",setup(S){const n=[{id:"doc-title",title:"state"},{id:"1-\u5FEB\u7167",title:"1. \u5FEB\u7167"},{id:"2-\u66F4\u65B0\u72B6\u6001\u4E2D\u7684\u5BF9\u8C61",title:"2. \u66F4\u65B0\u72B6\u6001\u4E2D\u7684\u5BF9\u8C61"},{id:"3-use-immer",title:"2.1. use-immer",sub:!0},{id:"4-\u6570\u7EC4\u4E5F\u662F\u5982\u6B64",title:"2.2. \u6570\u7EC4\u4E5F\u662F\u5982\u6B64",sub:!0},{id:"5-\u66F4\u65B0\u961F\u5217",title:"3. \u66F4\u65B0\u961F\u5217"},{id:"6-\u8BA1\u7B97\u72B6\u6001",title:"4. \u8BA1\u7B97\u72B6\u6001"},{id:"7-\u4FDD\u7559\u548C\u91CD\u7F6E\u72B6\u6001",title:"5. \u4FDD\u7559\u548C\u91CD\u7F6E\u72B6\u6001"},{id:"8-\u4F5C\u4E3Astate\u7684\u521D\u59CB\u503C",title:"6. \u4F5C\u4E3Astate\u7684\u521D\u59CB\u503C"},{id:"9-\u7528-flushsync-\u540C\u6B65\u66F4\u65B0-state",title:"7. \u7528 flushSync \u540C\u6B65\u66F4\u65B0 state"}];return(T,j)=>{const u=s("doc-code"),a=s("doc-link"),c=s("doc-page");return B(),i(c,{desc:"",toc:n},{default:A(()=>[r,e(u,{code:"const%20%5Bscore%2C%20setScore%5D%20%3D%20useState%280%29%3B%0A%0Afunction%20increment%28%29%20%7B%0A%20%20setScore%28score%20+%201%29%3B%0A%20%20console.log%28score%29%3B%0A%7D%0A%0Aincrement%28%29%3B%20//%200%0Aincrement%28%29%3B%20//%200%0Aincrement%28%29%3B%20//%200%0A//%20%u5728%u6E32%u67D3%u8BF7%u6C42%u4E4B%u524D%20score%20%u4E00%u76F4%u7B49%u4E8E%200%uFF0C%u6700%u7EC8%u6E32%u67D3%u7ED3%u679C%u4E3A%201%0A",lang:"jsx"}),l,e(u,{code:"function%20increment%28%29%20%7B%0A%20%20setScore%28s%20%3D%3E%20s%20+%201%29%3B%20//%u66F4%u65B0%u5668%u51FD%u6570%0A%20%20console.log%28score%29%3B%20//%200%200%200%uFF0C%u6700%u7EC8%u6E32%u67D3%u7ED3%u679C%u4E3A%203%0A%7D%0A",lang:"jsx"}),D,d,e(u,{code:"const%20%5Bnumber%2C%20setNumber%5D%20%3D%20useState%280%29%3B%0A%0Areturn%20%28%0A%20%20%3C%3E%0A%20%20%20%20%3Ch1%3E%7Bnumber%7D%3C/h1%3E%0A%20%20%20%20%3Cbutton%20onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20setNumber%28number%20+%205%29%3B%0A%20%20%20%20%20%20setTimeout%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20alert%28number%29%3B%20//%20%u6BCF%u6B21%u83B7%u53D6%u7684number%u90FD%u662FsetNumber%u89E6%u53D1%u65F6%u7684%u5FEB%u7167%200%205%20...%0A%20%20%20%20%20%20%7D%2C%203000%29%3B%0A%20%20%20%20%7D%7D%3E+5%3C/button%3E%0A%20%20%3C/%3E%0A%29%0A",lang:"jsx"}),C,e(u,{code:"const%20%5Bperson%2C%20setPerson%5D%20%3D%20useState%28%7B%0A%20%20name%3A%20%27Niki%20de%20Saint%20Phalle%27%2C%0A%20%20artwork%3A%20%7B%0A%20%20%20%20title%3A%20%27Blue%20Nana%27%2C%0A%20%20%20%20city%3A%20%27Hamburg%27%2C%0A%20%20%20%20image%3A%20%27https%3A//i.imgur.com/Sd1AgUOm.jpg%27%2C%0A%20%20%7D%0A%7D%29%3B%0A%0Afunction%20handleTitleChange%28e%29%20%7B%0A%20%20setPerson%28%7B%20//%20%u7528%u4E00%u4E2A%u65B0%u5BF9%u8C61%u8FDB%u884C%u66FF%u6362%0A%20%20%20%20...person%2C%0A%20%20%20%20artwork%3A%20%7B%0A%20%20%20%20%20%20...person.artwork%2C%0A%20%20%20%20%20%20title%3A%20e.target.value%0A%20%20%20%20%7D%0A%20%20%7D%29%3B%0A%7D%0A",lang:"jsx"}),t("h3",m,[e(a,{to:"https://github.com/immerjs/use-immer"},{default:A(()=>[o("use-immer")]),_:1})]),e(u,{code:"import%20%7B%20useImmer%20%7D%20from%20%27use-immer%27%3B%0A%0Aconst%20%5Bperson%2C%20updatePerson%5D%20%3D%20useImmer%28%7B%0A%20%20name%3A%20%27Niki%20de%20Saint%20Phalle%27%2C%0A%20%20artwork%3A%20%7B%0A%20%20%20%20title%3A%20%27Blue%20Nana%27%2C%0A%20%20%20%20city%3A%20%27Hamburg%27%2C%0A%20%20%20%20image%3A%20%27https%3A//i.imgur.com/Sd1AgUOm.jpg%27%2C%0A%20%20%7D%0A%7D%29%3B%0A%0Afunction%20handleNameChange%28e%29%20%7B%0A%20%20updatePerson%28draft%20%3D%3E%20%7B%0A%20%20%20%20draft.name%20%3D%20e.target.value%3B%0A%20%20%7D%29%3B%0A%7D%0A%0Afunction%20handleTitleChange%28e%29%20%7B%0A%20%20updatePerson%28draft%20%3D%3E%20%7B%0A%20%20%20%20draft.artwork.title%20%3D%20e.target.value%3B%0A%20%20%7D%29%3B%0A%7D%0A",lang:"jsx"}),E,e(u,{code:"const%20%5Blist%2C%20setList%5D%20%3D%20useState%28%0A%20%20initialList%0A%29%3B%0A%0Afunction%20handleToggle%28artworkId%2C%20nextSeen%29%20%7B%0A%20%20setList%28list.map%28artwork%20%3D%3E%20%7B%20//%20%u65B0%u7684%u6570%u7EC4%0A%20%20%20%20if%20%28artwork.id%20%3D%3D%3D%20artworkId%29%20%7B%0A%20%20%20%20%20%20return%20%7B%20...artwork%2C%20seen%3A%20nextSeen%20%7D%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20return%20%7B%20...artwork%20%7D%3B%20//%20%u6B64%u5904%u5E94%u7528%u539F%u6570%u7EC4%u7684%u5BF9%u8C61%uFF0C%u4E0D%u884C%0A%20%20%20%20%7D%0A%20%20%7D%29%29%3B%0A%7D%0A",lang:"jsx"}),h,e(u,{code:"const%20%5Bnumber%2C%20setNumber%5D%20%3D%20useState%280%29%3B%0A%0Areturn%20%28%0A%20%20%3C%3E%0A%20%20%20%20%3Ch1%3E%7Bnumber%7D%3C/h1%3E%0A%20%20%20%20%3Cbutton%0A%20%20%20%20%20%20onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setNumber%28number%20+%205%29%3B%0A%20%20%20%20%20%20%20%20alert%28number%29%3B%20//%200%0A%20%20%20%20%20%20%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%201%29%3B%0A%20%20%20%20%20%20%20%20alert%28number%29%3B%20//%200%0A%20%20%20%20%20%20%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%202%29%3B%0A%20%20%20%20%20%20%20%20alert%28number%29%3B%20//%200%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%u589E%u52A0%u6570%u5B57%0A%20%20%20%20%3C/button%3E%0A%20%20%3C/%3E%0A%29%3B%0A//%205%206%208%20%u6700%u7EC8%u4E3A%208%0A",lang:"jsx"}),e(u,{code:"onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%201%29%3B%0A%20%20setNumber%28number%20+%205%29%3B%0A%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%202%29%3B%0A%7D%7D%0A//%201%205%207%20%u6700%u7EC8%u4E3A%207%0A",lang:"jsx"}),e(u,{code:"onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%201%29%3B%0A%20%20setNumber%28%28n%29%20%3D%3E%20n%20+%202%29%3B%0A%20%20setNumber%28number%20+%205%29%3B%0A%7D%7D%0A//%201%203%205%20%u6700%u7EC8%u4E3A%205%0A",lang:"jsx"}),g,_,e(u,{code:"const%20%5BfirstName%2C%20setFirstName%5D%20%3D%20useState%28%27%27%29%3B%0Aconst%20%5BlastName%2C%20setLastName%5D%20%3D%20useState%28%27%27%29%3B%0A%0Aconst%20fullName%20%3D%20firstName%20+%20%27%20%27%20+%20lastName%3B%20//%20%u6BCF%u6B21%u7EC4%u4EF6%u66F4%u65B0%u90FD%u4F1A%u4ECE%u65B0%u8BA1%u7B97fullName%0A%0Afunction%20handleFirstNameChange%28e%29%20%7B%0A%20%20setFirstName%28e.target.value%29%3B%0A%7D%0A%0Afunction%20handleLastNameChange%28e%29%20%7B%0A%20%20setLastName%28e.target.value%29%3B%0A%7D%0A",lang:"jsx"}),f,p,e(u,{code:"import%20%7B%20useState%20%7D%20from%20%27react%27%3B%0Aimport%20Chat%20from%20%27./Chat.js%27%3B%0Aimport%20ContactList%20from%20%27./ContactList.js%27%3B%0A%0Aexport%20default%20function%20Messenger%28%29%20%7B%0A%20%20const%20%5Bto%2C%20setTo%5D%20%3D%20useState%28contacts%5B0%5D%29%3B%0A%20%20return%20%28%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3CContactList%0A%20%20%20%20%20%20%20%20contacts%3D%7Bcontacts%7D%0A%20%20%20%20%20%20%20%20selectedContact%3D%7Bto%7D%0A%20%20%20%20%20%20%20%20onSelect%3D%7Bcontact%20%3D%3E%20setTo%28contact%29%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%3CChat%20key%3D%7Bto.email%7D%20contact%3D%7Bto%7D%20/%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%29%0A%7D%0A//%20key%20%u503C%u7684%u6539%u53D8%u4F1A%u5E2E%u52A9%u6211%u4EEC%u91CD%u7F6E%u72B6%u6001%uFF0C%u53EF%u4EE5%u7406%u89E3%u4E3A%u91CD%u65B0%u6E32%u67D3%u8BE5%u7EC4%u4EF6%0A",lang:"jsx"}),b,F,e(u,{code:"function%20Message%28%7B%20messageColor%20%7D%29%20%7B%0A%20%20const%20%5Bcolor%2C%20setColor%5D%20%3D%20useState%28messageColor%29%3B%20//%20%u4EC5%u4EC5%u4F5C%u4E3A%u521D%u59CB%u503C%0A",lang:"jsx"}),x,N,e(u,{code:"import%20%7B%20useState%2C%20useRef%20%7D%20from%20%27react%27%3B%0A%0Aexport%20default%20function%20TodoList%28%29%20%7B%0A%20%20const%20listRef%20%3D%20useRef%28null%29%3B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState%28%27%27%29%3B%0A%20%20const%20%5Btodos%2C%20setTodos%5D%20%3D%20useState%28%0A%20%20%20%20initialTodos%0A%20%20%29%3B%0A%0A%20%20function%20handleAdd%28%29%20%7B%0A%20%20%20%20const%20newTodo%20%3D%20%7B%20id%3A%20nextId++%2C%20text%3A%20text%20%7D%3B%0A%20%20%20%20setText%28%27%27%29%3B%0A%20%20%20%20setTodos%28%5B%20...todos%2C%20newTodo%5D%29%3B%0A%20%20%20%20//%20%u6B64%u65F6dom%u8FD8%u6CA1%u6709%u6E32%u67D3%2C%u56E0%u6B64%u6EDA%u52A8%u6761%u4E0D%u4F1A%u6EDA%u52A8%u5230%u5E95%u90E8%0A%20%20%20%20listRef.current.lastChild.scrollIntoView%28%7B%0A%20%20%20%20%20%20behavior%3A%20%27smooth%27%2C%0A%20%20%20%20%20%20block%3A%20%27nearest%27%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7BhandleAdd%7D%3E%0A%20%20%20%20%20%20%20%20%u6DFB%u52A0%0A%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20value%3D%7Btext%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7Be%20%3D%3E%20setText%28e.target.value%29%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%3Cul%20ref%3D%7BlistRef%7D%3E%0A%20%20%20%20%20%20%20%20%7Btodos.map%28todo%20%3D%3E%20%28%0A%20%20%20%20%20%20%20%20%20%20%3Cli%20key%3D%7Btodo.id%7D%3E%7Btodo.text%7D%3C/li%3E%0A%20%20%20%20%20%20%20%20%29%29%7D%0A%20%20%20%20%20%20%3C/ul%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A%0Alet%20nextId%20%3D%200%3B%0Alet%20initialTodos%20%3D%20%5B%5D%3B%0Afor%20%28let%20i%20%3D%200%3B%20i%20%3C%2020%3B%20i++%29%20%7B%0A%20%20initialTodos.push%28%7B%0A%20%20%20%20id%3A%20nextId++%2C%0A%20%20%20%20text%3A%20%27%u5F85%u529E%20%23%27%20+%20%28i%20+%201%29%0A%20%20%7D%29%3B%0A%7D%0A",lang:"jsx"}),k,e(u,{code:"import%20%7B%20flushSync%20%7D%20from%20%27react-dom%27%3B%0A//%20...%0Afunction%20handleAdd%28%29%20%7B%0A%20%20const%20newTodo%20%3D%20%7B%20id%3A%20nextId++%2C%20text%3A%20text%20%7D%3B%0A%20%20flushSync%28%28%29%20%3D%3E%20%7B%20//%20%u7ACB%u5373%u540C%u6B65%u66F4%u65B0%20DOM%0A%20%20%20%20setText%28%27%27%29%3B%0A%20%20%20%20setTodos%28%5B%20...todos%2C%20newTodo%5D%29%3B%0A%20%20%7D%29%3B%0A%20%20listRef.current.lastChild.scrollIntoView%28%7B%0A%20%20%20%20behavior%3A%20%27smooth%27%2C%0A%20%20%20%20block%3A%20%27nearest%27%0A%20%20%7D%29%3B%0A%7D%0A",lang:"jsx"})]),_:1})}}};export{v as default};
