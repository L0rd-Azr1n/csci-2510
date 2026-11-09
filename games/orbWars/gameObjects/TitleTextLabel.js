class TitleTextLabel extends GameObject {
    constructor() {
        super("Title", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle:"Teal",
             text:"ORB WARS!", 
             font:"72px Sirin Stencil",
             textAlign:"center"
            })
        this.transform.scale = new Vector2(5,5)
    }
}