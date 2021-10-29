function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".widget");
console.log(button);

button.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick() {}
