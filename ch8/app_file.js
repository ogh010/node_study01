const express = require('express');
const bodyParser = require('body-parser');
let fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty = true;
// 애플리케이션 리턴
app.set('views', './views_file');
app.set('view engine', 'pug');
// 템플릿 엔진 사용방법 pug

app.get('/topic/:id',function(req,res){
    let id = req.params.id;
    fs.readFile('data/'+id,'utf-8',function(err,data){
        if(err){
            console.log('err');
            res.status(500).send('err~');
        };
        res.send(data);
    })
})

app.get('/topic',function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('err~');
        };
        res.render('view',{topics:files});
    })
});

app.post('/topic',function(req,res){
    let title = req.body.title;
    let description = req.body.description;
    fs.writeFile('data/'+title,description,function(err){
        if(err){
            res.status('500').send('err~')
        }
        else{
            res.send('성공~');
        }
    })
    
});

app.listen(3000,function(req,res){
    console.log('Connected 3000 port!');
});
// 애플리케이션이 3000 번 포트를 연결
