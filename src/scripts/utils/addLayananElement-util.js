const addLayananElement = {
  init(data) {
    const layanan = data.layanan;
    const listService = document.querySelector('.list-service');
    layanan.forEach((item) => {
      const newElement = `
          <div class="item reveal"><img class="lazyload" src="${item.logo}" alt="Logo"><h2>${item.judul}</h2><h3>${item.subjudul}</h3><a href="${item.linkRef}" title="${item.linkTitle}" aria-label="${item.linkTitle}">${item.linkTitle}</a></div>
            `;
      const temp = document.createElement('div');
      temp.innerHTML = newElement.trim();
      const layananElement = temp.firstChild;
      listService.appendChild(layananElement);
    });
  },
};

export default addLayananElement;