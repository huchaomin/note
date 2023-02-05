const path = require('path');
const spawn = require('cross-spawn');

function getGitLastUpdatedTimeStamp(filePath) {
  let lastUpdated;
  try {
    lastUpdated = parseInt(spawn.sync(
      'git',
      ['log', '-1', '--format=%at', path.basename(filePath)],
      { cwd: path.dirname(filePath) },
    ).stdout.toString('utf-8'), 10) * 1000;
  } catch (e) { /* do not handle for now */ }
  return lastUpdated;
}

module.exports = (filePath) => {
  const timestamp = getGitLastUpdatedTimeStamp(filePath);
  if (timestamp) {
    return new Date(timestamp).toLocaleString('zh-CN');
  }
  return '';
};
