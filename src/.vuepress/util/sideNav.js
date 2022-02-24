const path = require('path')
const fs = require('fs')
const resolve = dir => path.join(__dirname, dir)
const docsRoot = resolve('../../')
const uniqueId = require('./index.js').uniqueId
const parentSort = [
  'javascript',
  'css',
  'html',
  'vue',
  'react',
  'typescript',
  'plugin',
  'nodejs',
  '脚手架工具',
  'tools',
  'others',
]

function isIndex (fileName) {
  return ['README.md', 'index.md'].includes(fileName)
}

function forwardSlashPath (filepath) {
  return filepath.split(path.sep).join('/')
}

function getDocRouterPath (dirname, filename) {
  const { dir, base, name } = path.parse(path.relative(docsRoot, path.join(dirname, filename)))
  if (isIndex(base)) {
    if (dir === '') {
      return '/'
    } else {
      return `/${forwardSlashPath(dir)}/`
    }
  } else {
    if (dir === '') {
      return `/${name}.html`
    } else {
      return `/${forwardSlashPath(dir)}/${name}.html`
    }
  }
}

function findFolder (dir) {
  const arr = []
  const files = fs.readdirSync(dir)
  if (Array.isArray(files)) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        if (file === '.vuepress' || file === 'assets') continue
        const o = {
          name: file,
          id: uniqueId('tree'),
          isDirectory: true,
        }
        const result = findFolder(path.join(dir, file))
        if (result) o.children = result
        arr.push(o)
      } else {
        if (!file.endsWith('.md')) continue
        if (dir === docsRoot && file === 'index.md') continue
        arr.push({
          name: path.basename(file, '.md'),
          id: uniqueId('tree'),
          routerPath: getDocRouterPath(dir, file),
        })
      }
    }
  }
  return arr.length > 0 ? arr : null
}

function treatAsDirectory (o) {
  return o.isDirectory && !/^\d*-/.test(o.name)
}

function rearrangeChildren (arr) {
  arr.forEach(obj => {
    if (obj.children) {
      obj.children = rearrangeChildren(obj.children)
    }
  })
  return [...arr.filter(obj => treatAsDirectory(obj)), ...arr.filter(obj => !treatAsDirectory(obj))]
}

const sideNav = findFolder(docsRoot)
sideNav.forEach(obj => {
  if (obj.children) {
    obj.children = rearrangeChildren(obj.children)
  }
})
sideNav.sort((a, b) => parentSort.indexOf(a.name) - parentSort.indexOf(b.name))

module.exports = sideNav

