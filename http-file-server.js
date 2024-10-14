require('http').createServer((req, res) => 
    require('fs').createReadStream(process.argv[3])
        .pipe(res)
        .on('error', () => res.writeHead(500).end('Internal Server Error'))
        .on('open', () => res.writeHead(200, { 'Content-Type': 'text/plain' }))
).listen(Number(process.argv[2]));

