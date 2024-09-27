const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, "utf8",(err, data) =>{
    if (err) {
        console.error('got error',err);
        return;
        }

        const lines = data.split("\n");
        
        const countLine = lines.length - 1;
        console.log(countLine);
})




