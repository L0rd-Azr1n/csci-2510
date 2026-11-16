class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        LevelIcon.lvlCount = 1

        this.instantiate(new LevelSelectTitleObject(), new Vector2(Engine.canvas.width * 0.5, 20))
        let level01 = this.instantiate(new LevelIcon(), new Vector2(200, 200))
        level01.targetLevel = Level01
        let level02 = this.instantiate(new LevelIcon(), new Vector2(300, 200))
        level02.targetLevel = Level02
        let level03 = this.instantiate(new LevelIcon(), new Vector2(400, 200))
        level03.targetLevel = Level03
        let level04 = this.instantiate(new LevelIcon(), new Vector2(500, 200))
        level04.targetLevel = Level04
        let level05 = this.instantiate(new LevelIcon(), new Vector2(600, 200))
        level05.targetLevel = Level05
    }
}