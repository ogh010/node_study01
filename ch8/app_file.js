const express = require('express');
const bodyParser = require('body-parser');
let fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty = true;
// 애플리케이션 리턴
app.set('views', './views_file'); // 템플릿이 위치한 디렉터리 
app.set('view engine', 'pug'); // pug 템플릿 엔진 설정
// 템플릿 엔진 사용방법 pug

app.get('/topic/new',function(req,res){
    res.render('new');
})

// 경로를 배열로 나열하면 여러 경로에 대해 동일한 핸들러를 사용
app.get(['/topic/:id' , '/topic'],function(req,res){
    let id = req.params.id;
    // 'data' 디렉터리 내의 파일 목록 조회
    fs.readdir('data','utf-8',(err,files)=>{
        if(err){
            console.log('err');
            res.status(500).send('err~');
        }
        if(id){ 
            // 해당 id에 대한 파일 열기
            fs.readFile('data/'+id,'utf-8',function(err,data){
                if(err){
                    console.log('err');
                    res.status(500).send('err~');
                };
                // view 템플릿을 렌더링하여 응답
                res.render('view',{topics:files,title:id,description:data});
            })
        }
        else {
            // view 템플릿을 렌더링하여 응답
            res.render('view',{topics:files,title:'제목',description:'내용입니다'});
        }
    })
})

// /topic 에 대한 Post 요청 처리
app.post('/topic',function(req,res){
    let title = req.body.title;
    let description = req.body.description;
    // 파일쓰기
    // 'data/' + title : 파일의 경로와 파일명 
    // description : 입력한 내용
    fs.writeFile('data/'+title,description,function(err){
        if(err){
            res.status('500').send('err~')
        }
        else{
            // res.send('성공~');
            res.redirect('/topic/'+title)
        }
    })
    
});

app.listen(3000,function(req,res){
    console.log('Connected 3000 port!');
});
// 애플리케이션이 3000 번 포트를 연결
