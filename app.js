// Book Class
//  resps a bok
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class
//  handle UI task
class UI {
  static displayBook() {
    const StoredBook = [
      {
        title: "Book One",
        author: "John Doe",
        isnb: "1234"
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isnb: "1111"
      }
    ];

    const books = StoredBook;
    // loop over each book in local storage and make a table row
    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    // make a table row element
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-dange btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class
// handles local storange

// Event - Display book
document.addEventListener("DOMContentLoaded", UI.displayBook);

// Event Class - add book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //  instataite book
  const book = new Book(title, author, isbn);
  console.log(book);
});

// Event - remove book
