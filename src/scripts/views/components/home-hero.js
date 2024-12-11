class HomeHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="container-service reveal">
                    <div class="section-title">
                        <div class="button button-layanan">
                            <h3>Apa saja di PustaEats!?</h3>
                        </div>
                    </div>
                    <div class="service-greet">
                        <h1>Nikmati layanan berikut eksklusif hanya di PustaEats!</h1>
                    </div>
                    <div class="list-service">

                    </div>
                </div>
        `;
  }
}

customElements.define('home-hero', HomeHero);
