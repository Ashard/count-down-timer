var currentNumber = 56;
const countDownTo = new Date("2023-02-13");
const currentTime = new Date();
const timeRemaining = countDownTo - currentTime;
// var globalDaysRemaining = globalTimeRemaining.getDate();
const initialTimeRemaining = countDownTo - currentTime;
const initialDaysRemaining = getDaysRemaining(timeRemaining);
const initialHoursRemaining = getHoursRemaining(timeRemaining);
const initialMinutesRemaining = getMinutesRemaining(timeRemaining);
const initialSecondsRemaining = getSecondsRemaining(timeRemaining);

setInterval(() => {
  const currentTime = new Date();
  const timeRemaining = countDownTo - currentTime;

  const daysRemaining = getDaysRemaining(timeRemaining);
  if (daysRemaining != initialDaysRemaining) {
    // get the days remaining card and flip it with the flip card animation
    // set the initial days remaining to the new value
  }

  const hoursRemaining = getHoursRemaining(timeRemaining);
  if (hoursRemaining != initialHoursRemaining) {
    // same as above a
  }

  const minutesRemaining = getMinutesRemaining(timeRemaining);
  if (minutesRemaining != initialMinutesRemaining) {
    // same as above
  }

  const secondsRemaining = getSecondsRemaining(timeRemaining);
  if (secondsRemaining != initialSecondsRemaining) {
    const secondsDiv = document.querySelector("seconds-div");
    flipCard(tileContainer, secondsRemaining);
  }

  console.log("\n");
  console.log("days remaining-->" + daysRemaining);
  console.log("hours remaining-->" + hoursRemaining);
  console.log("minutes remaining-->" + minutesRemaining);
  console.log("seconds remaining-->" + secondsRemaining);

  //   console.log(timeRemaining.padStart(2, "0"));
  //   console.log(currentTime.toString());
  // console.log(countDownTo);
  //   const timeRemainingDate = new Date(timeRemaining);
  //   console.log(timeRemainingDate.toString());
}, 1000);

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

// function getHoursRemaining(remainingTimeMs) {
//   return Math.ceil(remainingTimeMs / (1000 * 60 * 60));
// }

function flipCard(tileContainer, currentNumber) {
  const nextNumber = currentNumber - 1;
  const newTopDiv = document.createElement("div");
  newTopDiv.innerHTML = currentNumber;
  newTopDiv.classList.add("tile-top", "flip-top");
  tileContainer.appendChild(newTopDiv);

  newTopDiv.addEventListener("animationstart", (e) => {
    const topDiv = document.querySelector(".tile-top");
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
    const bottomDiv = document.querySelector(".tile-bottom");
    bottomDiv.innerHTML = nextNumber;
    // currentNumber -= 1;
    // flipCard(tileContainer);
  });
}

// flipCard()

// setInterval(() => {
const tileContainer = document.querySelector(".tile-container");
// flipCard(tileContainer, 56);
// }, 3000);

// bottomDiv.innerHTML = "55";

// tileTop.classList.add("flip-top");
// tileBottom.classList.add("flip-bottom");
// for (var i = 0; i < tile.children.length; i++) {
//   var child = tile.children[i];
//   // console.log(child);
//   // console.log(child.textContent);
//   child.textContent = "55";
// }

// setInterval(() => {
//   var countdown_end = new Date((year = 2022), (month = 11), (date = 1));
//   var current_time = new Date(Date.now());
//   var time_remaining = new Date(countdown_end - current_time);

//   // update the inner html
//   const days_remaining = time_remaining.getDate();
//   const hours_remaining = time_remaining.getHours();
//   const minutes_remaining = time_remaining.getMinutes();
//   const seconds_remaining = time_remaining.getSeconds();

//   const days_element = document.getElementById("days-counter");
//   days_element.innerHTML = days_remaining;

//   const hours_element = document.getElementById("hours-counter");
//   hours_element.innerHTML = hours_remaining;

//   const minutes_element = document.getElementById("minutes-counter");
//   minutes_element.innerHTML = minutes_remaining;

//   const seconds_element = document.getElementById("seconds-counter");
//   seconds_element.innerHTML = seconds_remaining;

//   console.log("countdown end-->" + countdown_end);
//   console.log("current time-->" + current_time);
//   console.log("days remaining-->" + time_remaining.getDate());
//   console.log("hours remaining-->" + time_remaining.getHours());
//   console.log("minutes remaining-->" + time_remaining.getMinutes());
//   console.log("seconds remaining-->" + time_remaining.getSeconds());
// }, 1000);
