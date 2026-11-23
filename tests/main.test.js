const test = require('node:test');
const assert = require('node:assert');
const { escapeHtml, renderWorkCard, renderWorks } = require('../main.js');

const full = {
  title: 'テスト作品',
  description: '説明',
  url: 'https://example.com/site',
  repo: 'https://github.com/u/r',
  image: 'img/a.png',
  tags: ['HTML', 'CSS'],
};

test('escapeHtml', () => {
  assert.strictEqual(escapeHtml('<a>&"'), '&lt;a&gt;&amp;&quot;');
});

test('全項目ありのカード', () => {
  const h = renderWorkCard(full);
  for (const s of ['テスト作品', 'href="https://example.com/site"', 'target="_blank"', 'rel="noopener"', 'サイトを開く', 'コードを見る', 'HTML', 'CSS', '<img', 'href="https://github.com/u/r"']) {
    assert.ok(h.includes(s), s);
  }
});

test('任意項目なしのカード', () => {
  const h = renderWorkCard({ title: 'T', description: 'D', url: 'https://example.com' });
  for (const s of ['コードを見る', '<img', 'class="tags"']) assert.ok(!h.includes(s), s);
});

test('エスケープ', () => {
  assert.ok(renderWorkCard({ ...full, description: '<script>' }).includes('&lt;script&gt;'));
  const h = renderWorkCard({ ...full, url: 'x"onmouseover="y' });
  assert.ok(!h.includes('"onmouseover'));
});

test('renderWorks 空', () => {
  assert.ok(renderWorks([]).includes('作品はまだありません'));
});

test('renderWorks は WORKS が配列でないときエラー表示', () => {
  assert.ok(renderWorks(undefined).includes('works.js の書き方に間違いがあるようです'));
});

test('tags が文字列でも落ちない', () => {
  assert.doesNotThrow(() => renderWorkCard({ ...full, tags: 'HTML' }));
});

test('画像は読み込み失敗時に自分で消える', () => {
  assert.ok(renderWorkCard(full).includes('onerror="this.remove()"'));
});
