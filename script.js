const myLibrary = [];

class Book {
	constructor(name, author, pages, read) {
		// the constructor
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let addBookToLibrary = document.querySelector("#submitButton");
addBookToLibrary.addEventListener("click", () => {
	let bookName = document.getElementById("bookName").value;
	let authorName = document.getElementById("bookAuthor").value;
	let pages = document.getElementById("totalPages").value;
	let read = document.getElementById("checkBox").value;

	console.log(bookName, authorName, pages, read);
});

// Show Hide the Add Section //

function openForm() {
	let addForm = document.querySelector(".addForm");
	addForm.classList.toggle("closeToggle");
}

function closeForm() {
	let addForm = document.querySelector(".addForm");
	addForm.classList.toggle("closeToggle");
}
