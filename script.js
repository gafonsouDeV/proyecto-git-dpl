document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    const aside = document.querySelector('.aside');
  
    hamburgerToggle.addEventListener('click', function() {
        aside.classList.toggle('active');
    });
  });

document.getElementById('chat').addEventListener('click', () => {
    alert('Hiciste click en chat');
});