import menuNavbarMobileHandler from './menuNavbarMobileHandler-util';
import changeFontSize from './changeFontSize-util';
import scrollHeaderSticky from './scrollHeaderSticky-util';
import checkWindowWidth from './checkWidth-util';
import scrollReveal from './scrollReveal-util';

const generalEventListener = {
  init() {
    this._checkwidth();
    this._scrollReveal();
    menuNavbarMobileHandler.init();
    changeFontSize.init();
    scrollHeaderSticky.init();
    console.log('DEV_UTIL_LOG: General Event Listener initiated');
  },
  _checkwidth() {
    window.addEventListener('resize', () => checkWindowWidth.init());
  },
  _scrollReveal() {
    window.addEventListener('scroll', () => scrollReveal.init());
  }
};

export default generalEventListener;