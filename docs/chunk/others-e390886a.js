import{r as s,o as i,c as d,f as n,g as t,aa as e,v as u}from"./vendor-e1827163.js";const c=e("h2",{id:"1-usestate",class:"doc-heading"},"useState",-1),B=e("ul",null,[e("li",null,"State \u53D8\u91CF \u7528\u4E8E\u4FDD\u5B58\u6E32\u67D3\u95F4\u7684\u6570\u636E"),e("li",null,"State setter \u51FD\u6570 \u66F4\u65B0\u53D8\u91CF\u5E76\u89E6\u53D1 React \u518D\u6B21\u6E32\u67D3\u7EC4\u4EF6")],-1),D=e("p",null,"\u7B80\u5355\u5185\u90E8\u539F\u7406",-1),C=e("h2",{id:"2-usereducer-\u63D0\u53D6\u903B\u8F91\u72B6\u6001",class:"doc-heading"},"useReducer \u63D0\u53D6\u903B\u8F91\u72B6\u6001",-1),l=e("h2",{id:"3-usecontext-\u4F7F\u7528\u521B\u5EFA\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF",class:"doc-heading"},"useContext \u4F7F\u7528\u521B\u5EFA\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF",-1),p=e("p",null,"App.js",-1),f=e("p",null,"Section.js",-1),E=e("p",null,"Heading.js",-1),h=e("p",null,"LevelContext.js",-1),k=e("h3",{id:"4-usereducer-\u548C-usecontext-\u7ED3\u5408\u7684\u590D\u6742\u4F8B\u5B50",class:"doc-heading"},"useReducer \u548C useContext \u7ED3\u5408\u7684\u590D\u6742\u4F8B\u5B50",-1),x=e("p",null,"App.js",-1),m=e("p",null,"TasksContext.js",-1),_=e("p",null,"AddTask.js",-1),g=e("p",null,"TaskList.js",-1),T=e("h2",{id:"5-useref-\u8BB0\u4F4F\u7EC4\u4EF6\u7684\u4FE1\u606F",class:"doc-heading"},"useRef \u8BB0\u4F4F\u7EC4\u4EF6\u7684\u4FE1\u606F",-1),F=e("h3",{id:"6-\u8BA9\u4E00\u4E2A\u7EC4\u4EF6\u8BB0\u4F4F\u4E00\u4E9B\u4FE1\u606F\uFF0C\u4F46\u53C8\u4E0D\u60F3\u8BA9\u8FD9\u4E9B\u4FE1\u606F\u89E6\u53D1\u65B0\u7684\u6E32\u67D3",class:"doc-heading"},"\u8BA9\u4E00\u4E2A\u7EC4\u4EF6\u8BB0\u4F4F\u4E00\u4E9B\u4FE1\u606F\uFF0C\u4F46\u53C8\u4E0D\u60F3\u8BA9\u8FD9\u4E9B\u4FE1\u606F\u89E6\u53D1\u65B0\u7684\u6E32\u67D3",-1),R=e("p",null,"React \u4F1A\u5728\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u4E4B\u95F4\u4FDD\u7559 ref",-1),v=e("h3",{id:"7-\u5F15\u7528dom",class:"doc-heading"},"\u5F15\u7528DOM",-1),j=e("h3",{id:"8-\u4E0D\u80FD\u76F4\u63A5\u5F15\u7528\u5B50\u7EC4\u4EF6",class:"doc-heading"},"\u4E0D\u80FD\u76F4\u63A5\u5F15\u7528\u5B50\u7EC4\u4EF6",-1),b=e("h3",{id:"9-forwardref-\u8F6C\u53D1\u5F15\u7528",class:"doc-heading"},"forwardRef \u8F6C\u53D1\u5F15\u7528",-1),S=e("p",null,"\u63A5\u7740\u4E0A\u4F8B",-1),I=e("h3",{id:"10-ref-\u548C-state-\u7684\u4E0D\u540C\u4E4B\u5904",class:"doc-heading"},"ref \u548C state \u7684\u4E0D\u540C\u4E4B\u5904",-1),H=e("h2",{id:"11-useimperativehandle-\u9650\u5236\u66B4\u9732\u7684\u529F\u80FD",class:"doc-heading"},"useImperativeHandle \u9650\u5236\u66B4\u9732\u7684\u529F\u80FD",-1),w=e("p",null,[u("\u8FD9\u91CC\uFF0CMyInput \u4E2D\u7684 realInputRef \u4FDD\u5B58\u4E86\u5B9E\u9645\u7684 input DOM \u8282\u70B9\u3002"),e("br"),u(" \u4F46\u662F\uFF0CuseImperativeHandle \u6307\u793A React \u5C06\u4F60\u81EA\u5DF1\u6307\u5B9A\u7684\u5BF9\u8C61\u4F5C\u4E3A\u7236\u7EC4\u4EF6\u7684 ref \u503C\u3002"),e("br"),u(" \u6240\u4EE5 Form \u7EC4\u4EF6\u5185\u7684 inputRef.current \u5C06\u53EA\u6709 focus \u65B9\u6CD5\u3002"),e("br"),u(" \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0Cref \u201C\u53E5\u67C4\u201D\u4E0D\u662F DOM \u8282\u70B9\uFF0C\u800C\u662F\u4F60\u5728 useImperativeHandle \u8C03\u7528\u4E2D\u521B\u5EFA\u7684\u81EA\u5B9A\u4E49\u5BF9\u8C61")],-1),y=e("h2",{id:"12-usememo-\u8BB0\u5FC6",class:"doc-heading"},"useMemo \u8BB0\u5FC6",-1),L=e("p",null,[u("\u8FD9\u544A\u8BC9 React \u4F60\u4E0D\u5E0C\u671B\u5185\u90E8\u51FD\u6570\u91CD\u65B0\u8FD0\u884C\uFF0C\u9664\u975Etodosorfilter\u5DF2\u7ECF\u6539\u53D8\u3002getFilteredTodos()React \u4F1A\u8BB0\u4F4F\u521D\u59CB\u6E32\u67D3\u671F\u95F4\u7684\u8FD4\u56DE\u503C\u3002"),e("br"),u(" \u5728\u4E0B\u4E00\u6B21\u6E32\u67D3\u671F\u95F4\uFF0C\u5B83\u5C06\u68C0\u67E5todos\u6216 \u662F\u5426filter\u4E0D\u540C\u3002"),e("br"),u(" \u5982\u679C\u5B83\u4EEC\u4E0E\u4E0A\u6B21\u76F8\u540C\uFF0CuseMemo\u5C06\u8FD4\u56DE\u5B83\u5B58\u50A8\u7684\u6700\u540E\u4E00\u4E2A\u7ED3\u679C\u3002"),e("br"),u(" \u4F46\u5982\u679C\u5B83\u4EEC\u4E0D\u540C\uFF0CReact \u5C06\u518D\u6B21\u8C03\u7528\u5185\u90E8\u51FD\u6570\uFF08\u5E76\u5B58\u50A8\u5176\u7ED3\u679C)")],-1),V={__name:"others",setup(M){const o=[{id:"doc-title",title:"others hooks"},{id:"1-usestate",title:"1. useState"},{id:"2-usereducer-\u63D0\u53D6\u903B\u8F91\u72B6\u6001",title:"2. useReducer \u63D0\u53D6\u903B\u8F91\u72B6\u6001"},{id:"3-usecontext-\u4F7F\u7528\u521B\u5EFA\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF",title:"3. useContext \u4F7F\u7528\u521B\u5EFA\u7684\u4E0A\u4E0B\u6587\u53D8\u91CF"},{id:"4-usereducer-\u548C-usecontext-\u7ED3\u5408\u7684\u590D\u6742\u4F8B\u5B50",title:"3.1. useReducer \u548C useContext \u7ED3\u5408\u7684\u590D\u6742\u4F8B\u5B50",sub:!0},{id:"5-useref-\u8BB0\u4F4F\u7EC4\u4EF6\u7684\u4FE1\u606F",title:"4. useRef \u8BB0\u4F4F\u7EC4\u4EF6\u7684\u4FE1\u606F"},{id:"6-\u8BA9\u4E00\u4E2A\u7EC4\u4EF6\u8BB0\u4F4F\u4E00\u4E9B\u4FE1\u606F\uFF0C\u4F46\u53C8\u4E0D\u60F3\u8BA9\u8FD9\u4E9B\u4FE1\u606F\u89E6\u53D1\u65B0\u7684\u6E32\u67D3",title:"4.1. \u8BA9\u4E00\u4E2A\u7EC4\u4EF6\u8BB0\u4F4F\u4E00\u4E9B\u4FE1\u606F\uFF0C\u4F46\u53C8\u4E0D\u60F3\u8BA9\u8FD9\u4E9B\u4FE1\u606F\u89E6\u53D1\u65B0\u7684\u6E32\u67D3",sub:!0},{id:"7-\u5F15\u7528dom",title:"4.2. \u5F15\u7528DOM",sub:!0},{id:"8-\u4E0D\u80FD\u76F4\u63A5\u5F15\u7528\u5B50\u7EC4\u4EF6",title:"4.3. \u4E0D\u80FD\u76F4\u63A5\u5F15\u7528\u5B50\u7EC4\u4EF6",sub:!0},{id:"9-forwardref-\u8F6C\u53D1\u5F15\u7528",title:"4.4. forwardRef \u8F6C\u53D1\u5F15\u7528",sub:!0},{id:"10-ref-\u548C-state-\u7684\u4E0D\u540C\u4E4B\u5904",title:"4.5. ref \u548C state \u7684\u4E0D\u540C\u4E4B\u5904",sub:!0},{id:"11-useimperativehandle-\u9650\u5236\u66B4\u9732\u7684\u529F\u80FD",title:"5. useImperativeHandle \u9650\u5236\u66B4\u9732\u7684\u529F\u80FD"},{id:"12-usememo-\u8BB0\u5FC6",title:"6. useMemo \u8BB0\u5FC6"}];return(P,N)=>{const A=s("doc-code"),a=s("doc-link"),r=s("doc-page");return i(),d(r,{desc:"",toc:o},{default:n(()=>[c,B,D,t(A,{code:"let%20componentHooks%20%3D%20%5B%5D%3B%0Alet%20currentHookIndex%20%3D%200%3B%0A%0A//%20useState%20%u5728%20React%20%u4E2D%u662F%u5982%u4F55%u5DE5%u4F5C%u7684%uFF08%u7B80%u5316%u7248%uFF09%0Afunction%20useState%28initialState%29%20%7B%0A%20%20let%20pair%20%3D%20componentHooks%5BcurrentHookIndex%5D%3B%0A%20%20if%20%28pair%29%20%7B%0A%20%20%20%20//%20%u8FD9%u4E0D%u662F%u7B2C%u4E00%u6B21%u6E32%u67D3%0A%20%20%20%20//%20%u6240%u4EE5%20state%20pair%20%u5DF2%u7ECF%u5B58%u5728%0A%20%20%20%20//%20%u5C06%u5176%u8FD4%u56DE%u5E76%u4E3A%u4E0B%u4E00%u6B21%20hook%20%u7684%u8C03%u7528%u505A%u51C6%u5907%0A%20%20%20%20currentHookIndex++%3B%0A%20%20%20%20return%20pair%3B%0A%20%20%7D%0A%0A%20%20//%20%u8FD9%u662F%u6211%u4EEC%u7B2C%u4E00%u6B21%u8FDB%u884C%u6E32%u67D3%0A%20%20//%20%u6240%u4EE5%u65B0%u5EFA%u4E00%u4E2A%20state%20pair%20%u7136%u540E%u5B58%u50A8%u5B83%0A%20%20pair%20%3D%20%5BinitialState%2C%20setState%5D%3B%0A%0A%20%20function%20setState%28nextState%29%20%7B%0A%20%20%20%20//%20%u5F53%u7528%u6237%u53D1%u8D77%20state%20%u7684%u53D8%u66F4%uFF0C%0A%20%20%20%20//%20%u628A%u65B0%u7684%u503C%u653E%u5165%20pair%20%u4E2D%0A%20%20%20%20pair%5B0%5D%20%3D%20nextState%3B%0A%20%20%20%20updateDOM%28%29%3B%0A%20%20%7D%0A%0A%20%20//%20Store%20the%20pair%20for%20future%20renders%0A%20%20//%20and%20prepare%20for%20the%20next%20Hook%20call.%0A%20%20//%20%u5B58%u50A8%u8FD9%u4E2A%20pair%20%u7528%u4E8E%u5C06%u6765%u7684%u6E32%u67D3%0A%20%20//%20%u5E76%u4E14%u4E3A%u4E0B%u4E00%u6B21%20hook%20%u7684%u8C03%u7528%u505A%u51C6%u5907%0A%20%20componentHooks%5BcurrentHookIndex%5D%20%3D%20pair%3B%0A%20%20currentHookIndex++%3B%0A%20%20return%20pair%3B%0A%7D%0A",lang:"js"}),C,t(A,{code:"import%20%7B%20useReducer%20%7D%20from%20%27react%27%3B%0Aimport%20AddTask%20from%20%27./AddTask.js%27%3B%0Aimport%20TaskList%20from%20%27./TaskList.js%27%3B%0A%0Aexport%20default%20function%20TaskApp%28%29%20%7B%0A%20%20const%20%5Btasks%2C%20dispatch%5D%20%3D%20useReducer%28%0A%20%20%20%20tasksReducer%2C%0A%20%20%20%20initialTasks%0A%20%20%29%3B%0A%0A%20%20function%20handleAddTask%28text%29%20%7B%0A%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20type%3A%20%27added%27%2C%0A%20%20%20%20%20%20id%3A%20nextId++%2C%0A%20%20%20%20%20%20text%3A%20text%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%0A%0A%20%20function%20handleChangeTask%28task%29%20%7B%0A%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20type%3A%20%27changed%27%2C%0A%20%20%20%20%20%20task%3A%20task%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%0A%0A%20%20function%20handleDeleteTask%28taskId%29%20%7B%0A%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20type%3A%20%27deleted%27%2C%0A%20%20%20%20%20%20id%3A%20taskId%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3Ch1%3E%u5E03%u62C9%u683C%u884C%u7A0B%3C/h1%3E%0A%20%20%20%20%20%20%3CAddTask%0A%20%20%20%20%20%20%20%20onAddTask%3D%7BhandleAddTask%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%3CTaskList%0A%20%20%20%20%20%20%20%20tasks%3D%7Btasks%7D%0A%20%20%20%20%20%20%20%20onChangeTask%3D%7BhandleChangeTask%7D%0A%20%20%20%20%20%20%20%20onDeleteTask%3D%7BhandleDeleteTask%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A%0Afunction%20tasksReducer%28tasks%2C%20action%29%20%7B%0A%20%20switch%20%28action.type%29%20%7B%0A%20%20%20%20case%20%27added%27%3A%20%7B%0A%20%20%20%20%20%20return%20%5B...tasks%2C%20%7B%0A%20%20%20%20%20%20%20%20id%3A%20action.id%2C%0A%20%20%20%20%20%20%20%20text%3A%20action.text%2C%0A%20%20%20%20%20%20%20%20done%3A%20false%0A%20%20%20%20%20%20%7D%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20case%20%27changed%27%3A%20%7B%0A%20%20%20%20%20%20return%20tasks.map%28t%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20%28t.id%20%3D%3D%3D%20action.task.id%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20action.task%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20t%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20case%20%27deleted%27%3A%20%7B%0A%20%20%20%20%20%20return%20tasks.filter%28t%20%3D%3E%20t.id%20%21%3D%3D%20action.id%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20default%3A%20%7B%0A%20%20%20%20%20%20throw%20Error%28%27%u672A%u77E5%u64CD%u4F5C%uFF1A%27%20+%20action.type%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Alet%20nextId%20%3D%203%3B%0Aconst%20initialTasks%20%3D%20%5B%0A%20%20%7B%20id%3A%200%2C%20text%3A%20%27%u53C2%u89C2%u5361%u592B%u5361%u535A%u7269%u9986%27%2C%20done%3A%20true%20%7D%2C%0A%20%20%7B%20id%3A%201%2C%20text%3A%20%27%u770B%u6728%u5076%u620F%27%2C%20done%3A%20false%20%7D%2C%0A%20%20%7B%20id%3A%202%2C%20text%3A%20%27%u5217%u4FAC%u5899%u56FE%u7247%27%2C%20done%3A%20false%20%7D%0A%5D%3B%0A",lang:"jsx"}),l,p,t(A,{code:"import%20Heading%20from%20%27./Heading.js%27%3B%0Aimport%20Section%20from%20%27./Section.js%27%3B%0A%0Aexport%20default%20function%20Page%28%29%20%7B%0A%20%20return%20%28%0A%20%20%20%20%3CSection%3E%0A%20%20%20%20%20%20%3CHeading%3E%u5927%u6807%u9898%3C/Heading%3E%0A%20%20%20%20%20%20%3CSection%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3E%u4E00%u7EA7%u6807%u9898%3C/Heading%3E%0A%20%20%20%20%20%20%20%20%3CSection%3E%0A%20%20%20%20%20%20%20%20%20%20%3CHeading%3E%u4E8C%u7EA7%u6807%u9898%3C/Heading%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSection%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CHeading%3E%u4E09%u7EA7%u6807%u9898%3C/Heading%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/Section%3E%0A%20%20%20%20%20%20%20%20%3C/Section%3E%0A%20%20%20%20%20%20%3C/Section%3E%0A%20%20%20%20%3C/Section%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),f,t(A,{code:"import%20%7B%20useContext%20%7D%20from%20%27react%27%3B%0Aimport%20%7B%20LevelContext%20%7D%20from%20%27./LevelContext.js%27%3B%0A%0Aexport%20default%20function%20Section%28%7B%20children%20%7D%29%20%7B%0A%20%20const%20level%20%3D%20useContext%28LevelContext%29%3B%0A%20%20return%20%28%0A%20%20%20%20%3Csection%20className%3D%22section%22%3E%0A%20%20%20%20%20%20%3CLevelContext.Provider%20value%3D%7Blevel%20+%201%7D%3E%0A%20%20%20%20%20%20%20%20%7Bchildren%7D%0A%20%20%20%20%20%20%3C/LevelContext.Provider%3E%0A%20%20%20%20%3C/section%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),E,t(A,{code:"import%20%7B%20useContext%20%7D%20from%20%27react%27%3B%0Aimport%20%7B%20LevelContext%20%7D%20from%20%27./LevelContext.js%27%3B%0A%0Aexport%20default%20function%20Heading%28%7B%20children%20%7D%29%20%7B%0A%20%20const%20level%20%3D%20useContext%28LevelContext%29%3B%0A%20%20switch%20%28level%29%20%7B%0A%20%20%20%20case%200%3A%0A%20%20%20%20%20%20throw%20Error%28%27%u6807%u9898%u5FC5%u987B%u5728%20Section%20%u5185%uFF01%27%29%3B%0A%20%20%20%20case%201%3A%0A%20%20%20%20%20%20return%20%3Ch1%3E%7Bchildren%7D%3C/h1%3E%3B%0A%20%20%20%20case%202%3A%0A%20%20%20%20%20%20return%20%3Ch2%3E%7Bchildren%7D%3C/h2%3E%3B%0A%20%20%20%20case%203%3A%0A%20%20%20%20%20%20return%20%3Ch3%3E%7Bchildren%7D%3C/h3%3E%3B%0A%20%20%20%20case%204%3A%0A%20%20%20%20%20%20return%20%3Ch4%3E%7Bchildren%7D%3C/h4%3E%3B%0A%20%20%20%20case%205%3A%0A%20%20%20%20%20%20return%20%3Ch5%3E%7Bchildren%7D%3C/h5%3E%3B%0A%20%20%20%20case%206%3A%0A%20%20%20%20%20%20return%20%3Ch6%3E%7Bchildren%7D%3C/h6%3E%3B%0A%20%20%20%20default%3A%0A%20%20%20%20%20%20throw%20Error%28%27%u672A%u77E5%u7EA7%u522B%uFF1A%27%20+%20level%29%3B%0A%20%20%7D%0A%7D%0A",lang:"jsx"}),h,t(A,{code:"import%20%7B%20createContext%20%7D%20from%20%27react%27%3B%0Aexport%20const%20LevelContext%20%3D%20createContext%280%29%3B%20//%20%u521B%u5EFA%u4E0A%u4E0B%u6587%0A",lang:"jsx"}),k,x,t(A,{code:"import%20AddTask%20from%20%27./AddTask.js%27%3B%0Aimport%20TaskList%20from%20%27./TaskList.js%27%3B%0Aimport%20%7B%20TasksProvider%20%7D%20from%20%27./TasksContext.js%27%3B%0A%0Aexport%20default%20function%20TaskApp%28%29%20%7B%0A%20%20return%20%28%0A%20%20%20%20%3CTasksProvider%3E%0A%20%20%20%20%20%20%3Ch1%3E%u5728%u4EAC%u90FD%u4F11%u606F%u4E00%u5929%3C/h1%3E%0A%20%20%20%20%20%20%3CAddTask%20/%3E%0A%20%20%20%20%20%20%3CTaskList%20/%3E%0A%20%20%20%20%3C/TasksProvider%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),m,t(A,{code:"import%20%7B%20createContext%2C%20useContext%2C%20useReducer%20%7D%20from%20%27react%27%3B%0A%0Aconst%20TasksContext%20%3D%20createContext%28null%29%3B%0Aconst%20TasksDispatchContext%20%3D%20createContext%28null%29%3B%0A%0Aexport%20function%20TasksProvider%28%7B%20children%20%7D%29%20%7B%0A%20%20const%20%5Btasks%2C%20dispatch%5D%20%3D%20useReducer%28%0A%20%20%20%20tasksReducer%2C%0A%20%20%20%20initialTasks%0A%20%20%29%3B%0A%20%20//%20provide%20tasks%20%u548C%20dispatch%0A%20%20return%20%28%0A%20%20%20%20%3CTasksContext.Provider%20value%3D%7Btasks%7D%3E%0A%20%20%20%20%20%20%3CTasksDispatchContext.Provider%0A%20%20%20%20%20%20%20%20value%3D%7Bdispatch%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%7Bchildren%7D%0A%20%20%20%20%20%20%3C/TasksDispatchContext.Provider%3E%0A%20%20%20%20%3C/TasksContext.Provider%3E%0A%20%20%29%3B%0A%7D%0A//%20%u83B7%u53D6%20tasks%20%u503C%0Aexport%20function%20useTasks%28%29%20%7B%0A%20%20return%20useContext%28TasksContext%29%3B%0A%7D%0A//%20%u83B7%u53D6%20dispatch%20%u503C%0Aexport%20function%20useTasksDispatch%28%29%20%7B%0A%20%20return%20useContext%28TasksDispatchContext%29%3B%0A%7D%0A%0Afunction%20tasksReducer%28tasks%2C%20action%29%20%7B%0A%20%20switch%20%28action.type%29%20%7B%0A%20%20%20%20case%20%27added%27%3A%20%7B%0A%20%20%20%20%20%20return%20%5B...tasks%2C%20%7B%0A%20%20%20%20%20%20%20%20id%3A%20action.id%2C%0A%20%20%20%20%20%20%20%20text%3A%20action.text%2C%0A%20%20%20%20%20%20%20%20done%3A%20false%0A%20%20%20%20%20%20%7D%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20case%20%27changed%27%3A%20%7B%0A%20%20%20%20%20%20return%20tasks.map%28t%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20%28t.id%20%3D%3D%3D%20action.task.id%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20action.task%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20t%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20case%20%27deleted%27%3A%20%7B%0A%20%20%20%20%20%20return%20tasks.filter%28t%20%3D%3E%20t.id%20%21%3D%3D%20action.id%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20default%3A%20%7B%0A%20%20%20%20%20%20throw%20Error%28%27%u672A%u77E5%u64CD%u4F5C%uFF1A%27%20+%20action.type%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20initialTasks%20%3D%20%5B%0A%20%20%7B%20id%3A%200%2C%20text%3A%20%27%u54F2%u5B66%u5BB6%u4E4B%u8DEF%27%2C%20done%3A%20true%20%7D%2C%0A%20%20%7B%20id%3A%201%2C%20text%3A%20%27%u53C2%u89C2%u5BFA%u5E99%27%2C%20done%3A%20false%20%7D%2C%0A%20%20%7B%20id%3A%202%2C%20text%3A%20%27%u559D%u62B9%u8336%27%2C%20done%3A%20false%20%7D%0A%5D%3B%0A",lang:"jsx"}),_,t(A,{code:"import%20%7B%20useState%2C%20useContext%20%7D%20from%20%27react%27%3B%0Aimport%20%7B%20useTasksDispatch%20%7D%20from%20%27./TasksContext.js%27%3B%0A%0Aexport%20default%20function%20AddTask%28%7B%20onAddTask%20%7D%29%20%7B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState%28%27%27%29%3B%0A%20%20const%20dispatch%20%3D%20useTasksDispatch%28%29%3B%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20placeholder%3D%22%u6DFB%u52A0%u4EFB%u52A1%22%0A%20%20%20%20%20%20%20%20value%3D%7Btext%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7Be%20%3D%3E%20setText%28e.target.value%29%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setText%28%27%27%29%3B%0A%20%20%20%20%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20%27added%27%2C%0A%20%20%20%20%20%20%20%20%20%20id%3A%20nextId++%2C%0A%20%20%20%20%20%20%20%20%20%20text%3A%20text%2C%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%7D%7D%3E%u6DFB%u52A0%3C/button%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A%0Alet%20nextId%20%3D%203%3B%0A",lang:"jsx"}),g,t(A,{code:"import%20%7B%20useState%2C%20useContext%20%7D%20from%20%27react%27%3B%0Aimport%20%7B%20useTasks%2C%20useTasksDispatch%20%7D%20from%20%27./TasksContext.js%27%3B%0A%0Aexport%20default%20function%20TaskList%28%29%20%7B%0A%20%20const%20tasks%20%3D%20useTasks%28%29%3B%0A%20%20return%20%28%0A%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%7Btasks.map%28task%20%3D%3E%20%28%0A%20%20%20%20%20%20%20%20%3Cli%20key%3D%7Btask.id%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTask%20task%3D%7Btask%7D%20/%3E%0A%20%20%20%20%20%20%20%20%3C/li%3E%0A%20%20%20%20%20%20%29%29%7D%0A%20%20%20%20%3C/ul%3E%0A%20%20%29%3B%0A%7D%0A%0Afunction%20Task%28%7B%20task%20%7D%29%20%7B%0A%20%20const%20%5BisEditing%2C%20setIsEditing%5D%20%3D%20useState%28false%29%3B%0A%20%20const%20dispatch%20%3D%20useTasksDispatch%28%29%3B%0A%20%20let%20taskContent%3B%0A%20%20if%20%28isEditing%29%20%7B%0A%20%20%20%20taskContent%20%3D%20%28%0A%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Btask.text%7D%0A%20%20%20%20%20%20%20%20%20%20onChange%3D%7Be%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%27changed%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20task%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...task%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20e.target.value%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%20/%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20onClick%3D%7B%28%29%20%3D%3E%20setIsEditing%28false%29%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%u4FDD%u5B58%0A%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%3C/%3E%0A%20%20%20%20%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20taskContent%20%3D%20%28%0A%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%7Btask.text%7D%0A%20%20%20%20%20%20%20%20%3Cbutton%20onClick%3D%7B%28%29%20%3D%3E%20setIsEditing%28true%29%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%u7F16%u8F91%0A%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%3C/%3E%0A%20%20%20%20%29%3B%0A%20%20%7D%0A%20%20return%20%28%0A%20%20%20%20%3Clabel%3E%0A%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20type%3D%22checkbox%22%0A%20%20%20%20%20%20%20%20checked%3D%7Btask.done%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7Be%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%27changed%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20task%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...task%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20done%3A%20e.target.checked%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%7BtaskContent%7D%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7B%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20dispatch%28%7B%0A%20%20%20%20%20%20%20%20%20%20type%3A%20%27deleted%27%2C%0A%20%20%20%20%20%20%20%20%20%20id%3A%20task.id%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%u5220%u9664%0A%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%3C/label%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),T,F,R,t(A,{code:"import%20%7B%20useRef%20%7D%20from%20%27react%27%3B%0A%0Aexport%20default%20function%20Counter%28%29%20%7B%0A%20%20let%20ref%20%3D%20useRef%280%29%3B%0A%0A%20%20function%20handleClick%28%29%20%7B%0A%20%20%20%20ref.current%20%3D%20ref.current%20+%201%3B%20//%20%u8BBF%u95EE%u8BE5%20ref%20%u7684%u5F53%u524D%u503C%0A%20%20%20%20alert%28%27You%20clicked%20%27%20+%20ref.current%20+%20%27%20times%21%27%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3Cbutton%20onClick%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20Click%20me%21%0A%20%20%20%20%3C/button%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),v,t(A,{code:"import%20%7B%20useRef%20%7D%20from%20%27react%27%3B%0A%0Aexport%20default%20function%20Form%28%29%20%7B%0A%20%20const%20inputRef%20%3D%20useRef%28null%29%3B%0A%0A%20%20function%20handleClick%28%29%20%7B%0A%20%20%20%20inputRef.current.focus%28%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3Cinput%20ref%3D%7BinputRef%7D%20/%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20%20%20Focus%20the%20input%0A%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),j,t(A,{code:"import%20%7B%20useRef%20%7D%20from%20%27react%27%3B%0A%0Afunction%20MyInput%28props%29%20%7B%0A%20%20return%20%3Cinput%20%7B...props%7D%20/%3E%3B%0A%7D%0A%0Aexport%20default%20function%20MyForm%28%29%20%7B%0A%20%20const%20inputRef%20%3D%20useRef%28null%29%3B%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CMyInput%20ref%3D%7BinputRef%7D%20/%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A%0A//%20Warning%3A%20Function%20components%20cannot%20be%20given%20refs.%20Attempts%20to%20access%20this%20ref%20will%20fail.%20Did%20you%20mean%20to%20use%20React.forwardRef%28%29%0A",lang:"jsx"}),b,S,t(A,{code:"import%20%7B%20forwardRef%2C%20useRef%20%7D%20from%20%27react%27%3B%0A%0Aconst%20MyInput%20%3D%20forwardRef%28%28props%2C%20ref%29%20%3D%3E%20%7B%0A%20%20return%20%3Cinput%20%7B...props%7D%20ref%3D%7Bref%7D%20/%3E%3B%0A%7D%29%3B%0A%0Aexport%20default%20function%20Form%28%29%20%7B%0A%20%20const%20inputRef%20%3D%20useRef%28null%29%3B%0A%0A%20%20function%20handleClick%28%29%20%7B%0A%20%20%20%20inputRef.current.focus%28%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CMyInput%20ref%3D%7BinputRef%7D%20/%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20%20%20%u805A%u7126%u8F93%u5165%u6846%0A%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),I,e("p",null,[t(a,{to:"https://zh-hans.react.dev/learn/referencing-values-with-refs#differences-between-refs-and-state"},{default:n(()=>[u("\u53C2\u8003\u94FE\u63A5")]),_:1})]),H,t(A,{code:"import%20%7B%20forwardRef%2C%20useRef%2C%20useImperativeHandle%20%7D%20from%20%27react%27%3B%0A%0Aconst%20MyInput%20%3D%20forwardRef%28%28props%2C%20ref%29%20%3D%3E%20%7B%0A%20%20const%20realInputRef%20%3D%20useRef%28null%29%3B%0A%20%20useImperativeHandle%28ref%2C%20%28%29%20%3D%3E%20%28%7B%0A%20%20%20%20//%20%u53EA%u66B4%u9732%20focus%uFF0C%u6CA1%u6709%u522B%u7684%0A%20%20%20%20focus%28%29%20%7B%0A%20%20%20%20%20%20realInputRef.current.focus%28%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D%29%29%3B%0A%20%20return%20%3Cinput%20%7B...props%7D%20ref%3D%7BrealInputRef%7D%20/%3E%3B%0A%7D%29%3B%0A%0Aexport%20default%20function%20Form%28%29%20%7B%0A%20%20const%20inputRef%20%3D%20useRef%28null%29%3B%0A%0A%20%20function%20handleClick%28%29%20%7B%0A%20%20%20%20inputRef.current.focus%28%29%3B%0A%20%20%7D%0A%0A%20%20return%20%28%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CMyInput%20ref%3D%7BinputRef%7D%20/%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7BhandleClick%7D%3E%0A%20%20%20%20%20%20%20%20%u805A%u7126%u8F93%u5165%u6846%0A%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%3C/%3E%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"}),w,y,t(A,{code:"import%20%7B%20useMemo%2C%20useState%20%7D%20from%20%27react%27%3B%0A%0Afunction%20TodoList%28%7B%20todos%2C%20filter%20%7D%29%20%7B%0A%20%20const%20%5BnewTodo%2C%20setNewTodo%5D%20%3D%20useState%28%27%27%29%3B%0A%20%20//%20%u2705%20Does%20not%20re-run%20getFilteredTodos%28%29%20unless%20todos%20or%20filter%20change%0A%20%20const%20visibleTodos%20%3D%20useMemo%28%28%29%20%3D%3E%20getFilteredTodos%28todos%2C%20filter%29%2C%20%5Btodos%2C%20filter%5D%29%3B%0A%20%20//%20...%0A%7D%0A",lang:"jsx"}),L]),_:1})}}};export{V as default};
