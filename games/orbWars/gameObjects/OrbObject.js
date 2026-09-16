class OrbObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new wasdMovementComponent())
        this.addComponent(new Polygon(), {
            Fillstyle: "blue", points: [
                new Vector2(0, -10),
                new Vector2(-5, 20),
                new Vector2(5, 20),
                //            new Vector2(Math.cos(1/256), Math.sin(1/256)),
                //            new Vector2(Math.cos(2/256), Math.sin(2/256)),
                //            new Vector2(Math.cos(3/256), Math.sin(3/256)),
                //            new Vector2(Math.cos(4/256), Math.sin(4/256)),
                //            new Vector2(Math.cos(5/256), Math.sin(5/256)),
                //            new Vector2(Math.cos(6/256), Math.sin(6/256)),
                //            new Vector2(Math.cos(7/256), Math.sin(7/256)),
                //            new Vector2(Math.cos(8/256), Math.sin(8/256)),
                //            new Vector2(Math.cos(9/256), Math.sin(9/256)),
                //            new Vector2(Math.cos(10/256), Math.sin(10/256)),
            ]
        })

    }
}