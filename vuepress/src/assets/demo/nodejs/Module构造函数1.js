const Module = require('module')
console.log(module instanceof Module)
console.log(this === module.exports)
// console.log(import.meta.url) // 报错


const builtin = require('module').builtinModules
console.log(Module.builtinModules === builtin)

