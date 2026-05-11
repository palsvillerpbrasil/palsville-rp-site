let slideAtual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("ativo"));

  if (index >= slides.length) {
    slideAtual = 0;
  }

  if (index < 0) {
    slideAtual = slides.length - 1;
  }

  slides[slideAtual].classList.add("ativo");
}

function proximoSlide() {
  slideAtual++;
  mostrarSlide(slideAtual);
}

function voltarSlide() {
  slideAtual--;
  mostrarSlide(slideAtual);
}

setInterval(() => {
  proximoSlide();
}, 5000);