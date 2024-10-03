require('http').createServer((req, res) => {
    const url = new URL(req.url, 'http://example.com');
    const date = new Date(url.searchParams.get('iso'));
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    url.pathname === '/api/parsetime'
      ? res.end(JSON.stringify({
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        }))
      : url.pathname === '/api/unixtime'
        ? res.end(JSON.stringify({ unixtime: date.getTime() }))
        : res.end('Invalid endpoint');
  }).listen(process.argv[2]);
  