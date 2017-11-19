const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === "/page4") {
    fs.readFile("./page4.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(data);
      res.end();
    })
  }
  if (req.url === "/index.html") {
    res.writeHead(200, {"Content-Type" : "text/html"});
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  }
  if (req.url === "/page2") {
    fs.readFile("./page2.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(data);
      res.end();
    })
  }
  if (req.url === "/page3") {
    fs.readFile("./page3.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {"Content-Type" : "text/html"});
      res.write(data);
      res.end();
    })
  }
})

server.listen(port, () => {
  console.log("Server 4 is running");
})
