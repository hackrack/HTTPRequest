const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.write(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>my website</title>
        </head>
        <body>
            <h1>Welcome to My Site</h1>
          <p>Content coming soon</p>
        </body>
      </html>
      `);
  res.end();
})

server.listen(port, () => {
  console.log("Server-2 is currently running");
})
