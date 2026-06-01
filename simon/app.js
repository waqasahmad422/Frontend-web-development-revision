const COLORS = [0, 1, 2, 3];
const FREQS = [415, 310, 252, 209];
const btns = COLORS.map((i) => document.getElementById("b" + i));
const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const bestEl = document.getElementById("best");
const startBtn = document.getElementById("startBtn");

let sequence = [],
  playerIdx = 0,
  score = 0,
  best = 0;
let accepting = false,
  busy = false;

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let actx = null;

function getCtx() {
  if (!actx) actx = new AudioCtx();
  return actx;
}

function playTone(idx, dur = 200) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.value = FREQS[idx];
  gain.gain.setValueAtTime(0.35, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur / 1000);
  osc.start();
  osc.stop(ctx.currentTime + dur / 1000);
}

function playError() {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sawtooth";
  osc.frequency.value = 90;
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}

function flashBtn(idx, dur = 300) {
  return new Promise((res) => {
    playTone(idx, dur);
    btns[idx].classList.add("lit");
    setTimeout(() => {
      btns[idx].classList.remove("lit");
      res();
    }, dur);
  });
}

async function showSequence() {
  busy = true;
  accepting = false;
  statusEl.textContent = "Watch…";
  await sleep(600);
  for (let i = 0; i < sequence.length; i++) {
    await flashBtn(sequence[i], 380);
    await sleep(140);
  }
  accepting = true;
  busy = false;
  statusEl.textContent = "Your turn";
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function nextRound() {
  sequence.push(Math.floor(Math.random() * 4));
  score = sequence.length - 1;
  scoreEl.textContent = score;
  playerIdx = 0;
  await showSequence();
}

async function startGame() {
  sequence = [];
  score = 0;
  playerIdx = 0;
  scoreEl.textContent = "0";
  startBtn.textContent = "Restart";
  await nextRound();
}

async function handlePress(idx) {
  if (!accepting || busy) return;
  await flashBtn(idx, 200);
  if (idx === sequence[playerIdx]) {
    playerIdx++;
    if (playerIdx === sequence.length) {
      accepting = false;
      score = sequence.length;
      scoreEl.textContent = score;
      if (score > best) {
        best = score;
        bestEl.textContent = best;
      }
      statusEl.textContent = "✓ Nice!";
      await sleep(700);
      await nextRound();
    }
  } else {
    accepting = false;
    playError();
    statusEl.textContent = "Game over — round " + sequence.length;
    if (score > best) {
      best = score;
      bestEl.textContent = best;
    }
    scoreEl.textContent = score;
    startBtn.textContent = "Play Again";
    btns.forEach((b) => b.classList.remove("lit"));
    await sleep(300);
    for (let i = 0; i < 3; i++) {
      btns.forEach((b) => (b.style.opacity = "0.2"));
      await sleep(180);
      btns.forEach((b) => (b.style.opacity = ""));
      await sleep(180);
    }
  }
}

btns.forEach((b, i) => {
  b.addEventListener("click", () => handlePress(i));
});

startBtn.addEventListener("click", () => {
  if (!busy) startGame();
});
