class OrbObject extends GameObject {
    constructor() {
        super("Player")
        this.addComponent(new wasdMovementComponent())
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points:Assets.circle         
        })
    }
}