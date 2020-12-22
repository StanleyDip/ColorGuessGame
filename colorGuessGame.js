var numberSquares=6;
var colors=generateRandomColors(numberSquares);
var squares =document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisplay.textContent =pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
    numberSquares=3;	
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for (var i = 0; i < squares.length; i++) {
	 if(colors[i]){
       squares[i].style.backgroundColor=colors[i];
	 }
	 else{
squares[i].style.display="none ";
	 }
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberSquares=6;
colors=generateRandomColors(numberSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for (var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor=colors[i];
squares[i].style.display="block";
	}
});


resetButton.addEventListener("click", function(){
	colors=generateRandomColors(numberSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor= colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor= colors[i];
	
	squares[i].addEventListener("click",function(){
		 var clickedColor = this.style.backgroundColor;
		 if(clickedColor===pickedColor){
		 	messageDisplay.textContent="Correct!";
		 	resetButton.textContent="Play Again?";
		 	h1.style.backgroundColor=clickedColor;
		 changeColors(clickedColor);
		}
		 else{
		 	this.style.backgroundColor= "#232323";
		 	messageDisplay.textContent="Try Again";
		 }
	});
}

function changeColors(color){
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=color;
}
}

function pickColor(){
 var random =Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0; i<num ; i++){
     arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
 var r=Math.floor(Math.random()*256);
 var g=Math.floor(Math.random()*256);
 var b=Math.floor(Math.random()*256);
   return "rgb(" + r +", "+g+", "+b +")";
}