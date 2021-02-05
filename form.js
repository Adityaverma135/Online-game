class Form{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Play")
        this.greeting=createElement('h2')
        this.title=createElement('h2')
        this.reset=createButton("Reset")
        this.input2=createInput("");
        this.button2=createButton("Play")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
        this.title.hide();
    }
    display(){

        this.input.position(displayWidth/2-130,displayHeight/2-65)
        this.button.position(displayWidth/2-70,displayHeight/2+20 );
        this.reset.position(displayWidth-100,30)

        this.button.mousePressed(()=>{
            
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.playerset();
            player.updatecount(playercount);
            this.greeting.html("" + player.name)
            this.greeting.position(displayWidth/2-500,displayHeight/2-25);
            background(bg3)
          });
          this.reset.mousePressed(()=>{
              game.updatestate(0)
              player.updatecount(0)
              game.updatecar(0)
              database.ref('/').update({
                players:null
              })
          })
    }
}