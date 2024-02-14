const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") : 윗줄과 동일한 결과
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; // to do 항목들 저장할 array

function saveToDos() {
  // to do 항목들을 local storage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); // local storage 갱신
}

function paintToDo(newTodo) {
  // to do list 출력 함수 : argument로 object 받음
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text; // span의 text변경(사용자가 입력한 newTodo값)

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
  toDoInput.value = ""; // input창 비우기
  const newTodoObj = {
    // to do를 object 형식으로 만들기
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos array에 항목들 넣기
  paintToDo(newTodoObj);
  saveToDos(); // toDos array를 local storage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // localStorage에 저장된 todo가 있으면 이전값 복원
  parsedToDos.forEach(paintToDo);
}

// function sexyFilter(todo) {
//   // 해당 item을 새 array에 포함시키고 싶으면 true 리턴,
//   // 아니면 false 리턴
//   return todo.id !==
// }
