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
        isbn: "1234"
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "1111"
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
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // remove after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store Class
// handles local storange

// Event - Display book
document.addEventListener("DOMContentLoaded", UI.displayBook);

// Event Class - add book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  // get form valuesc
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  if (title === "" || author === "" || isbn === "") {
    // alert("Please  fill in all fields");
    UI.showAlert("Please  fill in all fields", "danger");
  } else {
    //  instataite book
    const book = new Book(title, author, isbn);
    console.log(book);

    // add book to UI
    UI.addBookToList(book);
    UI.showAlert("Success - Book Added", "success");

    // clear feilds
    UI.clearFields();
  }
});

// Event - remove book
document.querySelector("#book-list").addEventListener("click", e => {
  UI.deleteBook(e.target);
  UI.showAlert("Success - Book Removed", "success");
});
