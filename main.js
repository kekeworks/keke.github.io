function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderWorkCard(work) {
  const e = escapeHtml;
  const img = work.image
    ? `<img src="${e(work.image)}" alt="${e(work.title)}" loading="lazy">`
    : '';
  const tags = work.tags && work.tags.length
    ? `<ul class="tags">${work.tags.map((t) => `<li>${e(t)}</li>`).join('')}</ul>`
    : '';
  const site = work.url
    ? `<a class="btn" href="${e(work.url)}" target="_blank" rel="noopener">サイトを開く</a>`
    : '';
  const repo = work.repo
    ? `<a class="btn btn-sub" href="${e(work.repo)}" target="_blank" rel="noopener">コードを見る</a>`
    : '';
  return `<article class="work-card">${img}<h3>${e(work.title)}</h3><p>${e(work.description)}</p>${tags}<div class="links">${site}${repo}</div></article>`;
}

function renderWorks(works) {
  if (!works || !works.length) return '<p class="empty">作品はまだありません</p>';
  return works.map(renderWorkCard).join('\n');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { escapeHtml, renderWorkCard, renderWorks };
}
if (typeof document !== 'undefined') {
  const el = document.getElementById('works-list');
  if (el) el.innerHTML = renderWorks(window.WORKS || []);
}
