require('http').createServer((req, res) => 
    req.method !== 'POST' 
      ? res.end('Send me a POST\n')
      : req.pipe(require('through2-map')(data => data.toString().toUpperCase())).pipe(res)
).listen(process.argv[2]);
