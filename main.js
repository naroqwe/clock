const timeEl = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let seconds2 = seconds % 60;
  if (seconds2 < 10) seconds2 = "0" + seconds2;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  timeEl.innerText = `${hours}:${minutes}:${seconds2}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timeEl.innerText = "00:00:00";
}
