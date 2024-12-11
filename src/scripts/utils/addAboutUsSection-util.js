const addAboutUsSection = {
  init(data) {
    const aboutUs = data.aboutUs;
    const aboutUsContainer = document.getElementById('aboutUs');
    aboutUsContainer.innerHTML = '';
    aboutUs.forEach((item) => {
      const element = `<div class="container container-section"><div class=section-title><div class="button button-layanan"><h3>${item.title}</h3></div></div><div class=container-aboutUs><article><span class=pustabooks-logo><div class=logo_title>Pusta<span>Eats</span></div></span>${item.description}</article><aside><picture><source media="(max-width: 600px)" srcset="${item.img_src}-small.jpg"><img alt=founder class="founder_img lazyload" src=${item.img_src}></picture></aside></div></div>`;
      const temp = document.createElement('div');
      temp.innerHTML = element.trim();
      const aboutUsElement = temp.firstChild;
      aboutUsContainer.appendChild(aboutUsElement);
    });
  }
};

export default addAboutUsSection;