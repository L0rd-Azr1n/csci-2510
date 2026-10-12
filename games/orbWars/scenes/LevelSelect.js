class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        this.instantiate(new LevelSelectTitleObject(), new Vector2(Engine.canvas.width / 2, 20))
    }
}