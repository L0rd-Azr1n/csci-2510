class LevelIcon extends GameObject {
    static lvlCount = 0
    targetLevel

    constructor() {
        super("LevelButton", [LevelIcon.lvlCount], "UI")
        this.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Brown"})
        this.addComponent(new TextLabel(), {text:"Level " + this.tags[0]})
        LevelIcon.lvlCount += 1
        this.addComponent(new SelectLevelController(), {targetLevel:this.targetLevel})
        this.addComponent(new Collider())
    }
}