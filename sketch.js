var canvas, backgroundImage;

var database;

var playercount=0;
var player,allPlayers,carnumber,car
var car5

var car1,car2,car3,car4
var car1img,car2img,car3img,car4img
var cars
var trackimg

var form,game,gamestate=0;
var form2

var bgimg,logo,logo1,bg2,bg3,bg4

function preload() {
  bgimg=loadImage("startbg.png")
  logo=loadImage("logo1.png")
  car1img=loadImage("car1.png")
  car2img=loadImage("car2.png")
  car3img=loadImage("car3.png")
  car4img=loadImage("car4.png")
  bg2=loadImage("formbg.png")
  bg3=loadImage("formbg2.png")
  bg4=loadImage("formbg3.png")
  trackimg=loadImage("track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-180);
  
  database = firebase.database();

  background(255)

  //logo1=createSprite(displayWidth/2-80,200,300,200)
  //logo1.addImage(logo)
  //.scale=0.25
  //logo1.visible=false

  car5=0

  game=new Game();
  game.getstate();
  game.start();
 
  form=new Form();
  form2=new Data();  

}

function draw(){
  
  if (gamestate===0){
    if (keyDown('space')){
      gamestate=1
      game.updatestate(1);
      background(bg2);
      //form.hide();
    }
}
  if (gamestate===1){
    //background(bg2)
    form.display();
    //form.hidden();
    //logo1.visible=true
  }
  if (playercount>=4){
    gamestate=2
    game.updatestate(2)
    form.hide();
  }
  if (gamestate===2){
    form2.display();
    background(bg4)
  }
  if (playercount===8 && gamestate===2){
    background(255)
    gamestate=3
    game.updatestate(3)
    game.play()
   
  }
  console.log(playercount)
  drawSprites();
}