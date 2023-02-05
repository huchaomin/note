import{r as s,o as r,c as d,f as c,g as t,aa as e,v as n}from"./vendor.js";const u=e("h2",{id:"1-\u672C\u8D28\u4E3Amodule\u7684\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570",class:"doc-heading"},[n("\u672C\u8D28\u4E3A"),e("code",{class:"doc-token"},"Module"),n("\u7684\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570")],-1),a=e("h2",{id:"2-\u4F5C\u7528",class:"doc-heading"},"\u4F5C\u7528",-1),m=e("p",null,[n("\u4E0E Module \u7684\u5B9E\u4F8B\u4EA4\u4E92\u65F6\u63D0\u4F9B\u901A\u7528\u7684\u5B9E\u7528\u65B9\u6CD5\uFF0Cmodule \u53D8\u91CF\u5E38\u89C1\u4E8E CommonJS \u6A21\u5757\u4E2D"),e("br"),n(" \u901A\u8FC7"),e("code",{class:"doc-token"},"import 'module'"),n("\u6216"),e("code",{class:"doc-token"},"require('module')"),n("\u8BBF\u95EE")],-1),_=e("p",null,"\u5728mjs\u6587\u4EF6\u4E2D",-1),p=e("h2",{id:"3-module-builtinmodules",class:"doc-heading"},"module.builtinModules",-1),h=e("p",null,"Node.js\u63D0\u4F9B\u7684\u6240\u6709\u6A21\u5757\u7684\u540D\u79F0\u7684\u5217\u8868\u3002\u53EF\u7528\u4E8E\u9A8C\u8BC1\u6A21\u5757\u662F\u5426\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u3002",-1),f=e("h2",{id:"4-module-createrequire-filename-",class:"doc-heading"},"module.createRequire(filename)",-1),g=e("p",null,[e("kbd",null,"\u6211\u7684\u7406\u89E3")],-1),b=e("p",null,[n("\u4E3A"),e("code",{class:"doc-token"},"ECMAScript module"),n("\u521B\u5EFArequire\u51FD\u6570,\u53BB\u5F15\u5165"),e("code",{class:"doc-token"},"CommonJS module")],-1),F=e("h2",{id:"5-module-syncbuiltinesmexports-",class:"doc-heading"},"module.syncBuiltinESMExports()",-1),M=e("p",null,[n("\u66F4\u65B0\u5185\u7F6E\u7684 ES \u6A21\u5757\u7684\u6240\u6709\u5B9E\u65F6\u7ED1\u5B9A\uFF0C\u4EE5\u5339\u914D CommonJS \u5BFC\u51FA\u7684\u5C5E\u6027\u3002"),e("br"),n(" \u5B83\u4E0D\u4F1A\u5728 ES \u6A21\u5757\u4E2D\u6DFB\u52A0\u6216\u5220\u9664\u5BFC\u51FA\u7684\u5C5E\u6027\u3002")],-1),S={__name:"module\u6A21\u5757",setup(q){const l=[{id:"doc-title",title:"module \u6A21\u5757"},{id:"1-\u672C\u8D28\u4E3Amodule\u7684\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570",title:"1. \u672C\u8D28\u4E3AModule\u7684\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570"},{id:"2-\u4F5C\u7528",title:"2. \u4F5C\u7528"},{id:"3-module-builtinmodules",title:"3. module.builtinModules"},{id:"4-module-createrequire-filename-",title:"4. module.createRequire(filename)"},{id:"5-module-syncbuiltinesmexports-",title:"5. module.syncBuiltinESMExports()"}];return(y,E)=>{const o=s("doc-code"),i=s("doc-page");return r(),d(i,{desc:"",toc:l},{default:c(()=>[u,t(o,{code:`const Module = require('module')
console.log(module instanceof Module) // true
`,lang:"javascript"}),a,m,t(o,{code:`const Module = require('module')
console.log(Module)
//  [Function: Module] {
//    builtinModules: [
//      '_http_agent',       '_http_client',        '_http_common',
//      '_http_incoming',    '_http_outgoing',      '_http_server',
//      '_stream_duplex',    '_stream_passthrough', '_stream_readable',
//      '_stream_transform', '_stream_wrap',        '_stream_writable',
//      '_tls_common',       '_tls_wrap',           'assert',
//      'async_hooks',       'buffer',              'child_process',
//      'cluster',           'console',             'constants',
//      'crypto',            'dgram',               'dns',
//      'domain',            'events',              'fs',
//      'http',              'http2',               'https',
//      'inspector',         'module',              'net',
//      'os',                'path',                'perf_hooks',
//      'process',           'punycode',            'querystring',
//      'readline',          'repl',                'stream',
//      'string_decoder',    'sys',                 'timers',
//      'tls',               'trace_events',        'tty',
//      'url',               'util',                'v8',
//      'vm',                'worker_threads',      'zlib'
//    ],
//    _cache: [Object: null prototype] {
//      'D:\\\\code\\\\myNote\\\\index.js': Module {
//        id: '.',
//        path: 'D:\\\\code\\\\myNote',
//        exports: {},
//        parent: null,
//        filename: 'D:\\\\code\\\\myNote\\\\index.js',
//        loaded: false,
//        children: [],
//        paths: [Array]
//      }
//    },
//    _pathCache: [Object: null prototype] {
//      'D:\\\\code\\\\myNote\\\\index.js\\u0000': 'D:\\\\code\\\\myNote\\\\index.js'
//    },
//    _extensions: [Object: null prototype] {
//      '.js': [Function],
//      '.json': [Function],
//      '.node': [Function]
//    },
//    globalPaths: [
//      'C:\\\\Users\\\\hwx927218\\\\.node_modules',
//      'C:\\\\Users\\\\hwx927218\\\\.node_libraries',
//      'D:\\\\Program Files\\\\nodejs\\\\lib\\\\node'
//    ],
//    _debug: [Function: deprecated],
//    _findPath: [Function],
//    _nodeModulePaths: [Function],
//    _resolveLookupPaths: [Function],
//    _load: [Function],
//    _resolveFilename: [Function],
//    createRequireFromPath: [Function: createRequireFromPath],
//    createRequire: [Function: createRequire],
//    _initPaths: [Function],
//    _preloadModules: [Function],
//    syncBuiltinESMExports: [Function: syncBuiltinESMExports],
//    Module: [Circular],
//    runMain: [Function: executeUserEntryPoint]
//  }
`,lang:"javascript"}),_,t(o,{code:`import Module from 'module'
`,lang:"javascript"}),p,h,t(o,{code:`// In an ECMAScript module
import { builtinModules as builtin } from 'module'
// In a CommonJS module
const builtin = require('module').builtinModules

console.log(Module.builtinModules === builtin) // true
`,lang:"javascript"}),f,g,b,t(o,{code:`import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// sibling-module.js is a CommonJS module.
const siblingModule = require('./sibling-module')
`,lang:"javascript"}),F,M,t(o,{code:`const fs = require('fs')
const assert = require('assert')
const { syncBuiltinESMExports } = require('module')

fs.readFile = null
delete fs.readFileSync
const newAPI = function () {}
fs.newAPI = newAPI

syncBuiltinESMExports()

import('fs').then((esmFS) => {
  assert.strictEqual(fs.readFile, null)
  assert.strictEqual(esmFS.readFile, null)
  assert.strictEqual('readFileSync' in fs, false)
  assert.strictEqual('readFileSync' in esmFS, true)
  assert.strictEqual(fs.newAPI, newAPI)
  assert.strictEqual(esmFS.newAPI, undefined)
})
`,lang:"javascript"})]),_:1})}}};export{S as default};
