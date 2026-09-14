class MainGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {
            fillStyle: "cyan", points: [
                new Vector2(0, -40),
                new Vector2(-10, -20),
                new Vector2(-25, -20),
                new Vector2(-12, -2),
                new Vector2(-15, 20),
                new Vector2(0, 10),
                new Vector2(15, 20),
                new Vector2(12, -2),
                new Vector2(25, -20),
                new Vector2(10, -20)]
        })
    }
}