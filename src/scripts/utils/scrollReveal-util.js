const scrollReveal = {
  init() {
    this._scrollReveal();
  },

  _scrollReveal() {
    console.log('UTIL_LOG: Scroll Reveal initiated');
    const revealPoint = 150;
    const revealElement = document.querySelectorAll('.reveal');
    for (let i = 0; i < revealElement.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = revealElement[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        revealElement[i].classList.add('revealOn');
      } else {
        revealElement[i].classList.remove('revealOn');
      }
    }
  },
};

export default scrollReveal;