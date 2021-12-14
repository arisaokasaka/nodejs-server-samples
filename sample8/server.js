const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const main = fs.readFileSync('./sample8/main.ejs', 'utf-8')
const sub = fs.readFileSync('./sample8/sub.ejs', 'utf-8')

const server = http.createServer(function(_req, res){
    // 第二引数にはテンプレート上の特殊タグに埋め込むための値を連想配列で指定
    const data = ejs.render(main, {
        contents: ejs.render(sub, {
            data: '<p>wow!!</p>'
        })
    })

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
})

server.listen('1231')
console.log('サーバーを起動しました。port: 1231')
