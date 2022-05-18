const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>hello node</h1>");
    res.write("<h1>hello server</h1>");
    res.end("<h1>hello eroch안녕</h1>");
  })
  .listen(8080, () => {
    console.log("8080번 포트 서버 대기");
  });
server.on("listening", () => {
  console.log("8080포트 대기중");
});
server.on("error", (error) => {
  console.error(error);
});
