const books = [
    "Мастер и Маргарита",
    "Гарри Поттер",
    "За пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"
  ];
  
  const bookList = document.querySelector('.book-list');
  
  function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}) ${book}`;
      bookList.appendChild(li);
    });
  }
  
  document.querySelector('.add-book').addEventListener('click', () => {
    const newBook = prompt('Введите название книги:');
    if (!newBook) {
      alert('Название книги не введено!');
      return;
    }
    books.push(newBook); 
    displayBooks();
  });
  
  document.querySelector('.search-book').addEventListener('click', () => {
    const searchQuery = prompt('Введите название книги для поиска:');
    if (!searchQuery) {
      alert('Введите название для поиска!');
      return;
    }
  
    const bookIndex = books.findIndex(book => book.toLowerCase() === searchQuery.toLowerCase());
  
    if (bookIndex === -1) {
      alert('Книга не найдена!');
      return;
    }
  
    const listItems = document.querySelectorAll('.book-list li');
    listItems.forEach(item => item.classList.remove('highlight')); 
    listItems[bookIndex].classList.add('highlight');
  });
  
  displayBooks();