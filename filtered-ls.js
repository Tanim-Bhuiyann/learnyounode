const fs = require("fs");

const path = require("path");

const drtry = process.argv[2];
const ext = process.argv[3];

fs.readdir(drtry, (err, data) => {
  if (err) {
    console.error("got error", err);
    return;
  }

  const filteredFiles = data.filter((file) => path.extname(file) === "." + ext);

  filteredFiles.forEach((file) => console.log(file));
});
