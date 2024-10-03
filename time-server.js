require("net").createServer(socket => {
    const now = new Date(), zeroFill = n => (n < 10 ? '0' : '') + n,
          formattedDate = `${now.getFullYear()}-${zeroFill(now.getMonth() + 1)}-${zeroFill(now.getDate())} ${zeroFill(now.getHours())}:${zeroFill(now.getMinutes())}`;
    
    socket.end(formattedDate + '\n');
}).listen(process.argv[2]);
