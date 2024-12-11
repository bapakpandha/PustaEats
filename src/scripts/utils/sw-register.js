import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('DEV_UTIL_LOG: Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('DEV_UTIL_LOG: Service worker registered');
  } catch (error) {
    console.log('DEV_UTIL_LOG: Failed to register service worker', error);
  }
};

export default swRegister;
