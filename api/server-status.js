export default async function handler(req, res) {
  try {
    const respostaServidor = await fetch("http://37.148.135.48:3000/server-status");

    if (!respostaServidor.ok) {
      throw new Error("API do servidor offline");
    }

    const dadosServidor = await respostaServidor.json();

    const respostaBattle = await fetch("https://api.battlemetrics.com/servers/38944014");
    const dadosBattle = await respostaBattle.json();

    const rank = dadosBattle?.data?.attributes?.rank || null;

    res.status(200).json({
      status: dadosServidor.status,
      playersOnline: dadosServidor.playersOnline,
      maxPlayers: dadosServidor.maxPlayers,
      ping: dadosServidor.ping,
      rank: rank
    });

  } catch (erro) {
    res.status(500).json({
      status: "offline",
      playersOnline: 0,
      maxPlayers: 20,
      ping: 0,
      rank: null
    });
  }
}
