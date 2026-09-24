class ChaserObject extends GameObject {
    constructor() {
        super("Chaser")
        this.addComponent(new LocatePlayerComponent())
        this.addComponent(new Polygon(), {
            fillStyle:"red", points:Assets.circle,
        })
    }
}