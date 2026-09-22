class BackgroundObject extends GameObject {
    constructor() {
        super("Battlefield")
        this.addComponent(new Polygon(), {fillStyle:"Beige", points:[
            new Vector2(0,0),
            new Vector2(window.innerWidth, 0),
            new Vector2(window.innerWidth, window.innerHeight),
            new Vector2(0, window.innerHeight),
        ]})
    }
}