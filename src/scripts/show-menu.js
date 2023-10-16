;(function() {
   const hamburgerMenu = document.querySelector('.hamburger-menu');
   const menu = document.querySelector('.menu');

   hamburgerMenu.addEventListener('click', () => {
      menu.classList.toggle('menu--active');
      hamburgerMenu.classList.toggle('hamburger-menu--cross');
   });

   menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) removeClassActive();
   });

   document.addEventListener('click', (e) => {
      if (e.target.closest('main')) removeClassActive();
   });

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Escape') removeClassActive();
   });

   function removeClassActive() {
      menu.classList.remove('menu--active');
      hamburgerMenu.classList.remove('hamburger-menu--cross');
   }
})()