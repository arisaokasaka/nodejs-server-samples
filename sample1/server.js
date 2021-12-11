const http = require('http')

const server = http.createServer(function(_req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello World')
    res.end()
})

server.listen(1224)
console.log('サーバーを起動しました。port: 1224')
