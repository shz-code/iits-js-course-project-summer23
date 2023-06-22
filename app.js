const books = [
  {
    name: "Slow Horses (Deluxe Edition)",
    author: "Mick Herron",
    thumbnail:
      "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    desc: "Lorem",
    price: 140,
    rating: 3,
    id: 1,
  },
  {
    name: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    desc: "Lorem",
    thumbnail:
      "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
    price: 13.99,
    rating: 2,
    id: 2,
  },
];

// Dynamic individual bookItem
function bookItem(book) {
  return `
    <div class="book col-lg-6 mb-4">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-3 book_img">
          <img
            src="${book.thumbnail}"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-9">
          <div class="card-body text-center text-md-start">
            <h5 class="card-title">${book.name}</h5>
            <p class="card-text">
            ${book.desc}
            </p>
            <p class="card-text">${book.author}</p>
            <p class="card-text">${book.price}</p>
            <p class="card-text"><small class="opacity-50">${book.rating} /5</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}

// Select all the required DOM elements
const allBooks = document.querySelector(".all_books");
const searchForm = document.querySelector("#search-form");
const searchVal = document.querySelector("#searchVal");
const showBooks = document.querySelector("#showBooks");
const showForm = document.querySelector("#showForm");
const addNewBookForm = document.querySelector("#addNewBookForm");
const name = document.querySelector("#name");
const author = document.querySelector("#author");
const thumbnail = document.querySelector("#thumbnail");
const desc = document.querySelector("#desc");
const price = document.querySelector("#price");
const rating = document.querySelector("#rating");

let searchValueLocal = "";

/*
renderBooks function renders all the books to the DOM
it is also used to filter out books and show conditional msg
if no book is found.
*/
function renderBooks() {
  allBooks.innerHTML = "";
  books.map(function (book) {
    if (
      book.name
        .toLocaleLowerCase()
        .includes(searchValueLocal.toLocaleLowerCase())
    ) {
      allBooks.innerHTML += bookItem(book);
    }
  });
  if (allBooks.innerHTML === "")
    allBooks.innerHTML = `<span class="bg-danger text-white py-2 rounded">Nothing Found</span>`;
}
// renderBooks initial call
renderBooks();

// View showBooks block
function activeShowBooks() {
  showBooks.style.display = "block";
  showForm.style.display = "none";
}
// View addNewBook block
function activeShowForm() {
  showBooks.style.display = "none";
  showForm.style.display = "block";
}
// Initial call
activeShowBooks();

// Search functionality
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchValueLocal = searchVal.value;
  // searchVal.value = "";
  renderBooks();
});

// Add new book form
/*
  here (name) is DOM input element and (name.value) is the value written in input field
*/
addNewBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let lastObj = books[books.length - 1];
  let lastId = 0;
  if (lastObj != undefined) {
    lastId = lastObj.id;
  }
  let newObj = {
    id: lastId + 1,
    name: name.value,
    author: author.value,
    thumbnail: thumbnail.value,
    desc: desc.value,
    price: price.value,
    rating: rating.value,
  };
  books.push(newObj); // Adding new book
  renderBooks(); // After adding new book rerendering DOM
  activeShowBooks(); // After adding new book change to showBooks view
});
