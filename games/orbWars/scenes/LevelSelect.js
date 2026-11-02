class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        LevelIcon.lvlCount = 1

        this.instantiate(new LevelSelectTitleObject(), new Vector2(Engine.canvas.width / 2, 20))
        this.instantiate(new LevelIcon(), new Vector2(-200, -200))
        this.instantiate(new LevelIcon(), new Vector2(-100, -200))
        this.instantiate(new LevelIcon(), new Vector2(-0, -200))
        this.instantiate(new LevelIcon(), new Vector2(100, -200))
        this.instantiate(new LevelIcon(), new Vector2(200, -200))
    }
}