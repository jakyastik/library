const myLibrary = [];

function Book(name, author, pages, read) {
	// the constructor
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {}

function openForm() {
	console.log("It works");
}

// Show Hide the Add Section //

function closeForm() {
	console.log("Close Form");
	const closeButton = document.querySelector("close");
	closeButton.style.dispay = "none";
}
