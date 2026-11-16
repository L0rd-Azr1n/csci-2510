class MenuScene extends Scene {
    constructor() {
        super("Beige")
        this.instantiate(new TitleTextLabel(), new Vector2((Engine.canvas.width * 0.5), (Engine.canvas.height * 0.5)))
        this.instantiate(new StartInstructionTextLabel(), new Vector2((Engine.canvas.width * 0.5), (Engine.canvas.height * 0.75)))
        let pressStart = this.instantiate(new TitleLevelControllerGameObject())
        pressStart.addComponent(new TitleLevelController(), {targetLevel:LevelSelect})
    }
}