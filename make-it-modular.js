const mymodule = require('./mymodule.js')


const drtry = process.argv[2];
const ext = process.argv[3];

mymodule(drtry,ext, (err, filteredFiles) =>{
    if (err) {
        console.error("got error", err);
        return;
       }
       filteredFiles.forEach((file) => console.log(file));
})