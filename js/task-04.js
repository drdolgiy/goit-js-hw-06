let counterValue = 0;

const increaseButton = document.querySelector('[data-action="decrement"]');

const reduceButton = document.querySelector('[data-action="increment"]');

const initialValue = document.querySelector('#value');


increaseButton.addEventListener('click', onIncreaseButtonClick );
function onIncreaseButtonClick() {
   counterValue += 1;
 initialValue.textContent = counterValue ;
}

reduceButton.addEventListener('click', onReduceButtonClick );
function onReduceButtonClick() {
   counterValue -= 1;
 initialValue.textContent = counterValue ;
}

