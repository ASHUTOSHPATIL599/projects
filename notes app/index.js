const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from localStorage
function showNotes() {
  if (localStorage.getItem("notes")) {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }
}

// Function to update notes in localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener to create a new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src =
    "https://th.bing.com/th?id=OIP.-sVaOQil5xzVzSoRX3NcAwHaHX&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage(); // Update localStorage when a new note is created
});

// Event listener to delete a note or update note content
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateStorage(); // Update localStorage when a note is deleted
  } else if (e.target.tagName == "P") {
    updateStorage(); // Update localStorage when note content is changed
  }
});

// Event listener to handle Enter keypress
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// Event listener to display saved notes when the DOM is loaded
document.addEventListener("DOMContentLoaded", showNotes);
