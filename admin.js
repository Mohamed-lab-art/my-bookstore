document.getElementById("book-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ title, author, price, image });

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added!");
});
