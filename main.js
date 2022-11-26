const tileTop = document.querySelector(".tile-top");
// console.log();
// add elements here and add the flip class to them instead of modifying the original
tileTop.classList.add("flip-top");

const tileBottom = document.querySelector(".tile-bottom");
tileBottom.classList.add("flip-bottom");
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
