const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("this is the about page");
    return;
  }
  res.end(`
  <h1>oops!</h1>
  <p>we cant find the page you are looking for</p>
  <a href="/">back home </a>
  `);
  return;
});

// goes to http://localhost:5000/
server.listen(5000);
