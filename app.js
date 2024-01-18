const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  if (h1.className === "active") {
    h1.className = ""; // remove the class name
  } else {
    h1.className = "active";
  }
}

addEventListener("click", handleTitleClick);
