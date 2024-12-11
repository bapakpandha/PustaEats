import RestoApiSource from '../../data/resto-api';
import websiteApi from '../../data/webite-api';
import addHeroElement from '../../utils/addHeroElement-util';
import addLayananElement from '../../utils/addLayananElement-util';
import addRestoPopulerElement from '../../utils/addRestoPopuler-util';
import addAboutUsSection from '../../utils/addAboutUsSection-util';
import '../components/home-jumbotron';
import '../components/home-hero';
import '../components/home-listResto';
import '../components/home-aboutus';
import checkWindowWidth from '../../utils/checkWidth-util';
import ScrollToPosition from '../../utils/skipToContent-util';

const Home = {
  async render() {
    return `
        <section id="jumbotron" class="reveal revealOn"><home-jumbotron class="jumbotron_wrapper container"></home-jumbotron></section>
        <section id="hero" class="reveal"><home-hero class="container container-section greet"></home-hero></section>
        <section id="resto_section"><home-listresto class="container container-section"></home-listresto></section>
        <section id="aboutUs" class="reveal"><home-aboutus class="container container-section"></home-aboutus></section>
      `;
  },

  async afterRender() {
    try {
      const listResto = await RestoApiSource.listResto();
      const webData = await websiteApi.fetchWebsiteApi();
      addHeroElement.init(webData);
      addLayananElement.init(webData);
      addRestoPopulerElement.init(listResto);
      addAboutUsSection.init(webData);
      checkWindowWidth.init();
      const skipToContent = document.querySelectorAll('.skipToContent2');
      const DaftarRestoPopuler = document.querySelector('#resto_section');
      ScrollToPosition.addEventListenerScrollToPosition({ elements: skipToContent, target: DaftarRestoPopuler });
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export default Home;