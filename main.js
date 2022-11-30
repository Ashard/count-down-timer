const countDownTo = new Date("2023-02-13");
const currentTime = new Date();
const timeRemaining = countDownTo - currentTime;

var globalDaysRemaining = getDaysRemaining(timeRemaining);
const daysDiv = document.querySelectorAll(".days");
for (var i = 0; i < daysDiv.length; i++) {
  daysDiv[i].innerHTML = globalDaysRemaining;
}

var globalHoursRemaining = getHoursRemaining(timeRemaining);
const hoursDiv = document.querySelectorAll(".hours");
for (var i = 0; i < hoursDiv.length; i++) {
  hoursDiv[i].innerHTML = globalHoursRemaining;
}

var globalMinutesRemaining = getMinutesRemaining(timeRemaining);
const minutesDiv = document.querySelectorAll(".minutes");
for (var i = 0; i < minutesDiv.length; i++) {
  minutesDiv[i].innerHTML = globalMinutesRemaining;
}

var globalSecondsRemaining = getSecondsRemaining(timeRemaining);
const secondsDiv = document.querySelectorAll(".seconds");
for (var i = 0; i < secondsDiv.length; i++) {
  secondsDiv[i].innerHTML = globalSecondsRemaining;
}

setInterval(() => {
  const currentTime = new Date();
  const timeRemaining = countDownTo - currentTime;

  const daysRemaining = getDaysRemaining(timeRemaining);
  if (daysRemaining != globalDaysRemaining) {
    const daysRemainingDiv = document.querySelector(".days-remaining-div");
    flipCard(daysRemainingDiv, daysRemaining);
    globalDaysRemaining = daysRemaining;
  }

  const hoursRemaining = getHoursRemaining(timeRemaining);
  if (hoursRemaining != globalHoursRemaining) {
    const hoursRemainingDiv = document.querySelector(".hours-remaining-div");
    flipCard(hoursRemainingDiv, hoursRemaining);
    globalHoursRemaining = hoursRemaining;
  }

  const minutesRemaining = getMinutesRemaining(timeRemaining);
  if (minutesRemaining != globalMinutesRemaining) {
    const minutesRemainingDiv = document.querySelector(
      ".minutes-remaining-div"
    );
    flipCard(minutesRemainingDiv, minutesRemaining);
    globalMinutesRemaining = minutesRemaining;
  }

  const secondsRemaining = getSecondsRemaining(timeRemaining);
  if (secondsRemaining != globalSecondsRemaining) {
    const secondsDiv = document.querySelector(".seconds-div");
    flipCard(secondsDiv, secondsRemaining);
    globalSecondsRemaining = secondsRemaining;
  }
}, 250);

function getDaysRemaining(remainingTimeMs) {
  return Math.ceil(remainingTimeMs / (1000 * 60 * 60 * 24));
}

function getHoursRemaining(remainingTimeMs) {
  return new Date(remainingTimeMs).getHours();
}

function getMinutesRemaining(remainingTimeMs) {
  return new Date(remainingTimeMs).getMinutes();
}

function getSecondsRemaining(remainingTimeMs) {
  return new Date(remainingTimeMs).getSeconds();
}

function flipCard(tileContainer, currentNumber) {
  const nextNumber =
    currentNumber == 0 ? 59 : String(currentNumber - 1).padStart(2, "0");
  const newTopDiv = document.createElement("div");
  newTopDiv.innerHTML = String(currentNumber).padStart(2, "0");
  newTopDiv.classList.add("tile-top", "flip-top");
  tileContainer.appendChild(newTopDiv);

  newTopDiv.addEventListener("animationstart", (e) => {
    const topDiv = tileContainer.querySelector(".tile-top");
    topDiv.innerHTML = nextNumber;
  });

  newTopDiv.addEventListener("animationend", (e) => {
    newTopDiv.remove();
  });

  const newBottomDiv = document.createElement("div");
  newBottomDiv.innerHTML = nextNumber;
  newBottomDiv.classList.add("tile-bottom", "flip-bottom");
  tileContainer.appendChild(newBottomDiv);
  newBottomDiv.addEventListener("animationend", (e) => {
    newBottomDiv.remove();
    const bottomDiv = tileContainer.querySelector(".tile-bottom");
    bottomDiv.innerHTML = nextNumber;
  });
}
