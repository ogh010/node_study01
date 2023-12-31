const http = require('http');
// http 모듈 가져오기 

const hostname = '127.0.0.1'
const port = 1337;
// 호스트와 포트 정의

let server = http.createServer(function(req,res){
    res.end('hello  world');
});
// 서버 생성, 요청(req)이 들어올때마다 호출될 콜백함수

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}`);
});
// 서버 리스닝. 지정한 호스트와 포트로 리슨, 서버가 시작되면 콜백함수 호출




