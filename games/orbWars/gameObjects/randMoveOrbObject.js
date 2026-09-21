class randMoveOrbObject extends GameObject {
    constructor() {
        super("Jitter")
        this.addComponent(new Polygon(), {
            fillStyle:"Green", points:Assets.circle
        })
        this.addComponent(new randMove(), {speed: 100})
    }
}