# ポートフォリオサイト

自分が作ったWebサイトを一覧にして見せるためのページです。HTML・CSS・JavaScriptだけで作られていて、ビルドは不要です。

- 公開URL: https://kekeworks.github.io/
- リポジトリ: https://github.com/kekeworks/kekeworks.github.io （`main` ブランチがそのまま公開される）

## 1. 作品の追加方法

`works.js` を開き、`WORKS` 配列の中に `{ ... }` を1つ追加します（前の項目の後ろにカンマ `,` を忘れずに）。

```js
{
  title: '作品の名前',
  description: '作品の説明を1〜2文で書きます。',
  url: 'https://kekeworks.github.io/作品のリポジトリ名/',
  repo: 'https://github.com/kekeworks/作品のリポジトリ名', // 省略可
  image: 'images/my-work.png',                             // 省略可
  tags: ['HTML', 'CSS'],                                   // 省略可
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

## 2. 自己紹介・スキル・連絡先の変え方

`index.html` の次の部分を書き換えます。

- `<title>` と `<meta name="description">`（タブに出るタイトルと、検索結果やSNSで出る説明文）
- `<h1>`（名前）とフッターの `&copy;`
- `#about` セクションの自己紹介文
- `#skills` セクションのスキル一覧（`<li>` を1行足すと1つ増える）
- `#contact` セクションの連絡先

## 3. 見た目（デザイン）の変え方

デザインは「方眼ノート」（方眼紙の背景に、作品カードをテープで貼ったような見た目）です。

- **色**は `style.css` の先頭の `:root { ... }` にまとめてあります。ここの値を変えるだけで、ページ全体の色が変わります。

  | 名前 | 使われている場所 |
  |---|---|
  | `--paper` | 背景の紙の色 |
  | `--grid` | 方眼の線 |
  | `--ink` | 文字 |
  | `--muted` | 補足の文字（作品の説明など） |
  | `--pen` | リンク・ボタン・タグ（青ペン） |
  | `--marker` | 見出しの下の蛍光ペン |
  | `--tape` | 作品カードの上のテープ |

- **フォント**は `index.html` の `<link href="https://fonts.googleapis.com/...">` で読み込んでいます（見出し: Klee One、本文: Zen Maru Gothic）。変えるときは、この `<link>` と `style.css` の `font-family` の両方を直します。

## 4. 変更を公開する（更新のしかた）

このフォルダでターミナル（PowerShell）を開き、次の3つを順に実行します。1〜2分で公開ページに反映されます。

```
git add .
git commit -m "変更内容を短く書く（例: 作品を追加）"
git push
```

- `git status` で、変更したファイルの一覧を見られます（見るだけなので何度実行しても大丈夫）。
- 反映されないときは、GitHubのリポジトリの **Actions** タブで公開の処理が終わっているか確認します。

### 公開の設定（設定済み。作り直すときのメモ）

リポジトリの **Settings → Pages** で、Source を **Deploy from a branch**、Branch を **main** / **/ (root)** にしています。
リポジトリ名を `ユーザー名.github.io` にすると、`https://ユーザー名.github.io/` という短いURLで公開されます（ほかの名前だと `https://ユーザー名.github.io/リポジトリ名/` になる）。

## 5. 手元での確認方法

`index.html` をダブルクリックしてブラウザで開くだけで確認できます。編集したら、ブラウザを再読み込みしてください。
