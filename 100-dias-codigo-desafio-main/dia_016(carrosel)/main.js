document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const btns = document.querySelectorAll(".btn");
    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            btns[i].classList.toggle("active", i === index);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    };

    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });


    setInterval(nextSlide, 3000);
});