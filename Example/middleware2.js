var http = require('http'),
    express = require('express')
var app = express()


http.createServer(app).listen(3000,function () {
    console.log('포트 3000에 연결되었습니다.')
})

app.use('/',function (req,res,next) {
    req.name = "sanghoony";
    next();
})

app.use('/',function (req,res,next) {
   res.writeHead(200, {'Content-Type':'text/html;utf-8'})
   res.write('midlleware: '+req.name)
   res.end()
});

