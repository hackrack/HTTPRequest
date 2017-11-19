const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  if (req.url === '/google.js') {
    fs.readFile("./google.js", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"Content-Type" : "text/javascript;charset=UTF-8"});
      res.write(data);
      res.end();
    })
  }
  if (req.url === '/') {
    res.writeHead(200, {"Content-Type" : "text/html"});
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log("Server 3 is running");
});
