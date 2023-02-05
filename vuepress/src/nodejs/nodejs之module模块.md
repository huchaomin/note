---
date: '1642480103235'
title: nodejs module 模块
description: nodejs module 模块初解
tags: [nodejs]
---

### 本质为`Module`的实例的构造函数
```javascript
const Module = require('module')
console.log(module instanceof Module) // true
```

### 作用
与 Module 的实例交互时提供通用的实用方法，module 变量常见于 CommonJS 模块中  
通过`import 'module'`或`require('module')`访问
```javascript
const Module = require('module')
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
//      'D:\\code\\myNote\\index.js': Module {
//        id: '.',
//        path: 'D:\\code\\myNote',
//        exports: {},
//        parent: null,
//        filename: 'D:\\code\\myNote\\index.js',
//        loaded: false,
//        children: [],
//        paths: [Array]
//      }
//    },
//    _pathCache: [Object: null prototype] {
//      'D:\\code\\myNote\\index.js\u0000': 'D:\\code\\myNote\\index.js'
//    },
//    _extensions: [Object: null prototype] {
//      '.js': [Function],
//      '.json': [Function],
//      '.node': [Function]
//    },
//    globalPaths: [
//      'C:\\Users\\hwx927218\\.node_modules',
//      'C:\\Users\\hwx927218\\.node_libraries',
//      'D:\\Program Files\\nodejs\\lib\\node'
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
```
在mjs文件中
```javascript
import Module from 'module'
```

### module.builtinModules
Node.js提供的所有模块的名称的列表。可用于验证模块是否由第三方维护。
```javascript
// In an ECMAScript module
import { builtinModules as builtin } from 'module'
// In a CommonJS module
const builtin = require('module').builtinModules

console.log(Module.builtinModules === builtin) // true
```

### module.createRequire(filename)
> 我的理解：为`ECMAScript module`创建require函数,去引入`CommonJS module`
```javascript
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// sibling-module.js is a CommonJS module.
const siblingModule = require('./sibling-module')
```
### module.syncBuiltinESMExports()
更新内置的 ES 模块的所有实时绑定，以匹配 CommonJS 导出的属性。  
它不会在 ES 模块中添加或删除导出的属性。
```javascript
const fs = require('fs')
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
```
