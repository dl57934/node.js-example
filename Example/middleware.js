var http = require('http'),
    express = require('express');

var app = express()
app.set('port',process.env.port || 3000)


http.createServer(app).listen(app.get('port'),function () {
    console.log('포트 3000에 연결되었습니다.')
})

app.use('/middle',function (req,res,next) {
    res.writeHead('200',{'Content-Type':'text/html;utf-8'})
    res.write('<h1>use middleware</h1>')
    res.end()
})