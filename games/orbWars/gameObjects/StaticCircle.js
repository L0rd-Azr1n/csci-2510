class StaticCirle extends GameObject {
    constructor() {
        super("Static")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(255, 0, 0)", points:Assets.rectangle
        })
        this.transform.scale = new Vector2(2, 2)
    }
}