const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
  try {
 
  throw "TEST Exception";
  
}
catch (e) {
  console.log("Exception Found")
  console.log(e);
  
}
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
