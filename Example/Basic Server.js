var http = require('http')
var server = http.createServer()

var port = 3000

server.listen(port,function () {
    console.log("포트 3000에 연결되었습니다.")
})

server.on('request',function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    res.write("<h1>node.js 서버</h1>")
    res.end()
})