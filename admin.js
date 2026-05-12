import { db, doc, getDoc, setDoc } from "./firebase.js";

const configRef = doc(db, "site", "config");

async function carregarConfig(){
  const snap = await getDoc(configRef);

  if(snap.exists()){
    const dados = snap.data();

    document.getElementById("titulo").value = dados.titulo || "";
    document.getElementById("descricao").value = dados.descricao || "";
    document.getElementById("discord").value = dados.discord || "";

    document.getElementById("noticia1Titulo").value = dados.noticia1Titulo || "";
    document.getElementById("noticia1Texto").value = dados.noticia1Texto || "";

    document.getElementById("noticia2Titulo").value = dados.noticia2Titulo || "";
    document.getElementById("noticia2Texto").value = dados.noticia2Texto || "";

    document.getElementById("noticia3Titulo").value = dados.noticia3Titulo || "";
    document.getElementById("noticia3Texto").value = dados.noticia3Texto || "";

    document.getElementById("eventoTitulo").value = dados.eventoTitulo || "";
    document.getElementById("eventoDescricao").value = dados.eventoDescricao || "";
    document.getElementById("eventoData").value = dados.eventoData || "";

    document.getElementById("item1Nome").value = dados.item1Nome || "";
    document.getElementById("item1Preco").value = dados.item1Preco || "";

    document.getElementById("item2Nome").value = dados.item2Nome || "";
    document.getElementById("item2Preco").value = dados.item2Preco || "";
  }
}

async function salvarConfig(){
  const dados = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    discord: document.getElementById("discord").value,

    noticia1Titulo: document.getElementById("noticia1Titulo").value,
    noticia1Texto: document.getElementById("noticia1Texto").value,

    noticia2Titulo: document.getElementById("noticia2Titulo").value,
    noticia2Texto: document.getElementById("noticia2Texto").value,

    noticia3Titulo: document.getElementById("noticia3Titulo").value,
    noticia3Texto: document.getElementById("noticia3Texto").value,

    eventoTitulo: document.getElementById("eventoTitulo").value,
    eventoDescricao: document.getElementById("eventoDescricao").value,
    eventoData: document.getElementById("eventoData").value,

    item1Nome: document.getElementById("item1Nome").value,
    item1Preco: document.getElementById("item1Preco").value,

    item2Nome: document.getElementById("item2Nome").value,
    item2Preco: document.getElementById("item2Preco").value
  };

  await setDoc(configRef, dados, { merge:true });

  alert("Alterações salvas com sucesso!");
}

window.salvarConfig = salvarConfig;

carregarConfig();
