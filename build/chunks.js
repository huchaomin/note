/* eslint-disable consistent-return */
const vendorRE = /node_modules[\\/](vue|@vue|quasar|vue-router)[\\/](.*)\.(m?js|css|sass)$/;
const exampleRE = /examples:([a-zA-Z0-9]+)$|src[\\/]examples[\\/]([a-zA-Z0-9-]+)/;

function manualChunks(id) {
  if (vendorRE.test(id) === true) {
    return 'vendor';
  }

  const examplesMatch = exampleRE.exec(id);
  if (examplesMatch !== null) {
    const name = examplesMatch[1] || examplesMatch[2];
    return `e.${name}`;
  }
}

// 如果为ssr模式，可以删掉此方法
function chunkFileNames(chunkInfo) {
  const { name } = chunkInfo;
  let chunkName = name;
  if (name.startsWith('_')) {
    chunkName = `$${name.slice(1)}`;
  }
  if (name.startsWith('.')) {
    chunkName = name.slice(1);
  }
  return `chunk/${chunkName}-[hash].js`;
}

module.exports = {
  manualChunks,
  chunkFileNames,
};
