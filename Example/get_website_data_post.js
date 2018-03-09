var http = require('http');
var server = http.createServer();
server.listen(3000,function () {
    console.log("포트 3000에 연결되었습니다.");

});
server.on('request',function (req,res) {
    res.writeHead(200,{'Content-Type':"text/html; charset=utf-8"})
    res.write('<h1>node.js</h1>')
    res.end()
});
var option = {
    host : 'localhost',
    port:'3000',
    method:'post',
    path:'/'
}



var resData = '';
var req = http.request(option, function (res) {
    res.on('data',function (data) {
        resData += data;
    })

    res.on('close',function () {
        console.log(resData+"aa")
    })

    req.on('error',function (err) {
        console.log('오류 발생: '+err.message);
    })
})
req.write(resData)
req.end()

