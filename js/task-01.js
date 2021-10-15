const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Element:', element.querySelectorAll('li').length)
});
