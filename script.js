const inputForm = document.querySelector(".hidden");

const add_btn = document.querySelector("#add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");

let check = document.querySelector(".check");

document.querySelector(".addItem-btn").addEventListener("click", () => {
  inputForm.style.display = "flex";
});
let listLenght = list.lenght;

const generateTempalate = (todo, due_date) => {
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}"  required>
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                    <span class="due">Due-${due_date}</span>
                  </label>
                 
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = document.querySelector("#new-Item").value;

  const due_date = document.querySelector("#due-date").value;

  if (todo != "" && due_date != "") {
    listLenght = listLenght + 1;
    generateTempalate(todo, due_date);
    document.querySelector("#new-Item").value = "";
    document.querySelector("#due-date").value = "";
  }
  inputForm.style.display = "none";
}

inputForm.addEventListener("submit", addTodos);
add_btn.addEventListener("click", addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}
todoList.addEventListener("click", deleteTodos);
