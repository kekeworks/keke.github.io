# ポートフォリオサイト Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** GitHub Pagesで公開できる、作品URLを簡単に追加できる1ページのポートフォリオ。

**Architecture:** 静的な `index.html` + `style.css`。作品データは `works.js`（グローバル配列 `WORKS`）、描画は `main.js`。描画ロジックは純粋関数にしてNodeでテストする。

**Tech Stack:** HTML / CSS / 素のJavaScript。テストは Node 標準の `node:test`（依存なし）。

**Spec:** `docs/superpowers/specs/2026-11-23-portfolio-design.md`

## Global Constraints
- ビルド工程なし。外部ライブラリなし（Google Fonts のみ可）。
- 作品追加は `works.js` の配列に1項目足すだけで済むこと。
- 項目: `title`, `description`, `url`, `repo`(省略可), `tags`(省略可), `image`(省略可)。
- 表示文言は日本語。

## Review Focus
- `repo` / `image` / `tags` 省略時 → 該当ボタン・画像・タグ欄を出さない（壊れた画像や空リンクを出さない）。
- 説明文に `<` などが入っても HTML として解釈されない（エスケープ）。
- `WORKS` が空 → 「作品はまだありません」と表示。
- 外部リンクは新しいタブで開き `rel="noopener"` を付ける。
- スマホ幅（360px）で横スクロールが出ない。

---

### Task 1: 作品カード描画ロジック

**Files:**
- Create: `main.js`, `tests/main.test.js`, `works.js`

**Interfaces:**
- Produces: `escapeHtml(s: string): string`, `renderWorkCard(work): string`（HTML文字列）, `renderWorks(works): string`。`main.js` は Node では `module.exports` でこれらを公開し、ブラウザでは `#works-list` に `renderWorks(window.WORKS)` を挿入する。

- [ ] **Step 1: テストを書く** — `tests/main.test.js`
  - `escapeHtml('<a>&"')` === `'&lt;a&gt;&amp;&quot;'`
  - 全項目ありのカードに `title`、`href="<url>"`、`target="_blank"`、`rel="noopener"`、`コードを見る`、各タグ、`<img` を含む
  - `repo`/`image`/`tags` なしのカードに `コードを見る`、`<img`、`class="tags"` を含まない
  - `description: '<script>'` は `&lt;script&gt;` として出力
  - `renderWorks([])` に `作品はまだありません` を含む
- [ ] **Step 2: 失敗を確認** — `node --test tests/` → FAIL（モジュールなし）
- [ ] **Step 3: `main.js` を実装、`works.js` に仮作品3件**（うち1件は repo/image なし）
- [ ] **Step 4: 通過を確認** — `node --test tests/` → 全 PASS

### Task 2: ページ本体・スタイル・README

**Files:**
- Create: `index.html`, `style.css`, `README.md`, `images/.gitkeep`

**Interfaces:**
- Consumes: `works.js`（`window.WORKS`）, `main.js`（`#works-list` に描画）

- [ ] **Step 1: `index.html`** — セクション: 自己紹介(`#about`) / 作品(`#works`, 中に `#works-list`) / スキル(`#skills`) / 連絡先(`#contact`)。名前等は仮。`works.js` → `main.js` の順に読み込む。
- [ ] **Step 2: `style.css`** — カードのグリッド、360px 幅で横スクロールなし、ダークモード対応。
- [ ] **Step 3: `README.md`** — 作品の追加方法、画像の置き場所、GitHub Pages 公開手順を日本語で。
- [ ] **Step 4: 確認** — `node --test tests/` PASS。ブラウザで `index.html` を開き、作品3件がカード表示されることを確認。
