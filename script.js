const myLibrary = [
	{
		name: "For Whom the Bell Tolls",
		author: "Ernest Hemingway",
		coverUrl:
			"https://upload.wikimedia.org/wikipedia/en/thumb/4/48/ErnestHemmingway_ForWhomTheBellTolls.jpg/178px-ErnestHemmingway_ForWhomTheBellTolls.jpg",
		pages: 79,
		read: true,
	},
	{
		name: "Deep Work",
		author: "Carl Newport",
		coverUrl:
			"https://booksandyou.in/cdn/shop/files/DeepWorkCalNewport_1_2.jpg",
		pages: 224,
		read: true,
	},
	{
		name: "Foundation",
		author: "Isaac Asimov",
		coverUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvfKxS48_gMjbPXtN8Oyxvboguy6hsQ3AqA&s",
		pages: 189,
		read: false,
	},
	{
		name: "Gone With the Wind",
		author: "Margaret Mitchell",
		coverUrl:
			"https://m.media-amazon.com/images/I/612gOvRX85L._AC_UF1000,1000_QL80_.jpg",
		pages: 542,
		read: false,
	},
	{
		name: "Life of Pi",
		author: "Yann Martel",
		coverUrl:
			"https://m.media-amazon.com/images/I/816NlEQFMOL._AC_UF1000,1000_QL80_.jpg",
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

		//insert book image

		const coverContainer = document.createElement("div");
		const coverImage = document.createElement("img");

		bookContainer.appendChild(coverContainer);
		coverContainer.append(coverImage);
		coverImage.setAttribute("src", book.coverUrl);
		coverImage.setAttribute("class", "coverImage");

		//insertbook name and info.
		bookContainer.append(infoSection);
		infoSection.setAttribute("class", "infoSection");
		infoSection.innerHTML = `<h2>${book.name}</h2> <br><b>${book.author}</b>.<br> ${book.pages} Pages.`;

		libraryContainer.appendChild(bookContainer);

		//add a delete button
		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Remove";
		deleteButton.setAttribute("class", "deleteButton");
		bookContainer.appendChild(deleteButton);

		deleteButton.addEventListener("click", () => {
			libraryContainer.removeChild(bookContainer);
		});

		//add a read toggle button
		const toggleButton = document.createElement("button");
		bookContainer.appendChild(toggleButton);
		toggleButton.setAttribute("class", "toggleButton");

		toggleButton.addEventListener("click", () => {
			if (book.read == true) {
				toggleButton.innerHTML = "Mark as Unread";
			} else {
				toggleButton.innerHTML = "Mark as Read";
			}
		});
	});
}

displayBooks();

class Book {
	constructor(name, author, pages, coverUrl, read) {
		// the constructor
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.coverUrl = coverUrl;
		this.read = read;
	}
}

let addBookToLibrary = document.getElementById("submitButton");

addBookToLibrary.addEventListener("click", () => {
	let bookName = document.getElementById("bookName").value;
	let authorName = document.getElementById("bookAuthor").value;
	let pageCount = document.getElementById("totalPages").value;
	let coverUrl = document.getElementById("coverUrl").value;
	let readStatus = document.getElementById("checkBox").checked;

	const newBook = new Book(
		(name = bookName),
		(author = authorName),
		(pageCount = pageCount),
		(coverUrl = coverUrl),
		(read = readStatus)
	);

	console.log(newBook);

	myLibrary.unshift(newBook);
	displayBooks();
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

closeForm();
