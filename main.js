var currentNumber = 56;

function flipCard(tileContainer) {
  console.log("flipCard called");
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
flipCard(tileContainer);
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
