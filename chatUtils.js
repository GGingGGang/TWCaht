const fs = require('fs');
const iconv = require('iconv-lite');

function readChatLog(filePath, callback) {
  fs.readFile(filePath, (err, buffer) => {
    if (err) {
      callback(err, null);
    } else {
      const decoded = iconv.decode(buffer, 'euc-kr');
      callback(null, decoded);
    }
  });
}

module.exports = { readChatLog };