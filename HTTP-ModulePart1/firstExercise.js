const http = require("http");

const port = 3000;
var count = 0;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(`<h1>Random Numbers: <span>${Math.floor(Math.random() * 100)}</span></h1>`);
    res.end();
})
server.listen(port, () => {
  console.log(`Server running at http:localhost: ${port}`);
})
