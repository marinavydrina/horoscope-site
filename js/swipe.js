const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    cards.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    cards[index].classList.add("active");
  });
});
