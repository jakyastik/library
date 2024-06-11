const myLibrary = [
	{
		name: "For Whom the Bells Toll",
		author: "Ernest Hemingway",
		pages: 79,

		read: true,
	},
	{
		name: "Deep Work",
		author: "Carl Newport",
		pages: 224,

		read: true,
	},
	{
		name: "Foundation",
		author: "Isaac Asimov",
		pages: 189,

		read: false,
	},
];

function displayBooks() {
	const libraryContainer = document.querySelector(".bookList");
	libraryContainer.innerHTML = "";

	myLibrary.forEach((book) => {
		const bookContainer = document.createElement("div");
		const infoSection = document.createElement("div");
		bookContainer.setAttribute("class", "bookDiv");
		bookContainer.innerHTML = book.name;
		bookContainer.append(infoSection);
		infoSection.setAttribute("class", "infoSection");
		infoSection.innerHTML = `Written by ${book.author}. Length is ${book.pages} Pages. <br> <p>${book.note}<p>`;

		libraryContainer.appendChild(bookContainer);
	});
}

displayBooks();

class Book {
	constructor(name, author, pages, read) {
		// the constructor
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let addBookToLibrary = document.getElementById("submitButton");

addBookToLibrary.addEventListener("click", () => {
	let bookName = document.getElementById("bookName").value;
	let authorName = document.getElementById("bookAuthor").value;
	let pageCount = document.getElementById("totalPages").value;
	let readStatus = document.getElementById("checkBox").value;
	console.log(bookName, authorName, pageCount, readStatus);

	const newBook = new Book(
		(name = bookName),
		(author = authorName),
		(pageCount = pageCount),
		(read = readStatus)
	);

	myLibrary.push(newBook);
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
