let angkaBenar = Math.floor(Math.random() * 100) + 1;
let sisaPercobaan = 15;
let riwayatTebakan = [];
let gameOver = false;

let highScore = localStorage.getItem("highScore")
  ? parseInt(localStorage.getItem("highScore"))
  : null;
updateHighScoreDisplay();

document.getElementById("btnTebak").addEventListener("click", cekTebakan);
document.getElementById("tebakan").addEventListener("keypress", function (e) {
  if (e.key === "Enter") cekTebakan();
});

function cekTebakan() {
  if (gameOver) return;

  const tebakanInput = document.getElementById("tebakan");
  const tebakan = parseInt(tebakanInput.value);
  const hasil = document.getElementById("hasil");
  const tampilSkor = document.getElementById("skor");
  const tampilRiwayat = document.getElementById("riwayat");

  if (isNaN(tebakan) || tebakan < 1 || tebakan > 100) {
    hasil.textContent = "Masukkan angka yang valid (1 - 100).";
    hasil.classList.remove("success");
    return;
  }

  riwayatTebakan.push(tebakan);
  tampilRiwayat.textContent = `Tebakan sebelumnya: ${riwayatTebakan.join(", ")}`;

  if (tebakan === angkaBenar) {
    const percobaanDigunakan = 15 - sisaPercobaan + 1;
    hasil.textContent = `Tebakan kamu benar! 🎉 Kamu menebak dalam ${percobaanDigunakan} percobaan.`;
    hasil.classList.add("success");

    if (!highScore || percobaanDigunakan < highScore) {
      highScore = percobaanDigunakan;
      localStorage.setItem("highScore", highScore);
      updateHighScoreDisplay();
    }

    gameOver = true;
  } else {
    sisaPercobaan--;
    tampilSkor.textContent = `Sisa Percobaan: ${sisaPercobaan}`;
    hasil.classList.remove("success");

    let pesan = tebakan < angkaBenar ? "Terlalu rendah." : "Terlalu tinggi.";
    const selisih = Math.abs(tebakan - angkaBenar);

    if (selisih <= 5) {
      pesan += " 🔥 Hampir mendekati!";
    } else if (selisih <= 10) {
      pesan += " 🌡 Mendekati.";
    } else if (selisih > 20) {
      pesan += " ❄ Terlalu jauh!";
    }

    if (sisaPercobaan === 0) {
      hasil.textContent = `Kamu kalah! 😞 Angka yang benar adalah ${angkaBenar}.`;
      gameOver = true;
    } else {
      hasil.textContent = pesan;
    }
  }

  tebakanInput.value = "";
}

function mulaiUlang() {
  angkaBenar = Math.floor(Math.random() * 100) + 1;
  sisaPercobaan = 15;
  riwayatTebakan = [];
  gameOver = false;

  document.getElementById("tebakan").value = "";
  document.getElementById("hasil").textContent = "";
  document.getElementById("hasil").classList.remove("success");
  document.getElementById("skor").textContent = "Sisa Percobaan: 15";
  document.getElementById("riwayat").textContent = "Tebakan sebelumnya: -";
}

function updateHighScoreDisplay() {
  const display = document.getElementById("highScore");
  display.textContent = highScore
    ? `Skor Tertinggi: ${highScore} percobaan`
    : "Skor Tertinggi: -";
}
