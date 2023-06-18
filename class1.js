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
  
  // Select all the required DOM elements
  const allBooks = document.querySelector(".all_books");
  const showBooks = document.querySelector("#showBooks");
  const showForm = document.querySelector("#showForm");
  
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
              <p class="card-text">${book.price} Taka</p>
              <p class="card-text"><small class="opacity-50">${book.rating}/5</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  
  /*
  renderBooks function renders all the books to the DOM
  */
  function renderBooks() {
    allBooks.innerHTML = "";
    books.map(function (book) {
        allBooks.innerHTML += bookItem(book);

    });
  }
  
  // renderBooks initial call
  renderBooks();
  
  // View showBooks block
  function activeShowBooks() {
    showBooks.style.display = "block"; // Hiding showBook block
    showForm.style.display = "none";
  }
  
  // View addNewBook block
  function activeShowForm() {
    showBooks.style.display = "none";
    showForm.style.display = "block";
  }

  activeShowBooks();