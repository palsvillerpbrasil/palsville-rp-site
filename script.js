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
    slideAtual = slides.length - 1;
  }

  slides[slideAtual]
    .classList.add("ativo");
}

function proximoSlide(){
  slideAtual++;
  mostrarSlide(slideAtual);
}

function voltarSlide(){
  slideAtual--;
  mostrarSlide(slideAtual);
}

setInterval(() => {
  proximoSlide();
}, 5000);

/* ========================= */
/* STATUS REAL */
/* ========================= */

async function carregarServidor(){

  try{

    const resposta =
    await fetch(
      "http://localhost:3000/server-status"
    );

    const dados =
    await resposta.json();

    const playerBox =
    document.getElementById("playersOnline");

    const statusBox =
    document.querySelector(".online");

    if(playerBox){

      playerBox.innerHTML =
      `${dados.players}/${dados.maxPlayers} Online`;

    }

    if(statusBox){

      statusBox.innerHTML =
      dados.status === "online"
      ? "🟢 ONLINE"
      : "🔴 OFFLINE";

    }

  }catch(erro){

    console.log(erro);

  }

}

carregarServidor();

setInterval(() => {
  carregarServidor();
}, 10000);
