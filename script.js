document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Custom cursor
  const cur = document.getElementById('cur');
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cur.style.transform = 'translate(-50%,-50%) scale(2.8)');
    el.addEventListener('mouseleave', () => cur.style.transform = 'translate(-50%,-50%) scale(1)');
  });

  // Scroll reveal
  const obs = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
