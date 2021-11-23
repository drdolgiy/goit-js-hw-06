const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const list = [];

const listItem = ingredients.forEach(ingredient => {

  const listEl = document.createElement('li');

  console.log(listEl);

  listEl.textContent = ingredient;

  listEl.classList.add('item');

  list.push(listEl)
});

  ingredientsEl.append(...list);
