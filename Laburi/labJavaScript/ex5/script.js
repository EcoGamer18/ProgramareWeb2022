const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const slides = document.querySelectorAll("li");

let index = 0;

const moveTo = (newIndex) => {
    if (newIndex >= slides.length) {
        index = 0;
    } else if (newIndex < 0) {
        index = slides.length - 1;
    } else {
        index = newIndex;
    }

    updateSlide();
}

previous.addEventListener("click", () => moveTo(index - 1));
next.addEventListener("click", () => moveTo(index + 1));

const updateSlide = () => {
    for (const slide of slides) {
        if (slide === slides[index]) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    }
}

updateSlide();