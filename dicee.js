var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = randomDiceImage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomImageSource2 = randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if (randomDiceImage>randomDiceImage2) {
    document.querySelector("h1").innerHTML = "player 1 wins😁";
}else if(randomDiceImage<randomDiceImage2){
    document.querySelector("h1").innerHTML = "player 2 wins 😁";
}else if(randomDiceImage==randomDiceImage2){
    document.querySelector("h1").innerHTML = "🙌🙌🙌"
}