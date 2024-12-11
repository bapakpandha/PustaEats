import 'regenerator-runtime';
import '../styles/main.minified.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

/* eslint-disable no-unused-vars */
const START = 10;
const NUMBER_OF_IMAGES = 100;
/* eslint-enable no-unused-vars */

const app = new App({
  header: document.querySelector('header'),
  content: document.querySelector('main'),
  footer: document.querySelector('footer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

export default app;