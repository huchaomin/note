import{n as r,o as n,p as D,w as A,i as e,f as u,a as F}from"./vendor-a2411ed8.js";const s=e("h2",{id:"1-vue-\u5982\u4F55\u914D\u7F6E-eslint",class:"doc-heading"},"vue \u5982\u4F55\u914D\u7F6E ESLint",-1),B=e("br",null,null,-1),a=e("br",null,null,-1),l=e("blockquote",{class:"doc-note"},[e("p",null,"\u5982\u679C\u60F3\u4E3A vue \u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684 script \u90E8\u5206\u4F7F\u7528\u5355\u72EC\u7684 parser \u53EF\u4EE5\u5C06 parserOptions.parser \u6307\u5B9A\u4E3A\u60F3\u4F7F\u7528\u7684 parser \u5373\u53EF")],-1),i=e("h2",{id:"2-vue-\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",class:"doc-heading"},"vue \u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",-1),w={__name:"vue\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",setup(c){const E=[{id:"doc-title",title:"eslint vue\u5F00\u53D1"},{id:"1-vue-\u5982\u4F55\u914D\u7F6E-eslint",title:"1. vue \u5982\u4F55\u914D\u7F6E ESLint"},{id:"2-vue-\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",title:"2. vue \u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E"}];return(p,d)=>{const C=r("doc-link"),t=r("doc-code"),o=r("doc-page");return n(),D(o,{desc:"eslint vue\u5F00\u53D1\u901A\u7528\u7684\u914D\u7F6E",toc:E},{default:A(()=>[s,e("p",null,[u("vue \u5B98\u65B9\u63D0\u4F9B\u4E86\u4E00\u4E2A ESLint \u63D2\u4EF6 "),F(C,{to:"https://eslint.vuejs.org/user-guide/#installation"},{default:A(()=>[u("eslint-plugin-vue")]),_:1}),u("\uFF0C"),B,u(" \u5B83\u63D0\u4F9B\u4E86 parser \u548C rules\u3002parser \u4E3A "),F(C,{to:"https://github.com/vuejs/vue-eslint-parser#readme"},{default:A(()=>[u("vue-eslint-parser")]),_:1}),u("\uFF0C"),a,u(" rules \u4E3A "),F(C,{to:"https://eslint.vuejs.org/rules/"},{default:A(()=>[u("https://eslint.vuejs.org/rules/")]),_:1}),u("\u3002")]),l,i,F(t,{code:"module.exports%20%3D%20%7B%0A%20root%3A%20true%2C%20//%20%u6307%u5B9A%u5F53%u524D%u914D%u7F6E%u4E3A%u6839%u914D%u7F6E%0A%20extends%3A%20%5B%22plugin%3Avue/essential%22%2C%20%22@vue/standard%22%5D%2C%0A%20parserOptions%3A%20%7B%0A%20%20parser%3A%20%22@babel/eslint-parser%22%2C%20//%20%uFF1F%u4E0D%u77E5%u9053vue-cli%u9ED8%u8BA4%u751F%u6210%u7684%u914D%u7F6E%u662F%u4E0D%u662F%u7528%u8FD9%u4E2A%u89E3%u6790%u5668%0A%20%20ecmaVersion%3A%206%2C%20//%20%u5BF9%u4E8E%20ES6%20%u8BED%u6CD5%0A%20%20sourceType%3A%20%22module%22%2C%20//%20%u8BBE%u7F6E%u4E3A%20%u201Dscript%u201D%20%28%u9ED8%u8BA4%29%20%u6216%20%u201Dmodule%u201D%uFF08%u5982%u679C%u4F60%u7684%u4EE3%u7801%u662F%20ECMAScript%20%u6A21%u5757%29%0A%20%20ecmaFeatures%3A%20%7B%0A%20%20%20globalReturn%3A%20false%2C%20//%20%u5141%u8BB8%u5728%u5168%u5C40%u4F5C%u7528%u57DF%u4E0B%u4F7F%u7528%20return%20%u8BED%u53E5%0A%20%20%20impliedStrict%3A%20true%2C%20//%20%u542F%u7528%u5168%u5C40%20strict%20mode%20%28%u5982%u679C%20ecmaVersion%20%u662F%205%20%u6216%u66F4%u9AD8%29%0A%20%20%20jsx%3A%20true%2C%20//%20%20%u542F%u7528%20JSX%0A%20%20%7D%2C%0A%20%20allowImportExportEverywhere%3A%20false%2C%20//%20%u4EC5%u5141%u8BB8%20import%20export%20%u8BED%u53E5%u51FA%u73B0%u5728%u6A21%u5757%u7684%u9876%u5C42%0A%20%20requireConfigFile%3A%20false%2C%20//%20%u5373%u4F7F%u6CA1%u6709%20babelrc%20%u914D%u7F6E%u6587%u4EF6%uFF0C%u4E5F%u4F7F%u7528%20babel-eslint%20%u6765%u89E3%u6790%0A%20%7D%2C%0A%20env%3A%20%7B%0A%20%20//%20%u4E00%u7EC4%u9884%u5B9A%u4E49%u7684%u5168%u5C40%u53D8%u91CF%0A%20%20browser%3A%20true%2C%20//%20%u6D4F%u89C8%u5668%u73AF%u5883%u4E2D%u7684%u5168%u5C40%u53D8%u91CF%0A%20%20node%3A%20true%2C%20//%20Node.js%20%u5168%u5C40%u53D8%u91CF%u548C%20Node.js%20%u4F5C%u7528%u57DF%0A%20%20commonjs%3A%20true%2C%0A%20%20es6%3A%20true%2C%20//%20%u65B0%u7684%20ES6%20%u5168%u5C40%u53D8%u91CF%0A%20%7D%2C%0A%20rules%3A%20%7B%0A%20%20//%20%u7F29%u8FDB%0A%20%20%22indent%22%3A%20%5B%22warn%22%2C%202%2C%20%7B%20SwitchCase%3A%201%20%7D%5D%2C%0A%20%20//%20%u53CC%u5F15%u53F7%0A%20%20%22quotes%22%3A%20%5B%22error%22%2C%20%22double%22%5D%2C%0A%20%20//%20%u672B%u5C3E%u5206%u53F7%0A%20%20%22semi%22%3A%20%5B%22error%22%2C%20%22always%22%5D%2C%0A%20%20//%20%u4F7F%u7528%u4E00%u81F4%u7684%u6362%u884C%u98CE%u683C%0A%20%20%22linebreak-style%22%3A%20%22off%22%2C%0A%20%20//%20%u8981%u6C42%u6216%u7981%u6B62%u6587%u4EF6%u672B%u5C3E%u5B58%u5728%u7A7A%u884C%0A%20%20%22eol-last%22%3A%20%5B%22warn%22%2C%20%22always%22%5D%2C%0A%20%20//%20%u5F3A%u5236%u5728%u9017%u53F7%u524D%u540E%u4F7F%u7528%u4E00%u81F4%u7684%u7A7A%u683C%0A%20%20%22comma-spacing%22%3A%20%5B%0A%20%20%20%22error%22%2C%0A%20%20%20%7B%0A%20%20%20%20before%3A%20false%2C%0A%20%20%20%20after%3A%20true%2C%0A%20%20%20%7D%2C%0A%20%20%5D%2C%0A%20%20//%20%u4F7F%u7528%u62D6%u5C3E%u9017%u53F7%0A%20%20%22comma-dangle%22%3A%20%5B%22warn%22%2C%20%22always-multiline%22%5D%2C%0A%20%20//%20%u5192%u53F7%u4E4B%u524D%u6709%uFF0C%u4E4B%u540E%u6CA1%u6709%0A%20%20%22key-spacing%22%3A%20%5B%0A%20%20%20%22error%22%2C%0A%20%20%20%7B%0A%20%20%20%20beforeColon%3A%20false%2C%0A%20%20%20%20afterColon%3A%20true%2C%0A%20%20%20%20mode%3A%20%22strict%22%2C%0A%20%20%20%7D%2C%0A%20%20%5D%2C%0A%20%20//%20%u5F3A%u5236%u5728%u4EE3%u7801%u5757%u4E2D%u5F00%u62EC%u53F7%u524D%u548C%u95ED%u62EC%u53F7%u540E%u6709%u7A7A%u683C%0A%20%20%22block-spacing%22%3A%20%5B%22error%22%2C%20%22always%22%5D%2C%0A%20%20//%20%u5F3A%u5236%u5728%u4EE3%u7801%u5757%u4E2D%u4F7F%u7528%u4E00%u81F4%u7684%u5927%u62EC%u53F7%u98CE%u683C%0A%20%20%22brace-style%22%3A%20%5B%22error%22%2C%20%221tbs%22%2C%20%7B%20allowSingleLine%3A%20true%20%7D%5D%2C%0A%20%20//%20%u5BF9%u6BCF%u4E2A%u62EC%u53F7%u8981%u6C42%u4F7F%u7528%u4E00%u81F4%u7684%u6362%u884C%u7B26%u3002%u5982%u679C%u4E00%u4E2A%u62EC%u53F7%u6709%u6362%u884C%u7B26%uFF0C%u53E6%u4E00%u4E2A%u6CA1%u6709%uFF0C%u5219%u4F1A%u62A5%u9519%0A%20%20%22array-bracket-newline%22%3A%20%5B%22error%22%2C%20%22consistent%22%5D%2C%0A%20%20//%20%u5F3A%u5236%u6570%u7EC4%u65B9%u62EC%u53F7%u4E2D%u4F7F%u7528%u4E00%u81F4%u7684%u7A7A%u683C%0A%20%20%22array-bracket-spacing%22%3A%20%5B%22error%22%2C%20%22never%22%5D%2C%0A%20%20//%20%u5F3A%u5236%u6570%u7EC4%u5143%u7D20%u95F4%u51FA%u73B0%u6362%u884C%0A%20%20%22array-element-newline%22%3A%20%5B%22off%22%2C%20%7B%20multiline%3A%20true%2C%20minItems%3A%203%20%7D%5D%2C%0A%20%20//%20%u5224%u65AD%u76F8%u7B49%u65F6%u4F7F%u7528%20%3D%3D%3D%20%u548C%20%21%3D%3D%20%uFF0C%u800C%u4E0D%u662F%20%3D%3D%20%u548C%20%21%3D%0A%20%20%22eqeqeq%22%3A%20%22warn%22%2C%0A%20%20//%20%u7981%u7528%20console%0A%20%20%22no-console%22%3A%20%22warn%22%2C%0A%20%20//%20%u8D85%u957F%u4EE3%u7801%u9700%u8981%u88AB%u6362%u884C%uFF0C%u6BCF%u884C%u4EE3%u7801%u5E94%u8BE5%u5C11%u4E8E160%u4E2A%u5B57%u7B26%uFF08%u4EE5%u6B64%u4E3A%u51C6%uFF09%0A%20%20%22max-len%22%3A%20%5B%22warn%22%2C%20%7B%20code%3A%20160%20%7D%5D%2C%0A%20%20//%20%u65B9%u6CD5%u7684%u53C2%u6570%u5C3D%u91CF%u5728%u4E00%u884C%u663E%u793A%0A%20%20%22function-paren-newline%22%3A%20%5B%22warn%22%2C%20%22multiline%22%5D%2C%0A%20%20//%20%u5F3A%u5236%u5C06%u5BF9%u8C61%u7684%u5C5E%u6027%u653E%u5728%u4E0D%u540C%u7684%u884C%u4E0A%0A%20%20%22object-property-newline%22%3A%20%5B%22warn%22%2C%20%7B%20allowAllPropertiesOnSameLine%3A%20true%20%7D%5D%2C%0A%20%20//%20%u94FE%u5F0F%u8C03%u7528%u5BF9%u8C61%u65B9%u6CD5%u65F6%uFF0C%u4E00%u884C%u6700%u591A%u8C03%u75284%u6B21%uFF0C%u5426%u5219%u9700%u8981%u6362%u884C%0A%20%20%22newline-per-chained-call%22%3A%20%5B%22warn%22%2C%20%7B%20ignoreChainWithDepth%3A%204%20%7D%5D%2C%0A%20%20//%20%u63A7%u5236%u6587%u4EF6%u7684%u957F%u5EA6%uFF0C%u6700%u597D%u4E0D%u8981%u8D85%u8FC72000%u884C%0A%20%20%22max-lines%22%3A%20%5B%22error%22%2C%20800%5D%2C%0A%20%20//%20%u65B9%u6CD5%u8BBE%u8BA1%u5E94%u9075%u5FAA%u5355%u4E00%u804C%u8D23%u539F%u5219%uFF08SRP%uFF09%uFF0C%u4E00%u4E2A%u65B9%u6CD5%u4EC5%u5B8C%u6210%u4E00%u4E2A%u529F%u80FD%uFF0C%u6700%u591A50%u884C%0A%20%20%22max-lines-per-function%22%3A%20%5B%22error%22%2C%2050%5D%2C%0A%20%20//%20%u8981%u6C42%u5BF9%u8C61%u5B57%u9762%u91CF%u5C5E%u6027%u540D%u79F0%u4F7F%u7528%u5F15%u53F7%0A%20%20%22quote-props%22%3A%20%5B%22error%22%2C%20%22consistent-as-needed%22%5D%2C%0A%20%20//%20%u5708%u590D%u6742%u5EA6%u4E0D%u8D85%u8FC720%uFF0C%u8F6F%u4EF6%u5B66%u9662%u7EDF%u4E00%u8981%u6C42%u662F%uFF1A10%0A%20%20%22complexity%22%3A%20%5B%22warn%22%2C%2010%5D%2C%0A%20%20//%20%u5757%u8BED%u53E5%u7684%u6700%u5927%u53EF%u5D4C%u5957%u6DF1%u5EA6%u4E0D%u8981%u8D85%u8FC74%u5C42%0A%20%20%22max-depth%22%3A%20%5B%22warn%22%2C%204%5D%2C%0A%20%20//%20%u56DE%u8C03%u51FD%u6570%u5D4C%u5957%u7684%u5C42%u6570%u4E0D%u8D85%u8FC74%u5C42%0A%20%20%22max-nested-callbacks%22%3A%20%5B%22error%22%2C%204%5D%2C%0A%20%20//%20%u7981%u6B62%u8FDE%u7EED%u8D4B%u503C%0A%20%20%22no-multi-assign%22%3A%20%22error%22%2C%0A%20%20//%20%u53D8%u91CF%u4E0D%u9700%u8981%u7528undefined%u521D%u59CB%u5316%0A%20%20%22no-undef-init%22%3A%20%22warn%22%2C%0A%20%20//%20%u5757%u5185%u53D8%u91CF%u4E0D%u80FD%u4E0E%u51FD%u6570%u5185%u7684%u5176%u4ED6%u53D8%u91CF%u540C%u540D%uFF0C%u5757%u5185%u51FD%u6570%u5E94%u8BE5%u4F7F%u7528%u51FD%u6570%u8868%u8FBE%u5F0F%u58F0%u660E%0A%20%20%22no-shadow%22%3A%20%22error%22%2C%0A%20%20//%20%u65B9%u6CD5%u7684%u53C2%u6570%u4E2A%u6570%u4E0D%u5B9C%u8D85%u8FC75%u4E2A%0A%20%20%22max-params%22%3A%20%5B%22warn%22%2C%205%5D%2C%0A%20%20//%20%u4E0D%u8981%u628A%u65B9%u6CD5%u7684%u5165%u53C2%u5F53%u4F5C%u5DE5%u4F5C%u53D8%u91CF/%u4E34%u65F6%u53D8%u91CF%0A%20%20%22no-param-reassign%22%3A%20%22error%22%2C%0A%20%20//%20%u4E0D%u8981%u4F7F%u7528%20arguments%uFF0C%u53EF%u4EE5%u9009%u62E9%20rest%20%u8BED%u6CD5%u66FF%u4EE3%0A%20%20%22prefer-rest-params%22%3A%20%22error%22%2C%0A%20%20//%20function%20%u58F0%u660E%u6216%u8868%u8FBE%u5F0F%u7684%u4E00%u81F4%u6027%0A%20%20%22func-style%22%3A%20%5B%22warn%22%2C%20%22declaration%22%2C%20%7B%20allowArrowFunctions%3A%20true%20%7D%5D%2C%0A%20%20//%20%u7528%u5230%u533F%u540D%u51FD%u6570%u65F6%u4F18%u5148%u4F7F%u7528%u7BAD%u5934%u51FD%u6570%uFF08%u6216%20Function%23bind%uFF09%uFF0C%u522B%u4FDD%u5B58%20this%20%u7684%u5F15%u7528%0A%20%20%22prefer-arrow-callback%22%3A%20%22error%22%2C%0A%20%20//%20%u7BAD%u5934%u51FD%u6570%u7684%u7B80%u5199%0A%20%20%22arrow-body-style%22%3A%20%5B%22warn%22%2C%20%22as-needed%22%5D%2C%0A%20%20//%20%u8981%u6C42%u4F7F%u7528%u4E00%u81F4%u7684%20return%20%u8BED%u53E5%0A%20%20%22consistent-return%22%3A%20%22error%22%2C%0A%20%20//%20%u5728%u6784%u9020%u51FD%u6570%u4E2D%u7981%u6B62%u5728%u8C03%u7528super%28%29%u4E4B%u524D%u4F7F%u7528this%u6216super%0A%20%20%22no-this-before-super%22%3A%20%22error%22%2C%0A%20%20//%20%u4F7F%u7528%u6A21%u677F%u5B57%u7B26%u4E32%uFF08%60%uFF09%u5B9E%u73B0%u5B57%u7B26%u4E32%u62FC%u63A5%0A%20%20%22prefer-template%22%3A%20%22error%22%2C%0A%20%20//%20%u4E0D%u8981%u4F7F%u7528%u5B57%u7B26%u4E32%u7684%u884C%u8FDE%u7EED%u7B26%u53F7%0A%20%20%22no-multi-str%22%3A%20%22warn%22%2C%0A%20%20//%20%u63A8%u8350%u5728%u5BF9%u8C61%u5B57%u9762%u91CF%u4E2D%u4F7F%u7528%u5C5E%u6027%u7B80%u5199%0A%20%20%22object-shorthand%22%3A%20%22warn%22%2C%0A%20%20//%20%u4F7F%u7528%u70B9%u53F7%u6765%u8BBF%u95EE%u5BF9%u8C61%u7684%u5C5E%u6027%uFF0C%u53EA%u6709%u5C5E%u6027%u662F%u52A8%u6001%u7684%u65F6%u5019%u4F7F%u7528%20%5B%5D%0A%20%20%22dot-notation%22%3A%20%22error%22%2C%0A%20%20//%20getter%u548Csetter%u5E94%u8BE5%u6210%u5BF9%u51FA%u73B0%u5728%u5BF9%u8C61%u4E2D%0A%20%20%22accessor-pairs%22%3A%20%22error%22%2C%0A%20%20//%20%u7981%u6B62%u5728%u5BF9%u8C61%u5B9E%u4F8B%u4E0A%u76F4%u63A5%u4F7F%u7528%20Object.prototypes%20%u7684%u5185%u7F6E%u5C5E%u6027%0A%20%20%22no-prototype-builtins%22%3A%20%22error%22%2C%0A%20%20//%20%u9700%u8981%u7EA6%u675F%20for-in%0A%20%20%22guard-for-in%22%3A%20%22error%22%2C%0A%20%20//%20%u4E0D%u8981%u4F7F%u7528%u5426%u5B9A%u8868%u8FBE%u5F0F%0A%20%20%22no-negated-condition%22%3A%20%22warn%22%2C%0A%20%20//%20%u6BCF%u4E2Aswitch%u8BED%u53E5%u90FD%u5305%u542B%u4E00%u4E2Adefault%u8BED%u53E5%uFF0C%u5373%u4F7F%u5B83%u4E0D%u5305%u542B%u4EFB%u4F55%u4EE3%u7801%0A%20%20%22default-case%22%3A%20%22error%22%2C%0A%20%20//%20%u7981%u6B62%u4F7F%u7528eval%28%29%0A%20%20%22no-eval%22%3A%20%22error%22%2C%0A%20%20//%20%u7981%u6B62%u4F7F%u7528%u8F83%u77ED%u7684%u7B26%u53F7%u5B9E%u73B0%u7C7B%u578B%u8F6C%u6362%0A%20%20%22no-implicit-coercion%22%3A%20%5B%22error%22%2C%20%7B%20allow%3A%20%5B%22%21%21%22%5D%20%7D%5D%2C%0A%20%20//%20%u53EF%u4EE5%u4F7F%u7528%u7A7A%u7684Promise.reject%28%29%0A%20%20%22prefer-promise-reject-errors%22%3A%20%5B%22error%22%2C%20%7B%20allowEmptyReject%3A%20true%20%7D%5D%2C%0A%20%7D%2C%0A%20globals%3A%20%7B%0A%20%20%24%3A%20%22readonly%22%2C%20//%20jquery%20%u5168%u5C40%u53D8%u91CF%0A%20%7D%2C%0A%7D%3B%0A",lang:"javascript"})]),_:1})}}};export{w as default};
