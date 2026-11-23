// 作品の追加方法:
// 下の配列の { ... } を1つコピーして、カンマ(,)で区切って追加します。
// title(作品名)・description(説明)・url(公開サイトのURL)は必須です。
// repo(GitHubのURL)・image(画像のパス)・tags(使った技術の配列)は省略できます。
var WORKS = [
  {
    title: '実習先レビューサイト',
    description: '実習先のレビューをまとめたサイトです。',
    url: 'https://jisshu-review.pages.dev',
  },
];
if (typeof window !== 'undefined') window.WORKS = WORKS;
