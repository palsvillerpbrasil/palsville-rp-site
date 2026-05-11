function comprarItem(nomeItem, selectId){

  const quantidade =
    document.getElementById(selectId).value;

  const mensagem =
`Olá! Quero comprar:

Item: ${nomeItem}
Quantidade: ${quantidade}`;

  const link =
`https://discord.com/channels/@me`;

  alert(mensagem);

  window.open(
    "https://discord.gg/99YTTmSz",
    "_blank"
  );

}