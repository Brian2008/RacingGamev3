class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("Play!")
        this.Greeting=createElement('h3')
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.Greeting.hide();
    }
    display(){
        var Title=createElement('h2')
        Title.html("Car Racing!")
        Title.position(500,50)
        this.input.position(500,150);
        this.button.position(500,200)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1
            player.index=playerCount
            player.update(name)
            player.updateCount(playerCount);
            this.Greeting.html("Hi! "+player.name);
            this.Greeting.position(500,150);
        })
    }
}
