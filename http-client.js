require("http").get(
    process.argv[2],
    (response) =>
        response.setEncoding("utf-8") &&
    response.on("data", (chunk) => console.log(chunk))
);