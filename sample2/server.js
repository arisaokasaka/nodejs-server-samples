const http = require('http')
const fs = require('fs')

const server = http.createServer(function(_req, res) {

    // 非同期で実行される。サイズが大きいファイルでも読み込みが完了するまで、後続処理が実行されない事態を防ぐため。
    fs.readFile('./sample2/temp.html', 'utf-8', function(err, data) {
        if(err) throw Error(err)
        res.writeHead(200, {'Content-Type': 'text/html'}) // server1.jsではcontent-type: plainだったが、ここではtext/html
        res.write(data, 'utf-8')
        res.end()
    })
})

server.listen(1225)

console.log('サーバーを起動しました。port: 1225')
