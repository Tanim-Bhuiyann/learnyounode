const fs = require("fs");

const path = process.argv[2];

const readFile = fs.readFileSync(path, "utf8");

const countLine = readFile.split("\n").length - 1;

console.log(countLine);
