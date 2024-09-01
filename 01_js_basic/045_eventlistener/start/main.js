const h1Element = document.querySelector("h1");
console.log(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "change title";

const btnE1 = document.querySelector("button");
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log("hello");
};
btnE1.addEventListener("click", helloFn);
