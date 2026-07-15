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
addBookToLibrary("Those who perish", "George R. Martin", 5, "reading");

console.log(myLibrary)

function displayBook (array){
    for (const book of array){
        console.log(book.title, book.author, book.rating, book.status, book.bookId)
    }
};




