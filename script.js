const myLibrary = [];
const booksContainer = document.querySelector(".book-section");
const addBookBtn = document.querySelector(".add-bookBtn");
const bookForm = document.querySelector(".addBook-form");
const formRemoveBtn = document.querySelector(".form-button");
const addToLibraryBtn = document.querySelector(".form-button2");


addBookBtn.addEventListener("click", () => {
    bookForm.classList.remove("hidden");
});

formRemoveBtn.addEventListener("click", () => {
    bookForm.classList.add("hidden");
});


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

//Adding Book to Array

function addBookToLibrary (title, author, rating, status){
    const book = new Book(title, author, rating, status);
    myLibrary.push(book);
};


//Book Display Function

function displayBook (array){
    booksContainer.innerHTML = '';
    for (const book of array){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");

        const bookCover = document.createElement("div");
        bookCover.classList.add("book-cover");

        const bookMeta = document.createElement("div");
        bookMeta.classList.add("book-meta");

        const bookActions = document.createElement("div");
        bookActions.classList.add("book-actions");

        const deleteBtn = document.createElement("button");
        const readBtn = document.createElement("button");
        
        deleteBtn.classList.add("book-actions-btn1")
        readBtn.classList.add("book-actions-btn2")

        deleteBtn.textContent = "Delete";
        readBtn.textContent = "Mark as read"
        
        

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
        bookCard.appendChild(bookActions);
        bookActions.appendChild(deleteBtn);
        bookActions.appendChild(readBtn);
        bookMeta.appendChild(bookTitle);
        bookMeta.appendChild(bookAuthor);
        bookMeta.appendChild(bookRating);
        bookMeta.appendChild(bookStatus);
        bookMeta.appendChild(bookID);


        deleteBtn.addEventListener("click", () => {
            booksContainer.removeChild(bookCard);
            myLibrary.pop(book);
        });
    };

};


addToLibraryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const titleValue = document.querySelector("#book-title").value;
    const authorValue = document.querySelector("#author").value;
    const ratingValue = document.querySelector("#rating").value;
    const statusValue = document.querySelector("#status").value;

    addBookToLibrary(titleValue, authorValue, ratingValue, statusValue);
    displayBook(myLibrary);
    bookForm.reset();
    bookForm.classList.add("hidden");

})



