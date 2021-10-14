const numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', numberOfCategories.length);

const list = numberOfCategories[0].lastElementChild.querySelectorAll('li');
console.log('Category: ', numberOfCategories[0].firstElementChild.textContent);
console.log('Element: ', list.length);

const firstList = numberOfCategories[1].lastElementChild.querySelectorAll('li');
console.log('Category: ', numberOfCategories[1].firstElementChild.textContent);
console.log('Element: ', firstList.length);

const secondList = numberOfCategories[2].lastElementChild.querySelectorAll('li');
console.log('Category: ', numberOfCategories[2].firstElementChild.textContent);
console.log('Element: ', secondList.length);
