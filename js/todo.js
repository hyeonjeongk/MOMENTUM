const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") : 윗줄과 동일한 결과
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 새로운 변수에 toDoInput의 value 복사
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
