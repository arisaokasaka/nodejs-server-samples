const http = require('http')
const fs = require('fs')

// readFileSyncは同期処理でファイルを読み込む
const indexPage = fs.readFileSync('./sample4/index.html', 'utf-8')
const nextPage = fs.readFileSync('./sample4/next.html', 'utf-8')

// 読み込んだファイルを使いまわしている
const server = http.createServer(function(req, res) {
    let target = ''

    switch (req.url) {
        case '/':
        case '/index':
            target = indexPage
            break
        case '/next':
            target = nextPage
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('bad request')
            return
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(target)
    res.end()
})


server.listen(1227)

console.log('サーバーを起動しました。port: 1227')
