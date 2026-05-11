/* ========================= */
/* CARROSSEL HOME */
/* ========================= */

let slideAtual = 0;

const slides =
document.querySelectorAll(".slide");

function mostrarSlide(index){

  slides.forEach(slide =>
    slide.classList.remove("ativo")
  );

  if(index >= slides.length){
    slideAtual = 0;
  }

  if(index < 0){
    slideAtual =
    slides.length - 1;
  }

  if(slides.length > 0){

    slides[slideAtual]
    .classList.add("ativo");

  }

}

function proximoSlide(){

  slideAtual++;

  mostrarSlide(slideAtual);

}

function voltarSlide(){

  slideAtual--;

  mostrarSlide(slideAtual);

}

if(slides.length > 0){

  setInterval(() => {

    proximoSlide();

  }, 5000);

}

/* ========================= */
/* STATUS SERVIDOR */
/* ========================= */

async function carregarServidor(){

  try{

    const resposta =
    await fetch("/api/server-status");

    const dados =
    await resposta.json();

    const playerBox =
    document.getElementById("playersOnline");

    const statusBox =
    document.querySelector(".online");

    const rankBox =
    document.getElementById("serverRank");

    const pingBox =
    document.getElementById("serverPing");

    if(playerBox){

      playerBox.innerHTML =
      `${dados.playersOnline}/${dados.maxPlayers} Online`;

    }

    if(statusBox){

      statusBox.innerHTML =
      dados.status === "online"
      ? "🟢 ONLINE"
      : "🔴 OFFLINE";

    }

    if(rankBox){

      rankBox.innerHTML =
      dados.rank
      ? `#${dados.rank}`
      : "Sem colocação";

    }

    if(pingBox){

      pingBox.innerHTML =
      dados.ping
      ? `${dados.ping}ms`
      : "N/A";

    }

  }catch(erro){

    const playerBox =
    document.getElementById("playersOnline");

    const statusBox =
    document.querySelector(".online");

    const rankBox =
    document.getElementById("serverRank");

    const pingBox =
    document.getElementById("serverPing");

    if(playerBox)
      playerBox.innerHTML =
      "Indisponível";

    if(statusBox)
      statusBox.innerHTML =
      "⚠️ ERRO";

    if(rankBox)
      rankBox.innerHTML =
      "Indisponível";

    if(pingBox)
      pingBox.innerHTML =
      "N/A";

  }

}

carregarServidor();

setInterval(() => {

  carregarServidor();

}, 10000);

/* ========================= */
/* CARROSSEL PROFISSÕES */
/* ========================= */

let profissaoAtual = 0;

const profissoesSlides =
document.querySelectorAll(".job-slide");

function mostrarProfissao(index){

  if(profissoesSlides.length === 0)
    return;

  profissoesSlides.forEach(slide => {

    slide.classList.remove("job-active");

  });

  if(index >= profissoesSlides.length){

    profissaoAtual = 0;

  }

  if(index < 0){

    profissaoAtual =
    profissoesSlides.length - 1;

  }

  profissoesSlides[profissaoAtual]
  .classList.add("job-active");

}

function proximaProfissao(){

  profissaoAtual++;

  mostrarProfissao(profissaoAtual);

}

function voltarProfissao(){

  profissaoAtual--;

  mostrarProfissao(profissaoAtual);

}
