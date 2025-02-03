const books = JSON.parse(localStorage.getItem("books")) || [];
const bookList = document.getElementById("book-list");

function displayBooks() {
    bookList.innerHTML = books.map(book => `
        <div class="book">
            <img src="${book.image}" alt="${book.title}" width="100">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price}</p>
        </div>
    `).join("");
}

displayBooks();
