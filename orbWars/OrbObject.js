class OrbObject extends GameObject {
    constructor(){
        super()
        this.addComponent(new wasdMovementComponent())
        this.addComponent(new Polygon(), {Fillstyle:"blue", points: [
            new Vector2(0, -20),
            new Vector2(-15, 20),
            new Vector2(15, 20)
        ]})

    }
}