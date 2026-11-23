# ポートフォリオサイト

自分が作ったWebサイトを一覧にして見せるためのページです。HTML・CSS・JavaScriptだけで作られていて、ビルドは不要です。

## 1. 作品の追加方法

`works.js` を開き、`WORKS` 配列の中に `{ ... }` を1つ追加します（前の項目の後ろにカンマ `,` を忘れずに）。

```js
{
  title: '作品の名前',
  description: '作品の説明を1〜2文で書きます。',
  url: 'https://あなたのユーザー名.github.io/作品のリポジトリ名/',
  repo: 'https://github.com/あなたのユーザー名/作品のリポジトリ名', // 省略可
  image: 'images/my-work.png',                                      // 省略可
  tags: ['HTML', 'CSS'],                                            // 省略可
},
```

- 必須: `title` / `description` / `url`
- 省略可: `repo`（コードのURL）/ `image`（画像）/ `tags`（使った技術）
- 画像は `images/` フォルダに入れ、`image: 'images/ファイル名.png'` のように書きます。スクリーンショットは横長（16:9）がきれいに収まります。

### 作品が表示されないとき

- `works.js` の各 `{ ... }` の後ろにカンマ `,` があるか確認する。
- 文字列は `'` か `"` で正しく閉じる。括弧 `{ }` `[ ]` の数が合っているか確認する。
- `tags` は必ず `[ ]` で囲む（例: `tags: ['HTML', 'CSS']`）。
- 書き方に間違いがあると、ページに「works.js の書き方に間違いがあるようです」と表示されます。

## 2. 自分の情報の書き換え箇所

`index.html` の次の部分を自分の内容に変えてください。

- `<title>` と `<meta name="description">`（タブに出るタイトルと、ページの説明文）
- `<h1>山田 太郎</h1>`（名前）
- `#about` セクションの自己紹介文
- `#skills` セクションのスキル一覧
- `#contact` セクションの GitHub URL（`https://github.com/your-name` を自分のものに）
- フッターの `&copy; 山田 太郎`

「山田 太郎」と「your-name」で検索すると、書き換える場所が見つかります。

## 3. GitHub Pagesでの公開手順

1. GitHubで新しいリポジトリを作る（例: `my-portfolio`、Public）。
2. このフォルダの中身をそのリポジトリにアップロードする。次のどちらかの方法で行います。
   - コマンドを使う場合（このフォルダでターミナルを開いて実行）:

     ```
     git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
     git push -u origin main
     ```

   - ブラウザだけで行う場合: GitHubのリポジトリページで **Add file → Upload files** を選び、このフォルダの中身をドラッグ＆ドロップして Commit changes を押す。
3. リポジトリの **Settings → Pages** を開く。
4. **Build and deployment** の Source を **Deploy from a branch** にし、Branch を **main** / **/ (root)** にして Save。
5. 1〜2分待つと、次のURLで公開されます。

   `https://<ユーザー名>.github.io/<リポジトリ名>/`

## 4. ローカルでの確認方法

`index.html` をダブルクリックしてブラウザで開くだけで確認できます。`works.js` を編集したら、ブラウザを再読み込みしてください。
