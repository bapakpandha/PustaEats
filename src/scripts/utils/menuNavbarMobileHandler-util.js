const menuNavbarMobileHandler = {
  init() {
    this._menuNavbarMobileHandler();
    console.log('UTIL_LOG: Menu Navbar Mobile Handler executed');
  },
  _menuNavbarMobileHandler() {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    // const header = app._header;

    if (!menu || !header) {
      console.log('DEV_UTIL_LOG: Element Navbar notfound');
      return;
    }
    menu.addEventListener('click', () => {
      if (menu.classList.contains('cancel')) {
        menu.classList.remove('cancel');
      } else {
        menu.classList.add('cancel');
      }

      if (header.classList.contains('active')) {
        header.classList.remove('active');
      } else {
        header.classList.add('active');
      }
      const menuIcon = menu.querySelector('svg');
      if (menu.classList.contains('cancel')) {
        menuIcon.setAttribute('viewBox', '0,0,330,330');
        menuIcon.innerHTML = '<path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165c90.982,0,165-74.019,165-165S255.982,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"></path><path d="M239.247,90.754c-5.857-5.858-15.355-5.858-21.213,0l-53.033,53.033l-53.033-53.033c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L143.788,165l-53.033,53.033c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.606-4.394l53.033-53.033l53.033,53.033 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L186.214,165 l53.033-53.033C245.105,106.109,245.105,96.612,239.247,90.754z"></path>';
        document.querySelectorAll('.header.mobile nav>ul>a').forEach((link) => {
          link.classList.add('animated');
        });
      } else {
        menuIcon.innerHTML = '<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
        menuIcon.setAttribute('viewBox', '0,0,24,24');
        document.querySelectorAll('.header.mobile nav>ul>a').forEach((link) => {
          link.classList.remove('animated');
        });
      }
      console.log('DEV_UTIL_LOG: Element Navbar clickerd');
    });
  },
};

export default menuNavbarMobileHandler;