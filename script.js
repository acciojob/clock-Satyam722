window.onload = function () {
  function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = new Date().toString();
  }

  updateTimer();
  setInterval(updateTimer, 1000);
};
