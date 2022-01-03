
var randomNumber1 = Math.floor(Math.random() * 3) + 1;

var randomImageSource = "images/g" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSource2 = "images/g" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 ==1 && randomNumber2 ==2) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else if (randomNumber1 ==2 && randomNumber2 == 1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 ==1 && randomNumber2 == 3) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 ==3 && randomNumber2 == 1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomNumber1 ==2 && randomNumber2 == 3) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (randomNumber1 ==3 && randomNumber2 == 2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";

}

function refreshPage(){
    window.location.reload();
} 
