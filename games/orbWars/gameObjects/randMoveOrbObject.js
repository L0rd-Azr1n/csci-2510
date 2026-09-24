class RandMoveOrbObject extends GameObject {
    constructor() {
        super("Jitter")
        this.addComponent(new Polygon(), {
            fillStyle:"Green", points:Assets.circle
        })
        this.addComponent(new RandMove(), {speed: 100})
    }
}