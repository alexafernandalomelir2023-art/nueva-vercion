 const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalImages = document.querySelectorAll(".carousel img").length;

function showSlide(i) {
  if (i >= totalImages) {
    index = 0;
  } else if (i < 0) {
    index = totalImages - 1;
  }
  carouselContainer.style.transform = `translateX(${-index * 800}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  showSlide(index);
});

// Carrusel automático cada 3 segundos
setInterval(() => {
  index++;
  showSlide(index);
}, 3000);