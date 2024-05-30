var randNum1 = Math.floor(Math.random() * 6 + 1);
var randNum2 = Math.floor(Math.random() * 6 + 1);

var randImgSrc = "images/dice" + randNum1 + ".png";
var randImgSrc2 = "images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randImgSrc);
document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}