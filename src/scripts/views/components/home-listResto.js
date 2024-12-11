class ListResto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="section-title">
                    <div class="button button-layanan">
                        <h3>Daftar Restoran Populer!</h3>
                    </div>
                </div>
                <div id="resto_card_wrapper" class="resto_wrapper">
                </div>
        `;
  }
}

customElements.define('home-listresto', ListResto);
