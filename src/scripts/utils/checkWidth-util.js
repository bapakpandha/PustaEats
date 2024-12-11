const checkWindowWidth = {
  init() {
    console.log('DEV_UTIL_LOG: checkwindow initiated');
    if (window.matchMedia('(min-width: 992px) and (max-width: 1200px)').matches) {
      this._setAttributeIfNotNull('.header', 'style', 'flex-direction: column; height: auto;');
      this._setAttributeIfNotNull('.header .container-navbar', 'style', 'justify-content: center;');
      this._setAttributeIfNotNull('main .container-greet-button', 'style', 'font-size: 1rem;');
      this._setAttributeIfNotNull('.header .navbar', 'style', 'width: 100%;');
      this._setAttributeIfNotNull('.list-service .item', 'style', 'flex: 0 0 40%; margin: 1.5rem;');
      this._setAttributeIfNotNull('.container-login .login-form', 'style', 'margin: 5rem 0;');
    } else {
      this._setAttributeIfNotNull('.header', 'style', 'flex-direction: ;');
      this._setAttributeIfNotNull('.header .container-navbar', 'style', 'justify-content: ;');
      this._setAttributeIfNotNull('.header .navbar', 'style', 'width: ;');
      this._setAttributeIfNotNull('main .container-greet-button', 'style', 'font-size: ;');
      this._setAttributeIfNotNull('.list-service .item', 'style', 'flex: ; margin: ;');
      this._setAttributeIfNotNull('.container-login .login-form', 'style', 'margin: ;');
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
      this._setAttributeIfNotNull('.menu', 'style', 'display: block;');
      this._manipulateClass('.header', 'addClass', 'mobile');
      this._manipulateClass('.greet', 'addClass', 'mobile');
      this._manipulateClass('.container-aboutUs', 'addClass', 'mobile');
      this._manipulateClass('.footer', 'addClass', 'mobile');
      this._manipulateClass('.container-login', 'addClass', 'mobile');
      this._setAttributeIfNotNull('.container-login .navigation>a>.content_text', 'text', '');
    } else {
      this._setAttributeIfNotNull('.menu', 'style', 'display: none;');
      this._manipulateClass('.header', 'removeClass', 'mobile');
      this._manipulateClass('.greet', 'removeClass', 'mobile');
      this._manipulateClass('.container-aboutUs', 'removeClass', 'mobile');
      this._manipulateClass('.footer', 'removeClass', 'mobile');
      this._manipulateClass('.container-login', 'removeClass', 'mobile');
      this._setAttributeIfNotNull('.container-login .navigation>a>.content_text', 'text', 'Kembali Ke Beranda');
    }
  },

  _setAttributeIfNotNull(selector, property, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (element !== null) {
        if (property === 'style') {
          const styles = value.split(';');
          styles.forEach((style) => {
            if (style.trim() !== '') {
              const parts = style.split(':');
              const styleName = parts[0].trim();
              const styleValue = parts[1].trim();
              element.style[styleName] = styleValue;
            }
          });
        } else if (property === 'class') {
          element.className = value;
        } else if (property === 'dataset') {
          const data = value.split(',');
          data.forEach((item) => {
            if (item.trim() !== '') {
              const parts = item.split(':');
              const dataName = parts[0].trim();
              const dataValue = parts[1].trim();
              element.dataset[dataName] = dataValue;
            }
          });
        } else if (property === 'text') {
          element.innerHTML = value;
        } else {
          element[property] = value;
        }
      }
    });
  },

  _manipulateClass(element, action, className) {
    const targetElement = document.querySelector(element);
    if (targetElement) {
      if (action === 'addClass') {
        targetElement.classList.add(className);
      } else if (action === 'removeClass') {
        targetElement.classList.remove(className);
      }
    }
  },

};

export default checkWindowWidth;