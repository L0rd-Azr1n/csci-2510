class MenuScene extends Scene {
    constructor() {
        super()
        this.instantiate(new TitleTextLabel(), new Vector2(Engine.canvas.width, Engine.canvas.height))
        this.instantiate(new StartInstructionTextLabel(), new Vector2(-75, 125))
        this.instantiate(new LevelControllerGameObject())
    }
}