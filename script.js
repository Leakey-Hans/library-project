const myLibrary = [];

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
