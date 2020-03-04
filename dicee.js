var randomImageNumber1 = "dice" + getRandomInt(1, 6) + ".png";
var randomImageNumber2 = "dice" + getRandomInt(1, 6) + ".png";
var randomImageSrc1 = "images/" + randomImageNumber1;
var randomImageSrc2 = "images/" + randomImageNumber2;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
document.querySelector(".img1").setAttribute("src", randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);

if (randomImageNumber1 > randomImageNumber2) {
  document.querySelector(".heading").innerHTML = "Player 1 Wins";
}
else if (randomImageNumber1 < randomImageNumber2) {
  document.querySelector(".heading").innerHTML = "Player 2 Wins";
}
else {
  document.querySelector(".heading").innerHTML = "Tied";
}
