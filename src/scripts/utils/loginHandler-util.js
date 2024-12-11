import HeaderInitiator from './header-initiator';

const loginHandler = {
  init() {
    this._formGroupLabelHandler();
    this._signInFunction();
  },
  async _formGroupLabelHandler() {
    document.querySelectorAll('.form-control').forEach((input) => {
      input.addEventListener('input', function () {
        const field = this.closest('.form-group');
        if (this.value) {
          field.classList.add('field--not-empty');
        } else {
          field.classList.remove('field--not-empty');
        }
      });
    });
  },

  async _signInFunction() {
    console.log('signin');
    if (localStorage.getItem('loginInfo') === null) {
      const loginForm = document.getElementById('loginForm');
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username.value == '' || password.value == '') {
          alert('Masukkan Username atau Password');
        } else if (username.value.length >= 10) {
          alert('Maksimal username 8 karakter');
        } else {
          alert('Berhasil Log in!');
          const IsSignedIn = true;
          const loginInformation = { 'isSignedIn': IsSignedIn, 'username': username.value, 'password': password.value };
          localStorage.setItem('loginInfo', JSON.stringify(loginInformation));
          HeaderInitiator.init({ header: document.querySelector('header') });
          window.location.assign('/');
        }
      });
    }
  },
};
export default loginHandler;