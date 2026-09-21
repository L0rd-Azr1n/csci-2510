class MainGameObject extends GameObject {
    constructor() {
        super("StarShip")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {
            fillStyle: "cyan", points:Assets.star})
    }
}