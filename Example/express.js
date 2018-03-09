var http = require('http'),
    express = require('express');
var app = express()

app.set('port',process.env.port||3000);
http.createServer(app).listen(app.get('port'),function () {
    console.log('익스프레스 서버를 시작했습니다.'+app.get('port'))
})