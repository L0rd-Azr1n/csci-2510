class LevelIcon extends GameObject {
    static lvlCount = 0

    constructor() {
        super()
        this.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Brown"})
        this.addComponent(new TextLabel(), {text:"Level {lvlCount}"})
        LevelIcon.lvlCount += 1
    }
}