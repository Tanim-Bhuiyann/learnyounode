const fs = require("fs");
const path = require("path");
module.exports = function (drtry, ext, callback) {
  fs.readdir(drtry, (err, data) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = data.filter(
      (file) => path.extname(file) === "." + ext
    );

    callback(null, filteredFiles);
  });
};
