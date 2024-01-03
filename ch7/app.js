
const express = require('express');
const app = express();
// 모듈 임포트 및 애플리케이션 생성
// express 모듈을 가져오고 express 애플리케이션을 생성합니다.

app.locals.pretty = true;
// html 코드를 좀 더 가독성 있게 만들어 줍니다.
app.set('view engine','pug');
// 'pug'템플릿 엔진을 사용하기 위해 설정을 추가한다
app.set('views','./views');


app.use(express.static('public'));
// public 디렉터리에서 정적파일 ㅇ르 제공하기 위한 미들웨어로 설정합니다.

// ************* 쿼리스트링 *************

app.get('/topic/:id',function(req,res){
    let topics = [
        'javascript is ...',
        'nodejs is ...',
        'express is ...'
    ]
    let output = `
        <a href="/topic?id=0">javascript</a><br>
        <a href="/topic?id=1">nodejs</a><br>
        <a href="/topic?id=2">express</a><br>
        ${topics[req.params.id]}
    `

    res.send(output);
    let id = topics[req.params.id];
    res.send(id);
    // req는 요청 객체를 나타내며 req.query는 요청의 쿼리 스트링을 나타내는 객체
})

// ************* 쿼리스트링 *************


app.get('template',function(req,res){
    res.render('temp',{title:'타이틀',time:Date()});
});

app.get('/',function(req,res){
    res.send('Hello home page');
});

app.get('/dynamic',function(req,res){   
    res.send('dynamic page');
});

app.get('/route',function(req,res){
    res.send('route');
});

app.listen(3000,function(){
    console.log('Conneted 3000 port');
})



