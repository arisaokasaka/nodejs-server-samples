const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('query-string')

const indexPage = fs.readFileSync('./sample5/index.html', 'utf-8')

const server = http.createServer(function(req, res) {
    console.log(req.method)
    if (req.method == 'GET') {
        const urlParts = url.parse(req.url, true) // 第二引数をtrueにすると、解析結果オブジェクトのqueryプロパティをオブジェクト型で保持できる
        console.log('---GET Request---')
        console.log('nameは' + urlParts.query.name)
        console.log('ageは' + urlParts.query.age)
    } else {
        let body = ''

        // dataイベントの登録。postで送信されたデータを受信した際に動く。引数に受信データを受け取る。
        req.on('data', function(data) {
            body += data
        })

        // データの受信が完了した時に動くendイベント
        req.on('end', function() {
            const params = qs.parse(body)
            console.log('---POST Request---')
            console.log('nameは' + params.name)
            console.log('ageは' + params.age)
        })
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(indexPage)
    res.end()
})

server.listen('1228')

console.log('サーバーを起動しました。port: 1228')
