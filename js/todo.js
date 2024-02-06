const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") : 윗줄과 동일한 결과
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span); //span을 li 내부로
  span.innerText = newTodo; //span에 text넣기(사용자가 입력한 newTodo값)
  toDoList.appendChild(li); //toDoList에 li 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 새로운 변수에 toDoInput의 value 복사
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
