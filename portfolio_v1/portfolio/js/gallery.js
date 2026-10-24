(() => {
  const dlg = document.getElementById('lightbox');
  const img = dlg.querySelector('img'), cap = dlg.querySelector('figcaption');
  let opener = null;
  document.querySelector('.gallery').addEventListener('click', e => {
    const b = e.target.closest('button[data-full]'); if (!b) return;
    opener = b;
    img.src = b.dataset.full; img.alt = b.querySelector('img').alt; cap.textContent = b.dataset.cap || '';
    dlg.showModal();
  });
  document.getElementById('lb-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); }); // backdrop click
  dlg.addEventListener('close', () => opener && opener.focus());              // Escape is native
})();
