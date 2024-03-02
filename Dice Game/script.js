var randomNo = Math.floor(Math.random()*6)+1;
var randomImage = "images/dice"+randomNo+".png";

var img1 = document.querySelector(".img1").setAttribute("src",randomImage);


var randomNo2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNo2+".png";

var img2 = document.querySelector(".img2").setAttribute("src",randomImage2);

var Winner = document.querySelector('h1');

if(randomNo>randomNo2) 
{
    Winner.innerHTML = "🚩Player 1 is the winner!";
}
else if (randomNo2>randomNo)
{
    Winner.innerHTML = "Player 2 is the winner🚩!";
}

else
{
    Winner.innerHTML = "Try Again!!!";
}