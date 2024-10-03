const fs = require("fs"), path = require("path"), drtry = process.argv[2], ext = "." + process.argv[3];

fs.readdir(drtry, (err, data) => err ? console.error("got error", err) : data.filter(file => path.extname(file) === ext).forEach(file => console.log(file)));
