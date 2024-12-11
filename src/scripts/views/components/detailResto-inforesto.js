class InfoResto extends HTMLElement {
  getInfoResto(data) {
    this._dataResto = data;
    console.log(data.customerReviews);
    this.render();
    this.appendInfoRestoElement(data.customerReviews);
    this.appendMenuElement(data.menus);
  }

  appendInfoRestoElement(dataReviews) {
    const containerElement = document.querySelector('.detail-review-list');
    if (!containerElement) {
      console.error('Elemen container review tidak ditemukan');
      return;
    }
    containerElement.innerHTML = '';
    dataReviews.forEach(({ name, review, date }) => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('detail-review-item');
      reviewElement.innerHTML = `
                            <img src="https://cdn.statically.io/avatar/shape=circle/${name}" alt="Avatar ${name}" onerror='this.onerror = null; this.src="./images/user.png"'>
                            <div class="detail-review-item-content">
                                <p id="name">${name}</p>
                                <small>${date}</small>
                                <p>${review}</p>
                            </div>
            `;
      containerElement.appendChild(reviewElement);
      reviewElement.parentNode.insertBefore(document.createElement('hr'), reviewElement.nextSibling);
    });
  }

  appendMenuElement(dataMenu) {
    const containerElement = document.querySelector('.menu-wrapper.flex');

    if (!containerElement) {
      console.error('Elemen container review tidak ditemukan');
      return;
    }

    const ulElementMakanan = document.createElement('ul');
    ulElementMakanan.classList.add('makanan');
    ulElementMakanan.innerHTML = '<li>Makanan</li>';

    dataMenu.foods.forEach(({ name }) => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      ulElementMakanan.appendChild(listItem);
    });

    const ulElementMinmunan = document.createElement('ul');
    ulElementMinmunan.classList.add('minuman');
    ulElementMinmunan.innerHTML = '<li>Minuman</li>';

    dataMenu.drinks.forEach(({ name }) => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      ulElementMinmunan.appendChild(listItem);
    });

    containerElement.appendChild(ulElementMakanan);
    containerElement.appendChild(ulElementMinmunan);
  }

  render() {
    this.innerHTML = `
        <div class="container container-section">
            <div class="section-title">
                <div class="button button-layanan">
                    <h3>${this._dataResto.name}</h3>
                </div>
                <div class="card-body">
                    <div class="mb-1_5">
                        <div class="flex">
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"
                                enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffeb3b"
                                style="width: 1.2rem;margin-right: 0.5rem;">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path fill="#ffeb3b"
                                            d="M32,52.789l-12-18C18.5,32,16,28.031,16,24c0-8.836,7.164-16,16-16s16,7.164,16,16 c0,4.031-2.055,8-4,10.789L32,52.789z">
                                        </path>
                                        <g>
                                            <path fill="#394240"
                                                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289 l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289 C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M44,34.789l-12,18l-12-18C18.5,32,16,28.031,16,24 c0-8.836,7.164-16,16-16s16,7.164,16,16C48,28.031,45.945,32,44,34.789z">
                                            </path>
                                            <circle fill="#394240" cx="32" cy="24" r="8"></circle>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h4>
                                ${this._dataResto.city}
                            </h4>
                        </div>
                        <div class="ml-1_5">
                            <h5>
                                ${this._dataResto.address}
                            </h5>
                        </div>
                    </div>
                    <article class="post">
                        <div class="card-text post__content">
                            <p style="text-align: justify">&nbsp; &nbsp; &nbsp; ${this._dataResto.description}</p>
                        </div>
                        <div class="post__share d-flex align-items-center">
                            <div class="sosmed">

                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="container container-section">
                <div class="section-title">
                    <div class="button button-layanan">
                        <h3>Menu</h3>
                    </div>
                </div>
                <div class="menu-wrapper flex">

                </div>
            </div>
            <div class="container container-section">
                <div class="section-title">
                    <div class="button button-layanan">
                        <h3>Review</h3>
                    </div>
                    <div class="detail-review-list">

                    </div>
                    <form class="add-review">
                        <h5>Tambahkan Review Kamu</h5>
                        <input id="addReviewName" name="name" type="text" placeholder="Name" required="">
                        <input id="addReviewPost" name="review" type="text" placeholder="Review" required="">
                        <button id="submitAddreview" class="button" type="submit">Submit</button>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
        `;
  }
}

customElements.define('detail-inforesto', InfoResto);
export { InfoResto };
