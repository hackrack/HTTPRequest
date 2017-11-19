const http = require("http");
const url = require("url");
const port = 1983;

const server = http.createServer((req, res) => {
  var urlObj = url.parse(`/api/parsetime?iso`);
  res.writeHead(200, {"Content-Type" : "application/json"});
  var iso = "";
  if (req.url === `/api/parsetime?iso=${iso = req.url.slice(19)}`) {
    res.statusCode = 200;
    let date = new Date(`${iso}`);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var objTime =
    {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    let jFile = JSON.stringify(objTime);
    res.write(jFile);
    res.end();
  }
})

server.listen(port, () => {
  console.log("Server is running...");
})
