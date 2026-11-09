class LevelSelect extends Scene {
    constructor() {
        super("Beige")
        LevelIcon.lvlCount = 1

        this.instantiate(new LevelSelectTitleObject(), new Vector2(Engine.canvas.width / 2, 20))
        let level01 = this.instantiate(new LevelIcon(), new Vector2(-200, -200))
        level01.target = Level01
        let level02 = this.instantiate(new LevelIcon(), new Vector2(-100, -200))
        level02.target = Level02
        let level03 = this.instantiate(new LevelIcon(), new Vector2(-0, -200))
        level03.target = Level03
        let level04 = this.instantiate(new LevelIcon(), new Vector2(100, -200))
        level04.target = Level04
        let level05 = this.instantiate(new LevelIcon(), new Vector2(200, -200))
        level05.target = Level05
    }
}