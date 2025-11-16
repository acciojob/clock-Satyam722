function updateTimer() {
  const timerElement = document.getElementById("timer");

  const now = new Date();
  timerElement.textContent = now.toString();
}

// Update immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
