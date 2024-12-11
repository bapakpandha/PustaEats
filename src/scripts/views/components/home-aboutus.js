class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="section-title">
                    <div class="button button-layanan">
                        <h3>Tentang Kami</h3>
                    </div>
                </div>
                <div class="container-aboutUs">
                </div>
        `;
  }
}

customElements.define('home-aboutus', AboutUs);
