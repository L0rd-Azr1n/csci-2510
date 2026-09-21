class StaticCirle extends GameObject {
    constructor() {
        super("Static")
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points:Assets.circle
        })
        this.transform.scale = new Vector2(10, 10)
    }
}