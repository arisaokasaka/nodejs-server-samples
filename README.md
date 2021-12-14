# Node.js で色々やってみる

## Sample1

サーバーを立ち上げただけ。

```
yarn sample1
```

- [http://localhost:1224/](http://localhost:1224/)にアクセス
- 「Hello World」が表示される

## Sample2

HTML を返すようにしたもの。

```
yarn sample2
```

- [http://localhost:1225/](http://localhost:1225/)にアクセス
- 「title, text」が表示される

## Sample3

ルーティング処理を追加。

```
yarn sample3
```

- [http://localhost:1226/](http://localhost:1226/)にアクセス
- 「最初のページ」が表示される

## Sample4

Sample3 の改善版。読み込んだ HTML ファイルをリユースする形。

```
yarn sample4
```

- [http://localhost:1227/](http://localhost:1227/)にアクセス
- 「最初のページ」が表示される

## Sample5

GET と POST 通信でのデータの取得。

```
yarn sample5
```

- [http://localhost:1228/](http://localhost:1228/)にアクセス
- GET リンクと POST ボタンが表示される。

## Sample6

静的ファイルを供給するファイルサーバ。

```
yarn sample6
```

- [http://localhost:1229/test.png](http://localhost:1229/test.png)にアクセス
- 画像が表示され、ファビコンも表示されている。

stream オブジェクト：Node.js でストリーミングデータを扱うためのインターフェース。読み取り可能、書き込み可能、両方などデータの権限も設定可能。

## Sample7

EJS: テンプレートエンジンの 1 つ。テンプレート（HTML）上に用意した特殊タグに対して任意の値を埋め込むことができる。

```
yarn sample7
```

- [http://localhost:1230/](http://localhost:1230/)にアクセス
- いちご、メロン、バナナなどが表示される

## Sample8

EJS をネストさせる

```
yarn sample8
```

- [http://localhost:1231/](http://localhost:1231/)にアクセス
