import{r as e,o as c,c as A,f as i,g as s}from"./vendor-e1827163.js";const F={__name:"\u524D\u7AEF\u63A5\u53E3\u65F6\u95F4\u7F13\u5B58_js",setup(o){const u=[];return(m,n)=>{const t=e("doc-code"),a=e("doc-page");return c(),A(a,{desc:"",toc:u},{default:i(()=>[s(t,{code:"/*%0A%20*%20%u4FDD%u5B58item%u7684data%2C%u8FC7%u671F%u65F6%u95F4%uFF0C%u4FDD%u5B58%u65F6%u95F4%0A%20*/%0Aclass%20ItemCache%20%7B%0A%20%20construct%20%28data%2C%20timeout%29%20%7B%0A%20%20%20%20this.data%20%3D%20data%0A%20%20%20%20//%20%u8BBE%u5B9A%u8D85%u65F6%u65F6%u95F4%uFF0C%u8BBE%u5B9A%u4E3A%u591A%u5C11%u79D2%0A%20%20%20%20this.timeout%20%3D%20timeout%0A%20%20%20%20//%20%u521B%u5EFA%u5BF9%u8C61%u65F6%u5019%u7684%u65F6%u95F4%uFF0C%u5927%u7EA6%u8BBE%u5B9A%u4E3A%u6570%u636E%u83B7%u5F97%u7684%u65F6%u95F4%0A%20%20%20%20this.cacheTime%20%3D%20%28new%20Date%28%29%29.getTime%0A%20%20%7D%0A%7D%0A%0Aclass%20ExpriesCache%20%7B%0A%20%20//%20%20%u662F%u5426%u8FC7%u671F%0A%20%20static%20isOverTime%20%28name%29%20%7B%0A%20%20%20%20const%20itemCache%20%3D%20ExpriesCache.cacheMap.get%28name%29%0A%20%20%20%20//%20%u6CA1%u6709%u6570%u636E%20%u4E00%u5B9A%u8D85%u65F6%0A%20%20%20%20if%20%28%21itemCache%29%20return%20true%0A%0A%20%20%20%20const%20currentTime%20%3D%20%28new%20Date%28%29%29.getTime%28%29%0A%20%20%20%20const%20overTime%20%3D%20%28currentTime%20-%20itemCache.cacheTime%29%20/%201000%0A%20%20%20%20if%20%28overTime%20%3E%20itemCache.timeout%29%20%7B%0A%20%20%20%20%20%20ExpriesCache.cacheMap.delete%28name%29%0A%20%20%20%20%20%20return%20true%0A%20%20%20%20%7D%0A%20%20%20%20//%20%u4E0D%u8D85%u65F6%0A%20%20%20%20return%20false%0A%20%20%7D%0A%0A%20%20//%20%u83B7%u53D6%0A%20%20static%20get%20%28name%29%20%7B%0A%20%20%20%20const%20isDataOverTiem%20%3D%20ExpriesCache.isOverTime%28name%29%0A%20%20%20%20return%20isDataOverTiem%20%3F%20null%20%3A%20ExpriesCache.cacheMap.get%28name%29.data%0A%20%20%7D%0A%0A%20%20//%20%u8BBE%u7F6E%2C%u9ED8%u8BA4%u5B58%u50A830%u5206%u949F%0A%20%20static%20set%20%28name%2C%20data%2C%20timeout%20%3D%201800%29%20%7B%0A%20%20%20%20const%20itemCache%20%3D%20new%20ItemCache%28data%2C%20timeout%29%0A%20%20%20%20ExpriesCache.cacheMap.set%28name%2C%20itemCache%29%0A%20%20%7D%0A%7D%0A%0AExpriesCache.cacheMap%20%3D%20new%20Map%28%29%0A",lang:"javascript"})]),_:1})}}};export{F as default};
