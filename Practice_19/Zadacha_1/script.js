console.log('JavaScript работает!');

class Delivery {
  constructor(name, address, distance) {
    this.name = name;
    this.address = address;
    this.distance = distance;
  }

  createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <p>Имя</p>
      <p><span>${this.name}</span></p>
      <p>Адрес</p>
      <p><span>${this.address}</span></p>
      <p>Расстояние</p>
      <p><span>${this.distance} км</span></p>
    `;

    return card;
  }
}

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11)
];

const deliveryList = document.getElementById('delivery-list');
deliveryArr.forEach(delivery => {
  deliveryList.appendChild(delivery.createCard());
});