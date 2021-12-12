const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    const path = __dirname + req.url // 供給ファイルへの絶対パス生成

    /* 
    ファイルを読み込むためのストリームオブジェクト。
    Node.jsでストリーミングデータを扱うためのインターフェース。読み取り可能、書き込み可能、両方などデータの権限も設定可能。*/
    const stream = fs.createReadStream(path)

    stream.pipe(res)

    /* pipeは下記コードと同様のことを実行する。
    stream.on('data', function(data) {
        res.write(data)
    })
    stream.on('end', function(_data) {
        res.end()
    }) */
})

server.listen('1229')

console.log('サーバーを起動しました。port: 1229')
