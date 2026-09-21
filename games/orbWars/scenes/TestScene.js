class TestScene extends Scene {
    constructor(){
    super()
    this.instantiate(new OrbObject(), new Vector2(100,100))

    //test object
    this.instantiate(new StaticCirle(), new Vector2(500, 500))

    }
}