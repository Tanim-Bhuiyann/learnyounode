const fs = require("fs");

const path = require("path");

/* const drtry = process.argv[2];
const ext = process.argv[3]; */


module.exports = function(drtry,ext,callback){
    fs.readdir(drtry, (err, data) => {
        if (err) {
         // console.error("got error", err);
         return callback(err);
        }
      
        const filteredFiles = data.filter((file) => path.extname(file) === "." + ext);
      
        //filteredFiles.forEach((file) => console.log(file));
        callback(null, filteredFiles);
      });
};

