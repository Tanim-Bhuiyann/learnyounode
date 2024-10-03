require("http").get(process.argv[2], res => {
    let data = "";
    res.setEncoding("utf8")
       .on("data", chunk => data += chunk)
       .on("end", () => console.log(data.length + "\n" + data));
});
