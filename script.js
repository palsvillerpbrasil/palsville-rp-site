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

  if (slides.length > 0) {
    slides[slideAtual].classList.add("ativo");
  }
}

function proximoSlide() {
  slideAtual++;
  mostrarSlide(slideAtual);
}

function voltarSlide() {
  slideAtual--;
  mostrarSlide(slideAtual);
}

if (slides.length > 0) {
  setInterval(proximoSlide, 5000);
}

const SERVER_ID = "38944014";

async function carregarServidor() {
  try {
    const resposta = await fetch(`https://api.battlemetrics.com/servers/${SERVER_ID}`);
    const dados = await resposta.json();
    const atributos = dados.data.attributes;

    const jogadores = atributos.players;
    const maxJogadores = atributos.maxPlayers;
    const status = atributos.status;

    const playerBox = document.getElementById("playersOnline");
    const statusBox = document.querySelector(".online");

    if (playerBox) {
      playerBox.innerHTML = `${jogadores}/${maxJogadores} Online`;
    }

    if (statusBox) {
      statusBox.innerHTML = status === "online" ? "🟢 ONLINE" : "🔴 OFFLINE";
    }

  } catch (erro) {
    const playerBox = document.getElementById("playersOnline");
    const statusBox = document.querySelector(".online");

    if (playerBox) playerBox.innerHTML = "Indisponível";
    if (statusBox) statusBox.innerHTML = "⚠️ ERRO";
  }
}

carregarServidor();
setInterval(carregarServidor, 30000);
