const path = require('path');
const fs = require('fs');
const sortFolderMap = require('../src/constant/sortFolderMap.json');
const getLastUpdate = require('./getLastUpdate.js');
const getAlgoliaRecords = require('./getAlgoliaRecords.js');

const newSortFolderMap = {};
const resolvePath = (p) => path.resolve(__dirname, p);
const pages = resolvePath('../src/pages');

function getName(uri) {
  return path.relative(pages, uri).replace(/\\/g, '-').replace(/\.md$/, '');
}

function getPath(parentUri, uri) {
  return path.relative(parentUri, uri).replace(/\\/g, '/').replace(/\.md$/, '').replace(/^\./, '*');
}

function getComponent(uri) {
  return `./${path.relative(pages, uri).replace(/\\/g, '/')}`;
}

function walk(uri, parentUri, filter, tree) {
  if (filter(uri)) {
    const stat = fs.lstatSync(uri);
    if (stat.isFile()) {
      const routeName = getName(uri);
      tree.children.push({
        name: routeName,
        path: getPath(parentUri, uri),
        component: getComponent(uri),
        meta: {
          lastUpdate: getLastUpdate(uri),
        },
      });
      const code = fs.readFileSync(uri, 'utf-8');
      getAlgoliaRecords(code, routeName);
    }
    if (stat.isDirectory()) {
      const obj = {
        name: `${getName(uri)}_`,
        path: `${getPath(parentUri, uri)}_`,
        component: getComponent(uri),
        children: [],
      };
      fs.readdirSync(uri).forEach((part) => {
        walk(path.join(uri, part), uri, filter, obj);
      });
      const { length } = obj.children;
      if (length === 0) {
        return;
      }
      if (length === 1 && obj.children[0].path === obj.path.slice(0, -1)) {
        obj.component = obj.children[0].component;
        obj.meta = {
          lastUpdate: getLastUpdate(uri),
        };
        delete obj.children;
      } else {
        obj.component = 'Empty';
        const sortReference = sortFolderMap[obj.name] || [];
        obj.redirect = { name: sortReference[0] || obj.children[0].name };
        obj.children.sort((a, b) => {
          const aIndex = sortReference.indexOf(a.name);
          const bIndex = sortReference.indexOf(b.name);
          if (aIndex === -1 && bIndex === -1) {
            return a.name.localeCompare(b.name);
          }
          if (aIndex === -1) {
            return 1;
          }
          if (bIndex === -1) {
            return -1;
          }
          return aIndex - bIndex;
        });
        newSortFolderMap[obj.name] = obj.children.map((item) => item.name);
      }
      tree.children.push(obj);
    }
  }
}

function defaultFilter(uri) {
  const basename = path.basename(uri);
  const start = basename.charAt(0);
  const ext = path.extname(basename);
  if (['_'].includes(start) || ['.js', '.vue'].includes(ext)) {
    return false;
  }
  return true;
}

/**
 * 递归遍历目录文件,获取所有文件路径.
 * @param{String}rootDir
 * @param{Function}filter:过滤函数,返回false就排除目录|文件
 * @return{Object}
 * */
const fn = (rootDir, filter = defaultFilter) => {
  const tree = {
    name: rootDir,
    children: [],
  };

  walk(rootDir, rootDir, filter, tree);
  fs.writeFileSync(resolvePath('../src/constant/sortFolderMap.json'), JSON.stringify(newSortFolderMap, null, 2));
  return tree.children[0].children;
};
fs.writeFileSync(resolvePath('../src/constant/leftTree.json'), JSON.stringify(fn(pages), null, 2));
console.log('leftTree.json 已更新');
