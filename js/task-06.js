const textInput = document.querySelector('#validation-input');
// console.log(textInput)

textInput.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.target.value.length === 6) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');

    } else if (event.target.value.length === 0) {
        textInput.classList.remove('invalid');

    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }    
}

