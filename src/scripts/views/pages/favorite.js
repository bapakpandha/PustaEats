import '../components/home-listResto';
import addRestoPopulerElement from '../../utils/addRestoPopuler-util';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import ScrollToPosition from '../../utils/skipToContent-util';

const Favorite = {
  async render() {
    return `
        <section class="favorite-resto-hero-section detail_resto_hero_section ">
            <div class="section_overlay">
            </div>
            <div class="detail_resto_container container">
                <div class="detail_resto wrapper_1" style="margin-bottom:24rem ;">
                    <div class="detail_resto wrapper_2">
                        <div class="detail_resto wrapper_3">
                            <div class="detail_resto wrapper_4">
                                <div class="lead text-snowy mb-3">
                                    <i class="fas fa-people-carry mr-2"></i>
                                    <span>PustaEats</span>
                                </div>
                                <h1 class="detail_resto judul_resto">
                                    Restoran Favorit Anda
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="resto_section" style="margin-top: -24rem;">
            <detail-listresto class="container container-section">
                <div class="section-title">
                    <div class="button button-layanan">
                        <h3>Daftar Restoran Favorit!</h3>
                    </div>
                </div>
                <div id="resto_card_wrapper" class="resto_wrapper">
                    
                </div>
            </detail-listresto>
        </section>
      `;
  },

  async afterRender() {
    const favoriteResto = await FavoriteRestoIdb.getAllResto();
    await addRestoPopulerElement.init(favoriteResto).then(console.log('DEV_UTIL_LOG: ', favoriteResto));
    const skipToContent = document.querySelectorAll('.skipToContent2');
    const DaftarRestoPopuler = document.querySelector('#resto_section');
    ScrollToPosition.addEventListenerScrollToPosition({ elements: skipToContent, target: DaftarRestoPopuler });
  },
};

export default Favorite;