const categoriesList = document.querySelector('#categories').children;
console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].forEach(element => {
  const title = element.firstElementChild.textContent;
  console.dir(`Category: ${title}`);

  const allElements = element.querySelectorAll('li');
  console.dir(`Elements: ${allElements.length}`);
});
