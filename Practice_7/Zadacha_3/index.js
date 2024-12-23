const items = ["Кофе", "Молоко", "Арбуз", "Сахар", "Яблоки", "Книга", "Макароны"];

const itemList = document.querySelector('.item-list');

function displayItems() {
  items.sort((a, b) => a.localeCompare(b));

  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}) ${item}`;
    itemList.appendChild(li);
  });
}

document.querySelector('.add-item').addEventListener('click', () => {
  const newItem = prompt('Введите название товара:');
  if (!newItem) {
    alert('Название товара не введено!');
    return;
  }

  items.push(newItem);
  displayItems();
});

displayItems();