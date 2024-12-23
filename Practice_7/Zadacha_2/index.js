const heights = [164, 157, 160, 143, 170];

const heightList = document.querySelector('.height-list');

function displayHeights(filteredHeights = heights) {
  heightList.innerHTML = '';
  filteredHeights.forEach((height, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}) ${height}`;
    heightList.appendChild(li);
  });
}

document.querySelector('.add-height').addEventListener('click', () => {
  const newHeight = prompt('Введите рост ученика (в см):');
  if (!newHeight) {
    alert('Рост не введён!');
    return;
  }

  const heightValue = parseInt(newHeight, 10);
  if (isNaN(heightValue)) {
    alert('Введите корректное число!');
    return;
  }

  heights.push(heightValue);
  displayHeights();
});

document.querySelector('.filter-height').addEventListener('click', () => {
  const minHeight = prompt('Введите минимальный рост для фильтрации:');
  if (!minHeight) {
    displayHeights();
    return;
  }

  const minHeightValue = parseInt(minHeight, 10);
  if (isNaN(minHeightValue)) {
    alert('Введите корректное число!');
    return;
  }

  const filteredHeights = heights.filter(height => height >= minHeightValue);
  displayHeights(filteredHeights);
});

displayHeights();