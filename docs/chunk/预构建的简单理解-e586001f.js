import{r as o,o as l,c,f as d,aa as e,g as t,v as n}from"./vendor-774b84b8.js";const p=e("h2",{id:"1-\u4E3A\u5565\u8981\u9884\u6784\u5EFA",class:"doc-heading"},"\u4E3A\u5565\u8981\u9884\u6784\u5EFA",-1),u=e("p",null,[n("\u7B80\u5355\u6765\u8BB2\u5C31\u662F\u4E3A\u4E86\u63D0\u9AD8\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\u7684\u51B7\u542F\u52A8\u901F\u5EA6\u3002"),e("br"),n(" \u6309\u7167vite\u7684\u8BF4\u6CD5\uFF0C\u5F53\u51B7\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u65F6\uFF0C\u57FA\u4E8E\u6253\u5305\u5668\u7684\u65B9\u5F0F\u542F\u52A8\u5FC5\u987B\u4F18\u5148\u6293\u53D6\u5E76\u6784\u5EFA\u4F60\u7684\u6574\u4E2A\u5E94\u7528\uFF0C\u7136\u540E\u624D\u80FD\u63D0\u4F9B\u670D\u52A1\u3002"),e("br"),n(" \u968F\u7740\u5E94\u7528\u89C4\u6A21\u7684\u589E\u5927\uFF0C\u6253\u5305\u901F\u5EA6\u663E\u8457\u4E0B\u964D\uFF0C\u672C\u5730\u670D\u52A1\u5668\u7684\u542F\u52A8\u901F\u5EA6\u4E5F\u8DDF\u7740\u53D8\u6162\u3002")],-1),h=e("p",null,[n("\u4E3A\u4E86\u52A0\u5FEB\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\u7684\u542F\u52A8\u901F\u5EA6\uFF0Cvite \u5F15\u5165\u4E86\u9884\u6784\u5EFA\u673A\u5236\u3002"),e("br"),n(" \u5728\u9884\u6784\u5EFA\u5DE5\u5177\u7684\u9009\u62E9\u4E0A\uFF0Cvite\u9009\u62E9\u4E86 esbuild \u3002"),e("br"),n(" esbuild \u4F7F\u7528 Go \u7F16\u5199\uFF0C\u6BD4\u4EE5 JavaScript \u7F16\u5199\u7684\u6253\u5305\u5668\u6784\u5EFA\u901F\u5EA6\u5FEB 10-100 \u500D\uFF0C\u6709\u4E86\u9884\u6784\u5EFA\uFF0C\u518D\u5229\u7528\u6D4F\u89C8\u5668\u7684esm\u65B9\u5F0F\u6309\u9700\u52A0\u8F7D\u4E1A\u52A1\u4EE3\u7801\uFF0C\u52A8\u6001\u5B9E\u65F6\u8FDB\u884C\u6784\u5EFA\uFF0C\u7ED3\u5408\u7F13\u5B58\u673A\u5236\uFF0C\u5927\u5927\u63D0\u5347\u4E86\u670D\u52A1\u5668\u7684\u542F\u52A8\u901F\u5EA6\u3002")],-1),m=e("h2",{id:"2-\u9884\u6784\u5EFA\u7684\u6D41\u7A0B",class:"doc-heading"},"\u9884\u6784\u5EFA\u7684\u6D41\u7A0B",-1),g=e("h3",{id:"3-\u67E5\u627E\u4F9D\u8D56",class:"doc-heading"},"\u67E5\u627E\u4F9D\u8D56",-1),f=e("p",null,"\u5982\u679C\u662F\u9996\u6B21\u542F\u52A8\u672C\u5730\u670D\u52A1\uFF0C\u90A3\u4E48vite\u4F1A\u81EA\u52A8\u6293\u53D6\u6E90\u4EE3\u7801\uFF0C\u4ECE\u4EE3\u7801\u4E2D\u627E\u5230\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\uFF0C\u6700\u7EC8\u5BF9\u5916\u8FD4\u56DE\u7C7B\u4F3C\u4E0B\u9762\u7684\u4E00\u4E2Adeps\u5BF9\u8C61\uFF1A",-1),v=e("p",null,"\u5177\u4F53\u5B9E\u73B0\u5C31\u662F\uFF0C\u8C03\u7528esbuild\u7684build api\uFF0C\u4EE5index.html\u4F5C\u4E3A\u67E5\u627E\u5165\u53E3\uFF08entryPoints\uFF09\uFF0C\u5C06\u6240\u6709\u7684\u6765\u81EAnode_modules\u4EE5\u53CA\u5728\u914D\u7F6E\u6587\u4EF6\u7684optimizeDeps.include\u9009\u9879\u4E2D\u6307\u5B9A\u7684\u6A21\u5757\u627E\u51FA\u6765\u3002",-1),b=e("p",null,[n("\u4F46\u662F\u719F\u6089esbuild\u7684\u5C0F\u4F19\u4F34\u53EF\u80FD\u77E5\u9053\uFF0Cesbuild\u9ED8\u8BA4\u652F\u6301\u7684\u5165\u53E3\u6587\u4EF6\u7C7B\u578B\u6709js\u3001ts\u3001jsx\u3001css\u3001json\u3001base64\u3001dataurl\u3001binary\u3001file\uFF08.png\u7B49\uFF09\uFF0C\u5E76\u4E0D\u5305\u62EChtml\u3002vite\u662F\u5982\u4F55\u505A\u5230\u5C06index.html\u4F5C\u4E3A\u6253\u5305\u5165\u53E3\u7684\u5462\uFF1F"),e("br"),n(" \u539F\u56E0\u662Fvite\u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u4E2Aesbuild\u63D2\u4EF6esbuildScanPlugin\uFF0C\u6765\u5904\u7406.vue\u548C.html\u8FD9\u79CD\u7C7B\u578B\u7684\u6587\u4EF6\u3002"),e("br"),n(" \u5177\u4F53\u505A\u6CD5\u662F\u8BFB\u53D6html\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u5C06\u91CC\u9762\u7684script\u63D0\u53D6\u5230\u4E00\u4E2Aesm\u683C\u5F0F\u7684js\u6A21\u5757\u3002")],-1),y=e("p",null,[n("\u7531\u4E0A\u6587\u6211\u4EEC\u53EF\u77E5\uFF0C\u6765\u81EAnode_modules\u4E2D\u7684\u6A21\u5757\u4F9D\u8D56\u662F\u9700\u8981\u9884\u6784\u5EFA\u7684\u3002"),e("br"),n(" \u4F8B\u5982import ElementPlus from \u2018element-plus\u2019\u3002\u56E0\u4E3A\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\uFF0C\u662F\u4E0D\u652F\u6301\u8FD9\u79CD\u88F8\u6A21\u5757\u5F15\u7528\u7684\uFF08bare import\uFF09\u3002"),e("br"),n(" \u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u6784\u5EFA\uFF0C\u6D4F\u89C8\u5668\u9762\u5BF9\u7531\u6210\u767E\u4E0A\u5343\u7684\u5B50\u6A21\u5757\u7EC4\u6210\u7684\u4F9D\u8D56\uFF0C\u4F9D\u9760\u539F\u751Fesm\u7684\u52A0\u8F7D\u673A\u5236\uFF0C\u6BCF\u4E2A\u7684\u4F9D\u8D56\u7684import\u90FD\u5C06\u4EA7\u751F\u4E00\u6B21http\u8BF7\u6C42\u3002"),e("br"),n(" \u9762\u5BF9\u5927\u91CF\u7684\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u662F\u5403\u4E0D\u6D88\u7684\u3002\u56E0\u6B64\u5BA2\u89C2\u4E0A\u9700\u8981\u5BF9\u88F8\u6A21\u5757\u5F15\u5165\u8FDB\u884C\u6253\u5305\uFF0C\u5E76\u5904\u7406\u6210\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u652F\u6301\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u8DEF\u5F84\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"),e("br"),n(" \u4F8B\u5982\uFF1Aimport ElementPlus from \u2018/path/to/.vite/element-plus/es/index.mjs\u2019\u3002")],-1),_=e("h3",{id:"4-\u5BF9\u67E5\u627E\u5230\u7684\u4F9D\u8D56\u8FDB\u884C\u6784\u5EFA",class:"doc-heading"},"\u5BF9\u67E5\u627E\u5230\u7684\u4F9D\u8D56\u8FDB\u884C\u6784\u5EFA",-1),j=e("p",null,"\u5728\u4E0A\u4E00\u6B65\uFF0C\u5DF2\u7ECF\u5F97\u5230\u4E86\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u5217\u8868\u3002\u73B0\u5728\u9700\u8981\u628A\u4ED6\u4EEC\u4F5C\u4E3Aesbuild\u7684entryPoints\u6253\u5305\u5C31\u884C\u4E86",-1),x=e("p",null,[n("vite\u5E76\u6CA1\u6709\u5C06esbuild\u7684outdir\uFF08\u6784\u5EFA\u4EA7\u7269\u7684\u8F93\u51FA\u76EE\u5F55\uFF09\u76F4\u63A5\u914D\u7F6E\u4E3A.vite\u76EE\u5F55\uFF0C\u800C\u662F\u5148\u5C06\u6784\u5EFA\u4EA7\u7269\u5B58\u653E\u5230\u4E86\u4E00\u4E2A\u4E34\u65F6\u76EE\u5F55\u3002"),e("br"),n(" \u5F53\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u624D\u5C06\u539F\u6765\u65E7\u7684.vite\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u5220\u9664\u3002"),e("br"),n(" \u7136\u540E\u518D\u5C06\u4E34\u65F6\u76EE\u5F55\u91CD\u547D\u540D\u4E3A.vite\u3002\u8FD9\u6837\u505A\u4E3B\u8981\u662F\u4E3A\u4E86\u907F\u514D\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u5BFC\u81F4\u7F13\u5B58\u4E0D\u53EF\u7528\u3002")],-1),w=e("h3",{id:"5-\u7F13\u5B58\u9884\u6784\u5EFA",class:"doc-heading"},"\u7F13\u5B58\u9884\u6784\u5EFA",-1),D=e("p",null,"vite\u51B7\u542F\u52A8\u4E4B\u6240\u4EE5\u5FEB\uFF0C\u9664\u4E86esbuild\u672C\u8EAB\u6784\u5EFA\u901F\u5EA6\u591F\u5FEB\u5916\uFF0C\u4E5F\u4E0Evite\u505A\u4E86\u5FC5\u8981\u7684\u7F13\u5B58\u673A\u5236\u5BC6\u4E0D\u53EF\u5206\u3002vite\u5728\u9884\u6784\u5EFA\u65F6\uFF0C\u9664\u4E86\u751F\u6210\u9884\u6784\u5EFA\u7684js\u6587\u4EF6\u5916\uFF0C\u8FD8\u4F1A\u521B\u5EFA\u4E00\u4E2A_metadata.json\u6587\u4EF6\uFF0C\u5176\u7ED3\u6784\u5927\u81F4\u5982\u4E0B\uFF1A",-1),M=e("h3",{id:"6-\u751F\u6210\u7F13\u5B58hash",class:"doc-heading"},"\u751F\u6210\u7F13\u5B58hash",-1),k=e("p",null,[n("hash \u662F\u7F13\u5B58\u7684\u4E3B\u8981\u6807\u8BC6\uFF0C\u7531vite\u7684\u914D\u7F6E\u6587\u4EF6\u548C\u9879\u76EE\u4F9D\u8D56\u51B3\u5B9A\uFF08\u4F9D\u8D56\u7684\u4FE1\u606F\u53D6\u81EApackage-lock.json\u3001yarn.lock\u3001pnpm-lock.yaml\uFF09\u3002"),e("br"),n(" \u6240\u4EE5\u5982\u679C\u7528\u6237\u4FEE\u6539\u4E86vite.config.js\u6216\u4F9D\u8D56\u53D1\u751F\u4E86\u53D8\u5316\uFF08\u4F9D\u8D56\u7684\u6DFB\u52A0\u5220\u9664\u66F4\u65B0\u4F1A\u5BFC\u81F4lock\u6587\u4EF6\u53D8\u5316\uFF09\u90FD\u4F1A\u4EE4hash\u53D1\u751F\u53D8\u5316\uFF0C\u7F13\u5B58\u4E5F\u5C31\u5931\u6548\u4E86\u3002"),e("br"),n(" \u8FD9\u65F6\uFF0Cvite\u9700\u8981\u91CD\u65B0\u8FDB\u884C\u9884\u6784\u5EFA\u3002\u5F53\u7136\u5982\u679C\u624B\u52A8\u5220\u9664\u4E86.vite\u7F13\u5B58\u76EE\u5F55\uFF0C\u4E5F\u4F1A\u91CD\u65B0\u6784\u5EFA\u3002")],-1),P=e("p",null,"\u5728vite\u542F\u52A8\u65F6\u9996\u5148\u68C0\u67E5hash\u7684\u503C\uFF0C\u5982\u679C\u5F53\u524D\u7684hash\u503C\u4E0E_metadata.json\u4E2D\u7684hash\u503C\u76F8\u540C\uFF0C\u8BF4\u660E\u9879\u76EE\u7684\u4F9D\u8D56\u6CA1\u6709\u53D8\u5316\uFF0C\u65E0\u9700\u91CD\u590D\u6784\u5EFA\u4E86\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u5373\u53EF\u3002",-1),T={__name:"\u9884\u6784\u5EFA\u7684\u7B80\u5355\u7406\u89E3",setup(E){const a=[{id:"doc-title",title:"vite \u9884\u6784\u5EFA\u7684\u7B80\u5355\u7406\u89E3"},{id:"1-\u4E3A\u5565\u8981\u9884\u6784\u5EFA",title:"1. \u4E3A\u5565\u8981\u9884\u6784\u5EFA"},{id:"2-\u9884\u6784\u5EFA\u7684\u6D41\u7A0B",title:"2. \u9884\u6784\u5EFA\u7684\u6D41\u7A0B"},{id:"3-\u67E5\u627E\u4F9D\u8D56",title:"2.1. \u67E5\u627E\u4F9D\u8D56",sub:!0},{id:"4-\u5BF9\u67E5\u627E\u5230\u7684\u4F9D\u8D56\u8FDB\u884C\u6784\u5EFA",title:"2.2. \u5BF9\u67E5\u627E\u5230\u7684\u4F9D\u8D56\u8FDB\u884C\u6784\u5EFA",sub:!0},{id:"5-\u7F13\u5B58\u9884\u6784\u5EFA",title:"2.3. \u7F13\u5B58\u9884\u6784\u5EFA",sub:!0},{id:"6-\u751F\u6210\u7F13\u5B58hash",title:"2.4. \u751F\u6210\u7F13\u5B58hash",sub:!0}];return(I,S)=>{const i=o("doc-img"),s=o("doc-code"),r=o("doc-page");return l(),c(r,{desc:"",toc:a},{default:d(()=>[p,u,e("p",null,[t(i,{src:"vite-pre-bundle.webp",alt:"vite-pre-bundle"})]),h,e("p",null,[t(i,{src:"vite-bundle-serve.webp",alt:"vite-bundle-serve"})]),m,g,f,t(s,{code:`{
  vue: '/path/to/your/project/node_modules/vue/dist/vue.runtime.esm-bundler.js',
  'element-plus': '/path/to/your/project/node_modules/element-plus/es/index.mjs',
  'vue-router': '/path/to/your/project/node_modules/vue-router/dist/vue-router.esm-bundler.js'
}
`,lang:"js"}),v,t(s,{code:`//...\u7701\u7565\u5176\u4ED6\u4EE3\u7801
  if (explicitEntryPatterns) {
    entries = await globEntries(explicitEntryPatterns, config)
  } else if (buildInput) {
    const resolvePath = (p: string) => path.resolve(config.root, p)
    if (typeof buildInput === 'string') {
      entries = [resolvePath(buildInput)]
    } else if (Array.isArray(buildInput)) {
      entries = buildInput.map(resolvePath)
    } else if (isObject(buildInput)) {
      entries = Object.values(buildInput).map(resolvePath)
    } else {
      throw new Error('invalid rollupOptions.input value.')
    }
  } else {
    // \u91CD\u70B9\u770B\u8FD9\u91CC\uFF1A\u4F7F\u7528html\u6587\u4EF6\u4F5C\u4E3A\u67E5\u627E\u5165\u53E3
    entries = await globEntries('**/*.html', config)
  }

//...\u7701\u7565\u5176\u4ED6\u4EE3\u7801
build.onResolve(
        {
          // avoid matching windows volume
          filter: /^[\\w@][^:]/
        },
        async ({ path: id, importer }) => {
          const resolved = await resolve(id, importer)
          if (resolved) {
            // \u6765\u81EAnode_modules\u548C\u5728include\u4E2D\u6307\u5B9A\u7684\u6A21\u5757
            if (resolved.includes('node_modules') || include?.includes(id)) {
              // dependency or forced included, externalize and stop crawling

              if (isOptimizable(resolved)) {
                // \u91CD\u70B9\u770B\u8FD9\u91CC\uFF1A\u5C06\u7B26\u5408\u9884\u6784\u5EFA\u6761\u4EF6\u7684\u4F9D\u8D56\u8BB0\u5F55\u4E0B\u6765\uFF0CdepImports\u5C31\u662F\u5BF9\u5916\u5BFC\u51FA\u7684\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u5BF9\u8C61
                depImports[id] = resolved
              }
              return externalUnlessEntry({ path: id })
            } else if (isScannable(resolved)) {
              const namespace = htmlTypesRE.test(resolved) ? 'html' : undefined
              // linked package, keep crawling
              return {
                path: path.resolve(resolved),
                namespace
              }
            } else {
              return externalUnlessEntry({ path: id })
            }
          } else {
            missing[id] = normalizePath(importer)
          }
        }
      )
`,lang:"js"}),b,t(s,{code:` // \u5BF9\u4E8Ehtml\u7C7B\u578B(.VUE/.HTML/.svelte\u7B49)\u7684\u6587\u4EF6\uFF0C\u63D0\u53D6\u6587\u4EF6\u91CC\u7684script\u5185\u5BB9\u3002html types: extract script contents -----------------------------------
      build.onResolve({ filter: htmlTypesRE }, async ({ path, importer }) => {
        const resolved = await resolve(path, importer)
        if (!resolved) return
        // It is possible for the scanner to scan html types in node_modules.
        // If we can optimize this html type, skip it so it's handled by the
        // bare import resolve, and recorded as optimization dep.
        if (resolved.includes('node_modules') && isOptimizable(resolved)) return
        return {
          path: resolved,
          namespace: 'html'
        }
      })

      // \u914D\u5408build.onResolve\uFF0C\u5BF9\u4E8E\u7C7Bhtml\u6587\u4EF6\uFF0C\u63D0\u53D6\u5176\u4E2D\u7684script\uFF0C\u4F5C\u4E3A\u4E00\u4E2Ajs\u6A21\u5757extract scripts inside HTML-like files and treat it as a js module
      build.onLoad(
        { filter: htmlTypesRE, namespace: 'html' },
        async ({ path }) => {
          let raw = fs.readFileSync(path, 'utf-8')
          // Avoid matching the content of the comment
          raw = raw.replace(commentRE, '<!---->')
          const isHtml = path.endsWith('.html')
          const regex = isHtml ? scriptModuleRE : scriptRE
          regex.lastIndex = 0
          // js \u7684\u5185\u5BB9\u88AB\u5904\u7406\u6210\u4E86\u4E00\u4E2A\u865A\u62DF\u6A21\u5757
          let js = ''
          let scriptId = 0
          let match: RegExpExecArray | null
          while ((match = regex.exec(raw))) {
            const [, openTag, content] = match
            const typeMatch = openTag.match(typeRE)
            const type =
              typeMatch && (typeMatch[1] || typeMatch[2] || typeMatch[3])
            const langMatch = openTag.match(langRE)
            const lang =
              langMatch && (langMatch[1] || langMatch[2] || langMatch[3])
            // skip type="application/ld+json" and other non-JS types
            if (
              type &&
              !(
                type.includes('javascript') ||
                type.includes('ecmascript') ||
                type === 'module'
              )
            ) {
              continue
            }
            // \u9ED8\u8BA4\u7684js\u6587\u4EF6\u7684loader\u662Fjs\uFF0C\u5176\u4ED6\u5BF9\u4E8Ets\u3001tsx jsx\u6709\u5BF9\u5E94\u7684\u540C\u540Dloader
            let loader: Loader = 'js'
            if (lang === 'ts' || lang === 'tsx' || lang === 'jsx') {
              loader = lang
            }
            const srcMatch = openTag.match(srcRE)
            // \u5BF9\u4E8E<script src='path/to/some.js'>\u5F15\u5165\u7684js\uFF0C\u5C06\u5B83\u8F6C\u6362\u4E3Aimport 'path/to/some.js'\u7684\u4EE3\u7801
            if (srcMatch) {
              const src = srcMatch[1] || srcMatch[2] || srcMatch[3]
              js += \`import \${JSON.stringify(src)}\\n\`
            } else if (content.trim()) {
              // The reason why virtual modules are needed:
              // 1. There can be module scripts (\`<script context="module">\` in Svelte and \`<script>\` in Vue)
              // or local scripts (\`<script>\` in Svelte and \`<script setup>\` in Vue)
              // 2. There can be multiple module scripts in html
              // We need to handle these separately in case variable names are reused between them

              // append imports in TS to prevent esbuild from removing them
              // since they may be used in the template
              const contents =
                content +
                (loader.startsWith('ts') ? extractImportPaths(content) : '')


                // \u5C06\u63D0\u53D6\u51FA\u6765\u7684script\u811A\u672C\uFF0C\u5B58\u5728\u4EE5xx.vue?id=1\u4E3Akey\u7684script\u5BF9\u8C61\u4E2Dscript={'xx.vue?id=1': 'js contents'}
              const key = \`\${path}?id=\${scriptId++}\`

              if (contents.includes('import.meta.glob')) {
                scripts[key] = {
                  // transformGlob already transforms to js
                  loader: 'js',
                  contents: await transformGlob(
                    contents,
                    path,
                    config.root,
                    loader,
                    resolve,
                    config.logger
                  )
                }
              } else {
                scripts[key] = {
                  loader,
                  contents
                }
              }

              const virtualModulePath = JSON.stringify(
                virtualModulePrefix + key
              )

              const contextMatch = openTag.match(contextRE)
              const context =
                contextMatch &&
                (contextMatch[1] || contextMatch[2] || contextMatch[3])

              // Especially for Svelte files, exports in <script context="module"> means module exports,
              // exports in <script> means component props. To avoid having two same export name from the
              // star exports, we need to ignore exports in <script>
              if (path.endsWith('.svelte') && context !== 'module') {
                js += \`import \${virtualModulePath}\\n\`
              } else {
                // e.g. export * from 'virtual-module:xx.vue?id=1'
                js += \`export * from \${virtualModulePath}\\n\`
              }
            }
          }

          // This will trigger incorrectly if \`export default\` is contained
          // anywhere in a string. Svelte and Astro files can't have
          // \`export default\` as code so we know if it's encountered it's a
          // false positive (e.g. contained in a string)
          if (!path.endsWith('.vue') || !js.includes('export default')) {
            js += '\\nexport default {}'
          }

          return {
            loader: 'js',
            contents: js
          }
        }
      )
`,lang:"js"}),y,_,j,t(s,{code:`//\u4F7F\u7528esbuild\u6253\u5305\uFF0C\u5165\u53E3\u6587\u4EF6\u5373\u4E3A\u7B2C\u4E00\u6B65\u4E2D\u6293\u53D6\u5230\u7684\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56
    import { build } from 'esbuild'
   // ...\u7701\u7565\u5176\u4ED6\u4EE3\u7801
    const result = await build({
      absWorkingDir: process.cwd(),
     // flatIdDeps\u5373\u4E3A\u7B2C\u4E00\u6B65\u4E2D\u6240\u5F97\u5230\u7684\u9700\u8981\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u5BF9\u8C61
      entryPoints: Object.keys(flatIdDeps),
      bundle: true,
      format: 'esm',
      target: config.build.target || undefined,
      external: config.optimizeDeps?.exclude,
      logLevel: 'error',
      splitting: true,
      sourcemap: true,
// outdir\u6307\u5B9A\u6253\u5305\u4EA7\u7269\u8F93\u51FA\u76EE\u5F55\uFF0CprocessingCacheDir\u8FD9\u91CC\u5E76\u4E0D\u662F.vite\uFF0C\u800C\u662F\u5B58\u653E\u6784\u5EFA\u4EA7\u7269\u7684\u4E34\u65F6\u76EE\u5F55
      outdir: processingCacheDir,
      ignoreAnnotations: true,
      metafile: true,
      define,
      plugins: [
        ...plugins,
        esbuildDepPlugin(flatIdDeps, flatIdToExports, config, ssr)
      ],
      ...esbuildOptions
    })

    // \u5199\u5165_metadata\u6587\u4EF6\uFF0C\u5E76\u66FF\u6362\u7F13\u5B58\u6587\u4EF6\u3002Write metadata file, delete \`deps\` folder and rename the new \`processing\` folder to \`deps\` in sync
    commitProcessingDepsCacheSync()
`,lang:"js"}),x,t(s,{code:`  function commitProcessingDepsCacheSync() {
    // Rewire the file paths from the temporal processing dir to the final deps cache dir
    const dataPath = path.join(processingCacheDir, '_metadata.json')
    writeFile(dataPath, stringifyOptimizedDepsMetadata(metadata))
    // Processing is done, we can now replace the depsCacheDir with processingCacheDir
    // \u4F9D\u8D56\u5904\u7406\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528\u4F9D\u8D56\u7F13\u5B58\u76EE\u5F55\u66FF\u6362\u5904\u7406\u4E2D\u7684\u4F9D\u8D56\u7F13\u5B58\u76EE\u5F55
    if (fs.existsSync(depsCacheDir)) {
      const rmSync = fs.rmSync ?? fs.rmdirSync // TODO: Remove after support for Node 12 is dropped
      rmSync(depsCacheDir, { recursive: true })
    }
    fs.renameSync(processingCacheDir, depsCacheDir)
  }
}
`,lang:"js"}),w,D,t(s,{code:`{
  "hash": "22135fca",
  "browserHash": "632454bc",
  "optimized": {
    "vue": {
      "file": "/path/to/your/project/node_modules/.vite/vue.js",
      "src": "/path/to/your/project/node_modules/vue/dist/vue.runtime.esm-bundler.js",
      "needsInterop": false
    },
    "element-plus": {
      "file": "/path/to/your/project/node_modules/.vite/element-plus.js",
      "src": "/path/to/your/project/node_modules/element-plus/es/index.mjs",
      "needsInterop": false
    },
    "vue-router": {
      "file": "/path/to/your/project/node_modules/.vite/vue-router.js",
      "src": "/path/to/your/project/node_modules/vue-router/dist/vue-router.esm-bundler.js",
      "needsInterop": false
    }
  }
}
`,lang:"js"}),M,k,t(s,{code:`// \u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6+\u4F9D\u8D56\u4FE1\u606F\u751F\u6210hash
const lockfileFormats = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml']

function getDepHash(root: string, config: ResolvedConfig): string {
  let content = lookupFile(root, lockfileFormats) || ''
  // also take config into account
  // only a subset of config options that can affect dep optimization
  content += JSON.stringify(
    {
      mode: config.mode,
      root: config.root,
      define: config.define,
      resolve: config.resolve,
      buildTarget: config.build.target,
      assetsInclude: config.assetsInclude,
      plugins: config.plugins.map((p) => p.name),
      optimizeDeps: {
        include: config.optimizeDeps?.include,
        exclude: config.optimizeDeps?.exclude,
        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,
          plugins: config.optimizeDeps?.esbuildOptions?.plugins?.map(
            (p) => p.name
          )
        }
      }
    },
    (_, value) => {
      if (typeof value === 'function' || value instanceof RegExp) {
        return value.toString()
      }
      return value
    }
  )
  return createHash('sha256').update(content).digest('hex').substring(0, 8)
}
`,lang:"js"}),P,t(s,{code:`// \u8BA1\u7B97\u5F53\u524D\u7684hash
const mainHash = getDepHash(root, config)
 const metadata: DepOptimizationMetadata = {
    hash: mainHash,
    browserHash: mainHash,
    optimized: {},
    discovered: {},
    processing: processing.promise
  }
 let prevData: DepOptimizationMetadata | undefined
    try {
      const prevDataPath = path.join(depsCacheDir, '_metadata.json')
      prevData = parseOptimizedDepsMetadata(
        fs.readFileSync(prevDataPath, 'utf-8'),
        depsCacheDir,
        processing.promise
      )
    } catch (e) { }
    // hash is consistent, no need to re-bundle
    // \u6BD4\u8F83\u7F13\u5B58\u7684hash\u4E0E\u5F53\u524Dhash
    if (prevData && prevData.hash === metadata.hash) {
      log('Hash is consistent. Skipping. Use --force to override.')
      return {
        metadata: prevData,
        run: () => (processing.resolve(), processing.promise)
      }
    }
`,lang:"js"})]),_:1})}}};export{T as default};
