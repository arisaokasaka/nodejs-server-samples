const http = require('http')
const fs = require('fs')

const server = http.createServer(function(_req, res) {

    // 非同期で実行される。サイズが大きいファイルでも読み込みが完了するまで、後続処理が実行されない事態を防ぐため。
    fs.readFile('./temp.html', 'utf-8', function(_err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'}) // server1.jsではcontent-type: plainだったが、ここではtext/html
        res.write(data)
        res.end()
    })
})

server.listen(1225)

console.log('サーバーを起動しました。port: 1225')
