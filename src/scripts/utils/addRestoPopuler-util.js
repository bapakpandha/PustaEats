import truncateText from './truncateText-util';
import { LikeButtonInitiator } from './likeButton-initiator';
import CONFIG from '../globals/config';
import { showEmptyContent } from './loadingContent-util';

const addRestoPopulerElement = {
  async init(data) {
    const restos = data;
    const listService = document.querySelector('#resto_card_wrapper');
    console.log(restos);
    if (!restos || restos.length <= 0) {
      showEmptyContent(listService);
      listService.style = 'grid-template-columns: 1fr';
      return;
    }

    for (const item of restos) {
      // Membuat elemen HTML untuk setiap restoran
      const newElement = `
        <div tabindex="0" class="resto_card">
          <div class="resto_card" href="/#/detail/${item.id}">
            <div class="resto_card_img_wrapper">
            	<picture>
						    <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${item.pictureId}" />
						    <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${item.pictureId}" />
						    <img class="lazyload resto_card_img" data-src="${CONFIG.BASE_IMAGE_URL.small}${item.pictureId}" alt="Foto Resto ${item.name}" />
					    </picture>
              <div id="favButtonContainer-${item.id}" class="favButtonContainer"></div>
              <div class="resto_card_rating">
                <p>${item.rating}</p>
              </div>
            </div>
            <a href="/#/detail/${item.id}" class="resto_card_deskrip_wrapper">
              <div class="resto_card_nama">
                <h2>${item.name}</h2>
              </div>
              <div class="resto_card_kota">
                <h4>${item.city}</h4>
              </div>
              <hr>
              <div class="resto_card_deskripsi">
                <p>${truncateText({ text: item.description, maxLength: 100 })}</p>
              </div>
            </a>
          </div>
        </div>
      `;


      const temp = document.createElement('div');
      temp.innerHTML = newElement.trim();
      const layananElement = temp.firstChild;
      listService.appendChild(layananElement);

      const favButtonContainer = layananElement.querySelector('.favButtonContainer');
      if (favButtonContainer) {
        console.log(favButtonContainer);
        await LikeButtonInitiator.init(item, favButtonContainer);
      }
    }
  },
};

export default addRestoPopulerElement;