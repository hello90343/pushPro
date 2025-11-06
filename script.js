const books = [];
const readedBooks = [];

function addToArray() {
    let inputValue = document.getElementById('inputField');
    books.push(inputValue.value)
    renderBooks()
    inputValue.value = "";
}

function renderBooks() {
    let content = document.getElementById('bookListContainer');
    content.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const element = books[i];

        content.innerHTML += /*html*/`
            <div>${element}</div>
            <button onclick="changeToReaded(${i})">gelesen</button>
            <button onclick="deleteBook(${i})">löschen</button>
        `
    }
}

function deleteBook(i) {
    books.splice(i, 1);
    renderBooks()
}

function changeToReaded(i) {
    let contentReaded = document.getElementById('readedList');
    let bookName = books[i];
    readedBooks.push(bookName);
    deleteBook(i);

    for (let i = 0; i < readedBooks.length; i++) {
        const element = readedBooks[i];

        contentReaded.innerHTML += /*html*/`
            <div>${element}</div>
        `
    }
}