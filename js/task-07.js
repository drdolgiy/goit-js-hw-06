const inputTextControl = document.querySelector('#font-size-control');
console.log(inputTextControl);

const outputText = document.querySelector('#text');
console.log(outputText);

inputTextControl.addEventListener('input', outputTextFontSizeChange);

function outputTextFontSizeChange(event) {
return outputText.style.fontSize = event.currentTarget.value + "px"
}
