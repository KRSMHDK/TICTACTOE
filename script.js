let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ". " + pages + " pages. " + read;
  };
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function addForm() {
  let inputbook = document.getElementById("inputbook");
  var f = document.createElement("form");
  f.setAttribute("method", "post");
  f.setAttribute("action", "submit.php");

  var inputTitle = document.createElement("input"); //input element, text
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "username");
  inputTitle.setAttribute("placeholder", "Title");

  var inputAuthor = document.createElement("input"); //input element, text
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "username");
  inputTitle.setAttribute("placeholder", "inputAuthor");

  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");

  f.appendChild(inputTitle);
  f.appendChild(inputAuthor);
  f.appendChild(s);

  inputbook.append(f);
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(myLibrary);
