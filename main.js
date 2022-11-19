let count = 0;

const incrementEl = document.querySelector("#increment-btn");
const saveEl = document.querySelector("#save-btn");
const countEl = document.querySelector("#count-el");
const previousEl = document.querySelector("#previous-el");

incrementEl.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

saveEl.addEventListener("click", function () {
  previousEl.textContent += count + ",";
  countEl.textContent = 0;
  count = 0;
});
