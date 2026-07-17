const myLibrary = [];
const booksContainer = document.querySelector(".book-section");

// bookId initially a parameter but removed cause it is generated automatically

function Book(title, author, rating, status) {
    if (!new.target){
        throw Error ('Constructor must be called with new Keyword');
    };
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.status = status;
    //Automatically Added
    this.bookId = crypto.randomUUID();
}

function addBookToLibrary (title, author, rating, status){
    const book = new Book(title, author, rating, status);
    myLibrary.push(book);
};

addBookToLibrary("The color Purple", "Alice Walker", 5, "reading");


console.log(myLibrary)

function displayBook (array){
    for (const book of array){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");

        const bookCover = document.createElement("div");
        bookCover.classList.add("book-cover");

        const bookMeta = document.createElement("div");
        bookMeta.classList.add("book-meta")
        

        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookRating = document.createElement("p");
        const bookStatus = document.createElement("p");
        bookStatus.classList.add("book-status")
        const bookID = document.createElement("p");

        bookTitle.textContent = `${book.title}`;
        bookAuthor.textContent = `By: ${book.author}`;
        bookRating.textContent = `${book.rating} on Goodreads`;
        bookStatus.textContent = `Status: ${book.status}`;
        bookID.textContent = book.bookId;

        booksContainer.appendChild(bookCard);
        bookCard.appendChild(bookCover);
        bookCard.appendChild(bookMeta);
        bookMeta.appendChild(bookTitle);
        bookMeta.appendChild(bookAuthor);
        bookMeta.appendChild(bookRating);
        bookMeta.appendChild(bookStatus);
        bookMeta.appendChild(bookID);

    };
};


displayBook(myLibrary)




