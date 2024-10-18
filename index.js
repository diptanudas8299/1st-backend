const http = require('http');
const port = 5000
const server = http.createServer(function(req,res){
  res.end('i am your backend')
})

server.listen(port,undefined,function(){
  console.log('server is running')
})