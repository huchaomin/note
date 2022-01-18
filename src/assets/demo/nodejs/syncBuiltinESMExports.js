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
