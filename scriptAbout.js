const addFactBtn = document.querySelector("#addFact");
const inputFact = document.querySelector("#inputFact");
const factsBlock = document.querySelector("#facts-block");

let facts = JSON.parse(localStorage.getItem("facts")) || [
  "Сергій любить програмувати",
  "Сергій вагітний",
];

renderFacts();

addFactBtn.addEventListener("click", addFact);

function saveAndRender() {
  localStorage.setItem("facts", JSON.stringify(facts));
  renderFacts();
}

function addFact() {
  const fact = inputFact.value.trim();
  if (!fact) return;
  facts.push(fact);

  inputFact.value = "";

  saveAndRender();
}

function deleteFact(index) {
  facts.splice(index, 1);
  saveAndRender();
}

function renderFacts() {
  factsBlock.innerHTML = "";

  facts.forEach((item, index) => {
    const div = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Удалити";

    button.addEventListener("click", () => deleteFact(index));

    div.appendChild(p);
    div.appendChild(button);
    factsBlock.appendChild(div);
  });
}

inputFact.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addFact();
});
