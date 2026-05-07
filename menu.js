const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".menu-slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});


const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});


const navItems = document.querySelectorAll(".sidebar li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});