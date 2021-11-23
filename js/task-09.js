function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
console.log(button);

const spanColor = document.querySelector("span.color")
console.log(spanColor);

button.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick(evt) {
  spanColor.textContent = getRandomHexColor().toString();

  document.body.style.backgroundColor = getRandomHexColor()
}
