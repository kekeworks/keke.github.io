// 作品の追加方法:
// 下の配列の { ... } を1つコピーして、カンマ(,)で区切って追加します。
// title(作品名)・description(説明)・url(公開サイトのURL)は必須です。
// repo(GitHubのURL)・image(画像のパス)・tags(使った技術の配列)は省略できます。
var WORKS = [
  {
    title: '自己紹介ページ',
    description: 'HTMLとCSSだけで作った、はじめての自己紹介ページです。',
    url: 'https://example.com/profile',
    repo: 'https://github.com/example/profile',
    image: 'images/profile.png',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'ToDoリスト',
    description: 'JavaScriptでタスクの追加と削除ができるアプリです。',
    url: 'https://example.com/todo',
    repo: 'https://github.com/example/todo',
    tags: ['JavaScript'],
  },
  {
    title: '天気チェッカー',
    description: '都市名から今日の天気を表示するページです。',
    url: 'https://example.com/weather',
  },
];
if (typeof window !== 'undefined') window.WORKS = WORKS;
