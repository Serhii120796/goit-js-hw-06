const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let items = [];
ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');
  items.push(ingredientsItem);
 });

const ingredientslist = document.querySelector('#ingredients');
ingredientslist.append(...items);
