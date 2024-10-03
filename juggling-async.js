const results = [], { get } = require("http");
let count = 0;

for (let i = 0; i < 3; i++) 
    get(process.argv[2 + i], res => {
        let data = "";
        res.setEncoding("utf8")
           .on("data", chunk => data += chunk)
           .on("end", () => {
               results[i] = data;
               if (++count === 3) results.forEach(result => console.log(result));
           });
    });
