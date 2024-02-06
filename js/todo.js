const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") : 윗줄과 동일한 결과
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  // console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  // to do list 출력 함수
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTodo; // span의 text변경(사용자가 입력한 newTodo값)

  const button = document.createElement("button");
  button.innerText = "❌"; // button의 text변경
  button.addEventListener("click", deleteToDo); // 삭제버튼 클릭시 실행

  li.appendChild(span); // span을 li 내부로
  li.appendChild(button); // button을 li 내부로
  toDoList.appendChild(li); // toDoList에 li 넣기
}

function handleToDoSubmit(event) {
  // 사용자가 to do 입력 후 enter 누르면 실행될 함수
  event.preventDefault();
  const newTodo = toDoInput.value; // 새로운 변수에 toDoInput의 value 복사
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
