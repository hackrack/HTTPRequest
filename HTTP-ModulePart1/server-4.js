const outsourceFunction = require("./template.js");
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(res);
  res.statusCode = 200;
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.write(outsourceFunction.htmlFile());
  res.end();
})

server.listen(port, () => {
  console.log("Server 4 is running");
})
