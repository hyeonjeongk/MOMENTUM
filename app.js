const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = ""; // remove the class name
  } else {
    h1.className = clickedClass;
  }
}

addEventListener("click", handleTitleClick);
