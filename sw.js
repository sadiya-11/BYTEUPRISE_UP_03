let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.querySelector('.display');

function displayTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  display.textContent = formatTime(hours) + ":" +
                        formatTime(minutes) + ":" +
                        formatTime(seconds);
}

function formatTime(time) {
  return (time < 10 ? "0" + time : time);
}

function startTimer() {
  timer = setInterval(displayTime, 1000);
  toggleButtonState(true);
}

function stopTimer() {
  clearInterval(timer);
  toggleButtonState(false);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = "00:00:00";
  toggleButtonState(false);
}

function toggleButtonState(running) {
  document.querySelector('.start-btn').disabled = running;
}

document.querySelector('.start-btn').addEventListener('click', startTimer);
document.querySelector('.stop-btn').addEventListener('click', stopTimer);
document.querySelector('.reset-btn').addEventListener('click', resetTimer);
