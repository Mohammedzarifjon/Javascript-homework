const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const list = document.getElementById('list');

const addItem = () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    list.appendChild(newItem);
    removeButton.disabled = false; 
};

const removeItem = () => {
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
    if (list.children.length === 0) {
        removeButton.disabled = true;
    }
};

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);

removeButton.disabled = true;