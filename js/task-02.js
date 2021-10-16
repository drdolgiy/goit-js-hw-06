const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// console.log(ingredients)

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);
ingredients.forEach(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item');
  ingredientsEl.append(list);
  // console.log(ingredientsEl);
} ) 