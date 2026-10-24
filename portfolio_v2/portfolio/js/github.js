(() => {
  const c = portfolioConfig;
  const grid = document.getElementById('repo-grid');
  const status = document.getElementById('repo-status');
  const bar = document.querySelector('.filters');
  const FILTERS = { All: null, 'C++': ['C++'], C: ['C'], Python: ['Python'], SQL: ['SQL', 'PLSQL', 'TSQL'], JavaScript: ['JavaScript'] };
  let repos = [], active = 'All';

  const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const fmt = d => new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

  function render() {
    const langs = FILTERS[active];
    // Exact language match so "C" never matches "C#" or "C++"
    const list = repos.filter(r => !langs || langs.includes(r.language));
    grid.innerHTML = list.map(r => `
      <article class="card repo">
        <h3><a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(r.name)}</a></h3>
        <p>${esc(r.description || 'No description provided.')}</p>
        <p class="meta">${esc(r.language || 'Unspecified')} · ★ ${r.stargazers_count} · Updated ${fmt(r.pushed_at || r.updated_at)}</p>
      </article>`).join('');
    status.textContent = list.length ? '' : (repos.length ? `No ${active} repositories yet.` : 'No public repositories to show yet.');
  }

  bar.innerHTML = Object.keys(FILTERS).map(f => `<button type="button" aria-pressed="${f === active}">${f}</button>`).join('');
  bar.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    active = e.target.textContent;
    bar.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b === e.target));
    render();
  });

  async function load() {
    if (!c.githubUsername || c.githubUsername === 'YOUR_USERNAME') {
      status.textContent = 'Set githubUsername in js/config.js to load your repositories.'; return;
    }
    try {
      const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 8000);
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(c.githubUsername)}/repos?sort=updated&per_page=100`, { signal: ctl.signal });
      clearTimeout(t);
      if (!res.ok) throw new Error(res.status === 403 ? 'rate limit reached' : `HTTP ${res.status}`);
      repos = (await res.json())
        .filter(r => !(c.excludeForks && r.fork) && !(c.excludeArchived && r.archived))
        .sort((a, b) => (!!b.description - !!a.description) || (new Date(b.pushed_at) - new Date(a.pushed_at)));
      render();
    } catch (err) {
      status.textContent = `Couldn't load repositories (${err.message}). Try again later or open the GitHub profile below.`;
    }
  }
  load();
})();
