// 엔트리 파일, 메인 애플리 케이션 
const express = require('express');
// 모듈 함수 
const app = express();
// 애플리케이션을 리턴

app.locals.pretty = true;

app.set('view engine', 'pug');
// 템플릿 엔진 사용방법 pug
app.set('views','./views');
// views 디렉터리 :  템플릿 엔진 파일 모음

app.use(express.static('public'));
// 정적파일 : 퍼블릭파일

app.get('/template',function(req,res){
    res.render('temp',{time:Date(),title:'Jade=>pug'});
})
// 템플릿경로로 들어온 사용자에게 temp라는 템플릿 파일은 웹페이지로 렌더링하여 전송

app.get('/',function(req,res){
    res.send('Hello home page');
});
// '/' 홈 라우터로 왔을 때 res.send 출력

app.get('/dynamic',function(req,res){
    let lis = '';
    for(let i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    let time = Date();
    let output = `<!DOCTYPE html>
    let time 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        hello Dynamic~
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output);
})
// 동적 파일 서비스하는 방법

app.get('/route',function(req,res){
    res.send('Hello Router, <img src="/kakao.jpeg" style="width:500px">')
})
// 정적 파일 서비스하는 방법

app.get('/login',function(req,res){
    res.send('Login please')
})

app.listen(3000,function(){
    console.log('Connted 3000 port!');
});
// listen 리슨
// 3000 포트
// 콜백




