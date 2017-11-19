const http = require("http");
const url = require("url");
const port = 1983;

const server = http.createServer((req, res) => {
  let name = "";
  res.writeHead(200, {"Content-Type" : "text/plain text"});
  if (req.url === "/?name=") {
    res.write(`
      <!doctype>
        <html>
          <head>
            <title>Greeter</title>
          </head>
          <body>
            <h1>Please provide a name</h1>
          </body>
        </html>`);
    res.end();
  } else if (req.url === `/?name=${name=req.url.slice(7)}`) {
    res.writeHead(200, {"Content-Type" : "text/plain text"});
    res.write(`
      <!doctype>
        <html>
          <head>
            <title>Greeter</title>
          </head>
          <body>
            <h1>Hello ${name}</h1>
          </body>
        </html>`);
    res.end();
  }
})

server.listen(port, () => {
  console.log("Server is running...");
})
