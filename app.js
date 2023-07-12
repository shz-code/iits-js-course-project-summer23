// https://64a5b50300c3559aa9c01831.mockapi.io/api/books/book

const books = [];

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

let searchParam = "";

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

function renderBooks() {
  // console.log(books);
    allBooks.innerHTML = "";
    books.forEach(function (book) {
        if(book.name.toLowerCase().includes(searchParam.toLowerCase()))
        {
            allBooks.innerHTML += bookItem(book);
        }
      });
}


async function getBooks() {
  allBooks.innerHTML = "Loading.....";

  let url = "https://64a5b50300c3559aa9c01831.mockapi.io/api/books/book/6";
  let option = {
    method: "GET"
  }
  try {
    let response = await fetch(url,option);
    let data = await response.json();
    console.log(data);
    // data.forEach(function(current){
    //   books.push(current);
    // });
    renderBooks();
  }
  catch (err) {
    console.log(err);
  }
}

getBooks();


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

activeShowBooks();

// Search functionality
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchParam = searchVal.value;
    renderBooks();
  });

async function postBook(newObj) {
  let url = "https://64a5b50300c3559aa9c01831.mockapi.io/api/books/book";
  let option = {
    method: "POST",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(newObj)
  }
  let response = await fetch(url,option);
  console.log(response);
}

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
  postBook(newObj);
  renderBooks(); // After adding new book rerendering DOM
  activeShowBooks(); // After adding new book change to showBooks view
});
