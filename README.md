# AngularReversi

リバーシを作ってプログラミングを覚えよう。

描画やクリックの処理は Angular を使って実装されていますが、
オセロとして遊べるようにするだけであれば、 `models` の中にオセロのルールを実装するだけで動くため、
Angular の知識がなくてもプログラミングができます。

## 下準備

このディレクトリに移動し、コマンドラインから `npm install` を実行すると、

## 実行

このディレクトリに移動し、コマンドラインから `ng serve` を実行すると、仮想サーバが立ち上がります。
その後、Chrome などのプラウザで `http://localhost:4200/` にアクセスすると、このプログラムが実行されます。
コマンドラインで `Ctrl + C` を押すと、仮想サーバが停止します。

## ユニットテスト

ユニットテストを作ることで、自分が実装したロジックが意図通りに動いているかをチェックすることができます。
初めのうちは画面を見ながら作ってみるので十分です。

ユニットテストを書いて実行したいときは、自作のクラスと同じディレクトリに `classname.spec.ts` というファイルを作りましょう。
コマンドラインから `ng test` を実行すると、その時点で作成済みの `.spec.ts` が全て実行されます。

（`models/board.spec.ts` に spec のサンプルがあります。）
