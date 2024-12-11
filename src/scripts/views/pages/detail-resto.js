import '../components/detailResto-heroresto';
import '../components/detailResto-inforesto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';
import checkWindowWidth from '../../utils/checkWidth-util';
import addReview from '../../utils/addReview-util';
import { showEmptyContent } from '../../utils/loadingContent-util';
import ScrollToPosition from '../../utils/skipToContent-util';

const DetailResto = {
  async render() {
    return `
        <detail-heroresto class="detail_resto_hero_section"></detail-heroresto>
        <detail-inforesto class="detail_resto_info_section container"></detail-inforesto>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log('DEV_UTIL_LOG: ', url.id);
    const data = await RestoApiSource.detailResto(url.id);
    const elementHeroResto = document.querySelector('detail-heroresto');
    const elementInfoResto = document.querySelector('detail-inforesto');
    if ((!data.id || data.id <= 1)) {
      showEmptyContent(elementInfoResto, 'Detail Resto Tidak Dapat Ditampilkan. Hubungkan ke Internet.');
    } else {

      elementHeroResto.getInfoResto(data);
      elementInfoResto.getInfoResto(data);
      console.log('DEV_UTIL_LOG: AFTERRENDER executed');
      checkWindowWidth.init();
      const addReviewSubmitButton = document.querySelector('#submitAddreview');
      addReview.init({ id: url.id, button: addReviewSubmitButton });
      const skipToContent = document.querySelectorAll('.skipToContent2');
      const DaftarRestoPopuler = document.querySelector('detail-inforesto');
      ScrollToPosition.addEventListenerScrollToPosition({ elements: skipToContent, target: DaftarRestoPopuler });
    }
  },
};

export default DetailResto;