var player, playerAnimation
var background1, backgroundImage
function preload(){
  playerAnimation=loadAnimation("player1.png","player3.png","player2.png")
  backgroundImage=loadImage("background.png")
}
function setup() {
  createCanvas(800,400);
  background1=createSprite(400,290,500,100)
  background1.addImage(backgroundImage)
  background1.scale=1.35
  player=createSprite(50, 320, 50, 50);
  player.addAnimation("player",playerAnimation)
  player.scale=.4
}

function draw() {
  background(0);  
  drawSprites();
}