// first image
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage1 = "dice" + randomNumber1 + "_1.png";

let randomImageSource1 = "https://www.linkpicture.com/q/" + randomDiceImage1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// second image
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + "_1.png";

let randomImageSource2 = "https://www.linkpicture.com/q/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// decides winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}