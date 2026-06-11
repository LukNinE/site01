const aboutBtn = document.querySelector("#about");
const detailBtn = document.querySelector("#detailsAbout");

aboutBtn.addEventListener("click", aboutHTML);
detailBtn.addEventListener("click", modalAbout);

function modalAbout() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("modal-close-btn");
  closeBtn.textContent = "✕";

  const title = document.createElement("h1");
  title.textContent = "Звязок з Сергiйом";

  const facts = document.createElement("div");
  facts.classList.add("facts");
  facts.innerHTML = `
    <p>Подзвонити Сергію +380*********</p>
    <p>Написати Сергію в TG @*******</p>
  `;

  modal.appendChild(closeBtn);
  modal.appendChild(title);
  modal.appendChild(facts);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  function closeModal() {
    overlay.remove();
  }

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function aboutHTML() {
  window.location.href = "about/about.html";
}
