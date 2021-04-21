

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//IMAGE2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}


// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
// }
// else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw";
// }






//                                                   MY SOLUTION
//
// var randomNumber1 = Math.random();
// randomNumber1= Math.floor(randomNumber1*6) + 1;
// if (randomNumber1 === 1) {
//   var IMAGE1 = "images/dice1.png";
// }
// else if (randomNumber1 === 2) {
//   var IMAGE1 = "images/dice2.png";
// }
// else if (randomNumber1 === 3) {
//   var IMAGE1 = "images/dice3.png";
// }
// else if (randomNumber1 === 4) {
//   var IMAGE1 = "images/dice4.png";
// }
// else if (randomNumber1 === 5) {
//   var IMAGE1 = "images/dice5.png";
// }
// else  {
//   var IMAGE1 = "images/dice6.png";
// }
//
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", IMAGE1)
//
// var randomNumber2 = Math.random();
// randomNumber2= Math.floor(randomNumber2*6) + 1;
// if (randomNumber2 === 1) {
//   var IMAGE2 = "images/dice1.png";
// }
// else if (randomNumber2 === 2) {
//   var IMAGE2 = "images/dice2.png";
// }
// else if (randomNumber2 === 3) {
//   var IMAGE2 = "images/dice3.png";
// }
// else if (randomNumber2 === 4) {
//   var IMAGE2 = "images/dice4.png";
// }
// else if (randomNumber2 === 5) {
//   var IMAGE2 = "images/dice5.png";
// }
// else  {
//   var IMAGE2 = "images/dice6.png";
// }
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", IMAGE2)
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
// }
// else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw";
// }
