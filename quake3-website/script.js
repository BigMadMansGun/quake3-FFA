const ip = "2.102.134.179";
const port = 27960;

async function getServerInfo() {
  try {
    const res = await fetch(`https://api.gameserverping.com/quake3/${ip}:${port}`);
    const data = await res.json();

    document.getElementById("server-status").textContent = "🟢 Online";
    document.getElementById("map").textContent = data.map || "Unknown";
    document.getElementById("players").textContent = `${data.players.length} / ${data.maxPlayers}`;
    document.getElementById("gametype").textContent = data.gametype || "FFA";
  } catch (e) {
    document.getElementById("server-status").textContent = "🔴 Offline or unreachable";
  }
}

getServerInfo();
setInterval(getServerInfo, 30000);