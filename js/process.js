// script.js

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;

    // Close other panels
    document.querySelectorAll('.panel').forEach(p => {
      if (p !== panel) {
        p.style.display = 'none';
        p.previousElementSibling.classList.remove('active');
      }
    });

    // Toggle current panel
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
