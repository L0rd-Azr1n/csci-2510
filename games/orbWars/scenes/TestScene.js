class TestScene extends Scene {
    constructor(){
    super()
    this.instantiate(new OrbObject(), new Vector2(600,200))

    //test object
    this.instantiate(new StaticCirle(), new Vector2(200, 200))

    this.instantiate(new ChaserObject(), new Vector2(500, 500))

    this.instantiate(new randMoveOrbObject, new Vector2(250, 700))

    }
}