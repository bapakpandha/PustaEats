import sleep from './sleep-util';

const scrollHeaderSticky = {
  init() {
    this._scrollHeaderSticky();
  },
  _scrollHeaderSticky() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.pageYOffset > 50) {
        if (header && !header.classList.contains('scrolled') && !header.classList.contains('full') && window.pageYOffset > 50) {
          header.style.top = '-6rem';
          header.style.transition = 'none';
          setTimeout(() => {
            header.classList.add('scrolled', 'full');
          }, 25);
          setTimeout(() => {
            header.style.top = '';
            header.style.transition = 'all .6s ease';
          }, 50);
        }
      } else {
        if (header) {
          header.classList.remove('scrolled', 'full');
          sleep(500).then(() => {
            if (window.pageYOffset < 50) {
              window.scrollTo(0, 0);
            }
          });

        }
      }
    });
  },
};

export default scrollHeaderSticky;