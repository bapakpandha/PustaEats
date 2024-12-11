const changeFontSize = {
  init() {
    this._changeFontSizeFunction();
  },
  _changeFontSizeFunction() {
    function changeFontSize(factor, element, property) {
      const viewportWidth = window.innerWidth;
      const scaleFactor = viewportWidth / 1440;
      if (property == 'font-size') {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        // const fontSize = parseFloat(getComputedStyle(element).fontSize);
        const newFontSize = rootFontSize * factor * scaleFactor;
        const remNewFontSize = newFontSize / rootFontSize;
        element.style.fontSize = `${remNewFontSize  }rem`;
      } else if (property == 'width') {
        const newHeight = (scaleFactor * 10) + factor;
        element.style.width = `${newHeight  }%`;
      }
    }
    const targetFonts = document.querySelectorAll('.scale_font');
    const targetWidth = document.querySelectorAll('.scale_width');
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 1200px) and (max-width: 1400px)').matches) {
        targetFonts.forEach((element) => {
          changeFontSize(1.25, element, 'font-size');
        });
        targetWidth.forEach((element) => {
          changeFontSize(80, element, 'width');
        });
      } else if (window.matchMedia('(min-width: 1400px)').matches) {
        targetFonts.forEach((element) => {
          element.style.fontSize = '1.25rem';
        });
        targetWidth.forEach((element) => {
          element.style.width = '';
        });
      }
    });
  },
};

export default changeFontSize;