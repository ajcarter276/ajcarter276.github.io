function sayThatWasEasy() {
  var thatWasEasy = new Audio("Smashmouth_-_Allstar.mp3");
  thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);


function sayThatWasDonkey() {
  var thatWasDonkey = new Audio("adventure.mp3");
  thatWasDonkey.play();
}

$("#wow").on("click", sayThatWasDonkey);


function sayThatWasHome() {
  var thatWasHome = new Audio("home.mp3");
  thatWasHome.play();
}

$("#Home").on("click", sayThatWasHome);