const prices = [100, 500, 250, 750, 300];

const priceList = document.getElementById('priceList');
const sortAscButton = document.getElementById('sortAscButton');
const sortDescButton = document.getElementById('sortDescButton');

const displayPrices = (pricesArray) => {
    priceList.innerHTML = '';
    pricesArray.forEach(price => {
        const li = document.createElement('li');
        li.textContent = `${price} ₽`;
        priceList.appendChild(li);
    });
};

const sortAsc = () => {
    const sortedPrices = [...prices].sort((a, b) => a - b);
    displayPrices(sortedPrices);
};

const sortDesc = () => {
    const sortedPrices = [...prices].sort((a, b) => b - a);
    displayPrices(sortedPrices);
};

sortAscButton.addEventListener('click', sortAsc);
sortDescButton.addEventListener('click', sortDesc);

displayPrices(prices);