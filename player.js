class Player{
    constructor(){
        this.index=1;
        this.distance=0;
        this.name=null;
        this.carnumber=0;
    }

    getcount(){
        var playerinfo=database.ref('playercount')
        playerinfo.on('value',(data)=>{
            playercount=data.val();
        })
    }
    updatecount(count){
        database.ref('/').update({
            playercount: count
        })
    }
    playerset(){
        var playerindex="players/player" + this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance,
            carnumber:this.carnumber
        })
    }
    getcarno(){
        var playercarno=database.ref(carnumber)
        playercarno.on('value',(data)=>{
            carnumber=data.val()
        })
    }
    updatecarno(number){
        database.ref('players/player'+this.index).update({
            carnumber:number
        })
    }
    getcart(){
        var carinfo=database.ref('car')
        carinfo.on('value',(data)=>{
            car=data.val();
        })
    }
    updatecar(count){
        database.ref('/').update({
            car:count
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}