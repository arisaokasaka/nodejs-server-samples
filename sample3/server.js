const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    let targetFile = ''

    switch (req.url) {
        case '/':
        case '/index':
            targetFile = 'index.html'
            break
        case '/next':
            targetFile = 'next.html'
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('bad request')
            return
    }

    // 非同期で実行される。サイズが大きいファイルでも読み込みが完了するまで、後続処理が実行されない事態を防ぐため。
    fs.readFile(`./sample3/${targetFile}`, 'utf-8', function(err, data) {
        if(err) throw Error(err)
        
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
})


server.listen(1226)

console.log('サーバーを起動しました。port: 1226')
