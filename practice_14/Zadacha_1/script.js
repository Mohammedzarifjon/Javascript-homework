let editIndex = null;

function updateMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const watched = document.getElementById('watched').checked ? 'Да' : 'Нет';

    const table = document.getElementById('movieTable');

    if (editIndex !== null) {
        const row = table.rows[editIndex];
        row.cells[0].innerText = title;
        row.cells[1].innerText = genre;
        row.cells[2].innerText = year;
        row.cells[3].innerText = watched;
    } else {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${title}</td>
            <td>${genre}</td>
            <td>${year}</td>
            <td>${watched}</td>
            <td class="actions">
                <button onclick="editMovie(this)">Редактировать</button>
                <button onclick="deleteMovie(this)">Удалить</button>
            </td>
        `;
    }

    clearForm();
}

function editMovie(button) {
    const row = button.parentElement.parentElement;
    editIndex = row.rowIndex - 1;

    document.getElementById('title').value = row.cells[0].innerText;
    document.getElementById('genre').value = row.cells[1].innerText;
    document.getElementById('year').value = row.cells[2].innerText;
    document.getElementById('watched').checked = row.cells[3].innerText === 'Да';
}

function deleteMovie(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    clearForm();
}

function cancelEdit() {
    clearForm();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('year').value = '';
    document.getElementById('watched').checked = false;
    editIndex = null;
}