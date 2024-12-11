import HeaderInitiator from '../utils/header-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import footerInitiator from '../utils/footer-initiator';
import checkWindowWidth from '../utils/checkWidth-util';
import scrollReveal from '../utils/scrollReveal-util';
import generalEventListener from '../utils/generalEventListener-util';
import { loadContent } from '../utils/loadingContent-util';

class App {
  constructor({ header, content, footer }) {
    this._header = header;
    this._footer = footer;
    this._content = content;

    this._initialAppShell();

  }

  _initialAppShell() {
    HeaderInitiator.init({
      header: this._header,
    });
    footerInitiator.init({
      footer: this._footer,
    });
    // loadContent();
    this._otherUtils();
  }

  _otherUtils() {
    generalEventListener.init();
    checkWindowWidth.init();
    scrollReveal.init();
  }

  async renderPage() {
    loadContent();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender().then(() => {
      const loadingElement = document.querySelector('pn-loading');
      if (loadingElement) {
        document.body.removeChild(loadingElement);
      }
    });
  }
}

export default App;