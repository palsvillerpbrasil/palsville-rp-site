export default async function handler(req, res) {
  try {
    const resposta = await fetch("http://37.148.135.48:3000/server-status");

    if (!resposta.ok) {
      throw new Error("API do servidor offline");
    }

    const dados = await resposta.json();

    res.status(200).json(dados);

  } catch (erro) {
    res.status(500).json({
      status: "offline",
      playersOnline: 0,
      maxPlayers: 20,
      rank: null,
      ping: 0,
      players: []
    });
  }
}
