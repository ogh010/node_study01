const http = require('http');

const hostname = '127.0.0.1'; // 컴퓨터의 ip
const port = 1338;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello world/n');
}).listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});

//createServer 로 서버를 만든다.
//서버를 만듦으로써 리스닝을 하게 시킨다. 첫번째 인자로 포트와 호스트네임을 전달한다



