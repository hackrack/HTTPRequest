const http = require("http");
const url = require("url");
const port = 1983;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {"Content-Type" : "application/json"});
  if (req.url === "/api/unixtime") {
    var milliseconds = (new Date).getTime();
    var unixObj = {unixtime: milliseconds};
    var jFile = JSON.stringify(unixObj);
    res.write(jFile);
    res.end();
  }
})

server.listen(port, () => {
  console.log("Server is running...");
})
