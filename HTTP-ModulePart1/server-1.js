// const http = require("http");
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.writeHead(200, {"Content-Type" : "text/html"});
//   res.write(`<h1>Hello World</h1>`);
//   res.end();
// });
//
// server.listen(port, () => {
//   console.log("Server running");
// })

const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/bubbles.html") {
    res.writeHead(200, {"Content-Type" : "text/html"});
    fs.readFile("./bubbles.html", "utf8", (err, data) => {
      if (err) throw err;
      res.statusCode = 200;
      res.write(data);
      res.end();
    })
  }
  if (req.url === "/buble.png") {
    res.writeHead(200, {"Content-Type" : "image/png"});
    fs.readFile("./bubble.png", "utf8", (err, data) => {
      if (err) throw err;
      res.statusCode = 200;
      res.write(data);
      res.end();
    })
  }
  if (req.url === "/bub.js") {
    fs.readFile("./bub.js", "utf8", (err, data) => {
      if (err) throw err;
      res.statusCode = 200;
      res.writeHead(200, {"Content-Type" : "text/javascript;charset=UTF-8"});
      res.write(data);
      res.end();
    })
  }
})

server.listen(port, () => {
  console.log("bubble server is running...");
})
