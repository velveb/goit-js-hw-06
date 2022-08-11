

const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((el) => {
  return console.log(`Category: ${el.querySelector("h2").textContent}
Elements: ${ el.querySelectorAll("li").length}`)
});






