import api from './api';

class App {
  constructor() {
    this.prices = [];

    this.listEl = document.getElementById('price-list')
    this.linkApi();
  }
  

  async linkApi() {
    const response = await api.get();
     
    const countries = response.data.bpi;

    this.prices = Object.values(countries);

    this.prices.forEach(item => {
      item.rate,
      item.description
    })
    this.render();
  }

  render() {
    this.prices.forEach(cotation => {
      const topicEl = document.createElement('li');
      const priceText = document.createTextNode(`${cotation.description}: ${cotation.rate}`)
      topicEl.appendChild(priceText);

      this.listEl.appendChild(topicEl)
    })
  }
}

new App();