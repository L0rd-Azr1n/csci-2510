class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        this.instantiate(new LevelSelectTitleObject(), new Vector2(0, -(Engine.canvas.innerHeight-30)))
    }
}