document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navPanel = document.querySelector('.navpanel');
  
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('active');
      navPanel.classList.toggle('active');
    });
  
    // Close menu when clicking a link
    document.querySelectorAll('.nextpage').forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navPanel.classList.remove('active');
      });
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!burgerMenu.contains(e.target) && !navPanel.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navPanel.classList.remove('active');
      }
    });
  });