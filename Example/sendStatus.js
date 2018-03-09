var express = require('express')
, http = require('http')

var app = express()


http.createServer(app).listen('3000',function () {
    console.log('포트 3000에 연결합니다.')
})

app.use('/',function (req,res,next) {
    res.sendStatus(403)
})