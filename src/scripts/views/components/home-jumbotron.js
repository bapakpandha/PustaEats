class homeJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <h1>Mengunggah Selera, Eksplorasi rasa, Imajinasikan Dunia</h1>
                <p>Ini Heor Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed corrupti maiores
                </p>
                <button class="button skipToContent2" style="max-width: max-content;">Lihat Daftar Restoran</button>
                <div class="tp-dottedoverlay twoxtwo"
                    style="background:url(./images/gridtile.png);background-repeat:repeat;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:1;max-width: 100vw;">
                </div>
        `;
  }
}

customElements.define('home-jumbotron', homeJumbotron);
