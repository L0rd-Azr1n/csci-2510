class LaserGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {
            fillStyle: "red", points: [
                new Vector2(-5, -20),
                new Vector2(-5, 0),
                new Vector2(5, 0),
                new Vector2(5, -20)
            ]
        })
    }
}