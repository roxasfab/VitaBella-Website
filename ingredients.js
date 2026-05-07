const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".nav-dot");

let currentIndex = 0;


function updateSlider() {

    slidesContainer.style.transform =
        `translateY(-${currentIndex * 100}vh)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });

});


let isScrolling = false;

window.addEventListener("wheel", (e) => {

    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaY > 0) {

        

        if (currentIndex < slides.length - 1) {
            currentIndex++;
        }

    } else {


        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    updateSlider();

    setTimeout(() => {
        isScrolling = false;
    }, 900);

});