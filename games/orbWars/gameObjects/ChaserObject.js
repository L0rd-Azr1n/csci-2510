class ChaserObject extends GameObject {
    constructor() {
        super("Chaser")
        this.addComponent(new locatePlayerComponent())
        this.addComponent(new Polygon(), {
            fillStyle:"red", points:Assets.circle,
        })
    }
}