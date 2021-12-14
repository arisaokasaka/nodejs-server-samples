const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const temp = fs.readFileSync('./sample7/temp.ejs', 'utf-8')

const server = http.createServer(function(_req, res){
    // 第二引数にはテンプレート上の特殊タグに埋め込むための値を連想配列で指定
    const data = ejs.render(temp, {
        title: 'EJSテスト',
        content1: '<p>ここはエスケープされない</p>',
        content2: '<p>ここはエスケープされる</p>',
        arr: ['いちご', 'メロン', 'バナナ']
    })

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
})

server.listen('1230')
console.log('サーバーを起動しました。port: 1230')
