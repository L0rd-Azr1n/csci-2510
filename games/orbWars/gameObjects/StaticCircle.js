class StaticCirle extends GameObject {
    constructor() {
        super("Static")
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points:Assets.circle
        })
    }
}
