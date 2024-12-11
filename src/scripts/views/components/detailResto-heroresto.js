import CONFIG from '../../globals/config';
import { LikeButtonInitiator } from '../../utils/likeButton-initiator';

class HeroResto extends HTMLElement {
  getInfoResto(data) {
    this._dataResto = data;
    this.render();
    this.afterrender();
  }

  render() {
    const namaResto = this._dataResto.name;
    const rating = this._dataResto.rating;
    const id = this._dataResto.id;



    this.innerHTML = `
        <div class="section_overlay">
        </div>
        <div class="detail_resto_container container">
            <div class="detail_resto wrapper_1">
                <div class="detail_resto wrapper_2">
                    <div class="detail_resto wrapper_3">
                        <div class="detail_resto wrapper_4">
                            <div class="lead text-snowy mb-3">
                                <i class="fas fa-people-carry mr-2"></i>
                                <span>PustaEats!</span>
                            </div>
                            <h1 class="detail_resto judul_resto">${namaResto}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_resto_container container section--next-item">
            <div class="detail_resto container_img1">
                <div class="detail_resto container_img2">
                    <div class="detail_resto container_img3">
                        <div class="detail_resto container_img4">
                            <picture>
						        <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataResto.pictureId}" />
						        <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataResto.pictureId}" />
						        <img class="lazyload detail_resto resto_img" data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataResto.pictureId}" alt="Foto Resto ${namaResto}" />
					        </picture>
                            <div class="resto_card_rating">
                                <p><svg fill="#ffeb3b" viewBox="0 0 64 64" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                                        stroke="#ffeb3b">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <rect id="Icons" x="-512" y="-192" width="1280" height="800"
                                                style="fill:none;"></rect>
                                            <g id="Icons1" serif:id="Icons">
                                                <g id="Strike"> </g>
                                                <g id="H1"> </g>
                                                <g id="H2"> </g>
                                                <g id="H3"> </g>
                                                <g id="list-ul"> </g>
                                                <g id="hamburger-1"> </g>
                                                <g id="hamburger-2"> </g>
                                                <g id="list-ol"> </g>
                                                <g id="list-task"> </g>
                                                <g id="trash"> </g>
                                                <g id="vertical-menu"> </g>
                                                <g id="horizontal-menu"> </g>
                                                <g id="sidebar-2"> </g>
                                                <g id="Pen"> </g>
                                                <g id="Pen1" serif:id="Pen"> </g>
                                                <g id="clock"> </g>
                                                <g id="external-link"> </g>
                                                <g id="hr"> </g>
                                                <g id="info"> </g>
                                                <g id="warning"> </g>
                                                <g id="plus-circle"> </g>
                                                <g id="minus-circle"> </g>
                                                <g id="vue"> </g>
                                                <g id="cog"> </g>
                                                <g id="logo"> </g>
                                                <path id="star"
                                                    d="M32.001,9.188l5.666,17.438l18.335,0l-14.833,10.777l5.666,17.438l-14.834,-10.777l-14.833,10.777l5.666,-17.438l-14.834,-10.777l18.335,0l5.666,-17.438Z">
                                                </path>
                                                <g id="radio-check"> </g>
                                                <g id="eye-slash"> </g>
                                                <g id="eye"> </g>
                                                <g id="toggle-off"> </g>
                                                <g id="shredder"> </g>
                                                <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g>
                                                <g id="react"> </g>
                                                <g id="check-selected"> </g>
                                                <g id="turn-off"> </g>
                                                <g id="code-block"> </g>
                                                <g id="user"> </g>
                                                <g id="coffee-bean"> </g>
                                                <g id="coffee-beans">
                                                    <g id="coffee-bean1" serif:id="coffee-bean"> </g>
                                                </g>
                                                <g id="coffee-bean-filled"> </g>
                                                <g id="coffee-beans-filled">
                                                    <g id="coffee-bean2" serif:id="coffee-bean"> </g>
                                                </g>
                                                <g id="clipboard"> </g>
                                                <g id="clipboard-paste"> </g>
                                                <g id="clipboard-copy"> </g>
                                                <g id="Layer1"> </g>
                                            </g>
                                        </g>
                                    </svg>
                                    ${rating}</p>
                            </div>
                            <div id="favButtonContainer-${id}" class="favButtonContainer">
                                
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

  async afterrender() {
    const resto = this._dataResto;
    const favButtonContainer = this.querySelector('.favButtonContainer');
    if (favButtonContainer) {
      await LikeButtonInitiator.init(resto, favButtonContainer);
    }
  }
}

customElements.define('detail-heroresto', HeroResto);
