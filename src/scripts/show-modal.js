;(function() {
   const menu = document.querySelector('.menu');
   const menuLoginLink = document.querySelector('#login');
   const modalLogin = document.querySelector('.modal-login');

   menuLoginLink.addEventListener('click', () => {
      modalLogin.classList.add('modal-login--active');
      menu.classList.remove('menu--active');
   });

   modalLogin.addEventListener('click', (e) => {
      if (e.target.closest('.modal-login__btn-close') ||
            e.target.closest('a') ||
            e.target.closest('.modal-login__button') ||
            e.target === modalLogin
         ) {
         modalLogin.classList.remove('modal-login--active');
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' || e.key === 'Escape') {
         modalLogin.classList.remove('modal-login--active');
      }
   });
})()