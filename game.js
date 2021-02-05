class Game {
  constructor(){}

  getstate(){
    var gamestate=database.ref('gamestate')
    gamestate.on('value',function(data){
      gamestate=data.val();
    })
  }
  updatestate(state){
    database.ref('/').update({
      gamestate:state
    })
  }

  async start(){
    
    if (gamestate===0){        
      textAlign(CENTER)
      background(bgimg)
      text("Tap space to start",displayWidth/2,displayHeight/2+200)
      player=new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      player.getcount()
      
      car1=createSprite(70,70)
      car2=createSprite(70,70)
      car3=createSprite(70,70)
      car4=createSprite(70,70)
      cars=[car1,car2,car3,car4]
    }
      
}
    play(){

      background(255)

      Player.getPlayerInfo();
      player.getcart();
      game.getstate();
      

      if(allPlayers !== undefined){
        
        background(255)

        var index = 0;
  
       
        var x = 195;
        var y;
  
        for(var plr in allPlayers){
          image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
          index = index + 1 ;
  
          
          
          x = x + 230;
        
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y

          stroke(0)
          fill(0)
          textAlign(CENTER)
          textSize(15);
          text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y-70)
  
          if (index === player.index){
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
            
          }
         
          
        }
      }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.playerset()
        //allPlayers.x+=10
      }

      for(var x in allPlayers){
        for(var i in cars){
          if(allPlayers[x].carnumber===1206 && cars[index-1]){
            cars[i].addImage(car1img)
          }
      }
      }
      
    }

    
}