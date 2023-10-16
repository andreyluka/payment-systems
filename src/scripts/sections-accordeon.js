;(function () {
   const sections = document.querySelector('.sections');
   const sectionsItems = Array.from(sections.children);

   displaySection();

   function displaySection() {
      let currentActive = null;
      
      sections.addEventListener('click', e => {
         currentActive = e.target.closest('.section');
         
         sectionsItems.forEach(item => {
            if (item.classList.contains('section--active') && item !== currentActive) {
               item.classList.remove('section--active');
            }
         });
         
         currentActive.classList.toggle('section--active');
      });
   }
})()