const HeaderInitiator = {
  init({ header }) {
    this._getHeader(header);
  },

  _getHeader(header) {
    let signInButton;
    if (localStorage.getItem('loginInfo') === null) {
      signInButton = '<li><a class="button" href="#/login" aria-label="Login">Sign In</a></li>';
    } else {
      const loginInformationData = JSON.parse(localStorage.getItem('loginInfo'));
      const username = loginInformationData.username;
      signInButton = `<a class="button" href="#" aria-label="Sign in"><li style=" display: flex; align-items: center; column-gap: 0.5rem; "><svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="1em" height="1em" viewBox="796 796 200 200" enable-background="new 796 796 200 200" xml:space="preserve"> <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"/> </svg><span>${username}</span></li></a>`;
    }
    const headerContent = `<div class="container-logo-header tautan" data-tautan="index.html"><img data-src="./images/icon-small.png" src="./images/icon-small.png" alt="logo" class="logo"><div class="logo_title">Pusta<span>Eats!</span></div></div><div class="container-navbar"><nav class="navbar scale_font scale_width"><ul><li><a href="#" aria-label="Beranda">Beranda</a></li><li><a href="#/favorite" aria-label="Favorit">Favorit</a></li><li><a href="https://bitly.com/98K8eH" disabled="disabled" aria-label="Tentang Kami">Tentang Kami</a></li>${signInButton}</ul></nav></div><div class="menu"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
    `;
    // var headerSebelumrender = document.querySelector("header");
    const headerSebelumrender = header;
    headerSebelumrender.innerHTML = '';
    const header2 = document.querySelector('header');
    header2.insertAdjacentHTML('beforeend', headerContent);
  },
};

export default HeaderInitiator;