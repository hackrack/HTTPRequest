const http = require("http");
const port = 3000;
const url = require("url")

const server = http.createServer((req, res) => {
  var urlObj = url.parse(`/?name=`);
  var name = "";
  res.writeHead(200, {"Content-Type" : "text/html"});
  if (req.url === `/?name=`) {
    res.statusCode = 200;
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(`<h1>Please provide a name</h1>`);
    res.end();
  } else if (req.url === `/?name=${name=req.url.slice(7)}`) {
    res.statusCode = 200;
    res.write(`<h1>Hello ${name}</h1>`);
    res.end();
  }
})

server.listen(port, () => {
  console.log("server is running...");
})
