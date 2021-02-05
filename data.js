class Data{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Play")

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
        this.title.hide();
    }
    display(){
        this.input.position(displayWidth/2-50,displayHeight/2+175)
        this.button.position(displayWidth/2+150,displayHeight/2+175)
        
        this.button.mousePressed(()=>{
            //player.getcart();
            player.updatecarno(this.input.value())
            playercount+=1;
            //player.index = playercount;
            //player.playerset();
            player.updatecount(playercount);
            this.input.hide();
            this.button.hide();
        })
    }
}