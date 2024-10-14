require("net").createServer(socket => {
    const now = new Date();
    socket.end(`${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}\n`);
}).listen(process.argv[2]);
