// ===== MAIN.JS – shared utilities =====
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const ham = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '66px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#fff';
      links.style.padding = '12px 24px 20px';
      links.style.borderBottom = '1px solid #eee';
      links.style.zIndex = '300';
    });
  }
  // Active nav link
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.closest('li')?.classList.add('active');
  });
});
