class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        this.instantiate(new LevelSelectTitleObject(), new Vector2(Engine.canvas.width / 2, 20))

        this.instantiate(new Polygon(), new Vector2(-100, -100))
    }
}