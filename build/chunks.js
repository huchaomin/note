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

function chunkFileNames(chunkInfo) {
  const { name, type } = chunkInfo;
  let chunkName = name;
  if (name.startsWith('_')) {
    chunkName = `$${name.slice(1)}`;
  }
  if (name.startsWith('.')) {
    chunkName = name.slice(1);
  }
  console.log(name, type);
  return `chunk/${chunkName}.js`;
}

module.exports = {
  manualChunks,
  chunkFileNames,
};
