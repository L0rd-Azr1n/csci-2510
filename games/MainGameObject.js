class MainGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"cyan", points:[
            new Vector2(0, -40),
            new Vector2(-10, -20),
            new Vector2(-25, -20),]
//            new Vector2(0, -40),
//            new Vector2(0, -40),
//            new Vector2(0, -40),
//            new Vector2(0, -40),
//            new Vector2(0, -40),
//            new Vector2(0, -40)]
//        ctx.lineTo(-12, -2)
//        ctx.lineTo(-15, 20)
//        ctx.lineTo(0, 10)
//        ctx.lineTo(15, 20)
//        ctx.lineTo(12, -2)
//        ctx.lineTo(25, -20)
//        ctx.lineTo(10, -20)
        })
    }
}