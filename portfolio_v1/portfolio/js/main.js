(() => {
  const c = portfolioConfig, $ = (s, r = document) => r.querySelector(s);
  document.title = `${c.name} | Portfolio`;
  document.querySelectorAll('[data-cfg]').forEach(el => el.textContent = c[el.dataset.cfg]);
  document.querySelectorAll('[data-cfg-href]').forEach(el => el.href = c[el.dataset.cfgHref]);
  document.querySelectorAll('[data-repo]').forEach(el => {
    el.href = `${c.githubUrl}/${c.featuredRepos[el.dataset.repo] || el.dataset.repo}`;
  });
  $('#year').textContent = new Date().getFullYear();

  // Loader: never blocks longer than 2.5s, skippable, instant if reduced motion
  const loader = $('#loader');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let done = false;
  const hide = () => {
    if (done) return; done = true;
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), reduced ? 0 : 700);
  };
  $('#skip-load').addEventListener('click', hide);
  window.addEventListener('load', () => setTimeout(hide, reduced ? 0 : 900));
  setTimeout(hide, 2500);

  // Mobile menu
  const btn = $('#menu-btn'), nav = $('#nav-links');
  const setMenu = open => { btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open); };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Calm card reveal (content stays visible without JS)
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.card').forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }
})();
