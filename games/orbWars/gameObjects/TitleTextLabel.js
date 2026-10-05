class TitleTextLabel extends GameObject {
    constructor() {
        super("Title", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle:"Teal", text:"ORB WARS!", font:"14px Sirin Stencil"})
        this.transform.scale = new Vector2(5,5)
    }
}