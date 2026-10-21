class LaserGameObject extends GameObject {
    constructor() {
        super("Laser", [], "lasers")
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {
            fillStyle: "red", points:Assets.rectangle})
        this.transform.scale = new Vector2(0.5, 0.5)
        this.addComponent(new Collider())
    }
}