(() => {
  const base = new URL('./', document.currentScript.src);
  const qr = new URL('wechat.jpg', base).href;
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#cro-document-nav, header .nav-wrap');
    if (header) {
      const menu = document.createElement('details');
      menu.className = 'cro-community-menu';
      menu.innerHTML = `<summary aria-label="关注随缘仙境，显示微信二维码"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 3h5v5H5zM14 3h5v5h-5zM5 12h5v5H5zM14 12h2v2h3v5h-5v-3M3 21h7M21 3v7"/></svg><span>关注我们</span></summary><div class="cro-community-panel"><img src="${qr}" alt="随缘仙境微信公众号二维码" width="220" height="220"><p>微信扫一扫，冒险路上常相见</p></div>`;
      header.append(menu);
      document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
      document.addEventListener('keydown', event => { if (event.key === 'Escape') menu.open = false; });
    }
  });
})();
