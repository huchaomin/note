import{r as a,o as c,c as r,f as u,g as t,a9 as n,v as o}from"./vendor-585b19a3.js";const l=n("h2",{id:"1-\u57FA\u672C\u914D\u7F6E",class:"doc-heading"},"\u57FA\u672C\u914D\u7F6E",-1),d=n("h2",{id:"2-\u4F7F\u7528-cdn-\u548C-hash",class:"doc-heading"},"\u4F7F\u7528 CDN \u548C hash",-1),p=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,"webpack4.x\u7248\u672C\u53CA\u4E4B\u524D\u4E3A hash\uFF0Cwebpack5.x\u4E2D\u4F7F\u7528 fullhash \u548C hash \u5747\u53EF")],-1),h=n("h2",{id:"3-publicpath",class:"doc-heading"},"publicPath",-1),m=n("p",null,"\u6309\u9700\u52A0\u8F7D(on-demand-load)\u6216\u52A0\u8F7D\u5916\u90E8\u8D44\u6E90(external resources)\uFF08\u5982\u56FE\u7247\u3001\u6587\u4EF6\u7B49\uFF09\u7684\u76F8\u5BF9\u52A0\u8F7D\u8DEF\u5F84\u524D\u7F00",-1),b=n("div",{class:"doc-note doc-note--tip"},[n("p",{class:"doc-note__title"},"TIP"),n("p",null,[o("\u5728\u7F16\u8BD1\u65F6(compile time)\u65E0\u6CD5\u77E5\u9053\u8F93\u51FA\u6587\u4EF6\u7684 publicPath \u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u7559\u7A7A"),n("br"),o(" \u7136\u540E\u5728\u5165\u53E3\u6587\u4EF6(entry file)\u5904\u4F7F\u7528\u81EA\u7531\u53D8\u91CF(free variable) "),n("strong",null,"webpack_public_path"),o("\uFF0C\u4EE5\u4FBF\u5728\u8FD0\u884C\u65F6(runtime)\u8FDB\u884C\u52A8\u6001\u8BBE\u7F6E")])],-1),_=n("h2",{id:"4-environment",class:"doc-heading"},"environment",-1),f=n("p",null,"\u544A\u8BC9 webpack \u5728\u751F\u6210\u7684\u8FD0\u884C\u65F6\u4EE3\u7801\u4E2D\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E2A\u7248\u672C\u7684 ES \u7279\u6027\u3002",-1),k=n("h2",{id:"5-\u5176\u4ED6",class:"doc-heading"},"\u5176\u4ED6",-1),T={__name:"output",setup(g){const s=[{id:"doc-title",title:"webpack output"},{id:"1-\u57FA\u672C\u914D\u7F6E",title:"1. \u57FA\u672C\u914D\u7F6E"},{id:"2-\u4F7F\u7528-cdn-\u548C-hash",title:"2. \u4F7F\u7528 CDN \u548C hash"},{id:"3-publicpath",title:"3. publicPath"},{id:"4-environment",title:"4. environment"},{id:"5-\u5176\u4ED6",title:"5. \u5176\u4ED6"}];return(y,v)=>{const e=a("doc-code"),i=a("doc-page");return c(),r(i,{desc:"webpack output \u8BE6\u89E3",toc:s},{default:u(()=>[l,t(e,{code:`output: {
  filename: '[name].js',
  path:__dirname + '/dist'
}
`,lang:"javascript"}),d,t(e,{code:`output: {
  path: '/home/proj/cdn/assets/[fullhash]',
  publicPath: 'https://cdn.example.com/assets/[fullhash]/'
}
`,lang:"javascript"}),p,h,m,b,_,f,t(e,{code:`output: {
  environment: {
    // The environment supports arrow functions ('() => { ... }').
    arrowFunction: true,
    // The environment supports BigInt as literal (123n).
    bigIntLiteral: false,
    // The environment supports const and let for variable declarations.
    const: true,
    // The environment supports destructuring ('{ a, b } = obj').
    destructuring: true,
    // The environment supports an async import() function to import EcmaScript modules.
    dynamicImport: false,
    // The environment supports 'for of' iteration ('for (const x of array) { ... }').
    forOf: true,
    // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
    module: false,
  }
}
`,lang:"javascript"}),k,t(e,{code:`output: {
  library: 'someLibName',
  libraryTarget: 'umd',
  // \u6BCF\u4E2A\u8F93\u51FA bundle \u7684\u540D\u79F0(\u4E0D\u4F1A\u5F71\u54CD\u90A3\u4E9B\u300C\u6309\u9700\u52A0\u8F7D chunk \u6216 loader\u521B\u5EFA\u7684\u6587\u4EF6\u300D\u7684\u8F93\u51FA\u6587\u4EF6)
  filename: '[name].[contenthash].[id].bundle.js'
  filename: (pathData) => {
    return pathData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
  },
  // \u6DFB\u52A0\u6CE8\u91CA
  auxiliaryComment: 'Test Comment'\uFF0C
  // \u4E3A HTML \u7684 <script> \u6807\u7B7E\u6DFB\u52A0 charset="utf-8" \u6807\u8BC6,\u9ED8\u8BA4\u4E3Atrue
  charset: true,
  // \u5B9A\u4E49\u52A8\u6001\u52A0\u8F7D\uFF08\u5F02\u6B65\u52A0\u8F7D\uFF09\u7684chunk\u7684\u540D\u5B57
  chunkFilename: [id].js,
  // \u8BF7\u6C42chunk\u7684timeOut\u65F6\u95F4\uFF0C\u9ED8\u8BA4120000
  chunkLoadTimeout\uFF1A 120000,
  // \u7528\u4E8E\u52A0\u8F7D chunk \u7684\u5168\u5C40\u53D8\u91CF(\u4E00\u822C\u4E3AJSONP \u51FD\u6570)
  chunkLoadingGlobal: 'myCustomFunc',
  // \u52A0\u8F7D chunk \u7684\u65B9\u6CD5.\uFF08\u9ED8\u8BA4\u503C\u6709 'jsonp' (web)\uFF0C'importScripts' (WebWorker)\uFF0C'require' (sync node.js)\uFF0C'async-node' (async node.js)
  chunkLoading: 'async-node',
  // chunk \u7684\u683C\u5F0F.( \u9ED8\u8BA4\u5305\u542B 'array-push' (web/WebWorker)\uFF0C'commonjs' (node.js))
  chunkFormat: 'commonjs',
  // \u4E3A\u5165\u53E3\u542F\u7528 chunk \u52A0\u8F7D\u7C7B\u578B\u5217\u8868
  enabledChunkLoadingTypes: ['jsonp', 'require'],
  // \u544A\u8BC9 webpack \u542F\u7528 cross-origin \u5C5E\u6027 \u52A0\u8F7D chunk
  crossOriginLoading: 'anonymous',
  // asset Modules \u7684 filename
  assetModuleFilename: '[hash][ext][query]',
  // \u4F7F\u7528\u54EA\u4E2A\u5168\u5C40\u5BF9\u8C61\u6765\u6302\u8F7D library
  globalObject: 'this',
  // \u81EA\u5B9A\u4E49\u70ED\u66F4\u65B0 chunk \u7684\u6587\u4EF6\u540D
  hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
  // \u53EA\u5728 target \u8BBE\u7F6E\u4E3A 'web' \u65F6\u4F7F\u7528\uFF0C\u7528\u4E8E\u52A0\u8F7D\u70ED\u66F4\u65B0(hot update)\u7684 JSONP \u51FD\u6570
  hotUpdateGlobal: 'myCustomFunc',
  // \u5982\u679C\u4E00\u4E2A\u6A21\u5757\u662F\u5728 require \u65F6\u629B\u51FA\u5F02\u5E38\uFF0C\u544A\u8BC9 webpack \u4ECE\u6A21\u5757\u5B9E\u4F8B\u7F13\u5B58(require.cache)\u4E2D\u5220\u9664\u8FD9\u4E2A\u6A21\u5757
  strictModuleExceptionHandling: false,
  // \u5165\u53E3\u70B9\u53EF\u7528\u7684 library \u7C7B\u578B\u5217\u8868
  enabledLibraryTypes: ['module'],
  // \u544A\u8BC9 webpack \u6DFB\u52A0 IIFE \u5916\u5C42\u5305\u88F9\u751F\u6210\u7684\u4EE3\u7801.
  iife: true
  // \u662F\u4E00\u4E2A\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C \u60F3\u8981\u4F7F\u7528\u7684\u8BDD\uFF0C\u901A\u8FC7\u8BBE\u7F6E experiments.outputModule \u4E3A true
  // \u8BBE\u7F6E output.iife \u4E3A false, output.libraryTarget \u4E3A 'module', output.scriptType \u4E3A 'module' \u548C terserOptions.module \u4E3A true
  module: true
}
`,lang:"javascript"})]),_:1})}}};export{T as default};
