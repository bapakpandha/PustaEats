import FavoriteRestoIdb from '../data/favorite-resto-idb';


const likeButtonElement = `
<button type="button" class="favorite-dark-button" id="notFavoriteButton" aria-label="like this restaurant"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
`;

const LikeButtonInitiator = {
  async init(restoo, element) {
    this._resto = restoo;
    this.element = element;
    this.button = await this._generateButtonLike();
    await this._appendButtonLike(this.button);
    return this.button;
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  async _generateButtonLike() {
    const resto = this._resto;
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('favorite-dark-button');

    if (await this._isRestoExist(resto.id)) {
      button.id = `FavoriteButton-${resto.id}`;
      button.setAttribute('aria-label', 'dislike this restaurant');
      button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            `;
      button.addEventListener('click', async () => {
        await FavoriteRestoIdb.deleteResto(resto.id);

        const parent = button.parentElement;
        parent.innerHTML = '';
        const newButton = await this.init(resto);
        parent.appendChild(newButton);
      });
      return button;

    } else {
      button.id = `notFavoriteButton-${resto.id}`;
      button.setAttribute('aria-label', 'like this restaurant');
      button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            `;
      button.addEventListener('click', async () => {
        await FavoriteRestoIdb.putResto(resto);
        console.log('DEV_UTIL_LOG: putResto', resto);

        const parent = button.parentElement;
        parent.innerHTML = '';
        const newButton = await this.init(resto);
        parent.appendChild(newButton);
      });
      return button;
    }
  },

  async _appendButtonLike(likeButton) {
    const favButtonContainer = this.element;
    if (favButtonContainer) {
      favButtonContainer.appendChild(likeButton);
    }
  }
};

export { likeButtonElement, LikeButtonInitiator };