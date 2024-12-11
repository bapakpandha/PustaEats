const addHeroElement = {
  init(data) {
    const heroes = data.hero;
    const container = document.querySelector('.greet');
    heroes.forEach((item) => {
      const element = `
            <div><h1>${item.title}</h1></div><div><article style="text-align: start;">${item.subtitle}</article></div><div class="container-greet-button"><a class="button" href="#">Menuju Aplikasi <img src="./images/icons/arrow-open-right.svg" style="margin-left: 0.5rem; display: inline-block; width: 1rem; color: var(--main-color);" alt=""></a><a style="display: flex; align-items: center; " href="#" disabled="disabled"> <img src="./images/icons/play-button.svg" style="margin-right: 0.5rem; display: inline-block; width: 3rem; color: var(--first-color);" alt=""> Apa itu PustaEats?</a></div>
            `;
      const element2 = '<img src="./images/heros/heros_2.svg" alt="hero pustaeats">';
      const temp = document.createElement('div');
      const temp2 = document.createElement('div');
      temp2.classList.add('container-hero');
      temp.classList.add('container-greet');
      temp.innerHTML = element.trim();
      temp2.innerHTML = element2.trim();
      container.insertBefore(temp2, container.firstChild);
      container.insertBefore(temp, container.firstChild);
    });
  }
};

export default addHeroElement;