class StaticCirle extends GameObject {
    constructor() {
        super()
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points: [
                new Vector2(0, -10),
                new Vector2(-10, 0),
                new Vector2(0, 10),
                new Vector2(10, 0),
            ]
        })
    }
}