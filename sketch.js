var canvas,database,form,game,player;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4;
var cars;

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  game = new Game();
  game.getState();
  game.start()
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
   
  if(gameState === 1){
    clear();
    game.play();
  }
    drawSprites();
  
}

