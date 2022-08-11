const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngridient = document.querySelector("#ingredients");
   const addModLi = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
    });
   listIngridient.append(...addModLi);

   
   console.log(listIngridient);


// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const asd = document.querySelector(".ssecond");
// const list = asd.nextElementSibling;
// console.log(list);
// // console.log(asd.textContent)



// const text = document.querySelector('.text');
// text.remove();






