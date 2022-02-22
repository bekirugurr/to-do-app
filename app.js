const draft = document.getElementById("draft");
const input = document.getElementById("draft-content");
const addButton = document.getElementById("add-button");
const toDosContainer = document.getElementById("to-dos-container");
const donesContainer = document.getElementById("dones-container");

let addFunction = () => {
  if (toDosContainer.children.length == 0) {
    let toDoHeader = document.createElement("h2");
    toDoHeader.innerHTML = "To Do";
    toDosContainer.appendChild(toDoHeader);
  }
  let toDo = document.createElement("div");
  toDo.className = "to-do";
  toDosContainer.appendChild(toDo);
  let doneButton = document.createElement("button");
  doneButton.className = "done-button";
  toDo.appendChild(doneButton);
  let toDoContent = document.createElement("p");
  toDoContent.className = "to-do-content";
  toDoContent.innerHTML = input.value;
  toDoContent.setAttribute("contenteditable", "false");
  toDo.appendChild(toDoContent);
  input.value = "";
  let editButton = document.createElement("button");
  editButton.className = "edit-button";
  toDo.appendChild(editButton);
  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  toDo.appendChild(deleteButton);
  input.focus();
};
addButton.addEventListener("click", addFunction);

toDosContainer.addEventListener("click", (e) => {
  if (e.target.className == "done-button") {
    if (donesContainer.children.length == 0) {
      let doneHeader = document.createElement("h2");
      doneHeader.innerHTML = "Dones";
      donesContainer.appendChild(doneHeader);
    }
    donesContainer.appendChild(e.target.parentElement);
  } else if (e.target.className == "edit-button") {
    if (e.target.previousSibling.getAttribute("contenteditable") == "false") {
      e.target.previousSibling.setAttribute("contenteditable", "true");
      e.target.previousSibling.focus();
      e.target.style.backgroundImage = "url(./images/save.png)";
    } else if (
      e.target.previousSibling.getAttribute("contenteditable") == "true"
    ) {
      e.target.previousSibling.setAttribute("contenteditable", "false");
      e.target.style.backgroundImage = "url(./images/pen.png)";
    }
  } else if (e.target.className == "delete-button") {
    e.target.parentElement.remove();
  }
});
donesContainer.addEventListener("click", (e) => {
    if (e.target.className == "done-button") {
      if (toDosContainer.children.length == 0) {
        let doneHeader = document.createElement("h2");
        doneHeader.innerHTML = "Dones";
        toDosContainer.appendChild(doneHeader);
      }
      toDosContainer.appendChild(e.target.parentElement);
    } else if (e.target.className == "edit-button") {
      if (e.target.previousSibling.getAttribute("contenteditable") == "false") {
        e.target.previousSibling.setAttribute("contenteditable", "true");
        e.target.previousSibling.focus();
        e.target.style.backgroundImage = "url(./images/save.png)";
      } else if (
        e.target.previousSibling.getAttribute("contenteditable") == "true"
      ) {
        e.target.previousSibling.setAttribute("contenteditable", "false");
        e.target.style.backgroundImage = "url(./images/pen.png)";
      }
    } else if (e.target.className == "delete-button") {
      e.target.parentElement.remove();
    }
  });
  
