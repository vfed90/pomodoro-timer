const startItem = document.querySelector("#start");
startItem.addEventListener("click", changeItem);

const pomodoroTimer = document.querySelector("#pomodoro-time");

let timerId;

function changeItem() {
  if (startItem.textContent === "stop") {
    startItem.textContent = "start";

    clearInterval(timerId);
  } else {
    startItem.textContent = "stop";

    timerId = setInterval(() => {
      const time = pomodoroTimer.textContent.split(":");
      let minutes = parseInt(time[0]);
      let seconds = parseInt(time[1]);

      if ((minutes === 0) & (seconds === 0)) {
        pomodoroTimer.textContent = "25:00";
        clearInterval(timerId);
        startItem.textContent = "start";
        return;
      }

      seconds--;

      if (seconds === -1) {
        minutes--;
        seconds = 59;
      }

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      pomodoroTimer.textContent = minutes + ":" + seconds;
    }, 1000);
  }
}
