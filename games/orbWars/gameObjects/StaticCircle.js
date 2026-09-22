class StaticCirle extends GameObject {
    constructor() {
        super("Static")
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points:Assets.rectangle
        })
        this.transform.scale = new Vector2(2, 2)
    }
}