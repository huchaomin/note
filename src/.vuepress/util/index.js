let count = 1

function uniqueId (prefix = '') {
  return prefix + count++
}

function getFileName (name) {
  return name.substring(0, name.lastIndexOf('.'))
}

module.exports = {
  uniqueId,
  getFileName,
}
