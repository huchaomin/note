import{r as n,o as i,c as r,f as l,g as o,aa as e,v as a}from"./vendor-b8e3fcbe.js";const u=e("p",null,"\u4F7F\u60A8\u7684\u7EC4\u4EF6\u4E0E\u5916\u90E8\u5B58\u50A8\u540C\u6B65",-1),A=e("p",null,[a("\u6709\u65F6\uFF0C\u60A8\u7684\u7EC4\u4EF6\u53EF\u80FD\u9700\u8981\u8BA2\u9605 React \u72B6\u6001\u4E4B\u5916\u7684\u4E00\u4E9B\u6570\u636E\u3002"),e("br"),a(" \u6B64\u6570\u636E\u53EF\u80FD\u6765\u81EA\u7B2C\u4E09\u65B9\u5E93\u6216\u5185\u7F6E\u6D4F\u89C8\u5668 API\u3002\u7531\u4E8E\u6B64\u6570\u636E\u53EF\u80FD\u4F1A\u5728 React \u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u624B\u52A8\u4E3A\u60A8\u7684\u7EC4\u4EF6\u8BA2\u9605\u5B83\u3002\u8FD9\u901A\u5E38\u901A\u8FC7 Effect \u5B8C\u6210\uFF0C\u4F8B\u5982")],-1),d=e("p",null,"React \u6709\u4E00\u4E2A\u4E13\u95E8\u6784\u5EFA\u7684 Hook\uFF0C\u7528\u4E8E\u8BA2\u9605\u9996\u9009\u7684\u5916\u90E8\u5B58\u50A8",-1),_={__name:"useSyncExternalStore",setup(B){const s=[{id:"doc-title",title:"useSyncExternalStore"}];return(f,p)=>{const t=n("doc-code"),c=n("doc-page");return i(),r(c,{desc:"",toc:s},{default:l(()=>[u,A,o(t,{code:"function%20useOnlineStatus%28%29%20%7B%20//%20%u81EA%u5B9A%u4E49hook%0A%20%20const%20%5BisOnline%2C%20setIsOnline%5D%20%3D%20useState%28true%29%3B%0A%20%20useEffect%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20function%20updateState%28%29%20%7B%0A%20%20%20%20%20%20setIsOnline%28navigator.onLine%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20updateState%28%29%3B%0A%0A%20%20%20%20window.addEventListener%28%27online%27%2C%20updateState%29%3B%0A%20%20%20%20window.addEventListener%28%27offline%27%2C%20updateState%29%3B%0A%20%20%20%20return%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20window.removeEventListener%28%27online%27%2C%20updateState%29%3B%0A%20%20%20%20%20%20window.removeEventListener%28%27offline%27%2C%20updateState%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D%29%3B%0A%20%20return%20isOnline%3B%0A%7D%0A%0Afunction%20ChatIndicator%28%29%20%7B%0A%20%20const%20isOnline%20%3D%20useOnlineStatus%28%29%3B%0A%20%20//%20...%0A%7D%0A",lang:"jsx"}),d,o(t,{code:"function%20subscribe%28callback%29%20%7B%0A%20%20window.addEventListener%28%27online%27%2C%20callback%29%3B%0A%20%20window.addEventListener%28%27offline%27%2C%20callback%29%3B%0A%20%20return%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20window.removeEventListener%28%27online%27%2C%20callback%29%3B%0A%20%20%20%20window.removeEventListener%28%27offline%27%2C%20callback%29%3B%0A%20%20%7D%3B%0A%7D%0A%0Afunction%20useOnlineStatus%28%29%20%7B%0A%20%20//%20%u2705%20Good%3A%20Subscribing%20to%20an%20external%20store%20with%20a%20built-in%20Hook%0A%20%20return%20useSyncExternalStore%28%0A%20%20%20%20subscribe%2C%20//%20React%20won%27t%20resubscribe%20for%20as%20long%20as%20you%20pass%20the%20same%20function%0A%20%20%20%20%28%29%20%3D%3E%20navigator.onLine%2C%20//%20How%20to%20get%20the%20value%20on%20the%20client%0A%20%20%20%20%28%29%20%3D%3E%20true%20//%20How%20to%20get%20the%20value%20on%20the%20server%0A%20%20%29%3B%0A%7D%0A",lang:"jsx"})]),_:1})}}};export{_ as default};
