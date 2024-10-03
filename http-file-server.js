require('http').createServer((req, res) => 
    require('fs').createReadStream(process.argv[3])
        .pipe(res)
        .on('error', () => res.writeHead(500).end('Internal Server Error'))
).listen(Number(process.argv[2]));
