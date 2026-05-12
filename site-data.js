import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByM0TF6UZevEf8Xk0swZsRJZp6JF-UaKk",
  authDomain: "palsville-rp.firebaseapp.com",
  projectId: "palsville-rp",
  storageBucket: "palsville-rp.firebasestorage.app",
  messagingSenderId: "955740604256",
  appId: "1:955740604256:web:f4735d79c66f5a66d68005"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarEventos(){
  const container = document.getElementById("eventos-container");

  if(!container){
    return;
  }

  container.innerHTML = "";

  try{
    const eventosSnapshot = await getDocs(collection(db, "eventos"));

    eventosSnapshot.forEach((documento) => {
      const evento = documento.data();

      container.innerHTML += `
        <div class="evento-card">
          <img src="${evento.imagem}" alt="${evento.titulo}">

          <div class="evento-info">
            <h3>${evento.titulo}</h3>
            <p>${evento.descricao}</p>
          </div>
        </div>
      `;
    });

  }catch(erro){
    container.innerHTML = `
      <p style="color:white; text-align:center;">
        Não foi possível carregar os eventos.
      </p>
    `;
  }
}

carregarEventos();
