/* PROFISSÕES */

let profissaoAtual = 0;

const profissoes =
document.querySelectorAll(".profissao-slide");

function mostrarProfissao(index){

  profissoes.forEach(profissao =>
    profissao.classList.remove("ativo-profissao")
  );

  if(index >= profissoes.length){
    profissaoAtual = 0;
  }

  if(index < 0){
    profissaoAtual =
    profissoes.length - 1;
  }

  profissoes[profissaoAtual]
    .classList.add("ativo-profissao");
}

function proximaProfissao(){

  profissaoAtual++;

  mostrarProfissao(profissaoAtual);

}

function voltarProfissao(){

  profissaoAtual--;

  mostrarProfissao(profissaoAtual);

}
