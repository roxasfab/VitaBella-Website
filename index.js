const slides = document.querySelectorAll(".drink-slide, .active-drink-slide");
const nextBtn = document.querySelector(".button.right");
const prevBtn = document.querySelector(".button.left");
const track = document.querySelector(".slider-container");

let currentIndex = 3;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active-drink-slide");
    slide.classList.add("drink-slide");

    if (index === currentIndex) {
      slide.classList.remove("drink-slide");
      slide.classList.add("active-drink-slide");
    }
  });

  const slideWidth = slides[0].offsetWidth + 40;
  const container = document.querySelector(".favorites-slider");
  const containerWidth = container.offsetWidth;

  const offset = currentIndex * slideWidth - (containerWidth / 2 - slideWidth / 2);
  
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

(function () {
  const slides = [
    {
      title: "The House Of Healthy Indulgence",
      text: "Our mission is to create a healthy indulgence. Something that looks like a treat, tastes like a dessert, but is thoughtfully made to nourish you. Because at Vita Bella, it’s not your ordinary café drink but a moment of comfort, beauty, and balance in every sip."
    },
    {
      title: "Flavors That Taste Like Home",
      text: "Vita Bella is a Filipino café brand inspired by the warm and familiar café culture in the Philippines. Cafés have long been places where people gather to sit down, relax, and enjoy meaningful moments over cacao and coffee. This sense of comfort and nostalgia is what we ought to bring. A space where flavors feel familiar and invites you to slow down and enjoy the moment."
    },
    {
      title: "Brewed Wellness Into Perfection",
      text: " At Vita Bella, our drinks are thoughtfully crafted with ingredients like collagen, L-carnitine, moringa, cacao, ginseng, and natural stevia. Each ingredient is chosen to create beverages that are both indulgent and nourishing by blending sweetness, beauty, and wellness."
    }
  ];

  let index = 0;

  const title = document.getElementById("card-title");
  const text = document.getElementById("card-text");
  const card = document.querySelector(".about-card");

  const nextBtn = document.querySelector(".about-button.right");
  const prevBtn = document.querySelector(".about-button.left");

  nextBtn.addEventListener("click", () => changeSlide(1));
  prevBtn.addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    card.classList.add("fade");

    setTimeout(() => {
      index = (index + direction + slides.length) % slides.length;

      title.textContent = slides[index].title;
      text.textContent = slides[index].text;

      card.classList.remove("fade");
    }, 300);
  }
})();

updateSlider();