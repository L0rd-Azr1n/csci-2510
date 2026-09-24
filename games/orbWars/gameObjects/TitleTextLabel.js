class TitleTextLabel extends GameObject {
    constructor() {
        super()
        this.addComponent(new TextLabel(), {fillStyle:"Teal", text:"ORB WARS!"})
        this.transform.scale = new Vector2(5,5)
    }
}